import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2, Zap, ArrowUpRight, Activity, Box, ChevronRight, Calendar, Download, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import { useContact } from '../context/ContactContext';

function CalendlyWidget() {
  const [loading, setLoading] = useState(true);
  const url = 'https://calendly.com/hgosuportservices/appel-decouverte-gratuit?background_color=0d0d1a&text_color=F0EFF4&primary_color=00D1FF&hide_gdpr_banner=1';

  useEffect(() => {
    if (!document.querySelector('script[src*="calendly"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      s.onload = () => setLoading(false);
      document.head.appendChild(s);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative" style={{ height: 'min(600px, calc(100dvh - 140px))' }}>
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#0d0d1a]">
          <div className="w-9 h-9 rounded-full border-2 border-cyan/20 border-t-cyan animate-spin" />
          <p className="text-ghost/30 text-xs font-mono uppercase tracking-widest">Chargement des créneaux...</p>
        </div>
      )}
      <div
        className="calendly-inline-widget w-full h-full"
        data-url={url}
        style={{ minWidth: '320px', height: '100%' }}
      />
    </div>
  );
}

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK;

export default function ContactModal() {
  const { isOpen, defaultTab, close } = useContact();
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const lastSubmitRef = useRef(0);

  const [formData, setFormData] = useState({
    nom: '', email: '', entreprise: '', tel: '',
    type: 'crm', budget: 'small', message: '', honeypot: ''
  });
  const [leadData, setLeadData] = useState({ nom: '', email: '', honeypot: '' });
  const [status, setStatus] = useState('idle');
  const [leadStatus, setLeadStatus] = useState('idle');
  const [tab, setTab] = useState(defaultTab);

  // Sync onglet quand la modal s'ouvre
  useEffect(() => {
    if (isOpen) setTab(defaultTab);
  }, [isOpen, defaultTab]);

  // Animation d'ouverture
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(contentRef.current, { scale: 0.9, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' });
    } else {
      document.body.style.overflow = 'unset';
      if (status === 'success') {
        setTimeout(() => {
          setStatus('idle');
          setFormData({ nom: '', email: '', entreprise: '', tel: '', type: 'crm', budget: 'small', message: '' });
        }, 500);
      }
      if (leadStatus === 'success') {
        setTimeout(() => {
          setLeadStatus('idle');
          setLeadData({ nom: '', email: '', honeypot: '' });
        }, 500);
      }
    }
  }, [isOpen, status, leadStatus]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    const now = Date.now();
    if (now - lastSubmitRef.current < 60000) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
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
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        lastSubmitRef.current = Date.now();
        setStatus('success');
        setTimeout(() => close(), 2500);
      } else throw new Error('Erreur réseau');
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLeadData(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (leadData.honeypot) return;
    setLeadStatus('loading');
    const payload = {
      demande_id: `LEAD-${Date.now()}`,
      client_nom: leadData.nom,
      client_email: leadData.email,
      client_telephone: '',
      nom_entreprise: '',
      type_intervention: 'lead_magnet',
      description: 'Téléchargement guide gratuit : 5 automatisations CVC',
      urgence: 'normale',
      client_adresse: 'Gentilly',
      client_ville: 'France',
      client_code_postal: '94250'
    };
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setLeadStatus('success');
        setTimeout(() => close(), 2500);
      } else throw new Error('Erreur réseau');
    } catch {
      setLeadStatus('error');
      setTimeout(() => setLeadStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={close} />
      <div ref={contentRef} className="relative glass w-full max-w-2xl rounded-premium overflow-hidden">

        {/* Barre d'onglets */}
        <div className="flex items-center border-b border-ghost/10">
          <button
            onClick={() => setTab('form')}
            className={cn(
              'flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2',
              tab === 'form' ? 'text-cyan border-b-2 border-cyan' : 'text-ghost/40 hover:text-ghost/70'
            )}
          >
            <Zap className="w-3.5 h-3.5" /> Envoyer un message
          </button>
          <button
            onClick={() => setTab('calendly')}
            className={cn(
              'flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2',
              tab === 'calendly' ? 'text-cyan border-b-2 border-cyan' : 'text-ghost/40 hover:text-ghost/70'
            )}
          >
            <Calendar className="w-3.5 h-3.5" /> Planifier un appel
          </button>
          <button
            onClick={() => setTab('leadmagnet')}
            className={cn(
              'flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2',
              tab === 'leadmagnet' ? 'text-cyan border-b-2 border-cyan' : 'text-ghost/40 hover:text-ghost/70'
            )}
          >
            <Download className="w-3.5 h-3.5" /> Guide gratuit
          </button>
          <button onClick={close} className="px-5 py-4 text-ghost/30 hover:text-cyan transition-colors">
            <Zap className="w-5 h-5 rotate-45" />
          </button>
        </div>

        {/* ── Panneau Calendly ── */}
        {tab === 'calendly' && <CalendlyWidget />}

        {/* ── Panneau Formulaire ── */}
        <div style={{ display: tab === 'form' ? 'block' : 'none' }} className="p-8 md:p-12">
          {status === 'success' ? (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan/30">
                <CheckCircle2 className="w-10 h-10 text-cyan animate-bounce" />
              </div>
              <h2 className="text-4xl font-bold uppercase tracking-tight mb-4 text-ghost">Flux Initié !</h2>
              <p className="text-ghost/60 font-light">Votre demande a été injectée dans nos systèmes.<br />Hugo vous recontactera sous peu.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Démarrer votre <span className="text-cyan">Flux.</span></h2>
                <p className="text-ghost/60 font-light">Parlez-nous de votre projet. Nos experts concevront votre architecture d'automatisation sur mesure.</p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Nom Complet</label>
                  <div className="relative">
                    <input name="nom" value={formData.nom} onChange={handleChange} type="text" required className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors" placeholder="Jean Dupont" />
                    <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Email Professionnel</label>
                  <div className="relative">
                    <input name="email" value={formData.email} onChange={handleChange} type="email" required className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors" placeholder="jean@entreprise.com" />
                    <Zap className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Entreprise</label>
                  <div className="relative">
                    <input name="entreprise" value={formData.entreprise} onChange={handleChange} type="text" required className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors" placeholder="HGO Tech" />
                    <Box className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Téléphone</label>
                  <div className="relative">
                    <input name="tel" value={formData.tel} onChange={handleChange} type="tel" className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors" placeholder="+33 6 00 00 00 00" />
                    <Activity className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Type de Projet</label>
                  <div className="relative">
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors appearance-none cursor-pointer">
                      <option value="whatsapp" className="bg-void">WhatsApp & Telegram</option>
                      <option value="ia" className="bg-void">Agent IA</option>
                      <option value="n8n" className="bg-void">Automatisation n8n</option>
                      <option value="entreprise" className="bg-void">Automatisation Entreprise</option>
                      <option value="crm" className="bg-void">Automatisation & Création CRM</option>
                      <option value="app" className="bg-void">Application & Dashboard</option>
                      <option value="other" className="bg-void">Autre besoin</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 rotate-90 pointer-events-none" />
                  </div>
                  {formData.type && {
                    whatsapp: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 990€ — Déployé en 2 semaines</p>,
                    ia: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 1 500€ — Agent IA en 2 semaines</p>,
                    n8n: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 490€ — Hébergement self-hosted inclus</p>,
                    entreprise: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 800€ — Diagnostic gratuit de 30 min</p>,
                    crm: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 990€ — CRM livré en 5-10 jours</p>,
                    app: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 790€ — Maquette en 48h</p>,
                    other: <p className="text-[10px] text-cyan/60 ml-2 mt-1">Appel découverte gratuit de 30 min pour estimer</p>,
                  }[formData.type]}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Budget Approximatif</label>
                  <div className="relative">
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors appearance-none cursor-pointer">
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
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" className="w-full bg-void/50 border border-ghost/10 rounded-3xl px-5 py-4 text-sm focus:border-cyan outline-none resize-none transition-colors" placeholder="Décrivez les processus que vous souhaitez automatiser..." />
                </div>
                {/* Honeypot anti-spam */}
                <input name="honeypot" value={formData.honeypot} onChange={handleChange} type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 w-0" />
                <button type="submit" disabled={status === 'loading'} className={cn('md:col-span-2 group relative overflow-hidden bg-cyan text-void py-4 rounded-full font-extrabold uppercase tracking-widest transition-all shadow-lg shadow-cyan/20', status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95')}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'loading' ? <>Alignement des Systèmes... <Activity className="w-5 h-5 animate-spin" /></>
                      : status === 'error' ? <>Erreur - Réessayer <Zap className="w-5 h-5 text-red-500" /></>
                      : <>Initier le Workflow <ArrowUpRight className="w-5 h-5" /></>}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </>
          )}
        </div>

        {/* ── Panneau Lead Magnet ── */}
        <div style={{ display: tab === 'leadmagnet' ? 'block' : 'none' }} className="p-8 md:p-12">
          {leadStatus === 'success' ? (
            <div className="py-16 text-center">
              <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan/30">
                <CheckCircle2 className="w-10 h-10 text-cyan animate-bounce" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 text-ghost">Guide envoyé !</h2>
              <p className="text-ghost/60 font-light">Vérifiez votre boîte mail (et vos spams).<br />Vous recevrez le guide sous 2 minutes.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">5 automatisations <span className="text-cyan">CVC.</span></h2>
                <p className="text-ghost/60 font-light">Le guide gratuit pour gagner 10h par semaine : RDV auto, devis instantanés, relances clients et suivi terrain.</p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleLeadSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Prénom / Nom</label>
                  <div className="relative">
                    <input name="nom" value={leadData.nom} onChange={handleLeadChange} type="text" required className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors" placeholder="Jean Dupont" />
                    <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-cyan/60 ml-2">Email Professionnel</label>
                  <div className="relative">
                    <input name="email" value={leadData.email} onChange={handleLeadChange} type="email" required className="w-full bg-void/50 border border-ghost/10 rounded-2xl px-5 py-3 text-sm focus:border-cyan outline-none transition-colors" placeholder="jean@entreprise-cvc.fr" />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  </div>
                </div>
                {/* Honeypot anti-spam */}
                <input name="honeypot" value={leadData.honeypot} onChange={handleLeadChange} type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 w-0" />
                <button type="submit" disabled={leadStatus === 'loading'} className={cn('md:col-span-2 group relative overflow-hidden bg-cyan text-void py-4 rounded-full font-extrabold uppercase tracking-widest transition-all shadow-lg shadow-cyan/20', leadStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95')}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {leadStatus === 'loading' ? <>Envoi en cours... <Activity className="w-5 h-5 animate-spin" /></>
                      : leadStatus === 'error' ? <>Erreur - Réessayer <Zap className="w-5 h-5 text-red-500" /></>
                      : <>Recevoir le guide gratuit <Download className="w-5 h-5" /></>}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
              <p className="text-[10px] text-ghost/30 text-center mt-4">Pas de spam. Désinscription à tout moment.</p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
