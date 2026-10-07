import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SharedNav from '../components/SharedNav';
import SiteFooter from '../components/SiteFooter';
import { CALL_MIN } from '../config';

const URL = 'https://www.hgoautomation.fr/campagnes-copropriete';

const ETAPES = [
  { n: '1', t: 'Vous lancez une campagne', d: "Un immeuble, un syndicat, vos services et votre grille de prix : la campagne est prête en quelques minutes." },
  { n: '2', t: 'Les résidents s\'inscrivent seuls', d: "Chacun reçoit un lien, sans compte à créer. Plus il y a d'inscriptions, plus le prix par unité baisse pour tout le monde : les voisins se motivent entre eux." },
  { n: '3', t: 'Tout le reste se fait seul', d: "Relances aux résidents sans réponse, planification des techniciens, suivi des unités et export de la liste du jour." },
];

const CAPTURES = [
  { src: '/campagnes/tableau-de-bord.jpg', alt: 'Tableau des campagnes par étape : brouillon, ouvert, clôturé, planifié, terminé', legende: 'Toutes vos campagnes, étape par étape', w: 1800, h: 1093 },
  { src: '/campagnes/campagne-active.jpg', alt: "Campagne active : paliers de prix dégressifs et suivi des unités", legende: 'Les paliers de prix et le suivi de chaque unité', w: 1800, h: 1093 },
  { src: '/campagnes/tarification.jpg', alt: 'Tarification par paliers : le prix par unité baisse avec le nombre d\'inscriptions', legende: 'Vos paliers de prix : plus il y a d\'inscriptions, plus le prix baisse', w: 1800, h: 1000 },
];

export default function CampagnesCopropriete() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Campagnes de nettoyage en copropriété | HGO Automation</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Une campagne, un immeuble, toutes les unités : inscription des résidents, prix dégressifs, relances automatiques et planification des techniciens." />
        <link rel="canonical" href={URL} />
      </Helmet>

      <SharedNav />

      <section className="px-6 md:px-24 pt-36 pb-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-6">
            Copropriétés · Québec
          </span>
          <h1 className="chunky text-[clamp(2rem,5vw,3.6rem)] mb-4">Une campagne, un immeuble, toutes les unités</h1>
          <p className="text-ghost/60 leading-relaxed mb-8 max-w-2xl">
            Vous nettoyez les conduits d'immeubles entiers ? Les résidents s'inscrivent eux-mêmes, le prix baisse à chaque inscription, les relances et la planification de vos techniciens se font seules.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/demo-campagnes/" target="_blank" rel="noopener" className="btn-cyan">Essayer la démo interactive</a>
            <Link to="/rendez-vous" className="btn-outline">En parler {CALL_MIN} minutes</Link>
          </div>
          <p className="text-ghost/50 text-sm mt-4">Démo avec des données fictives. Plateforme en accès anticipé.</p>
        </div>
      </section>

      <section className="px-6 md:px-24 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-2">La plateforme en 40 secondes</h2>
          <p className="text-ghost/50 text-sm mb-6">Aperçu avec des données fictives.</p>
          <video className="w-full h-auto rounded-xl border-2 border-cyan/30" controls preload="none" playsInline poster="/campagnes/demo-campagnes-poster.jpg">
            <source src="/campagnes/demo-campagnes.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {CAPTURES.map((c) => (
            <figure key={c.src} className="card-brut overflow-hidden !p-0">
              <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" className="w-full h-auto block" />
              <figcaption className="px-5 py-3 text-sm text-ghost/70">{c.legende}</figcaption>
            </figure>
          ))}
          <figure className="card-brut overflow-hidden !p-0">
            <img src="/campagnes/portail-resident.jpg" alt="Portail résident sur mobile : prix actuel, inscriptions confirmées et bouton Je participe" width="1497" height="1239" loading="lazy" className="w-full h-auto block" />
            <figcaption className="px-5 py-3 text-sm text-ghost/70">Ce que voit le résident : le prix, et un seul bouton</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 md:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-8">Comment ça marche</h2>
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

      <section className="px-6 md:px-24 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="chunky-sm text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Vous faites déjà des campagnes en immeuble ?</h2>
          <p className="text-ghost/60 leading-relaxed mb-8">
            Dites-moi comment vous gérez les inscriptions aujourd'hui (tableur, téléphone, courriels). Je construis cette plateforme avec les entreprises qui en ont besoin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rendez-vous" className="btn-cyan">Réserver {CALL_MIN} minutes</Link>
            <a href="mailto:hugo@hgoautomation.fr?subject=Campagnes%20en%20copropri%C3%A9t%C3%A9" className="btn-outline">Écrire à Hugo</a>
          </div>
        </div>
      </section>

      <SiteFooter cta={false} sansCasRousso />
    </main>
  );
}
