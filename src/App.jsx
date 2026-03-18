import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  Search,
  MessageSquare,
  Package,
  LayoutDashboard,
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Brand Logo Component ---
const Logo = ({ className }) => (
  <div className={cn("relative flex items-center justify-center w-12 h-12 rounded-xl bg-cyan shadow-xl shadow-cyan/20 group overflow-hidden", className)}>
    {/* Glass Shine */}
    <div className="absolute top-0 left-0 w-full h-[50%] bg-white/20 -skew-y-12 translate-y-[-50%] group-hover:translate-y-[150%] transition-transform duration-1000" />

    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
    >
      {/* 3D Volumetric Cube */}
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="white" fillOpacity="0.1" />
      <path d="M12 2L4 7l8 5 8-5-8-5z" fill="white" fillOpacity="0.2" /> {/* Top Face */}
      <path d="M12 22V12l8-5v10l-8 5z" fill="white" fillOpacity="0.05" /> {/* Right Face */}

      {/* Wireframe edges for definition */}
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 7l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Glowing Core */}
      <circle cx="12" cy="12" r="1.5" fill="white" className="animate-pulse" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.5" />
    </svg>

    <div className="absolute inset-0 rounded-xl border border-white/30" />
  </div>
);

// --- Components ---

const NAV_SERVICES = [
  { label: 'WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram' },
  { label: 'Agents IA', href: '/services/agent-ia' },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n' },
  { label: 'Automatisation Entreprise', href: '/services/automatisation-entreprise' },
  { label: 'Automatisation & Création CRM', href: '/services/automatisation-crm' },
  { label: 'Applications & Dashboards', href: '/services/creation-applications-dashboards' },
];

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center gap-6 py-3 px-6 md:px-8 rounded-full border border-ghost/10 w-[90%] max-w-4xl",
        scrolled ? "bg-void/60 backdrop-blur-xl py-4" : "bg-transparent text-ghost"
      )}>
        <div className="text-xl font-bold tracking-tighter flex items-center gap-3">
          <Logo className="w-8 h-8 rounded-lg" />
          <span className="font-sans uppercase tracking-widest text-sm md:text-base">HGOAutomation</span>
        </div>

        <div className="hidden md:flex items-center gap-5 ml-auto">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(v => !v)}
              className="flex items-center gap-1 text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors"
            >
              Services
              <ChevronRight className={cn("w-3 h-3 transition-transform duration-200", servicesOpen ? "rotate-90" : "")} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-void/95 backdrop-blur-xl border border-ghost/10 rounded-2xl p-2 shadow-2xl">
                {NAV_SERVICES.map(({ label, href }) => (
                  <Link key={href} to={href} onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan/10 hover:text-cyan transition-colors text-sm text-ghost/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/40 flex-shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[{ label: 'Expertise', id: 'expertise' }, { label: 'Processus', id: 'processus' }, { label: 'Services', id: 'services' }].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors">
              {item.label}
            </a>
          ))}
          <Link to="/blog" className="text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors">
            Blog
          </Link>
        </div>

        <button
          onClick={onOpenContact}
          className="hidden md:flex ml-2 group relative overflow-hidden bg-cyan text-void px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-transform active:scale-95"
        >
          <span className="relative z-10">Démarrer</span>
          <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
        </button>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden ml-auto p-2 rounded-xl hover:bg-ghost/10 transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col pt-28 pb-8 px-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-mono text-cyan/60 uppercase tracking-widest mb-2">Services</p>
            {NAV_SERVICES.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-cyan/10 hover:text-cyan transition-colors text-base text-ghost/70 border border-ghost/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan/40 flex-shrink-0" />
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-6">
            {[{ label: 'Notre Expertise', id: 'expertise' }, { label: 'Processus', id: 'processus' }, { label: 'Services', id: 'services' }].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-4 text-base font-medium uppercase tracking-widest hover:text-cyan transition-colors border-b border-ghost/5"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-4 text-base font-medium uppercase tracking-widest hover:text-cyan transition-colors border-b border-ghost/5"
            >
              Blog
            </Link>
          </div>

          <button
            onClick={() => { setMenuOpen(false); onOpenContact(); }}
            className="mt-8 w-full bg-cyan text-void py-4 rounded-full text-sm font-extrabold uppercase tracking-widest"
          >
            Démarrer mon projet
          </button>
        </div>
      )}
    </>
  );
};

