import React, { useEffect, useRef } from 'react';

/**
 * Vidéo de fond muette/loop réutilisable.
 *
 * La boucle est gérée entièrement à la main via `timeupdate` plutôt que de
 * compter sur l'attribut natif `loop` : après hydratation SSR, `loop` (comme
 * `muted`) n'est pas toujours appliqué côté navigateur, et le faire cohabiter
 * avec un écouteur JS peut créer des conflits. On désactive donc `loop` côté
 * JS et on relance nous-mêmes la lecture à l'approche de la fin.
 */
export default function BackgroundVideo({ src, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.loop = false;
    v.play().catch(() => {});

    const restart = () => {
      v.currentTime = 0;
      v.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - 0.15) {
        restart();
      }
    };

    v.addEventListener('timeupdate', handleTimeUpdate);
    v.addEventListener('ended', restart);
    return () => {
      v.removeEventListener('timeupdate', handleTimeUpdate);
      v.removeEventListener('ended', restart);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}
