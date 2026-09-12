import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div
      id="offline-indicator-banner"
      className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 rounded-full bg-amber-600/95 text-white px-4 py-2 text-xs font-medium shadow-xl backdrop-blur-xs border border-amber-400/30 animate-bounce"
    >
      <WifiOff className="w-4 h-4 text-amber-200" />
      <span>Offline Mode — Cached syllabus and offline materials remain accessible.</span>
    </div>
  );
};
