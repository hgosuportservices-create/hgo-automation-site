import React from 'react';

// Outils utilisés au quotidien. Logos monochromes (Simple Icons + mascotte OpenClaw).
export const STACK = [
  { name: 'n8n', logo: '/stack/n8n.svg' },
  { name: 'Claude', logo: '/stack/claude.svg' },
  { name: 'OpenAI', logo: '/stack/openai.svg' },
  { name: 'OpenClaw', logo: '/stack/openclaw.png' },
  { name: 'WhatsApp', logo: '/stack/whatsapp.svg' },
  { name: 'Telegram', logo: '/stack/telegram.svg' },
  { name: 'Notion', logo: '/stack/notion.svg' },
  { name: 'Airtable', logo: '/stack/airtable.svg' },
  { name: 'Google Sheets', logo: '/stack/googlesheets.svg' },
  { name: 'Gmail', logo: '/stack/gmail.svg' },
  { name: 'Supabase', logo: '/stack/supabase.svg' },
  { name: 'Make', logo: '/stack/make.svg' },
  { name: 'Cal.com', logo: '/stack/calcom.svg' },
];

function Item({ name, logo, color }) {
  return (
    <div className="flex items-center gap-3 px-6 md:px-8 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
      <img
        src={logo}
        alt=""
        loading="lazy"
        className={color ? 'h-8 w-8' : 'h-6 w-6 invert'}
      />
      <span className="font-cond uppercase tracking-wide text-sm md:text-base font-semibold text-ghost/85 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function StackBar() {
  return (
    <section className="py-10 md:py-14 border-b-2 border-cyan/30 bg-void" aria-label="Outils utilisés">
      <p className="text-center label-cond mb-6 px-6">
        Les outils que j'utilise au quotidien
      </p>
      <div aria-hidden="true" className="stack-marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-stack-marquee flex w-max">
          {/* Liste dupliquée pour une boucle sans couture */}
          {[...STACK, ...STACK].map((tool, i) => (
            <Item key={i} {...tool} />
          ))}
        </div>
      </div>
      {/* Liste lisible par les moteurs et lecteurs d'écran */}
      <ul className="sr-only">
        {STACK.map(t => <li key={t.name}>{t.name}</li>)}
      </ul>
    </section>
  );
}
