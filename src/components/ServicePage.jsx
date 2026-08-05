import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronRight, MessageSquare, Cpu, Zap, Activity, Database, LayoutDashboard } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from './SharedNav';
import { motion, CountUp, Reveal, MaskedTitle } from '../lib/motion';
import HeroDemo from './hero-demo/HeroDemo';
import NodeGraph from './hero-demo/NodeGraph';
import IntegrationHub from './hero-demo/IntegrationHub';
import PipelineBoard from './hero-demo/PipelineBoard';
import StandaloneDashboard from './hero-demo/StandaloneDashboard';
import NeuralNetwork from './hero-demo/NeuralNetwork';
import BackgroundVideo from './BackgroundVideo';

const HERO_VISUALS = {
  'automatisation-n8n': NodeGraph,
  'automatisation-entreprise': IntegrationHub,
  'automatisation-crm': PipelineBoard,
  'creation-applications-dashboards': StandaloneDashboard,
  'agent-ia': NeuralNetwork,
};

const iconMap = { MessageSquare, Cpu, Zap, Activity, Database, LayoutDashboard };

const relatedServices = [
  { label: 'WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram', icon: 'MessageSquare' },
  { label: 'Agents IA', href: '/services/agent-ia', icon: 'Cpu' },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n', icon: 'Zap' },
  { label: 'Automatisation Entreprise', href: '/services/automatisation-entreprise', icon: 'Activity' },
  { label: 'Automatisation & Création CRM', href: '/services/automatisation-crm', icon: 'Database' },
  { label: 'Applications & Dashboards', href: '/services/creation-applications-dashboards', icon: 'LayoutDashboard' },
];

const philosophyItems = [
  { not: 'Nous ne vendons pas de robots.', but: 'Nous automatisons uniquement ce qui fait perdre du temps à vos équipes.' },
  { not: 'Nous ne remplaçons pas vos collaborateurs.', but: 'Nous leur retirons les tâches répétitives.' },
  { not: 'Nous ne créons pas des démonstrations.', but: 'Nous livrons des systèmes utilisés chaque jour.' },
];

const deploymentTimeline = [
  { day: 'Jour 1', label: 'Audit' },
  { day: 'Jour 3', label: 'Connexion' },
  { day: 'Jour 7', label: 'Formation IA' },
  { day: 'Jour 14', label: 'Tests' },
  { day: 'Jour 21', label: 'Production' },
  { day: 'Jour 30', label: 'Optimisation' },
];

