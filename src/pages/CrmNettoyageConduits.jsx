import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SharedNav from '../components/SharedNav';
import SiteFooter from '../components/SiteFooter';
import { CALL_MIN } from '../config';

const URL = 'https://www.hgoautomation.fr/crm-nettoyage-conduits';

const FONCTIONS = [
  { t: 'Devis en quelques clics', d: "Vous cochez les services : sous-total, TPS, TVQ et rabais sont calculés. Le devis PDF à votre nom part par courriel, en français ou en anglais, avec des créneaux de rendez-vous proposés au client." },
  { t: 'Relances automatiques', d: "Chaque devis sans réponse est relancé au bon moment, sans que vous ayez à y penser. Les devis oubliés ne dorment plus dans votre boîte." },
  { t: "Plans d'entretien sur plusieurs années", d: "Vous proposez un contrat d'entretien pluriannuel à vos clients récurrents (commerciaux, copropriétés) et les échéances sont suivies pour vous." },
  { t: 'Tableau de bord', d: "Chiffre d'affaires du mois, taxes, taux de conversion et devis en attente, au même endroit." },
  { t: 'Suivi des devis', d: "Brouillon, envoyé, accepté, refusé, sans réponse : vous savez où en est chaque proposition en un coup d'œil." },
  { t: 'À votre image', d: "Votre nom, votre logo, vos prix et vos taxes. Une installation qui vous appartient, pas un logiciel générique." },
];

const CAPTURES = [
  { src: '/crm-conduits/tableau-de-bord.jpg', alt: "Tableau de bord : chiffre d'affaires du mois, taxes et taux de conversion", legende: 'Le tableau de bord' },
  { src: '/crm-conduits/devis.jpg', alt: "Formulaire de nouveau devis avec aperçu du prix et créneaux de rendez-vous", legende: 'Un devis en quelques clics' },
  { src: '/crm-conduits/suivi-devis.jpg', alt: 'Historique des devis avec leur statut : brouillon, refusé, accepté', legende: 'Le suivi de chaque devis' },
  { src: '/crm-conduits/plans-entretien.jpg', alt: "Plans d'entretien pluriannuels avec budget prévu par année et par bâtiment", legende: "Les plans d'entretien sur plusieurs années" },
];

const FAQ = [
  { q: 'Le CRM calcule-t-il la TPS et la TVQ ?', a: "Oui. Vous cochez les services, et le sous-total, la TPS, la TVQ et les rabais sont calculés dans la soumission." },
  { q: 'Les soumissions peuvent-elles être en français et en anglais ?', a: "Oui. Le devis PDF part par courriel à votre nom, en français ou en anglais, avec des créneaux de rendez-vous proposés au client." },
  { q: 'Pour quelles entreprises est-il conçu ?', a: "Pour les entreprises de nettoyage de conduits de ventilation (CVAC) qui préparent des soumissions, relancent des clients et suivent des contrats d'entretien récurrents." },
  { q: 'Combien ça coûte ?', a: "Le prix est sur devis, selon votre volume et ce que vous voulez automatiser. Vous recevez une proposition dans les 48 heures après un appel gratuit de 20 minutes." },
];

const ETAPES = [
  { n: '1', t: `Un appel de ${CALL_MIN} minutes`, d: "Vous me racontez comment vous préparez et suivez vos devis aujourd'hui." },
  { n: '2', t: 'Une démonstration à votre image', d: "Je vous montre uniquement ce qui répond à votre quotidien, avec le nom de votre entreprise." },
  { n: '3', t: 'Une proposition sur devis', d: "Adaptée à votre volume et à ce que vous voulez automatiser, envoyée dans les 48 heures." },
];

