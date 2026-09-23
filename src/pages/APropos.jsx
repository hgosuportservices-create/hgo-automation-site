import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Linkedin, Mail } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from '../components/SharedNav';
import SiteFooter from '../components/SiteFooter';
import { STACK } from '../components/StackBar';
import { Blob, BLOB_RADII, Float, STARS_INK, useMouseParallax } from '../components/Brand';
import { Sparkle, Van, Tools, ClimUnit, Quote } from '../components/Illustrations';
import { CALL_MIN } from '../config';

const PARCOURS = [
  { title: 'Le terrain d\'abord', desc: "Formé en technico-commercial CVC, j'ai vu de près le quotidien des artisans : les chantiers, les clients au téléphone, les devis à chiffrer et les relances qu'on repousse toujours à plus tard." },
  { title: 'Le constat', desc: "Les artisans ne perdent pas des chantiers sur la technique. Ils les perdent au bureau : un appel manqué en intervention, un devis envoyé trop tard, une relance oubliée." },
  { title: 'HGO Automation', desc: "J'ai créé HGO Automation pour régler ça avec des outils simples : un assistant WhatsApp qui répond 24h/24, des devis qui partent le jour même, des relances qui se font toutes seules. Sans changer vos logiciels." },
];

const VALEURS = [
  { not: 'Je ne vends pas de robots.', but: "J'automatise uniquement ce qui vous fait perdre du temps." },
  { not: 'Je ne remplace pas vos équipes.', but: 'Je leur retire les tâches répétitives.' },
  { not: 'Je ne fais pas de démonstrations.', but: 'Je livre des systèmes utilisés chaque jour.' },
];

const CHIFFRES = [
  { v: '52 000 $', l: 'CAD générés pour Groupe Rousso en 2 mois', to: '/cas-client/groupe-rousso' },
  { v: '85 %', l: 'de devis convertis chez Groupe Rousso', to: '/cas-client/groupe-rousso' },
  { v: '13 600', l: 'impressions Google en 3 mois pour LesInstallateurs.fr', to: '/cas-client/lesinstallateurs' },
];

