import React from 'react';
import {
  BookOpen,
  BotMessageSquare,
  FileText,
  HelpCircle,
  FolderEdit,
} from 'lucide-react';
import { AppTab, Language } from '../types';
import { translations } from '../translations';

interface MobileNavProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  language: Language;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentTab,
  onTabChange,
  language,
}) => {
  const t = translations[language];

  const tabs: { id: AppTab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'syllabus',
      label: language === 'hi' ? 'पाठ्यक्रम' : language === 'te' ? 'సిలబస్' : 'Syllabus',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 'tutor',
      label: language === 'hi' ? 'एआई ट्यूटर' : language === 'te' ? 'ఏఐ ట్యూటర్' : 'AI Tutor',
      icon: <BotMessageSquare className="w-5 h-5" />,
    },
    {
      id: 'essay',
      label: language === 'hi' ? 'मॉडल उत्तर' : language === 'te' ? 'మోడల్ ఆన్సర్' : 'Answers',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 'quiz',
      label: language === 'hi' ? 'परीक्षा क्विज़' : language === 'te' ? 'పరీక్ష క్విజ్' : 'Exam Quiz',
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      id: 'workspace',
      label: language === 'hi' ? 'कार्यक्षेत्र' : language === 'te' ? 'నోట్స్' : 'Notes Space',
      icon: <FolderEdit className="w-5 h-5" />,
    },
  ];

  return (
    <nav
      id="mobile-bottom-nav"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-1.5 flex items-center justify-around shadow-2xl safe-area-inset-bottom"
    >
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            id={`mobile-nav-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 px-1.5 rounded-xl transition-all duration-150 cursor-pointer ${
              isActive
                ? 'text-amber-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div
              className={`p-1 rounded-lg transition-transform ${
                isActive ? 'bg-indigo-600/30 text-amber-300 scale-105' : ''
              }`}
            >
              {tab.icon}
            </div>
            <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
