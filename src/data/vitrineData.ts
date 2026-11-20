export type Lang = 'fr' | 'en';
export type CaseSlug = 'noepora' | 'humuscope' | 'insect-vision';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface VisualAsset {
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface ProjectLink {
  label: LocalizedText;
  url: string;
  kind: 'demo' | 'github' | 'external';
}

export interface MainProjectCase {
  slug: CaseSlug;
  tag: LocalizedText;
  statusLabel: LocalizedText;
  glow: 'chlorophyll' | 'amber';
  title: LocalizedText;
  subtitle: LocalizedText;
  cardSummary: LocalizedText;
  cover: VisualAsset;
  gallery: VisualAsset[];
  links: ProjectLink[];
  story: {
    problem: LocalizedText;
    context: LocalizedText;
    role: LocalizedText;
    built: LocalizedText;
    workingAndLimits: LocalizedText;
  };
  technical: {
    optionsAndChoices: LocalizedText;
    architecture: LocalizedText[];
    testsAndMeasures: LocalizedText;
    difficultiesAndLimits: LocalizedText;
    stack: string[];
  };
}

export interface SecondaryWork {
  id: string;
  domain: 'software' | 'hardware' | 'pedagogy';
  statusLabel: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  highlights?: LocalizedText[];
  stack?: string[];
  image?: VisualAsset;
  gallery?: VisualAsset[];
  links: ProjectLink[];
}

export interface SkillPillar {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  icon: 'dna' | 'eye' | 'cpu' | 'code' | 'compass';
}

export interface TimelineItem {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  place: LocalizedText;
  detail: LocalizedText;
}

const BASE = import.meta.env.BASE_URL;

export const copy = {
  fr: {
    skip: 'Aller au contenu principal',
    nav: {
      brandSub: 'L3 Bio-informatique',
      projects: 'Projets',
      skills: 'Savoir-faire',
      background: 'Parcours',
      contact: 'Contact',
    },
    hero: {
      badge: 'L3 Sciences de la Vie · Bio-informatique · Université Côte d’Azur',
      option: 'Nice, France',
      name: 'Mathis Steinmann',
      lead: 'Je développe des projets à la croisée de la biologie, de l’informatique et de l’électronique. Vision par ordinateur, intelligence artificielle, capteurs, applications web ou impression 3D : j’aime autant comprendre un phénomène que construire les outils permettant de l’étudier.',
      ctaProjects: 'Découvrir les projets',
      ctaGithub: 'GitHub',
      ctaLinkedin: 'LinkedIn',
      showcaseLabel: 'Aperçu des réalisations',
      openProject: 'Lire l’histoire',
    },
    projects: {
      title: 'Projets principaux',
      intro: 'Applications web, capteurs de terrain et vision par ordinateur.',
      readStory: 'Lire l’étude de cas',
      secondaryTitle: 'Autres réalisations',
      secondaryIntro: 'Prototypes, outils personnels et projets collectifs menés en parallèle.',
      filters: {
        all: 'Tous',
        software: 'Logiciels et IA',
        hardware: 'Capteurs et terrain',
        pedagogy: 'Pédagogie',
      },
    },
    caseView: {
      back: 'Retour à la vitrine',
      copyLink: 'Copier le lien',
      copied: 'Lien copié',
      tabStory: 'L’histoire du projet',
      tabTech: 'Détails techniques',
      storyLabels: {
        problem: 'Pourquoi ce projet',
        context: 'Contexte',
        role: 'Mon rôle',
        built: 'Ce qui existe aujourd’hui',
        workingAndLimits: 'Bilan et limites actuelles',
      },
      techLabels: {
        choices: 'Choix techniques retenus',
        architecture: 'Architecture',
        tests: 'Ce qui a été testé',
        limits: 'Difficultés et réserves techniques',
        stack: 'Outils et composants',
      },
    },
    skills: {
      title: 'Savoir-faire',
      intro: 'De la biologie expérimentale aux systèmes autonomes et aux applications web.',
    },
    background: {
      title: 'Parcours',
      intro: 'Formation en cours à Nice, recherche appliquée, et mission universitaire.',
    },
    contact: {
      title: 'Contact',
      intro: 'Pour échanger autour d’un projet scientifique, d’une collaboration ou d’un stage.',
      location: 'Nice, France',
      footer: 'Nice, France',
    },
  },
  en: {
    skip: 'Skip to main content',
    nav: {
      brandSub: 'BSc Bioinformatics',
      projects: 'Projects',
      skills: 'Practice',
      background: 'Background',
      contact: 'Contact',
    },
    hero: {
      badge: 'BSc Life Sciences · Bioinformatics · Université Côte d’Azur',
      option: 'Nice, France',
      name: 'Mathis Steinmann',
      lead: 'I build projects at the crossroads of biology, computer science, and electronics. Computer vision, artificial intelligence, sensors, web applications, or 3D printing: I enjoy understanding a phenomenon as much as building the tools to study it.',
      ctaProjects: 'Explore projects',
      ctaGithub: 'GitHub',
      ctaLinkedin: 'LinkedIn',
      showcaseLabel: 'Featured work preview',
      openProject: 'Read story',
    },
    projects: {
      title: 'Featured projects',
      intro: 'Web applications, field instrumentation, and computer vision.',
      readStory: 'Read case study',
      secondaryTitle: 'Other work',
      secondaryIntro: 'Personal tools, group projects, and ongoing prototypes.',
      filters: {
        all: 'All',
        software: 'Software & AI',
        hardware: 'Sensors & field',
        pedagogy: 'Science outreach',
      },
    },
    caseView: {
      back: 'Back to portfolio',
      copyLink: 'Copy link',
      copied: 'Link copied',
      tabStory: 'Project story',
      tabTech: 'Technical details',
      storyLabels: {
        problem: 'The problem',
        context: 'Context',
        role: 'My role',
        built: 'What exists today',
        workingAndLimits: 'Current results & limits',
      },
      techLabels: {
        choices: 'Key technical decisions',
        architecture: 'Architecture',
        tests: 'What was tested',
        limits: 'Difficulties & technical caveats',
        stack: 'Tools & hardware',
      },
    },
    skills: {
      title: 'Skills',
      intro: 'From experimental biology to autonomous hardware and live web applications.',
    },
    background: {
      title: 'Background',
      intro: 'Undergraduate studies in Nice, research internship and collaboration, and campus work.',
    },
    contact: {
      title: 'Contact',
      intro: 'Available to discuss scientific projects, collaborations, or internships.',
      location: 'Nice, France',
      footer: 'Nice, France',
    },
  },
} as const;

export const contactLinks = {
  email: 'mathis.steinmann@outlook.fr',
  github: 'https://github.com/CypreRask',
  githubLabel: 'github.com/CypreRask',
  linkedin: 'https://www.linkedin.com/in/steinmann-mathis/',
  linkedinLabel: 'Mathis Steinmann',
};

export const mainProjects: MainProjectCase[] = [
  {
    slug: 'noepora',
    tag: { fr: 'Application web', en: 'Web platform' },
    statusLabel: { fr: 'En ligne · Démo ouverte', en: 'Live · Open demo' },
    glow: 'chlorophyll',
    title: { fr: 'Noépora', en: 'Noépora' },
    subtitle: {
      fr: 'Apprendre et réviser à partir de ses propres cours, avec l’IA',
      en: 'Learning and revising from your own lectures with AI',
    },
    cardSummary: {
      fr: 'Une application de révision qui transforme des documents universitaires en fiches structurées, questions d’entraînement et cartes interactives de notions. L’accent est mis sur la fidélité aux sources, la couverture des cours et la vérification des contenus générés.',
      en: 'A study app that turns university lectures into structured sheets, practice quizzes, and interactive concept maps, with a focus on source fidelity, syllabus coverage, and output verification.',
    },
    cover: {
      src: `${BASE}images/noepora-live.jpg`,
      width: 1280,
      height: 800,
      alt: {
        fr: 'Page publique de Noépora montrant une question interactive de neurophysiologie',
        en: 'Noépora public demo page displaying an interactive neurophysiology question',
      },
      caption: {
        fr: 'Aperçu en ligne de la démonstration publique sur learn.noepora.fr/decouvrir.',
        en: 'Live public walkthrough at learn.noepora.fr/decouvrir.',
      },
    },
    gallery: [
      {
        src: `${BASE}images/noepora-fiche.jpg`,
        width: 960,
        height: 1425,
        alt: {
          fr: 'Comparaison entre un cours de neurophysiologie et la fiche générée avec ses renvois de lignes',
          en: 'Lecture excerpt alongside the generated study sheet and line citations',
        },
        caption: {
          fr: 'Planche I : chaque bloc de la fiche reste relié aux lignes exactes du cours.',
          en: 'Board I: study sheet blocks remain anchored to the original lecture lines.',
        },
      },
      {
        src: `${BASE}images/noepora-carte.jpg`,
        width: 960,
        height: 975,
        alt: {
          fr: 'Questions de révision et carte interactive des notions dans Noépora',
          en: 'Revision quiz and interactive concept map in Noépora',
        },
        caption: {
          fr: 'Planche II : quiz relié aux notions et carte d’ensemble pour repérer les manques.',
          en: 'Board II: notion-linked questions paired with the concept map.',
        },
      },
    ],
    links: [
      {
        label: { fr: 'Découvrir Noépora', en: 'Discover Noépora' },
        url: 'https://learn.noepora.fr/decouvrir',
        kind: 'demo',
      },
    ],
    story: {
      problem: {
        fr: 'Les outils de cartes mémoire demandent beaucoup de saisie manuelle et isolent les définitions du reste du cours. À l’inverse, demander directement à une IA de générer des fiches ou des schémas produit vite des hors-sujets et des erreurs scientifiques discrètes.',
        en: 'Classic flashcard tools require tedious manual entry and isolate facts from lecture flow. Asking an AI directly for study sheets or interactive labs often produces off-syllabus claims and subtle calculation errors.',
      },
      context: {
        fr: 'Projet personnel démarré en licence pour mes propres révisions en biologie et physique, devenu une application web complète (anciennement SmartRecall) avec une démonstration ouverte sans création de compte. Le nom « Noépora » est un mot composé à partir du grec (noûs / noêsis pour l’esprit qui comprend et poros pour le passage ou le chemin, en opposition à l’aporie).',
        en: 'Personal project started during my undergraduate studies for biology and physics revision, grown into a deployed web platform (formerly SmartRecall) with an account-free public demo. The name Noépora is coined from Greek roots (nous / noesis for mind and understanding, and poros for a path or passage, in contrast to aporia).',
      },
      role: {
        fr: 'Conception de l’application, choix de la méthode pédagogique, mise en place des contrôles de fiabilité sur les modèles et déploiement en ligne.',
        en: 'Product design, learning workflow architecture, model reliability audits, and production deployment.',
      },
      built: {
        fr: 'Une plateforme complète qui découpe les documents importés, génère fiches et questions, suit les révisions dans le temps, affiche une carte des notions et propose une démonstration publique en trois planches interactives.',
        en: 'A full web application that ingests lecture files, builds source-anchored sheets and quizzes, schedules reviews, draws a concept map, and offers an open 3-board walkthrough.',
      },
      workingAndLimits: {
        fr: 'La plateforme est en ligne et utilisable au quotidien, tandis que le code source reste privé. Les liens de la carte des notions reposent encore sur la proximité statistique dans le cours plutôt que sur une validation par un enseignant.',
        en: 'The app runs live in production while its source code remains private. Concept map edges currently reflect statistical co-occurrence in lecture notes rather than instructor-certified prerequisites.',
      },
    },
    technical: {
      optionsAndChoices: {
        fr: 'Les modèles de langage restent fiables pour structurer un cours et extraire des notions, mais la génération libre de code scientifique introduit des erreurs d’unités ou de physique difficiles à détecter. Les laboratoires interactifs s’appuient donc sur des noyaux de calcul déterministes vérifiés, que des modèles cloud ou locaux (Gemma et Qwen via llama.cpp) sélectionnent et paramètrent en sortie structurée.',
        en: 'Language models handle lecture structuring well, whereas unconstrained generation of scientific simulation code introduces subtle unit or physics bugs. Interactive labs therefore run on verified deterministic calculation kernels that cloud APIs or local models (Gemma and Qwen via llama.cpp) select and parameterize through structured schemas.',
      },
      architecture: [
        {
          fr: 'Backend Python (FastAPI) avec tâches durables de génération et gestion de files.',
          en: 'Python FastAPI backend with durable background generation tasks and slot locking.',
        },
        {
          fr: 'Base PostgreSQL avec recherche vectorielle (pgvector) pour relier définitions et extraits de cours.',
          en: 'PostgreSQL + pgvector database keeping definitions anchored to source line spans.',
        },
        {
          fr: 'Cascade multi-modèles (API distantes et modèles locaux llama.cpp) avec validation stricte des sorties JSON.',
          en: 'Multi-model cascade (remote APIs and local llama.cpp) with strict JSON schema validation.',
        },
        {
          fr: 'Frontend SvelteKit avec éditeur, lecteurs de fiches, quiz FSRS et carte des notions.',
          en: 'SvelteKit frontend with editor, FSRS scheduling, diagnostic quizzes, and concept graph.',
        },
      ],
      testsAndMeasures: {
        fr: 'Validation continue par suite de tests backend, contrôles en navigateur réel sur les parcours clés et vérification scientifique des laboratoires guidés avec modèles cloud et modèles locaux.',
        en: 'Continuous validation through automated backend test suites, real-browser checks on key flows, and scientific verification of guided labs across both cloud and local models.',
      },
      difficultiesAndLimits: {
        fr: 'Normalisation des formules mathématiques (LaTeX), fusion des notions proches dans la carte et cadrage strict des schémas JSON sur les longs documents.',
        en: 'Normalizing LaTeX math formatting, merging duplicate concepts in the graph, and enforcing strict JSON schemas on long documents.',
      },
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'SvelteKit', 'FSRS', 'Docker', 'llama.cpp'],
    },
  },
  {
    slug: 'humuscope',
    tag: { fr: 'Terrain & Pédagogie', en: 'Field & Outreach' },
    statusLabel: { fr: 'Site public + prototype terrain', en: 'Public site + field prototype' },
    glow: 'amber',
    title: { fr: 'Humuscope', en: 'Humuscope' },
    subtitle: {
      fr: 'Un composteur connecté pour explorer la vie du sol',
      en: 'A connected composter to explore soil life',
    },
    cardSummary: {
      fr: 'Un composteur universitaire équipé de capteurs et d’un système de transmission autonome, accompagné d’un univers pédagogique interactif en pixel art. Les mesures permettent de suivre l’évolution du compost et de mieux comprendre les phénomènes biologiques qui s’y déroulent.',
      en: 'A university composter equipped with sensors and an autonomous telemetry system, paired with an interactive pixel-art learning world to track compost evolution and soil biology.',
    },
    cover: {
      src: `${BASE}images/humuscope-scene.jpg`,
      width: 1280,
      height: 800,
      alt: {
        fr: 'Scène nocturne en pixel art d’Humuscope montrant le composteur, les plantes et le sous-sol',
        en: 'Humuscope night pixel-art scene showing the composter, plants, and soil cross-section',
      },
      caption: {
        fr: 'Interface interactive sur humuscope.noepora.fr (mode Simple et mode Scientifique).',
        en: 'Interactive scene at humuscope.noepora.fr (Simple and Scientific reading modes).',
      },
    },
    gallery: [
      {
        src: `${BASE}images/humuscope-capteurs.webp`,
        width: 960,
        height: 1274,
        alt: {
          fr: 'Face capteurs du boîtier Humuscope protégée par des membranes respirantes',
          en: 'Sensor face of the Humuscope enclosure with protective membranes',
        },
        caption: {
          fr: 'Face capteurs du boîtier prototype avec membranes de protection contre l’humidité.',
          en: 'Prototype sensor chamber with moisture-protective membranes.',
        },
      },
      {
        src: `${BASE}images/humuscope-electronique.webp`,
        width: 960,
        height: 1274,
        alt: {
          fr: 'Face électronique sèche montrant les cartes radio et de contrôle câblées sur plaque',
          en: 'Dry electronics side showing the microcontroller, radio module, and hand wiring',
        },
        caption: {
          fr: 'Face sèche : électronique d’acquisition, gestion batterie et module radio longue portée.',
          en: 'Dry side: sensing controller, power regulation, and long-range radio module.',
        },
      },
    ],
    links: [
      {
        label: { fr: 'Explorer Humuscope', en: 'Explore Humuscope' },
        url: 'https://humuscope.noepora.fr',
        kind: 'demo',
      },
    ],
    story: {
      problem: {
        fr: 'Un composteur collectif évolue lentement et il est difficile à l’œil nu de savoir s’il manque d’eau, s’il travaille activement ou pourquoi il ralentit. Il fallait un moyen à la fois de mesurer ces variations et de les expliquer simplement aux visiteurs.',
        en: 'A campus composter changes slowly, and visual inspection alone cannot tell whether it is too dry, actively decomposing, or dormant. We needed both real measurements and an engaging way to explain soil biology to visitors.',
      },
      context: {
        fr: 'Projet personnel démarré lors de mes contrats étudiants pour la Mission Éco-Responsable d’Université Côte d’Azur, puis refondu matériellement et accompagné du site public Humuscope.',
        en: 'Personal project initiated during student contracts with Université Côte d’Azur’s Eco-Mission, then rebuilt on the hardware side and published alongside the Humuscope web platform.',
      },
      role: {
        fr: 'Conception et soudure du boîtier de capteurs, programmation embarquée, mise en place de la collecte de données et conception éditoriale/scientifique du site.',
        en: 'Enclosure design and soldering, embedded firmware, data pipeline, and scientific/educational design of the web app.',
      },
      built: {
        fr: 'Un boîtier étanche à deux faces alimenté par batterie et panneau solaire, une collecte automatique de données, et le site humuscope.noepora.fr proposant cinq activités ludiques et deux niveaux de lecture (Simple et Scientifique).',
        en: 'A two-sided weather-resistant sensor box powered by battery and solar panel, automated telemetry ingestion, and humuscope.noepora.fr featuring five educational activities and two reading levels.',
      },
      workingAndLimits: {
        fr: 'Les relevés terrain ont confirmé le suivi cohérent de l’assèchement sur plusieurs capteurs indépendants. L’analyse croisée des courbes a aussi montré que la sonde thermique mesurait l’air du boîtier plutôt que le cœur du compost : le site s’interdit donc d’annoncer une « chaleur du compost » tant que la sonde n’est pas enfoncée dedans.',
        en: 'Field telemetry tracked gradual drying consistently across multiple independent sensor channels. Cross-checking the curves also showed that the thermal probe measured air inside the enclosure rather than the compost core, so the public site avoids claiming core compost heat until the probe is repositioned.',
      },
    },
    technical: {
      optionsAndChoices: {
        fr: 'Séparation physique sur une plaque à pastilles entre une chambre capteurs protégée par 16 pastilles ePTFE et une face sèche dédiée au contrôleur, à la radio et à l’alimentation. Côté logiciel, règle stricte : une donnée absente ou invalide s’affiche « — » et n’est jamais remplacée par zéro ni par une note de santé artificielle.',
        en: 'Two-sided perfboard layout separating a chamber protected by 16 ePTFE membranes from dry control electronics. On the web UI, missing or invalid channels render as "—" and never fall back to zero or invented health scores.',
      },
      architecture: [
        {
          fr: 'ESP32 principal : préchauffe de 20 min des capteurs gaz MOS, lectures I2C (SCD41, AHT20), UART (CO, H2S) et RS485 Modbus (sonde sol), puis mise en veille profonde.',
          en: 'Main ESP32: 20-min MOS gas sensor preheat, I2C (SCD41, AHT20), UART (CO, H2S), and RS485 Modbus (soil probe) reads, followed by deep sleep.',
        },
        {
          fr: 'Liaison UART cadrée avec CRC vers un module Heltec WiFi LoRa 32 V3 en LoRaWAN EU868 (The Things Network -> MQTT).',
          en: 'CRC-framed UART link to a Heltec WiFi LoRa 32 V3 node over LoRaWAN EU868 (TTN -> MQTT).',
        },
        {
          fr: 'Alimentation batterie LiFePO4 12,8 V 12 Ah avec panneau solaire externe ; backend FastAPI + SQLite et frontend Svelte 5.',
          en: '12.8 V 12 Ah LiFePO4 battery with external solar panel; FastAPI + SQLite backend and Svelte 5 frontend.',
        },
      ],
      testsAndMeasures: {
        fr: 'Séparation explicite des trames de banc d’établi et des mesures terrain (juillet-août 2026) pour vérifier les tendances d’humidité, de conductivité et de CO2, complétée par des tests automatisés sur l’application web.',
        en: 'Strict separation between bench-test frames and valid field telemetry (July-Aug 2026) to validate moisture, conductivity, and CO2 trends, alongside automated frontend and backend tests.',
      },
      difficultiesAndLimits: {
        fr: 'Décalage thermique systématique tant que la sonde reste dans le boîtier plutôt qu’au cœur du tas, sensibilité des capteurs gaz MOS à l’humidité, absence de mesure directe du rapport C/N et dépôt logiciel maintenu privé.',
        en: 'Systematic thermal offset while the probe sits in the enclosure rather than the compost core, humidity sensitivity of MOS gas sensors, no direct C/N measurement, and private platform repository.',
      },
      stack: ['ESP32', 'Heltec LoRa 32 V3', 'LoRaWAN', 'TTN / MQTT', 'SCD41', 'RS485', 'FastAPI', 'SQLite', 'Svelte'],
    },
  },
  {
    slug: 'insect-vision',
    tag: { fr: 'Vision & Recherche', en: 'Vision & Research' },
    statusLabel: { fr: 'Prototype public · Recherche Inria', en: 'Public prototype · Inria work' },
    glow: 'chlorophyll',
    title: { fr: 'SmartHive & vision des insectes', en: 'SmartHive & insect vision' },
    subtitle: {
      fr: 'De la ruche connectée à la vision par ordinateur appliquée aux insectes',
      en: 'From a connected beehive to computer vision applied to insects',
    },
    cardSummary: {
      fr: 'SmartHive associe une ruche instrumentée à un système de détection d’abeilles et de frelons. En parallèle, mes travaux à l’Inria portent sur des méthodes de détection, de suivi vidéo, de réidentification et d’auto-entraînement, évaluées sur plusieurs jeux de données.',
      en: 'SmartHive pairs an instrumented beehive with honeybee and hornet detection. In parallel, my work at Inria focuses on detection, video tracking, re-identification, and self-training methods evaluated across multiple datasets.',
    },
    cover: {
      src: `${BASE}images/ruche-abeilles.jpg`,
      width: 1920,
      height: 1080,
      alt: {
        fr: 'Entrée de la ruche connectée FabLab UniCA avec une vingtaine d’abeilles en activité',
        en: 'FabLab UniCA connected beehive entrance with honeybees in activity',
      },
      caption: {
        fr: 'Planche d’envol de la ruche instrumentée (FABLAB UniCA).',
        en: 'Landing board of the instrumented beehive (FABLAB UniCA).',
      },
    },
    gallery: [
      {
        src: `${BASE}images/smarthive-ruche.jpg`,
        width: 1600,
        height: 1204,
        alt: {
          fr: 'Prototype matériel de ruche connectée issu du dépôt public SmartHive',
          en: 'Instrumented smart-hive hardware prototype from the public SmartHive repository',
        },
        caption: {
          fr: 'Prototype matériel SmartHive (dépôt public CypreRask/Ruche-public au FabLab).',
          en: 'SmartHive hardware prototype (public CypreRask/Ruche-public repo at FabLab).',
        },
      },
    ],
    links: [
      {
        label: { fr: 'Voir SmartHive sur GitHub', en: 'View SmartHive on GitHub' },
        url: 'https://github.com/CypreRask/Ruche-public',
        kind: 'github',
      },
    ],
    story: {
      problem: {
        fr: 'Surveiller une ruche ou analyser le comportement de pollinisateurs sur vidéo demande des modèles fiables sous de nouvelles conditions d’éclairage et sur différents sites, sans réannoter chaque jeu d’images à la main.',
        en: 'Monitoring a beehive or studying pollinator behavior in video requires models that hold up across new sites and lighting conditions without re-annotating every dataset from scratch.',
      },
      context: {
        fr: 'Travail démarré au FabLab Valrose sur SmartHive (projet pédagogique repris sous l’encadrement de Didier Orlandi), puis poursuivi au Centre Inria d’Université Côte d’Azur dans l’équipe STARS (encadrement : François Brémond), en stage d’avril à août 2026 puis comme collaborateur extérieur depuis septembre 2026.',
        en: 'Started at FabLab Valrose on SmartHive (supervised by Didier Orlandi), then continued at Centre Inria d’Université Côte d’Azur in the STARS team (supervised by François Brémond), through an internship from April to August 2026 and as external collaborator since September 2026.',
      },
      role: {
        fr: 'Sur SmartHive : brique de détection vidéo d’abeilles et frelons et intégration temps réel. À l’Inria : méthodes de détection, suivi vidéo, réidentification, apprentissage actif et comparaisons sur plusieurs jeux de données.',
        en: 'On SmartHive: video detection pipeline for honeybees and hornets and real-time integration. At Inria: detection, tracking, re-identification, active learning, and comparative evaluations across multiple datasets.',
      },
      built: {
        fr: 'Dépôt public SmartHive (CypreRask/Ruche-public) réunissant détection abeilles/frelons, télémétrie de ruche et tableau de bord web. À l’Inria, chaîne logicielle interne pour le suivi vidéo, la sélection active et des protocoles comparatifs reproductibles.',
        en: 'Public SmartHive repo (CypreRask/Ruche-public) pairing bee and hornet detection, hive telemetry, and a web dashboard. At Inria, internal pipelines for video tracking, active selection, and reproducible comparative evaluation.',
      },
      workingAndLimits: {
        fr: 'Le code, les vidéos et les mesures internes du projet Inria sont confidentiels et ne sont pas diffusés ici. Sur SmartHive, la partie matérielle évolue pour gagner en autonomie sur batterie.',
        en: 'Code, datasets, and internal metrics from the Inria project remain confidential and are not published here. On SmartHive, the hardware setup is evolving for longer battery operation.',
      },
    },
    technical: {
      optionsAndChoices: {
        fr: 'Sur SmartHive : comparaison entre inférence serveur et quantification embarquée sur Raspberry Pi, avec piste de déclenchement acoustique pour éviter la vidéo continue. À l’Inria : séparation stricte entre données de mise au point et validation externe, en conservant toutes les comparaisons négatives comme positives.',
        en: 'On SmartHive: remote server inference compared with quantized Raspberry Pi execution, plus acoustic trigger ideas to reduce camera duty cycle. At Inria: strict split between tuning data and external validation, keeping negative as well as positive benchmark outcomes.',
      },
      architecture: [
        {
          fr: 'SmartHive : capteurs LoRaWAN (ABP -> TTN -> MQTT), backend FastAPI + WebSocket, inférence YOLO/NCNN (~5 FPS sur Raspberry Pi 4 en 320 px), interface SvelteKit.',
          en: 'SmartHive: LoRaWAN sensors (ABP -> TTN -> MQTT), FastAPI + WebSocket backend, YOLO/NCNN inference (~5 FPS on Raspberry Pi 4 at 320px), SvelteKit UI.',
        },
        {
          fr: 'Inria (équipe STARS) : modules séparés pour détection, suivi temporel, réidentification, sélection active et registre d’expériences multi-jeux de données.',
          en: 'Inria (STARS team): modular separation across detection, temporal tracking, re-identification, active selection, and multi-dataset experiment logs.',
        },
      ],
      testsAndMeasures: {
        fr: 'Sur SmartHive : entraînement sur jeu public Bee-Hornet-Detect et export en modèles quantifiés (NCNN/TFLite INT8) sur Raspberry Pi. À l’Inria : protocoles multi-graines et comparaisons contrôlées (apprentissage actif vs échantillonnage aléatoire, généralisation inter-sites).',
        en: 'On SmartHive: training on public Bee-Hornet-Detect data and quantized NCNN/TFLite INT8 deployment on Raspberry Pi. At Inria: multi-seed controlled comparisons (active learning vs random baselines, cross-site generalization).',
      },
      difficultiesAndLimits: {
        fr: 'Autonomie énergétique exigeante pour de la vidéo continue sur batterie, variations importantes de lumière en extérieur et confidentialité des données et résultats internes à l’Inria.',
        en: 'Battery power budget for continuous edge video, outdoor lighting variability, and confidentiality of Inria datasets and internal findings.',
      },
      stack: ['Python', 'PyTorch', 'YOLO / NCNN', 'OpenCV', 'FastAPI', 'SvelteKit', 'LoRaWAN'],
    },
  },
];

