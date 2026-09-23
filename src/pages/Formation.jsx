import ServicePage from '../components/ServicePage.jsx';
import { CALL_MIN } from '../config';

const formationData = {
  slug: 'formation-installation-n8n-openclaw',
  path: '/formation',
  showStack: true,
  ctaLabel: 'Réserver ma formation',
  title: 'Formation & installation n8n / OpenClaw',
  metaTitle: 'Formation n8n & installation OpenClaw | HGO Automation',
  metaDescription: 'Formation n8n individuelle en visio, installation n8n self-hosted et OpenClaw sécurisée, accompagnement mensuel. Prix fixes, dès 290€.',
  hero: {
    tag: 'Formation & installation',
    h1: 'Apprenez à automatiser vous-même, ou partez d\'une installation propre',
    subtitle: 'Vous voulez utiliser n8n ou OpenClaw sans y laisser vos week-ends ? J\'installe, je sécurise et je vous forme sur vos propres cas d\'usage, en visio. Prix fixes, pas de jargon.',
    stats: [
      { value: '290€', label: 'Installation dès' },
      { value: '1:1', label: 'Formation individuelle' },
      { value: '48h', label: 'Délai d\'installation' },
    ],
  },
  problems: {
    h2: 'Pourquoi on bloque en se lançant seul',
    items: [
      { title: 'Installation qui ne tient pas', desc: 'Serveur mal configuré, pas de HTTPS, pas de sauvegarde : au premier bug, tout est perdu.' },
      { title: 'Failles de sécurité', desc: 'Un agent IA comme OpenClaw a accès à vos fichiers, messageries et clés API. Mal installé, il expose tout.' },
      { title: 'Des heures de tutos pour rien', desc: 'Les vidéos montrent des cas génériques. Le vôtre ne marche pas, et personne pour vous débloquer.' },
      { title: 'Des workflows fragiles', desc: 'Sans bonnes pratiques (erreurs, relances, logs), vos automatisations cassent en silence.' },
    ],
  },
  features: {
    h2: 'Ce que je vous propose',
    items: [
      { title: 'Installation n8n self-hosted', desc: 'Serveur (VPS) configuré, nom de domaine, HTTPS, sauvegardes automatiques, mises à jour. Vos données restent chez vous.' },
      { title: 'Installation OpenClaw sécurisée', desc: 'Déploiement sur un serveur isolé, permissions limitées, clés API protégées, connexion à WhatsApp/Telegram/mail.' },
      { title: 'Formation n8n individuelle', desc: '2 séances de 3h en visio, construites sur VOS cas : vous repartez avec vos premiers workflows en production.' },
      { title: 'Formation équipe', desc: 'Session pour votre équipe : bases de n8n, IA appliquée à votre métier, bonnes pratiques et autonomie.' },
      { title: 'Accompagnement mensuel', desc: 'Un appel par semaine + support par message pour avancer sur vos projets et être débloqué rapidement.' },
      { title: 'Workflows prêts à l\'emploi', desc: 'Des modèles testés en conditions réelles (leads, devis, relances, WhatsApp) livrés avec la formation.' },
    ],
  },
  steps: {
    h2: 'Opérationnel en une semaine',
    items: [
      { num: '01', title: `Jour 1 · Appel gratuit (${CALL_MIN} min)`, desc: 'On fait le point sur votre niveau, vos outils et ce que vous voulez automatiser.' },
      { num: '02', title: 'Jour 2 · Installation & sécurisation', desc: 'Je prépare votre serveur et votre instance n8n / OpenClaw en 48h, avec accès et documentation.' },
      { num: '03', title: 'Jours 3 à 7 · Formation sur vos cas', desc: 'On construit ensemble vos premiers workflows, en partageant l\'écran. Vous faites, je guide.' },
      { num: '04', title: 'Jusqu\'au jour 21 · Suivi', desc: '15 jours de support par message inclus, puis accompagnement mensuel si vous le souhaitez.' },
    ],
  },
  usecases: {
    h2: 'Pour qui ?',
    items: [
      { sector: 'Entrepreneurs & indépendants', example: 'Automatiser votre prospection, vos relances et votre administratif sans dépendre d\'un prestataire.' },
      { sector: 'Équipes de PME', example: 'Rendre un ou deux collaborateurs autonomes sur n8n pour faire évoluer vos automatisations en interne.' },
      { sector: 'Freelances & agences', example: 'Monter en compétence rapidement sur n8n et l\'IA pour proposer ces services à vos propres clients.' },
      { sector: 'Curieux de l\'IA', example: 'Avoir votre propre assistant IA (OpenClaw) installé proprement, sans risquer vos données.' },
    ],
  },
  pricing: {
    h2: 'Tarifs',
    note: 'Prix fixes, paiement à la commande. Accompagnement mensuel : 290 €/mois (sans engagement). Formation équipe : sur devis.',
    items: [
      { label: 'Installation n8n', price: '290€', desc: 'VPS + domaine + HTTPS + sauvegardes, livrée en 48h avec documentation. Hors coût du serveur (environ 5 à 20 €/mois).', highlight: false },
      { label: 'Formation n8n', price: '590€', desc: '2 × 3h en visio sur vos cas réels + modèles de workflows + 15 jours de support. Installation n8n incluse.', highlight: true },
      { label: 'Installation OpenClaw', price: '390€', desc: 'Installation sécurisée sur serveur isolé, connexion à vos messageries, prise en main de 1h.', highlight: false },
    ],
  },
  faq: {
    h2: 'Questions fréquentes',
    items: [
      { q: 'Je débute complètement, c\'est adapté ?', a: 'Oui. La formation part de votre niveau et de vos vrais besoins. Il faut juste être à l\'aise avec un ordinateur.' },
      { q: 'Pourquoi n8n plutôt que Make ou Zapier ?', a: 'n8n peut être hébergé chez vous : pas de facture qui explose avec le volume, et vos données restent en France/Europe. C\'est l\'outil que j\'utilise pour tous mes clients.' },
      { q: 'OpenClaw, c\'est risqué ?', a: 'Un agent IA qui a accès à vos comptes doit être installé avec précaution. Je l\'installe sur un serveur isolé, avec des accès limités au strict nécessaire.' },
      { q: 'Et si je préfère que vous fassiez tout ?', a: 'C\'est possible : c\'est mon offre principale d\'automatisation clé en main pour les PME, à partir de 990€.' },
    ],
  },
};

export default function Formation() {
  return <ServicePage data={formationData} />;
}
