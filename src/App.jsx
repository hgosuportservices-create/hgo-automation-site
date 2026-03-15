import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  Package
} from 'lucide-react';
import { cn } from './lib/utils';

gsap.registerPlugin(ScrollTrigger);

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

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    tel: '',
    type: 'crm',
    budget: 'small',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(contentRef.current, { scale: 0.9, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" });
    } else {
      document.body.style.overflow = 'unset';
      if (status === 'success') {
        setTimeout(() => {
          setStatus('idle');
          setFormData({ nom: '', email: '', entreprise: '', tel: '', type: 'crm', budget: 'small', message: '' });
        }, 500);
      }
    }
  }, [isOpen, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const payload = {
      demande_id: `WEB-${Date.now()}`,
      client_nom: formData.nom,
      client_email: formData.email,
      client_telephone: formData.tel,
      nom_entreprise: formData.entreprise,
      type_intervention: formData.type,
      description: `Budget estimé: ${formData.budget}\n\nMessage: ${formData.message}`,
      urgence: 'normale',
      client_adresse: 'Gentilly',
      client_ville: 'France',
      client_code_postal: '94250'
    };

    try {
      const response = await fetch('https://n8n.srv1283814.hstgr.cloud/webhook/4f40bb5b-3fcf-42cc-95a8-b227e655328e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => onClose(), 2500);
      } else {
        throw new Error('Erreur réseau');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={onClose} />

      <div ref={contentRef} className="relative glass w-full max-w-2xl p-8 md:p-12 rounded-premium overflow-hidden">
        {status === 'success' ? (
          <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan/30">
              <CheckCircle2 className="w-10 h-10 text-cyan animate-bounce" />
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-4 text-ghost">Flux Initié !</h2>
            <p className="text-ghost/60 font-light">Votre demande a été injectée dans nos systèmes. <br />Hugo vous recontactera sous peu.</p>
          </div>
        ) : (
          <>
            <div className="absolute top-0 right-0 p-6">
              <button onClick={onClose} className="text-ghost/40 hover:text-cyan transition-colors">
                <Zap className="w-6 h-6 rotate-45" />
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Démarrer votre <span className="text-cyan">Flux.</span></h2>
              <p className="text-ghost/60 font-light">Parlez-nous de votre projet. Nos experts concevront votre architecture d'automatisation sur mesure.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Nom Complet</label>
                <div className="relative">
                  <input
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                  <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Email Professionnel</label>
                <div className="relative">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors"
                    placeholder="jean@entreprise.com"
                  />
                  <Zap className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Entreprise</label>
                <div className="relative">
                  <input
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors"
                    placeholder="HGO Tech"
                  />
                  <Box className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Téléphone</label>
                <div className="relative">
                  <input
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    type="tel"
                    className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors"
                    placeholder="+33 6 00 00 00 00"
                  />
                  <Activity className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Type de Projet</label>
                <div className="relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="crm" className="bg-void">Automatisation CRM</option>
                    <option value="ia" className="bg-void">IA & Chatbots</option>
                    <option value="data" className="bg-void">Scraping & Data</option>
                    <option value="other" className="bg-void">Autre besoin complexe</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Budget Approximatif</label>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="small" className="bg-void">{`< 2 500€`}</option>
                    <option value="medium" className="bg-void">2 500€ - 5 000€</option>
                    <option value="large" className="bg-void">5 000€ - 10 000€</option>
                    <option value="enterprise" className="bg-void">{`> 10 000€`}</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Votre Message / Objectif</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full bg-void/50 border border-ghost/10 rounded-3xl px-5 py-4 text-sm focus:border-cyan outline-none resize-none transition-colors"
                  placeholder="Décrivez les processus que vous souhaitez automatiser..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  "md:col-span-2 group relative overflow-hidden bg-cyan text-void py-4 rounded-full font-extrabold uppercase tracking-widest transition-all shadow-lg shadow-cyan/20",
                  status === 'loading' ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-95"
                )}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'loading' ? (
                    <>Alignement des Systèmes... <Activity className="w-5 h-5 animate-spin" /></>
                  ) : status === 'error' ? (
                    <>Erreur - Réessayer <Zap className="w-5 h-5 text-red-500" /></>
                  ) : (
                    <>Initier le Workflow <ArrowUpRight className="w-5 h-5" /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// --- Components ---

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center gap-8 py-3 px-8 rounded-full border border-ghost/10 w-[90%] max-w-4xl",
      scrolled ? "bg-void/60 backdrop-blur-xl py-4" : "bg-transparent text-ghost"
    )}>
      <div className="text-xl font-bold tracking-tighter flex items-center gap-3">
        <Logo className="w-8 h-8 rounded-lg" />
        <span className="font-sans uppercase tracking-widest text-sm md:text-base">HGOAutomation</span>
      </div>

      <div className="hidden md:flex items-center gap-6 ml-auto">
        {['Expertise', 'Processus', 'Impact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors">
            {item}
          </a>
        ))}
        <Link to="/blog" className="text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors">
          Blog
        </Link>
      </div>

      <button
        onClick={onOpenContact}
        className="hidden md:flex ml-4 group relative overflow-hidden bg-cyan text-void px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-transform active:scale-95"
      >
        <span className="relative z-10">Démarrer</span>
        <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
      </button>
    </nav>
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
    <section ref={container} className="relative h-screen flex flex-col justify-end pb-24 px-8 md:px-24 overflow-hidden">
      {/* Hero Image - Atmos bleu/teal pour coller au logo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technologie Bleue Abstraite"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradients for perfect blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-5xl">
        <h1 className="hero-up flex flex-col leading-[0.85] tracking-tighter">
          <span className="text-4xl md:text-6xl font-sans font-extrabold uppercase mb-4 text-cyan">L'automatisation au-delà</span>
          <span className="text-7xl md:text-[11rem] font-serif italic text-ghost">des Limites.</span>
        </h1>

        <p className="hero-up mt-8 text-lg max-w-xl text-ghost/60 font-sans font-light leading-relaxed">
          HGOAutomation conçoit des écosystèmes intelligents qui transforment votre modèle économique. L'approche Croissance et Performance pour dominer votre marché.
        </p>

        <div className="hero-up mt-12 flex flex-wrap gap-4">
          <button
            onClick={onOpenContact}
            className="group relative overflow-hidden bg-cyan text-void px-8 py-4 rounded-full text-sm md:text-base font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-100"
          >
            <span className="relative z-10">Planifier un appel de découverte</span>
            <div className="absolute inset-0 bg-white transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
          </button>
          <button onClick={onOpenContact} className="group px-8 py-4 rounded-full text-sm md:text-base font-bold uppercase tracking-widest border border-ghost/20 hover:border-cyan transition-colors flex items-center gap-2">
            Discuter de mon projet <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
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
    <section ref={sectionRef} className="py-32 px-8 md:px-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan/5 to-void opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="reveal-text">
          <p className="text-xs font-mono text-cyan uppercase tracking-widest mb-4">Manifeste</p>
          <h4 className="text-2xl md:text-3xl font-light text-ghost/40 leading-relaxed max-w-3xl">
            La plupart des automatisations se contentent de scripts basiques. Nous concevons des écosystèmes performants.
          </h4>
        </div>

        <div className="reveal-text">
          <h2 className="text-5xl md:text-8xl leading-none tracking-tighter uppercase">
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
        <div key={i} className="stacking-card px-8 md:px-24">
          <div className="glass w-full max-w-5xl p-12 md:p-24 rounded-premium flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <span className="font-mono text-cyan text-2xl">{step.num}</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">{step.title}</h2>
              <p className="text-ghost/60 text-lg font-light leading-relaxed max-w-md">{step.desc}</p>
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

const Pricing = ({ onOpenContact }) => {
  return (
    <section className="py-32 px-8 md:px-24" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Investir dans <br /><span className="text-cyan">la Performance.</span></h2>
          <p className="text-ghost/60 max-w-xl text-lg font-light">Des modèles flexibles pour soutenir chaque étape de votre croissance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-12 rounded-premium border-transparent flex flex-col gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold uppercase tracking-tight">Essentiel</h3>
            <div className="text-5xl font-extrabold tracking-tighter">990€<span className="text-base font-light opacity-40">/mois</span></div>
            <ul className="space-y-4 text-ghost/60 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan" /> 3 Workflows de base</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan" /> Support Standard</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan" /> Optimisation SEO IA</li>
            </ul>
            <button onClick={onOpenContact} className="mt-4 px-8 py-3 rounded-full border border-ghost/20 font-bold hover:bg-ghost hover:text-void transition-colors">Choisir ce plan</button>
          </div>

          <div className="glass p-12 rounded-premium border-cyan bg-cyan/5 relative overflow-hidden flex flex-col gap-8 scale-105 shadow-[0_0_40px_rgba(0,209,255,0.2)]">
            <div className="absolute top-0 right-0 py-1 px-4 bg-cyan text-void text-[10px] uppercase font-bold tracking-widest rounded-bl-xl">Le plus populaire</div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">Performance</h3>
            <div className="text-5xl font-extrabold tracking-tighter">2490€<span className="text-base font-light opacity-40">/mois</span></div>
            <ul className="space-y-4 text-ghost/80 text-sm">
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan" /> Automatisation Complète</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan" /> Intégration CRM Avancée</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan" /> Monitoring Temps Réel</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan" /> Support Prioritaire</li>
            </ul>
            <button onClick={onOpenContact} className="mt-4 px-8 py-4 rounded-full bg-cyan text-void font-bold hover:bg-white transition-colors">Démarrer maintenant</button>
          </div>

          <div className="glass p-12 rounded-premium border-transparent flex flex-col gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold uppercase tracking-tight">Entreprise</h3>
            <div className="text-5xl font-extrabold tracking-tighter">Sur mesure</div>
            <ul className="space-y-4 text-ghost/60 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan" /> Infrastructures Dédiées</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan" /> API Personnalisée</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan" /> SLA Garanti</li>
            </ul>
            <button onClick={onOpenContact} className="mt-4 px-8 py-3 rounded-full border border-ghost/20 font-bold hover:bg-ghost hover:text-void transition-colors">Contacter un expert</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LegalModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(contentRef.current, { scale: 0.9, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" });
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={onClose} />

      <div ref={contentRef} className="relative glass w-full max-w-3xl max-h-[80vh] overflow-y-auto p-8 md:p-12 rounded-premium custom-scrollbar">
        <div className="sticky top-0 right-0 flex justify-end -mt-4 -mr-4 mb-4">
          <button onClick={onClose} className="text-ghost/40 hover:text-cyan transition-colors bg-void/50 p-2 rounded-full">
            <Zap className="w-6 h-6 rotate-45" />
          </button>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">Mentions <span className="text-cyan">Légales.</span></h1>
          <p className="text-ghost/40 text-xs mb-8 font-mono border-b border-ghost/10 pb-4 italic">Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)</p>

          <div className="space-y-8 text-sm md:text-base font-light text-ghost/70 leading-relaxed">
            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Box className="w-4 h-4 text-cyan" /> Éditeur du site
              </h2>
              <div className="bg-void/30 p-4 rounded-xl border border-ghost/5">
                <p><strong>Hugo Fonseca</strong></p>
                <p>Nom commercial : HGO Automation</p>
                <p>Entrepreneur individuel (Auto-entrepreneur)</p>
                <p>94250 Gentilly, France</p>
                <p>SIRET : 908 443 120 00021</p>
                <p>Email : <a href="mailto:hgosuportservices@gmail.com" className="text-cyan underline">hgosuportservices@gmail.com</a></p>
                <p className="text-xs mt-2 opacity-60 italic">Non assujetti à la TVA — Article 293B du CGI</p>
              </div>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan" /> Directeur de la publication
              </h2>
              <p>Hugo Fonseca</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan" /> Hébergement
              </h2>
              <p><strong>Netlify, Inc.</strong><br />512 2nd Street, Suite 200, San Francisco, CA 94107, USA</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan" /> Propriété intellectuelle
              </h2>
              <p>L'ensemble du contenu de ce site (textes, images, code, logotypes, visuels) est la propriété exclusive de Hugo Fonseca — HGO Automation. Toute reproduction ou distribution est interdite sans autorisation écrite.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan" /> Données personnelles
              </h2>
              <p>Le site hgoautomation.fr collecte des données personnelles (nom, email, téléphone) via les formulaires de contact pour répondre à vos demandes. Aucune donnée n'est revendue à des tiers.</p>
              <p className="mt-2 text-xs opacity-60 italic">Conformément au RGPD, vous disposez d'un droit d'accès et de rectification sur simple demande par email.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const CGVModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(contentRef.current, { scale: 0.9, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" });
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={onClose} />

      <div ref={contentRef} className="relative glass w-full max-w-3xl max-h-[80vh] overflow-y-auto p-8 md:p-12 rounded-premium custom-scrollbar">
        <div className="sticky top-0 right-0 flex justify-end -mt-4 -mr-4 mb-4">
          <button onClick={onClose} className="text-ghost/40 hover:text-cyan transition-colors bg-void/50 p-2 rounded-full">
            <Zap className="w-6 h-6 rotate-45" />
          </button>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">Conditions Générales de <span className="text-cyan">Vente.</span></h1>
          <p className="text-ghost/40 text-xs mb-8 font-mono border-b border-ghost/10 pb-4 italic">Dernière mise à jour : février 2026 · Applicable à toute commande passée auprès de HGO Automation</p>

          <div className="space-y-8 text-sm md:text-base font-light text-ghost/70 leading-relaxed text-left">
            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 flex items-center gap-2 border-l-2 border-cyan pl-3">
                Article 1 — Identification
              </h2>
              <div className="bg-void/30 p-4 rounded-xl border border-ghost/5">
                <p><strong>Hugo Fonseca</strong>, exerçant sous le nom commercial <strong>HGO Automation</strong></p>
                <p>Siège social : 94250 Gentilly, France</p>
                <p>SIRET : 908 443 120 00021</p>
                <p>Email : hgosuportservices@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 border-l-2 border-cyan pl-3">Article 2 — Objet</h2>
              <p>Prestations d'automatisation (n8n, Make), IA, chatbots, consulting et création web.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 border-l-2 border-cyan pl-3">Article 3 — Devis</h2>
              <p>Devis gratuit valable 30 jours. Commande validée par signature et acompte.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 border-l-2 border-cyan pl-3">Article 4 — Tarifs</h2>
              <p>Franchise de TVA applicable. Acompte de 50% à la commande, solde à la livraison. Abonnements mensuels sans engagement.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 border-l-2 border-cyan pl-3">Article 5 — Livraison</h2>
              <p>48h pour le pack Starter. 5-10 jours pour le pack Pro.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 border-l-2 border-cyan pl-3">Article 8 — Garantie</h2>
              <p>Garantie "Satisfait ou Remboursé" de 30 jours sur les abonnements mensuels.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-3 border-l-2 border-cyan pl-3">Article 10 — Résiliation</h2>
              <p>Sans engagement. Préavis de 30 jours par email ou WhatsApp.</p>
            </section>

            <section className="pt-8 border-t border-ghost/10">
              <p className="text-xs opacity-50 italic">Pour toute question relative à ces CGV : hgosuportservices@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onOpenLegal, onOpenCGV }) => {
  return (
    <footer className="bg-graphite/40 backdrop-blur-sm pt-32 pb-12 px-8 md:px-24 rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
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
            <li><a href="#" className="hover:text-cyan transition-colors font-medium">Notre Vision</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors font-medium">Services</a></li>
            <li><a href="#impact" className="hover:text-cyan transition-colors font-medium">Tarifs</a></li>
            <li><Link to="/blog" className="hover:text-cyan transition-colors font-medium">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest mb-6 opacity-40">Contact</h4>
          <ul className="space-y-4 text-ghost/60">
            <li><a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfO%2FVlMcyQ0qBHjZZUBojUw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors font-medium">LinkedIn</a></li>
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
            <button onClick={onOpenLegal} className="hover:text-cyan transition-colors">Mentions Légales</button>
            <button onClick={onOpenCGV} className="hover:text-cyan transition-colors">CGV</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isCGVOpen, setIsCGVOpen] = useState(false);

  return (
    <main className="min-h-screen text-ghost font-sans selection:bg-cyan/30">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
      <CGVModal isOpen={isCGVOpen} onClose={() => setIsCGVOpen(false)} />

      <section className="py-32 px-8 md:px-24" id="expertise">
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
      <Pricing onOpenContact={() => setIsContactOpen(true)} />
      <Footer onOpenLegal={() => setIsLegalOpen(true)} onOpenCGV={() => setIsCGVOpen(true)} />
    </main>
  );
}

export default App;
