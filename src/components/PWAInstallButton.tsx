import React, { useState } from 'react';
import { Download, Share, PlusSquare, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  compact?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="pwa-install-btn"
        onClick={install}
        className={`flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium shadow-sm transition-all duration-200 cursor-pointer ${
          compact ? 'px-2.5 py-1.5 text-xs' : 'px-3.5 py-2 text-sm'
        }`}
        title="Install MA Sociology PWA on your device"
      >
        <Download className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
        <span>Install App</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          id="pwa-ios-install-btn"
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-medium hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors duration-200 cursor-pointer ${
            compact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-xs'
          }`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install on iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Install on iPhone / iPad
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 shrink-0">
                    <Share className="w-4 h-4" />
                  </div>
                  <p>
                    1. Tap the <strong className="text-slate-800 dark:text-slate-100">Share</strong> button in the Safari bottom toolbar.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 shrink-0">
                    <PlusSquare className="w-4 h-4" />
                  </div>
                  <p>
                    2. Scroll down and tap <strong className="text-slate-800 dark:text-slate-100">Add to Home Screen</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shrink-0">
                    <Download className="w-4 h-4" />
                  </div>
                  <p>
                    3. Launch directly from your home screen for full offline-ready MA study mode!
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-slate-900 dark:bg-slate-100 py-2.5 text-sm font-semibold text-white dark:text-slate-900 hover:opacity-90 transition"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
