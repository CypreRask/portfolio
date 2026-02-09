// ============================================
// MATHIS STEINMANN - PORTFOLIO DATA
// ============================================
// Edit this file to update content across the site

export type ProjectStatus = 'deployed' | 'prototype' | 'wip';
export type ProjectCategory = 'iot' | 'ai' | 'bio' | 'systems' | 'finance';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  demonstrations: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
  isSensitive?: boolean;
}

export interface SystemStage {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  projectIds: string[];
}

export interface Skill {
  id: string;
  label: string;
  icon: string;
  description: string;
}

// ============================================
// PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    id: 'composteur-v2',
    title: 'Composteur Connecté V2',
    subtitle: 'IoT full stack — monitoring biologique',
    category: 'iot',
    status: 'wip',
    description: 'Projet solo de suivi de compost réalisé pour la Mission Éco-Responsable de l\'Université Côte d\'Azur (UniCA). Une V1 a été déployée sur site pendant un temps (retours terrain), et la V2 est en cours avec davantage de capteurs et un objectif pédagogique : suivre les phases du compost et comparer des protocoles d\'apports (ex: compost incluant des agrumes). Pipeline : capteurs → LoRaWAN (Heltec LoRa 32 V3) → TTN → MQTT → API FastAPI → stockage SQLite (compost.db via SQLModel) → dashboard → analyses et prédictions (Pandas/Scikit-learn).',
    problem: 'L\'évaluation “à l’œil” fonctionne, mais elle ne suffit pas pour comparer objectivement des protocoles d\'apports ni pour surveiller finement la dynamique (tendances, anomalies, signaux faibles).',
    solution: 'Instrumenter le composteur, centraliser les mesures dans une API + base locale, puis produire des visualisations et des prédictions simples pour interpréter l\'évolution et comparer des protocoles d\'apports.',
    architecture: [
      'ESP32 : multiplexage capteurs + gestion énergie (MOSFET, sleep)',
      'Trame binaire compacte avec CRC pour intégrité',
      'Heltec LoRa 32 V3 → LoRaWAN → TTN → MQTT',
      'Backend FastAPI (Python) : endpoints + pipeline d\'ingestion',
      'SQLite (compost.db) via SQLModel',
      'Dashboard web : visualisation, export et suivi des phases',
      'Data/ML : Pandas + Scikit-learn (prédictions simples)'
    ],
    demonstrations: [
      'Électronique analogique : conditionnement, multiplexage, énergie',
      'IoT/LoRaWAN : payload, intégration TTN → MQTT, robustesse terrain',
      'Backend API : REST, modèles de données (SQLModel), persistance SQLite',
      'Données : séries temporelles, visualisation, indicateurs de phase',
      'ML : features simples + modèles Scikit-learn pour prédiction/tendance',
      'Intégration système : bout en bout, du capteur à l\'UI'
    ],
    technologies: ['ESP32', 'LoRaWAN', 'Monitoring', 'FastAPI', 'SQLite', 'Data/ML'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CypreRask/Composteur-public' }
    ]
  },
  {
    id: 'ruche-jpo',
    title: 'Ruche Connectée Intelligente',
    subtitle: 'Télémétrie LoRaWAN + vision (abeilles / frelons)',
    category: 'iot',
    status: 'wip',
    description: 'Au sein du fablab, projet de ruche connectée repris d\'un projet initié dans un cadre pédagogique (encadrement Didier Orlandi). Une première version avait déjà été testée avant moi ; je développe et itère surtout la brique vision. Objectif : combiner télémétrie (température, humidité, poids) et détection vidéo (abeilles / frelons) pour suivre l\'activité et déclencher des alertes. Actuellement en phase labo, avec extension prévue vers des capteurs audio.',
    problem: 'La surveillance manuelle est chronophage et la détection de situations à risque (ex: présence de frelons) arrive trop tard. Il faut un système autonome qui mesure l\'état de la ruche et détecte visuellement des événements, sous fortes contraintes d\'énergie et de connectivité.',
    solution: 'Architecture modulaire : capteurs LoRaWAN (ABP) pour la télémétrie basse conso + pipeline YOLO pour la détection (PC ou embarqué sur Raspberry Pi via NCNN). Les données et événements sont centralisés via TTN/MQTT et une API temps réel, puis visualisés sur un dashboard Svelte.',
    architecture: [
      'Capteurs (temp/hum/poids) → LoRaWAN ABP → TTN → MQTT',
      'Backend FastAPI : ingestion télémétrie + événements vision',
      'Temps réel : WebSocket (diffusion des mesures/alertes)',
      'Vision : YOLO (plusieurs modèles) ; exécution PC ou Raspberry Pi (NCNN)',
      'Dashboard Svelte : données, alertes, historique'
    ],
    demonstrations: [
      'Vision par ordinateur : dataset → entraînement → export/optimisation → inférence',
      'Déploiement multi-cibles : PC (labo) et edge (Raspberry Pi via NCNN)',
      'IoT/RF : LoRaWAN ABP, payload, intégration TTN → MQTT',
      'Backend temps réel : REST + WebSocket, agrégation multi-sources',
      'Frontend : dashboard Svelte orienté monitoring + alertes'
    ],
    technologies: ['LoRaWAN', 'Vision IA', 'Temps réel', 'Edge', 'Dashboard', 'YOLO'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CypreRask/Ruche-public' }
    ]
  },
  {
    id: 'smartrecall-v2',
    title: 'SmartRecall — Plateforme d\'Apprentissage Cognitif',
    subtitle: 'Répétition espacée augmentée par IA et analyse sémantique',
    category: 'ai',
    status: 'prototype',
    description: 'Plateforme d\'apprentissage adaptatif combinant répétition espacée, génération assistée par IA et recherche sémantique (RAG). Architecture full-stack avec PostgreSQL + recherche vectorielle (pgvector), ingestion de documents et interface web.',
    problem: 'L\'apprentissage classique ignore les connexions sémantiques entre concepts, les patterns d\'erreurs récurrents et l\'optimisation temporelle. Les outils existants (Anki) sont statiques et ne modélisent pas la compréhension dynamiquement.',
    solution: 'Architecture cognitive : moteur RAG pour l\'ingestion/recherche, modèle de progression (répétition espacée + signaux), et génération de quiz structurée avec validation.',
    architecture: [
      'Ingestion : documents → découpage → embeddings → recherche vectorielle (pgvector)',
      'Moteur de progression : SM-2 + signaux d\'erreurs (ajustement adaptatif)',
      'Orchestration IA multi-provider : génération + fallback + contrôle des coûts',
      'Quiz Engine : génération structurée (JSON) + validation de schéma',
      'API + UI : endpoints REST, vues et retours utilisateur'
    ],
    demonstrations: [
      'NLP/RAG : chunking, embeddings, recherche vectorielle, citations',
      'Orchestration IA : multi-provider, rate limiting, fallback',
      'Backend : API, modèles de données, migrations',
      'Data : PostgreSQL + pgvector, requêtes et indexation',
      'Produit : boucle feedback (révisions, erreurs, difficulté)'
    ],
    technologies: ['RAG', 'Répétition espacée', 'IA', 'Vector DB', 'Web', 'PostgreSQL'],
    links: [
      { label: 'App Live', url: 'https://app.smart-recall.app/' }
    ]
  },
  {
    id: 'sismographe',
    title: 'Sismographe Universitaire',
    subtitle: 'Réparation & mise en ligne des données',
    category: 'iot',
    status: 'deployed',
    description: 'Au sein du fablab, le laboratoire Géoazur (UniCA) a confié des sismographes à remettre en état et à connecter pour rendre les données accessibles. Un travail initial avait été mené par Irem Su Cone sur un sismographe fonctionnel ; ensuite, j\'ai remis en route la chaîne côté acquisition et exploitation des données : réparation d\'un sismographe mécaniquement cassé, amélioration du programme d\'acquisition (Python), sortie des données via MQTT et construction d\'une interface web de visualisation. Puis, avec Didier Orlandi (encadrement) et Alex (base de données), l\'ensemble a été porté sur Raspberry Pi avec persistance en MariaDB. Le site public final a été réalisé par Didier Orlandi à partir de ma base web et est maintenant en ligne.',
    problem: 'Instrument(s) non opérationnel(s) et données difficilement accessibles. Objectif : remettre en service, extraire les mesures et les rendre consultables via le web pour l\'enseignement.',
    solution: 'Réparation + acquisition (Python), publication des mesures via MQTT, persistance sur Raspberry Pi (MariaDB) et visualisation web.',
    architecture: [
      'Réparation mécanique (sismographe cassé) + remise en service',
      'Acquisition/formatage des mesures (Python)',
      'Publication des données via MQTT',
      'Raspberry Pi : déploiement et persistance',
      'Base de données : MariaDB (mise en place Alex)',
      'Interface web : visualisation (base initiale), puis site public final par Didier Orlandi'
    ],
    demonstrations: [
      'Réparation : remise en état d\'un instrument mécaniquement cassé',
      'Intégration bout-en-bout : acquisition → MQTT → stockage → web',
      'Web : monitoring et visualisation',
      'Collaboration : coordination fablab ↔ labo ↔ encadrement'
    ],
    technologies: ['Réparation', 'Raspberry Pi', 'MQTT', 'MariaDB', 'Monitoring web', 'Université'],
    links: [
      { label: 'Site public (UniCA)', url: 'https://eftis.univ-cotedazur.fr/sismographe/' }
    ]
  },
  {
    id: 'maquette-neurone',
    title: 'Maquette Neurone',
    subtitle: 'Pédagogie — sommation spatio-temporelle',
    category: 'bio',
    status: 'wip',
    description: 'Maquette pédagogique tangible pour enseigner la sommation spatio-temporelle neuronale. Système modulaire avec dendrites à connexions magnétiques, modules synaptiques excitateurs/inhibiteurs interchangeables, circuit de sommation analogique, et visualisation LED du potentiel de membrane. Conçue pour ateliers de vulgarisation scientifique (lycéens, grand public).',
    problem: 'La neurophysiologie (potentiel d\'action, sommation synaptique, seuil d\'activation) est difficile à visualiser et enseigner sans abstraction mathématique. Les schémas 2D ne permettent pas de manipuler physiquement les concepts.',
    solution: 'Maquette interactive modulaire : Dendrites physiques avec connexions magnétiques (repositionnement libre), Modules synaptiques codés couleur (vert = excitateur, rouge = inhibiteur), Circuit de sommation spatio-temporelle avec condensateur (intégration temporelle), LEDs progressives pour visualiser le potentiel de membrane.',
    architecture: [
      'Corps cellulaire : circuit de sommation + LEDs potentiel de membrane',
      'Dendrites modulaires avec connexions magnétiques (plug & play)',
      'Modules synaptiques : générateurs de signaux excitateurs/inhibiteurs',
      'Circuit RC pour intégration spatio-temporelle (condensateur)',
      'Détecteur de seuil + propagation axonale (simulation)',
      'Design mécanique : support, aimants, câblage modulaire'
    ],
    demonstrations: [
      'Électronique : circuits analogiques, LEDs, gestion alimentation',
      'Pédagogie : vulgarisation scientifique, design d\'expérience tangible',
      'Conception mécanique : modularité, assemblage magnétique, ergonomie',
      'Biologie appliquée : modélisation physique de processus neurophysiologiques',
      'UX éducative : feedback visuel immédiat, manipulation intuitive'
    ],
    technologies: ['Maquette interactive', 'Pédagogie', 'Neurophysiologie', 'Électronique analogique', 'Conception modulaire'],
    links: []
  },
  {
    id: 'portfolio-tracker',
    title: 'Portfolio Tracker',
    subtitle: 'Architecture Event-Driven & IA Multi-Provider',
    category: 'finance',
    status: 'deployed',
    isSensitive: true,
    description: 'Application privée de suivi de portefeuille (multi-comptes) avec historisation d\'événements, vues de lecture (CQRS) et analyse assistée par IA. Objectif : un outil sur mesure, maîtrisé de bout en bout, qui reflète exactement mes règles et mes besoins.',
    problem: 'Je voulais un système sur mesure et contrôlable : règles explicites, traçabilité complète des décisions, et automatisations adaptées à ma façon de suivre le portefeuille.',
    solution: 'Architecture Event Sourcing pour une auditabilité forte (journal d\'événements en JSONL) couplée à un moteur de décision hybride (règles + IA). Utilisation du pattern CQRS pour la performance et d\'une orchestration multi-provider pour l\'analyse.',
    architecture: [
      'Event Store : transactions JSONL immuables + hashing',
      'CQRS : séparation Write / Read (vues matérialisées)',
      'Analyse IA multi-provider : synthèse et aide à la décision (selon règles)',
      'Moteur de règles : alertes, garde-fous, scénarios de rééquilibrage',
      'Frontend : dashboard web'
    ],
    demonstrations: [
      'Backend : Architecture Event Sourcing & CQRS pure',
      'IA : Orchestration multi-provider (fallback, circuit breaker si besoin)',
      'Data Engineering : validation stricte (Pydantic), traçabilité',
      'Finance : Modélisation multi-devises & Audit trail complet',
      'DevOps : Gestion de la persistance fichier (JSONL) vs Base de données'
    ],
    technologies: ['Finance', 'Event Sourcing', 'CQRS', 'Reporting', 'IA', 'Python'],
    links: []
  }
];

