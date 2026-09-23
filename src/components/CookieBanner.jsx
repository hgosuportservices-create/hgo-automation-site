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
      "fixed bottom-4 left-4 right-4 md:right-auto md:max-w-sm z-[90] bg-[#12121F] border-2 border-cyan/40 rounded-3xl p-5",
      "transform transition-transform duration-500",
      visible ? "translate-y-0" : "translate-y-[150%]"
    )}>
      <p className="text-sm text-ghost/70 leading-relaxed">
        <span className="font-cond uppercase tracking-wide font-semibold text-ghost">Cookies</span> · On mesure l'audience pour améliorer le site.{' '}
        <a href="/mentions-legales" className="text-cyan hover:underline">En savoir plus</a>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onClick={handleRefuse} className="py-2.5 rounded-full font-cond text-sm font-semibold uppercase tracking-widest border-2 border-cyan text-cyan hover:bg-cyan/10 transition-colors">
          Refuser
        </button>
        <button onClick={handleAccept} className="py-2.5 rounded-full font-cond text-sm font-semibold uppercase tracking-widest bg-cyan text-void border-2 border-cyan hover:-translate-y-0.5 transition-transform">
          Accepter
        </button>
      </div>
    </div>
  );
}
