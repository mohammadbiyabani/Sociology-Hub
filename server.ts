import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy GoogleGenAI client
function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in the environment.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Language helper instruction
function getLanguageInstruction(language?: string): string {
  if (language === "hi") {
    return "Respond entirely in high-quality Hindi (हिंदी). Use appropriate sociological terminology (e.g., समाज, संस्कृति, समाजीकरण, ऐतिहासिक भौतिकवाद, अलगाव, सामाजिक तथ्य, संस्कृतिकरण, प्रभुत्वशाली जाति, आदत/हैबिटस, आदि), adapting explanations to the requested depth (from simple intuitive Hindi for school students to rigorous academic Hindi for MA/UGC-NET/UPSC). Provide key English terms in brackets for clarity.";
  }
  if (language === "te") {
    return "Respond entirely in high-quality Telugu (తెలుగు). Use appropriate Telugu sociological terminology (e.g., సమాజం, సంస్కృతి, సాంఘికీకరణ, చారిత్రక భౌతికవాదం, పరాయీకరణ, సామాజిక వాస్తవాలు, సంస్కృతీకరణం, ఆధిపత్య కులం, నిర్మితీయత, పద్ధతిశాస్త్రం, మొదలైనవి), adapting explanations to the requested depth. Provide key English terms in brackets for clarity.";
  }
  return "Respond in clear, pedagogically structured English tailored to the student's academic level (ranging from beginner-friendly for High School/BA to advanced theoretical depth for MA, UGC-NET, and UPSC Civil Services).";
}

