import ServicePage from '../../components/ServicePage.jsx';
import { batimentSteps, batimentPricing, batimentFaqCommune } from './shared.js';

const electriciteData = {
  slug: 'automatisation-electricien',
  path: '/secteurs/automatisation-electricien',
  title: 'Automatisation pour électriciens',
  metaTitle: 'Automatisation électricien : RDV, devis | HGO Automation',
  metaDescription: 'Électriciens et installateurs IRVE : RDV WhatsApp 24h/24, devis envoyés le jour même, relances et suivi client automatisés. En service en 10 jours.',
  hero: {
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop',
    tag: 'Électricité & IRVE',
    h1: 'Vos demandes de devis traitées pendant que vous êtes au tableau électrique',
    subtitle: 'Mise aux normes, rénovation, bornes de recharge, dépannage : on automatise la prise de RDV, l\'envoi des devis et les relances pour que vous passiez votre temps sur les chantiers, pas au téléphone.',
    stats: [
      { value: '24/7', label: 'Prise de RDV' },
      { value: '98%', label: "Taux d'ouverture WhatsApp" },
      { value: '10j', label: 'Mise en service' },
    ],
  },
  problems: {
    h2: 'Ce qui fait perdre des chantiers aux électriciens',
    items: [
      { title: 'Appels manqués en intervention', desc: 'Impossible de décrocher les mains dans un tableau. Le prospect appelle le suivant sur Google.' },
      { title: 'Devis qui partent trop tard', desc: 'Rénovation, borne IRVE, mise aux normes : les devis détaillés prennent du temps et partent avec des jours de retard.' },
      { title: 'Aucune relance des devis', desc: 'Un devis non relancé est souvent un devis perdu. Sans système, personne n\'a le temps de rappeler.' },
      { title: 'Infos client incomplètes', desc: 'Type de logement, puissance, photos du tableau : il faut rappeler 2 fois avant de pouvoir chiffrer.' },
    ],
  },
  features: {
    h2: 'Ce qu\'on automatise pour vous',
    items: [
      { title: 'Prise de RDV WhatsApp 24h/24', desc: 'Le client choisit son créneau, reçoit une confirmation et un rappel la veille.' },
      { title: 'Questionnaire de pré-chiffrage', desc: 'Photos du tableau, type de logement, besoin (borne, rénovation, dépannage) : vous avez tout avant de vous déplacer.' },
      { title: 'Devis envoyés le jour même', desc: 'Le devis part automatiquement au client avec une relance programmée à J+3 et J+7.' },
      { title: 'Suivi des chantiers', desc: 'Chaque client a sa fiche : devis, RDV, photos, factures. Toute l\'équipe voit où en est chaque dossier.' },
      { title: 'Dossiers d\'aides (IRVE)', desc: 'Checklist et collecte automatique des pièces pour les primes et aides liées aux bornes de recharge.' },
      { title: 'Avis Google après intervention', desc: 'Demande d\'avis automatique après chaque chantier terminé.' },
    ],
  },
  steps: batimentSteps('électricien'),
  usecases: {
    h2: 'Pour qui ?',
    items: [
      { sector: 'Électricien indépendant', example: 'Ne plus rater d\'appels en intervention et envoyer ses devis sans y passer ses soirées.' },
      { sector: 'Installateur bornes IRVE', example: 'Pré-qualification des demandes, collecte des photos et relances de devis automatiques.' },
      { sector: 'Rénovation électrique', example: 'Suivi des chantiers, planning des équipes et demandes d\'avis en fin de chantier.' },
      { sector: 'Dépannage', example: 'Tri des urgences et envoi immédiat au technicien disponible avec l\'adresse et le problème.' },
    ],
  },
  pricing: batimentPricing('Électricité Pro'),
  faq: {
    h2: 'Questions fréquentes',
    items: [
      { q: 'Ça marche avec mon logiciel de devis ?', a: 'Dans la grande majorité des cas, oui (Obat, Tolteck, Batappli, Interfast, Excel…). Si une connexion directe n\'existe pas, on passe par l\'email ou un export automatique.' },
      ...batimentFaqCommune,
    ],
  },
};

export default function SectorElectricite() {
  return <ServicePage data={electriciteData} />;
}
