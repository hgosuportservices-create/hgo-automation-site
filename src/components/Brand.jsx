import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Éléments graphiques du style illustré (formes cyan, étoiles, éléments flottants).

export const INK = '#0A0A14';
export const CYAN = '#00D1FF';

const stars = (c) => ['1.5px 1.5px at 20% 30%', '1px 1px at 70% 20%', '2px 2px at 40% 70%', '1px 1px at 85% 60%', '1.5px 1.5px at 10% 85%', '1px 1px at 55% 45%']
  .map(p => `radial-gradient(${p}, ${c} 50%, transparent 51%)`).join(', ');
export const STARS_INK = stars(INK);

export const BLOB_RADII = [
  '48% 52% 45% 55% / 55% 50% 50% 45%',
  '55% 45% 52% 48% / 45% 55% 45% 55%',
  '50% 50% 40% 60% / 60% 55% 45% 40%',
  '58% 42% 50% 50% / 50% 60% 40% 50%',
];

// Forme organique cyan avec étoiles bleu nuit
export const Blob = ({ className = '', radius = BLOB_RADII[0], children }) => (
  <div className={`absolute bg-cyan ${className}`} style={{ borderRadius: radius, backgroundImage: STARS_INK, backgroundSize: '180px 180px' }}>
    {children}
  </div>
);

// Position de la souris (valeurs -0.5 → 0.5, amorties) pour l'effet de profondeur
export function useMouseParallax() {
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 20 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 20 });
  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mxRaw.set((e.clientX - r.left) / r.width - 0.5);
    myRaw.set((e.clientY - r.top) / r.height - 0.5);
  };
  return { mx, my, onMouseMove };
}

// Élément qui flotte doucement et suit légèrement la souris
export const Float = ({ children, className = '', delay = 0, depth = 20, mx, my, rotate = 0 }) => {
  const x = useTransform(mx, v => v * depth);
  const y = useTransform(my, v => v * depth);
  return (
    <motion.div className={`absolute ${className}`} style={{ x, y, rotate }}>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
