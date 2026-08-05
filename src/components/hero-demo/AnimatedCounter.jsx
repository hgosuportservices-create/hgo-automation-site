import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Anime un nombre de 0 jusqu'à `value` à chaque fois que `playKey` change.
 * Utilisé pour rejouer le compteur à chaque boucle du WorkflowAnimation.
 */
export default function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1.2, playKey, className }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    setDisplay(0);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playKey, value, duration, reduceMotion]);

  return (
    <span className={className}>
      {decimals ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  );
}
