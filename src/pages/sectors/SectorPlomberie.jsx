import ServicePage from '../../components/ServicePage.jsx';
import { batimentSteps, batimentPricing, batimentFaqCommune } from './shared.js';

const plomberieData = {
  slug: 'automatisation-plombier-chauffagiste',
  path: '/secteurs/automatisation-plombier-chauffagiste',
  title: 'Automatisation pour plombiers & chauffagistes',
  metaTitle: 'Automatisation plombier & chauffagiste | HGO Automation',
  metaDescription: 'Plombiers et chauffagistes : RDV WhatsApp 24h/24, devis envoyés le jour même, relances d\'entretien automatiques. En service en 10 jours.',
  hero: {
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1400&auto=format&fit=crop',
    tag: 'Plomberie & Chauffage',
    h1: 'Plus aucun dépannage perdu pendant que vous êtes sous un évier',
    subtitle: 'Les demandes arrivent pendant que vous êtes en intervention. On automatise la prise de RDV, l\'envoi des devis et les relances d\'entretien pour que chaque appel devienne un chantier.',
    stats: [
      { value: '24/7', label: 'Prise de RDV' },
      { value: '98%', label: "Taux d'ouverture WhatsApp" },
      { value: '10j', label: 'Mise en service' },
    ],
  },
  problems: {
    h2: 'Ce qui fait perdre des chantiers aux plombiers',
    items: [
      { title: 'Urgences sans réponse', desc: 'Fuite, panne de chaudière : le client appelle 3 plombiers et prend le premier qui répond. Si vous êtes en intervention, c\'est perdu.' },
      { title: 'Devis envoyés le soir… ou jamais', desc: 'Après une journée de chantier, les devis s\'accumulent. Chaque jour de retard fait baisser le taux de signature.' },
      { title: 'Entretiens annuels oubliés', desc: 'Les entretiens de chaudière et contrats de maintenance sont un revenu récurrent, mais sans rappel automatique ils passent à la trappe.' },
      { title: 'Planning géré au téléphone', desc: 'Confirmations, reports, clients absents : des heures perdues chaque semaine à jongler entre appels et SMS.' },
    ],
  },
  features: {
    h2: 'Ce qu\'on automatise pour vous',
    items: [
      { title: 'RDV & urgences par WhatsApp 24h/24', desc: 'Le client décrit son problème (photo incluse), choisit un créneau et reçoit une confirmation immédiate.' },
      { title: 'Tri automatique des demandes', desc: 'Urgence, devis, entretien : chaque demande est qualifiée et vous arrive avec les bonnes infos (adresse, équipement, photos).' },
      { title: 'Devis envoyés le jour même', desc: 'À partir de vos notes ou de votre modèle, le devis part au client et une relance est programmée automatiquement.' },
      { title: 'Rappels d\'entretien chaudière', desc: 'Chaque année, vos clients reçoivent un rappel et réservent directement leur créneau d\'entretien.' },
      { title: 'Rappels J-1 & anti-lapin', desc: 'SMS/WhatsApp de rappel la veille, avec possibilité de reporter en un clic. Moins de déplacements pour rien.' },
      { title: 'Avis Google après intervention', desc: 'Une demande d\'avis part automatiquement après chaque chantier terminé. Votre note Google grimpe toute seule.' },
    ],
  },
  steps: batimentSteps('plombier ou chauffagiste'),
  usecases: {
    h2: 'Pour qui ?',
    items: [
      { sector: 'Plombier indépendant', example: 'Ne plus rater d\'urgence pendant les interventions et envoyer ses devis sans y passer ses soirées.' },
      { sector: 'Chauffagiste', example: 'Remplir le planning d\'entretiens annuels automatiquement et relancer les contrats de maintenance.' },
      { sector: 'Entreprise de dépannage', example: 'Qualification des urgences, dispatch vers le technicien disponible et suivi client centralisé.' },
      { sector: 'Plomberie-sanitaire (rénovation)', example: 'Relance des devis de salle de bain, suivi des chantiers et demandes d\'avis en fin de chantier.' },
    ],
  },
  pricing: batimentPricing('Plomberie Pro'),
  faq: {
    h2: 'Questions fréquentes',
    items: [
      { q: 'Et pour les vraies urgences ?', a: 'Le système reconnaît les urgences (fuite, plus de chauffage…) et vous les transfère immédiatement par notification ou appel, avec l\'adresse et les photos.' },
      ...batimentFaqCommune,
    ],
  },
};

export default function SectorPlomberie() {
  return <ServicePage data={plomberieData} />;
}
