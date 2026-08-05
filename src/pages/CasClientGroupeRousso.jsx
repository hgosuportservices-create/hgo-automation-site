import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from '../components/SharedNav';

const STATS = [
  { value: '26 751 $', label: 'CA généré sur 2 mois (HT)' },
  { value: '70', label: 'Devis convertis ce mois-ci' },
  { value: '67,3 %', label: 'Taux de conversion' },
];

const FEATURES = [
  { title: 'CRM sur mesure', desc: "Conçu autour de leur process réel de gestion de devis et de clients résidentiels, pas un outil générique détourné." },
  { title: 'Relances client automatisées', desc: "Chaque devis en attente est relancé automatiquement, sans intervention manuelle." },
  { title: 'Devis générés et envoyés par email', desc: "Le calcul (sous-total, TPS, TVQ, total TTC) et l'envoi sont automatiques dès qu'une demande est qualifiée." },
  { title: 'Connecté à leur planification', desc: "Les interventions planifiées et acceptées remontent directement dans leur système de gestion des rendez-vous." },
];

export default function CasClientGroupeRousso() {
  const { open } = useContact();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Groupe Rousso — Cas Client | HGO Automation</title>
        <meta name="description" content="Comment Groupe Rousso, entreprise de nettoyage de conduits de ventilation à Montréal, a automatisé sa gestion de devis et de clients avec HGO Automation." />
        <link rel="canonical" href="https://hgoautomation.fr/cas-client/groupe-rousso" />
      </Helmet>

      <SharedNav />

      <section className="relative min-h-[50vh] flex items-center px-8 md:px-24 pt-40 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-cyan border border-cyan/30 px-4 py-1.5 rounded-full bg-cyan/5 mb-8">
            Cas client
          </span>
          <div className="flex items-center gap-6 mb-8">
            <img src="/groupe-rousso-logo.webp" alt="Groupe Rousso" className="w-20 md:w-24" />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Groupe Rousso</h1>
              <p className="text-ghost/50 mt-1">Nettoyage de conduits de ventilation — Montréal, Québec</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-24 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-premium p-6 text-center">
              <p className="text-3xl font-bold text-cyan mb-2">{s.value}</p>
              <p className="text-ghost/40 text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-8 md:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Le défi</h2>
          <p className="text-ghost/60 leading-relaxed mb-12">
            Groupe Rousso reçoit des centaines de demandes de nettoyage de conduits chaque mois,
            partout dans la grande région de Montréal. Sans système automatisé, chaque devis
            demandait un suivi manuel — avec le risque de perdre des demandes en cours de route.
          </p>

          <h2 className="text-2xl font-bold tracking-tight mb-6">Ce qui a été mis en place</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-ghost mb-1">{f.title}</h3>
                  <p className="text-ghost/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight mb-4">Les résultats</h2>
          <p className="text-ghost/60 leading-relaxed">
            Sur les 2 derniers mois, Groupe Rousso a généré <strong className="text-ghost">26 751 $</strong> de
            chiffre d'affaires hors taxes via le système de devis automatisé, avec un taux de
            conversion de <strong className="text-ghost">67,3 %</strong> — près de 7 devis envoyés sur 10 aboutissent
            à une intervention planifiée.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-cyan/20 bg-cyan/5 p-12 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Un projet similaire ?
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">
            Appel de découverte gratuit de 30 minutes pour voir si HGO Automation a sa place chez vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={open}
              className="inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Discuter de mon projet <ArrowUpRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => open('calendly')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-ghost/20 hover:border-cyan transition-colors"
            >
              <Calendar className="w-4 h-4" /> Planifier un appel
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 md:px-24 border-t border-ghost/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-[10px] font-mono opacity-40 hover:opacity-70 transition-opacity uppercase tracking-widest">
            © 2026 Hugo Fonseca — HGO Automation
          </Link>
          <div className="flex gap-6 text-[10px] font-mono opacity-40">
            <Link to="/blog" className="hover:text-cyan hover:opacity-100 transition-all">Blog</Link>
            <Link to="/" className="hover:text-cyan hover:opacity-100 transition-all">Accueil</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
