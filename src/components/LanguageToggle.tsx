import React from 'react';
import { Languages, Check } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  variant?: 'compact' | 'full' | 'dropdown';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  variant = 'compact',
}) => {
  const languages: { code: Language; label: string; native: string; flag: string }[] = [
    { code: 'en', label: 'English', native: 'English', flag: 'EN' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी', flag: 'हि' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు', flag: 'తె' },
  ];

  if (variant === 'full') {
    return (
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            id={`lang-btn-${lang.code}`}
            onClick={() => onLanguageChange(lang.code)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              currentLanguage === lang.code
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
              {lang.flag}
            </span>
            <span>{lang.native}</span>
            {currentLanguage === lang.code && <Check className="w-3.5 h-3.5" />}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      id="language-toggle-pill"
      className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs"
    >
      <div className="px-2 text-slate-400 dark:text-slate-500 hidden sm:flex items-center">
        <Languages className="w-3.5 h-3.5" />
      </div>
      {languages.map((lang) => (
        <button
          key={lang.code}
          id={`nav-lang-${lang.code}`}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
            currentLanguage === lang.code
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
          title={`Switch language to ${lang.label} (${lang.native})`}
        >
          {lang.native}
        </button>
      ))}
    </div>
  );
};