export const secondaryWorks: SecondaryWork[] = [
  {
    id: 'pythia',
    domain: 'software',
    statusLabel: { fr: 'En développement', en: 'In development' },
    title: { fr: 'Pythia & Héphaïstos', en: 'Pythia & Hephaistos' },
    subtitle: {
      fr: 'Un assistant IA local, vocal et visuel',
      en: 'A local, voice, and vision AI assistant',
    },
    summary: {
      fr: 'Développement d’un assistant personnel fonctionnant avec des modèles d’IA locaux, combinant dialogue vocal, utilisation d’outils et assistance au code. Le projet comprend également une enceinte connectée sur ESP32-S3 et l’expérimentation d’une caméra ESP32-CAM.',
      en: 'Personal assistant powered by local AI models, combining voice dialogue, tool use, and coding support, alongside an ESP32-S3 connected speaker and ESP32-CAM camera experiments.',
    },
    role: { fr: 'Projet personnel · Dépôt privé', en: 'Personal project · Private repo' },
    stack: ['Python', 'llama.cpp', 'ESP32-S3', 'ESP32-CAM'],
    links: [],
  },
  {
    id: 'midas',
    domain: 'software',
    statusLabel: { fr: 'Application locale · Données privées', en: 'Local app · Private data' },
    title: { fr: 'MIDAS', en: 'MIDAS' },
    subtitle: {
      fr: 'Suivi patrimonial, simulations et analyses quantitatives',
      en: 'Wealth tracking, simulations, and quantitative analysis',
    },
    summary: {
      fr: 'Application personnelle de suivi patrimonial réunissant comptes, placements, immobilier et devises. Elle permet d’analyser l’évolution d’un patrimoine, notamment en tenant compte de l’inflation, et sert de terrain d’expérimentation pour des méthodes de prévision combinant machine learning et modèles de langage.',
      en: 'Personal wealth-tracking app bringing together accounts, equities, real estate, and currencies. It tracks inflation-adjusted performance and serves as a testbed for experimental ML and LLM forecasting methods.',
    },
    role: { fr: 'Projet personnel · Approches prédictives expérimentales', en: 'Personal project · Experimental forecasting' },
    stack: ['FastAPI', 'SvelteKit', 'Machine Learning', 'LLM'],
    links: [],
  },
  {
    id: 'sismographe',
    domain: 'hardware',
    statusLabel: { fr: 'Projet collectif L2', en: 'Year-2 group project' },
    title: { fr: 'Sismographe universitaire', en: 'University seismograph' },
    subtitle: {
      fr: 'Remettre en service un instrument scientifique',
      en: 'Restoring a scientific instrument',
    },
    summary: {
      fr: 'Projet collectif de L2 consacré à la remise en état d’un sismographe universitaire, depuis le diagnostic matériel et la chaîne d’acquisition jusqu’à la visualisation et la transmission des mesures.',
      en: 'Second-year group project restoring a university seismograph, from hardware diagnostics and the acquisition chain to live visualization and data transmission.',
    },
    role: {
      fr: 'Diagnostic matériel et acquisition',
      en: 'Hardware repair and acquisition',
    },
    highlights: [
      {
        fr: 'Remise en état de la chaîne d’acquisition physique et transmission vers le serveur universitaire.',
        en: 'Physical acquisition chain repair and telemetry to the university server.',
      },
      {
        fr: 'Serveur universitaire (eftis.univ-cotedazur.fr/sismographe) actuellement inaccessible hors réseau campus.',
        en: 'Campus endpoint (eftis.univ-cotedazur.fr/sismographe) currently unreachable externally.',
      },
    ],
    stack: ['Instrumentation', 'Raspberry Pi', 'Électronique', 'Acquisition'],
    image: {
      src: `${BASE}images/sismographe.jpg`,
      width: 1104,
      height: 1472,
      alt: {
        fr: 'Sismographe vertical à ressort et bobine relié à l’interface d’acquisition sur PC',
        en: 'Vertical spring-and-coil seismograph connected to the laptop acquisition UI',
      },
      caption: {
        fr: 'Capteur remis en service et courbe d’acquisition en direct.',
        en: 'Restored sensor and live acquisition curve.',
      },
    },
    links: [],
  },
  {
    id: 'neurone',
    domain: 'pedagogy',
    statusLabel: { fr: 'Semaine du Cerveau', en: 'Brain Awareness Week' },
    title: { fr: 'Maquette Neurone', en: 'Neuron Model' },
    subtitle: {
      fr: 'Une maquette interactive pour la Semaine du Cerveau',
      en: 'An interactive model for Brain Awareness Week',
    },
    summary: {
      fr: 'Conception d’une maquette de neurone imprimée en 3D, avec dendrites aimantées, électronique intégrée et visualisation des signaux sur une interface web. Elle a été utilisée pour expliquer de manière interactive le fonctionnement d’un neurone lors de la Semaine du Cerveau.',
      en: '3D-printed neuron model with magnetic dendrites, integrated electronics, and web-based signal visualization, used to interactively explain how a neuron works during Brain Awareness Week.',
    },
    role: { fr: 'Matériel, modélisation et code · FabLab Valrose', en: 'Hardware, 3D & software · FabLab Valrose' },
    stack: ['Électronique', 'Modélisation 3D', 'Arduino / C++', 'Interface Web'],
    image: {
      src: `${BASE}images/neurone-maquette.jpg`,
      width: 1290,
      height: 1140,
      alt: {
        fr: 'Maquette physique du neurone imprimée en 3D avec dendrites aimantées et interface sur PC',
        en: '3D-printed physical neuron model with magnetic dendrites and laptop interface',
      },
      caption: {
        fr: 'Maquette physique à la Semaine du Cerveau avec son interface temps réel.',
        en: 'Physical model at Brain Awareness Week with its real-time interface.',
      },
    },
    gallery: [
      {
        src: `${BASE}images/neurone-cablage.jpg`,
        width: 1475,
        height: 1469,
        alt: {
          fr: 'Câblage électronique interne du soma et contacts cuivre des dendrites',
          en: 'Internal soma electronics wiring and copper dendrite contacts',
        },
        caption: {
          fr: 'Électronique interne du soma et modules de dendrites aimantés.',
          en: 'Internal soma wiring and magnetic dendrite modules.',
        },
      },
    ],
    links: [],
  },
];

