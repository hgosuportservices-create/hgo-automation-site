import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Video, Server, ShieldCheck, Mic } from 'lucide-react';

// Visuel du hero /formation : une séance en visio avec le programme qui se coche.
const PROGRAMME = [
  'Installer n8n sur votre serveur',
  'Connecter Gmail, WhatsApp et Google Sheets',
  'Votre 1er workflow : nouvelle demande → CRM',
  'Gérer les erreurs et les relances',
  'Ajouter l\'IA (Claude / OpenAI) au workflow',
];

export default function FormationVisual() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(reduceMotion ? PROGRAMME.length : 0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const t = setInterval(() => {
      setDone(d => (d >= PROGRAMME.length + 2 ? 0 : d + 1));
    }, 1300);
    return () => clearInterval(t);
  }, [reduceMotion]);

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 bg-cyan/10 blur-3xl rounded-full -z-10" />

      {/* Fenêtre visio */}
      <div className="rounded-[1.75rem] bg-[#12121F] border-2 border-cyan shadow-[8px_8px_0_#00D1FF] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-cyan/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="flex items-center gap-1.5 font-cond text-xs uppercase tracking-widest text-ghost/50">
            <Video className="w-3 h-3 text-cyan" /> Formation n8n · séance 1/2
          </span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /> LIVE
          </span>
        </div>

        <div className="p-5 flex flex-col gap-4">
          {/* Participants */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Hugo', role: 'Formateur', initials: 'HF', speaking: true },
              { name: 'Vous', role: 'Partage d\'écran', initials: 'VO', speaking: false },
            ].map(p => (
              <div key={p.name} className={`rounded-2xl border p-3 flex items-center gap-3 ${p.speaking ? 'border-cyan/40 bg-cyan/5' : 'border-ghost/10 bg-ghost/[0.03]'}`}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan/40 to-blue-500/30 flex items-center justify-center text-xs font-bold text-ghost">
                  {p.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-ghost truncate">{p.name}</p>
                  <p className="text-[10px] text-ghost/40 truncate">{p.role}</p>
                </div>
                {p.speaking && <Mic className="w-3.5 h-3.5 text-cyan ml-auto flex-shrink-0" />}
              </div>
            ))}
          </div>

          {/* Programme */}
          <div className="rounded-2xl border border-ghost/10 bg-ghost/[0.02] p-4">
            <p className="font-cond text-xs uppercase tracking-widest text-cyan/70 mb-3">Programme de la séance</p>
            <ul className="space-y-2.5">
              {PROGRAMME.map((item, i) => {
                const isDone = i < done;
                const isCurrent = i === done;
                return (
                  <li key={item} className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: isDone ? [1, 1.25, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border ${isDone ? 'bg-cyan border-cyan' : isCurrent ? 'border-cyan/60' : 'border-ghost/20'}`}
                    >
                      {isDone && <Check className="w-3 h-3 text-void" strokeWidth={3} />}
                    </motion.span>
                    <span className={`text-xs transition-colors ${isDone ? 'text-ghost/80' : isCurrent ? 'text-ghost' : 'text-ghost/35'}`}>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Badges flottants */}
      <div className="absolute -left-6 -bottom-5 flex items-center gap-2 bg-void/90 border border-green-400/25 rounded-full px-3 py-2 backdrop-blur-sm shadow-lg shadow-black/40">
        <Server className="w-3.5 h-3.5 text-green-400" />
        <span className="text-[10px] font-semibold text-green-400 whitespace-nowrap">n8n installé · HTTPS · sauvegardes</span>
      </div>
      <div className="absolute -right-5 -top-4 flex items-center gap-2 bg-void/90 border border-cyan/25 rounded-full px-3 py-2 backdrop-blur-sm shadow-lg shadow-black/40">
        <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
        <span className="text-[10px] font-semibold text-ghost/80 whitespace-nowrap">OpenClaw sécurisé</span>
      </div>
    </div>
  );
}
