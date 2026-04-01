import React, { useEffect, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ArrowLeft, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';

const MONTHS = { 'janvier':'01','février':'02','mars':'03','avril':'04','mai':'05','juin':'06','juillet':'07','août':'08','septembre':'09','octobre':'10','novembre':'11','décembre':'12' };
function toISO(frDate) {
  const [d, m, y] = frDate.split(' ');
  return `${y}-${MONTHS[m]}-${d.padStart(2,'0')}`;
}

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

function renderBlock(block, i, onContact) {
  switch (block.type) {
    case 'intro':
      return (
        <p key={i} className="text-lg md:text-xl text-ghost/70 font-light leading-relaxed border-l-2 border-cyan/40 pl-6 mb-10">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-16 mb-6 text-ghost">
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={i} className="text-ghost/65 leading-relaxed mb-6 text-base md:text-lg font-light">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <div key={i} className="mb-8">
          {block.title && <p className="text-ghost/80 font-semibold mb-4">{block.title}</p>}
          <ul className="space-y-3">
            {block.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-ghost/60 text-sm md:text-base">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'table':
      return (
        <div key={i} className="mb-10 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-ghost/10">
                {block.headers.map((h, j) => (
                  <th key={j} className="text-left py-3 px-4 text-[10px] uppercase tracking-widest text-cyan/60 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className="border-b border-ghost/5 hover:bg-ghost/5 transition-colors">
                  {row.map((cell, k) => (
                    <td key={k} className={`py-3 px-4 text-ghost/60 ${k === 0 ? 'font-semibold text-ghost/80' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'image':
      return (
        <figure key={i} className="my-10">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-2xl object-cover max-h-80"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-ghost/40 italic font-mono">{block.caption}</figcaption>
          )}
        </figure>
      );
    case 'cta':
      return (
        <div key={i} className="mt-16 rounded-[1.5rem] border border-cyan/20 bg-cyan/5 p-8 md:p-10">
          <p className="text-ghost/70 text-base md:text-lg font-light leading-relaxed mb-6">{block.text}</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-cyan text-void px-6 py-3 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors">
            Planifier un appel gratuit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.fade-in'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [slug]);

  if (!article) return <Navigate to="/blog" replace />;

  const related = articles.filter(a => a.slug !== slug).slice(0, 2);

  const canonicalUrl = `https://hgoautomation.fr/blog/${article.slug}`;

  return (
    <main ref={containerRef} className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>{`${article.title} — HGO Automation`}</title>
        <meta name="description" content={article.metaDescription} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={article.image} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.metaDescription,
          "image": article.image,
          "url": canonicalUrl,
          "datePublished": toISO(article.date),
          "author": {
            "@type": "Person",
            "name": "Hugo Fonseca",
            "url": "https://hgoautomation.fr"
          },
          "publisher": {
            "@type": "Organization",
            "name": "HGO Automation",
            "url": "https://hgoautomation.fr",
            "logo": { "@type": "ImageObject", "url": "https://hgoautomation.fr/hgo-logo.svg" }
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://hgoautomation.fr" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://hgoautomation.fr/blog" },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": canonicalUrl }
          ]
        })}</script>
      </Helmet>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 py-3 px-8 rounded-full border border-ghost/10 bg-void/60 backdrop-blur-xl w-[90%] max-w-4xl">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <Link to="/" className="text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors">Accueil</Link>
          <Link to="/blog" className="text-xs font-sans font-medium uppercase tracking-widest text-cyan">Blog</Link>
        </div>
        <Link to="/" className="hidden md:flex ml-4 bg-cyan text-void px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
          Démarrer
        </Link>
      </nav>

      {/* Hero image */}
      <div className="fade-in relative h-[50vh] overflow-hidden">
        <img src={article.image} alt={article.title} loading="eager" fetchpriority="high" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/20" />
      </div>

      <div className="max-w-3xl mx-auto px-8 md:px-12 pb-32 -mt-20 relative z-10">
        {/* Breadcrumb */}
        <div className="fade-in flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ghost/30 mb-8">
          <Link to="/blog" className="hover:text-cyan transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Blog
          </Link>
          <span>/</span>
          <span className="text-ghost/50">{article.category}</span>
        </div>

        {/* Meta */}
        <div className="fade-in flex items-center gap-3 mb-6">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>{article.category}</span>
          <span className="text-[10px] font-mono text-ghost/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
          <span className="text-[10px] font-mono text-ghost/40">{article.date}</span>
        </div>

        {/* Title */}
        <h1 className="fade-in text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="fade-in text-ghost/50 text-lg font-light mb-12 pb-12 border-b border-ghost/10">
          {article.excerpt}
        </p>

        {/* Content */}
        <div className="fade-in">
          {article.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-ghost/10">
            <h3 className="text-xs uppercase font-bold tracking-widest text-ghost/30 mb-8">Articles similaires</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map(rel => (
                <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group block rounded-2xl border border-ghost/10 hover:border-cyan/30 transition-all p-6 bg-void/30">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryColors[rel.category]}`}>{rel.category}</span>
                  <h4 className="mt-3 font-bold text-sm leading-tight group-hover:text-cyan transition-colors">{rel.title}</h4>
                  <div className="mt-3 flex items-center gap-1 text-cyan/50 group-hover:text-cyan text-xs font-bold uppercase tracking-widest transition-colors">
                    Lire <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
