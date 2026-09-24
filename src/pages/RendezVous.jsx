import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SharedNav from '../components/SharedNav';
import SiteFooter from '../components/SiteFooter';
import { BookingWidget } from '../components/ContactModal';
import { CALL_MIN } from '../config';

export default function RendezVous() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Réserver un appel de {String(CALL_MIN)} minutes | HGO Automation</title>
        <meta name="description" content={`Appel gratuit de ${CALL_MIN} minutes avec Hugo Fonseca pour voir ce qu'on peut automatiser chez vous : appels, RDV, devis, relances, factures.`} />
        <link rel="canonical" href="https://www.hgoautomation.fr/rendez-vous" />
        <meta property="og:title" content={`Réserver un appel gratuit de ${CALL_MIN} minutes — HGO Automation`} />
        <meta property="og:description" content="On regarde ensemble ce qui vous fait perdre du temps et ce qu'on peut automatiser en premier. Gratuit, sans engagement." />
        <meta property="og:url" content="https://www.hgoautomation.fr/rendez-vous" />
        <meta property="og:image" content="https://www.hgoautomation.fr/og-cover.png" />
      </Helmet>

      <SharedNav />

      <section className="px-6 md:px-24 pt-36 pb-16">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-6">
            Premier échange
          </span>
          <h1 className="chunky text-[clamp(2rem,5vw,3.6rem)] mb-4">Réserver un appel de {CALL_MIN} minutes</h1>
          <p className="text-ghost/60 leading-relaxed mb-10 max-w-2xl">
            On regarde ensemble ce qui vous fait perdre du temps (appels, devis, relances, factures) et ce qu'on peut automatiser en premier. Gratuit, sans engagement.
          </p>
          <div className="card-brut overflow-hidden !p-0">
            <BookingWidget />
          </div>
        </div>
      </section>

      <SiteFooter cta={false} />
    </main>
  );
}
