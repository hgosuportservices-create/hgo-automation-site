import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, CheckCircle2, Calendar, Globe, Zap, BarChart3 } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from '../components/SharedNav';
import SiteFooter from '../components/SiteFooter';
import { CALL_MIN } from '../config';

const STATS = [
  { value: '13 600', label: 'Impressions Google (3 mois)' },
  { value: '138',    label: 'Clics organiques générés' },
  { value: '8,6',   label: 'Position moyenne sur Google' },
];

const FEATURES = [
  {
    icon: Globe,
    title: 'Site vitrine refait de zéro',
    desc: 'Design moderne orienté conversion, mobile-first, rapide à charger — pensé pour convaincre un prospect en quelques secondes.',
  },
  {
    icon: Zap,
    title: 'Formulaire connecté à Interfast',
    desc: 'Chaque demande soumise sur le site est transmise automatiquement dans Interfast — zéro ressaisie, zéro perte de lead, traitement immédiat.',
  },
  {
    icon: BarChart3,
    title: 'SEO technique intégré',
    desc: 'Balises, sitemap, structure sémantique et performance Core Web Vitals optimisés dès le lancement pour un référencement rapide.',
  },
  {
    icon: CheckCircle2,
    title: 'Pages services dédiées',
    desc: 'Pompes à chaleur, climatisation, ventilation, bornes IRVE — chaque métier a sa propre page optimisée pour Google.',
  },
];

const TIMELINE = [
  { step: 'Semaine 1', label: 'Diagnostic & brief',    desc: 'Analyse du site existant, des objectifs commerciaux et de la connexion Interfast requise.' },
  { step: 'Semaine 2', label: 'Maquette validée',       desc: 'Design complet soumis et validé — une seule boucle de retours.' },
  { step: 'Semaine 3', label: 'Développement',          desc: 'Site codé, formulaire connecté à Interfast, SEO technique en place.' },
  { step: 'Semaine 4', label: 'Mise en ligne',          desc: 'Déploiement, tests cross-device et passage de relais.' },
];

export default function CasClientLesInstallateurs() {
  const { open } = useContact();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>LesInstallateurs.fr — Cas Client | HGO Automation</title>
        <meta name="description" content="Comment LesInstallateurs.fr a obtenu 13 600 impressions Google en 3 mois grâce à une refonte de site vitrine connectée à Interfast." />
        <link rel="canonical" href="https://www.hgoautomation.fr/cas-client/lesinstallateurs" />
      </Helmet>

      <SharedNav />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center px-8 md:px-24 pt-40 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <span className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-8">
            Cas client
          </span>
          <div className="flex items-center gap-6 mb-8">
            <img src="/lesinstallateurs-logo.png" alt="LesInstallateurs.fr" className="w-20 md:w-24 object-contain" />
            <div>
              <h1 className="chunky text-[clamp(2rem,5vw,3.8rem)]">LesInstallateurs.fr</h1>
              <p className="text-ghost/50 mt-1">Installateur RGE — pompes à chaleur, climatisation, ventilation, bornes IRVE — Île-de-France & Oise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 md:px-24 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="card-brut p-6 text-center">
              <p className="text-3xl font-bold text-cyan mb-2">{s.value}</p>
              <p className="text-ghost/40 text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 px-8 md:px-24">
        <div className="max-w-3xl mx-auto">

          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Le défi</h2>
          <p className="text-ghost/60 leading-relaxed mb-12">
            LesInstallateurs.fr intervenait en Île-de-France et dans l'Oise sur des chantiers exigeants —
            pompes à chaleur, bornes IRVE, climatisation. Leur problème : un site vitrine vieillissant
            qui ne convertissait pas, et une gestion des leads entièrement manuelle déconnectée de leur
            outil métier Interfast. Chaque demande web devait être ressaisie à la main.
          </p>

          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-6">Ce qui a été mis en place</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-ghost mb-1">{f.title}</h3>
                    <p className="text-ghost/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-8">Timeline — livré en 1 mois</h2>
          <div className="relative border-l border-cyan/20 pl-8 space-y-8 mb-12">
            {TIMELINE.map((t) => (
              <div key={t.step} className="relative">
                <div className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-cyan/40 border border-cyan" />
                <span className="font-cond text-xs tracking-wide uppercase tracking-widest text-cyan">{t.step}</span>
                <h3 className="font-bold text-ghost mt-1 mb-1">{t.label}</h3>
                <p className="text-ghost/50 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Les résultats</h2>
          <p className="text-ghost/60 leading-relaxed">
            En 3 mois après la mise en ligne, le site de LesInstallateurs.fr totalise{' '}
            <strong className="text-ghost">13 600 impressions</strong> sur Google avec une position
            moyenne de <strong className="text-ghost">8,6</strong> — soit presque systématiquement
            en première page. <strong className="text-ghost">138 clics organiques</strong> ont été
            générés, entièrement transmis en automatique vers Interfast sans aucune saisie manuelle.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center card-brut !rounded-[2.5rem] p-12 md:p-16">
          <h2 className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-4">
            Un projet similaire ?
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">
            Refonte de site, connexion à votre outil métier, automatisation des leads entrants —
            appel de {CALL_MIN} min pour voir ce qu'on peut faire ensemble.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={open}
              className="btn-cyan"
            >
              Discuter de mon projet <ArrowUpRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => open('calendly')}
              className="btn-outline"
            >
              <Calendar className="w-4 h-4" /> Planifier un appel
            </button>
          </div>
        </div>
      </section>

      <SiteFooter cta={false} />
    </main>
  );
}
