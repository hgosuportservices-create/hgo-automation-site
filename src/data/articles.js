export const articles = [
  {
    slug: "make-vs-n8n-2026-lequel-choisir",
    title: "Make vs n8n en 2026 : lequel choisir pour votre entreprise ?",
    metaDescription: "Comparatif complet Make (Integromat) vs n8n en 2026 : prix, fonctionnalités, cas d'usage. Découvrez quel outil d'automatisation convient le mieux à votre PME.",
    category: "Comparatif",
    readTime: "8 min",
    date: "10 mars 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Make et n8n sont les deux outils d'automatisation les plus populaires du marché français. Mais lequel choisir pour votre entreprise en 2026 ? Comparatif complet, honnête et sans langue de bois.",
    content: [
      {
        type: "intro",
        text: "Vous cherchez à automatiser vos processus métier et vous hésitez entre Make (anciennement Integromat) et n8n ? Vous n'êtes pas seul. Ces deux plateformes dominent le marché de l'automatisation no-code en France, mais elles s'adressent à des profils très différents. Voici notre comparatif complet basé sur des projets réels déployés pour des PME françaises."
      },
      {
        type: "h2",
        text: "Make : la puissance visuelle sans écrire une ligne de code"
      },
      {
        type: "paragraph",
        text: "Make est une plateforme cloud avec une interface visuelle très soignée. Vous construisez vos automatisations (appelées \"scénarios\") en glissant-déposant des modules. L'outil propose plus de 1 500 intégrations natives : HubSpot, Notion, Slack, Gmail, Shopify, Airtable..."
      },
      {
        type: "list",
        title: "Avantages de Make :",
        items: [
          "Interface visuelle intuitive, idéale pour les non-développeurs",
          "1 500+ intégrations natives",
          "Plan gratuit généreux (1 000 opérations/mois)",
          "Gestion des erreurs et des retries intégrée",
          "Support multilingue (interface en français)"
        ]
      },
      {
        type: "list",
        title: "Inconvénients de Make :",
        items: [
          "Prix peut grimper vite selon le volume d'opérations",
          "Données hébergées aux USA (problématique RGPD pour certains secteurs)",
          "Moins de flexibilité pour les logiques complexes",
          "Dépendance à une plateforme SaaS (si Make ferme, vous perdez tout)"
        ]
      },
      {
        type: "h2",
        text: "n8n : l'automatisation open-source pour les entreprises qui veulent le contrôle total"
      },
      {
        type: "paragraph",
        text: "n8n est un outil d'automatisation open-source que vous pouvez héberger sur votre propre serveur. C'est la solution favorite des équipes techniques qui veulent une flexibilité maximale sans être enfermés dans un écosystème propriétaire."
      },
      {
        type: "list",
        title: "Avantages de n8n :",
        items: [
          "Open-source : hébergement sur vos propres serveurs (souveraineté des données)",
          "Prix fixe en self-hosted (pas de tarification à l'opération)",
          "400+ intégrations + possibilité de créer les siennes en JavaScript",
          "Logique conditionnelle et code custom très avancés",
          "Parfait pour les workflows à fort volume"
        ]
      },
      {
        type: "list",
        title: "Inconvénients de n8n :",
        items: [
          "Courbe d'apprentissage plus élevée",
          "Nécessite une infrastructure pour l'hébergement",
          "Interface moins polished que Make",
          "Support communautaire (pas de support téléphonique)"
        ]
      },
      {
        type: "h2",
        text: "Tableau comparatif Make vs n8n 2026"
      },
      {
        type: "table",
        headers: ["Critère", "Make", "n8n"],
        rows: [
          ["Prix départ", "9€/mois (10k ops)", "20€/mois (cloud) ou ~10€/mois self-hosted"],
          ["Hébergement", "Cloud uniquement (USA)", "Cloud ou self-hosted (EU possible)"],
          ["Intégrations", "1 500+", "400+ (extensible)"],
          ["Technique requis", "Aucun", "Basique à intermédiaire"],
          ["RGPD", "Complexe", "Simple en self-hosted"],
          ["Volume élevé", "Coûteux", "Économique"],
          ["Idéal pour", "PME non-tech", "Startups/ETI tech"]
        ]
      },
      {
        type: "h2",
        text: "Notre recommandation selon votre profil"
      },
      {
        type: "paragraph",
        text: "Choisissez Make si vous êtes une PME sans équipe technique, que vous avez besoin de résultats rapides et que votre volume d'automatisation reste raisonnable (moins de 100 000 opérations/mois)."
      },
      {
        type: "paragraph",
        text: "Choisissez n8n si vous avez un volume élevé, des contraintes RGPD strictes (secteur médical, juridique, financier), ou si vous souhaitez une solution pérenne sans dépendance à un éditeur tiers."
      },
      {
        type: "cta",
        text: "Vous ne savez pas encore lequel choisir ? Nos experts ont déployé les deux solutions pour des dizaines de clients. Planifiez un appel gratuit de 30 minutes pour qu'on analyse votre situation."
      }
    ]
  },
  {
    slug: "automatiser-prospection-commerciale-n8n",
    title: "Comment automatiser votre prospection commerciale avec n8n",
    metaDescription: "Guide pratique pour automatiser sa prospection commerciale avec n8n : scraping LinkedIn, enrichissement de données, envoi d'emails et CRM. Tutoriel 2026.",
    category: "Tutoriel",
    readTime: "12 min",
    date: "3 mars 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
    excerpt: "La prospection manuelle est morte. Voici comment construire une machine de prospection automatisée avec n8n qui identifie vos prospects, enrichit les données et envoie des messages personnalisés — sans spam.",
    content: [
      {
        type: "intro",
        text: "Un commercial passe en moyenne 40% de son temps sur des tâches répétitives : recherche de prospects, copier-coller de données entre outils, relances manuelles... En 2026, tout cela peut être automatisé. Voici comment mettre en place un système de prospection automatisé avec n8n, de la détection du prospect jusqu'à la qualification du lead."
      },
      {
        type: "h2",
        text: "L'architecture du workflow de prospection"
      },
      {
        type: "paragraph",
        text: "Le workflow que nous allons construire se compose de 4 étapes clés : identification des prospects, enrichissement des données de contact, scoring automatique, et déclenchement de la séquence de nurturing."
      },
      {
        type: "h2",
        text: "Étape 1 — Identifier vos prospects automatiquement"
      },
      {
        type: "paragraph",
        text: "La première brique consiste à alimenter votre pipeline en continu. Plusieurs sources sont exploitables avec n8n :"
      },
      {
        type: "list",
        title: "Sources de prospects automatisables :",
        items: [
          "LinkedIn Sales Navigator (via API ou scraping avec Apify)",
          "Google Maps (pour les commerces locaux)",
          "Annuaires sectoriels (Pages Jaunes, Kompass)",
          "Alertes Google sur vos mots-clés cibles",
          "Formulaires de votre site web",
          "Événements et salons professionnels (scraping de listes)"
        ]
      },
      {
        type: "h2",
        text: "Étape 2 — Enrichir les données avec des outils tiers"
      },
      {
        type: "paragraph",
        text: "Un nom et une entreprise ne suffisent pas. n8n peut appeler des APIs d'enrichissement pour récupérer l'email professionnel, le numéro de téléphone, le chiffre d'affaires de l'entreprise et le profil LinkedIn du décideur."
      },
      {
        type: "list",
        title: "Outils d'enrichissement compatibles n8n :",
        items: [
          "Hunter.io — trouver les emails professionnels",
          "Clearbit — enrichissement complet de profil",
          "Societeinfo — données SIRENE et financières (France)",
          "Dropcontact — spécialiste RGPD France",
          "Apollo.io — B2B intelligence"
        ]
      },
      {
        type: "h2",
        text: "Étape 3 — Scoring automatique des leads"
      },
      {
        type: "paragraph",
        text: "Tous les prospects ne se valent pas. n8n permet d'ajouter une logique de scoring : une entreprise de 50-200 salariés dans votre secteur cible avec un décideur identifié vaut 100 points, une TPE sans email validé vaut 20 points. Seuls les leads au-dessus de 70 points entrent dans la séquence active."
      },
      {
        type: "h2",
        text: "Étape 4 — La séquence de contact personnalisée"
      },
      {
        type: "paragraph",
        text: "C'est ici que la magie opère. n8n génère des messages personnalisés en injectant les données du prospect dans des templates — via GPT-4 pour une personnalisation avancée — et déclenche automatiquement la séquence :"
      },
      {
        type: "list",
        title: "Exemple de séquence à J+0, J+3, J+7 :",
        items: [
          "J+0 : Email de présentation personnalisé (nom, secteur, problème spécifique)",
          "J+3 : Message LinkedIn de connexion avec note personnalisée",
          "J+7 : Email de relance avec étude de cas pertinente",
          "J+14 : Appel de découverte programmé via Calendly si ouverture email"
        ]
      },
      {
        type: "h2",
        text: "Résultats observés chez nos clients"
      },
      {
        type: "paragraph",
        text: "Chez l'un de nos clients (cabinet de conseil RH, 15 salariés), ce workflow génère 45 rendez-vous qualifiés par mois pour un commercial, contre 8 en prospection manuelle. Le temps libéré est réalloué à la préparation des rendez-vous et à la relation client."
      },
      {
        type: "cta",
        text: "Vous voulez ce système opérationnel pour votre équipe commerciale ? HGO Automation déploie ce type de workflow en 5 à 10 jours ouvrés. Discutons de votre cas."
      }
    ]
  },
  {
    slug: "chatbot-whatsapp-pme-guide-complet-2026",
    title: "Chatbot WhatsApp pour PME : guide complet 2026",
    metaDescription: "Comment créer un chatbot WhatsApp pour votre PME en 2026 : outils, coût, cas d'usage. WhatsApp Business API, n8n, Make — tout ce qu'il faut savoir avant de se lancer.",
    category: "Guide",
    readTime: "10 min",
    date: "24 février 2026",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1400&auto=format&fit=crop",
    excerpt: "WhatsApp, c'est 2 milliards d'utilisateurs et un taux d'ouverture de 98%. Les PME qui automatisent leur service client sur WhatsApp réduisent de 60% le temps de réponse et augmentent leur satisfaction client. Voici comment faire.",
    content: [
      {
        type: "intro",
        text: "En France, 85% des adultes utilisent WhatsApp. Vos clients aussi. Et pourtant, la plupart des PME continuent de traiter les demandes WhatsApp manuellement, depuis un téléphone partagé. En 2026, c'est non seulement inefficace — c'est une opportunité manquée. Un chatbot WhatsApp bien configuré répond 24h/24, qualifie les prospects, prend des rendez-vous et transmet les cas complexes à un humain. Voici tout ce qu'il faut savoir."
      },
      {
        type: "h2",
        text: "Pourquoi WhatsApp plutôt que les autres canaux ?"
      },
      {
        type: "list",
        title: "Les chiffres qui parlent d'eux-mêmes :",
        items: [
          "Taux d'ouverture : 98% (vs 22% pour l'email)",
          "Taux de réponse : 45% (vs 6% pour l'email)",
          "Délai moyen de lecture : 3 minutes après réception",
          "2 milliards d'utilisateurs actifs dans le monde",
          "Canal préféré pour le SAV dans les secteurs immobilier, e-commerce et santé"
        ]
      },
      {
        type: "h2",
        text: "Les 3 options pour créer votre chatbot WhatsApp"
      },
      {
        type: "paragraph",
        text: "Il existe trois niveaux de solution, selon votre budget et vos besoins techniques :"
      },
      {
        type: "h2",
        text: "Option 1 — Les solutions SaaS clé en main (Tidio, Respond.io, Landbot)"
      },
      {
        type: "paragraph",
        text: "Ces plateformes proposent un éditeur visuel pour créer vos scénarios de conversation, l'accès à l'API WhatsApp Business inclus, et un tableau de bord pour gérer les conversations. Comptez entre 50€ et 200€/mois. Idéal pour démarrer rapidement, mais limité pour les intégrations métier spécifiques."
      },
      {
        type: "h2",
        text: "Option 2 — WhatsApp Business API + n8n ou Make"
      },
      {
        type: "paragraph",
        text: "C'est la solution que nous déployons chez la majorité de nos clients PME. L'API WhatsApp Business (via un Business Service Provider comme 360dialog ou Twilio) est connectée à n8n pour gérer la logique de conversation. Cette approche offre une flexibilité totale : connexion au CRM, prise de rendez-vous automatique, escalade vers un humain, génération de devis..."
      },
      {
        type: "list",
        title: "Cas d'usage typiques :",
        items: [
          "Réception et qualification automatique des demandes entrantes",
          "Prise de rendez-vous avec vérification des disponibilités en temps réel",
          "Suivi de commande ou de dossier",
          "FAQ automatisée (retourne 80% des questions sans intervention humaine)",
          "Rappel de paiement ou de rendez-vous",
          "Collecte d'avis clients post-prestation"
        ]
      },
      {
        type: "h2",
        text: "Option 3 — Chatbot IA conversationnel (GPT-4 + WhatsApp)"
      },
      {
        type: "paragraph",
        text: "Le niveau supérieur : un agent IA connecté à WhatsApp qui comprend le langage naturel, accède à votre base de connaissance produit et répond comme un vrai conseiller. Coût plus élevé mais expérience client premium. Recommandé pour les entreprises avec un volume élevé de demandes variées."
      },
      {
        type: "h2",
        text: "Combien ça coûte ?"
      },
      {
        type: "table",
        headers: ["Solution", "Coût mensuel", "Délai de mise en place"],
        rows: [
          ["SaaS clé en main", "50-200€/mois", "2-5 jours"],
          ["API + n8n/Make", "20-80€/mois (infra)", "5-10 jours"],
          ["Agent IA conversationnel", "100-300€/mois", "10-20 jours"]
        ]
      },
      {
        type: "h2",
        text: "Les erreurs à éviter absolument"
      },
      {
        type: "list",
        title: "Pièges courants :",
        items: [
          "Utiliser l'application WhatsApp Business standard pour les automatisations (contre les CGU, risque de bannissement)",
          "Créer des arbres de décision trop longs et frustrants",
          "Oublier l'escalade humaine (certaines situations nécessitent un vrai interlocuteur)",
          "Ne pas avoir de message de bienvenue clair indiquant qu'il s'agit d'un bot",
          "Envoyer des messages non sollicités (spam = bannissement immédiat de l'API)"
        ]
      },
      {
        type: "cta",
        text: "HGO Automation a déployé des chatbots WhatsApp pour des agences immobilières, des cabinets médicaux et des e-commerçants. Nous livrons un chatbot fonctionnel et connecté à votre CRM en 5 jours ouvrés. Parlons de votre projet."
      }
    ]
  }
];