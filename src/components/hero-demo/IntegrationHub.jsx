import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RefreshCw, Mail, Database, Calendar, FileText } from 'lucide-react';

const SATELLITES = [
  { icon: Mail, label: 'Email', pos: { top: '2%', left: '50%' } },
  { icon: Database, label: 'CRM', pos: { top: '50%', left: '92%' } },
  { icon: Calendar, label: 'Agenda', pos: { top: '92%', left: '50%' } },
  { icon: FileText, label: 'Facturation', pos: { top: '50%', left: '8%' } },
];

/**
 * Hub central connecté à 4 outils métier, avec un pulse de synchronisation
 * qui parcourt chaque connexion en boucle — illustre "vos outils reliés entre eux".
 */
export default function IntegrationHub() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-sm aspect-square glass rounded-[2rem] border border-ghost/10 shadow-2xl shadow-cyan/5">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          [50, 8, 50, 50],
          [88, 50, 50, 50],
          [50, 88, 50, 50],
          [12, 50, 50, 50],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(0,209,255,0.2)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          />
        ))}
      </svg>

      {/* Hub central */}
      <motion.div
        animate={reduceMotion ? {} : { boxShadow: ['0 0 20px -4px rgba(0,209,255,0.3)', '0 0 40px -4px rgba(0,209,255,0.6)', '0 0 20px -4px rgba(0,209,255,0.3)'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl border-2 border-cyan/40 bg-void flex items-center justify-center z-10"
      >
        <RefreshCw className="w-7 h-7 text-cyan" strokeWidth={1.5} />
      </motion.div>

      {SATELLITES.map((s, i) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5" style={s.pos}>
            <motion.div
              animate={reduceMotion ? {} : { scale: [1, 1.12, 1], borderColor: ['rgba(240,239,244,0.12)', 'rgba(0,209,255,0.6)', 'rgba(240,239,244,0.12)'] }}
              transition={{ duration: 2.4, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-11 h-11 rounded-xl border bg-void/90 flex items-center justify-center"
            >
              <Icon className="w-4 h-4 text-ghost/70" strokeWidth={1.75} />
            </motion.div>
            <span className="text-[8px] uppercase tracking-widest text-ghost/40 whitespace-nowrap">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}
