import React, { useState, useEffect } from 'react';
import { AppTab, Language } from './types';
import { translations } from './translations';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { LanguageToggle } from './components/LanguageToggle';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';
import { SyllabusModuleView } from './components/SyllabusModuleView';
import { AITutorPanel } from './components/AITutorPanel';
import { EssayGeneratorView } from './components/EssayGeneratorView';
import { QuizEngineView } from './components/QuizEngineView';
import { NotesWorkspaceView } from './components/NotesWorkspaceView';
import { GraduationCap } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>(() => {
    const saved = localStorage.getItem('sociology_active_tab');
    if (saved && ['syllabus', 'tutor', 'essay', 'quiz', 'workspace'].includes(saved)) {
      return saved as AppTab;
    }
    return 'syllabus';
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('sociology_lang');
    if (saved && ['en', 'hi', 'te'].includes(saved)) {
      return saved as Language;
    }
    return 'en';
  });

  const [tutorPrompt, setTutorPrompt] = useState<string>('');
  const [essayPrompt, setEssayPrompt] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('sociology_active_tab', currentTab);
  }, [currentTab]);

  useEffect(() => {
    localStorage.setItem('sociology_lang', language);
  }, [language]);

  const handleNavigateToTab = (tab: AppTab, contextPrompt?: string) => {
    if (tab === 'tutor' && contextPrompt) {
      setTutorPrompt(contextPrompt);
    }
    if (tab === 'essay' && contextPrompt) {
      setEssayPrompt(contextPrompt);
    }
    setCurrentTab(tab);
  };

  const handleQuickExplain = (concept: string, targetLang: Language) => {
    setLanguage(targetLang);
    setTutorPrompt(
      targetLang === 'te'
        ? `"${concept}" గురించి తెలుగులో స్పష్టంగా మరియు విస్తృతంగా వివరించండి.`
        : targetLang === 'hi'
        ? `"${concept}" के बारे में हिंदी में विस्तार से और परीक्षा की दृष्टि से समझाइए।`
        : `Explain the concept "${concept}" in detail with academic sociological depth.`
    );
    setCurrentTab('tutor');
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
      {/* Offline Status Indicator */}
      <OfflineIndicator />

      {/* Desktop Persistent Sidebar */}
      <Sidebar
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header Bar */}
        <header className="md:hidden flex items-center justify-between p-3.5 bg-slate-900 border-b border-slate-800 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xs font-bold tracking-tight">Sociology Study Hub</h1>
              <p className="text-[10px] text-slate-400">AI Tutor &bull; All Levels</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <PWAInstallButton compact />
            <LanguageToggle
              currentLanguage={language}
              onLanguageChange={setLanguage}
              variant="compact"
            />
          </div>
        </header>

        {/* Dynamic View Tab Rendering */}
        <main className="flex-1 flex flex-col overflow-hidden pb-16 md:pb-0">
          {currentTab === 'syllabus' && (
            <SyllabusModuleView
              language={language}
              onNavigateToTab={handleNavigateToTab}
              onQuickExplain={handleQuickExplain}
            />
          )}

          {currentTab === 'tutor' && (
            <AITutorPanel
              language={language}
              onLanguageChange={setLanguage}
              initialPrompt={tutorPrompt}
            />
          )}

          {currentTab === 'essay' && (
            <EssayGeneratorView language={language} initialTopic={essayPrompt} />
          )}

          {currentTab === 'quiz' && <QuizEngineView language={language} />}

          {currentTab === 'workspace' && <NotesWorkspaceView language={language} />}
        </main>

        {/* Mobile Bottom Navigation Bar */}
        <MobileNav
          currentTab={currentTab}
          onTabChange={setCurrentTab}
          language={language}
        />
      </div>
    </div>
  );
}
