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
    description: 'Système complet de monitoring de composteur : ESP32 avec multiplexage capteurs (SCD41, AHT20, NPK RS485, MQ137/4/7), gestion énergie par MOSFET et préchauffe, trame binaire avec CRC. Récepteur Heltec LoRa 32 V3 en LoRaWAN OTAA vers TTN, backend Python FastAPI/SQLModel/SQLite, dashboard web Svelte et prédiction ML simple.',
    problem: 'Le compostage urbain manque de feedback en temps réel. Les capteurs multiples posent problème de consommation et de fiabilité des données.',
    solution: 'Architecture modulaire avec gestion fine de l\'énergie (sleep profond, préchauffe capteurs gaz), trame binaire compacte, pipeline complet jusqu\'à la prédiction.',
    architecture: [
      'ESP32 : multiplexage capteurs + gestion énergie (MOSFET, sleep)',
      'Trame binaire compacte avec CRC pour intégrité',
      'Heltec LoRa 32 V3 → LoRaWAN OTAA → TTN → MQTT',
      'Backend FastAPI + SQLModel + SQLite',
      'Dashboard Svelte + prédiction ML (tendance température)'
    ],
    demonstrations: [
      'Électronique analogique : conditionnement, multiplexage, énergie',
      'LoRa/LoRaWAN : OTAA, trame binaire, payload decoder',
      'Backend API : REST, modèles SQLModel, migrations',
      'Données/ML : série temporelle, prédiction simple',
      'Intégration système : bout en bout, du capteur à l\'UI'
    ],
    technologies: ['ESP32', 'C++', 'LoRaWAN', 'TTN', 'MQTT', 'FastAPI', 'SQLModel', 'SQLite', 'Svelte', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CypreRask/Composteur-public' }
    ]
  },
  {
    id: 'ruche-jpo',
    title: 'Ruche Connectée Intelligente',
    subtitle: 'Système complet de monitoring apicole avec détection IA en temps réel',
    category: 'iot',
    status: 'wip',
    description: 'Système autonome de surveillance de ruche combinant capteurs LoRaWAN, backend temps réel et vision par ordinateur. Pipeline complet : capteurs environnementaux (température, humidité, poids) pour la santé de la colonie, et "Sentinel" visuelle pour la détection de menaces (Frelons). Actuellement sur carte autonome (CanMV ou Raspberry Pi), le système vise une autonomie énergétique totale, bien que ce soit encore un défi technique majeur en cours de développement.',
    problem: 'Les apiculteurs perdent des colonies à cause des frelons asiatiques. La surveillance visuelle manuelle est chronophage et la détection tardive. Besoin d\'un système autonome capable de détecter les intrusions en temps réel et d\'alerter instantanément.',
    solution: 'Architecture modulaire full-stack : Capteurs LoRaWAN indépendants pour la télémétrie (basse conso), et Pipeline vidéo flexible (YOLOv11 quantifié NCNN) pour la détection. Hybridation possible entre analyse déportée (Edge) ou centralisée (Serveur) selon les contraintes énergétiques.',
    architecture: [
      'Capteurs LoRaWAN ABP → TTN → MQTT (Temp/Hum/Poids)',
      'Backend FastAPI : REST API + WebSocket (Diffusion temps réel)',
      'Vision : YOLOv11 NCNN (Server ou Edge) + Overlay',
      'Dashboard SvelteKit : Live stream + Données + Alertes',
      'Notifications Push multicanal lors de détection Frelon'
    ],
    demonstrations: [
      'Vision par ordinateur : pipeline complet (modèle → optimisation Edge → inférence temps réel)',
      'IoT/RF : LoRaWAN ABP, gestion payload, downlink, autonomie énergétique',
      'Backend temps réel : REST + WebSocket simultanés, gestion multi-sources',
      'Intégration système : coordination multi-services (capteurs, vidéo, API, UI)',
      'Optimisation Edge : quantification YOLO (NCNN INT8) pour Raspberry Pi (~5 FPS)',
      'UX temps réel : streaming bidirectionnel (données + vidéo + événements)'
    ],
    technologies: ['YOLOv11', 'NCNN', 'OpenCV', 'LoRaWAN', 'TTN', 'MQTT', 'FastAPI', 'WebSocket', 'SvelteKit', 'Raspberry Pi', 'Python', 'Edge Computing'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CypreRask/Ruche-public' }
    ]
  },
  {
    id: 'smartrecall-v2',
    title: 'SmartRecall — Plateforme d\'Apprentissage Cognitif',
    subtitle: 'Répétition espacée augmentée par IA et analyse sémantique',
    category: 'ai',
    status: 'wip',
    description: 'Système d\'apprentissage adaptatif combinant algorithme de répétition espacée (SM-2), génération de contenu par IA multi-provider et analyse sémantique (RAG). Architecture full-stack avec 50+ tables PostgreSQL, vector search (pgvector), ML clustering (HDBSCAN), et frontend temps réel (SvelteKit). Pipeline complet de l\'ingestion de documents PDF/DOCX à la recommandation personnalisée.',
    problem: 'L\'apprentissage classique ignore les connexions sémantiques entre concepts, les patterns d\'erreurs récurrents et l\'optimisation temporelle. Les outils existants (Anki) sont statiques et ne modélisent pas la compréhension dynamiquement.',
    solution: 'Architecture cognitive hybride : RAG Engine pour l\'ingestion, Neural Knowledge Graph pour la modélisation probabiliste de la maîtrise, et ML Error Engine pour détecter les patterns d\'échec via clustering HDBSCAN sur vecteurs hybrides.',
    architecture: [
      'RAG Engine : Ingestion → chunking sémantique → embeddings 768d → vector search',
      'Neural Knowledge Graph : Modélisation probabiliste (Vecteur d\'état + Propagation bayésienne)',
      'ML Error Engine : Clustering HDBSCAN sur vecteurs hybrides (texte + math) pour détection patterns',
      'Cascade IA Multi-Provider : Orchestration 6 LLMs (Cerebras, Groq, Mistral, Gemini) avec fallback',
      'Quiz Engine : Mega-prompts (Bloom) → validation JSON/schéma → vérification IA'
    ],
    demonstrations: [
      'Architecture distribuée : Microservices, RBAC, API REST, WebSocket temps réel',
      'Machine Learning : Embeddings, clustering (HDBSCAN/KMeans), cold start, vecteurs hybrides',
      'Graphes & Probabilités : Propagation bayésienne, similarité cosine, état cognitif',
      'NLP/RAG : Chunking sémantique, vector search, retrieval-augmented generation',
      'Orchestration IA : Cascade multi-provider (6 LLMs), rate limiting, fallback, coûts',
      'Data Engineering : PostgreSQL avancé (50+ tables), pgvector, migrations, pipelines ETL'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'SvelteKit', 'HDBSCAN', 'D3.js', 'Docker', 'RAG', 'LLM Cascade'],
    links: [
      { label: 'App Live', url: 'https://app.smart-recall.app/' }
    ]
  },
  {
    id: 'sismographe',
    title: 'Sismographe Universitaire',
    subtitle: 'Réhabilitation & Monitoring IoT',
    category: 'iot',
    status: 'deployed',
    description: 'Projet de  Remise en état d\'un sismographe de laboratoire déconnecté pour le rendre accessible via le web. Collaboration avec Irem Su Cone (Projet initial) et Alex Rognone (DB/Connectivité), sous la supervision de Didier Orlandi. J\'ai réparé, connecté et calibré le dispositif ',
    problem: 'Matériel existant déconnecté et inexploitable (cassé). Nécessité de moderniser l\'instrument pour l\'enseignement et la recherche sans racheter de matériel.',
    solution: 'Approche "Retrofit IoT" : Réparation physique du conditionneur de signal, calibration rigoureuse, et ajout d\'une couche Edge (Raspberry Pi) pour numériser et transmettre les données en temps réel aux infrastructures universitaires.',
    architecture: [
      'Diagnostic & réparation électronique (conditionnement analogique)',
      'Calibration capteur sismique (référence événements connus)',
      'Raspberry Pi : acquisition + traitement + MQTT Publisher',
      'Backend : stockage événements (SQL) + API REST',
      'Frontend : dashboard prototype (WebSocket) -> Site final par D. Orlandi'
    ],
    demonstrations: [
      'Électronique : diagnostic, réparation, conditionnement signal analogique',
      'Instrumentation : calibration capteur, validation métrologique',
      'IoT : Raspberry Pi, MQTT, pipeline données temps réel',
      'Collaboration : gestion projet en équipe (Alex Rognone, Irem Su Cone)',
      'Intégration : de l\'instrumentation physique au monitoring web'
    ],
    technologies: ['Raspberry Pi', 'MQTT', 'Python', 'ObsPy', 'SQL', 'WebSocket', 'Calibration', 'Électronique analogique', 'Travail d\'équipe'],
    links: [
      { label: 'Site Live (UniCA)', url: 'https://eftis.univ-cotedazur.fr/sismographe/' }
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
    technologies: ['Électronique analogique', 'Conception modulaire', 'Pédagogie', 'Neurophysiologie', 'Design Tangible'],
    links: []
  },
  {
    id: 'portfolio-tracker',
    title: 'Portfolio Tracker',
    subtitle: 'Architecture Event-Driven & IA Multi-Provider',
    category: 'finance',
    status: 'deployed',
    isSensitive: true,
    description: 'Application de gestion de patrimoine multi-comptes avec analyse IA automatisée, rééquilibrage algorithmique et architecture event-driven. Pipeline complet : ingestion transactions → event store (JSONL) → materialized views (CQRS) → market data enrichment → cascade IA multi-provider (Perplexity → Gemini → Mistral → OpenRouter) → rebalancing engine (règles tactiques + IA) → rapports automatiques.',
    problem: 'La gestion manuelle de portefeuille est chronophage et sujette aux biais. Les outils existants n\'offrent ni intelligence décisionnelle contextuelle, ni audit trail complet, ni automatisation des stratégies complexes.',
    solution: 'Architecture Event Sourcing pour une auditabilité totale (SSOT JSONL) couplée à un moteur de décision hybride (Règles strictes + IA Générative). Utilisation du pattern CQRS pour la performance et d\'une cascade d\'IA pour optimiser le ratio coût/intelligence.',
    architecture: [
      'Event Store (SSOT) : Transactions en JSONL immuable + Hashing SHA-256',
      'CQRS : Séparation Write (API Flask) / Read (Vues matérialisées)',
      'Cascade IA Multi-Provider : Perplexity (Macro) → Gemini (Tech) → Mistral (Synthèse)',
      'Rebalancing Engine : Règles tactiques (VIX, Or, Taux) + surveillance IA',
      'Frontend : Dashboard Jinja2 + Visualisation D3'
    ],
    demonstrations: [
      'Backend : Architecture Event Sourcing & CQRS pure',
      'IA : Orchestration complexe (Cascade, Fallback, Circuit Breaker)',
      'Data Engineering : Pipeline de validation strict (Pydantic, SHA-256)',
      'Finance : Modélisation multi-devises & Audit trail complet',
      'DevOps : Gestion de la persistance fichier (JSONL) vs Base de données'
    ],
    technologies: ['Python', 'Flask', 'JSONL', 'CQRS', 'Pydantic', 'Jinja2', 'Perplexity', 'Gemini', 'Mistral'],
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
    description: 'Maîtrise LoRaWAN end-to-end : OTAA/ABP, payload encoding/decoding, intégration TTN → MQTT. Gestion contraintes RF (portée, débit, énergie).'
  },
  {
    id: 'backend',
    label: 'Backend / API',
    icon: 'Server',
    description: 'Architecture d\'APIs modernes (FastAPI) : REST + WebSocket temps réel, modèles de données (SQLModel), gestion de flux asynchrones. Pensé pour la scalabilité.'
  },
  {
    id: 'data',
    label: 'Data / IA',
    icon: 'BarChart3',
    description: 'Pipelines de données bout-en-bout : collecte IoT → stockage → analyse. Intégration IA supervisée (YOLO pour vision, ML pour séries temporelles). Co-conception avec IA générative.'
  },
  {
    id: 'ux',
    label: 'UX / Frontend',
    icon: 'Monitor',
    description: 'Interfaces fonctionnelles et rapides (Svelte/SvelteKit). Focus sur la visualisation temps réel et l\'expérience utilisateur. Prototypage assisté par IA.'
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
    description: 'Je sépare la syntaxe de la sémantique. Je définis l\'architecture, les algorithmes et les contraintes physiques. Je délègue la rédaction du code à l\'IA, agissant comme un directeur technique qui valide rigoureusement chaque brique.',
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
  tagline: 'Je ne suis pas développeur, je suis Architecte de Systèmes. Je conçois la logique et les contraintes (IoT, Bio, Data), et j\'orchestre l\'IA pour l\'exécution technique. Elle est mon accélérateur, pas mon cerveau.',
  location: 'Nice, France',
  email: 'mathis.steinmann@outlook.fr',
  github: 'github.com/CypreRask',
  linkedin: 'linkedin.com/in/mathis-steinmann-93b5851b9',
  availability: 'En recherche de défis techniques'
};

export const heroStats = [
  { value: '5+', label: 'Projets' },
  { value: 'IoT', label: 'Data / IA / Bio' },
  { value: 'Nice', label: 'France' }
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
