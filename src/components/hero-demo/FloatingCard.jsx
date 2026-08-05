import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Carte glassmorphism flottante réutilisable pour le Hero interactif.
 * `visible` contrôle l'entrée/sortie ; `highlighted` ajoute un glow cyan.
 */
export default function FloatingCard({ visible, highlighted = false, icon, iconBg, title, children, className = '' }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`glass rounded-2xl px-4 py-3 border ${highlighted ? 'border-cyan/40 shadow-[0_0_25px_-6px_rgba(0,209,255,0.5)]' : 'border-ghost/10'} ${className}`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg || 'bg-cyan/10 border border-cyan/20'}`}>
              {icon}
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ghost/50">{title}</p>
              <div className="text-xs text-ghost/80 mt-0.5">{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
