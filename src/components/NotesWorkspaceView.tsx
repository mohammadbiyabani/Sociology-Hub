import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import {
  FolderEdit,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Trash2,
  Download,
  Bookmark,
  Layers,
  FileSpreadsheet,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { Language, SavedNote } from '../types';
import { translations } from '../translations';
import { sampleReadingMaterials } from '../data/syllabus';

interface NotesWorkspaceViewProps {
  language: Language;
}

export const NotesWorkspaceView: React.FC<NotesWorkspaceViewProps> = ({ language }) => {
  const t = translations[language];
  const [inputText, setInputText] = useState(sampleReadingMaterials[0].text);
  const [activeAction, setActiveAction] = useState<'all' | 'summary' | 'definitions' | 'questions'>('all');
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [savedNotes, setSavedNotes] = useState<SavedNote[]>(() => {
    const stored = localStorage.getItem('sociology_saved_notes');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        // fallback
      }
    }
    return [];
  });
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('sociology_saved_notes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  const handleRunAnalysis = async (actionType: 'all' | 'summary' | 'definitions' | 'questions') => {
    if (!inputText.trim() || loading) return;
    setActiveAction(actionType);
    setLoading(true);
    setAnalysisResult('');

    try {
      const res = await fetch('/api/ai/notes-workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          actionType,
          language,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setAnalysisResult(data.result || 'No analysis returned.');
    } catch (err: any) {
      console.error('Notes workspace analysis error:', err);
      setAnalysisResult(`**Error processing text:** ${err.message}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNote = () => {
    if (!analysisResult) return;
    const titleSnippet = inputText.slice(0, 45).replace(/\n/g, ' ') + '...';
    const newNote: SavedNote = {
      id: Date.now().toString(),
      title: titleSnippet,
      excerpt: inputText.slice(0, 160) + '...',
      analysis: analysisResult,
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
      language,
    };

    setSavedNotes([newNote, ...savedNotes]);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleDeleteNote = (id: string) => {
    setSavedNotes(savedNotes.filter((n) => n.id !== id));
  };

  const handleCopy = () => {
    if (!analysisResult) return;
    navigator.clipboard.writeText(analysisResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Bookmark className="w-4 h-4" />
            <span>Academic Synthesis Engine</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.workspace.title}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.workspace.subtitle}
          </p>
        </div>

        {/* Input & Presets Section */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Input Text / Reading Excerpt / Lecture Notes
            </label>

            {/* Presets */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">Sample Excerpts:</span>
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                {sampleReadingMaterials.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setInputText(sample.text)}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700 text-xs font-medium whitespace-nowrap transition cursor-pointer"
                  >
                    Sample {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <textarea
            id="workspace-textarea"
            rows={7}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.workspace.pastePlaceholder}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition leading-relaxed font-mono text-xs md:text-sm"
          />

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
            <button
              onClick={() => handleRunAnalysis('all')}
              disabled={loading || !inputText.trim()}
              className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.workspace.actionAll}</span>
            </button>

            <button
              onClick={() => handleRunAnalysis('summary')}
              disabled={loading || !inputText.trim()}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 disabled:opacity-50 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span>{t.workspace.actionSummary}</span>
            </button>

            <button
              onClick={() => handleRunAnalysis('definitions')}
              disabled={loading || !inputText.trim()}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 disabled:opacity-50 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Layers className="w-4 h-4 text-amber-500" />
              <span>{t.workspace.actionDefinitions}</span>
            </button>

            <button
              onClick={() => handleRunAnalysis('questions')}
              disabled={loading || !inputText.trim()}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 disabled:opacity-50 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-emerald-500" />
              <span>{t.workspace.actionQuestions}</span>
            </button>
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
            <Sparkles className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Analyzing text and generating structured academic analysis in {language.toUpperCase()}...
            </p>
          </div>
        )}

        {/* Analysis Result Display */}
        {analysisResult && (
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/60 p-6 md:p-8 shadow-md space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 uppercase">
                  Analysis: {activeAction}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {language.toUpperCase()} Output
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveNote}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{savedSuccess ? t.actions.saved : t.actions.save}</span>
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
              </div>
            </div>

            <div className="markdown-body prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:text-lg prose-h3:text-base prose-p:my-2 prose-ul:my-2">
              <Markdown>{analysisResult}</Markdown>
            </div>
          </div>
        )}

        {/* Saved Notes Archive */}
        <div className="space-y-3 pt-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FolderEdit className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>{t.workspace.savedNotesTitle} ({savedNotes.length})</span>
          </h3>

          {savedNotes.length === 0 ? (
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
              {t.workspace.noSaved}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {savedNotes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2 hover:border-indigo-300 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate max-w-[200px]">
                      {note.title}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {note.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {note.excerpt}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setAnalysisResult(note.analysis)}
                      className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
                    >
                      View Analysis →
                    </button>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                      title="Delete saved note"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
