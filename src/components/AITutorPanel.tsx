import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Volume2,
  VolumeX,
  Languages,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { translations } from '../translations';

interface AITutorPanelProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  initialPrompt?: string;
  contextTopic?: string;
}

export const AITutorPanel: React.FC<AITutorPanelProps> = ({
  language,
  onLanguageChange,
  initialPrompt,
  contextTopic,
}) => {
  const t = translations[language];
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('sociology_tutor_chat');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return [
      {
        id: 'welcome',
        role: 'model',
        text: t.tutor.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language,
      },
    ];
  });

  const [input, setInput] = useState(initialPrompt || '');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('sociology_tutor_chat', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (initialPrompt) {
      setInput(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = newMessages.slice(-8).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: historyPayload,
          language,
          contextTopic,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.reply || 'No response returned from model.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: `**Notice / గమనిక / सूचना:** Could not connect to AI Tutor (${err.message}). Please verify the server connection and try again.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    const welcome: ChatMessage = {
      id: Date.now().toString(),
      role: 'model',
      text: t.tutor.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language,
    };
    setMessages([welcome]);
    localStorage.removeItem('sociology_tutor_chat');
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    }
  };

  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`>]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText.slice(0, 1000));

    if (language === 'hi') {
      utterance.lang = 'hi-IN';
    } else if (language === 'te') {
      utterance.lang = 'te-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header Banner */}
      <div className="p-4 md:p-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {t.tutor.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.tutor.subtitle}
              </p>
            </div>
          </div>
          {contextTopic && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40 text-xs text-indigo-700 dark:text-indigo-300 font-medium">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Context: {contextTopic}</span>
            </div>
          )}
        </div>

        {/* Quick Language Switch Shortcuts in Tutor Header */}
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={() => onLanguageChange('te')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
              language === 'te'
                ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            తెలుగులో వివరించండి (Telugu)
          </button>
          <button
            onClick={() => onLanguageChange('hi')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
              language === 'hi'
                ? 'bg-indigo-600 text-white border-indigo-700 font-bold shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            हिंदी में समझाइए (Hindi)
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
              language === 'en'
                ? 'bg-slate-800 text-white border-slate-900 font-bold shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            English
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition"
            title="Reset Chat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-4xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
            >
              <div
                className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                  isUser
                    ? 'bg-indigo-600 text-white'
                    : 'bg-amber-600 dark:bg-amber-500 text-white shadow-xs'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[78%]`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 shadow-xs text-sm leading-relaxed ${
                    isUser
                      ? 'bg-indigo-600 text-white rounded-tr-xs'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-xs'
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    <div className="markdown-body prose dark:prose-invert max-w-none prose-sm prose-p:my-1.5 prose-headings:my-2 prose-ul:my-1.5 prose-li:my-0.5">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  )}
                </div>

                {/* Footer Controls for Model Responses */}
                <div className="flex items-center gap-2 mt-1 px-1 text-[11px] text-slate-400">
                  <span>{msg.timestamp}</span>
                  {!isUser && (
                    <>
                      <span>•</span>
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:text-slate-600 dark:hover:text-slate-200 transition flex items-center gap-1 cursor-pointer"
                        title="Copy text"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                      <span>•</span>
                      <button
                        onClick={() => handleSpeak(msg.id, msg.text)}
                        className="hover:text-slate-600 dark:hover:text-slate-200 transition flex items-center gap-1 cursor-pointer"
                        title="Listen to explanation"
                      >
                        {speakingId === msg.id ? (
                          <>
                            <VolumeX className="w-3 h-3 text-amber-500 animate-pulse" />
                            <span className="text-amber-500">Stop</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            <span>Listen</span>
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex gap-3 max-w-xl">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white shrink-0 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Sparkles className="w-4 h-4 text-amber-500 animate-bounce" />
                <span>{t.actions.analyzing}</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompt Chips */}
      <div className="p-3 bg-white/70 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-800 backdrop-blur-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Try:</span>
          </span>
          {t.tutor.quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700/60 text-xs whitespace-nowrap transition cursor-pointer shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            id="tutor-input-field"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.tutor.placeholder}
            disabled={loading}
            className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            title="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
