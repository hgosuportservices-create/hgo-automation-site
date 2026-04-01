import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';
import SharedNav from '../components/SharedNav';

const Logo = () => (
  <div className="flex items-center gap-0 leading-none select-none">
    <svg width="34" height="51" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <line x1="32" y1="4" x2="32" y2="56" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="32" y1="10" x2="6" y2="10" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.45" />
      <circle cx="5" cy="10" r="1.5" fill="#00E5FF" fillOpacity="0.6" />
      <line x1="32" y1="18" x2="14" y2="18" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="14" y1="18" x2="14" y2="23" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="14" cy="24" r="1.5" fill="#00E5FF" fillOpacity="0.5" />
      <line x1="32" y1="26" x2="2" y2="26" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="2" cy="26" r="1.5" fill="#00E5FF" fillOpacity="0.7" />
      <line x1="32" y1="34" x2="20" y2="34" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="20" y1="34" x2="20" y2="38" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.35" />
      <circle cx="20" cy="39" r="1.2" fill="#00E5FF" fillOpacity="0.45" />
      <line x1="32" y1="42" x2="8" y2="42" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="7" cy="42" r="1.5" fill="#00E5FF" fillOpacity="0.55" />
      <line x1="32" y1="50" x2="16" y2="50" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="15" cy="50" r="1.2" fill="#00E5FF" fillOpacity="0.4" />
      <circle cx="32" cy="26" r="2" fill="#00E5FF" fillOpacity="0.8" />
      <circle cx="32" cy="10" r="1.5" fill="#00E5FF" fillOpacity="0.6" />
      <circle cx="32" cy="42" r="1.5" fill="#00E5FF" fillOpacity="0.5" />
    </svg>
    <div className="flex flex-col items-start leading-none">
      <span style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.04em', lineHeight: 1, color: '#00E5FF', fontWeight: 800, fontSize: '1.45rem', textShadow: '0 0 24px rgba(0,229,255,0.45), 0 0 6px rgba(0,229,255,0.3)' }}>HGO</span>
      <span style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.25em', lineHeight: 1.2, color: 'rgba(255,255,255,0.55)', fontWeight: 300, fontSize: '0.38rem', textTransform: 'uppercase', marginTop: '2px' }}>AUTOMATION</span>
    </div>
  </div>
);

const categoryColors = {
  "Comparatif": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Tutoriel": "bg-cyan/20 text-cyan border-cyan/30",
  "Guide": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(
      containerRef.current.querySelectorAll('.fade-in'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const [featured, ...rest] = articles;

  return (
    <main ref={containerRef} className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Blog Automatisation & IA — HGO Automation</title>
        <meta name="description" content="Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA. Ressources pour PME françaises." />
        <meta property="og:title" content="Blog Automatisation & IA — HGO Automation" />
        <meta property="og:description" content="Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA." />
        <meta property="og:url" content="https://hgoautomation.fr/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://hgoautomation.fr/og-cover.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Automatisation & IA — HGO Automation" />
        <meta name="twitter:description" content="Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA." />
        <meta name="twitter:image" content="https://hgoautomation.fr/og-cover.png" />
        <link rel="canonical" href="https://hgoautomation.fr/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://hgoautomation.fr" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://hgoautomation.fr/blog" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog Automatisation & IA — HGO Automation",
          "description": "Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA.",
          "url": "https://hgoautomation.fr/blog",
          "publisher": {
            "@type": "Organization",
            "name": "HGO Automation",
            "url": "https://hgoautomation.fr",
            "logo": { "@type": "ImageObject", "url": "https://hgoautomation.fr/hgo-logo.svg" }
          }
        })}</script>
      </Helmet>
      <SharedNav />

      <div className="max-w-6xl mx-auto px-8 md:px-16 pt-40 pb-32">
        <div className="fade-in mb-20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 mb-4 block">// Ressources HGOAutomation</span>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Le Blog.<br />
            <span className="text-ghost/20">Automatisation</span><br />
            <span className="text-cyan italic font-serif font-normal normal-case text-4xl md:text-6xl">& IA pour les pros.</span>
          </h1>
          <p className="mt-8 text-ghost/50 max-w-xl text-lg font-light">
            Guides pratiques, comparatifs et tutoriels pour automatiser votre entreprise.
          </p>
        </div>

        <Link to={`/blog/${featured.slug}`} className="fade-in group block mb-16">
          <div className="relative rounded-[2rem] overflow-hidden border border-ghost/10 hover:border-cyan/30 transition-all duration-500">
            <div className="relative h-72 md:h-96 overflow-hidden">
              <img src={featured.image} alt={featured.title} loading="eager" fetchpriority="high" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[featured.category]}`}>{featured.category}</span>
                <span className="text-[10px] font-mono text-ghost/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                <span className="text-[10px] font-mono text-ghost/40">{featured.date}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 group-hover:text-cyan transition-colors">{featured.title}</h2>
              <p className="text-ghost/50 text-sm md:text-base font-light max-w-2xl">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-cyan text-sm font-bold uppercase tracking-widest">
                Lire l'article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((article) => (
            <Link key={article.slug} to={`/blog/${article.slug}`} className="fade-in group block rounded-[1.5rem] border border-ghost/10 hover:border-cyan/30 transition-all duration-500 overflow-hidden bg-void/30">
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>{article.category}</span>
                  <span className="text-[10px] font-mono text-ghost/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-cyan transition-colors leading-tight">{article.title}</h3>
                <p className="text-ghost/40 text-sm font-light line-clamp-2">{article.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-cyan/60 group-hover:text-cyan text-xs font-bold uppercase tracking-widest transition-colors">
                  Lire <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="fade-in mt-24 rounded-[2rem] border border-cyan/20 bg-cyan/5 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Prêt à automatiser<br /><span className="text-cyan">votre entreprise ?</span>
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">Nos experts déploient votre premier workflow en 2 semaines. Appel de découverte gratuit, sans engagement.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors">
            Planifier un appel <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
