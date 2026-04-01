import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContact } from './context/ContactContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cpu,
  Layers,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Terminal,
  MousePointer2,
  Calendar,
  Activity,
  Box,
  Monitor,
  Database,
  MessageSquare,
  Package,
  LayoutDashboard,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { cn } from './lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Brand Logo Component ---
const CircuitLines = ({ scale = 1 }) => (
  <svg
    width={40 * scale} height={60 * scale}
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    {/* Ligne verticale principale */}
    <line x1="32" y1="4" x2="32" y2="56" stroke="#00E5FF" strokeWidth="0.8" strokeOpacity="0.5" />
    {/* Branches horizontales gauche avec dots */}
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

    {/* Dot sur la ligne principale */}
    <circle cx="32" cy="26" r="2" fill="#00E5FF" fillOpacity="0.8" />
    <circle cx="32" cy="10" r="1.5" fill="#00E5FF" fillOpacity="0.6" />
    <circle cx="32" cy="42" r="1.5" fill="#00E5FF" fillOpacity="0.5" />
  </svg>
);

const Logo = ({ className, size = 'md' }) => {
  const scale = size === 'xl' ? 1.8 : size === 'lg' ? 1.2 : size === 'sm' ? 0.65 : 0.85;
  const fontSize = size === 'xl' ? '2.8rem' : size === 'lg' ? '1.8rem' : size === 'sm' ? '1.1rem' : '1.45rem';
  const subSize = size === 'xl' ? '0.62rem' : size === 'lg' ? '0.42rem' : size === 'sm' ? '0.32rem' : '0.38rem';
  return (
    <div className={cn("flex items-center gap-0 leading-none select-none", className)}>
      <CircuitLines scale={scale} />
      <div className="flex flex-col items-start leading-none">
        <span style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.04em', lineHeight: 1, color: '#00E5FF', fontWeight: 800, fontSize, textShadow: '0 0 24px rgba(0,229,255,0.45), 0 0 6px rgba(0,229,255,0.3)' }}>
          HGO
        </span>
        <span style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.25em', lineHeight: 1.2, color: 'rgba(255,255,255,0.55)', fontWeight: 300, fontSize: subSize, textTransform: 'uppercase', marginTop: '2px' }}>
          AUTOMATION
        </span>
      </div>
    </div>
  );
};

// --- Components ---

const NAV_SERVICES = [
  { label: 'WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram', icon: MessageSquare, desc: 'Chatbot, RDV, relances auto' },
  { label: 'Agents IA', href: '/services/agent-ia', icon: Cpu, desc: 'Assistant formé sur vos données' },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n', icon: Zap, desc: '400+ intégrations sur mesure' },
  { label: 'Automatisation Entreprise', href: '/services/automatisation-entreprise', icon: Activity, desc: 'Connectez tous vos outils' },
  { label: 'Automatisation & CRM', href: '/services/automatisation-crm', icon: Database, desc: 'CRM livré en 5-10 jours' },
  { label: 'Applications & Dashboards', href: '/services/creation-applications-dashboards', icon: LayoutDashboard, desc: 'Outils internes & portails' },
];

const NAV_ITEMS = [
  { name: 'Expertise', url: '#expertise', icon: Layers },
  { name: 'Processus', url: '#processus', icon: Activity },
  { name: 'Services', url: '#services', icon: Box },
  { name: 'Blog', url: '/blog', icon: Terminal },
];

