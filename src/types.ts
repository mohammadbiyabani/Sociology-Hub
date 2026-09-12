export type Language = 'en' | 'hi' | 'te';

export type AppTab = 'syllabus' | 'tutor' | 'essay' | 'quiz' | 'workspace';

export type AcademicLevel = 'all' | 'highschool' | 'ba' | 'ma' | 'ugc_net_upsc';

export interface ScalableConceptDepth {
  basic: string; // High School / Beginner level
  undergraduate: string; // BA Level
  advanced: string; // MA, UGC-NET, UPSC Civil Services depth
}

export interface Thinker {
  id: string;
  name: string;
  nativeName: {
    hi: string;
    te: string;
  };
  period: string;
  nationality: string;
  school: string;
  keyWorks: { title: string; year: number }[];
  coreConcepts: {
    title: string;
    nativeTitle?: { hi: string; te: string };
    summary: string;
    keyPoints: string[];
    depth?: ScalableConceptDepth;
    indianApplication?: string;
  }[];
  criticalPerspective: string;
}

export interface SyllabusModule {
  id: string;
  number: number;
  title: string;
  nativeTitle: {
    hi: string;
    te: string;
  };
  targetLevels?: string[];
  description: string;
  topics: {
    title: string;
    nativeTitle: { hi: string; te: string };
    content: string;
    keyTerms: string[];
    depth?: ScalableConceptDepth;
  }[];
  thinkers?: Thinker[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  language?: Language;
}

export interface EssayRequest {
  topic: string;
  marks: 10 | 15 | 20;
  language: Language;
  customFocus?: string;
  moduleName?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  module?: string;
  thinkerOrConcept?: string;
}

export interface SavedNote {
  id: string;
  title: string;
  excerpt: string;
  analysis: string;
  date: string;
  language: Language;
}
