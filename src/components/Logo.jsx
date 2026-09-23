import React from 'react';
import { cn } from '../lib/utils';

// --- Brand Logo Component ---
const CircuitLines = ({ scale = 1 }) => (
  <svg
    width={40 * scale} height={60 * scale}
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    {/* Ligne verticale principale */}
    <line x1="32" y1="4" x2="32" y2="56" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.5" />
    {/* Branches horizontales gauche avec dots */}
    <line x1="32" y1="10" x2="6" y2="10" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.45" />
    <circle cx="5" cy="10" r="1.5" fill="#00E5FF" fillOpacity="0.6" />

    <line x1="32" y1="18" x2="14" y2="18" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.4" />
    <line x1="14" y1="18" x2="14" y2="23" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.4" />
    <circle cx="14" cy="24" r="1.5" fill="#00E5FF" fillOpacity="0.5" />

    <line x1="32" y1="26" x2="2" y2="26" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.5" />
    <circle cx="2" cy="26" r="1.5" fill="#00E5FF" fillOpacity="0.7" />

    <line x1="32" y1="34" x2="20" y2="34" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.35" />
    <line x1="20" y1="34" x2="20" y2="38" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.35" />
    <circle cx="20" cy="39" r="1.2" fill="#00E5FF" fillOpacity="0.45" />

    <line x1="32" y1="42" x2="8" y2="42" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.4" />
    <circle cx="7" cy="42" r="1.5" fill="#00E5FF" fillOpacity="0.55" />

    <line x1="32" y1="50" x2="16" y2="50" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.3" />
    <circle cx="15" cy="50" r="1.2" fill="#00E5FF" fillOpacity="0.4" />

    {/* Dot sur la ligne principale */}
    <circle cx="32" cy="26" r="2" fill="#00E5FF" fillOpacity="0.8" />
    <circle cx="32" cy="10" r="1.5" fill="#00E5FF" fillOpacity="0.6" />
    <circle cx="32" cy="42" r="1.5" fill="#00E5FF" fillOpacity="0.5" />
  </svg>
);

export const Logo = ({ className, size = 'md' }) => {
  const scale = size === 'xl' ? 1.8 : size === 'lg' ? 1.2 : size === 'sm' ? 0.65 : 0.85;
  const fontSize = size === 'xl' ? '2.8rem' : size === 'lg' ? '1.8rem' : size === 'sm' ? '1.1rem' : '1.45rem';
  const subSize = size === 'xl' ? '0.62rem' : size === 'lg' ? '0.42rem' : size === 'sm' ? '0.32rem' : '0.38rem';
  return (
    <div className={cn("flex items-center gap-0 leading-none select-none", className)}>
      <CircuitLines scale={scale} />
      <div className="flex flex-col items-start leading-none">
        <span style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.04em', lineHeight: 1, color: '#00E5FF', fontWeight: 800, fontSize, textShadow: '0 0 24px rgba(0,229,255,0.45), 0 0 6px rgba(0,229,255,0.3)' }}>
          HGO
        </span>
        <span style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.25em', lineHeight: 1.2, color: 'rgba(255,255,255,0.55)', fontWeight: 300, fontSize: subSize, textTransform: 'uppercase', marginTop: '2px' }}>
          AUTOMATION
        </span>
      </div>
    </div>
  );
};