// ============================================
// SYSTEM MAP DATA
// ============================================

export const systemStages: SystemStage[] = [
  {
    id: 'energy',
    label: 'Énergie',
    icon: 'Zap',
    description: 'Gestion énergétique, MOSFET, sleep, préchauffe',
    color: '#f59e0b',
    projectIds: ['composteur-v2', 'ruche-jpo', 'sismographe']
  },
  {
    id: 'sensors',
    label: 'Capteurs',
    icon: 'Activity',
    description: 'Acquisition, multiplexage, conditionnement',
    color: '#10b981',
    projectIds: ['composteur-v2', 'ruche-jpo', 'sismographe']
  },
  {
    id: 'network',
    label: 'Réseau',
    icon: 'Radio',
    description: 'LoRaWAN OTAA/ABP, TTN, MQTT',
    color: '#3b82f6',
    projectIds: ['composteur-v2', 'ruche-jpo']
  },
  {
    id: 'backend',
    label: 'Backend/API',
    icon: 'Server',
    description: 'FastAPI, SQLModel, WebSocket, REST',
    color: '#8b5cf6',
    projectIds: ['composteur-v2', 'ruche-jpo', 'smartrecall-v2', 'portfolio-tracker']
  },
  {
    id: 'data',
    label: 'Data/ML/IA',
    icon: 'Brain',
    description: 'Embeddings, RAG, clustering, prédiction',
    color: '#ec4899',
    projectIds: ['composteur-v2', 'ruche-jpo', 'smartrecall-v2', 'portfolio-tracker', 'sismographe']
  },
  {
    id: 'interface',
    label: 'Interface',
    icon: 'Monitor',
    description: 'Svelte/SvelteKit, temps réel, UX',
    color: '#06b6d4',
    projectIds: ['composteur-v2', 'ruche-jpo', 'smartrecall-v2', 'portfolio-tracker']
  },
  {
    id: 'action',
    label: 'Action',
    icon: 'Target',
    description: 'Orchestration, décision, automatisation',
    color: '#ef4444',
    projectIds: ['smartrecall-v2', 'portfolio-tracker']
  }
];

