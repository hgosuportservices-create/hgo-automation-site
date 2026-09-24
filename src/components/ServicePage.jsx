import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, CheckCircle2, ChevronRight, MessageSquare, Cpu, Zap, Activity, Database, LayoutDashboard } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from './SharedNav';
import { motion, CountUp, Reveal, MaskedTitle } from '../lib/motion';
import ChatCard from './hero-demo/ChatCard';
import NodeGraph from './hero-demo/NodeGraph';
import IntegrationHub from './hero-demo/IntegrationHub';
import PipelineBoard from './hero-demo/PipelineBoard';
import StandaloneDashboard from './hero-demo/StandaloneDashboard';
import NeuralNetwork from './hero-demo/NeuralNetwork';
import FormationVisual from './hero-demo/FormationVisual';
import { Blob, BLOB_RADII, STARS_INK } from './Brand';
import { PhoneChat, ClimUnit, House, Faucet, Charger } from './Illustrations';
import SiteFooter from './SiteFooter';
import StackBar from './StackBar';
import { CALL_MIN } from '../config';

const HERO_VISUALS = {
  'automatisation-n8n': NodeGraph,
  'automatisation-entreprise': IntegrationHub,
  'automatisation-crm': PipelineBoard,
  'creation-applications-dashboards': StandaloneDashboard,
  'agent-ia': NeuralNetwork,
  'formation-installation-n8n-openclaw': FormationVisual,
};

