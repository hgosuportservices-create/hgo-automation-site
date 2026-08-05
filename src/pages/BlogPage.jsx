import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';
import SharedNav from '../components/SharedNav';
import { Reveal, MaskedTitle } from '../lib/motion';

const categoryColors = {
  "Comparatif": "bg-cyan/10 text-cyan/70 border-cyan/20",
  "Tutoriel": "bg-cyan/20 text-cyan border-cyan/30",
  "Guide": "bg-cyan/15 text-cyan/85 border-cyan/25",
};

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
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
        <Reveal className="mb-20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 mb-4 block">// Ressources HGOAutomation</span>
          <MaskedTitle as="h1" className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            <>
              Le Blog.<br />
              <span className="text-ghost/20">Automatisation</span><br />
              <span className="text-cyan italic font-serif font-normal normal-case text-4xl md:text-6xl">& IA pour les pros.</span>
            </>
          </MaskedTitle>
          <p className="mt-8 text-ghost/50 max-w-xl text-lg font-light">
            Guides pratiques, comparatifs et tutoriels pour automatiser votre entreprise.
          </p>
        </Reveal>

        <Reveal>
          <Link to={`/blog/${featured.slug}`} className="premium-card group block mb-16">
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
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link to={`/blog/${article.slug}`} className="premium-card group block rounded-[1.5rem] border border-ghost/10 hover:border-cyan/30 transition-all duration-500 overflow-hidden bg-void/30">
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
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 rounded-[2rem] border border-cyan/20 bg-cyan/5 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Prêt à automatiser<br /><span className="text-cyan">votre entreprise ?</span>
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">Nos experts déploient votre premier workflow en 2 semaines. Appel de découverte gratuit, sans engagement.</p>
          <Link to="/" className="premium-btn inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors">
            Planifier un appel <ArrowUpRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
