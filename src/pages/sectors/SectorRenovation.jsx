import ServicePage from '../../components/ServicePage.jsx';
import { batimentSteps, batimentPricing, batimentFaqCommune } from './shared.js';

const renovationData = {
  slug: 'automatisation-renovation-batiment',
  path: '/secteurs/automatisation-renovation-batiment',
  title: 'Automatisation pour entreprises de rénovation & artisans du bâtiment',
  metaTitle: 'Automatisation rénovation & bâtiment | HGO Automation',
  metaDescription: 'Rénovation, menuiserie, peinture, couverture : devis envoyés le jour même, relances automatiques, suivi de chantier et avis clients. En 10 jours.',
  hero: {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
    tag: 'Rénovation & second œuvre',
    h1: 'Signez plus de chantiers sans passer vos soirées sur les devis',
    subtitle: 'Maçonnerie, menuiserie, peinture, couverture, rénovation globale : on automatise ce qui vous fait perdre des chantiers — demandes non traitées, devis en retard, relances oubliées, clients sans nouvelles.',
    stats: [
      { value: '24/7', label: 'Prise de demandes' },
      { value: 'J+0', label: 'Devis envoyé' },
      { value: '10j', label: 'Mise en service' },
    ],
  },
  problems: {
    h2: 'Ce qui fait perdre des chantiers aux entreprises du bâtiment',
    items: [
      { title: 'Demandes éparpillées', desc: 'Téléphone, mails, formulaire du site, plateformes, WhatsApp perso : des demandes se perdent chaque semaine.' },
      { title: 'Devis trop lents', desc: 'Le client a demandé 3 devis. Celui qui répond en premier, proprement, a une longueur d\'avance.' },
      { title: 'Relances inexistantes', desc: 'Un devis sur deux n\'est jamais relancé. Pourtant une simple relance à J+7 fait souvent signer.' },
      { title: 'Clients sans nouvelles du chantier', desc: 'Pas de point d\'étape, pas de photo : le client s\'inquiète, appelle, et la relation se dégrade.' },
    ],
  },
  features: {
    h2: 'Ce qu\'on automatise pour vous',
    items: [
      { title: 'Toutes les demandes au même endroit', desc: 'Site, mail, WhatsApp, plateformes : chaque demande arrive dans un tableau unique, qualifiée et datée.' },
      { title: 'Visite technique en 2 clics', desc: 'Le client réserve sa visite dans votre agenda, reçoit une confirmation et un rappel la veille.' },
      { title: 'Devis envoyés + relancés', desc: 'Le devis part le jour même, puis relances automatiques et personnalisées jusqu\'à la réponse.' },
      { title: 'Points d\'étape chantier', desc: 'Messages et photos d\'avancement envoyés au client aux étapes clés. Moins d\'appels, plus de confiance.' },
      { title: 'Acomptes & factures', desc: 'Rappels automatiques d\'acompte et de solde, connectés à votre logiciel de facturation.' },
      { title: 'Avis Google & parrainage', desc: 'Demande d\'avis en fin de chantier et relance des anciens clients pour de nouveaux projets.' },
    ],
  },
  steps: batimentSteps('rénovation'),
  usecases: {
    h2: 'Pour qui ?',
    items: [
      { sector: 'Rénovation globale', example: 'Centraliser les demandes, relancer les devis et informer les clients à chaque étape du chantier.' },
      { sector: 'Menuisiers & poseurs', example: 'Prise de RDV de métré, devis relancés automatiquement et suivi des commandes fournisseurs.' },
      { sector: 'Peintres & plaquistes', example: 'Devis rapides à partir de la visite, relances et demandes d\'avis automatiques.' },
      { sector: 'Couvreurs & façadiers', example: 'Qualification des demandes avec photos, planning des visites et suivi météo des chantiers.' },
    ],
  },
  pricing: batimentPricing('Bâtiment Pro'),
  faq: {
    h2: 'Questions fréquentes',
    items: [
      { q: 'Je reçois des demandes via des plateformes, c\'est compatible ?', a: 'Oui, dès que la plateforme envoie un email ou une notification, on récupère la demande automatiquement dans votre tableau de suivi.' },
      ...batimentFaqCommune,
    ],
  },
};

export default function SectorRenovation() {
  return <ServicePage data={renovationData} />;
}
