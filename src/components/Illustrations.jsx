// Illustrations trait noir (style gravure) pour la page d'accueil test /preview.
// Trait cyan sur fond bleu nuit, hachures pour les ombres.

const INK = '#00D1FF';
const PAPER = '#0A0A14';
const SCREEN = '#16162A';
const base = { fill: 'none', stroke: INK, strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Sparkle = ({ className, fill = INK }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <path d="M20 2 C21.5 14 26 18.5 38 20 C26 21.5 21.5 26 20 38 C18.5 26 14 21.5 2 20 C14 18.5 18.5 14 20 2Z" fill={fill} />
  </svg>
);

// Téléphone avec conversation WhatsApp
export const PhoneChat = ({ className }) => (
  <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
    <g {...base}>
      <rect x="40" y="10" width="120" height="236" rx="22" fill={PAPER} />
      <rect x="50" y="32" width="100" height="190" rx="6" fill={SCREEN} />
      <line x1="85" y1="21" x2="115" y2="21" />
      <circle cx="100" cy="234" r="6" />
      {/* hachures ombre côté droit */}
      {[40, 60, 80, 100, 120, 140, 160, 180, 200].map(y => (
        <line key={y} x1="152" y1={y} x2="158" y2={y - 6} strokeWidth="1.5" />
      ))}
      {/* bulle client */}
      <path d="M58 48 h58 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-50 l-10 8 v-8 a6 6 0 0 1 -4 -6 v-18 a6 6 0 0 1 6 -6z" fill={PAPER} />
      <line x1="66" y1="58" x2="110" y2="58" strokeWidth="2" />
      <line x1="66" y1="67" x2="96" y2="67" strokeWidth="2" />
      {/* bulle assistant */}
      <path d="M142 98 h-60 a6 6 0 0 0 -6 6 v26 a6 6 0 0 0 6 6 h50 l10 8 v-8 a6 6 0 0 0 4 -6 v-26 a6 6 0 0 0 -4 -6z" fill={INK} />
      <line x1="86" y1="110" x2="134" y2="110" stroke={PAPER} strokeWidth="2" />
      <line x1="86" y1="119" x2="124" y2="119" stroke={PAPER} strokeWidth="2" />
      <path d="M118 127 l4 4 l8 -8" stroke={PAPER} strokeWidth="2" />
      {/* créneau confirmé */}
      <rect x="58" y="156" width="84" height="44" rx="6" fill={PAPER} />
      <line x1="58" y1="170" x2="142" y2="170" />
      <circle cx="74" cy="185" r="7" />
      <path d="M70 185 l3 3 l6 -6" strokeWidth="2" />
      <line x1="88" y1="182" x2="130" y2="182" strokeWidth="2" />
      <line x1="88" y1="190" x2="116" y2="190" strokeWidth="2" />
    </g>
  </svg>
);

// Camionnette d'artisan avec échelle
export const Van = ({ className }) => (
  <svg viewBox="0 0 260 160" className={className} aria-hidden="true">
    <g {...base}>
      <path d="M20 120 V58 a10 10 0 0 1 10 -10 H160 l40 34 h28 a12 12 0 0 1 12 12 v26 z" fill={PAPER} />
      <path d="M160 48 v44 h40 l-40 -44" fill={SCREEN} />
      <line x1="120" y1="56" x2="120" y2="116" />
      <line x1="134" y1="84" x2="146" y2="84" />
      {/* échelle */}
      <line x1="34" y1="40" x2="150" y2="40" />
      <line x1="34" y1="30" x2="150" y2="30" />
      {[44, 62, 80, 98, 116, 134].map(x => <line key={x} x1={x} y1="30" x2={x} y2="40" />)}
      <line x1="50" y1="40" x2="50" y2="48" />
      <line x1="136" y1="40" x2="136" y2="48" />
      {/* hachures bas de caisse */}
      {[30, 42, 54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186, 198, 210, 222].map(x => (
        <line key={x} x1={x} y1="118" x2={x + 8} y2="108" strokeWidth="1.5" />
      ))}
      {/* roues */}
      <circle cx="62" cy="122" r="18" fill={INK} />
      <circle cx="62" cy="122" r="7" fill={PAPER} />
      <circle cx="196" cy="122" r="18" fill={INK} />
      <circle cx="196" cy="122" r="7" fill={PAPER} />
      <line x1="10" y1="142" x2="250" y2="142" strokeWidth="2" />
    </g>
  </svg>
);

// Clé plate + tournevis croisés
export const Tools = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <g {...base}>
      <g transform="rotate(-45 100 100)">
        <rect x="89" y="58" width="22" height="118" rx="10" fill={PAPER} />
        {[80, 96, 112, 128, 144, 160].map(y => <line key={y} x1="104" y1={y} x2="110" y2={y - 6} strokeWidth="1.5" />)}
        <circle cx="100" cy="40" r="30" fill={PAPER} />
        <path d="M88 8 V34 H112 V8" fill={SCREEN} />
      </g>
      <g transform="rotate(45 100 100)">
        <rect x="88" y="118" width="24" height="62" rx="9" fill={INK} />
        <line x1="95" y1="128" x2="95" y2="170" stroke={PAPER} strokeWidth="2" />
        <line x1="105" y1="128" x2="105" y2="170" stroke={PAPER} strokeWidth="2" />
        <rect x="95" y="40" width="10" height="78" fill={SCREEN} />
        <path d="M95 40 L100 26 L105 40" fill={SCREEN} />
      </g>
    </g>
  </svg>
);