const Navbar = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('Expertise');
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (item) => {
    setActiveTab(item.name);
    if (item.url.startsWith('#')) {
      document.getElementById(item.url.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop — tubelight pill centré */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2">
        {/* Logo */}
        <div className="flex items-center bg-void/40 backdrop-blur-xl border border-ghost/10 rounded-full py-2 px-4 mr-2">
          <Logo size="md" />
        </div>

        {/* Tubelight pill */}
        <div className="flex items-center gap-1 bg-void/40 backdrop-blur-xl border border-ghost/10 rounded-full py-1 px-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.name;
            const isLink = !item.url.startsWith('#');
            const El = isLink ? Link : 'a';
            const elProps = isLink ? { to: item.url } : { href: item.url };

            return (
              <El
                key={item.name}
                {...elProps}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "relative cursor-pointer text-xs font-semibold px-5 py-2 rounded-full transition-colors uppercase tracking-widest",
                  isActive ? "text-cyan" : "text-ghost/60 hover:text-ghost"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-cyan/10 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Tube glow top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan rounded-t-full">
                      <div className="absolute w-12 h-6 bg-cyan/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-cyan/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-cyan/30 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </El>
            );
          })}

          {/* Services dropdown — style header-3 */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(v => !v)}
              className={cn(
                "relative cursor-pointer text-xs font-semibold px-5 py-2 rounded-full transition-colors uppercase tracking-widest flex items-center gap-1",
                servicesOpen ? "text-cyan" : "text-ghost/60 hover:text-ghost"
              )}
            >
              <Package className="w-3 h-3 mr-1" />
              Offres
              <ChevronRight className={cn("w-3 h-3 transition-transform duration-200", servicesOpen ? "rotate-90" : "")} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-void/95 backdrop-blur-xl border border-ghost/10 rounded-2xl p-3 shadow-2xl w-[520px]">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_SERVICES.map(({ label, href, icon: Icon, desc }) => (
                    <Link
                      key={href}
                      to={href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan/10 hover:text-cyan transition-colors group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ghost/5 border border-ghost/10 flex items-center justify-center group-hover:bg-cyan/10 group-hover:border-cyan/20 transition-colors">
                        <Icon className="w-4 h-4 text-ghost/50 group-hover:text-cyan transition-colors" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-ghost truncate">{label}</span>
                        <span className="text-[11px] text-ghost/40 group-hover:text-cyan/60 transition-colors truncate">{desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-ghost/5 px-1">
                  <p className="text-[11px] text-ghost/40">
                    Besoin d'un devis ?{' '}
                    <button className="text-cyan font-medium hover:underline" onClick={() => { setServicesOpen(false); onOpenContact('calendly'); }}>
                      Planifier un appel →
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onOpenContact}
          className="ml-2 group relative overflow-hidden bg-cyan text-void px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-transform active:scale-95"
        >
          <span className="relative z-10">Démarrer</span>
          <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
        </button>
      </div>

      {/* Mobile — barre du haut compacte */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-4 py-3 bg-void/80 backdrop-blur-xl border-b border-ghost/10">
        <div className="flex items-center">
          <Logo size="md" />
        </div>
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="p-2 rounded-xl hover:bg-ghost/10 transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto md:hidden">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-mono text-cyan/60 uppercase tracking-widest mb-2">Services</p>
            {NAV_SERVICES.map(({ label, href }) => (
              <Link key={href} to={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-cyan/10 hover:text-cyan transition-colors text-base text-ghost/70 border border-ghost/5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan/40 flex-shrink-0" />
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-6">
            {NAV_ITEMS.map((item) => {
              const isLink = !item.url.startsWith('#');
              const El = isLink ? Link : 'a';
              const elProps = isLink ? { to: item.url } : { href: item.url };
              return (
                <El key={item.name} {...elProps} onClick={() => setMenuOpen(false)} className="px-4 py-4 text-base font-medium uppercase tracking-widest hover:text-cyan transition-colors border-b border-ghost/5">
                  {item.name}
                </El>
              );
            })}
          </div>
          <button onClick={() => { setMenuOpen(false); onOpenContact(); }} className="mt-8 w-full bg-cyan text-void py-4 rounded-full text-sm font-extrabold uppercase tracking-widest">
            Démarrer mon projet
          </button>
        </div>
      )}
    </>
  );
};

const GlowPrimaryBtn = ({ onClick, children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      type="button"
      className="glow-btn-primary"
      data-state={clicked ? 'clicked' : undefined}
      onClick={() => { setClicked(true); setTimeout(() => setClicked(false), 200); onClick?.(); }}
    >
      {children}
    </button>
  );
};

const GlowOutlineBtn = ({ onClick, children }) => (
  <button type="button" className="glow-btn-outline" onClick={onClick}>
    {children}
  </button>
);

const Hero = ({ onOpenContact }) => {
  const titles = useMemo(() => ["intelligente", "scalable", "automatisée", "performante", "innovante"], []);
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(prev => prev === titles.length - 1 ? 0 : prev + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Fond image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technologie"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/20" />
      </div>

      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col max-w-4xl w-full">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <button
            onClick={onOpenContact}
            className="relative text-sm font-medium rounded-full h-12 p-1 ps-5 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-5 w-fit overflow-hidden cursor-pointer border border-ghost/15 bg-ghost/5 text-ghost/70 hover:text-ghost backdrop-blur-sm inline-flex items-center"
          >
            <span className="relative z-10 flex items-center gap-2 transition-all duration-500 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-cyan flex-shrink-0" />
              Découvrez nos automatisations IA
            </span>
            <div className="absolute right-1 w-10 h-10 bg-cyan/15 border border-cyan/20 text-cyan rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </div>
          </button>
        </motion.div>

        {/* H1 + mots cycliques */}
        <motion.div
          className="flex gap-4 flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold">
            <span className="text-ghost">Votre entreprise,</span>
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1" style={{ minHeight: '1.15em' }}>
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-serif italic text-cyan"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                  }
                >
                  {title}.
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-ghost/50 max-w-2xl text-center font-light">
            HGO Automation conçoit vos CRM sur mesure, agents IA, workflows n8n et automatisations WhatsApp.
            Des solutions concrètes, livrées en moins d'une semaine.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GlowOutlineBtn onClick={onOpenContact}>
            <Calendar className="w-4 h-4" /> Planifier un appel
          </GlowOutlineBtn>
          <GlowPrimaryBtn onClick={onOpenContact}>
            Démarrer mon projet <ArrowRight className="w-4 h-4" />
          </GlowPrimaryBtn>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-ghost/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: '50+', label: 'Clients accompagnés' },
            { value: '500+', label: 'Workflows automatisés' },
            { value: '2 semaines', label: 'Délai de livraison' },
          ].map((stat, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-2xl font-bold text-ghost">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-ghost/10" />}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc, icon: Icon, children }) => (
  <div className="glass p-8 rounded-premium flex flex-col gap-6 group hover:border-cyan/40 transition-colors duration-500">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-cyan" />
      </div>
      <h3 className="text-xl font-bold font-sans uppercase tracking-tight">{title}</h3>
    </div>
    <p className="text-ghost/40 text-sm font-light leading-relaxed">{desc}</p>
    <div className="flex-grow flex items-center justify-center p-4 border border-ghost/5 rounded-3xl bg-void/50 overflow-hidden min-h-[160px]">
      {children}
    </div>
  </div>
);

const FeatureShuffler = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Analyses Marketing", color: "text-cyan" },
    { id: 2, label: "Génération de Leads", color: "text-blue" },
    { id: 3, label: "Opérations CRM Directes", color: "text-green-400" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 flex flex-col items-center justify-center gap-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={cn(
            "absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            idx === 0 ? "opacity-100 scale-100 translate-y-0" :
              idx === 1 ? "opacity-40 scale-90 translate-y-8" : "opacity-0 scale-75 translate-y-16"
          )}
        >
          <div className={cn("px-4 py-2 border border-ghost/10 rounded-xl glass whitespace-nowrap", item.color)}>
            <Zap className="inline-block w-4 h-4 mr-2" />
            <span className="text-xs font-mono font-bold">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState("");
  const fullText = useMemo(() => "Système prêt. Analyse des nœuds... Scalabilité activée. 10k requêtes/s traitées.", []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
    }
  }, [index, fullText]);

  return (
    <div className="w-full font-mono text-xs flex flex-col gap-2">
      <div className="flex items-center gap-2 text-cyan/60 px-2 py-1 border-b border-ghost/5 mb-1">
        <div className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
        <span>TÉLÉMÉTRIE EN DIRECT</span>
      </div>
      <div className="px-2 py-1 flex flex-wrap">
        <span className="text-ghost/80">{text}</span>
        <span className="w-2 h-4 bg-cyan/80 ml-1 inline-block animate-pulse" />
      </div>
    </div>
  );
};

