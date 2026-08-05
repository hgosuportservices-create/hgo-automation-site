import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

/**
 * Anime tous les nombres présents dans `value` de 0 jusqu'à leur valeur finale
 * quand le composant entre dans le viewport. Préserve préfixes/suffixes/texte
 * (ex: "26 751 $", "67,3 %", "24/7", "2 semaines").
 */
export function CountUp({ value, duration = 1.4, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduceMotion ? value : zeroOut(value)));

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setDisplay(value);
      return;
    }
    const tokens = [...value.matchAll(/\d[\d\s]*(?:[.,]\d+)?/g)];
    if (!tokens.length) {
      setDisplay(value);
      return;
    }
    const targets = tokens.map(t => ({
      raw: t[0],
      target: parseFloat(t[0].replace(/\s/g, '').replace(',', '.')),
      decimals: (t[0].split(/[.,]/)[1] || '').length,
      hasThousandSpace: /\d\s\d/.test(t[0]),
    }));

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      let cursor = 0;
      let out = '';
      tokens.forEach((t, i) => {
        out += value.slice(cursor, t.index);
        const { target, decimals, hasThousandSpace } = targets[i];
        const current = target * eased;
        let formatted = decimals ? current.toFixed(decimals).replace('.', ',') : Math.round(current).toString();
        if (hasThousandSpace) {
          const [intPart, decPart] = formatted.split(',');
          formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (decPart ? ',' + decPart : '');
        }
        out += formatted;
        cursor = t.index + t[0].length;
      });
      out += value.slice(cursor);
      setDisplay(out);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, value, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}

function zeroOut(value) {
  return value.replace(/\d[\d\s]*(?:[.,]\d+)?/g, (t) => t.replace(/\d/g, '0'));
}

/**
 * Reveal au scroll : opacity 0→1, translateY 40px→0, 700ms, easeOutExpo, une seule fois.
 */
export function Reveal({ children, className, delay = 0, y = 40, as = 'div', ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/**
 * Titre avec effet de reveal au scroll (fade + léger déplacement vertical).
 * Note: un effet de masque type "Linear" (overflow-hidden + translateY 110%)
 * a été essayé mais provoquait un clipping du texte selon le timing de
 * chargement de la police — remplacé par un fade/slide plus robuste.
 */
export function MaskedTitle({ children, className, as: Tag = 'h2', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}

export { motion, EASE_OUT_EXPO };