export default function CrmNettoyageConduits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>{`CRM pour nettoyage de conduits au Québec | HGO Automation`}</title>
        <meta name="description" content="Soumissions en quelques clics, relances automatiques, plans d'entretien et tableau de bord pour les entreprises de nettoyage de conduits (CVAC) au Québec." />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content="CRM pour nettoyage de conduits au Québec — HGO Automation" />
        <meta property="og:locale" content="fr_CA" />
        <meta property="og:description" content="Vos devis partent en quelques clics, les relances se font seules, vos entretiens sont suivis. Sur devis." />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://www.hgoautomation.fr/og-cover.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "CRM pour entreprises de nettoyage de conduits",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Plateforme CRM sur mesure : soumissions en français ou en anglais avec TPS et TVQ, relances automatiques, plans d'entretien pluriannuels et tableau de bord.",
              "inLanguage": ["fr-CA", "en-CA"],
              "areaServed": { "@type": "AdministrativeArea", "name": "Québec" },
              "provider": { "@type": "Organization", "name": "HGO Automation", "url": "https://www.hgoautomation.fr" },
              "url": URL
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQ.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
            }
          ]
        })}</script>
      </Helmet>

      <SharedNav />

      <section className="px-6 md:px-24 pt-36 pb-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-6">
            Nettoyage de conduits
          </span>
          <h1 className="chunky text-[clamp(2rem,5vw,3.6rem)] mb-4">Un CRM pour vos soumissions et vos entretiens de conduits</h1>
          <p className="text-ghost/60 leading-relaxed mb-8 max-w-2xl">
            Vos devis partent en quelques clics, les relances se font seules et vos clients récurrents sont suivis d'une année à l'autre. Une plateforme à l'image de votre entreprise, conçue pour le nettoyage de conduits de ventilation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/rendez-vous" className="btn-cyan">
              Réserver {CALL_MIN} minutes
            </Link>
            <span className="text-ghost/50 text-sm">Prix : sur devis</span>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-2">La plateforme en 40 secondes</h2>
          <p className="text-ghost/50 text-sm mb-6">Aperçu avec des données fictives.</p>
          <video className="w-full h-auto rounded-xl border-2 border-cyan/30" controls preload="none" playsInline poster="/crm-conduits/demo-crm-poster.jpg">
            <source src="/crm-conduits/demo-crm.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-2">La plateforme en images</h2>
          <p className="text-ghost/50 text-sm mb-8">Aperçu avec des données fictives.</p>
          <div className="grid gap-8 md:grid-cols-2">
            {CAPTURES.map((c) => (
              <figure key={c.src} className="card-brut overflow-hidden !p-0">
                <img src={c.src} alt={c.alt} width="1800" height="1092" loading="lazy" className="w-full h-auto block" />
                <figcaption className="px-5 py-3 text-sm text-ghost/70">{c.legende}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-8">Ce que ça vous apporte</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FONCTIONS.map((f) => (
              <div key={f.t} className="card-brut p-6">
                <h3 className="font-cond uppercase tracking-wide text-lg font-semibold mb-2">{f.t}</h3>
                <p className="text-ghost/60 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-8">Comment ça se passe</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ETAPES.map((e) => (
              <div key={e.n} className="card-brut p-6">
                <div className="chunky text-4xl text-cyan mb-2">{e.n}</div>
                <h3 className="font-cond uppercase tracking-wide font-semibold mb-2">{e.t}</h3>
                <p className="text-ghost/60 text-sm leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-8">Questions fréquentes</h2>
          <div className="grid gap-4">
            {FAQ.map((f) => (
              <div key={f.q} className="card-brut p-6">
                <h3 className="font-cond uppercase tracking-wide font-semibold mb-2">{f.q}</h3>
                <p className="text-ghost/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-4">On regarde avec votre entreprise dedans ?</h2>
          <p className="text-ghost/60 leading-relaxed mb-8">
            {CALL_MIN} minutes suffisent pour voir si cela correspond à votre façon de travailler. Gratuit, sans engagement.
          </p>
          <Link to="/rendez-vous" className="btn-cyan">
            Réserver {CALL_MIN} minutes
          </Link>
        </div>
      </section>

      <SiteFooter cta={false} sansCasRousso />
    </main>
  );
}