// Helper delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Fallback helper for handling transient 503 high-demand spikes & rate limits
async function generateWithFallback(ai: GoogleGenAI, config: { contents: any; config?: any }) {
  const models = ["gemini-3.8-flash", "gemini-flash-latest", "gemini-3.1-flash-lite", "gemini-3.1-pro-preview"];
  let lastError: any = null;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: config.contents,
          config: config.config,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const msg = String(err?.message || "");
        const status = err?.status || err?.code || 0;
        const isTransient =
          status === 503 ||
          status === 429 ||
          msg.includes("503") ||
          msg.includes("429") ||
          msg.includes("high demand") ||
          msg.includes("UNAVAILABLE") ||
          msg.includes("ResourceExhausted") ||
          msg.includes("temporarily");

        if (isTransient && attempt === 0) {
          // Brief pause on temporary spike before retrying same model
          await delay(800);
          continue;
        }
        // Advance to next model candidate
        break;
      }
    }
  }

  throw lastError;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// 1. AI Tutor Chat Endpoint
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, history = [], language = "en", contextTopic } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();
    const langInstruction = getLanguageInstruction(language);

    const systemInstruction = `You are the chief multilingual AI Tutor for the "Sociology Study Hub & AI Tutor", serving ALL Sociology students (High School / Class 11-12, BA Degree, MA Postgraduate, UGC-NET, and Competitive Exams / UPSC Civil Services).
You possess deep expertise in:
1. Basic Concepts & Introduction to Sociology (Society, Community, Culture, Norms & Values, Socialization, Social Institutions, Groups, Social Control).
2. Sociological Theories & Thinkers (Classical: Marx, Weber, Durkheim; Modern & Contemporary: Parsons, Merton, Foucault, Bourdieu, Giddens).
3. Research Methods & Social Statistics (Positivism vs Interpretivism, Hermeneutics, Quantitative & Qualitative techniques, Sampling, Hypothesis, Measures of Central Tendency & Dispersion, Chi-Square).
4. Indian Society, Social Change & Stratification (Caste, Class, Gender, Tribe, Religion, Rural-Urban Transformation, Indian Thinkers like Srinivas, Ambedkar, Ghurye, Karve, Mukerji).
5. Examination Formats & Marking Standards (from 5-mark school/undergrad points to 15/20-mark UPSC and UGC-NET Paper II depth).

Language directive: ${langInstruction}
${contextTopic ? `Current Context/Module Focus: ${contextTopic}` : ""}

Teaching Style & Scalable Depth:
- Calibrate the depth of your explanation to the user's level or prompt context. If the user asks for a simple, beginner-friendly explanation, explain using intuitive real-life analogies and everyday scenarios without heavy jargon. If they ask for BA, MA, UGC-NET, or UPSC, provide advanced academic rigor with epistemological context, seminal books, dates, and theoretical counter-arguments.
- Always connect theoretical concepts to concrete thinkers, seminal books/years, and real-world empirical examples (especially in the Indian context when relevant).
- Format responses cleanly with Markdown: bold concept terms, bullet points, and concise section headers.
- If the user asks in Hindi or Telugu, or requests "Explain in Telugu" / "Explain in Hindi", follow their requested language strictly while preserving theoretical precision.`;

    // Construct contents from history
    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const item of history.slice(-8)) {
        if (item.role === "user" || item.role === "model") {
          contents.push({
            role: item.role,
            parts: [{ text: item.text || item.content || "" }],
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await generateWithFallback(ai, {
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "No response generated.";
    return res.json({ reply });
  } catch (error: any) {
    const errorMsg = String(error?.message || "");
    const isBusy = errorMsg.includes("503") || errorMsg.includes("high demand") || errorMsg.includes("UNAVAILABLE");
    const friendlyMessage = isBusy
      ? "The AI Tutor is currently experiencing high demand on the model servers. Please try sending your question again in a few seconds."
      : "The AI Tutor could not process the question right now. Please try again in a moment.";

    return res.status(200).json({
      reply: `> ⚠️ **Notice / గమనిక / सूचना:** ${friendlyMessage}\n\n*You can continue using all offline syllabus modules, thinker profiles, and notes in the meantime.*`,
    });
  }
});

// 2. 15/20-Mark University Essay Answer Generator
app.post("/api/ai/essay", async (req, res) => {
  try {
    const {
      topic,
      marks = 15,
      language = "en",
      customFocus = "",
      moduleName = "",
    } = req.body;

    if (!topic) {
      return res.status(400).json({ error: "Topic/question is required" });
    }

    const ai = getGeminiClient();
    const langInstruction = getLanguageInstruction(language);

    const prompt = `Generate a comprehensive, structured model answer and outline for a Sociology examination question:
Question/Topic: "${topic}"
Marks Allocated: ${marks} Marks (${marks <= 10 ? "Structured 500-700 words concise answer with crisp points and clear definitions" : marks <= 15 ? "Standard 800-1000 words university answer with theoretical debates" : "Advanced 1200-1500 words postgraduate/UPSC comprehensive treatise"})
${moduleName ? `Module: ${moduleName}` : ""}
${customFocus ? `Target Level / Specific Focus: ${customFocus}` : "Target Level: Comprehensive (appropriate for undergraduate and postgraduate examinations)"}

Language Directive: ${langInstruction}

Structure the answer clearly using standard academic exam patterns:
# Title & Marks Breakdown
### Examination Outline (Quick roadmap of key arguments)

## 1. Introduction & Conceptual Definition
- Clear definition of core concepts and etymological/epistemological origin.
- Historical & societal background.
- Central thesis statement.

## 2. Theoretical Framework & Arguments
- Foundational thinkers (with major works and seminal publication years).
- Key propositions, mechanisms, and internal logic.
- Comparative viewpoints across sociological schools.

## 3. Critical Evaluation & Debates
- Major sociological critiques (Functionalist vs Marxist vs Interpretivist vs Feminist vs Subaltern).
- Methodological and empirical limitations.

## 4. Indian Context & Real-World Fieldwork Evidence
- Empirical application to Indian society (e.g., Srinivas, Ambedkar, Ghurye, Karve, Beteille, or contemporary legal/policy cases).
- Relevant Indian sociological studies, surveys, or demographic trends.

## 5. Conclusion & Synthesized Perspective
- Summary of primary insights.
- Contemporary relevance in modern/digital society.

---
### 📌 Master Scoring Checklist:
List 6-8 essential keywords, thinkers, and conceptual terms that an examiner checks to award maximum marks for this answer.`;

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction:
          "You are an expert Sociology Professor and examination evaluator across High School, BA, MA, UGC-NET, and UPSC Civil Services examination boards. Provide an exceptionally accurate, structured, and pedagogically rich model answer.",
        temperature: 0.6,
      },
    });

    const essay = response.text || "";
    return res.json({ essay, outline: essay });
  } catch (error: any) {
    const errorMsg = String(error?.message || "");
    const isBusy = errorMsg.includes("503") || errorMsg.includes("high demand") || errorMsg.includes("UNAVAILABLE");
    const friendlyMessage = isBusy
      ? "The essay model is currently experiencing high demand. Please click 'Generate Model Answer' again in a few moments."
      : "Could not generate the model answer right now. Please try again shortly.";

    const fallbackContent = `> ⚠️ **Service Notice:** ${friendlyMessage}\n\n### Model Outline Recovery:\n- **Topic:** ${req.body.topic || "Sociology Question"}\n- **Suggested Approach:** Introduction -> Theoretical Traditions (Marx / Weber / Durkheim) -> Indian Fieldwork (Srinivas / Ambedkar / Ghurye) -> Critical Evaluation -> Conclusion.\n\n*Please tap 'Generate Model Answer' again to retry.*`;

    return res.status(200).json({
      essay: fallbackContent,
      outline: fallbackContent,
    });
  }
});