const Hero = ({ onOpenContact }) => {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-up", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-24 overflow-hidden">
      {/* Hero Image - Atmos bleu/teal pour coller au logo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technologie Bleue Abstraite"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradients for perfect blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-5xl">
        <h1 className="hero-up flex flex-col leading-[0.9] tracking-tighter">
          <span className="text-[2.8rem] sm:text-6xl md:text-[8rem] font-serif italic text-cyan">L'automatisation</span>
          <span className="text-[2.8rem] sm:text-6xl md:text-[8rem] font-serif italic text-ghost">au-delà des Limites.</span>
        </h1>

        <p className="hero-up mt-6 md:mt-8 text-base md:text-lg max-w-xl text-ghost/60 font-sans font-light leading-relaxed">
          HGO Automation conçoit des écosystèmes intelligents qui transforment votre modèle économique — CRM, agents IA, n8n, WhatsApp. Opérationnel en moins d'une semaine.
        </p>

        <div className="hero-up mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
          <button
            onClick={onOpenContact}
            className="group relative overflow-hidden bg-cyan text-void px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-100 text-center"
          >
            <span className="relative z-10">Planifier un appel de découverte</span>
            <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
          </button>
          <button onClick={onOpenContact} className="group px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-ghost/20 hover:border-cyan transition-colors flex items-center justify-center gap-2">
            Discuter de mon projet <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="hero-up mt-8 md:mt-12 flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-ghost/10">
          {[
            { value: '5 jours', label: 'Délai de livraison moyen' },
            { value: '100%', label: 'Projets livrés dans les délais' },
            { value: '30 min', label: 'Appel découverte gratuit' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-cyan tracking-tight">{stat.value}</span>
              <span className="text-xs text-ghost/40 uppercase tracking-widest mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
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
          <h4 className="text-xl md:text-3xl font-light text-ghost/40 leading-relaxed max-w-3xl">
            La plupart des automatisations se contentent de scripts basiques. Nous concevons des écosystèmes performants.
          </h4>
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

const Testimonials = () => (
  <section className="py-20 md:py-32 px-6 md:px-24 bg-graphite/20">
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 md:mb-16">
        <p className="text-xs font-mono text-cyan uppercase tracking-widest mb-4">// Ils nous font confiance</p>
        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">
          Ce que disent<br /><span className="text-cyan font-serif italic">nos clients.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="glass p-8 rounded-premium flex flex-col gap-6 hover:border-cyan/30 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-cyan">{t.initials}</span>
              </div>
              <div>
                <p className="font-bold text-ghost text-sm">{t.name}</p>
                <p className="text-ghost/40 text-xs">{t.role}</p>
              </div>
            </div>
            <p className="text-ghost/60 text-sm leading-relaxed flex-grow">"{t.text}"</p>
            <div className="flex items-center gap-2 pt-4 border-t border-ghost/8">
              <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-xs font-bold text-cyan">{t.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = ({ onOpenContact }) => (
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
      <div className="mt-16 text-center">
        <button onClick={onOpenContact} className="group relative overflow-hidden bg-cyan text-void px-10 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-100">
          <span className="relative z-10 flex items-center gap-2">Discuter de mon projet <ArrowUpRight className="w-4 h-4" /></span>
          <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer className="bg-graphite/40 backdrop-blur-sm pt-16 md:pt-32 pb-12 px-6 md:px-24 rounded-t-[2rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
        <div className="col-span-2">
          <div className="text-3xl font-bold tracking-tighter flex items-center gap-3 mb-6">
            <Logo className="w-10 h-10" />
            <span className="font-sans uppercase">HGOAutomation</span>
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
            <li><a href="https://www.linkedin.com/in/hugo-fonseca-hgo" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors font-medium">LinkedIn</a></li>
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
          <div className="flex gap-6">
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

  return (
    <main className="min-h-screen text-ghost font-sans selection:bg-cyan/30">
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
      <ServicesSection onOpenContact={openContact} />
      <Footer />
    </main>
  );
}

export default App;
