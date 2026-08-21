/* Tout le contenu éditorial du site vit ici.
   Un seul endroit à modifier pour faire évoluer le portfolio. */

export const identity = {
  name: 'Oussama Azizi',
  initials: 'OA',
  role: 'Ingénieur logiciel',
  years: '7',
  location: 'Île-de-France',
  region: 'Île-de-France',
  email: 'alazizi.oussama@gmail.com',
  phone: '+33 7 68 05 20 18',
  phoneHref: '+33768052018',
  cv: 'Oussama_AZIZI.pdf',
};

export const intro = {
  lede:
    'Je conçois des logiciels et je les fais tenir en production : applications web, applications mobiles publiées, et les systèmes qui tournent derrière.',
  body: [
    "En entreprise, je travaille sur des applications métier — refontes d'interfaces complètes, fronts web, back-ends et outils internes. Sept ans à faire le trajet entier : du besoin exprimé jusqu'au logiciel qui tourne chez l'utilisateur.",
    "Le reste du temps, je construis mes propres produits. Seul, et jusqu'au bout : la conception, le code, la publication, puis tout ce qui vient après. Trois sont publics aujourd'hui — ce sont les seuls que je montre ici.",
  ],
  facts: [
    { k: 'Expérience', v: '7 ans' },
    { k: 'Terrains', v: 'Web · Mobile · Embarqué' },
    { k: 'Base', v: 'Île-de-France' },
    { k: 'Statut', v: 'Ouvert aux opportunités' },
  ],
};

export const projects = [
  {
    id: 'emblia',
    index: '01',
    name: 'Emblia',
    tagline: 'Carte de visite numérique',
    status: 'En ligne',
    live: true,
    href: 'https://emblia.fr',
    hrefLabel: 'emblia.fr',
    year: '2026',
    role: 'Conception, développement et exploitation — seul',
    lede:
      "Une carte de visite qui tient dans un lien et dans un QR code, pour les indépendants comme pour les entreprises.",
    body: [
      "Emblia remplace le carton par une page publique que l'on met à jour en trois secondes. Le visiteur enregistre le contact sans installer quoi que ce soit, ou l'ajoute directement au portefeuille de son téléphone.",
      "Côté entreprise, un compte permet d'inviter des employés, de leur générer des cartes cohérentes avec la charte de la société et de suivre les statistiques de consultation. Le produit est complet : authentification e-mail et Google, gestion des organisations, plans payants, files d'envoi d'e-mails, limitation de débit, référencement des pages publiques et internationalisation.",
    ],
    features: [
      'Éditeur de carte en direct, rendu immédiat',
      'QR code et ajout au portefeuille mobile',
      'Comptes entreprise : employés, invitations, charte',
      'Statistiques de consultation par carte',
      'Pages publiques optimisées pour le référencement',
      'Multilingue, installable en PWA',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Express 5',
      'PostgreSQL',
      'Tailwind 4',
      'Framer Motion',
      'OAuth Google',
    ],
  },
  {
    id: 'karneo',
    index: '02',
    name: 'Karneo',
    tagline: "Carnet d'entretien automobile",
    status: 'Sur le Play Store',
    live: true,
    href: 'https://play.google.com/store/apps/details?id=com.karneo.karneo',
    hrefLabel: 'Google Play',
    year: '2026',
    role: 'Conception, développement et publication — seul',
    lede:
      "Le carnet d'entretien papier, remplacé par une application qui fonctionne entièrement hors ligne.",
    body: [
      "Aucun serveur, aucun compte, aucune donnée qui part ailleurs : tout est stocké sur le téléphone. C'est une contrainte que je me suis imposée dès le départ, et elle a façonné toute l'architecture.",
      "La partie intéressante est le moteur de rappels. Une échéance peut être posée sur une date, mais aussi sur un seuil de kilométrage — « à faire à 90 000 km ». L'application apprend le rythme de roulage à partir des relevés du compteur, projette la date à laquelle le seuil sera franchi, et recalcule cette projection à chaque nouvelle saisie.",
    ],
    features: [
      'Véhicules illimités, historique typé et daté',
      'Rappels par date ou par seuil de kilométrage projeté',
      'Entretien périodique auto-reprogrammé après chaque saisie',
      'Consommation et coût au kilomètre calculés',
      'Échéances contrôle technique et assurance',
      'Sauvegarde complète exportable et restaurable',
    ],
    stack: [
      'Flutter',
      'Dart',
      'SQLite',
      'Provider',
      'Notifications locales',
      'Android',
    ],
  },
  {
    id: 'glancehud',
    index: '03',
    name: 'GlanceHUD',
    tagline: 'Overlay de performances natif',
    status: 'Open source · Apache 2.0',
    live: false,
    href: 'https://github.com/oussamazizi/glancehud',
    hrefLabel: 'github.com/oussamazizi/glancehud',
    year: '2026',
    role: 'Auteur et mainteneur',
    lede:
      "Un moteur C++ qui affiche les performances d'une application par-dessus elle, en direct, pendant qu'on la développe.",
    body: [
      "FPS, temps de frame, CPU, mémoire, réseau : les chiffres s'affichent dans un panneau déplaçable qui reste au-dessus de toute l'application, sans passer par un profileur lourd.",
      "La contrainte que je me suis fixée est de ne rien coûter à ce qu'on mesure : le moteur ne fait aucune allocation par frame et publie ses relevés dans un dépôt sans verrou, que l'affichage vient lire. L'API est exposée derrière une ABI C stable pour permettre des liaisons depuis d'autres langages.",
      "Le projet est jeune et je le documente comme tel : le cœur C++ et l'intégration Android sont fonctionnels et testés, les portages iOS, Flutter et React Native sont encore à écrire.",
    ],
    features: [
      'Cœur C++20 sans allocation par frame',
      'Dépôt de relevés sans verrou, lu par l’affichage',
      'ABI C stable pour les liaisons externes',
      'Overlay Android natif, déplaçable et repliable',
      'FPS via Choreographer, CPU/RAM/réseau via /proc',
      'Testé sous GoogleTest, livré en AAR multi-ABI',
    ],
    stack: [
      'C++20',
      'CMake',
      'GoogleTest',
      'JNI',
      'Kotlin',
      'Android NDK',
      'ABI C',
    ],
  },
];

