import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from '../components/SharedNav';
import SiteFooter from '../components/SiteFooter';
import { CALL_MIN } from '../config';

const STATS = [
  { value: '52 000 $ CAD', label: 'CA généré sur 2 mois (HT)' },
  { value: '70', label: 'Devis convertis en août 2026' },
  { value: '85 %', label: 'Taux de conversion' },
];

const FEATURES = [
  { title: 'Une plateforme CRM à leur nom', desc: "Une application web sur mesure (tableau de bord, clients, historique des devis), conçue autour de leur façon de travailler, pas un outil générique détourné." },
  { title: 'Devis en quelques clics, en français ou en anglais', desc: "On coche les services : sous-total, TPS, TVQ et rabais sont calculés, puis le devis PDF part par courriel avec jusqu'à 3 créneaux de rendez-vous proposés au client." },
  { title: 'Relances et échéances suivies', desc: "Chaque devis en attente est relancé automatiquement, et les échéances d'entretien sont suivies pour ne perdre aucun client." },
  { title: "Plans d'entretien et suivi terrain", desc: "Plans d'entretien, ferblanterie et rapports d'intervention réunis au même endroit que les devis et les clients." },
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
        <meta name="description" content="Comment Groupe Rousso, entreprise de nettoyage de conduits de ventilation à Montréal, gère ses devis, relances et plans d'entretien dans une plateforme CRM sur mesure créée par HGO Automation." />
        <link rel="canonical" href="https://www.hgoautomation.fr/cas-client/groupe-rousso" />
      </Helmet>

      <SharedNav />

      <section className="relative min-h-[50vh] flex items-center px-8 md:px-24 pt-40 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <span className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-8">
            Cas client
          </span>
          <div className="flex items-center gap-6 mb-8">
            <img src="/groupe-rousso-logo.webp" alt="Groupe Rousso" className="w-20 md:w-24" />
            <div>
              <h1 className="chunky text-[clamp(2rem,5vw,3.8rem)]">Groupe Rousso</h1>
              <p className="text-ghost/50 mt-1">Nettoyage de conduits de ventilation — Montréal, Québec</p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-12 px-8 md:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Le défi</h2>
          <p className="text-ghost/60 leading-relaxed mb-12">
            Groupe Rousso reçoit des centaines de demandes de nettoyage de conduits chaque mois,
            partout dans la grande région de Montréal. Sans système automatisé, chaque devis
            demandait un suivi manuel — avec le risque de perdre des demandes en cours de route.
          </p>

          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-6">Ce qui a été mis en place</h2>
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

          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Les résultats</h2>
          <p className="text-ghost/60 leading-relaxed">
            Sur les 2 derniers mois, Groupe Rousso a généré <strong className="text-ghost">52 000 $ CAD</strong> de
            chiffre d'affaires hors taxes via le système de devis automatisé, avec un taux de
            conversion de <strong className="text-ghost">85 %</strong> — plus de 8 devis envoyés sur 10 aboutissent
            à une intervention planifiée.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center card-brut !rounded-[2.5rem] p-12 md:p-16">
          <h2 className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-4">
            Un projet similaire ?
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">
            Appel de découverte gratuit de {CALL_MIN} minutes pour voir si HGO Automation a sa place chez vous.
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
