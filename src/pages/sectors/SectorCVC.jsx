import ServicePage from '../../components/ServicePage.jsx';

const cvcData = {
  slug: 'automatisation-cvc-climatisation-chauffage',
  title: 'Automatisation pour CVC, Climatisation & Chauffage',
  metaTitle: 'Automatisation CVC & Climatisation — RDV et suivi client auto | HGO Automation',
  metaDescription: 'Automatisez la prise de RDV, les devis et le suivi client pour votre entreprise CVC, climatisation ou chauffage. HGO Automation, expert du secteur. Devis gratuit.',
  hero: {
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1400&auto=format&fit=crop',
    tag: 'Spécialiste CVC & Climatisation',
    h1: 'Gagnez 15h par semaine sur vos devis et RDV CVC',
    subtitle: 'HGO Automation est né du terrain CVC. On automatise ce qui ralentit votre croissance : appels manqués, devis en retard, relances oubliées et suivi client chaotique. Vous reprenez le contrôle de votre agenda et de vos ventes.',
    stats: [
      { value: '15h', label: 'économisées / semaine' },
      { value: '98%', label: "Taux d'ouverture WhatsApp" },
      { value: '5j', label: 'Délai de déploiement' },
    ],
  },
  problems: {
    h2: 'Les blocages des entreprises CVC aujourd\'hui',
    items: [
      { title: 'Appels manqués = RDV perdus', desc: 'Vos techniciens sont sur le terrain et personne ne décroche au bureau. Les prospects raccrochent et appellent le concurrent.' },
      { title: 'Devis qui trainent des semaines', desc: 'Vous prenez le temps de visiter, mais le devis part avec 5 à 10 jours de retard. Le prospect a déjà signé ailleurs.' },
      { title: 'Relances commerciales oubliées', desc: 'Sans système, les relances de devis, d\'entretien annuel et de contrat maintenance tombent dans l\'oubli.' },
      { title: 'Suivi client éparpillé', desc: 'WhatsApp perso, mails, carnet papier, Excel... Vous ne savez plus où en est chaque client.' },
    ],
  },
  features: {
    h2: 'Ce qu\'on automatise pour les pros du CVC',
    items: [
      { title: 'RDV 24h/24 par WhatsApp', desc: 'Le client choisit son créneau, reçoit une confirmation instantanée et un rappel J-1. Plus d\'appels manqués.' },
      { title: 'Devis automatiques après visite', desc: 'Dès que le technicien valide son rapport d\'intervention, le devis est généré et envoyé au client.' },
      { title: 'Relances entretien & contrats', desc: 'Relances automatiques pour entretiens annuels, renouvellements de contrat maintenance et avis clients.' },
      { title: 'CRM métier CVC', desc: 'Suivi par client, par adresse, par équipement. Historique des interventions, devis et factures centralisés.' },
      { title: 'Dispatch techniciens', desc: 'Affectation automatique des interventions selon la zone, les compétences et la disponibilité.' },
      { title: 'Rapports d\'intervention en 1 clic', desc: 'Le technicien remplit son rapport sur mobile, photos et signature client incluses.' },
    ],
  },
  steps: {
    h2: 'Déployé en 5 jours ouvrés',
    items: [
      { num: '01', title: 'Audit de vos flux CVC', desc: 'On analyse votre process actuel : prise de RDV, devis, intervention, relance, facturation.' },
      { num: '02', title: 'Configuration des outils', desc: 'Connexion WhatsApp Business, CRM, calendrier et formulaires selon votre activité.' },
      { num: '03', title: 'Construction des workflows', desc: 'On automatise les scénarios clés et on les teste avec vos vraies données.' },
      { num: '04', title: 'Formation & mise en production', desc: 'Votre équipe est formée. Le système est live avec 30 jours de support inclus.' },
    ],
  },
  usecases: {
    h2: 'Qui utilise nos automatisations CVC ?',
    items: [
      { sector: 'Installateurs CVC', example: 'Qualification automatique des demandes, prise de RDV en ligne et relance de devis après visite.' },
      { sector: 'Climatisation résidentielle', example: 'Chatbot WhatsApp pour devis express, rappels d\'entretien et suivi client saisonnier.' },
      { sector: 'Chauffage & plomberie', example: 'Dispatch techniciens, rapports d\'intervention mobile et relances contrats maintenance.' },
      { sector: 'Maintenance multitechnique', example: 'Planification automatique des contrats, relances annuelles et tableaux de bord KPI.' },
    ],
  },
  faq: {
    h2: 'Questions fréquentes',
    items: [
      { q: 'Est-ce que ça remplace ma secrétaire ?', a: 'Non. L\'automatisation supprime les tâches répétitives pour que votre secrétaire se concentre sur l\'accueil et les dossiers complexes. C\'est un levier de productivité, pas un remplacement.' },
      { q: 'Mes clients vont accepter WhatsApp ?', a: 'Oui. 98% des messages WhatsApp sont lus. Vos clients préfèrent confirmer un RDV en 2 clics plutôt que de passer 5 appels.' },
      { q: 'Faut-il changer de logiciel ?', a: 'Non. On s\'adapte à vos outils existants (agenda, CRM, comptabilité) et on les connecte entre eux.' },
      { q: 'Combien ça coûte ?', a: 'Un système CVC complet (RDV, devis, relances, CRM) démarre à 2 200€. Un quick win ciblé démarre à 990€.' },
    ],
  },
  pricing: {
    h2: 'Tarifs automatisation CVC',
    note: 'Devis personnalisé sous 24h. Appel découverte gratuit et sans engagement.',
    items: [
      { label: 'Essentiel', price: '990€', desc: 'Chatbot WhatsApp + prise de RDV + rappels. Idéal pour stopper les appels manqués.', highlight: false },
      { label: 'CVC Pro', price: '2 200€', desc: 'WhatsApp + CRM + devis auto + relances. Système clé en main déployé en 5 jours.', highlight: true },
      { label: 'Sur mesure', price: 'Devis', desc: 'Intégrations avancées, dispatch techniciens, dashboard direction. Devis sous 24h.', highlight: false },
    ],
  },
};

export default function SectorCVC() {
  return <ServicePage data={cvcData} />;
}
