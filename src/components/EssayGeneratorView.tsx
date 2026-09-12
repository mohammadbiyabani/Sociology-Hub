import React, { useState } from 'react';
import Markdown from 'react-markdown';
import {
  FileText,
  Sparkles,
  Copy,
  Check,
  Download,
  BookOpen,
  Send,
  Volume2,
  VolumeX,
  Layers,
  Award,
  HelpCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { curatedEssayQuestions } from '../data/syllabus';

interface EssayGeneratorViewProps {
  language: Language;
  initialTopic?: string;
}

export const EssayGeneratorView: React.FC<EssayGeneratorViewProps> = ({
  language,
  initialTopic,
}) => {
  const t = translations[language];
  const [topic, setTopic] = useState(initialTopic || curatedEssayQuestions[0].title);
  const [marks, setMarks] = useState<10 | 15 | 20>(20);
  const [answerLanguage, setAnswerLanguage] = useState<Language>(language);
  const [customFocus, setCustomFocus] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedAnswer, setGeneratedAnswer] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!topic.trim() || loading) return;

    setLoading(true);
    setGeneratedAnswer('');

    try {
      const res = await fetch('/api/ai/essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          marks,
          language: answerLanguage,
          customFocus,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error ${res.status}`);
      }

      const data = await res.json();
      setGeneratedAnswer(data.outline || 'No response from essay generator.');
    } catch (err: any) {
      console.error('Essay generation error:', err);
      setGeneratedAnswer(`**Error generating essay:** ${err.message}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generatedAnswer) return;
    navigator.clipboard.writeText(generatedAnswer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedAnswer) return;
    const element = document.createElement('a');
    const file = new Blob([generatedAnswer], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `MA_Sociology_${marks}M_Answer_${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window) || !generatedAnswer) return;

    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = generatedAnswer.replace(/[*#_`>]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText.slice(0, 2000));

    if (answerLanguage === 'hi') {
      utterance.lang = 'hi-IN';
    } else if (answerLanguage === 'te') {
      utterance.lang = 'te-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Master's Examination Answer Studio</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.essay.title}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.essay.subtitle}
          </p>
        </div>

        {/* Generator Form */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-xs space-y-5">
          {/* Curated Presets Carousel */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 block">
              {t.essay.presetsLabel}
            </label>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {curatedEssayQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setTopic(q.title);
                    setMarks(q.marks);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700 text-xs text-left whitespace-nowrap transition cursor-pointer shrink-0"
                >
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400 mr-1">
                    [{q.marks}M]
                  </span>
                  {q.title.slice(0, 50)}...
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            {/* Question Input */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                {t.essay.topicLabel}
              </label>
              <textarea
                id="essay-topic-input"
                rows={3}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={t.essay.topicPlaceholder}
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Marks & Language Selector Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {t.essay.marksLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[10, 15, 20].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMarks(m as 10 | 15 | 20)}
                      className={`py-2 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        marks === m
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                      }`}
                    >
                      {m} Marks
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {t.essay.languageLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { code: 'en', label: 'English' },
                    { code: 'hi', label: 'हिंदी' },
                    { code: 'te', label: 'తెలుగు' },
                  ].map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setAnswerLanguage(l.code as Language)}
                      className={`py-2 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        answerLanguage === l.code
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {t.essay.customFocusLabel}
                </label>
                <input
                  type="text"
                  value={customFocus}
                  onChange={(e) => setCustomFocus(e.target.value)}
                  placeholder={t.essay.customFocusPlaceholder}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              id="generate-essay-submit-btn"
              type="submit"
              disabled={loading || !topic.trim()}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:opacity-50 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{loading ? t.actions.generating : t.essay.generateBtn}</span>
            </button>
          </form>
        </div>

        {/* Generated Answer Display */}
        {generatedAnswer && (
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/60 p-6 md:p-8 shadow-md space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {marks} Marks Model Answer
                </span>
                <span className="text-xs text-slate-500 uppercase font-bold">
                  {answerLanguage.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSpeak}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition cursor-pointer"
                >
                  {speaking ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-amber-500" />
                      <span>Stop Audio</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Read Aloud</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.actions.copyText}</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download (.md)</span>
                </button>
              </div>
            </div>

            <div className="markdown-body prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:text-lg prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-800 prose-h2:pb-2 prose-h3:text-base prose-p:my-2 prose-ul:my-2">
              <Markdown>{generatedAnswer}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
