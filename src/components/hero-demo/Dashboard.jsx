import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const METRICS = [
  { label: 'Conversations', value: 124, delta: '+18%', spark: '0,14 8,10 16,11 24,6 32,8 40,2' },
  { label: 'Prospects', value: 42, delta: '+14%', spark: '0,12 8,13 16,9 24,10 32,5 40,4' },
  { label: 'RDV créés', value: 12, delta: '+25%', spark: '0,13 8,11 16,12 24,7 32,6 40,3' },
  { label: 'Conversion', value: 37, suffix: '%', delta: '+8%', spark: '0,10 8,12 16,8 24,9 32,5 40,4' },
];

/**
 * Reste monté en permanence (opacité pilotée par `visible`) pour que sa hauteur
 * ne varie jamais — évite tout scroll-anchoring du navigateur pendant la boucle.
 */
export default function Dashboard({ visible, loopKey, className = '' }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      className={`glass rounded-2xl border border-ghost/10 px-3 py-3 animate-pulse-glow-slow ${className}`}
    >
      <p className="text-[9px] font-bold uppercase tracking-widest text-ghost/40 mb-2 px-1">Tableau de bord</p>
      <div className="grid grid-cols-4 gap-2">
        {METRICS.map((m) => (
          <div key={m.label} className="min-w-0">
            <p className="text-[8px] text-ghost/40 uppercase tracking-wide truncate">{m.label}</p>
            <AnimatedCounter
              value={m.value}
              suffix={m.suffix || ''}
              playKey={loopKey}
              className="block text-sm font-bold text-ghost"
            />
            <div className="flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-2.5 h-2.5 text-cyan/70" />
              <span className="text-[8px] text-cyan/70">{m.delta}</span>
            </div>
            <svg width="40" height="16" viewBox="0 0 40 16" className="mt-1 opacity-70">
              <motion.polyline
                key={`${m.label}-${loopKey}`}
                points={m.spark}
                fill="none"
                stroke="#00D1FF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