// ============================================
// SKILLS DATA
// ============================================

export const skills = [
  {
    id: 'bio',
    label: 'Biologie & Vivant',
    icon: 'Dna',
    description: 'Compréhension des systèmes vivants complexes (microbiologie, écologie). Capacité à traduire des processus biologiques en contraintes techniques (ex: cycle du compost → capteurs NPK/gaz, comportement abeilles → détection IA).'
  },
  {
    id: 'hardware',
    label: 'Hardware',
    icon: 'Cpu',
    description: 'Conception de systèmes embarqués low-power : gestion énergie (MOSFET, sleep modes), multiplexage capteurs, conditionnement analogique. ESP32, LoRa, RS485.'
  },
  {
    id: 'rf',
    label: 'RF / LoRaWAN',
    icon: 'Radio',
    description: 'Expérience LoRaWAN end-to-end : OTAA/ABP, payload encoding/decoding, intégration TTN → MQTT. Gestion des contraintes RF (portée, débit, énergie).'
  },
  {
    id: 'backend',
    label: 'Backend / API',
    icon: 'Server',
    description: 'Architecture d\'APIs (FastAPI) : REST + WebSocket temps réel, modèles de données (SQLModel), gestion de flux asynchrones. Pensé pour rester maintenable et extensible.'
  },
  {
    id: 'data',
    label: 'Data / IA',
    icon: 'BarChart3',
    description: 'Pipelines de données bout-en-bout : collecte IoT → stockage → analyse. Intégration IA supervisée (YOLO pour vision, ML pour séries temporelles). IA utilisée pour accélérer le prototypage.'
  },
  {
    id: 'ux',
    label: 'UX / Frontend',
    icon: 'Monitor',
    description: 'Dashboards de monitoring et interfaces de projet : intégration, corrections et livraison d\'une UI maintenable, souvent avec copilote IA pour accélérer (Svelte/React selon le besoin).'
  }
];