export const experience = [
  {
    period: 'depuis août 2023',
    current: true,
    role: 'Ingénieur full-stack',
    company: 'EssilorLuxottica',
    city: 'Créteil',
    stack: [
      'Java (GWT)',
      'Angular',
      'Node.js',
      'Ionic',
      'Shell / Linux',
      'Yocto',
      'Figma',
      'Git',
      'SVN',
    ],
  },
  {
    period: 'févr. — août 2023',
    role: 'Ingénieur développement mobile',
    company: 'Davidson',
    city: 'Boulogne-Billancourt',
    stack: [
      'Kotlin',
      'Jetpack Compose',
      'Retrofit',
      'Coroutines',
      'API Dailymotion',
      'Git',
    ],
  },
  {
    period: 'août 2019 — nov. 2022',
    role: 'Ingénieur full-stack',
    company: 'All Soft Multimedia',
    city: 'Sfax',
    stack: [
      'Kotlin',
      'Java',
      'Swift',
      'C',
      'Spring Boot',
      'JPA / Hibernate',
      'WebRTC',
      'RxJava',
      'Room',
      'OpenStreetMap',
      'Docker',
      'GitLab',
    ],
  },
  {
    period: 'janv. — août 2019',
    role: 'Ingénieur systèmes embarqués',
    note: 'Stage de fin d’études',
    company: 'Electrosoft',
    city: 'Sfax',
    stack: ['C / C++', 'ESP32', 'JavaFX', 'Sockets', 'Eagle'],
  },
];

export const education = [
  {
    period: '2016 — 2019',
    degree: "Diplôme d'ingénieur — Informatique industrielle",
    school: "ENET'Com, Sfax",
  },
  {
    period: '2013 — 2016',
    degree: 'Cycle préparatoire — Physique-Chimie',
    school: 'ISSAT, Gabès',
  },
];

export const toolkit = [
  {
    n: '01',
    title: 'Langages',
    items: ['Java', 'Kotlin', 'Dart', 'Swift', 'JavaScript', 'TypeScript', 'Python', 'C / C++', 'Shell'],
  },
  {
    n: '02',
    title: 'Mobile',
    items: ['Flutter', 'Jetpack Compose', 'Android SDK', 'Coroutines · Flow', 'RxJava', 'Room', 'SQLite', 'Retrofit', 'Ionic'],
  },
  {
    n: '03',
    title: 'Web & back-end',
    items: ['React', 'Angular', 'Node.js', 'Express', 'Spring Boot', 'Java GWT', 'PostgreSQL', 'REST', 'Tailwind'],
  },
  {
    n: '04',
    title: 'Systèmes & outils',
    items: ['Linux', 'Yocto', 'ESP32', 'OPC UA', 'WebRTC', 'Docker', 'CI/CD', 'Git · GitLab · SVN', 'Figma'],
  },
];

export const nav = [
  { id: 'travaux', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'outils', label: 'Outils' },
  { id: 'contact', label: 'Contact' },
];
