import React, { useState } from 'react';
import {
  BookOpen,
  User,
  ExternalLink,
  BotMessageSquare,
  FileText,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  GraduationCap,
  Scale,
  Building,
  Users,
  Award,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import { Language, Thinker, AppTab, AcademicLevel } from '../types';
import { syllabusModules, thinkersData, indianThinkersData } from '../data/syllabus';
import { translations } from '../translations';

interface SyllabusModuleViewProps {
  language: Language;
  onNavigateToTab: (tab: AppTab, contextPrompt?: string) => void;
  onQuickExplain: (concept: string, targetLang: Language) => void;
}

export const SyllabusModuleView: React.FC<SyllabusModuleViewProps> = ({
  language,
  onNavigateToTab,
  onQuickExplain,
}) => {
  const t = translations[language];
  const [activeModuleId, setActiveModuleId] = useState<string>('module-1');
  const [selectedThinker, setSelectedThinker] = useState<Thinker | null>(null);
  const [selectedDepth, setSelectedDepth] = useState<'basic' | 'undergraduate' | 'advanced'>('undergraduate');
  const [levelFilter, setLevelFilter] = useState<AcademicLevel>('all');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({
    'What is Sociology? Nature, Scope & Sociological Imagination': true,
    'Karl Marx: Historical Materialism, Alienation, Class Struggle': true,
    'Scientific Method, Positivism vs. Interpretivism & Hermeneutics': true,
    'Prominent Indian Thinkers: Srinivas, Ambedkar, Ghurye, Karve, Mukerji': true,
  });

  const activeModule = syllabusModules.find((m) => m.id === activeModuleId) || syllabusModules[0];

  const toggleTopic = (title: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const getModuleIcon = (modNum: number) => {
    switch (modNum) {
      case 1:
        return <Users className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 3:
        return <Scale className="w-4 h-4 text-cyan-400" />;
      case 4:
        return <Building className="w-4 h-4 text-amber-400" />;
      case 5:
        return <Award className="w-4 h-4 text-rose-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Comprehensive Sociology Curriculum (High School to UGC-NET & UPSC)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.nav.syllabus}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Foundational concepts, classical & modern theoretical frameworks, empirical research methodology, and Indian social stratification with scalable explanation depth.
            </p>
          </div>

          {/* Module Selector Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {syllabusModules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModuleId(m.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  activeModuleId === m.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {getModuleIcon(m.number)}
                <span>Mod {m.number}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scalable Depth & Academic Level Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Filter className="w-4 h-4 text-indigo-500" />
            <span>{t.levels.depthSelector}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setSelectedDepth('basic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                selectedDepth === 'basic'
                  ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Beginner / High School
            </button>
            <button
              onClick={() => setSelectedDepth('undergraduate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                selectedDepth === 'undergraduate'
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              BA Degree
            </button>
            <button
              onClick={() => setSelectedDepth('advanced')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                selectedDepth === 'advanced'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              MA / UGC-NET / UPSC
            </button>
          </div>
        </div>

        {/* Current Module Overview Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white p-6 md:p-8 shadow-lg border border-indigo-800/40 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Module {activeModule.number} of 5
              </span>
              {activeModule.targetLevels && (
                <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-md">
                  Levels: {activeModule.targetLevels.join(', ')}
                </span>
              )}
            </div>

            <h2 className="text-xl md:text-2xl font-bold mt-2 tracking-tight">
              {language === 'hi'
                ? activeModule.nativeTitle.hi
                : language === 'te'
                ? activeModule.nativeTitle.te
                : activeModule.title}
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {activeModule.description}
            </p>

            <div className="flex flex-wrap gap-2.5 mt-5">
              <button
                onClick={() =>
                  onNavigateToTab(
                    'tutor',
                    language === 'te'
                      ? `${activeModule.title} గురించిన ముఖ్య భావనలను తెలుగులో వివరించండి`
                      : language === 'hi'
                      ? `${activeModule.title} के प्रमुख सिद्धांतों को हिंदी में समझाइए`
                      : `Give me a comprehensive overview of ${activeModule.title} tailored for ${
                          selectedDepth === 'basic' ? 'High School' : selectedDepth === 'undergraduate' ? 'BA Degree' : 'MA and UPSC'
                        } level.`
                  )
                }
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition cursor-pointer"
              >
                <BotMessageSquare className="w-4 h-4" />
                <span>{t.actions.askTutor}</span>
              </button>
              <button
                onClick={() =>
                  onNavigateToTab(
                    'essay',
                    `Discuss the foundational themes and critical evaluation of ${activeModule.title}.`
                  )
                }
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>{t.actions.generateEssay}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Topics Accordion Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Core Topics & Concepts</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Showing {selectedDepth.toUpperCase()} depth explanation
            </span>
          </div>

          <div className="grid gap-3.5">
            {activeModule.topics.map((topic, index) => {
              const isExpanded = !!expandedTopics[topic.title];
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-xs overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleTopic(topic.title)}
                    className="w-full p-4 md:p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition cursor-pointer"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <h4 className="font-bold text-sm md:text-base text-slate-900 dark:text-slate-100">
                          {language === 'hi'
                            ? topic.nativeTitle.hi
                            : language === 'te'
                            ? topic.nativeTitle.te
                            : topic.title}
                        </h4>
                      </div>
                      {language !== 'en' && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 pl-8">
                          {topic.title}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/60 space-y-4">
                      {/* Scalable Depth Highlight Box */}
                      {topic.depth && (
                        <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                          selectedDepth === 'basic'
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 text-emerald-950 dark:text-emerald-200'
                            : selectedDepth === 'undergraduate'
                            ? 'bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/50 text-indigo-950 dark:text-indigo-200'
                            : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/50 text-amber-950 dark:text-amber-200'
                        }`}>
                          <div className="font-bold flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>
                              {selectedDepth === 'basic'
                                ? 'Beginner / High School Explanation'
                                : selectedDepth === 'undergraduate'
                                ? 'BA Degree Conceptual Depth'
                                : 'MA / UGC-NET / UPSC Advanced Examination Analysis'}
                            </span>
                          </div>
                          <p className="leading-relaxed text-slate-800 dark:text-slate-200 text-xs">
                            {topic.depth[selectedDepth]}
                          </p>
                        </div>
                      )}

                      {/* Content Overview */}
                      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {topic.content}
                      </p>

                      {/* Key Terms */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Essential Sociological Terms:
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {topic.keyTerms.map((term, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                            >
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Trilingual Quick AI Action Buttons */}
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => onQuickExplain(topic.title, 'te')}
                          className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <BotMessageSquare className="w-3.5 h-3.5" />
                          <span>తెలుగులో వివరించండి (Telugu)</span>
                        </button>
                        <button
                          onClick={() => onQuickExplain(topic.title, 'hi')}
                          className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <BotMessageSquare className="w-3.5 h-3.5" />
                          <span>हिंदी में समझाइए (Hindi)</span>
                        </button>
                        <button
                          onClick={() => onQuickExplain(topic.title, 'en')}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI Tutor Deep-Dive (English)</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Thinkers Directory (Modules 2 & 4) */}
        {activeModule.thinkers && activeModule.thinkers.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Seminal Thinkers & Theorists Directory</span>
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Click any thinker to view their complete profile
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {activeModule.thinkers.map((thinker) => (
                <div
                  key={thinker.id}
                  onClick={() => setSelectedThinker(thinker)}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-xs cursor-pointer transition flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          {language === 'hi'
                            ? thinker.nativeName.hi
                            : language === 'te'
                            ? thinker.nativeName.te
                            : thinker.name}
                        </h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                          {thinker.school}
                        </p>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md shrink-0">
                        {thinker.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {thinker.coreConcepts[0]?.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {thinker.coreConcepts.length} core concepts
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                      View Profile &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Thinker Profile Modal */}
      {selectedThinker && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {selectedThinker.school}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'hi'
                    ? selectedThinker.nativeName.hi
                    : language === 'te'
                    ? selectedThinker.nativeName.te
                    : selectedThinker.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedThinker.nationality} &bull; {selectedThinker.period}
                </p>
              </div>

              <button
                onClick={() => setSelectedThinker(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Key Works */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Seminal Works & Publications:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedThinker.keyWorks.map((work, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                  >
                    <em>{work.title}</em> ({work.year})
                  </span>
                ))}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Core Theoretical Concepts:
              </h4>
              {selectedThinker.coreConcepts.map((concept, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                      {concept.title}
                    </h5>
                    {concept.nativeTitle && (
                      <span className="text-xs text-indigo-600 dark:text-indigo-400">
                        {language === 'hi' ? concept.nativeTitle.hi : concept.nativeTitle.te}
                      </span>
                    )}
                  </div>

                  {concept.depth && (
                    <div className="p-2.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/40 text-xs text-indigo-950 dark:text-indigo-200">
                      <strong>{selectedDepth === 'basic' ? 'Beginner' : selectedDepth === 'undergraduate' ? 'BA Level' : 'MA / NET / UPSC'}: </strong>
                      {concept.depth[selectedDepth]}
                    </div>
                  )}

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {concept.summary}
                  </p>

                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-1">
                    {concept.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx}>{kp}</li>
                    ))}
                  </ul>

                  {concept.indianApplication && (
                    <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200">
                      <strong>Indian Context Application: </strong>
                      {concept.indianApplication}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Critical Perspective */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">
                Critical Perspective & Academic Debates:
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedThinker.criticalPerspective}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setSelectedThinker(null);
                  onQuickExplain(selectedThinker.name, language);
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition cursor-pointer flex items-center gap-2"
              >
                <BotMessageSquare className="w-4 h-4" />
                <span>Discuss {selectedThinker.name} with AI Tutor</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
