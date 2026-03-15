import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2, Zap, ArrowUpRight, Activity, Box, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useContact } from '../context/ContactContext';

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK;

export default function ContactModal() {
  const { isOpen, close } = useContact();
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const lastSubmitRef = useRef(0);
  const [formData, setFormData] = useState({
    nom: '', email: '', entreprise: '', tel: '',
    type: 'crm', budget: 'small', message: '', honeypot: ''
  });
  const [status, setStatus] = useState('idle');

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
    }
  }, [isOpen, status]);

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

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={close} />
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
              <button onClick={close} className="text-ghost/40 hover:text-cyan transition-colors">
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
                  whatsapp: <p className="text-[10px] text-cyan/60 ml-2 mt-1">À partir de 990€ — Déployé en 3-5 jours</p>,
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
              {/* Honeypot anti-spam — hidden from real users */}
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
    </div>
  );
}
