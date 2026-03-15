import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ArrowUpRight, CheckCircle2, ChevronRight, MessageSquare, Cpu, Zap, Activity, Database, LayoutDashboard } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import SharedNav from './SharedNav';

const iconMap = { MessageSquare, Cpu, Zap, Activity, Database, LayoutDashboard };

const relatedServices = [
  { label: 'WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram', icon: 'MessageSquare' },
  { label: 'Agents IA', href: '/services/agent-ia', icon: 'Cpu' },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n', icon: 'Zap' },
  { label: 'Automatisation Entreprise', href: '/services/automatisation-entreprise', icon: 'Activity' },
  { label: 'Automatisation & Création CRM', href: '/services/automatisation-crm', icon: 'Database' },
  { label: 'Applications & Dashboards', href: '/services/creation-applications-dashboards', icon: 'LayoutDashboard' },
];

const trustItems = [
  { title: 'Livraison rapide', desc: 'Premier résultat visible en 5 jours. Pas de promesses vides, des systèmes qui tournent.' },
  { title: 'Pas de code à maintenir', desc: 'Nos automatisations reposent sur des outils robustes. Vous ne dépendez pas d\'un développeur.' },
  { title: 'ROI mesurable', desc: 'On définit ensemble les KPIs avant de commencer. Vous mesurez le retour sur investissement dès le mois 1.' },
  { title: 'Support 30 jours inclus', desc: 'Toutes nos prestations incluent 30 jours de support post-déploiement. Vous n\'êtes jamais seul.' },
  { title: 'Données souveraines', desc: 'Hébergement en Europe. Vos données restent sous votre contrôle, conformément au RGPD.' },
  { title: 'Transparence totale', desc: 'Vous avez accès à tout : outils, workflows, documentation. Pas de boîte noire, pas de dépendance.' },
];

export default function ServicePage({ data }) {
  const { open } = useContact();
  const containerRef = useRef(null);
  const canonicalUrl = `https://hgoautomation.fr/services/${data.slug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = containerRef.current?.querySelectorAll('.fade-in');
    if (els?.length) {
      gsap.fromTo(els, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
    }
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
            "@type": "ProfessionalService",
            "name": "HGO Automation",
            "url": "https://hgoautomation.fr"
          }
        })}</script>
      </Helmet>

      <SharedNav />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center px-8 md:px-24 pt-36 pb-24 overflow-hidden">
        {/* Fond image avec overlay */}
        {data.hero.image && (
          <div className="absolute inset-0 -z-10">
            <img src={data.hero.image} alt={data.hero.h1} loading="eager" fetchpriority="high" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
          </div>
        )}
        {/* Glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/6 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 -z-10" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/4 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Texte gauche */}
          <div className="fade-in">
            <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-cyan border border-cyan/30 px-4 py-1.5 rounded-full bg-cyan/5 mb-8">
              {data.hero.tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
              {data.hero.h1}
            </h1>
            <p className="text-lg text-ghost/55 font-light leading-relaxed mb-10">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={open} className="group relative overflow-hidden bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-100">
                <span className="relative z-10 flex items-center gap-2">Obtenir un devis gratuit <ArrowUpRight className="w-4 h-4" /></span>
                <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
              </button>
              <button onClick={open} className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-ghost/20 hover:border-cyan transition-colors flex items-center gap-2">
                Appel découverte gratuit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-8">
              {data.hero.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-cyan tracking-tight">{stat.value}</span>
                  <span className="text-xs text-ghost/40 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration droite */}
          <div className="fade-in hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-sm">
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
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 px-8 md:px-24 border-t border-ghost/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.problems.h2}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.problems.items.map((item, i) => (
              <div key={i} className="fade-in bg-void/40 border border-ghost/8 rounded-2xl p-6 hover:border-red-500/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/60 mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-ghost/90 mb-2">{item.title}</h3>
                    <p className="text-ghost/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.features.h2}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.items.map((item, i) => (
              <div key={i} className="fade-in bg-void/60 border border-ghost/10 rounded-2xl p-6 hover:border-cyan/30 transition-all duration-300 group">
                <CheckCircle2 className="w-5 h-5 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-ghost mb-2">{item.title}</h3>
                <p className="text-ghost/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mb-16">{data.steps.h2}</h2>
          <div className="space-y-6">
            {data.steps.items.map((step, i) => (
              <div key={i} className="fade-in flex gap-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-cyan/20 bg-cyan/5 flex items-center justify-center group-hover:bg-cyan/10 transition-colors">
                  <span className="text-cyan font-bold text-sm font-mono">{step.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-bold text-ghost text-lg mb-2">{step.title}</h3>
                  <p className="text-ghost/45 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.usecases.h2}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.usecases.items.map((uc, i) => (
              <div key={i} className="fade-in bg-void/60 border border-ghost/10 rounded-2xl p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan/70 bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full">
                  {uc.sector}
                </span>
                <p className="mt-4 text-ghost/60 text-sm leading-relaxed">{uc.example}</p>
              </div>
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
            <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">{data.pricing.h2}</h2>
            <p className="text-ghost/40 text-sm text-center mb-12">{data.pricing.note}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.pricing.items.map((plan, i) => (
                <div key={i} className={`fade-in rounded-2xl p-8 border transition-all ${plan.highlight ? 'border-cyan/40 bg-cyan/5 shadow-lg shadow-cyan/10' : 'border-ghost/10 bg-void/40'}`}>
                  {plan.highlight && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full mb-4">Recommandé</span>
                  )}
                  <p className="text-sm font-bold uppercase tracking-widest text-ghost/50 mb-2">{plan.label}</p>
                  <p className={`text-4xl font-bold tracking-tight mb-4 ${plan.highlight ? 'text-cyan' : ''}`}>{plan.price}</p>
                  <p className="text-ghost/50 text-sm leading-relaxed mb-6">{plan.desc}</p>
                  <button
                    onClick={open}
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${plan.highlight ? 'bg-cyan text-void hover:bg-white' : 'border border-ghost/20 hover:border-cyan hover:text-cyan'}`}
                  >
                    Obtenir un devis
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mb-12">{data.faq.h2}</h2>
          <div className="space-y-4">
            {data.faq.items.map((item, i) => (
              <div key={i} className="fade-in border border-ghost/8 rounded-2xl p-6 hover:border-cyan/20 transition-colors">
                <h3 className="font-bold text-ghost mb-3 flex items-start gap-3">
                  <span className="text-cyan font-mono text-sm flex-shrink-0 mt-0.5">Q.</span>
                  {item.q}
                </h3>
                <p className="text-ghost/50 text-sm leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 border border-cyan/20 px-4 py-1.5 rounded-full">Pourquoi HGO Automation</span>
            <h2 className="fade-in text-3xl md:text-4xl font-bold tracking-tight mt-6">Pourquoi travailler avec nous ?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="fade-in flex gap-4 p-6 rounded-2xl border border-ghost/8 bg-void/40 hover:border-cyan/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-ghost mb-2">{item.title}</h3>
                  <p className="text-ghost/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-graphite/20">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-cyan/20 bg-cyan/5 p-12 md:p-16 fade-in">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 mb-4 block">// Prochaine étape</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Démarrez votre projet<br /><span className="text-cyan">cette semaine.</span>
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">
            Appel de découverte gratuit de 30 minutes. On analyse votre situation et on vous propose une architecture adaptée à votre budget.
          </p>
          <button
            onClick={open}
            className="inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Planifier l'appel gratuit <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
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
                    {Icon && <Icon className="w-4 h-4 text-cyan/70" />}
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
