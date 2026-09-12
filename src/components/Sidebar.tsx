import React from 'react';
import {
  BookOpen,
  BotMessageSquare,
  FileText,
  HelpCircle,
  FolderEdit,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { AppTab, Language } from '../types';
import { translations } from '../translations';
import { LanguageToggle } from './LanguageToggle';
import { PWAInstallButton } from './PWAInstallButton';

interface SidebarProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuickTutor?: (prompt: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onTabChange,
  language,
  onLanguageChange,
}) => {
  const t = translations[language];

  const navItems: { id: AppTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'syllabus',
      label: t.nav.syllabus,
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 'tutor',
      label: t.nav.tutor,
      icon: <BotMessageSquare className="w-5 h-5" />,
      badge: 'Multilingual AI',
    },
    {
      id: 'essay',
      label: t.nav.essay,
      icon: <FileText className="w-5 h-5" />,
      badge: '15/20 Marks',
    },
    {
      id: 'quiz',
      label: t.nav.quiz,
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      id: 'workspace',
      label: t.nav.workspace,
      icon: <FolderEdit className="w-5 h-5" />,
    },
  ];

  return (
    <aside
      id="desktop-sidebar"
      className="hidden md:flex flex-col w-64 lg:w-72 bg-slate-900 text-slate-100 border-r border-slate-800 shrink-0 h-screen sticky top-0 overflow-y-auto"
    >
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              <span>SOCIOLOGY HUB</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                AI TUTOR
              </span>
            </h1>
            <p className="text-xs text-slate-400 font-medium">High School &bull; BA &bull; MA &bull; NET/UPSC</p>
          </div>
        </div>

        {/* Global Language Selector */}
        <div className="pt-2">
          <LanguageToggle
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
            variant="compact"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-3 space-y-1.5">
        <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Core Sections
        </div>

        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              id={`sidebar-nav-${item.id}`}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-900/40 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? 'text-amber-300' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/40'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Quick Language Toggle Shortcuts banner */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 px-2 space-y-2">
          <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Quick AI Explanation Shortcuts</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <button
              onClick={() => {
                onLanguageChange('te');
                onTabChange('tutor');
              }}
              className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-[12px] text-slate-300 hover:text-amber-300 transition flex items-center justify-between border border-slate-700/50 cursor-pointer"
            >
              <span>తెలుగులో వివరణ (Telugu)</span>
              <span className="text-[10px] text-slate-400">తెలుగు</span>
            </button>
            <button
              onClick={() => {
                onLanguageChange('hi');
                onTabChange('tutor');
              }}
              className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-[12px] text-slate-300 hover:text-amber-300 transition flex items-center justify-between border border-slate-700/50 cursor-pointer"
            >
              <span>हिंदी में समझाइए (Hindi)</span>
              <span className="text-[10px] text-slate-400">हिंदी</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Footer Info & PWA Install */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 flex flex-col gap-3">
        <PWAInstallButton />
        <div className="text-[11px] text-slate-400 leading-relaxed">
          <p className="font-medium text-slate-300">5-Module Scalable Curriculum</p>
          <p>Intro Concepts, Thinkers, Methods, Indian Society & Exams</p>
        </div>
      </div>
    </aside>
  );
};
