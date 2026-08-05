import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap, RefreshCw, Database, MessageSquare, Check } from 'lucide-react';

const NODES = [
  { icon: Zap, label: 'Déclencheur' },
  { icon: RefreshCw, label: 'Transformation' },
  { icon: Database, label: 'CRM' },
  { icon: MessageSquare, label: 'Notification' },
];

const CYCLE = NODES.length * 0.9 + 1.2;

/**
 * Diagramme de workflow animé (façon n8n) : les nœuds s'allument en séquence,
 * les lignes se dessinent, une "particule" de données traverse le graphe en boucle.
 */
export default function NodeGraph() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-md glass rounded-[2rem] border border-ghost/10 p-10 shadow-2xl shadow-cyan/5">
      <div className="flex items-center justify-between relative">
        {NODES.map((node, i) => {
          const Icon = node.icon;
          const delay = i * 0.9;
          return (
            <React.Fragment key={node.label}>
              <div className="relative flex flex-col items-center gap-2 z-10">
                <motion.div
                  animate={reduceMotion ? {} : {
                    borderColor: ['rgba(0,209,255,0.2)', 'rgba(0,209,255,0.9)', 'rgba(0,209,255,0.2)'],
                    boxShadow: ['0 0 0px rgba(0,209,255,0)', '0 0 24px rgba(0,209,255,0.6)', '0 0 0px rgba(0,209,255,0)'],
                  }}
                  transition={{ duration: CYCLE, times: [0, 0.08, 0.25], delay, repeat: Infinity, repeatDelay: CYCLE - CYCLE * 0.25 }}
                  className="w-12 h-12 rounded-2xl border-2 bg-void/80 flex items-center justify-center"
                  style={{ borderColor: 'rgba(0,209,255,0.2)' }}
                >
                  <Icon className="w-5 h-5 text-cyan" strokeWidth={1.75} />
                </motion.div>
                <span className="text-[9px] uppercase tracking-widest text-ghost/40 whitespace-nowrap">{node.label}</span>
              </div>
              {i < NODES.length - 1 && (
                <div className="relative flex-1 h-px bg-cyan/15 mx-1 -mt-6 overflow-visible">
                  <motion.span
                    animate={reduceMotion ? {} : { left: ['0%', '100%'] }}
                    transition={{ duration: CYCLE, times: [0, 1], delay: delay + 0.15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,209,255,0.8)]"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex items-center gap-2 mt-8 pt-6 border-t border-ghost/8">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-widest text-ghost/50">Workflow actif</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-cyan/70">
          <Check className="w-3 h-3" /> 0 erreur
        </span>
      </div>
    </div>
  );
}