export const skillPillars: SkillPillar[] = [
  {
    id: 'bio',
    icon: 'dna',
    title: { fr: 'Biologie et expérimentation', en: 'Biology and experimental work' },
    summary: {
      fr: 'Conception de dispositifs et de méthodes pour observer, mesurer et analyser des phénomènes biologiques.',
      en: 'Designing devices and methods to observe, measure, and analyze biological phenomena.',
    },
  },
  {
    id: 'vision',
    icon: 'eye',
    title: { fr: 'Vision par ordinateur', en: 'Computer vision' },
    summary: {
      fr: 'Détection, suivi et réidentification d’objets sur vidéo, avec développement en Python et PyTorch, évaluations comparatives et analyse des limites expérimentales.',
      en: 'Object detection, tracking, and re-identification in video with Python and PyTorch, comparative benchmarks, and analysis of experimental limits.',
    },
  },
  {
    id: 'hardware',
    icon: 'cpu',
    title: { fr: 'Électronique et systèmes embarqués', en: 'Electronics and embedded systems' },
    summary: {
      fr: 'Prototypage de dispositifs de mesure, intégration de capteurs, communication sans fil et acquisition de données sur ESP32, Arduino et Raspberry Pi.',
      en: 'Prototyping measurement devices, sensor integration, wireless telemetry, and data acquisition on ESP32, Arduino, and Raspberry Pi.',
    },
  },
  {
    id: 'software',
    icon: 'code',
    title: { fr: 'Développement logiciel et données', en: 'Software development and data' },
    summary: {
      fr: 'Développement d’applications web complètes, de leurs interfaces aux services backend, en passant par le stockage et le traitement des données.',
      en: 'Building full-stack web applications from user interfaces to backend services, data storage, and processing pipelines.',
    },
  },
  {
    id: 'ai',
    icon: 'compass',
    title: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
    summary: {
      fr: 'Intégration de modèles locaux et distants, expérimentation de pipelines de génération et mise en place de mécanismes de vérification.',
      en: 'Integrating local and remote models, experimenting with generation pipelines, and implementing output verification mechanisms.',
    },
  },
  {
    id: 'fablab',
    icon: 'cpu',
    title: { fr: 'Impression 3D et prototypage', en: '3D printing and prototyping' },
    summary: {
      fr: 'Conception CAO, fabrication additive, intégration électronique et accompagnement de projets au FabLab Valrose.',
      en: 'CAD modeling, additive manufacturing, electronics integration, and project mentoring at FabLab Valrose.',
    },
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'uca-l3',
    period: { fr: 'En cours · L3', en: 'Current · Year 3' },
    title: {
      fr: 'Licence Sciences de la Vie, parcours Bio-informatique',
      en: 'BSc in Life Sciences, Bioinformatics track',
    },
    place: { fr: 'Université Côte d’Azur · Nice', en: 'Université Côte d’Azur · Nice' },
    detail: {
      fr: 'Biologie, génomique, bio-informatique et programmation.',
      en: 'Biology, genomics, bioinformatics, and programming.',
    },
  },
  {
    id: 'inria',
    period: {
      fr: 'Avr. - août 2026 (stage) · Depuis sept. 2026 (collaboration)',
      en: 'Apr - Aug 2026 (internship) · Since Sep 2026 (collaboration)',
    },
    title: {
      fr: 'Stagiaire en vision par ordinateur, puis collaborateur extérieur',
      en: 'Computer Vision Intern, then external collaborator',
    },
    place: { fr: 'Centre Inria d’Université Côte d’Azur · Équipe STARS', en: 'Centre Inria d’Université Côte d’Azur · STARS Team' },
    detail: {
      fr: 'Stage terminé en août 2026 (encadrement : François Brémond) sur la vision appliquée aux abeilles et insectes (détection, suivi, réidentification, auto-entraînement), suivi d’une collaboration extérieure depuis septembre 2026.',
      en: 'Completed internship (Apr-Aug 2026, supervised by François Brémond) on computer vision for honeybees and insects (detection, tracking, re-identification, self-training), followed by ongoing external collaboration since September 2026.',
    },
  },
  {
    id: 'eco-mission',
    period: {
      fr: 'Août 2023 - févr. 2026 · Reprise depuis sept. 2026',
      en: 'Aug 2023 - Feb 2026 · Resumed Sep 2026',
    },
    title: {
      fr: 'Service civique puis contrat étudiant · Mission Éco-Responsable',
      en: 'Civic service & student contract · Eco-Responsibility Office',
    },
    place: { fr: 'Université Côte d’Azur · Nice', en: 'Université Côte d’Azur · Nice' },
    detail: {
      fr: 'Ateliers et jeux scientifiques sur les enjeux écologiques, puis conception du composteur instrumenté poursuivi avec Humuscope.',
      en: 'Science outreach workshops and games on ecological topics, plus creation of the instrumented composter continued as Humuscope.',
    },
  },
  {
    id: 'fablab',
    period: { fr: 'Mai 2023 - en cours', en: 'May 2023 - present' },
    title: { fr: 'FabLab Manager · FabLab Valrose', en: 'FabLab Manager · FabLab Valrose' },
    place: { fr: 'Université Côte d’Azur · Campus Valrose', en: 'Université Côte d’Azur · Valrose Campus' },
    detail: {
      fr: 'Gestion des machines et impressions 3D, accompagnement d’étudiants de la licence au master, et projets d’électronique et de vision encadrés par Didier Orlandi (sismographe, SmartHive, Semaine du Cerveau).',
      en: 'Managing 3D printers and lab equipment, mentoring undergraduate to master students, and collaborative electronics/vision projects supervised by Didier Orlandi (seismograph, SmartHive, Brain Awareness Week).',
    },
  },
];