const SECTOR_ILLUSTRATIONS = {
  'automatisation-cvc-climatisation-chauffage': ClimUnit,
  'automatisation-plombier-chauffagiste': Faucet,
  'automatisation-electricien': Charger,
  'automatisation-renovation-batiment': House,
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

function HeroBackground() {
  return (
    <>
      <Blob className="w-[50vw] max-w-[460px] aspect-[1.5] -left-[25vw] md:-left-[8%] -bottom-[20%] -z-10" radius={BLOB_RADII[2]} />
    </>
  );
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="div" y={20} className={`rounded-2xl border-2 px-6 py-5 transition-colors ${open ? 'border-cyan bg-[#12121F]' : 'border-cyan/25 hover:border-cyan/60'}`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <h3 className="font-cond text-lg font-semibold tracking-wide text-ghost flex items-start gap-3">
          <span className="text-cyan flex-shrink-0">Q.</span>
          {item.q}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-7 h-7 flex-shrink-0 rounded-full bg-cyan text-void flex items-center justify-center text-lg leading-none"
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
            <p className="text-ghost/65 leading-relaxed pl-6 pt-3">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export default function ServicePage({ data }) {
  const { open } = useContact();
  const containerRef = useRef(null);
  const path = data.path || `/services/${data.slug}`;
  const canonicalUrl = `https://www.hgoautomation.fr${path}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  const SectorIll = SECTOR_ILLUSTRATIONS[data.slug];
  const others = relatedServices.filter(s => s.href !== path).slice(0, 3);

  return (
    <main ref={containerRef} className="min-h-screen text-ghost font-sans overflow-x-hidden">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hgoautomation.fr/og-cover.png" />
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
            "url": "https://www.hgoautomation.fr",
            "image": "https://www.hgoautomation.fr/og-cover.png",
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
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.hgoautomation.fr" },
            { "@type": "ListItem", "position": 2, "name": data.title, "item": canonicalUrl }
          ]
        })}</script>
      </Helmet>

      <SharedNav />

      {/* Hero */}
      <section className="relative z-0 min-h-[90vh] flex items-center px-5 md:px-16 pt-32 pb-24 overflow-hidden">
        <HeroBackground />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Texte gauche */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan bg-void border-2 border-cyan rounded-full px-4 py-1.5 mb-8"
            >
              {data.hero.tag}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="chunky text-[clamp(1.7rem,3.4vw,3rem)] mb-8"
            >
              {data.hero.h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-ghost/75 leading-relaxed mb-10 bg-void/80 rounded-2xl"
            >
              {data.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button onClick={() => open('form')} className="btn-cyan">
                {data.ctaLabel || 'Obtenir un devis gratuit'} <ArrowUpRight className="w-4 h-4" />
              </button>
              <button onClick={() => open('calendly')} className="btn-outline">
                <Calendar className="w-4 h-4" /> Planifier un appel gratuit
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-8 bg-void/80 rounded-2xl w-fit pr-4"
            >
              {data.hero.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <CountUp value={stat.value} className="font-display text-3xl md:text-4xl text-cyan" />
                  <span className="font-cond text-xs text-ghost/55 uppercase tracking-widest mt-1">{stat.label}</span>
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
              className="hidden lg:flex justify-center items-center relative"
            >
              <div className="absolute w-[85%] aspect-square bg-cyan -z-10" style={{ borderRadius: BLOB_RADII[3], backgroundImage: STARS_INK, backgroundSize: '180px 180px' }} />
              <ChatCard caption="Un devis demandé à 22h, un RDV pris sans vous" />
            </motion.div>
          ) : HERO_VISUALS[data.slug] ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex justify-center items-center relative"
            >
              <div className="absolute w-[85%] aspect-square bg-cyan -z-10" style={{ borderRadius: BLOB_RADII[0], backgroundImage: STARS_INK, backgroundSize: '180px 180px' }} />
              <div className="animate-float-soft w-full flex justify-center">{React.createElement(HERO_VISUALS[data.slug])}</div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center animate-float-soft">
                <div className="absolute inset-0 bg-cyan" style={{ borderRadius: BLOB_RADII[0], backgroundImage: STARS_INK, backgroundSize: '180px 180px' }} />
                {SectorIll ? <SectorIll className="relative w-3/5" /> : <PhoneChat className="relative w-2/5" />}
                <div className="absolute -top-3 -right-3 bg-void text-cyan border-2 border-cyan px-4 py-2 rounded-full font-cond text-sm font-semibold uppercase tracking-widest">
                  {data.hero.stats[0].value} · {data.hero.stats[0].label}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {data.showStack && <StackBar />}

      {/* Problems */}
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-6xl mx-auto">
          <MaskedTitle className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-12">{data.problems.h2}</MaskedTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {data.problems.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="card-brut p-6">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-cyan text-void flex items-center justify-center font-bold flex-shrink-0">✕</span>
                  <div>
                    <h3 className="text-lg text-ghost mb-2">{item.title}</h3>
                    <p className="text-ghost/65 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-6xl mx-auto">
          <MaskedTitle className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-12">{data.features.h2}</MaskedTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="card-brut hoverable p-6 group">
                <CheckCircle2 className="premium-icon w-5 h-5 text-cyan mb-4" />
                <h3 className="text-lg text-ghost mb-2">{item.title}</h3>
                <p className="text-ghost/65 text-sm leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps / Timeline */}
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-4xl mx-auto">
          <MaskedTitle className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-16">{data.steps.h2}</MaskedTitle>
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
                    className="absolute left-8 top-16 -translate-x-1/2 w-px h-[calc(100%+0.5rem)] bg-cyan/40"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative flex-shrink-0 w-16 h-16 bg-cyan flex items-center justify-center"
                  style={{ borderRadius: BLOB_RADII[i % 4] }}
                >
                  <span className="text-void font-display text-lg">{step.num}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
                  className="pt-3"
                >
                  <h3 className="text-xl text-ghost mb-2">{step.title}</h3>
                  <p className="text-ghost/65 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-6xl mx-auto">
          <MaskedTitle className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-12">{data.usecases.h2}</MaskedTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {data.usecases.items.map((uc, i) => (
              <Reveal key={i} delay={i * 0.05} className="card-brut p-6">
                <span className="font-cond text-xs font-semibold uppercase tracking-widest text-void bg-cyan px-3 py-1 rounded-full">
                  {uc.sector}
                </span>
                <p className="mt-4 text-ghost/70 text-sm leading-relaxed">{uc.example}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {data.pricing && (
        <section className="py-24 px-5 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4">
              <span className="font-cond uppercase tracking-[0.18em] text-xs font-semibold text-cyan border-2 border-cyan px-4 py-1.5 rounded-full">Tarifs</span>
            </div>
            <MaskedTitle className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-4 text-center">{data.pricing.h2}</MaskedTitle>
            <p className="text-ghost/60 text-sm text-center mb-12">{data.pricing.note}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.pricing.items.map((plan, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.05}
                  className={`p-8 ${plan.highlight ? 'card-cyan' : 'card-brut'}`}
                >
                  {plan.highlight && (
                    <span className="inline-block font-cond text-xs font-semibold uppercase tracking-widest text-cyan bg-void px-3 py-1 rounded-full mb-4">Recommandé</span>
                  )}
                  <p className={`font-cond text-sm font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-void/70' : 'text-ghost/60'}`}>{plan.label}</p>
                  <p className={`font-display text-4xl mb-4 ${plan.highlight ? 'text-void' : 'text-cyan'}`}>{plan.price}</p>
                  <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-void/80' : 'text-ghost/65'}`}>{plan.desc}</p>
                  <button
                    onClick={open}
                    className={`w-full py-3 rounded-full font-cond text-sm font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5 ${plan.highlight ? 'bg-void text-cyan' : 'bg-cyan text-void'}`}
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
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-3xl mx-auto">
          <MaskedTitle className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-12">{data.faq.h2}</MaskedTitle>
          <div className="space-y-4">
            {data.faq.items.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 md:px-16">
        <Reveal className="card-cyan max-w-4xl mx-auto text-center !rounded-[2.5rem] p-10 md:p-16">
          <span className="font-cond uppercase tracking-[0.2em] text-xs text-void/70 mb-4 block">Prochaine étape</span>
          <h2 className="text-3xl md:text-5xl mb-4 text-void">
            Démarrez votre projet<br />cette semaine.
          </h2>
          <p className="text-void/80 mb-8 max-w-lg mx-auto">
            Appel de découverte gratuit de {CALL_MIN} minutes. On analyse votre situation et on vous propose une architecture adaptée à votre budget.
          </p>
          <button
            onClick={() => open('calendly')}
            className="inline-flex items-center gap-2 bg-void text-cyan px-7 py-4 rounded-full font-cond text-sm font-semibold uppercase tracking-widest hover:-translate-y-0.5 transition-transform"
          >
            <Calendar className="w-5 h-5" /> Planifier l'appel gratuit
          </button>
        </Reveal>
      </section>

      {/* Related services */}
      <section className="py-16 px-5 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="label-cond mb-8">Nos autres services</p>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map(s => {
              const Icon = iconMap[s.icon];
              return (
                <Link key={s.href} to={s.href} className="card-brut group flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="w-4 h-4 text-void" />}
                  </div>
                  <span className="font-cond uppercase tracking-wide font-semibold text-ghost/80 group-hover:text-cyan transition-colors">{s.label}</span>
                  <ChevronRight className="w-4 h-4 text-ghost/20 group-hover:text-cyan ml-auto transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <SiteFooter cta={false} />
    </main>
  );
}
