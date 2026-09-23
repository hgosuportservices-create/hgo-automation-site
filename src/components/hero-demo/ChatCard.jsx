import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Bell, Check } from 'lucide-react';

// Conversation WhatsApp de démonstration (devis pompe à chaleur → RDV), dans une
// carte « fenêtre » plutôt qu'un téléphone. Hauteur fixe : la carte n'est jamais vide.
const CONVERSATION = [
  { from: 'client', text: "Bonjour, j'ai besoin d'un devis pour une pompe à chaleur 🏠", time: '22:04' },
  { from: 'agent', text: 'Bonjour ! Avec plaisir 😊 Quelle est la surface de votre logement, et dans quelle ville ?', time: '22:04' },
  { from: 'client', text: 'Environ 120 m², maison à Créteil', time: '22:05' },
  { from: 'agent', text: 'Merci ! Un technicien peut passer pour la visite technique. Demain 9h ou jeudi 14h ?', time: '22:05' },
  { from: 'client', text: 'Demain 9h 👍', time: '22:06' },
  { from: 'agent', text: '📅 RDV confirmé demain à 9h. Vous recevrez un rappel ce soir. À demain !', time: '22:06' },
];

const EVENTS = [
  { icon: MessageCircle, label: 'Demande qualifiée', at: 3 },
  { icon: CalendarCheck, label: 'RDV ajouté à l\'agenda', at: 6 },
  { icon: Bell, label: 'Rappel J-1 programmé', at: 6 },
];

export default function ChatCard({ caption }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? CONVERSATION.length : 2);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const t = setInterval(() => {
      setCount(c => (c >= CONVERSATION.length + 3 ? 2 : c + 1));
    }, 1500);
    return () => clearInterval(t);
  }, [reduceMotion]);

  const shown = CONVERSATION.slice(0, Math.min(count, CONVERSATION.length));
  const typing = count < CONVERSATION.length && CONVERSATION[count]?.from === 'agent';

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 bg-cyan/10 blur-3xl rounded-full -z-10" />

      <div className="rounded-[1.75rem] bg-[#12121F] border-2 border-cyan shadow-[8px_8px_0_#00D1FF] overflow-hidden">
        {/* En-tête */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-cyan/20">
          <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-400/30 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-ghost">Assistant WhatsApp</p>
            <p className="text-[11px] text-green-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Répond 24h/24
            </p>
          </div>
          <span className="font-cond text-xs uppercase tracking-widest text-ghost/35">Démo</span>
        </div>

        {/* Messages */}
        <div className="h-[19rem] px-4 py-4 flex flex-col justify-end gap-2.5 overflow-hidden">
          <AnimatePresence initial={false}>
            {shown.map((m, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${m.from === 'client'
                  ? 'self-start bg-ghost/[0.07] text-ghost/85 rounded-bl-md'
                  : 'self-end bg-cyan/15 border border-cyan/20 text-ghost rounded-br-md'}`}
              >
                {m.text}
                <span className="block text-right text-[9px] text-ghost/35 mt-0.5">
                  {m.time}{m.from === 'agent' && <Check className="inline w-2.5 h-2.5 ml-1 text-cyan" />}
                </span>
              </motion.div>
            ))}
            {typing && (
              <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="self-end flex gap-1 bg-cyan/10 rounded-2xl px-3 py-2.5">
                {[0, 150, 300].map(d => (
                  <span key={d} className="w-1.5 h-1.5 rounded-full bg-cyan/70 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ce qui se passe en coulisses */}
        <div className="px-5 py-3.5 border-t border-cyan/20 flex flex-wrap gap-2">
          {EVENTS.map(({ icon: Icon, label, at }) => {
            const on = count >= at;
            return (
              <span key={label} className={`flex items-center gap-1.5 text-[10px] font-semibold rounded-full px-2.5 py-1 border transition-colors duration-500 ${on ? 'text-cyan border-cyan/30 bg-cyan/10' : 'text-ghost/30 border-ghost/10'}`}>
                <Icon className="w-3 h-3" /> {label}
              </span>
            );
          })}
        </div>
      </div>

      {caption && (
        <p className="mt-5 mx-auto w-fit text-center font-cond text-xs uppercase tracking-widest text-ghost bg-void rounded-full px-4 py-1.5">{caption}</p>
      )}
    </div>
  );
}