const ProtocolScheduler = () => {
  const [activeDay, setActiveDay] = useState(null);
  const cursorRef = useRef(null);
  const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const runAnimation = () => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(cursorRef.current, { x: 40, y: 20, duration: 1.5, ease: "power2.inOut" })
          .call(() => setActiveDay(2))
          .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
          .to(cursorRef.current, { x: 100, y: 50, duration: 1, ease: "power2.inOut" })
          .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
          .to(cursorRef.current, { opacity: 0, duration: 0.5 })
          .set(cursorRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
      };
      runAnimation();
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full max-w-[140px] flex flex-col gap-4">
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <div
            key={i}
            className={cn(
              "w-4 h-4 rounded-sm flex items-center justify-center text-[8px] border transition-colors",
              i === 2 && activeDay === 2 ? "bg-cyan border-cyan text-void" : "border-ghost/10 text-ghost/40"
            )}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="h-6 w-full glass rounded-full flex items-center px-3 gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[8px] font-mono text-ghost/60">ARCHITECTURE SAUVEGARDÉE...</span>
      </div>
      <div ref={cursorRef} className="absolute left-0 top-0 pointer-events-none">
        <MousePointer2 className="w-4 h-4 text-cyan rotate-[-45deg] drop-shadow-[0_0_8px_rgba(0,209,255,0.5)]" />
      </div>
    </div>
  );
};

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan/5 to-void opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-12">
        <div className="reveal-text">
          <p className="text-xs font-mono text-cyan uppercase tracking-widest mb-4">Manifeste</p>
          <p className="text-xl md:text-3xl font-light text-ghost/40 leading-relaxed max-w-3xl">
            La plupart des automatisations se contentent de scripts basiques. Nous concevons des écosystèmes performants.
          </p>
        </div>

        <div className="reveal-text">
          <h2 className="text-4xl sm:text-5xl md:text-8xl leading-none tracking-tighter uppercase">
            Focus sur la <br />
            <span className="font-serif italic text-cyan">Performance Intelligente.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

