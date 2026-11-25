// ============================================
// MATHIS STEINMANN - PORTFOLIO DATA
// ============================================
// Synchronisé avec les données de la vitrine en ligne (vitrineData.ts)

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
    id: 'noepora',
    title: 'Noépora',
    subtitle: 'Apprendre et réviser à partir de ses propres cours, avec l\'IA',
    category: 'ai',
    status: 'deployed',
    description: 'Application web de révision qui transforme des documents universitaires en fiches structurées, questions d\'entraînement et cartes interactives de notions, avec démonstration publique sur learn.noepora.fr/decouvrir.',
    problem: 'Les outils de cartes mémoire demandent beaucoup de saisie manuelle et isolent les définitions du reste du cours, tandis que la génération libre par IA produit vite des hors-sujets ou des erreurs discrètes.',
    solution: 'Découpage de cours sourcés avec renvois aux lignes exactes, quiz FSRS, carte interactive des notions, et laboratoires scientifiques basés sur des noyaux déterministes vérifiés.',
    architecture: [
      'Backend Python (FastAPI) avec tâches durables de génération et gestion de files',
      'Base PostgreSQL avec recherche vectorielle (pgvector) reliée aux extraits de cours',
      'Cascade multi-modèles (API distantes et modèles locaux via llama.cpp) avec validation JSON stricte',
      'Frontend SvelteKit avec éditeur, lecteurs de fiches, quiz FSRS et carte des notions'
    ],
    demonstrations: [
      'Validation continue par suite de tests backend et contrôles en navigateur réel',
      'Vérification scientifique des laboratoires guidés avec modèles cloud et locaux',
      'Démonstration publique accessible sans création de compte'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'SvelteKit', 'FSRS', 'Docker', 'llama.cpp'],
    links: [
      { label: 'Découvrir Noépora', url: 'https://learn.noepora.fr/decouvrir' }
    ]
  },
  {
    id: 'humuscope',
    title: 'Humuscope',
    subtitle: 'Un composteur connecté pour explorer la vie du sol',
    category: 'iot',
    status: 'deployed',
    description: 'Composteur universitaire équipé de capteurs et d\'une transmission autonome LoRaWAN, accompagné du site pédagogique interactif en pixel art sur humuscope.noepora.fr.',
    problem: 'Un composteur collectif évolue lentement et il est difficile à l\'œil nu de suivre son activité biologique ou de l\'expliquer simplement aux visiteurs.',
    solution: 'Boîtier étanche à deux faces alimenté par batterie LiFePO4 et panneau solaire, collecte automatique de mesures et interface publique en deux niveaux de lecture (Simple et Scientifique).',
    architecture: [
      'ESP32 principal : préchauffe capteurs gaz MOS, lectures I2C (SCD41, AHT20), UART (CO, H2S) et RS485 Modbus',
      'Liaison UART avec CRC vers Heltec WiFi LoRa 32 V3 en LoRaWAN EU868 (TTN -> MQTT)',
      'Backend FastAPI + SQLite et frontend Svelte 5 sur humuscope.noepora.fr'
    ],
    demonstrations: [
      'Séparation des trames de banc d\'établi et des relevés terrain (juillet-août 2026)',
      'Suivi cohérent de l\'assèchement sur plusieurs capteurs indépendants',
      'Affichage strict des données manquantes sans valeur artificielle'
    ],
    technologies: ['ESP32', 'Heltec LoRa 32 V3', 'LoRaWAN', 'TTN / MQTT', 'SCD41', 'RS485', 'FastAPI', 'SQLite', 'Svelte'],
    links: [
      { label: 'Explorer Humuscope', url: 'https://humuscope.noepora.fr' }
    ]
  },
  {
    id: 'insect-vision',
    title: 'SmartHive & vision des insectes',
    subtitle: 'De la ruche connectée à la vision par ordinateur appliquée aux insectes',
    category: 'bio',
    status: 'prototype',
    description: 'SmartHive associe une ruche instrumentée à la détection vidéo d\'abeilles et de frelons (FabLab Valrose). En parallèle, travaux au Centre Inria d\'Université Côte d\'Azur (équipe STARS) sur la détection, le suivi vidéo, la réidentification et l\'auto-entraînement.',
    problem: 'Surveiller une ruche ou analyser des pollinisateurs sur vidéo demande des modèles fiables sous de nouvelles conditions de lumière et sur différents sites sans réannoter chaque jeu de données.',
    solution: 'Chaîne SmartHive temps réel (LoRaWAN + YOLO/NCNN sur Raspberry Pi) et protocoles Inria reproductibles séparant strictement mise au point et validation externe.',
    architecture: [
      'SmartHive : capteurs LoRaWAN (ABP -> TTN -> MQTT), backend FastAPI + WebSocket, inférence YOLO/NCNN sur Raspberry Pi 4, UI SvelteKit',
      'Inria (équipe STARS) : modules séparés pour détection, suivi temporel, réidentification et sélection active'
    ],
    demonstrations: [
      'SmartHive : entraînement sur Bee-Hornet-Detect et export quantifié NCNN/TFLite INT8',
      'Inria : protocoles multi-graines et comparaisons contrôlées inter-sites (données internes confidentielles)'
    ],
    technologies: ['Python', 'PyTorch', 'YOLO / NCNN', 'OpenCV', 'FastAPI', 'SvelteKit', 'LoRaWAN'],
    links: [
      { label: 'Voir SmartHive sur GitHub', url: 'https://github.com/CypreRask/Ruche-public' }
    ]
  },
  {
    id: 'sismographe',
    title: 'Sismographe universitaire',
    subtitle: 'Remettre en service un instrument scientifique',
    category: 'iot',
    status: 'deployed',
    description: 'Projet collectif de L2 consacré à la remise en état d\'un sismographe universitaire, depuis le diagnostic matériel et la chaîne d\'acquisition jusqu\'à la visualisation et la transmission des mesures.',
    problem: 'Instrument non opérationnel et mesures difficiles à consulter pour l\'enseignement.',
    solution: 'Remise en état de la chaîne d\'acquisition physique sur Raspberry Pi et transmission vers le serveur universitaire.',
    architecture: [
      'Remise en état matériel et chaîne d\'acquisition',
      'Déploiement sur Raspberry Pi',
      'Transmission vers le serveur universitaire (hors réseau campus actuellement inaccessible)'
    ],
    demonstrations: [
      'Capteur remis en service et courbe d\'acquisition en direct'
    ],
    technologies: ['Instrumentation', 'Raspberry Pi', 'Électronique', 'Acquisition'],
    links: []
  },
  {
    id: 'neurone',
    title: 'Maquette Neurone',
    subtitle: 'Une maquette interactive pour la Semaine du Cerveau',
    category: 'bio',
    status: 'deployed',
    description: 'Conception au FabLab Valrose d\'une maquette de neurone imprimée en 3D avec dendrites aimantées, électronique intégrée et visualisation des signaux sur interface web, utilisée lors de la Semaine du Cerveau.',
    problem: 'Rendre tangible le fonctionnement d\'un neurone et la sommation des signaux pour le grand public.',
    solution: 'Maquette imprimée en 3D avec dendrites magnétiques, électronique interne du soma sur Arduino/C++ et interface web temps réel.',
    architecture: [
      'Modélisation et impression 3D du soma et des dendrites aimantées',
      'Électronique interne du soma et microcontrôleur Arduino / C++',
      'Interface web de visualisation temps réel'
    ],
    demonstrations: [
      'Ateliers interactifs en conditions réelles lors de la Semaine du Cerveau'
    ],
    technologies: ['Électronique', 'Modélisation 3D', 'Arduino / C++', 'Interface Web'],
    links: []
  },
  {
    id: 'pythia-midas',
    title: 'Pythia & Héphaïstos / MIDAS',
    subtitle: 'Outils personnels : assistant IA local et suivi patrimonial',
    category: 'systems',
    status: 'wip',
    isSensitive: true,
    description: 'Projets personnels en dépôts privés : Pythia & Héphaïstos (assistant local vocal et visuel sous llama.cpp et ESP32-S3/ESP32-CAM) et MIDAS (application locale de suivi patrimonial et simulations quantitatives).',
    problem: 'Expérimenter des assistants locaux multi-modaux et des outils d\'analyse financière ajustée à l\'inflation sur des données privées.',
    solution: 'Pipelines locaux Python, llama.cpp, FastAPI et SvelteKit dédiés à un usage personnel.',
    architecture: [
      'Pythia & Héphaïstos : Python, llama.cpp, enceinte ESP32-S3 et caméra ESP32-CAM',
      'MIDAS : FastAPI, SvelteKit, méthodes de prévision ML et LLM'
    ],
    demonstrations: [
      'Dépôts et données maintenus privés'
    ],
    technologies: ['Python', 'llama.cpp', 'ESP32-S3', 'FastAPI', 'SvelteKit', 'Machine Learning'],
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
    description: 'Autonomie solaire, batterie LiFePO4 et mise en veille',
    color: '#f59e0b',
    projectIds: ['humuscope', 'insect-vision', 'sismographe']
  },
  {
    id: 'sensors',
    label: 'Capteurs',
    icon: 'Activity',
    description: 'Acquisition I2C, UART, RS485 et instrumentation physique',
    color: '#10b981',
    projectIds: ['humuscope', 'insect-vision', 'sismographe', 'neurone']
  },
  {
    id: 'network',
    label: 'Réseau',
    icon: 'Radio',
    description: 'LoRaWAN EU868, TTN et MQTT',
    color: '#3b82f6',
    projectIds: ['humuscope', 'insect-vision']
  },
  {
    id: 'backend',
    label: 'Backend/API',
    icon: 'Server',
    description: 'FastAPI, PostgreSQL/pgvector, SQLite et WebSocket',
    color: '#8b5cf6',
    projectIds: ['noepora', 'humuscope', 'insect-vision', 'pythia-midas']
  },
  {
    id: 'data',
    label: 'Data/IA/Vision',
    icon: 'Brain',
    description: 'Vision par ordinateur (PyTorch/YOLO), modèles locaux et vérification',
    color: '#ec4899',
    projectIds: ['noepora', 'humuscope', 'insect-vision', 'pythia-midas']
  },
  {
    id: 'interface',
    label: 'Interface',
    icon: 'Monitor',
    description: 'SvelteKit, React et visualisation pédagogique',
    color: '#06b6d4',
    projectIds: ['noepora', 'humuscope', 'insect-vision', 'neurone', 'pythia-midas']
  }
];