// 3. Textbook & Material Workspace Analyzer
app.post("/api/ai/notes-workspace", async (req, res) => {
  try {
    const { text, action = "all", actionType, language = "en" } = req.body;
    const effectiveAction = actionType || action || "all";
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: "Source text is required" });
    }

    const ai = getGeminiClient();
    const langInstruction = getLanguageInstruction(language);

    let prompt = "";
    if (effectiveAction === "summary") {
      prompt = `Analyze the following sociological text/chapter notes:
---
${text.slice(0, 15000)}
---
Generate:
1. Executive Chapter Summary (300-400 words)
2. 5-7 Key Conceptual Takeaways with bullet points
3. Major Thinkers and Theoretical Schools cited

Language Directive: ${langInstruction}`;
    } else if (effectiveAction === "definitions" || effectiveAction === "definitions_diagrams") {
      prompt = `Analyze the following sociological text/chapter notes:
---
${text.slice(0, 15000)}
---
Generate:
1. Exam-Ready Definitions Glossary (Term, Exact Definition, Sociologist/Context, Exam Tip)
2. Conceptual Diagrams & Flowcharts (Provide clear ASCII/Unicode diagrams, hierarchical tree structures, and step-by-step analytical models that students can reproduce directly in university answer sheets)

Language Directive: ${langInstruction}`;
    } else if (effectiveAction === "questions" || effectiveAction === "practice_questions") {
      prompt = `Analyze the following sociological text/chapter notes:
---
${text.slice(0, 15000)}
---
Generate strictly from the text provided:
1. 3 UGC-NET style Multiple Choice Questions (with 4 options, marked correct answer, and explanation)
2. 3 Short Answer Questions (5 Marks each) with expected outline
3. 2 Comprehensive Essay Questions (15/20 Marks each) with key points to cover

Language Directive: ${langInstruction}`;
    } else {
      // "all" action
      prompt = `Analyze the following MA Sociology textbook chapter / reading material excerpt:
---
${text.slice(0, 15000)}
---
Generate a complete, three-part study dossier:

# Part 1: Key Takeaways & Chapter Summary
- Core central thesis
- 6 Essential theoretical propositions
- Thinkers and their theoretical contributions mentioned

# Part 2: Exam-Ready Definitions & Conceptual Diagrams
- Glossary of 4-6 crucial technical terms with rigorous academic definitions
- 2 Conceptual Flowcharts / ASCII Schemas representing the mechanisms or structural relationships described in the text (easy for students to draw in exam papers)

# Part 3: Practice Questions (Based Strictly on this Material)
- 3 UGC-NET Style MCQs (with 4 options, correct answer, and explanation)
- 2 Short-Answer Questions (5 marks each) with model bullet answers
- 1 University Essay Question (15/20 marks) with structured approach outline

Language Directive: ${langInstruction}`;
    }

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction:
          "You are a specialized MA Sociology Academic Mentor. Your task is to transform dense academic readings, chapter excerpts, and research articles into clear, exam-winning study materials.",
        temperature: 0.5,
      },
    });

    const result = response.text || "";
    return res.json({ result });
  } catch (error: any) {
    const errorMsg = String(error?.message || "");
    const isBusy = errorMsg.includes("503") || errorMsg.includes("high demand") || errorMsg.includes("UNAVAILABLE");
    const friendlyMessage = isBusy
      ? "The analysis model is currently experiencing high demand. Please click the analysis button again in a moment."
      : "Could not complete text analysis at this time. Please retry shortly.";

    return res.status(200).json({
      result: `> ⚠️ **Service Notice:** ${friendlyMessage}\n\n*Your pasted textbook excerpt remains intact in the editor above. Tap 'Analyze & Generate Study Dossier' again to retry.*`,
    });
  }
});

