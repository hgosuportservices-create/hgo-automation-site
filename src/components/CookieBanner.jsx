import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const CONSENT_KEY = 'hgo_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: true, marketing: true, date: new Date().toISOString() }));
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: false, marketing: false, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-[90] bg-void/95 backdrop-blur-xl border-t border-ghost/10 p-4 md:p-6",
      "transform transition-transform duration-500",
      visible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-ghost/60 text-center md:text-left">
          <p className="font-medium text-ghost mb-1">Cookies & données personnelles</p>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience.
            Vous pouvez accepter, refuser ou consulter nos{' '}
            <a href="/mentions-legales" className="text-cyan hover:underline">mentions légales</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleRefuse}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border border-ghost/20 text-ghost/70 hover:border-cyan hover:text-ghost transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan text-void hover:bg-white transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