// ============================================
// SKILLS DATA
// ============================================

export const skills: Skill[] = [
  {
    id: 'bio',
    label: 'Biologie et expérimentation',
    icon: 'Dna',
    description: 'Conception de dispositifs et de méthodes pour observer, mesurer et analyser des phénomènes biologiques.'
  },
  {
    id: 'vision',
    label: 'Vision par ordinateur',
    icon: 'Eye',
    description: 'Détection, suivi et réidentification d\'objets sur vidéo en Python et PyTorch, évaluations comparatives et analyse des limites expérimentales.'
  },
  {
    id: 'hardware',
    label: 'Électronique et systèmes embarqués',
    icon: 'Cpu',
    description: 'Prototypage de dispositifs de mesure, intégration de capteurs, communication sans fil et acquisition sur ESP32, Arduino et Raspberry Pi.'
  },
  {
    id: 'software',
    label: 'Développement logiciel et données',
    icon: 'Code',
    description: 'Développement d\'applications web complètes, de leurs interfaces aux services backend, stockage et pipelines de données.'
  },
  {
    id: 'ai',
    label: 'Intelligence artificielle',
    icon: 'Compass',
    description: 'Intégration de modèles locaux (llama.cpp) et distants, expérimentation de pipelines de génération et contrôles de fiabilité.'
  },
  {
    id: 'fablab',
    label: 'Impression 3D et prototypage',
    icon: 'Layers',
    description: 'Conception CAO, fabrication additive, intégration électronique et accompagnement de projets au FabLab Valrose.'
  }
];