function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 15]);
  const y2 = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : -15]);
  return (
    <>
      <motion.div style={{ y: y1 }} className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/6 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 -z-10" />
      <motion.div style={{ y: y2 }} className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/4 rounded-full blur-3xl -z-10" />
    </>
  );
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="div" y={20} className="border border-ghost/8 rounded-2xl p-6 hover:border-cyan/20 transition-colors">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <h3 className="font-bold text-ghost flex items-start gap-3">
          <span className="text-cyan font-mono text-sm flex-shrink-0 mt-0.5">Q.</span>
          {item.q}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-cyan text-xl leading-none mt-0.5"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ghost/50 text-sm leading-relaxed pl-6 pt-3">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export default function ServicePage({ data }) {
  const { open } = useContact();
  const containerRef = useRef(null);
  const canonicalUrl = `https://hgoautomation.fr/services/${data.slug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  const others = relatedServices.filter(s => s.href !== `/services/${data.slug}`).slice(0, 3);

  return (
    <main ref={containerRef} className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hgoautomation.fr/og-cover.png" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.title,
          "description": data.metaDescription,
          "url": canonicalUrl,
          "provider": {
            "@type": "LocalBusiness",
            "name": "HGO Automation",
            "url": "https://hgoautomation.fr",
            "image": "https://hgoautomation.fr/og-cover.png",
            "areaServed": { "@type": "Country", "name": "France" },
            "priceRange": "€€"
          },
          "offers": data.pricing ? data.pricing.items.filter(p => !isNaN(parseInt(p.price))).map(p => ({
            "@type": "Offer",
            "name": p.label,
            "description": p.desc,
            "price": parseInt(p.price.replace(/\s/g, '')),
            "priceCurrency": "EUR",
            "url": canonicalUrl
          })) : undefined
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faq.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://hgoautomation.fr" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://hgoautomation.fr/services" },
            { "@type": "ListItem", "position": 3, "name": data.title, "item": canonicalUrl }
          ]
        })}</script>
      </Helmet>

      <SharedNav />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center px-8 md:px-24 pt-36 pb-24 overflow-hidden">
        {/* Fond vidéo ou image avec overlay */}
        {data.hero.video ? (
          <div className="absolute inset-0 -z-10">
            <BackgroundVideo src={data.hero.video} className="w-full h-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
          </div>
        ) : data.hero.image && (
          <div className="absolute inset-0 -z-10">
            <img src={data.hero.image} alt={data.hero.h1} loading="eager" fetchpriority="high" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
          </div>
        )}
        {/* Glow (parallaxe légère) */}
        <HeroBackground />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Texte gauche */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[10px] font-mono uppercase tracking-widest text-cyan border border-cyan/30 px-4 py-1.5 rounded-full bg-cyan/5 mb-8"
            >
              {data.hero.tag}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              {data.hero.h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-ghost/55 font-light leading-relaxed mb-10"
            >
              {data.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button onClick={open} className="premium-btn group relative overflow-hidden bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-100">
                <span className="relative z-10 flex items-center gap-2">Obtenir un devis gratuit <ArrowUpRight className="w-4 h-4" /></span>
                <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
              </button>
              <button onClick={open} className="premium-btn px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-ghost/20 hover:border-cyan transition-colors flex items-center gap-2">
                Appel découverte gratuit <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-8"
            >
              {data.hero.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <CountUp value={stat.value} className="text-3xl md:text-4xl font-bold text-cyan tracking-tight" />
                  <span className="text-xs text-ghost/40 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Illustration droite */}
          {data.slug === 'automatisation-whatsapp-telegram' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center items-center"
            >
              <HeroDemo />
            </motion.div>
          ) : HERO_VISUALS[data.slug] ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex justify-center items-center animate-float-soft"
            >
              {React.createElement(HERO_VISUALS[data.slug])}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-sm animate-float-soft">
                {/* Card principale avec image */}
                {data.hero.image && (
                  <div className="relative rounded-[2rem] overflow-hidden border border-ghost/10 shadow-2xl shadow-cyan/5">
                    <img src={data.hero.image} alt={data.title} className="w-full h-72 object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-transparent" />
                    {/* Badge flottant bas */}
                    <div className="absolute bottom-4 left-4 right-4 bg-void/80 backdrop-blur-sm border border-ghost/10 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-ghost/60">Système actif</span>
                      </div>
                      <p className="text-sm font-bold mt-1">{data.title}</p>
                    </div>
                  </div>
                )}
                {/* Badge stat flottant haut-droite */}
                <div className="absolute -top-4 -right-4 bg-cyan text-void px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-cyan/30">
                  {data.hero.stats[0].value}
                </div>
                {/* Décoration coins */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-cyan/20 rounded-2xl bg-cyan/5" />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 px-8 md:px-24 border-t border-ghost/5">
        <div className="max-w-6xl mx-auto">
          <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.problems.h2}</MaskedTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {data.problems.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="premium-card bg-void/40 border border-ghost/8 rounded-2xl p-6 hover:border-red-500/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/60 mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-ghost/90 mb-2">{item.title}</h3>
                    <p className="text-ghost/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-6xl mx-auto">
          <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.features.h2}</MaskedTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="premium-card bg-void/60 border border-ghost/10 rounded-2xl p-6 hover:border-cyan/30 transition-all duration-300 group">
                <CheckCircle2 className="premium-icon w-5 h-5 text-cyan mb-4" />
                <h3 className="font-bold text-ghost mb-2">{item.title}</h3>
                <p className="text-ghost/45 text-sm leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps / Timeline */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-16">{data.steps.h2}</MaskedTitle>
          <div className="space-y-6">
            {data.steps.items.map((step, i) => (
              <div key={i} className="relative flex gap-8 items-start group">
                {i < data.steps.items.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute left-8 top-16 -translate-x-1/2 w-px h-[calc(100%+0.5rem)] bg-cyan/15"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative flex-shrink-0 w-16 h-16 rounded-2xl border border-cyan/20 bg-cyan/5 flex items-center justify-center group-hover:bg-cyan/10 transition-colors"
                >
                  <span className="text-cyan font-bold text-sm font-mono">{step.num}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
                  className="pt-3"
                >
                  <h3 className="font-bold text-ghost text-lg mb-2">{step.title}</h3>
                  <p className="text-ghost/45 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline de déploiement */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 border border-cyan/20 px-4 py-1.5 rounded-full">Calendrier</span>
          <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mt-6 mb-16">En moins de 30 jours</MaskedTitle>
          <div className="flex flex-col items-center">
            {deploymentTimeline.map((step, i) => (
              <React.Fragment key={step.day}>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan/60 w-16 text-right flex-shrink-0">{step.day}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                  <span className="text-lg font-bold text-ghost">{step.label}</span>
                </motion.div>
                {i < deploymentTimeline.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: i * 0.08 + 0.1 }}
                    style={{ transformOrigin: 'top' }}
                    className="w-px h-8 bg-cyan/20 ml-[4.5rem]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-6xl mx-auto">
          <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.usecases.h2}</MaskedTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {data.usecases.items.map((uc, i) => (
              <Reveal key={i} delay={i * 0.05} className="premium-card bg-void/60 border border-ghost/10 rounded-2xl p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan/70 bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full">
                  {uc.sector}
                </span>
                <p className="mt-4 text-ghost/60 text-sm leading-relaxed">{uc.example}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {data.pricing && (
        <section className="py-24 px-8 md:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 border border-cyan/20 px-4 py-1.5 rounded-full">Tarifs</span>
            </div>
            <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">{data.pricing.h2}</MaskedTitle>
            <p className="text-ghost/40 text-sm text-center mb-12">{data.pricing.note}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.pricing.items.map((plan, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.05}
                  className={`premium-card rounded-2xl p-8 border transition-colors ${plan.highlight ? 'border-cyan/40 bg-cyan/5 shadow-lg shadow-cyan/10 animate-pulse-glow-slow' : 'border-ghost/10 bg-void/40'}`}
                >
                  {plan.highlight && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full mb-4">Recommandé</span>
                  )}
                  <p className="text-sm font-bold uppercase tracking-widest text-ghost/50 mb-2">{plan.label}</p>
                  <p className={`text-4xl font-bold tracking-tight mb-4 ${plan.highlight ? 'text-cyan' : ''}`}>{plan.price}</p>
                  <p className="text-ghost/50 text-sm leading-relaxed mb-6">{plan.desc}</p>
                  <button
                    onClick={open}
                    className={`premium-btn w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${plan.highlight ? 'bg-cyan text-void hover:bg-white' : 'border border-ghost/20 hover:border-cyan hover:text-cyan'}`}
                  >
                    Obtenir un devis
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-3xl mx-auto">
          <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.faq.h2}</MaskedTitle>
          <div className="space-y-4">
            {data.faq.items.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 border border-cyan/20 px-4 py-1.5 rounded-full">Notre philosophie</span>
            <MaskedTitle className="text-3xl md:text-4xl font-bold tracking-tight mt-6">Pourquoi travailler avec nous ?</MaskedTitle>
          </div>
          <div className="space-y-10">
            {philosophyItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="border-l-2 border-cyan/20 pl-6 md:pl-8">
                <p className="text-ghost/35 text-lg md:text-xl line-through decoration-ghost/20 mb-2">{item.not}</p>
                <p className="text-ghost text-xl md:text-2xl font-bold tracking-tight">{item.but}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <Reveal className="max-w-4xl mx-auto text-center rounded-[2rem] border border-cyan/20 bg-cyan/5 p-12 md:p-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 mb-4 block">// Prochaine étape</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Démarrez votre projet<br /><span className="text-cyan">cette semaine.</span>
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">
            Appel de découverte gratuit de 30 minutes. On analyse votre situation et on vous propose une architecture adaptée à votre budget.
          </p>
          <button
            onClick={open}
            className="premium-btn animate-cta-pulse inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Planifier l'appel gratuit <ArrowUpRight className="w-5 h-5" />
          </button>
        </Reveal>
      </section>

      {/* Related services */}
      <section className="py-16 px-8 md:px-24 border-t border-ghost/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-ghost/30 font-bold mb-8">Nos autres services</p>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map(s => {
              const Icon = iconMap[s.icon];
              return (
                <Link key={s.href} to={s.href} className="group flex items-center gap-4 p-4 rounded-2xl border border-ghost/8 hover:border-cyan/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan/8 border border-cyan/15 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="premium-icon w-4 h-4 text-cyan/70" />}
                  </div>
                  <span className="text-sm font-medium text-ghost/60 group-hover:text-cyan transition-colors">{s.label}</span>
                  <ChevronRight className="w-4 h-4 text-ghost/20 group-hover:text-cyan ml-auto transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer mini */}
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
