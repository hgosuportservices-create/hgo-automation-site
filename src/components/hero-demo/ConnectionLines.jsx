import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Ligne verticale en pointillés + embranchements horizontaux vers chaque carte,
 * façon "spine" reliant le téléphone à la colonne de cartes flottantes.
 * Les slots sont de hauteur fixe pour que les lignes restent stables même
 * quand une carte apparaît/disparaît (AnimatePresence) au-dessus.
 */
export default function ConnectionLines({ slotCount, slotHeight = 76, gap = 12, loopKey }) {
  const reduceMotion = useReducedMotion();
  const totalHeight = slotCount * slotHeight + (slotCount - 1) * gap;
  const centers = Array.from({ length: slotCount }, (_, i) => i * (slotHeight + gap) + slotHeight / 2);

  return (
    <svg
      className="absolute -left-6 top-0 pointer-events-none -z-10"
      width="24"
      height={totalHeight}
      viewBox={`0 0 24 ${totalHeight}`}
      fill="none"
    >
      <motion.line
        key={`spine-${loopKey}`}
        x1="0" y1={centers[0]} x2="0" y2={centers[centers.length - 1]}
        stroke="rgba(0,209,255,0.25)"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        initial={reduceMotion ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {centers.map((cy, i) => (
        <motion.line
          key={`stub-${loopKey}-${i}`}
          x1="0" y1={cy} x2="24" y2={cy}
          stroke="rgba(0,209,255,0.25)"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </svg>
  );
}