// ============================================
// HIGHLIGHTS DATA
// ============================================

export const highlights = [
  {
    id: 'bio-info',
    title: 'Bio-informatique · L3',
    subtitle: 'Université Côte d\'Azur',
    description: 'Licence Sciences de la Vie, parcours Bio-informatique à Nice : biologie, génomique, bio-informatique et programmation.',
    icon: 'Dna'
  },
  {
    id: 'inria-stars',
    title: 'Inria · Équipe STARS',
    subtitle: 'Vision par ordinateur',
    description: 'Stage d\'avril à août 2026 puis collaboration extérieure depuis septembre 2026 sur la vision appliquée aux abeilles et insectes.',
    icon: 'Eye'
  },
  {
    id: 'web-iot',
    title: 'Web & IoT',
    subtitle: 'Démos & capteurs',
    description: 'Des applications web déployées (Noépora, Humuscope) aux prototypes matériels au FabLab Valrose et pour la Mission Éco-Responsable.',
    icon: 'Cpu'
  }
];

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo = {
  name: 'Mathis Steinmann',
  title: 'Étudiant en L3 Bio-informatique',
  subtitle: 'Université Côte d\'Azur (Nice)',
  tagline: 'Je développe des projets à la croisée de la biologie, de l\'informatique et de l\'électronique. Vision par ordinateur, intelligence artificielle, capteurs, applications web ou impression 3D : j\'aime autant comprendre un phénomène que construire les outils permettant de l\'étudier.',
  location: 'Nice, France',
  email: 'mathis.steinmann@outlook.fr',
  github: 'github.com/CypreRask',
  linkedin: 'linkedin.com/in/steinmann-mathis',
  availability: 'Disponible pour échanger autour d\'un projet scientifique, d\'une collaboration ou d\'un stage'
};

export const heroStats = [
  { value: 'Bio-info · L3', label: 'Université Côte d\'Azur' },
  { value: 'Inria · STARS', label: 'Vision par ordinateur' },
  { value: 'Web & IoT', label: 'Démos & capteurs' }
];

// ============================================
// NAVIGATION
// ============================================

export const navItems = [
  { label: 'Projets', href: '#projects' },
  { label: 'Savoir-faire', href: '#skills' },
  { label: 'Parcours', href: '#background' },
  { label: 'Contact', href: '#contact' }
];
