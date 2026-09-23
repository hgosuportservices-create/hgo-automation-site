import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import { Logo } from './Logo';
import { CALL_MIN } from '../config';

const COLUMNS = [
  {
    title: 'Métiers',
    links: [
      { label: 'CVC & climatisation', to: '/secteurs/automatisation-cvc-climatisation-chauffage' },
      { label: 'Plombiers & chauffagistes', to: '/secteurs/automatisation-plombier-chauffagiste' },
      { label: 'Électriciens & IRVE', to: '/secteurs/automatisation-electricien' },
      { label: 'Rénovation & bâtiment', to: '/secteurs/automatisation-renovation-batiment' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'WhatsApp & Telegram', to: '/services/automatisation-whatsapp-telegram' },
      { label: 'Agents IA', to: '/services/agent-ia' },
      { label: 'Automatisation n8n', to: '/services/automatisation-n8n' },
      { label: 'CRM sur mesure', to: '/services/automatisation-crm' },
      { label: 'Formation & installation', to: '/formation' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'À propos', to: '/a-propos' },
      { label: 'Blog', to: '/blog' },
      { label: 'Cas client : Groupe Rousso', to: '/cas-client/groupe-rousso' },
      { label: 'Cas client : LesInstallateurs', to: '/cas-client/lesinstallateurs' },
    ],
  },
];

export default function SiteFooter({ cta = true }) {
  const { open } = useContact();

  return (
    <footer className="px-6 md:px-24 pt-20 md:pt-28 pb-10 border-t-2 border-cyan/40 bg-void">
      {/* Bandeau d'appel à l'action */}
      {cta && <div className="card-cyan max-w-6xl mx-auto !rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl mb-3 text-void">
            Prêt à ne plus perdre de clients ?
          </h2>
          <p className="text-void/80 max-w-xl">
            {CALL_MIN} minutes en visio pour voir ce qu'on peut automatiser chez vous. Gratuit, sans engagement, réponse sous 24h.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          <button
            onClick={() => open('calendly')}
            className="bg-void text-cyan px-6 py-3.5 rounded-full font-cond uppercase tracking-[0.1em] text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
          >
            <Calendar className="w-4 h-4" /> Réserver un appel
          </button>
          <button
            onClick={() => open('leadmagnet')}
            className="px-6 py-3.5 rounded-full font-cond uppercase tracking-[0.1em] text-sm font-semibold border-2 border-void text-void hover:-translate-y-0.5 transition-transform"
          >
            Guide gratuit
          </button>
        </div>
      </div>}

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2">
          <Link to="/" className="inline-flex mb-5"><Logo size="lg" /></Link>
          <p className="text-ghost/45 text-sm font-light leading-relaxed max-w-xs mb-6">
            Automatisation & IA pour les artisans, les entreprises du bâtiment et les PME. Moins d'administratif, plus de clients.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/hugo-fonseca-6b53603aa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-void border-2 border-cyan/40 flex items-center justify-center text-ghost/60 hover:bg-cyan/10 hover:border-cyan/30 hover:text-cyan transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:hugo@hgoautomation.fr" aria-label="Email" className="w-10 h-10 rounded-xl bg-void border-2 border-cyan/40 flex items-center justify-center text-ghost/60 hover:bg-cyan/10 hover:border-cyan/30 hover:text-cyan transition-all">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.malt.fr/profile/hugofonseca1" target="_blank" rel="noopener noreferrer" className="h-10 px-4 rounded-xl bg-void border-2 border-cyan/40 flex items-center gap-1 text-xs font-bold text-ghost/60 hover:bg-cyan/10 hover:border-cyan/30 hover:text-cyan transition-all">
              Malt <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <a href="mailto:hugo@hgoautomation.fr" className="inline-block mt-5 text-sm text-cyan font-bold hover:underline underline-offset-4">hugo@hgoautomation.fr</a>
        </div>

        {COLUMNS.map(col => (
          <div key={col.title}>
            <h3 className="label-cond !font-cond !tracking-[0.2em] mb-5">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ghost/60 hover:text-cyan transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-cyan/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-ghost/35">
        <span>© 2026 Hugo Fonseca — HGO Automation · SIRET 908 443 120 00021</span>
        <div className="flex items-center gap-6">
          <Link to="/mentions-legales" className="hover:text-cyan transition-colors">Mentions légales</Link>
          <Link to="/cgv" className="hover:text-cyan transition-colors">CGV</Link>
        </div>
      </div>
    </footer>
  );
}
