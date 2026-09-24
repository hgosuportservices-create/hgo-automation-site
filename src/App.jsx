import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContact } from './context/ContactContext';
import { ArrowUpRight, Calendar, Download, MessageSquare, Send, Zap, Activity } from 'lucide-react';
import { cn } from './lib/utils';
import SharedNav from './components/SharedNav';
import SiteFooter from './components/SiteFooter';
import StackBar from './components/StackBar';
import { Blob, BLOB_RADII, Float, STARS_INK, useMouseParallax } from './components/Brand';
import { Sparkle, Van, Tools, ClimUnit, House, Faucet, Charger, Quote } from './components/Illustrations';
import { CALL_MIN } from './config';

// Titre de section : petit intitulé + grand titre en relief
const SectionTitle = ({ label, children, className = '', center = false }) => (
  <div className={cn(center && 'text-center', className)}>
    {label && <p className="label-cond mb-4">{label}</p>}
    <h2 className="chunky-sm text-[clamp(2rem,5vw,3.5rem)]">{children}</h2>
  </div>
);

const Hero = ({ onOpenContact }) => {
  const { mx, my, onMouseMove } = useMouseParallax();
  return (
    <section onMouseMove={onMouseMove} className="relative overflow-hidden min-h-[680px] md:min-h-[780px] pt-24 pb-20">
      {/* Formes cyan */}
      <Blob className="w-[42vw] max-w-[360px] aspect-[1.05] -right-[10vw] md:right-[6%] top-[8%]" radius={BLOB_RADII[1]} />
      <Blob className="w-[70vw] max-w-[620px] aspect-[1.6] -left-[20vw] md:-left-[6%] -bottom-[18%]" radius={BLOB_RADII[2]} />
      <Blob className="w-[40vw] max-w-[380px] aspect-[0.9] -right-[12vw] md:right-[-2%] bottom-[-8%]" radius={BLOB_RADII[3]} />

      {/* Illustrations */}
      <Float mx={mx} my={my} depth={24} delay={1} className="right-[2%] md:right-[12%] top-[14%] w-28 md:w-56">
        <ClimUnit className="w-full" />
      </Float>
      <Float mx={mx} my={my} depth={14} delay={0.6} rotate={4} className="hidden sm:block left-[4%] md:left-[6%] bottom-[4%] w-36 md:w-56">
        <Van className="w-full" />
      </Float>
      <Float mx={mx} my={my} depth={-26} delay={1.4} rotate={12} className="right-[6%] md:right-[16%] bottom-[10%] w-24 md:w-44">
        <Quote className="w-full" />
      </Float>
      <Sparkle className="absolute w-8 right-[24%] top-[14%]" />

      <div className="relative z-20 flex flex-col items-center text-center px-5 pt-24 md:pt-28">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="chunky text-[clamp(2.2rem,9vw,6.5rem)] !leading-[0.92]">
          Moins de paperasse,<br />plus de chantiers
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 max-w-lg text-ghost/85 text-lg md:text-xl leading-relaxed bg-void rounded-2xl px-4 py-1">
          Appels, RDV, devis, relances, factures : l'administratif des artisans du bâtiment, automatisé. En service en 2 semaines, forfaits dès 990€.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => onOpenContact('calendly')} className="btn-cyan"><Calendar className="w-4 h-4" /> Appel gratuit de {CALL_MIN} min</button>
          <button onClick={() => onOpenContact('leadmagnet')} className="btn-outline"><Download className="w-4 h-4" /> Guide gratuit</button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 bg-void rounded-full px-4 py-1">
          <Link to="/cas-client/groupe-rousso" className="font-cond uppercase tracking-[0.12em] text-sm text-cyan hover:underline underline-offset-4">
            52 000 $ générés pour Groupe Rousso en 2 mois →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const BENEFITS = [
  { icon: MessageSquare, title: 'Zéro appel manqué', desc: "Léa, votre standardiste IA, décroche au téléphone, un assistant répond sur WhatsApp : vos clients réservent leur créneau, même quand vous êtes sur un chantier." },
  { icon: Send, title: 'Devis, factures & relances', desc: "Vos devis partent le jour même, vos factures aussi, et les relances se font toutes seules. Un tableau de bord vous montre où en est chaque client." },
  { icon: Calendar, title: 'Un agenda qui se remplit', desc: "RDV confirmés, rappels la veille, entretiens annuels relancés : votre planning se remplit sans passer vos journées au téléphone." },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 px-5 md:px-12" id="expertise">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Ce que ça change" className="mb-12">Tout ce qui se répète, <span className="text-cyan">automatisé.</span></SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {BENEFITS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card-brut hoverable p-8 flex flex-col gap-4">
            <div className="w-14 h-14 bg-cyan text-void flex items-center justify-center" style={{ borderRadius: BLOB_RADII[1] }}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl text-ghost">{title}</h3>
            <p className="text-ghost/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CAS_CLIENTS = [
  {
    logo: '/groupe-rousso-logo.webp',
    name: 'Groupe Rousso',
    role: 'Nettoyage de conduits de ventilation — Montréal, Québec',
    desc: "Plateforme CRM sur mesure : devis PDF en français ou en anglais envoyés en quelques clics avec créneaux de RDV, relances automatiques, plans d'entretien et tableau de bord.",
    stats: [
      { value: '52 000 $', label: 'CAD de CA généré (2 mois)' },
      { value: '70', label: 'Devis convertis / mois' },
      { value: '85 %', label: 'Taux de conversion' },
    ],
    to: '/cas-client/groupe-rousso',
  },
  {
    logo: '/lesinstallateurs-logo.png',
    name: 'LesInstallateurs.fr',
    role: 'Installateur RGE — pompes à chaleur, climatisation, ventilation, bornes IRVE — Île-de-France & Oise',
    desc: 'Refonte site vitrine + formulaire connecté à Interfast. 13 600 impressions Google en 3 mois.',
    stats: [
      { value: '13 600', label: 'Impressions Google' },
      { value: '138', label: 'Clics organiques' },
      { value: '8,6', label: 'Position moyenne' },
    ],
    to: '/cas-client/lesinstallateurs',
  },
];

const CasesSection = () => (
  <section className="py-20 md:py-28 px-5 md:px-12" id="cas-clients">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Cas clients" className="mb-12">De vrais clients. <span className="text-cyan">De vrais chiffres.</span></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-8">
        {CAS_CLIENTS.map(c => (
          <div key={c.name} className="card-brut p-8 md:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-void border-2 border-cyan/40 p-2">
                <img src={c.logo} alt={c.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl text-ghost">{c.name}</h3>
                <p className="text-ghost/45 text-sm">{c.role}</p>
              </div>
            </div>
            <p className="text-ghost/65 leading-relaxed">{c.desc}</p>
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-cyan/20">
              {c.stats.map(st => (
                <div key={st.label}>
                  <p className="font-display text-lg md:text-2xl text-cyan leading-tight whitespace-nowrap">{st.value}</p>
                  <p className="font-cond text-[11px] text-ghost/50 uppercase tracking-widest mt-1">{st.label}</p>
                </div>
              ))}
            </div>
            <Link to={c.to} className="mt-auto inline-flex items-center gap-2 font-cond uppercase tracking-[0.12em] text-sm font-semibold text-cyan hover:underline underline-offset-4">
              Voir le cas complet <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const METIERS = [
  { title: 'CVC, climatisation & chauffage', desc: 'RDV, devis après visite, relances d\'entretien et contrats.', to: '/secteurs/automatisation-cvc-climatisation-chauffage', Ill: ClimUnit },
  { title: 'Plombiers & chauffagistes', desc: 'Urgences traitées 24h/24, devis le jour même, entretiens chaudière.', to: '/secteurs/automatisation-plombier-chauffagiste', Ill: Faucet },
  { title: 'Électriciens & IRVE', desc: 'Pré-chiffrage avec photos, devis relancés, suivi de chantier.', to: '/secteurs/automatisation-electricien', Ill: Charger },
  { title: 'Rénovation & second œuvre', desc: 'Demandes centralisées, devis relancés, clients informés.', to: '/secteurs/automatisation-renovation-batiment', Ill: House },
];

const MetiersSection = ({ onOpenContact }) => (
  <section id="metiers" className="py-20 md:py-28 px-5 md:px-12">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Par métier">Né sur le terrain <span className="text-cyan">du bâtiment.</span></SectionTitle>
      <p className="mt-6 text-ghost/65 max-w-2xl leading-relaxed">
        Les mêmes problèmes reviennent chez tous les artisans : appels manqués en intervention, devis envoyés trop tard, relances oubliées. On a des solutions prêtes pour chaque métier.
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METIERS.map(({ title, desc, to, Ill }, i) => (
          <Link key={to} to={to} className="card-brut group p-6 flex flex-col">
            <div className="relative h-36 mb-5 flex items-center justify-center">
              <div className="absolute inset-2 bg-cyan" style={{ borderRadius: BLOB_RADII[i % 4], backgroundImage: STARS_INK, backgroundSize: '140px 140px' }} />
              <Ill className="relative w-28 group-hover:rotate-[-4deg] transition-transform" />
            </div>
            <h3 className="text-lg leading-tight text-ghost">{title}</h3>
            <p className="mt-2 text-sm text-ghost/60 leading-relaxed flex-1">{desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 font-cond uppercase tracking-[0.12em] text-xs font-semibold text-cyan">
              Voir <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 card-brut p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg text-ghost">Un autre secteur ?</h3>
          <p className="text-ghost/60 text-sm mt-1">Immobilier, garages, commerces, services… Dès que vous gérez des demandes, des RDV ou des devis, on peut automatiser.</p>
        </div>
        <button onClick={() => onOpenContact('calendly')} className="btn-outline flex-shrink-0"><Calendar className="w-4 h-4" /> Parlons-en</button>
      </div>
    </div>
  </section>
);

const OffersSection = ({ onOpenContact }) => (
  <section id="offres" className="py-20 md:py-28 px-5 md:px-12">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Nos offres" className="mb-12">Deux façons de <span className="text-cyan">travailler ensemble.</span></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card-cyan !rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col" style={{ boxShadow: '8px 8px 0 rgba(0,209,255,.3)' }}>
          <Sparkle className="absolute w-6 right-8 top-8" fill="#0A0A14" />
          <p className="font-cond uppercase tracking-[0.2em] text-xs text-void/70">Clé en main</p>
          <h3 className="mt-3 text-3xl">On le fait pour vous</h3>
          <p className="mt-4 text-void/80 leading-relaxed">Pour les artisans, entreprises du bâtiment et PME. On installe et on connecte vos outils : WhatsApp, agenda, CRM, devis, relances. Vous n'avez rien à apprendre.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex justify-between gap-4 border-b border-void/20 pb-3"><span>Essentiel — WhatsApp + RDV + rappels</span><strong className="whitespace-nowrap">990€</strong></li>
            <li className="flex justify-between gap-4 border-b border-void/20 pb-3"><span>Pro — + CRM, devis auto, relances</span><strong className="whitespace-nowrap">2 200€</strong></li>
            <li className="flex justify-between gap-4"><span>Maintenance & évolutions</span><strong className="whitespace-nowrap">dès 149€/mois</strong></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => onOpenContact('calendly')} className="bg-void text-cyan px-6 py-3 rounded-full font-cond uppercase tracking-[0.1em] text-sm font-semibold inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> Appel gratuit</button>
            <a href="#metiers" className="border-2 border-void px-6 py-3 rounded-full font-cond uppercase tracking-[0.1em] text-sm font-semibold">Voir par métier</a>
          </div>
        </div>
        <div className="card-brut !rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col">
          <Tools className="absolute w-24 -right-2 -top-2 rotate-12" />
          <p className="font-cond uppercase tracking-[0.2em] text-xs text-ghost/60">Formation & installation</p>
          <h3 className="mt-3 text-3xl pr-16 text-ghost">Je vous forme, vous devenez autonome</h3>
          <p className="mt-4 text-ghost/65 leading-relaxed">Pour les entrepreneurs, freelances et équipes qui veulent maîtriser n8n et l'IA. Installation propre et sécurisée, puis formation sur vos propres cas.</p>
          <ul className="mt-6 space-y-3 text-sm text-ghost/80">
            <li className="flex justify-between gap-4 border-b border-ghost/10 pb-3"><span>Installation n8n self-hosted</span><strong className="whitespace-nowrap text-cyan">290€</strong></li>
            <li className="flex justify-between gap-4 border-b border-ghost/10 pb-3"><span>Installation OpenClaw sécurisée</span><strong className="whitespace-nowrap text-cyan">390€</strong></li>
            <li className="flex justify-between gap-4"><span>Formation n8n 1:1 (2 × 3h)</span><strong className="whitespace-nowrap text-cyan">590€</strong></li>
          </ul>
          <Link to="/formation" className="btn-cyan mt-8 self-start">Voir la formation <ArrowUpRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  </section>
);

const STEPS = [
  { num: '01', icon: Calendar, title: 'Appel & audit gratuit', desc: `${CALL_MIN} minutes en visio pour comprendre comment arrivent vos demandes, vos devis et vos relances, et repérer où vous perdez des clients.` },
  { num: '02', icon: Zap, title: 'Mise en place en 2 semaines', desc: "Je connecte vos outils existants et je construis vos automatisations. Votre équipe est formée en 1h, sans changer de logiciel." },
  { num: '03', icon: Activity, title: 'Suivi & résultats', desc: "30 jours de support inclus, puis maintenance en option. On mesure ce que ça vous rapporte et on ajuste." },
];

const ProtocolSection = () => (
  <section className="py-20 md:py-28 px-5 md:px-12" id="processus">
    <div className="max-w-6xl mx-auto">
      <SectionTitle label="Méthode" className="mb-12">Simple, <span className="text-cyan">en 3 étapes.</span></SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map(({ num, icon: Icon, title, desc }) => (
          <div key={num} className="card-brut p-8 flex flex-col gap-5 relative overflow-hidden">
            <span className="absolute -top-2 right-4 font-display text-7xl text-cyan/15 select-none">{num}</span>
            <div className="w-14 h-14 bg-cyan text-void flex items-center justify-center" style={{ borderRadius: BLOB_RADII[2] }}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-cond text-cyan text-sm font-semibold tracking-widest mb-2">ÉTAPE {num}</p>
              <h3 className="text-xl text-ghost mb-2">{title}</h3>
              <p className="text-ghost/60 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FOUNDER_BIO = "8 ans de terrain en CVC, de metteur au point à chargé de projet : je connais les journées des artisans : le téléphone qui sonne en intervention, les devis faits le soir, les relances qu'on n'a jamais le temps de faire. Aujourd'hui, j'automatise tout ça pour les artisans, les entreprises du bâtiment et les PME avec n8n, WhatsApp et l'IA. Et pour ceux qui veulent devenir autonomes, j'installe et je forme.";

const FounderSection = () => (
  <section className="py-20 md:py-28 px-5 md:px-12">
    <div className="max-w-5xl mx-auto card-brut !rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-14">
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-4 bg-cyan" style={{ borderRadius: BLOB_RADII[0], backgroundImage: STARS_INK, backgroundSize: '140px 140px' }} />
        <img src="/hugo-fonseca.jpeg" alt="Hugo Fonseca" className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-void" />
      </div>
      <div>
        <p className="label-cond mb-3">Fondateur</p>
        <h2 className="chunky-sm text-3xl md:text-5xl mb-2">Hugo Fonseca</h2>
        <p className="text-ghost/45 text-sm mb-6">Fondateur d'HGO Automation</p>
        <p className="text-ghost/70 text-base md:text-lg leading-relaxed">{FOUNDER_BIO}</p>
        <Link to="/a-propos" className="btn-outline mt-8">Mon parcours <ArrowUpRight className="w-4 h-4" /></Link>
      </div>
    </div>
  </section>
);

const HOME_FAQ = [
  { q: 'Combien ça coûte ?', a: "Prix fixes : 990€ pour un assistant WhatsApp avec prise de RDV et rappels, 2 200€ pour un système complet (WhatsApp, CRM, devis automatiques, relances). Maintenance en option dès 149 €/mois. Formation et installation dès 290€." },
  { q: 'Faut-il changer de logiciel ?', a: "Non. Je me branche sur vos outils actuels : agenda, logiciel de devis et facturation, CRM, Excel, WhatsApp. Ils se mettent simplement à travailler ensemble." },
  { q: "Je ne suis pas à l'aise avec l'informatique, c'est un problème ?", a: "Non. J'installe tout, je vous forme en 1h et je reste disponible 30 jours. Au quotidien, vous continuez à utiliser WhatsApp et vos mails comme d'habitude." },
  { q: 'En combien de temps est-ce opérationnel ?', a: "2 semaines en moyenne (10 jours ouvrés) entre l'appel de découverte et la mise en production, tests avec vos vraies données compris." },
  { q: 'Y a-t-il un engagement ?', a: "Non. Le projet est payé une fois. La maintenance mensuelle est optionnelle et sans engagement." },
  { q: "Je ne suis pas dans le bâtiment, vous pouvez m'aider ?", a: "Oui. Dès que vous gérez des demandes clients, des rendez-vous ou des devis (immobilier, garages, commerces, services…), les mêmes automatisations s'appliquent. Parlons-en lors d'un appel gratuit." },
];

function FaqRow({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('rounded-2xl border-2 px-6 py-5 transition-colors', open ? 'border-cyan bg-[#12121F]' : 'border-cyan/25 hover:border-cyan/60')}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} className="w-full flex items-start justify-between gap-4 text-left">
        <span className="font-cond uppercase tracking-wide text-lg font-semibold text-ghost">{item.q}</span>
        <span className={cn('w-7 h-7 flex-shrink-0 rounded-full bg-cyan text-void flex items-center justify-center text-lg leading-none transition-transform duration-300', open && 'rotate-45')}>+</span>
      </button>
      <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0')}>
        <p className="overflow-hidden text-ghost/65 leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

const FaqSection = () => (
  <section className="py-20 md:py-28 px-5 md:px-12" id="faq">
    <div className="max-w-3xl mx-auto">
      <SectionTitle label="Questions fréquentes" className="mb-10">Vos questions, <span className="text-cyan">mes réponses.</span></SectionTitle>
      <div className="space-y-3">
        {HOME_FAQ.map(item => <FaqRow key={item.q} item={item} />)}
      </div>
    </div>
  </section>
);

function App() {
  const { open: openContact } = useContact();

  // Liens /#metiers depuis les autres pages : scroller vers l'ancre une fois la page montée.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen text-ghost font-sans selection:bg-cyan/30 overflow-x-hidden">
      <Helmet>
        <title>Automatisation & IA pour artisans et PME | HGO Automation</title>
        <meta name="description" content="RDV WhatsApp 24h/24, devis envoyés le jour même, relances automatiques : l'automatisation n8n et IA pour artisans et PME. En service en 2 semaines." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="HGO Automation — Automatisation & IA pour artisans, bâtiment et PME" />
        <meta property="og:description" content="Appels, RDV, devis, relances et factures automatisés pour les artisans et PME. En service en 2 semaines, dès 990€. Formation n8n dès 290€." />
        <meta property="og:url" content="https://www.hgoautomation.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hgoautomation.fr/og-cover.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HGO Automation — Automatisation & IA pour artisans, bâtiment et PME" />
        <meta name="twitter:description" content="Appels, RDV, devis, relances et factures automatisés pour les artisans et PME. En service en 2 semaines." />
        <meta name="twitter:image" content="https://www.hgoautomation.fr/og-cover.png" />
        <link rel="canonical" href="https://www.hgoautomation.fr/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "HGO Automation",
          "description": "Automatisation et intelligence artificielle pour artisans, entreprises du bâtiment et PME : prise de RDV WhatsApp, devis et relances automatiques, CRM, agents IA. Formation et installation n8n / OpenClaw.",
          "url": "https://www.hgoautomation.fr",
          "logo": "https://www.hgoautomation.fr/hgo-logo.svg",
          "image": "https://www.hgoautomation.fr/og-cover.png",
          "telephone": "+33783945296",
          "email": "hugo@hgoautomation.fr",
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
          "sameAs": ["https://www.linkedin.com/in/hugo-fonseca-6b53603aa", "https://www.malt.fr/profile/hugofonseca1"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services d'automatisation & IA",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation CVC & climatisation", "url": "https://www.hgoautomation.fr/secteurs/automatisation-cvc-climatisation-chauffage" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation plombier & chauffagiste", "url": "https://www.hgoautomation.fr/secteurs/automatisation-plombier-chauffagiste" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation électricien", "url": "https://www.hgoautomation.fr/secteurs/automatisation-electricien" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation rénovation & bâtiment", "url": "https://www.hgoautomation.fr/secteurs/automatisation-renovation-batiment" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formation & installation n8n / OpenClaw", "url": "https://www.hgoautomation.fr/formation" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation n8n", "url": "https://www.hgoautomation.fr/services/automatisation-n8n" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agents IA", "url": "https://www.hgoautomation.fr/services/agent-ia" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation WhatsApp & Telegram", "url": "https://www.hgoautomation.fr/services/automatisation-whatsapp-telegram" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation Entreprise", "url": "https://www.hgoautomation.fr/services/automatisation-entreprise" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM sur mesure", "url": "https://www.hgoautomation.fr/services/automatisation-crm" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Applications & Dashboards", "url": "https://www.hgoautomation.fr/services/creation-applications-dashboards" } }
            ]
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": HOME_FAQ.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}</script>
      </Helmet>
      <SharedNav />
      <Hero onOpenContact={openContact} />
      <StackBar />
      <BenefitsSection />
      <MetiersSection onOpenContact={openContact} />
      <CasesSection />
      <OffersSection onOpenContact={openContact} />
      <ProtocolSection />
      <FounderSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}

export default App;
