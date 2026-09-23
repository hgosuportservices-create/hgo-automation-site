import { CALL_MIN } from '../../config';

// Blocs communs aux pages métiers du bâtiment (mêmes offres, même méthode).

export const batimentSteps = (metier) => ({
  h2: 'En service en 5 à 10 jours ouvrés',
  items: [
    { num: '01', title: `Appel & audit gratuit (${CALL_MIN} min)`, desc: `On regarde ensemble comment arrivent vos demandes, vos devis et vos relances aujourd'hui, et où vous perdez des chantiers.` },
    { num: '02', title: 'Connexion de vos outils', desc: `WhatsApp Business, agenda, logiciel de devis/facturation, formulaire du site : on branche l'existant, sans vous faire changer de logiciel.` },
    { num: '03', title: 'Mise en place des automatisations', desc: `On construit les scénarios propres à votre métier de ${metier} et on les teste avec vos vraies demandes clients.` },
    { num: '04', title: 'Formation & mise en production', desc: 'Votre équipe est prise en main en 1h. Le système tourne, avec 30 jours de support inclus.' },
  ],
});

export const batimentPricing = (proLabel) => ({
  h2: 'Tarifs',
  note: 'Prix fixes, devis sous 24h. Appel découverte gratuit et sans engagement. Maintenance & évolutions en option : à partir de 149 €/mois.',
  items: [
    { label: 'Essentiel', price: '990€', desc: 'Chatbot WhatsApp + prise de RDV + rappels automatiques. Idéal pour ne plus perdre les appels manqués.', highlight: false },
    { label: proLabel, price: '2 200€', desc: 'WhatsApp + CRM + devis envoyés automatiquement + relances. Système clé en main, en service en 10 jours ouvrés.', highlight: true },
    { label: 'Sur mesure', price: 'Devis', desc: 'Planning des équipes, rapports de chantier, tableau de bord dirigeant, intégrations avancées. Devis sous 24h.', highlight: false },
  ],
});

export const batimentFaqCommune = [
  { q: 'Faut-il changer de logiciel ?', a: `Non. On se branche sur vos outils actuels (agenda, logiciel de devis et facturation, CRM, Excel) et on les fait travailler ensemble.` },
  { q: 'Je ne suis pas à l\'aise avec l\'informatique, c\'est un problème ?', a: `Non. On installe tout, on vous forme en 1h et on reste disponible 30 jours. Au quotidien, vous utilisez WhatsApp et vos mails comme d'habitude.` },
  { q: 'Combien ça coûte ?', a: 'Un quick win (WhatsApp + RDV + rappels) démarre à 990€. Un système complet (RDV, devis, relances, CRM) démarre à 2 200€. Maintenance en option à partir de 149 €/mois.' },
];