// Unité extérieure de climatisation / PAC
export const ClimUnit = ({ className }) => (
  <svg viewBox="0 0 220 170" className={className} aria-hidden="true">
    <g {...base}>
      <rect x="20" y="20" width="180" height="120" rx="8" fill={PAPER} />
      <circle cx="84" cy="80" r="44" fill={SCREEN} />
      {[0, 60, 120, 180, 240, 300].map(a => (
        <path key={a} d="M84 80 q16 -24 4 -40" transform={`rotate(${a} 84 80)`} />
      ))}
      <circle cx="84" cy="80" r="7" fill={INK} />
      {[40, 52, 64, 76, 88, 100, 112].map(y => <line key={y} x1="146" y1={y} x2="184" y2={y} strokeWidth="2" />)}
      <line x1="40" y1="140" x2="40" y2="154" />
      <line x1="180" y1="140" x2="180" y2="154" />
      {[28, 40, 52, 64, 76, 88, 100, 112, 124].map(y => <line key={y} x1="196" y1={y} x2="200" y2={y + 6} strokeWidth="1.5" />)}
    </g>
  </svg>
);

// Maison
export const House = ({ className }) => (
  <svg viewBox="0 0 200 180" className={className} aria-hidden="true">
    <g {...base}>
      <path d="M30 86 L100 26 L170 86" fill="none" strokeWidth="3" />
      <path d="M44 76 V160 H156 V76 L100 30 Z" fill={PAPER} />
      <rect x="128" y="34" width="16" height="30" fill={PAPER} />
      <rect x="86" y="112" width="28" height="48" fill={SCREEN} />
      <circle cx="108" cy="138" r="2" fill={INK} />
      <rect x="58" y="96" width="20" height="20" fill={SCREEN} />
      <rect x="122" y="96" width="20" height="20" fill={SCREEN} />
      <line x1="68" y1="96" x2="68" y2="116" strokeWidth="1.5" />
      <line x1="132" y1="96" x2="132" y2="116" strokeWidth="1.5" />
      {[80, 92, 104, 116, 128, 140].map(y => <line key={y} x1="148" y1={y} x2="154" y2={y - 6} strokeWidth="1.5" />)}
      <line x1="20" y1="160" x2="180" y2="160" />
    </g>
  </svg>
);

// Robinet + goutte
export const Faucet = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <g {...base}>
      <rect x="20" y="60" width="30" height="50" rx="4" fill={PAPER} />
      <path d="M50 70 H120 a30 30 0 0 1 30 30 V116 H126 V104 a10 10 0 0 0 -10 -10 H50 z" fill={PAPER} />
      <rect x="80" y="44" width="16" height="26" fill={SCREEN} />
      <line x1="64" y1="44" x2="112" y2="44" strokeWidth="4" />
      {[76, 88, 100, 112].map(x => <line key={x} x1={x} y1="92" x2={x + 6} y2="86" strokeWidth="1.5" />)}
      <path d="M138 136 c-10 14 -12 20 -12 26 a12 12 0 0 0 24 0 c0 -6 -2 -12 -12 -26z" fill={INK} />
    </g>
  </svg>
);

// Borne de recharge / électricité
export const Charger = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <g {...base}>
      <rect x="56" y="20" width="70" height="150" rx="10" fill={PAPER} />
      <rect x="68" y="36" width="46" height="34" rx="4" fill={SCREEN} />
      <path d="M94 42 l-10 14 h10 l-6 12" strokeWidth="2.5" />
      <path d="M126 90 h20 a14 14 0 0 1 14 14 v40 a10 10 0 0 0 20 0 v-24" />
      <rect x="170" y="106" width="20" height="16" rx="3" fill={INK} />
      {[90, 104, 118, 132, 146, 160].map(y => <line key={y} x1="116" y1={y} x2="122" y2={y - 6} strokeWidth="1.5" />)}
      <line x1="40" y1="170" x2="142" y2="170" />
    </g>
  </svg>
);

// Document devis avec tampon « signé »
export const Quote = ({ className }) => (
  <svg viewBox="0 0 200 220" className={className} aria-hidden="true">
    <g {...base}>
      <path d="M40 20 H130 L160 50 V200 H40 Z" fill={PAPER} />
      <path d="M130 20 V50 H160" fill={SCREEN} />
      <line x1="58" y1="44" x2="110" y2="44" strokeWidth="4" />
      {[76, 92, 108, 124].map(y => <line key={y} x1="58" y1={y} x2="142" y2={y} strokeWidth="2" />)}
      <line x1="100" y1="150" x2="142" y2="150" strokeWidth="3" />
      <circle cx="80" cy="170" r="22" strokeDasharray="4 4" />
      <path d="M70 170 l7 7 l14 -14" strokeWidth="3" />
      {[40, 60, 80, 100, 120, 140, 160, 180].map(y => <line key={y} x1="154" y1={y + 20} x2="160" y2={y + 14} strokeWidth="1.5" />)}
    </g>
  </svg>
);
