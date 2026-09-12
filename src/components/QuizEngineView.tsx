import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Award,
  Timer,
  BookOpen,
} from 'lucide-react';
import { Language, QuizQuestion } from '../types';
import { staticQuizQuestions } from '../data/syllabus';
import { translations } from '../translations';

interface QuizEngineViewProps {
  language: Language;
}

export const QuizEngineView: React.FC<QuizEngineViewProps> = ({ language }) => {
  const t = translations[language];
  const [questions, setQuestions] = useState<QuizQuestion[]>(staticQuizQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [filterModule, setFilterModule] = useState<string>('all');
  const [generatingAI, setGeneratingAI] = useState(false);

  const filteredQuestions =
    filterModule === 'all'
      ? questions
      : questions.filter((q) => q.module?.toLowerCase().includes(filterModule.toLowerCase()));

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleGenerateAIQuestions = async () => {
    setGeneratingAI(true);
    try {
      const res = await fetch('/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          module: filterModule === 'all' ? 'Classical & Modern Theories' : filterModule,
          count: 5,
          language,
        }),
      });

      if (!res.ok) throw new Error('Failed to generate AI quiz');
      const data = await res.json();
      if (Array.isArray(data.questions) && data.questions.length > 0) {
        setQuestions((prev) => [...data.questions, ...prev]);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setQuizFinished(false);
      }
    } catch (err) {
      console.error('Quiz AI generation error:', err);
    } finally {
      setGeneratingAI(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>UGC-NET Sociology Paper II & State SET</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.quiz.title}
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.quiz.subtitle}
            </p>
          </div>

          <button
            onClick={handleGenerateAIQuestions}
            disabled={generatingAI}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs shadow-sm transition cursor-pointer disabled:opacity-50 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>{generatingAI ? 'Generating AI Questions...' : t.quiz.generateAI}</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span>{t.quiz.filterModule}</span>
            <select
              value={filterModule}
              onChange={(e) => {
                setFilterModule(e.target.value);
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
                setQuizFinished(false);
              }}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">All Modules (Full Mock Test)</option>
              <option value="Module 1">Module 1: Basic Concepts & Introduction</option>
              <option value="Module 2">Module 2: Sociological Theories & Thinkers</option>
              <option value="Module 3">Module 3: Research Methodology & Statistics</option>
              <option value="Module 4">Module 4: Indian Society & Stratification</option>
              <option value="Module 5">Module 5: Exam & Quiz Hub</option>
            </select>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <span>
              Question {currentIndex + 1} of {filteredQuestions.length}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
              Score: {score} / {filteredQuestions.length}
            </span>
          </div>
        </div>

        {/* Question Card */}
        {!quizFinished && currentQ ? (
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
            {/* Tag / Category */}
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {currentQ.module || 'UGC-NET Sociology'}
              </span>
              {currentQ.thinkerOrConcept && (
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  {currentQ.thinkerOrConcept}
                </span>
              )}
            </div>

            {/* Question Text */}
            <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
              Q{currentIndex + 1}. {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = isAnswered && idx === currentQ.correctIndex;
                const isWrong = isAnswered && isSelected && idx !== currentQ.correctIndex;

                let borderStyle = 'border-slate-200 dark:border-slate-800 hover:border-indigo-400';
                let bgStyle = 'bg-slate-50 dark:bg-slate-800/60';
                let textStyle = 'text-slate-800 dark:text-slate-200';

                if (isCorrect) {
                  borderStyle = 'border-emerald-500 ring-1 ring-emerald-500';
                  bgStyle = 'bg-emerald-50 dark:bg-emerald-950/40';
                  textStyle = 'text-emerald-950 dark:text-emerald-200 font-semibold';
                } else if (isWrong) {
                  borderStyle = 'border-rose-500 ring-1 ring-rose-500';
                  bgStyle = 'bg-rose-50 dark:bg-rose-950/40';
                  textStyle = 'text-rose-950 dark:text-rose-200';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${borderStyle} ${bgStyle} ${textStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 text-xs font-bold flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-600 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm">{opt}</span>
                    </div>

                    {isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                    {isWrong && (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs space-y-1.5 animate-in fade-in duration-150">
                <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>{t.quiz.explanation}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm flex items-center gap-2 transition cursor-pointer"
                >
                  <span>
                    {currentIndex + 1 === filteredQuestions.length
                      ? 'Finish Quiz'
                      : t.quiz.nextQuestion}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Finished Score Card */
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Quiz Completed!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              You scored <strong className="text-indigo-600 dark:text-indigo-400">{score}</strong> out of{' '}
              <strong>{filteredQuestions.length}</strong> (
              {Math.round((score / filteredQuestions.length) * 100)}%)
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.quiz.restart}</span>
              </button>
              <button
                onClick={handleGenerateAIQuestions}
                disabled={generatingAI}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate More AI Questions</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
