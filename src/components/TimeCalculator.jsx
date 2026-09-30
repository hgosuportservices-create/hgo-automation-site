import React, { useState } from 'react';
import { BellRing, Calendar, ChevronDown, ClipboardCheck, Database, FileText, Mail, PhoneMissed, Receipt, Star, Users, Wrench } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import { cn } from '../lib/utils';

// Tâches proposées : heures moyennes perdues par mois pour une petite entreprise du bâtiment.
const TASKS = [
  { id: 'devis', icon: FileText, label: 'Devis et chiffrage', hours: 12 },
  { id: 'relances', icon: BellRing, label: 'Relances clients', hours: 6 },
  { id: 'rdv', icon: Calendar, label: 'Prise de rendez-vous', hours: 8 },
  { id: 'emails', icon: Mail, label: 'Tri des emails', hours: 7 },
  { id: 'factures', icon: Receipt, label: 'Facturation', hours: 9 },
  { id: 'appels', icon: PhoneMissed, label: 'Appels manqués', hours: 5 },
  { id: 'planning', icon: Users, label: 'Planning techniciens', hours: 8 },
  { id: 'avis', icon: Star, label: 'Avis Google', hours: 3 },
  { id: 'suivi', icon: ClipboardCheck, label: 'Suivi de chantier', hours: 6 },
  { id: 'crm', icon: Database, label: 'Saisie dans le CRM', hours: 10 },
  { id: 'entretien', icon: Wrench, label: "Rappels d'entretien", hours: 5 },
  { id: 'cr', icon: FileText, label: 'Comptes rendus', hours: 6 },
];

const VISIBLE = 6;
const fr = (n) => Math.round(n).toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ');

export default function TimeCalculator({ className = '' }) {
  const { open } = useContact();
  const [selected, setSelected] = useState(() => new Set());
  const [showAll, setShowAll] = useState(false);
  const [rate, setRate] = useState(45);

  const visible = showAll ? TASKS : TASKS.slice(0, VISIBLE);

  const hours = TASKS.reduce((sum, t) => sum + (selected.has(t.id) ? t.hours : 0), 0);
  const safeRate = Math.min(Math.max(Number(rate) || 0, 0), 500);
  const perMonth = hours * safeRate;

  const toggle = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section className={cn('py-12 md:py-16 px-5 md:px-12', className)} id="calculateur">
      <div className="max-w-4xl mx-auto">
        <div className="card-brut p-5 md:p-8">
          <p className="label-cond mb-3">Le calculateur</p>
          <h2 className="chunky-sm text-[clamp(1.5rem,3.5vw,2.2rem)] mb-2">
            Qu'est-ce qui vous prend du temps <span className="text-cyan">aujourd'hui ?</span>
          </h2>
          <p className="text-ghost/70 text-sm mb-5 max-w-xl">
            Cochez vos tâches du quotidien. Pour chacune, vous voyez ce que l'automatisation peut vous rendre.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {visible.map(({ id, icon: Icon, label, hours: h }) => {
              const on = selected.has(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggle(id)}
                  aria-pressed={on}
                  className={cn(
                    'flex flex-col items-center justify-center gap-1.5 text-center rounded-2xl px-2 py-3 min-h-[84px] transition-colors border-2',
                    on ? 'border-cyan bg-cyan/10' : 'border-cyan/20 bg-graphite/40 hover:border-cyan/60'
                  )}
                >
                  <Icon className="w-5 h-5 text-cyan" aria-hidden="true" />
                  <span className="text-[13px] font-medium leading-tight text-ghost">{label}</span>
                  <span className="text-[11px] text-ghost/55">{h} h/mois</span>
                </button>
              );
            })}
          </div>

          {!showAll && (
            <button type="button" onClick={() => setShowAll(true)} className="mt-3 mx-auto flex items-center gap-1.5 text-sm text-cyan hover:underline underline-offset-4">
              Plus de tâches <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </button>
          )}

          <div className="mt-4 flex items-center gap-3 text-sm text-ghost/70">
            <label htmlFor="calc-rate">Votre coût horaire</label>
            <input
              id="calc-rate"
              type="number"
              inputMode="numeric"
              min="0"
              max="500"
              step="5"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-20 h-9 rounded-lg bg-transparent border border-cyan/25 text-ghost text-center focus:outline-none focus:border-cyan"
            />
            <span>€/h</span>
          </div>

          <div className="mt-5 pt-5 border-t border-cyan/20 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div aria-live="polite">
              <p className="font-display uppercase text-cyan text-3xl md:text-4xl leading-none">{hours} h / mois</p>
              <p className="text-ghost/65 text-sm mt-2">
                {hours
                  ? `Soit ${fr(perMonth)} € par mois, ou ${fr(perMonth * 12)} € par an. Estimation indicative, on la précise ensemble pendant l'appel.`
                  : 'Cochez vos tâches pour voir votre gain.'}
              </p>
            </div>
            <button type="button" onClick={() => open('calendly')} className="btn-cyan flex-shrink-0">
              <Calendar className="w-4 h-4" /> Voir mon plan d'automatisation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
