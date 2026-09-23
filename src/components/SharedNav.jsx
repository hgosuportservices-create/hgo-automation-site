import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Zap, Activity, MessageSquare, Cpu, Database, LayoutDashboard, Menu, X, GraduationCap } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import { Logo } from './Logo';
import { CALL_MIN } from '../config';

export const NAV_SERVICES = [
  { label: 'Chatbot WhatsApp & Telegram', href: '/services/automatisation-whatsapp-telegram', icon: MessageSquare, desc: 'RDV et réponses 24h/24 · dès 990€' },
  { label: 'Agent IA', href: '/services/agent-ia', icon: Cpu, desc: 'Formé sur vos documents · dès 1 500€' },
  { label: 'Automatisation n8n', href: '/services/automatisation-n8n', icon: Zap, desc: 'Vos outils connectés · dès 290€' },
  { label: 'CRM sur mesure', href: '/services/automatisation-crm', icon: Database, desc: 'Autour de votre process · dès 990€' },
  { label: 'Automatisation des tâches', href: '/services/automatisation-entreprise', icon: Activity, desc: 'Devis, factures, reporting · dès 800€' },
  { label: 'Applications & dashboards', href: '/services/creation-applications-dashboards', icon: LayoutDashboard, desc: 'Outils internes · dès 790€' },
  { label: 'Formation & installation', href: '/formation', icon: GraduationCap, desc: 'n8n & OpenClaw · dès 290€' },
];

const LINKS = [
  { label: 'Métiers', to: '/#metiers' },
  { label: 'Cas clients', to: '/#cas-clients' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
];

const linkCls = 'font-cond text-[13px] uppercase tracking-[0.08em] font-semibold transition-colors hover:text-cyan';

export default function SharedNav() {
  const { open } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to) => to !== '/' && !to.includes('#') && location.pathname.startsWith(to);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-void/90 backdrop-blur-md border-b-2 border-cyan/40' : 'bg-transparent border-b-2 border-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="HGO Automation, accueil">
            <Logo size="md" className="flex-shrink-0" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div ref={dropdownRef} className="relative">
              <button onClick={() => setServicesOpen(v => !v)} className={`${linkCls} flex items-center gap-1`} aria-expanded={servicesOpen}>
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[25rem] bg-[#12121F] border-2 border-cyan rounded-3xl p-2 shadow-[6px_6px_0_#00D1FF]">
                  {NAV_SERVICES.map(({ label, href, icon: Icon, desc }) => {
                    const [what, price] = desc.split(' · ');
                    return (
                      <Link key={href} to={href} className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-cyan/10 transition-colors group">
                        <span className="w-9 h-9 rounded-full bg-cyan text-void flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-cond uppercase tracking-wide font-semibold text-[15px] text-ghost group-hover:text-cyan transition-colors">{label}</span>
                          <span className="block text-xs text-ghost/50">{what}</span>
                        </span>
                        {price && <span className="font-cond text-sm font-semibold text-cyan whitespace-nowrap">{price}</span>}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            {LINKS.map(l => (
              <Link key={l.label} to={l.to} className={`${linkCls} ${isActive(l.to) ? 'text-cyan' : ''}`}>{l.label}</Link>
            ))}
            <button onClick={() => open('calendly')} className="btn-cyan !py-2.5 !px-5 !text-[13px]">
              Appel gratuit
            </button>
          </div>

          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden p-2 text-ghost" aria-label="Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-void flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <div className="flex flex-col">
            {LINKS.map(l => (
              <Link key={l.label} to={l.to} onClick={() => setMenuOpen(false)} className="py-3 font-display uppercase text-2xl text-ghost hover:text-cyan">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="label-cond mt-8 mb-2">Services</p>
          <div className="flex flex-col border-t border-cyan/15">
            {NAV_SERVICES.map(({ label, href }) => (
              <Link key={href} to={href} className="py-3 border-b border-cyan/15 font-cond uppercase tracking-wide text-ghost/80 hover:text-cyan flex items-center justify-between">
                {label} <span className="text-cyan">→</span>
              </Link>
            ))}
          </div>
          <button onClick={() => { setMenuOpen(false); open('calendly'); }} className="btn-cyan mt-8 w-full">
            Appel gratuit de {CALL_MIN} min
          </button>
        </div>
      )}
    </>
  );
}
