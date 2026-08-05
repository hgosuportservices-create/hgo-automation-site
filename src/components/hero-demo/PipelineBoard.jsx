import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STAGES = ['Prospect', 'Qualifié', 'Proposition', 'Gagné'];
const INITIAL_CARDS = [
  { id: 'a', name: 'Jean D.', stage: 0 },
  { id: 'b', name: 'Marie L.', stage: 1 },
  { id: 'c', name: 'Paul R.', stage: 2 },
];
const STEP_MS = 1900;

/**
 * Pipeline commercial à 4 colonnes où les cartes avancent seules d'étape en
 * étape, en boucle — illustre "le pipeline se met à jour tout seul".
 */
export default function PipelineBoard() {
  const reduceMotion = useReducedMotion();
  const [cards, setCards] = useState(INITIAL_CARDS);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setCards((prev) => {
        const advancing = prev.reduce((acc, c) => (acc === null || c.stage < acc.stage ? c : acc), null);
        return prev.map((c) => {
          if (c.id !== advancing.id) return c;
          const nextStage = c.stage + 1;
          return { ...c, stage: nextStage > STAGES.length - 1 ? 0 : nextStage };
        });
      });
    }, STEP_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="w-full max-w-md glass rounded-[2rem] border border-ghost/10 p-6 shadow-2xl shadow-cyan/5">
      <div className="grid grid-cols-4 gap-2">
        {STAGES.map((stage, colIndex) => (
          <div key={stage} className="min-w-0">
            <p className="text-[8px] font-bold uppercase tracking-widest text-ghost/40 mb-2 truncate">{stage}</p>
            <div className="flex flex-col gap-2 min-h-[140px]">
              {cards.filter((c) => c.stage === colIndex).map((c) => (
                <motion.div
                  key={c.id}
                  layoutId={c.id}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className={`rounded-lg px-2 py-2 text-[9px] font-medium border ${colIndex === STAGES.length - 1 ? 'bg-cyan/15 border-cyan/40 text-cyan' : 'bg-ghost/5 border-ghost/10 text-ghost/70'}`}
                >
                  {c.name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-ghost/8">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-widest text-ghost/50">Pipeline synchronisé</span>
      </div>
    </div>
  );
}
