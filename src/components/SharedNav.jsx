import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Zap, Activity, MessageSquare, Cpu, Database, LayoutDashboard, Menu, X } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const Logo = () => (
  <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cyan shadow-xl shadow-cyan/20 overflow-hidden flex-shrink-0">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="white" fillOpacity="0.1" />
      <path d="M12 2L4 7l8 5 8-5-8-5z" fill="white" fillOpacity="0.2" />
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 7l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
    </svg>
  </div>
);

const services = [
  { label: 'WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram', icon: MessageSquare },
  { label: 'Agents IA', href: '/services/agent-ia', icon: Cpu },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n', icon: Zap },
  { label: 'Automatisation Entreprise', href: '/services/automatisation-entreprise', icon: Activity },
  { label: 'Automatisation & Création CRM', href: '/services/automatisation-crm', icon: Database },
  { label: 'Applications & Dashboards', href: '/services/creation-applications-dashboards', icon: LayoutDashboard },
];

export default function SharedNav() {
  const { open } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
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
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center gap-6 py-3 px-6 md:px-8 rounded-full border border-ghost/10 w-[90%] max-w-4xl ${scrolled ? 'bg-void/60 backdrop-blur-xl' : 'bg-void/40 backdrop-blur-md'}`}>
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <Logo />
          <span className="font-sans uppercase tracking-widest text-sm font-bold hidden md:block">HGOAutomation</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 ml-auto">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(v => !v)}
              className="flex items-center gap-1 text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors"
            >
              Services
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-90' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-void/95 backdrop-blur-xl border border-ghost/10 rounded-2xl p-2 shadow-2xl">
                {services.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={href}
                    to={href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan/10 hover:text-cyan transition-colors text-sm text-ghost/70"
                  >
                    <Icon className="w-4 h-4 text-cyan/60 flex-shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className={`text-xs font-sans font-medium uppercase tracking-widest hover:text-cyan transition-colors ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'text-cyan' : ''}`}>
            Blog
          </Link>
        </div>

        <button
          onClick={open}
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
            {services.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-cyan/10 hover:text-cyan transition-colors text-base text-ghost/70 border border-ghost/5"
              >
                <Icon className="w-4 h-4 text-cyan/60 flex-shrink-0" />
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <Link
              to="/blog"
              className="px-4 py-4 text-base font-medium uppercase tracking-widest hover:text-cyan transition-colors border-b border-ghost/5"
            >
              Blog
            </Link>
          </div>

          <button
            onClick={() => { setMenuOpen(false); open(); }}
            className="mt-8 w-full bg-cyan text-void py-4 rounded-full text-sm font-extrabold uppercase tracking-widest"
          >
            Démarrer mon projet
          </button>
        </div>
      )}
    </>
  );
}