const ProtocolSection = () => {
  const container = useRef(null);

  const steps = [
    {
      num: "01",
      title: "Diagnostic Architectural",
      desc: "Analyse profonde de vos flux et identification des goulots d'étranglement structurels.",
      Animation: () => (
        <svg viewBox="0 0 100 100" className="w-32 h-32 animate-[spin_10s_linear_infinite]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-cyan/40" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1" className="text-cyan" />
          <rect x="45" y="45" width="10" height="10" fill="currentColor" className="text-cyan" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Immersion Technologique",
      desc: "Déploiement de protocoles IA et routages automatisés scalables en temps réel.",
      Animation: () => (
        <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden border border-cyan/20 rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/20 to-transparent w-[200%] animate-[translateX_3s_linear_infinite] ml-[-100%]" />
          <Monitor className="w-12 h-12 text-cyan" />
        </div>
      )
    },
    {
      num: "03",
      title: "Optimisation de Flux",
      desc: "Monitoring et ajustement continu pour maintenir un avantage compétitif absolu.",
      Animation: () => (
        <div className="w-32 h-12 flex items-end gap-[2px]">
          {[0.2, 0.4, 0.8, 0.5, 0.9, 1, 0.6, 0.4, 0.7].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-cyan/40 rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      )
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stacking-card");
      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              gsap.to(card, {
                scale: 0.9 - self.progress * 0.05,
                filter: `blur(${self.progress * 10}px)`,
                opacity: 1 - self.progress * 0.5,
                overwrite: 'auto'
              });
            }
          });
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="bg-transparent" id="processus">
      {steps.map((step, i) => (
        <div key={i} className="stacking-card px-4 md:px-24">
          <div className="glass w-full max-w-5xl p-6 sm:p-12 md:p-24 rounded-premium flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <span className="font-mono text-cyan text-xl md:text-2xl">{step.num}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">{step.title}</h2>
              <p className="text-ghost/60 text-base md:text-lg font-light leading-relaxed max-w-md">{step.desc}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <step.Animation />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SERVICES_LIST = [
  { label: 'WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram', icon: MessageSquare, desc: 'Chatbot, prise de RDV, relances automatiques sur les deux plateformes.' },
  { label: 'Agents IA', href: '/services/agent-ia', icon: Cpu, desc: 'Un assistant intelligent formé sur vos données, disponible 24h/24.' },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n', icon: Zap, desc: 'Workflows sur mesure hébergés chez vous. 400+ intégrations natives.' },
  { label: 'Automatisation Entreprise', href: '/services/automatisation-entreprise', icon: Activity, desc: 'Connectez vos outils, éliminez les saisies manuelles, scalez sans embaucher.' },
  { label: 'Automatisation & Création CRM', href: '/services/automatisation-crm', icon: Database, desc: 'CRM 100% adapté à votre process de vente. Livré en 5-10 jours.' },
  { label: 'Applications & Dashboards', href: '/services/creation-applications-dashboards', icon: LayoutDashboard, desc: 'Outils internes, portails clients, dashboards KPIs — livrés rapidement.' },
];

const TESTIMONIALS = [
  {
    name: 'Romain C.',
    role: 'Directeur, Agence Immo Castelli — Paris',
    initials: 'RC',
    text: "Hugo a connecté notre formulaire de demande de visite à un workflow complet : confirmation automatique au prospect, notification à notre équipe, création de la fiche dans le CRM. On ne perd plus aucune demande, même le week-end. Mis en place en 3 jours.",
    result: '+40% de RDV qualifiés',
  },
  {
    name: 'Sarah B.',
    role: 'Coach indépendante — Lyon',
    initials: 'SB',
    text: "Avant, j'envoyais les confirmations de séance à la main. Hugo a automatisé toute la chaîne : confirmation immédiate après réservation, rappel J-1, lien de la session Google Meet. J'économise 2h par semaine et mes clients adorent la réactivité.",
    result: '2h économisées / semaine',
  },
  {
    name: 'Marc L.',
    role: 'Gérant, Société de services B2B — Bordeaux',
    initials: 'ML',
    text: "Notre processus de devis était chaotique : formulaire web → Excel → email manuel → oubli de relance. Hugo a tout automatisé avec n8n. Aujourd'hui le client reçoit une confirmation en 30 secondes, notre équipe est notifiée, et les relances partent automatiquement.",
    result: '0 demande perdue depuis',
  },
];

const TestimonialCard = ({ t }) => (
  <div className="glass rounded-premium p-7 flex flex-col gap-5 w-[340px] md:w-[400px] flex-shrink-0 hover:border-cyan/30 transition-colors duration-300">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-cyan">{t.initials}</span>
      </div>
      <div>
        <p className="font-bold text-ghost text-sm">{t.name}</p>
        <p className="text-ghost/40 text-xs">{t.role}</p>
      </div>
    </div>
    <p className="text-ghost/60 text-sm leading-relaxed flex-grow">"{t.text}"</p>
    <div className="flex items-center gap-2 pt-4 border-t border-ghost/10">
      <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
      <span className="text-xs font-bold text-cyan">{t.result}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-20 md:py-32 bg-graphite/20 overflow-hidden">
      <div className="px-6 md:px-24 max-w-7xl mx-auto mb-10 md:mb-16">
        <p className="text-xs font-mono text-cyan uppercase tracking-widest mb-4">// Ils nous font confiance</p>
        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">
          Ce que disent<br /><span className="text-cyan font-serif italic">nos clients.</span>
        </h2>
      </div>
      <div className="relative">
        <div
          className="flex gap-6 animate-marquee"
          style={{ '--duration': '30s', '--gap': '1.5rem' }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-graphite/20 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-graphite/20 to-transparent z-10" />
      </div>
    </section>
  );
};

const ServicesSection = ({ onOpenContact, onOpenCalendly }) => (
  <section className="py-20 md:py-32 px-6 md:px-24" id="services">
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 md:mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4 md:mb-6">Nos <br /><span className="text-cyan">Services.</span></h2>
        <p className="text-ghost/60 max-w-xl text-base md:text-lg font-light">6 expertises pour automatiser chaque dimension de votre activité.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_LIST.map(({ label, href, icon: Icon, desc }) => (
          <Link key={href} to={href} className="group glass p-8 rounded-premium border-transparent hover:border-cyan/30 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/10">
            <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <Icon className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <h3 className="font-bold text-ghost uppercase tracking-tight text-lg mb-2">{label}</h3>
              <p className="text-ghost/50 text-sm leading-relaxed">{desc}</p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-cyan text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Découvrir <ArrowUpRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onClick={onOpenContact} className="group relative overflow-hidden bg-cyan text-void px-10 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-100">
          <span className="relative z-10 flex items-center gap-2">Discuter de mon projet <ArrowUpRight className="w-4 h-4" /></span>
          <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
        </button>
        <button onClick={onOpenCalendly} className="flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-ghost/20 hover:border-cyan text-ghost/60 hover:text-ghost transition-colors">
          <Calendar className="w-4 h-4" /> Planifier un appel
        </button>
      </div>
    </div>
  </section>
);

const FOOTER_SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hugo-fonseca-6b53603aa",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
  },
];

const SocialLinks = ({ socials, className }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [clicked, setClicked] = useState(false);

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  };

  useEffect(() => {
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clicked]);

  return (
    <div className={cn("flex items-center justify-center gap-0", className)}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer px-5 py-2 transition-opacity duration-200",
            hoveredSocial && hoveredSocial !== social.name ? "opacity-50" : "opacity-100"
          )}
          onMouseEnter={() => {
            setHoveredSocial(social.name);
            setRotation(Math.random() * 20 - 10);
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => setClicked(true)}
        >
          <span className="block text-sm font-medium uppercase tracking-widest">{social.name}</span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="w-16 h-16"
                  initial={{ y: -40, rotate: rotation, opacity: 0, filter: "blur(2px)" }}
                  animate={{ y: -50, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-graphite/40 backdrop-blur-sm pt-16 md:pt-32 pb-12 px-6 md:px-24 rounded-t-[2rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
        <div className="col-span-2">
          <div className="flex items-center mb-6">
            <Logo size="xl" />
          </div>
          <p className="text-ghost/40 max-w-sm font-light leading-relaxed">
            Redéfinir les frontières de l'efficacité opérationnelle par l'automatisation intelligente. L'avenir appartient aux systèmes qui apprennent.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest mb-6 opacity-40">Compagnie</h4>
          <ul className="space-y-4 text-ghost/60">
            <li><a href="#expertise" className="hover:text-cyan transition-colors font-medium">Notre Expertise</a></li>
            <li><a href="#services" className="hover:text-cyan transition-colors font-medium">Services</a></li>
            <li><a href="#processus" className="hover:text-cyan transition-colors font-medium">Processus</a></li>
            <li><Link to="/blog" className="hover:text-cyan transition-colors font-medium">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest mb-6 opacity-40">Contact</h4>
          <ul className="space-y-4 text-ghost/60">
            <li><SocialLinks socials={FOOTER_SOCIALS} className="justify-start" /></li>
            <li><a href="mailto:hgosuportservices@gmail.com" className="hover:text-cyan transition-colors text-cyan font-bold underline underline-offset-4">hgosuportservices@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-ghost/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 px-4 py-2 bg-void/50 rounded-full border border-ghost/5">
          <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
          <span className="text-[10px] font-mono font-bold tracking-tighter opacity-80 uppercase">Système Opérationnel // Plateforme 1.0.4</span>
        </div>
        <div className="text-[10px] font-mono opacity-40 flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 uppercase">
          <span>© 2026 Hugo Fonseca — HGO Automation. SIRET 908 443 120 00021</span>
          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="hover:text-cyan transition-colors">Mentions Légales</Link>
            <Link to="/cgv" className="hover:text-cyan transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const { open: openContact } = useContact();
  const openCalendly = () => openContact('calendly');

  return (
    <main className="min-h-screen text-ghost font-sans selection:bg-cyan/30">
      <Helmet>
        <title>HGO Automation — Automatisation & IA pour PME françaises</title>
        <meta name="description" content="HGO Automation déploie vos automatisations d'entreprise et agents IA en moins de 2 semaines. n8n, WhatsApp, CRM, dashboards. Devis gratuit sous 24h." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="HGO Automation — Automatisation & IA pour PME françaises" />
        <meta property="og:description" content="HGO Automation déploie vos automatisations d'entreprise et agents IA en moins de 2 semaines. Devis gratuit sous 24h." />
        <meta property="og:url" content="https://hgoautomation.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hgoautomation.fr/og-cover.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HGO Automation — Automatisation & IA pour PME françaises" />
        <meta name="twitter:description" content="HGO Automation déploie vos automatisations d'entreprise et agents IA en moins de 2 semaines." />
        <meta name="twitter:image" content="https://hgoautomation.fr/og-cover.png" />
        <link rel="canonical" href="https://hgoautomation.fr" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "HGO Automation",
          "description": "Agence d'automatisation d'entreprise et d'intelligence artificielle pour PME françaises. Déploiement de workflows n8n, agents IA, chatbots WhatsApp, CRM et dashboards.",
          "url": "https://hgoautomation.fr",
          "logo": "https://hgoautomation.fr/hgo-logo.svg",
          "image": "https://hgoautomation.fr/og-cover.png",
          "telephone": "+33783945296",
          "email": "contact@hgoautomation.fr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR",
            "addressLocality": "France"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "46.2276",
            "longitude": "2.2137"
          },
          "areaServed": { "@type": "Country", "name": "France" },
          "priceRange": "€€",
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": [],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services d'automatisation & IA",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation n8n", "url": "https://hgoautomation.fr/services/automatisation-n8n" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agents IA", "url": "https://hgoautomation.fr/services/agent-ia" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation WhatsApp & Telegram", "url": "https://hgoautomation.fr/services/automatisation-whatsapp-telegram" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation Entreprise", "url": "https://hgoautomation.fr/services/automatisation-entreprise" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM sur mesure", "url": "https://hgoautomation.fr/services/automatisation-crm" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Applications & Dashboards", "url": "https://hgoautomation.fr/services/creation-applications-dashboards" } }
            ]
          }
        })}</script>
      </Helmet>
      <Navbar onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />

      <section className="py-20 md:py-32 px-6 md:px-24" id="expertise">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Workflows sur mesure"
            desc="Des architectures d'automatisation conçues spécifiquement pour soutenir votre modèle économique unique."
            icon={Activity}
          >
            <FeatureShuffler />
          </FeatureCard>

          <FeatureCard
            title="Scalabilité instantanée"
            desc="Gérez 10 ou 10 000 clients avec le même effort grâce à des processus capables d'absorber votre croissance."
            icon={Zap}
          >
            <TelemetryTypewriter />
          </FeatureCard>

          <FeatureCard
            title="IA au cœur"
            desc="Intégration d'intelligences artificielles pour trier, analyser et répondre plus vite que vos concurrents."
            icon={Cpu}
          >
            <ProtocolScheduler />
          </FeatureCard>
        </div>
      </section>

      <Philosophy />
      <ProtocolSection />
      <Testimonials />
      <ServicesSection onOpenContact={openContact} onOpenCalendly={openCalendly} />
      <Footer />
    </main>
  );
}

export default App;
