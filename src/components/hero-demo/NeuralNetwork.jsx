import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Brain } from 'lucide-react';

const LAYERS = [
  { x: 15, ys: [20, 50, 80] },
  { x: 50, ys: [12, 35, 65, 88] },
  { x: 85, ys: [30, 50, 70] },
];

const LINKS = LAYERS.slice(0, -1).flatMap((layer, li) =>
  layer.ys.flatMap((y1) =>
    LAYERS[li + 1].ys.map((y2) => ({ x1: layer.x, y1, x2: LAYERS[li + 1].x, y2, key: `${li}-${y1}-${y2}` }))
  )
);

/**
 * Réseau de neurones animé : les connexions pulsent en continu façon flux
 * de données, illustre "l'agent qui traite l'information en continu".
 */
export default function NeuralNetwork() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-md glass rounded-[2rem] border border-ghost/10 p-8 shadow-2xl shadow-cyan/5">
      <svg viewBox="0 0 100 100" className="w-full h-64">
        {LINKS.map((l, i) => (
          <motion.line
            key={l.key}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="rgba(0,209,255,0.12)"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: i * 0.02 }}
          />
        ))}
        {LINKS.filter((_, i) => i % 3 === 0).map((l, i) => (
          <motion.circle
            key={`pulse-${l.key}`}
            r="0.8"
            fill="#00D1FF"
            initial={{ cx: l.x1, cy: l.y1, opacity: 0 }}
            animate={reduceMotion ? {} : { cx: [l.x1, l.x2], cy: [l.y1, l.y2], opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, delay: (i % 6) * 0.35, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
        {LAYERS.map((layer, li) =>
          layer.ys.map((y, i) => (
            <motion.circle
              key={`${li}-${i}`}
              cx={layer.x}
              cy={y}
              r="2.6"
              className="fill-void"
              stroke="rgba(0,209,255,0.5)"
              strokeWidth="0.6"
              animate={reduceMotion ? {} : { r: [2.6, 3.4, 2.6] }}
              transition={{ duration: 2.2, delay: (li + i) * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))
        )}
      </svg>

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-ghost/8">
        <Brain className="w-3.5 h-3.5 text-cyan" />
        <span className="text-xs font-mono uppercase tracking-widest text-ghost/50">Analyse en continu</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-ghost/40">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Actif
        </span>
      </div>
    </div>
  );
}