// ============================================
// HIGHLIGHTS DATA (sans stats inventées)
// ============================================

export const highlights = [
  {
    id: 'real-systems',
    title: 'Ancrage Physique',
    subtitle: 'Conception sous Contraintes',
    description: 'Je ne produis pas de code abstrait. Mes architectures, même au stade de prototype, intègrent les frictions du monde réel : limites énergétiques, instabilité réseau et complexité biologique.',
    icon: 'Cpu'
  },
  {
    id: 'ai-component',
    title: 'Orchestration IA',
    subtitle: 'Conception vs Exécution',
    description: 'J\'utilise l\'IA comme copilote pour itérer vite (frontend, backend, docs). Je garde le contrôle sur l\'architecture, les choix techniques, les tests et la cohérence du système.',
    icon: 'Network'
  },
  {
    id: 'bio-pedagogy',
    title: 'Pédagogie Bio',
    subtitle: 'Comprendre le vivant',
    description: 'La biologie et l\'informatique se nourrissent mutuellement. Des maquettes tangibles aux simulations, je rends le vivant compréhensible.',
    icon: 'Dna'
  }
];

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo = {
  name: 'Mathis Steinmann',
  title: 'Étudiant L2 Sciences de la Vie',
  subtitle: 'Université Côte d\'Azur (Nice)',
  tagline: 'Je conçois des systèmes complets sous contraintes (IoT, données, vivant) et je les fais converger jusqu\'à une démo utilisable. J\'utilise l\'IA comme copilote pour accélérer l\'implémentation, tout en gardant la responsabilité de l\'intégration, du debug et de la validation.',
  location: 'Nice, France',
  email: 'mathis.steinmann@outlook.fr',
  github: 'github.com/CypreRask',
  linkedin: 'linkedin.com/in/mathis-steinmann-93b5851b9',
  availability: 'En recherche de défis techniques'
};

export const heroStats = [
  { value: '5+', label: 'Projets' },
  { value: 'IoT / IA / Bio', label: 'Domaines' },
  { value: 'Nice, FR', label: 'Localisation' }
];

// ============================================
// NAVIGATION
// ============================================

export const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Architecture', href: '#system-map' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];