// 4. UGC-NET Quiz Generator
app.post("/api/ai/generate-quiz", async (req, res) => {
  try {
    const { module = "All Modules", topic = "General", count = 5, language = "en" } = req.body;
    const ai = getGeminiClient();
    const langInstruction = getLanguageInstruction(language);

    const prompt = `Generate ${count} high-standard UGC-NET Sociology Paper II Multiple Choice Questions (MCQs) on the following module/topic:
Module: "${module}"
Topic Focus: "${topic}"

Language Directive: ${langInstruction}

Return a valid JSON array of objects with the following schema:
[
  {
    "id": 1,
    "question": "Question text...",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Detailed theoretical explanation citing the thinker, concept, or seminal book...",
    "thinkerOrConcept": "e.g. Max Weber - Bureaucracy"
  }
]
Only return valid JSON without markdown wrapping or commentary.`;

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction:
          "You are the senior examiner for the UGC-NET Sociology examination. Create authentic, challenging questions that test conceptual understanding, thinkers, assertions/reasons, and Indian sociological studies.",
        temperature: 0.6,
        responseMimeType: "application/json",
      },
    });

    const rawText = response.text || "[]";
    let questions = [];
    try {
      questions = JSON.parse(rawText);
    } catch {
      // Fallback in case of parse error
      questions = [];
    }

    return res.json({ questions });
  } catch {
    // Return empty array so frontend falls back seamlessly to the offline quiz bank
    return res.status(200).json({ questions: [] });
  }
});

// 5. Quick Concept Explainer
app.post("/api/ai/quick-explain", async (req, res) => {
  try {
    const { concept, targetLanguage, language, context = "" } = req.body;
    const effectiveLang = targetLanguage || language || "en";
    if (!concept) {
      return res.status(400).json({ error: "Concept is required" });
    }

    const ai = getGeminiClient();
    const langInstruction = getLanguageInstruction(effectiveLang);

    const prompt = `Provide a rapid, high-impact conceptual breakdown for MA Sociology students:
Concept/Thinker: "${concept}"
${context ? `Context: ${context}` : ""}

Language Directive: ${langInstruction}

Provide:
1. One-sentence core academic definition.
2. The originator/primary theorist, seminal book, and year.
3. The core mechanism/how it works.
4. A memorable real-world analogy or Indian empirical example.
5. Common exam pitfall/distinction (what students frequently confuse it with).`;

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction: "You are a concise, brilliant sociology tutor.",
        temperature: 0.5,
      },
    });

    return res.json({ explanation: response.text || "" });
  } catch (error: any) {
    const errorMsg = String(error?.message || "");
    const isBusy = errorMsg.includes("503") || errorMsg.includes("high demand") || errorMsg.includes("UNAVAILABLE");
    const friendlyMessage = isBusy
      ? "AI explainer is busy due to temporary demand spikes. Please tap again to retry."
      : "Could not load instant explanation right now. Please try again.";

    return res.status(200).json({
      explanation: `> ⚠️ **Notice:** ${friendlyMessage}\n\n*Check the syllabus concept definitions in the active module for offline details.*`,
    });
  }
});

// Vite Middleware for Development / Static files for Production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sociology Study Hub & AI Tutor server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
