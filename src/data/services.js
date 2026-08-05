export const servicesData = {
  'automatisation-whatsapp-telegram': {
    slug: 'automatisation-whatsapp-telegram',
    title: 'Automatisation WhatsApp & Telegram',
    metaTitle: 'Automatisation WhatsApp & Telegram Entreprise — Chatbot & API | HGO Automation',
    metaDescription: 'Automatisez WhatsApp et Telegram pour votre entreprise : chatbot, prise de RDV, qualification de leads, relances clients 24h/24. HGO Automation. Devis gratuit.',
    hero: {
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1400&auto=format&fit=crop',
      tag: 'WhatsApp & Telegram',
      h1: 'Chaque message sans réponse est un client qui part ailleurs',
      subtitle: 'Vos prospects écrivent sur WhatsApp à 22h. Ils reçoivent une réponse, une qualification et un rendez-vous avant même que vous n\'ayez rouvert votre téléphone.',
      stats: [
        { value: '98%', label: 'des messages WhatsApp sont lus' },
        { value: '2 Mrd', label: "d'utilisateurs sur les deux canaux" },
        { value: '60%', label: 'de temps de réponse en moins' },
      ],
    },
    problems: {
      h2: 'Ce qui vous coûte des clients aujourd\'hui',
      items: [
        { title: 'Vos équipes répondent aux mêmes questions, encore et encore', desc: 'Chaque heure passée à répéter les mêmes réponses est une heure de moins sur ce qui fait vraiment avancer votre entreprise.' },
        { title: 'La nuit, le week-end, vous perdez des prospects', desc: 'Un message sans réponse en dehors de vos horaires part chez un concurrent. Il ne revient pas.' },
        { title: 'Vos conversations n\'existent nulle part ailleurs', desc: 'Sans lien avec votre CRM, chaque échange reste enfermé dans un téléphone — invisible pour le reste de l\'équipe.' },
        { title: 'Les relances que personne n\'a le temps de faire', desc: 'Un devis sans relance a peu de chances d\'être signé. Sans système, ces relances n\'arrivent tout simplement jamais.' },
      ],
    },
    features: {
      h2: 'Ce qui se passe automatiquement, dès le premier message',
      items: [
        { title: 'Une réponse immédiate, sur les deux canaux', desc: 'Le même assistant répond sur WhatsApp et Telegram, et qualifie chaque prospect avant de vous le transmettre.' },
        { title: 'Un rendez-vous pris sans appel téléphonique', desc: 'Le client choisit son créneau directement dans la conversation, connecté à votre agenda.' },
        { title: 'Des clients informés à chaque étape', desc: 'Statut de commande, de dossier ou de devis : les mises à jour partent seules, au bon moment.' },
        { title: 'Des relances qui partent sans qu\'on y pense', desc: 'Rappel de rendez-vous, relance de devis, notification — le suivi continue même quand vous êtes ailleurs.' },
        { title: 'Tout atterrit dans votre CRM', desc: 'Chaque conversation est enregistrée dans HubSpot, Notion ou l\'outil que vous utilisez déjà.' },
        { title: 'Un humain reprend la main quand il le faut', desc: 'Dès qu\'une situation sort du cadre, la conversation est transférée à votre équipe, avec tout l\'historique.' },
      ],
    },
    steps: {
      h2: 'Comment ça se met en place, en 5 jours',
      items: [
        { num: '01', title: 'On regarde comment vos clients vous écrivent aujourd\'hui', desc: 'Vos cas de figure les plus fréquents, vos clients types, ce qui prend le plus de temps à votre équipe.' },
        { num: '02', title: 'On branche vos numéros', desc: 'Votre numéro WhatsApp Business et votre bot Telegram sont connectés via les API officielles — rien ne change pour vos clients.' },
        { num: '03', title: 'On construit et on teste chaque scénario', desc: 'Chatbot, relances, connexion CRM : chaque parcours est testé avant sa mise en ligne.' },
        { num: '04', title: 'Votre équipe prend le relais', desc: 'Formation incluse, mise en production, puis 30 jours à vos côtés pour ajuster ce qui doit l\'être.' },
      ],
    },
    usecases: {
      h2: 'Ce que ça change, selon votre métier',
      items: [
        { sector: 'Immobilier', example: 'Un acheteur qualifie son projet et réserve une visite avant même d\'avoir parlé à un agent.' },
        { sector: 'E-commerce', example: 'Le client suit sa commande et reçoit une relance s\'il abandonne son panier — sans email jamais ouvert.' },
        { sector: 'Communautés & coaches', example: 'Les nouveaux membres sont accueillis et orientés sur Telegram, dès leur arrivée dans le groupe.' },
        { sector: 'Services B2B', example: 'Un devis part, puis une relance, puis une autre — sur le canal que le prospect a choisi lui-même.' },
      ],
    },
    faq: {
      h2: 'Questions fréquentes',
      items: [
        { q: 'WhatsApp ou Telegram : lequel choisir ?', a: 'Vous n\'avez pas à choisir. WhatsApp touche le grand public en France, Telegram est privilégié par les communautés et les profils tech. Le même système couvre les deux.' },
        { q: 'Faut-il changer de numéro ?', a: 'Non. Votre numéro WhatsApp actuel est simplement relié à l\'API Business. Pour Telegram, un bot officiel est créé et rattaché à votre compte.' },
        { q: 'Mes données clients sont-elles protégées ?', a: 'Oui. L\'hébergement est européen et les consentements sont configurés conformément au RGPD.' },
        { q: 'Ça se connecte à ce qu\'on utilise déjà ?', a: 'Si votre outil dispose d\'une API, oui. HubSpot, Salesforce, Airtable, Notion et Google Sheets sont déjà pris en charge.' },
      ],
    },
    pricing: {
      h2: 'Trois façons de démarrer',
      note: 'Devis personnalisé sous 24h. Un appel de 30 minutes suffit pour savoir ce qui est possible chez vous.',
      items: [
        { label: 'Essentiel', price: '990€', desc: 'Un bot qui répond aux questions fréquentes et prend des rendez-vous. Un seul canal, en ligne en 3 jours.', highlight: false },
        { label: 'Pro', price: '2 200€', desc: 'WhatsApp et Telegram réunis. Connecté à votre CRM, avec relances automatiques et reprise humaine si besoin.', highlight: true },
        { label: 'Sur mesure', price: 'Devis', desc: 'Pour les flux plus complexes ou les volumes élevés. On regarde ensemble ce qui est possible, sans engagement.', highlight: false },
      ],
    },
  },

  'agent-ia': {
    slug: 'agent-ia',
    title: 'Agents IA pour Entreprise',
    metaTitle: 'Agent IA Entreprise — Créer & Déployer un Agent Intelligent | HGO Automation',
    metaDescription: 'Déployez un agent IA sur mesure pour votre entreprise : support client, prospection, analyse de données, RH. HGO Automation crée votre agent IA en moins de 2 semaines.',
    hero: {
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400&auto=format&fit=crop',
      tag: 'Agents IA',
      h1: 'Un agent qui répond à vos clients pendant que votre équipe dort',
      subtitle: 'Il comprend une demande écrite normalement, va chercher l\'information dans vos outils, et agit — sans que vous ayez à intervenir.',
      stats: [
        { value: '80%', label: 'des demandes traitées sans humain' },
        { value: '24/7', label: 'week-ends et jours fériés compris' },
        { value: '2 sem.', label: 'avant la mise en service' },
      ],
    },
    problems: {
      h2: 'Ce que vos équipes font, au lieu de vendre ou de produire',
      items: [
        { title: 'Vos meilleurs éléments répondent aux mêmes questions', desc: 'Chaque question déjà traitée hier reprend du temps à quelqu\'un qui pourrait faire autre chose aujourd\'hui.' },
        { title: 'Un prospect sans réponse rapide part voir ailleurs', desc: 'Passé les premières minutes, l\'intérêt retombe — et le concurrent qui répond en premier gagne souvent le client.' },
        { title: 'Le support sature toujours au pire moment', desc: 'Les pics d\'appels et de messages mobilisent toute l\'équipe en même temps, sans prévenir.' },
        { title: 'Des données que personne n\'a le temps d\'analyser', desc: 'Rapports, emails, documents s\'accumulent. Ce qu\'ils pourraient révéler reste invisible.' },
      ],
    },
    features: {
      h2: 'Ce que chaque agent prend en charge',
      items: [
        { title: 'Agent commercial', desc: 'Répond aux demandes de devis, pose les bonnes questions, planifie l\'appel et remplit le CRM avant que votre commercial n\'ait vu le message.' },
        { title: 'Agent support client', desc: 'Répond aux questions récurrentes, retrouve l\'information dans votre base de connaissance, et transfère uniquement les cas qui le méritent.' },
        { title: 'Agent RH & onboarding', desc: 'Répond aux questions administratives, envoie les documents à signer, suit chaque nouvelle recrue sans relance oubliée.' },
        { title: 'Agent data & reporting', desc: 'Posez une question en langage courant, obtenez un rapport à jour — plus besoin d\'attendre le prochain export.' },
        { title: 'Agent email', desc: 'Trie, classe et prépare une réponse pour chaque email. Vous validez en un clic, ou le laissez répondre seul selon vos règles.' },
        { title: 'Agent voix', desc: 'Décroche, comprend la demande, transfère à la bonne personne — même pendant que votre équipe est en réunion.' },
      ],
    },
    steps: {
      h2: 'Comment un agent devient opérationnel',
      items: [
        { num: '01', title: 'On définit ce qu\'il doit vraiment faire', desc: 'Les cas d\'usage prioritaires, les données à mobiliser, ce qu\'il ne doit jamais faire seul.' },
        { num: '02', title: 'On l\'entraîne sur votre réalité', desc: 'Vos documents, vos FAQ, vos procédures — pas un modèle générique qui invente des réponses.' },
        { num: '03', title: 'On le connecte et on le teste', desc: 'CRM, email, Slack, WhatsApp : chaque intégration est testée sur des cas réels avant la mise en ligne.' },
        { num: '04', title: 'Il travaille, vous surveillez', desc: 'Mise en production avec tableau de bord. Ajustements pendant 30 jours pour qu\'il soit à la hauteur.' },
      ],
    },
    usecases: {
      h2: 'Ce que ça donne, concrètement',
      items: [
        { sector: 'Cabinet de conseil', example: 'Un agent répond aux demandes de devis et qualifie les prospects avant même le premier appel.' },
        { sector: 'E-commerce', example: 'La majorité des demandes SAV trouvent une réponse sans faire intervenir un conseiller.' },
        { sector: 'RH & recrutement', example: 'Les candidatures sont pré-qualifiées et les entretiens se planifient tout seuls.' },
        { sector: 'Immobilier', example: 'Un agent répond aux questions sur les biens, planifie les visites, relance les prospects qui hésitent.' },
      ],
    },
    faq: {
      h2: 'Questions fréquentes',
      items: [
        { q: 'Un agent IA peut-il vraiment remplacer un humain ?', a: 'Non, et ce n\'est pas l\'objectif. Il absorbe ce qui est répétitif et prévisible. Dès qu\'un cas sort du cadre, il transfère à quelqu\'un de votre équipe, avec le contexte complet.' },
        { q: 'Mes données sont-elles en sécurité ?', a: 'Elles peuvent être hébergées en Europe, et ne servent jamais à entraîner un modèle public.' },
        { q: 'Quelle différence avec ChatGPT ?', a: 'ChatGPT ne connaît rien de votre entreprise. Votre agent est formé sur vos données, connecté à vos outils, et agit dans les limites que vous fixez.' },
        { q: 'Combien ça coûte ?', a: 'Entre 1 500€ et 4 000€ pour la mise en place, puis 100 à 300€ par mois selon le volume traité.' },
      ],
    },
    pricing: {
      h2: 'Trois niveaux, selon votre besoin',
      note: 'Un agent standard est en service en moins de deux semaines. Hébergement et maintenance inclus le premier mois.',
      items: [
        { label: 'Agent Simple', price: '1 500€', desc: "Pour un seul cas d'usage — FAQ, support ou prospection. Base de connaissances incluse.", highlight: false },
        { label: 'Agent Pro', price: '3 500€', desc: 'Sur plusieurs canaux à la fois — email, WhatsApp, web. Connecté à votre CRM, supervision et reprise humaine incluses.', highlight: true },
        { label: 'Agent Complexe', price: 'Sur devis', desc: 'Plusieurs agents qui travaillent ensemble, logique avancée, intégrations sur mesure.', highlight: false },
      ],
    },
  },

  'automatisation-n8n': {
    slug: 'automatisation-n8n',
    title: 'Automatisation n8n',
    metaTitle: 'Expert n8n France — Consultant & Développeur n8n | HGO Automation',
    metaDescription: 'Expert n8n certifié : déployez vos workflows d\'automatisation avec n8n. Hébergement self-hosted, connexion API, CRM, Google Sheets. Devis gratuit sous 24h.',
    hero: {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',
      tag: 'Expert n8n',
      h1: 'Vos outils arrêtent de se copier-coller à la main',
      subtitle: 'n8n connecte vos logiciels entre eux et automatise ce qui prend du temps aujourd\'hui. On l\'installe, on l\'héberge, on le maintient — vous n\'avez rien à gérer.',
      stats: [
        { value: '400+', label: 'outils déjà compatibles avec n8n' },
        { value: '5j', label: 'avant la première automatisation active' },
        { value: '100%', label: 'des données restent chez vous' },
      ],
    },
    problems: {
      h2: 'Pourquoi vos outils ne se parlent toujours pas',
      items: [
        { title: 'Vos équipes copient-collent, encore aujourd\'hui', desc: 'Entre le CRM, les feuilles de calcul et l\'email, la même information est ressaisie à la main plusieurs fois par jour.' },
        { title: 'Les licences SaaS grimpent avec le volume', desc: 'Zapier et Make facturent à l\'opération. Plus vous automatisez, plus la facture grossit.' },
        { title: 'Vos données transitent par des serveurs à l\'étranger', desc: 'Contraintes RGPD ou de confidentialité ? La plupart des outils no-code ne vous laissent pas choisir l\'hébergement.' },
        { title: 'Les outils grand public plafonnent vite', desc: 'Dès que la logique se complique, les automatisations no-code grand public ne suivent plus.' },
      ],
    },
    features: {
      h2: 'Ce que n8n fait tourner, une fois configuré',
      items: [
        { title: 'Hébergement sur votre propre serveur', desc: 'Installation en Europe, sur un serveur que vous contrôlez. Vos données ne sortent jamais de chez vous.' },
        { title: 'Des workflows pensés pour vos process', desc: 'Pas de modèle générique — chaque automatisation est construite pour correspondre à ce que vous faites déjà.' },
        { title: 'Une connexion même sans intégration native', desc: 'Votre logiciel n\'a pas de connecteur standard ? On code la connexion sur mesure.' },
        { title: 'Une migration sans interruption', desc: 'Vos automatisations Zapier ou Make sont reproduites dans n8n sans que rien ne s\'arrête entre-temps.' },
        { title: 'Votre équipe reprend la main', desc: 'Une formation de 4h suffit pour que vous puissiez créer et modifier vos propres workflows ensuite.' },
        { title: 'Une surveillance continue', desc: 'Chaque workflow est surveillé. En cas d\'erreur, vous êtes alerté avant que ça ne devienne un problème.' },
      ],
    },
    steps: {
      h2: 'Comment ça se met en place',
      items: [
        { num: '01', title: 'On cartographie ce qui peut être automatisé', desc: 'Chaque processus manuel est identifié et classé selon le temps qu\'il vous fait gagner.' },
        { num: '02', title: 'L\'environnement est configuré', desc: 'Installation, certificat SSL, sauvegardes automatiques, surveillance — avant le premier workflow.' },
        { num: '03', title: 'Les automatisations sont construites et testées', desc: 'Chaque workflow est validé sur vos données réelles avant d\'être activé.' },
        { num: '04', title: 'Mise en production, puis formation', desc: 'Déploiement progressif, documentation complète, votre équipe formée pour la suite.' },
      ],
    },
    usecases: {
      h2: 'Ce qu\'on automatise le plus souvent',
      items: [
        { sector: 'Prospection commerciale', example: 'Un lead est trouvé, enrichi, noté, ajouté au CRM et intégré à une séquence d\'emails — sans qu\'on y touche.' },
        { sector: 'Reporting automatique', example: 'Les données de plusieurs outils se rassemblent seules dans un rapport envoyé chaque lundi.' },
        { sector: 'Synchronisation outils', example: 'Sheets, HubSpot, Notion et Slack restent à jour les uns par rapport aux autres, en continu.' },
        { sector: 'Traitement de documents', example: 'Une facture PDF arrive, les données en sont extraites et saisies automatiquement dans la compta.' },
      ],
    },
    faq: {
      h2: 'Questions fréquentes sur n8n',
      items: [
        { q: 'n8n est-il vraiment gratuit ?', a: 'n8n est open-source et gratuit en auto-hébergé. Vous payez seulement le serveur (environ 10 à 20€ par mois) et notre prestation de configuration.' },
        { q: 'Quelle différence avec Make ?', a: 'n8n s\'installe sur votre serveur — données chez vous, coût fixe. Make est cloud uniquement, facturé à l\'opération. n8n demande plus de configuration au départ, mais reste économique quel que soit le volume.' },
        { q: 'Faut-il des compétences techniques ?', a: 'Pas pour l\'utiliser au quotidien. Pour le configurer et le maintenir, oui — c\'est ce qu\'on prend en charge.' },
        { q: 'Que se passe-t-il en cas de panne ?', a: 'La maintenance inclut une surveillance continue avec alertes, et un engagement de remise en service sous 4h pour les workflows critiques.' },
      ],
    },
    pricing: {
      h2: 'Trois façons de commencer avec n8n',
      note: 'Hébergement sur vos serveurs. Aucun coût de licence SaaS. Données chez vous.',
      items: [
        { label: 'Installation', price: '490€', desc: 'n8n installé sur votre serveur. SSL, sauvegardes automatiques, surveillance. Livré en 48h.', highlight: false },
        { label: 'Workflows Pro', price: '1 800€', desc: 'L\'installation, jusqu\'à 5 workflows sur mesure, et une formation de 4h pour votre équipe.', highlight: true },
        { label: 'Maintenance', price: '150€/mois', desc: 'Surveillance continue, corrections incluses, mises à jour, nouveaux workflows en priorité.', highlight: false },
      ],
    },
  },

  'automatisation-entreprise': {
    slug: 'automatisation-entreprise',
    title: 'Automatisation d\'Entreprise',
    metaTitle: 'Automatisation Processus Entreprise — Consultant & Agence | HGO Automation',
    metaDescription: 'Automatisez vos processus métier avec HGO Automation : CRM, facturation, prospection, reporting, onboarding. Consultant automatisation entreprise en France. Devis gratuit.',
    hero: {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
      tag: 'Automatisation Métier',
      h1: 'Faites grandir votre activité sans faire grandir vos coûts fixes',
      subtitle: 'On identifie les tâches qui vous coûtent le plus de temps, on les automatise, et votre équipe se concentre sur ce qu\'elle fait de mieux.',
      stats: [
        { value: '40%', label: 'du temps passé sur des tâches répétitives' },
        { value: '2 sem.', label: 'avant le premier workflow en production' },
        { value: '30j', label: 'de support inclus après mise en route' },
      ],
    },
    problems: {
      h2: 'Ce qui vous empêche de grandir sans embaucher',
      items: [
        { title: 'Vous ne pouvez pas doubler sans doubler l\'équipe', desc: 'Sauf si les tâches manuelles qui limitent votre capacité sont automatisées en premier.' },
        { title: 'Chaque erreur manuelle a un coût', desc: 'Une saisie oubliée, une relance manquée, une donnée fausse — ça s\'additionne vite.' },
        { title: 'Vos outils fonctionnent chacun de leur côté', desc: 'CRM, comptabilité, email, agenda : sans connexion entre eux, l\'information reste en silos.' },
        { title: 'Le reporting mange le temps de vos managers', desc: 'Des heures passées à consolider à la main des données qui pourraient s\'assembler seules.' },
      ],
    },
    features: {
      h2: 'Ce qu\'on automatise en premier, la plupart du temps',
      items: [
        { title: 'CRM & pipeline commercial', desc: 'Chaque lead est qualifié, relancé et positionné dans le bon stade du pipeline, sans qu\'on y pense.' },
        { title: 'Facturation & devis', desc: 'Les devis partent seuls, les impayés sont relancés automatiquement, la comptabilité reste synchronisée.' },
        { title: 'Onboarding client & employé', desc: 'Documents, signatures, création de comptes — chaque étape se déclenche sans suivi manuel.' },
        { title: 'Reporting & analytics', desc: 'Vos tableaux de bord se mettent à jour seuls. Une alerte part dès qu\'un chiffre sort de la norme.' },
        { title: 'Communication interne', desc: 'Notifications, briefings, résumés de réunion — l\'information circule sans que personne n\'ait à la retaper.' },
        { title: 'Gestion des données', desc: 'Vos fiches clients se synchronisent, se nettoient et s\'enrichissent automatiquement entre vos outils.' },
      ],
    },
    steps: {
      h2: 'Comment on démarre',
      items: [
        { num: '01', title: 'Un diagnostic gratuit de 30 minutes', desc: 'On identifie ensemble les automatisations qui vous feraient gagner le plus de temps.' },
        { num: '02', title: 'On conçoit l\'architecture', desc: 'On choisit les bons outils selon vos besoins, et on valide avec vous avant de construire quoi que ce soit.' },
        { num: '03', title: 'On construit et on teste', desc: 'Chaque workflow est testé sur vos données réelles, pas sur des cas fictifs.' },
        { num: '04', title: 'Déploiement, puis suivi', desc: 'Mise en production, formation de votre équipe, 30 jours de support inclus.' },
      ],
    },
    usecases: {
      h2: 'Ce que ça change selon votre activité',
      items: [
        { sector: 'Services B2B', example: 'De la génération du lead à la signature, tout le cycle de vente avance sans intervention manuelle.' },
        { sector: 'Commerce & distribution', example: 'Commandes, stocks, relances clients et reporting fournisseurs suivent leur cours sans supervision constante.' },
        { sector: 'Professions libérales', example: 'Rendez-vous, rappels et facturation s\'enchaînent automatiquement, dossier par dossier.' },
        { sector: 'Startups en croissance', example: 'L\'activité grandit sans que l\'équipe opérationnelle ait besoin de grandir au même rythme.' },
      ],
    },
    faq: {
      h2: 'Questions fréquentes',
      items: [
        { q: 'Par quel processus commencer ?', a: 'Celui qui vous fait perdre le plus de temps ou qui génère le plus d\'erreurs. Un diagnostic gratuit de 30 minutes suffit à l\'identifier.' },
        { q: 'Faut-il changer nos outils actuels ?', a: 'Non. On s\'adapte à ce que vous utilisez déjà. Notre rôle est de les connecter, pas de vous imposer un nouvel écosystème.' },
        { q: 'Combien de temps avant de voir un résultat ?', a: 'La plupart de nos clients voient un résultat concret dès le premier mois. Une automatisation qui fait gagner 10h par semaine à un salarié représente, à elle seule, plusieurs milliers d\'euros de valeur par an.' },
        { q: 'Et si notre process évolue ?', a: 'Les workflows sont conçus pour évoluer. Les ajustements simples sont inclus dans la maintenance ; les évolutions plus importantes font l\'objet d\'un nouveau devis.' },
      ],
    },
    pricing: {
      h2: 'Trois façons de démarrer',
      note: 'Diagnostic gratuit de 30 minutes pour identifier vos automatisations prioritaires.',
      items: [
        { label: 'Quick Win', price: '800€', desc: 'Un processus automatisé, clé en main. Déployé en moins d\'une semaine, résultat visible tout de suite.', highlight: false },
        { label: 'Pack Croissance', price: '3 500€', desc: 'De 3 à 5 processus connectés entre eux. Architecture complète, formation de l\'équipe incluse.', highlight: true },
        { label: 'Partenariat', price: 'Sur devis', desc: 'Un accompagnement dans la durée, pour automatiser en continu à mesure que l\'activité évolue.', highlight: false },
      ],
    },
  },

  'automatisation-crm': {
    slug: 'automatisation-crm',
    title: 'Automatisation & Création CRM',
    metaTitle: 'Automatisation & Création CRM sur Mesure — HubSpot, Notion, Airtable | HGO Automation',
    metaDescription: 'Créez ou automatisez votre CRM sur mesure avec HGO Automation. Pipeline commercial, relances automatiques, reporting. CRM personnalisé pour PME françaises. Devis gratuit.',
    hero: {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
      tag: 'CRM sur mesure',
      h1: 'Un CRM que votre équipe utilise vraiment, pas un qu\'elle contourne',
      subtitle: 'Un CRM générique ne colle jamais parfaitement à votre façon de vendre. On construit le vôtre, autour de votre process — suivi, relances et reporting inclus.',
      stats: [
        { value: '40%', label: 'de temps commercial récupéré' },
        { value: '10j', label: 'avant que le CRM soit en production' },
        { value: '100%', label: 'construit autour de votre process' },
      ],
    },
    problems: {
      h2: 'Pourquoi votre CRM actuel ne fonctionne pas',
      items: [
        { title: 'Un CRM générique, un process qui ne l\'est pas', desc: 'HubSpot, Salesforce ou Pipedrive imposent leur logique. Vous finissez par contourner l\'outil plutôt que de vous en servir.' },
        { title: 'Votre équipe met à jour le CRM plus qu\'elle ne vend', desc: 'Les données sont toujours en retard, parce que la saisie prend plus de temps que ce qu\'elle rapporte.' },
        { title: 'Personne ne sait vraiment où en est le pipeline', desc: 'Quels prospects relancer, quels deals sont en train de vous échapper — l\'information existe, mais elle est éparpillée.' },
        { title: 'Vos outils ne parlent pas au CRM', desc: 'Email, téléphone, WhatsApp, agenda — rien ne remonte automatiquement.' },
      ],
    },
    features: {
      h2: 'Ce que contient votre CRM, une fois construit',
      items: [
        { title: 'Un CRM pensé pour votre process', desc: 'Construit dans Notion, Airtable ou HubSpot — pas adapté après coup, pensé pour votre façon de vendre dès le départ.' },
        { title: 'Un pipeline qui se met à jour seul', desc: 'Chaque lead avance dans le bon stade selon son comportement, sans que personne n\'ait à le déplacer.' },
        { title: 'Des relances qui partent au bon moment', desc: 'Email, WhatsApp ou SMS — la relance suit le rythme du prospect, pas un calendrier fixe.' },
        { title: 'Un chiffre d\'affaires visible en temps réel', desc: 'Chiffre d\'affaires, taux de conversion, deals gagnés ou perdus : un tableau de bord toujours à jour.' },
        { title: 'Toutes vos conversations au même endroit', desc: 'Email, WhatsApp, Telegram, formulaires web — tout remonte automatiquement dans le CRM.' },
        { title: 'Vos données actuelles, sans rien perdre', desc: 'Contacts, historiques, deals en cours — la migration se fait sans repartir de zéro.' },
      ],
    },
    steps: {
      h2: 'Comment votre CRM prend forme',
      items: [
        { num: '01', title: 'On regarde comment vous vendez aujourd\'hui', desc: 'Votre cycle de vente, ses étapes, ce qui coince — avant de dessiner quoi que ce soit.' },
        { num: '02', title: 'On conçoit la structure', desc: 'La base de données, les vues, les automatisations — pensées pour l\'équipe qui va s\'en servir tous les jours.' },
        { num: '03', title: 'On construit et on connecte', desc: 'Le CRM prend forme, se connecte à vos outils existants, et se teste sur des cas réels.' },
        { num: '04', title: 'Formation, puis mise en route', desc: 'Votre équipe est formée en 2h. Vos données sont migrées. Le CRM est opérationnel.' },
      ],
    },
    usecases: {
      h2: 'Ce que ça donne, selon votre métier',
      items: [
        { sector: 'Agences & consultants', example: 'Suivi client, pipeline de propositions, relances et reporting mensuel — sans y penser chaque semaine.' },
        { sector: 'Commerciaux terrain', example: 'Notes vocales, géolocalisation, relances SMS — un CRM pensé pour le terrain, pas pour un bureau.' },
        { sector: 'Startups en croissance', example: 'Un CRM qui grandit avec l\'équipe, sans les coûts d\'un Salesforce enterprise.' },
        { sector: 'Professions libérales', example: 'Suivi des dossiers, rappels de rendez-vous, facturation — connectés au même endroit.' },
      ],
    },
    faq: {
      h2: 'Questions fréquentes',
      items: [
        { q: 'Quel outil utilisez-vous pour créer les CRM ?', a: 'Notion, Airtable et HubSpot selon votre budget et vos besoins. Pour des cas plus spécifiques, on développe sur mesure avec n8n et une base de données dédiée.' },
        { q: 'Peut-on migrer depuis notre CRM actuel ?', a: 'Oui. Vos données sont récupérées depuis Pipedrive, Salesforce, Excel ou tout autre outil, et importées proprement dans le nouveau CRM.' },
        { q: 'Combien de temps avant que le CRM soit opérationnel ?', a: 'Un CRM Notion ou Airtable est livré en 5 à 10 jours. Une solution HubSpot avec automatisations avancées prend 2 à 3 semaines.' },
        { q: 'Toute l\'équipe va-t-elle vraiment l\'utiliser ?', a: 'C\'est la priorité. L\'interface est pensée pour être simple, avec une formation incluse — un CRM que personne n\'utilise n\'a aucune valeur.' },
      ],
    },
    pricing: {
      h2: 'Trois façons de démarrer',
      note: 'Livré en 5 à 10 jours. Migration de vos données existantes incluse.',
      items: [
        { label: 'CRM Starter', price: '990€', desc: 'CRM Notion ou Airtable. Pipeline commercial. Jusqu\'à 3 automatisations. Formation de 2h.', highlight: false },
        { label: 'CRM Pro', price: '2 500€', desc: 'Le CRM, des automatisations avancées, la connexion email/WhatsApp et un reporting en temps réel.', highlight: true },
        { label: 'HubSpot Expert', price: 'Sur devis', desc: 'Configuration HubSpot complète, workflows marketing, intégrations multiples.', highlight: false },
      ],
    },
  },

  'creation-applications-dashboards': {
    slug: 'creation-applications-dashboards',
    title: "Création d'Applications & Dashboards",
    metaTitle: "Création Application Métier & Dashboard sur Mesure | HGO Automation",
    metaDescription: "Créez des applications métier et dashboards sur mesure avec HGO Automation. Outils internes, portails clients, tableaux de bord KPIs. Livraison en 5-10 jours. Devis gratuit.",
    hero: {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
      tag: 'Applications & Dashboards',
      h1: 'Un outil que votre équipe ouvre vraiment chaque matin',
      subtitle: 'Tableaux de bord, applications internes, portails clients — conçus pour être utilisés, pas juste déployés.',
      stats: [
        { value: '5-10j', label: 'avant la mise en ligne' },
        { value: '0', label: 'ligne de code à écrire de votre côté' },
        { value: '100%', label: 'adapté à vos besoins, pas l\'inverse' },
      ],
    },
    problems: {
      h2: 'Ce qui bloque votre équipe aujourd\'hui',
      items: [
        { title: 'Votre activité tient dans des fichiers Excel fragiles', desc: 'Pas de visibilité en temps réel, pas d\'accès mobile, un fichier corrompu et tout s\'arrête.' },
        { title: 'Vos KPIs n\'existent que le jour où vous les calculez', desc: 'Un rapport hebdomadaire qui demande de rassembler des données de plusieurs outils à la main.' },
        { title: 'Les logiciels du marché ne collent pas à votre process', desc: 'Vous payez pour des fonctionnalités que vous n\'utilisez jamais, et il en manque toujours une.' },
        { title: 'Des étapes clés reposent encore sur l\'oral', desc: 'Un cahier, un email, un coup de fil — et l\'information se perd en chemin.' },
      ],
    },
    features: {
      h2: 'Ce que ça peut être, concrètement',
      items: [
        { title: 'Un dashboard toujours à jour', desc: 'Ventes, stocks, performances, chantiers — visibles sur un écran ou un téléphone, sans rafraîchir manuellement.' },
        { title: 'Une application pensée pour votre équipe', desc: 'Planning, suivi de chantier, gestion des stocks, onboarding — construite pour ce que vous faites réellement.' },
        { title: 'Un espace pour vos clients', desc: 'Ils suivent leur dossier, téléchargent leurs documents et vous écrivent, sans vous solliciter à chaque étape.' },
        { title: 'Des formulaires qui font le tri eux-mêmes', desc: 'Devis, commande, rapport d\'intervention — avec une logique conditionnelle qui envoie chaque demande au bon endroit.' },
        { title: 'Un rapport qui arrive sans qu\'on le demande', desc: 'Un PDF hebdomadaire, généré et envoyé automatiquement, qui rassemble vos données de partout.' },
        { title: 'Une connexion à ce que vous utilisez déjà', desc: 'CRM, ERP, comptabilité, Google Workspace — l\'application s\'y branche plutôt que de les remplacer.' },
      ],
    },
    steps: {
      h2: 'De l\'idée à l\'application en 4 étapes',
      items: [
        { num: '01', title: 'Un brief, puis une maquette', desc: 'On définit ensemble les fonctionnalités et les connexions nécessaires. La maquette arrive en 48h.' },
        { num: '02', title: 'La construction', desc: 'L\'application prend forme avec les outils les plus adaptés à votre cas d\'usage.' },
        { num: '03', title: 'Tests avec vos vraies données', desc: 'Vous validez sur des cas réels, on ajuste selon vos retours, avant la mise en ligne.' },
        { num: '04', title: 'Mise en ligne, puis formation', desc: 'L\'application est active. Votre équipe est formée en 2h, avec la documentation qui va avec.' },
      ],
    },
    usecases: {
      h2: 'Ce que ça donne, selon votre métier',
      items: [
        { sector: 'Direction & management', example: 'Chiffre d\'affaires, marges, effectifs, projets en cours — visibles d\'un coup d\'œil, depuis un téléphone.' },
        { sector: 'Gestion de chantier', example: 'Les techniciens remplissent leur rapport, ajoutent des photos et font signer le client, directement sur le terrain.' },
        { sector: 'E-commerce & logistique', example: 'Stocks, commandes et ruptures sont visibles et signalés avant qu\'ils ne deviennent un problème.' },
        { sector: 'Ressources humaines', example: 'Congés, fiches de paie, onboarding — un portail unique, plutôt que trois outils différents.' },
      ],
    },
    faq: {
      h2: 'Questions fréquentes',
      items: [
        { q: 'Quels outils utilisez-vous ?', a: 'Bubble pour les applications web complexes, Glide pour le mobile, Retool pour les outils internes, Notion pour les dashboards collaboratifs. Le choix dépend de votre cas d\'usage et de votre budget.' },
        { q: 'Peut-on modifier l\'application après livraison ?', a: 'Oui. Soit vous êtes formé pour faire les modifications simples vous-même, soit on s\'en charge via l\'abonnement de maintenance.' },
        { q: 'Quelle différence avec un développeur classique ?', a: 'Un délai plus court et un budget plus maîtrisé, parce qu\'on assemble des briques déjà éprouvées plutôt que de tout coder depuis zéro. Pour des besoins très spécifiques, on combine no-code et développement sur mesure.' },
        { q: 'L\'application fonctionnera-t-elle sur mobile ?', a: 'Oui. Chaque application est responsive ou nativement mobile selon le besoin, testée sur iOS et Android.' },
      ],
    },
    pricing: {
      h2: 'Trois façons de démarrer',
      note: 'Maquette livrée en 48h. Application en production en 5 à 10 jours.',
      items: [
        { label: 'Dashboard', price: '790€', desc: 'Un dashboard en temps réel. Connecté à 2 sources de données. Utilisable sur mobile.', highlight: false },
        { label: 'Application Métier', price: '2 500€', desc: 'Une application complète : formulaires, logique conditionnelle, API connectée, formation incluse.', highlight: true },
        { label: 'Portail Client', price: 'Sur devis', desc: 'Un espace client dédié : authentification, documents, messagerie intégrée.', highlight: false },
      ],
    },
  },
};
