import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';
import SharedNav from '../components/SharedNav';
import { Reveal, MaskedTitle } from '../lib/motion';
import { useContact } from '../context/ContactContext';
import SiteFooter from '../components/SiteFooter';

const categoryColors = {
  "Comparatif": "bg-cyan/10 text-cyan/70 border-cyan/20",
  "Tutoriel": "bg-cyan/20 text-cyan border-cyan/30",
  "Guide": "bg-cyan/15 text-cyan/85 border-cyan/25",
};

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { open } = useContact();
  const [featured, ...rest] = articles;

  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Blog Automatisation & IA — HGO Automation</title>
        <meta name="description" content="Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA. Ressources pour PME françaises." />
        <meta property="og:title" content="Blog Automatisation & IA — HGO Automation" />
        <meta property="og:description" content="Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA." />
        <meta property="og:url" content="https://www.hgoautomation.fr/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://www.hgoautomation.fr/og-cover.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Automatisation & IA — HGO Automation" />
        <meta name="twitter:description" content="Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA." />
        <meta name="twitter:image" content="https://www.hgoautomation.fr/og-cover.png" />
        <link rel="canonical" href="https://www.hgoautomation.fr/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.hgoautomation.fr" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.hgoautomation.fr/blog" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog Automatisation & IA — HGO Automation",
          "description": "Guides pratiques, comparatifs et tutoriels sur l'automatisation d'entreprise avec n8n, Make et l'IA.",
          "url": "https://www.hgoautomation.fr/blog",
          "publisher": {
            "@type": "Organization",
            "name": "HGO Automation",
            "url": "https://www.hgoautomation.fr",
            "logo": { "@type": "ImageObject", "url": "https://www.hgoautomation.fr/hgo-logo.svg" }
          }
        })}</script>
      </Helmet>
      <SharedNav />

      <div className="max-w-6xl mx-auto px-8 md:px-16 pt-40 pb-32">
        <Reveal className="mb-20">
          <span className="label-cond mb-4 block">Ressources HGO Automation</span>
          <MaskedTitle as="h1" className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            <>
              Le Blog.<br />
              <span className="text-ghost/20">Automatisation</span><br />
              <span className="text-cyan text-4xl md:text-6xl">& IA pour les pros.</span>
            </>
          </MaskedTitle>
          <p className="mt-8 text-ghost/50 max-w-xl text-lg font-light">
            Guides pratiques, comparatifs et tutoriels pour automatiser votre entreprise.
          </p>
        </Reveal>

        <Reveal>
          <Link to={`/blog/${featured.slug}`} className="premium-card group block mb-16">
            <div className="card-brut relative !rounded-[2rem] overflow-hidden">
              <div className="relative h-72 md:h-96 overflow-hidden">
                <img src={featured.image} alt={featured.title} loading="eager" fetchPriority="high" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[featured.category]}`}>{featured.category}</span>
                  <span className="font-cond text-xs tracking-wide text-ghost/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                  <span className="font-cond text-xs tracking-wide text-ghost/40">{featured.date}</span>
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
              <Link to={`/blog/${article.slug}`} className="card-brut group block overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>{article.category}</span>
                    <span className="font-cond text-xs tracking-wide text-ghost/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
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

        <Reveal className="mt-24 card-brut !rounded-[2.5rem] p-12 md:p-16 text-center">
          <h2 className="chunky-sm text-[clamp(1.8rem,4vw,3rem)] mb-4">
            Prêt à automatiser<br /><span className="text-cyan">votre entreprise ?</span>
          </h2>
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">Je mets en place vos premières automatisations en 2 semaines. Ou je vous forme pour que vous le fassiez vous-même. Appel découverte gratuit, sans engagement.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => open('calendly')} className="btn-cyan">
              Planifier un appel <ArrowUpRight className="w-5 h-5" />
            </button>
            <Link to="/formation" className="btn-outline">
              Voir la formation
            </Link>
          </div>
        </Reveal>
      </div>
      <SiteFooter cta={false} />
    </main>
  );
}