export default function APropos() {
  const { open } = useContact();
  const { mx, my, onMouseMove } = useMouseParallax();

  return (
    <main className="min-h-screen text-ghost font-sans overflow-x-hidden">
      <Helmet>
        <title>À propos — Hugo Fonseca | HGO Automation</title>
        <meta name="description" content="Hugo Fonseca, fondateur d'HGO Automation, ancien technico-commercial CVC. Il automatise RDV, devis et relances pour les artisans du bâtiment." />
        <link rel="canonical" href="https://www.hgoautomation.fr/a-propos" />
        <meta property="og:title" content="À propos — Hugo Fonseca | HGO Automation" />
        <meta property="og:url" content="https://www.hgoautomation.fr/a-propos" />
        <meta property="og:image" content="https://www.hgoautomation.fr/og-cover.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Hugo Fonseca',
          jobTitle: "Fondateur d'HGO Automation",
          image: 'https://www.hgoautomation.fr/hugo-fonseca.jpeg',
          url: 'https://www.hgoautomation.fr/a-propos',
          worksFor: { '@type': 'Organization', name: 'HGO Automation', url: 'https://www.hgoautomation.fr' },
          sameAs: ['https://www.linkedin.com/in/hugo-fonseca-6b53603aa', 'https://www.malt.fr/profile/hugofonseca1'],
        })}</script>
      </Helmet>

      <SharedNav />

      {/* Hero */}
      <section onMouseMove={onMouseMove} className="relative overflow-hidden px-5 md:px-16 pt-32 pb-24">
        <Blob className="hidden md:block w-[26vw] max-w-[300px] aspect-[1.1] -right-[6%] top-[18%]" radius={BLOB_RADII[1]} />
        <Blob className="w-[50vw] max-w-[460px] aspect-[1.5] -left-[25vw] md:-left-[8%] -bottom-[25%]" radius={BLOB_RADII[2]} />
        <Float mx={mx} my={my} depth={18} delay={0.6} className="hidden lg:block left-[30%] bottom-[2%] w-44">
          <Van className="w-full" />
        </Float>
        <Sparkle className="absolute w-7 left-[46%] top-[22%]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-8">À propos</span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="chunky text-[clamp(2.4rem,6vw,5rem)] mb-8">
              Hugo<br />Fonseca
            </motion.h1>
            <p className="text-lg md:text-xl text-ghost/80 leading-relaxed bg-void/80 rounded-2xl max-w-xl">
              Fondateur d'HGO Automation. J'aide les artisans du bâtiment et les PME à ne plus perdre de clients à cause de l'administratif : RDV, devis et relances qui tournent tout seuls.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => open('calendly')} className="btn-cyan"><Calendar className="w-4 h-4" /> Appel gratuit de {CALL_MIN} min</button>
              <a href="https://www.linkedin.com/in/hugo-fonseca-6b53603aa" target="_blank" rel="noopener noreferrer" className="btn-outline"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan" style={{ borderRadius: BLOB_RADII[0], backgroundImage: STARS_INK, backgroundSize: '180px 180px' }} />
            <img src="/hugo-fonseca.jpeg" alt="Hugo Fonseca, fondateur d'HGO Automation" className="relative w-3/4 aspect-square rounded-full object-cover border-4 border-void" />
            <ClimUnit className="absolute -top-6 -right-4 w-28" />
            <Tools className="absolute -bottom-6 -left-6 w-24 rotate-[-12deg]" />
          </motion.div>
        </div>
      </section>

      {/* Parcours */}
      <section className="px-5 md:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="label-cond mb-4">Mon parcours</p>
          <h2 className="chunky-sm text-[clamp(2rem,5vw,3.5rem)] mb-12">Du terrain <span className="text-cyan">à l'automatisation.</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PARCOURS.map((p, i) => (
              <div key={p.title} className="card-brut p-8 flex flex-col gap-4">
                <span className="w-12 h-12 bg-cyan text-void flex items-center justify-center font-display text-lg" style={{ borderRadius: BLOB_RADII[i] }}>{i + 1}</span>
                <h3 className="text-xl text-ghost">{p.title}</h3>
                <p className="text-ghost/65 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="card-cyan !rounded-none py-14 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {CHIFFRES.map(c => (
            <Link key={c.l} to={c.to} className="group">
              <p className="font-display text-4xl md:text-5xl">{c.v}</p>
              <p className="mt-2 font-cond uppercase tracking-[0.16em] text-xs text-void/75 group-hover:underline underline-offset-4">{c.l}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Outils */}
      <section className="px-5 md:px-16 py-20 md:py-28" id="outils">
        <div className="max-w-6xl mx-auto">
          <p className="label-cond mb-4">Mes outils</p>
          <h2 className="chunky-sm text-[clamp(2rem,5vw,3.5rem)] mb-4">Ce que j'utilise <span className="text-cyan">au quotidien.</span></h2>
          <p className="text-ghost/65 max-w-2xl leading-relaxed mb-12">
            Des outils fiables et reconnus, que je connecte entre eux et à ceux que vous utilisez déjà. Vos données restent chez vous, et rien ne vous oblige à changer de logiciel.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {STACK.map(t => (
              <div key={t.name} className="card-brut hoverable p-6 flex flex-col items-center justify-center gap-3 text-center">
                <span className="w-16 h-16 bg-cyan flex items-center justify-center" style={{ borderRadius: BLOB_RADII[t.name.length % 4] }}>
                  <img src={t.logo} alt="" loading="lazy" className={t.color ? 'h-9 w-9' : 'h-8 w-8'} />
                </span>
                <span className="font-cond uppercase tracking-wide font-semibold text-ghost">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-5 md:px-16 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <p className="label-cond mb-4">Ma façon de travailler</p>
          <h2 className="chunky-sm text-[clamp(2rem,5vw,3.5rem)] mb-12">Simple, concret, <span className="text-cyan">rentable.</span></h2>
          <div className="space-y-10">
            {VALEURS.map(v => (
              <div key={v.not} className="border-l-4 border-cyan pl-6 md:pl-8">
                <p className="text-ghost/45 text-lg md:text-xl line-through decoration-cyan/50 mb-2">{v.not}</p>
                <p className="font-display uppercase text-ghost text-xl md:text-2xl">{v.but}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 card-brut p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <Quote className="w-14 flex-shrink-0" />
              <p className="text-ghost/75">Vous voulez voir ce que ça donnerait chez vous ? On en parle 20 minutes, gratuitement.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <button onClick={() => open('calendly')} className="btn-cyan"><Calendar className="w-4 h-4" /> Réserver</button>
              <a href="mailto:hugo@hgoautomation.fr" className="btn-outline"><Mail className="w-4 h-4" /> Écrire</a>
            </div>
          </div>
          <Link to="/#cas-clients" className="mt-8 inline-flex items-center gap-2 font-cond uppercase tracking-[0.12em] text-sm font-semibold text-cyan hover:underline underline-offset-4">
            Voir mes cas clients <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
