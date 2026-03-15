import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';

const Logo = () => (
  <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cyan shadow-xl shadow-cyan/20 overflow-hidden">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="white" fillOpacity="0.1" />
      <path d="M12 2L4 7l8 5 8-5-8-5z" fill="white" fillOpacity="0.2" />
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 7l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
    </svg>
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 py-3 px-8 rounded-full border border-ghost/10 bg-void/60 backdrop-blur-xl w-[90%] max-w-4xl">
        <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-3">
          <Logo />
          <span className="font-sans uppercase tracking-widest text-sm md:text-base">HGOAutomation</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <Link to="/" className="text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors">Accueil</Link>
          <Link to="/blog" className="text-xs font-sans font-medium uppercase tracking-widest text-cyan">Blog</Link>
        </div>
        <Link to="/" className="hidden md:flex ml-4 bg-cyan text-void px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
          Démarrer
        </Link>
      </nav>

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
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
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
                <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
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
          <p className="text-ghost/50 mb-8 max-w-lg mx-auto">Nos experts déploient votre premier workflow en 5 jours ouvrés. Appel de découverte gratuit, sans engagement.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors">
            Planifier un appel <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
