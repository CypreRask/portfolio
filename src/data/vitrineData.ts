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
      badge: 'L3 Bio-informatique · Université Côte d’Azur',
      option: 'Nice, France',
      name: 'Mathis Steinmann',
      lead: 'Je construis des projets entre biologie, capteurs sur le terrain, vision artificielle et applications web. J’aime partir d’une question scientifique ou pratique pour aboutir à un outil ou un objet que l’on peut manipuler.',
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
      title: 'Ce que je sais concevoir',
      intro: 'De la biologie expérimentale aux systèmes autonomes et aux applications web.',
    },
    background: {
      title: 'Parcours',
      intro: 'Formation en cours à Nice, recherche appliquée, mission universitaire et engagements.',
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
      badge: 'BSc Bioinformatics (Year 3) · Université Côte d’Azur',
      option: 'Nice, France',
      name: 'Mathis Steinmann',
      lead: 'I build projects across biology, field sensors, computer vision, and web applications. I enjoy taking a scientific or practical question all the way to a working tool or physical object people can try.',
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
      title: 'What I build',
      intro: 'From experimental biology to autonomous hardware and live web applications.',
    },
    background: {
      title: 'Background',
      intro: 'Undergraduate studies in Nice, research internship and collaboration, campus work, and civic roles.',
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
  linkedin: 'https://www.linkedin.com/in/mathis-steinmann-93b5851b9/',
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
      fr: 'Des cours universitaires transformés en fiches reliées aux sources, en questions et en carte des notions',
      en: 'Turning university lectures into source-linked study sheets, quizzes, and a concept map',
    },
    cardSummary: {
      fr: 'Importe un cours pour obtenir des fiches reliées aux passages d’origine, des quiz adaptés aux erreurs et une carte interactive des notions.',
      en: 'Import a lecture to get source-linked study sheets, error-aware quizzes, and an interactive concept map backed by verified scientific kernels.',
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
        label: { fr: 'Essayer la démo', en: 'Try the live demo' },
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
      fr: 'Un composteur instrumenté et une interface en pixel art pour observer la vie du sol',
      en: 'An instrumented composter paired with a pixel-art web app to explore soil biology',
    },
    cardSummary: {
      fr: 'Boîtier autonome solaire sur un composteur universitaire et interface en pixel art pour observer les cycles du sol et déceler les limites de mesure.',
      en: 'Solar-powered composter sensor enclosure and pixel-art web interface tracking soil biology and enclosure-vs-core sensor behavior.',
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
    title: { fr: 'Vision appliquée aux abeilles et insectes', en: 'Computer vision for honeybees and insects' },
    subtitle: {
      fr: 'Détection, suivi vidéo et réidentification entre SmartHive (FabLab) et travaux à l’Inria',
      en: 'Detection, video tracking, and re-identification across SmartHive (FabLab) and Inria work',
    },
    cardSummary: {
      fr: 'Suivi vidéo d’abeilles et de frelons sur ruche connectée au FabLab (dépôt public), prolongé par des travaux en vision par ordinateur à l’Inria.',
      en: 'Video monitoring of honeybees and hornets on a FabLab smart-hive prototype (public repo), extended through computer vision work at Inria.',
    },
    cover: {
      src: `${BASE}images/smarthive-ruche.jpg`,
      width: 1600,
      height: 1204,
      alt: {
        fr: 'Prototype de ruche connectée instrumentée issu du dépôt public SmartHive',
        en: 'Instrumented smart-hive prototype from the public SmartHive repository',
      },
      caption: {
        fr: 'Prototype matériel SmartHive (dépôt public CypreRask/Ruche-public au FabLab).',
        en: 'SmartHive hardware prototype (public CypreRask/Ruche-public repo at FabLab).',
      },
    },
    gallery: [],
    links: [
      {
        label: { fr: 'Voir Ruche-public sur GitHub', en: 'View Ruche-public on GitHub' },
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
      fr: 'Assistant IA local et enceinte connectée sur ESP32-S3',
      en: 'Local AI assistant and ESP32-S3 connected speaker',
    },
    summary: {
      fr: 'Assistant exécutant des modèles de langage sur mes machines locales avec mode agent et sauvegardes avant édition, complété par une enceinte connectée sur batterie (ESP32-S3, micro et haut-parleur) en cours de montage.',
      en: 'Personal assistant running language models locally with an agent mode and snapshot rollbacks, paired with an upcoming battery-powered ESP32-S3 connected speaker.',
    },
    role: { fr: 'Projet personnel · Dépôt privé', en: 'Personal project · Private repo' },
    highlights: [
      {
        fr: 'Exécution locale de modèles via llama.cpp sans dépendance cloud.',
        en: 'Local model inference through llama.cpp without cloud dependency.',
      },
      {
        fr: 'Système de sauvegarde et retour arrière avant modification de fichiers.',
        en: 'Automatic snapshot rollback before automated file modifications.',
      },
      {
        fr: 'Enceinte vocale ESP32-S3 N16R8 avec micro I2S INMP441 et ampli MAX98357A.',
        en: 'ESP32-S3 N16R8 connected speaker build with INMP441 mic and MAX98357A amplifier.',
      },
    ],
    stack: ['Python', 'llama.cpp', 'ESP32-S3', 'I2S Audio'],
    links: [],
  },
  {
    id: 'midas',
    domain: 'software',
    statusLabel: { fr: 'Usage local · Privé', en: 'Local use · Private' },
    title: { fr: 'MIDAS (SmartPortefeuille)', en: 'MIDAS (SmartPortefeuille)' },
    subtitle: {
      fr: 'Suivi patrimonial local à comptabilité déterministe',
      en: 'Local portfolio tracker with exact deterministic accounting',
    },
    summary: {
      fr: 'Application locale pour suivre comptes, devises et opérations dans le temps. Les soldes reposent sur des calculs exacts en Decimal ; la couche IA sert uniquement à trier des synthèses sans jamais modifier les chiffres.',
      en: 'Local-first tool tracking multi-currency accounts and transactions. Balances rely on exact Decimal ledger logic while AI assists only with research summaries.',
    },
    role: { fr: 'Projet personnel · Données privées', en: 'Personal project · Private data' },
    highlights: [
      {
        fr: 'Grand livre immuable en ajout seul avec précision Decimal multi-devises.',
        en: 'Append-only ledger maintaining exact Decimal multi-currency precision.',
      },
      {
        fr: 'Séparation nette entre moteur comptable SQLite/DuckDB et module de synthèse IA.',
        en: 'Strict separation between SQLite/DuckDB accounting and optional AI summaries.',
      },
    ],
    stack: ['FastAPI', 'SvelteKit', 'SQLite', 'DuckDB'],
    links: [],
  },
  {
    id: 'sismographe',
    domain: 'hardware',
    statusLabel: { fr: 'Projet collectif L2', en: 'Year-2 group project' },
    title: { fr: 'Sismographe universitaire', en: 'University seismograph' },
    subtitle: {
      fr: 'Remise en service d’un capteur de laboratoire et mise en ligne des mesures',
      en: 'Restoring a lab seismograph and streaming readings online',
    },
    summary: {
      fr: 'Projet L2 en équipe (avec Irem Su Cone et Alex Rognone, encadré par Didier Orlandi) pour réparer un sismographe inutilisé, vérifier sa calibration sur des séismes connus et diffuser les relevés vers un serveur universitaire.',
      en: 'Second-year group project (with Irem Su Cone and Alex Rognone, supervised by Didier Orlandi) repairing an unused lab seismograph, calibrating it on known events, and streaming readings to a campus server.',
    },
    role: {
      fr: 'Diagnostic matériel, calibration et acquisition',
      en: 'Hardware repair, calibration, and acquisition',
    },
    highlights: [
      {
        fr: 'Remise en état de la chaîne d’acquisition physique et vérification des signaux sur événements réels.',
        en: 'Physical acquisition chain repair and calibration checks on real seismic events.',
      },
      {
        fr: 'Serveur universitaire (eftis.univ-cotedazur.fr/sismographe) actuellement inaccessible hors réseau campus.',
        en: 'Campus endpoint (eftis.univ-cotedazur.fr/sismographe) currently unreachable externally.',
      },
    ],
    stack: ['Instrumentation', 'Raspberry Pi', 'Calibration', 'Acquisition'],
    links: [],
  },
  {
    id: 'neurone',
    domain: 'pedagogy',
    statusLabel: { fr: 'Semaine du Cerveau', en: 'Brain Awareness Week' },
    title: { fr: 'Maquette Neurone & NeuroLab', en: 'Neuron model & NeuroLab' },
    subtitle: {
      fr: 'Maquette physique pour la Semaine du Cerveau et 7 simulateurs hors ligne',
      en: 'Physical neuron model built for Brain Awareness Week and 7 offline simulators',
    },
    summary: {
      fr: 'Maquette modulaire à dendrites aimantées et LEDs réalisée pour la Semaine du Cerveau (électronique, modélisation 3D et code entièrement réalisés par mes soins), accompagnée de NeuroLab, sept laboratoires interactifs utilisables sans connexion.',
      en: 'Modular physical neuron with magnetic dendrites and LED visualization built for Brain Awareness Week (electronics, 3D modeling, and software built by me), paired with seven offline interactive NeuroLab simulators.',
    },
    role: { fr: 'Matériel, modélisation et code · FabLab Valrose', en: 'Hardware, 3D & software · FabLab Valrose' },
    highlights: [
      {
        fr: 'Sommation spatiale et temporelle rendue visible en direct par LEDs selon les dendrites connectées.',
        en: 'Live spatial and temporal summation rendered through LEDs based on attached dendrites.',
      },
      {
        fr: 'Sept laboratoires numériques hors ligne pour manipuler potentiels d’action et équilibre ionique.',
        en: 'Seven offline interactive labs covering action potentials and ionic equilibria.',
      },
    ],
    stack: ['Électronique', 'Modélisation 3D', 'Arduino / C++', 'Simulateurs Web'],
    image: {
      src: `${BASE}images/neurolab-modules.png`,
      width: 1440,
      height: 1000,
      alt: {
        fr: 'Capture des modules interactifs de neurophysiologie NeuroLab',
        en: 'Screenshot of interactive NeuroLab neurophysiology modules',
      },
      caption: {
        fr: 'NeuroLab : 7 simulateurs interactifs hors ligne.',
        en: 'NeuroLab: 7 offline interactive simulators.',
      },
    },
    links: [],
  },
  {
    id: 'ypsa-web',
    domain: 'software',
    statusLabel: { fr: 'En ligne', en: 'Live site' },
    title: { fr: 'Site du YPSA (ypsa.ch)', en: 'YPSA Website (ypsa.ch)' },
    subtitle: {
      fr: 'Site officiel du Youth Parliament of the Swiss Abroad',
      en: 'Official platform for the Youth Parliament of the Swiss Abroad',
    },
    summary: {
      fr: 'Conception et mise en ligne du site ypsa.ch pour présenter le parlement des jeunes Suisses de l’étranger, son comité et ses événements internationaux.',
      en: 'Design and deployment of ypsa.ch presenting the Youth Parliament of the Swiss Abroad, its board, and its international events.',
    },
    role: { fr: 'Développement web · Comité YPSA', en: 'Web development · YPSA Board' },
    highlights: [
      {
        fr: 'Site public multilingue en production utilisé par l’organisation et les représentations suisses.',
        en: 'Public website in production supporting outreach and committee communications.',
      },
    ],
    stack: ['Web', 'Déploiement', 'Design'],
    links: [
      {
        label: { fr: 'Visiter ypsa.ch', en: 'Visit ypsa.ch' },
        url: 'https://ypsa.ch/',
        kind: 'external',
      },
    ],
  },
];

export const skillPillars: SkillPillar[] = [
  {
    id: 'bio',
    icon: 'dna',
    title: { fr: 'Biologie et expérimentation', en: 'Biology and experimental work' },
    summary: {
      fr: 'Traduire une question biologique en mesures concrètes et savoir ce que les capteurs disent vraiment ou non.',
      en: 'Turning biological questions into field measurements while keeping sensor limits clear.',
    },
  },
  {
    id: 'vision',
    icon: 'eye',
    title: { fr: 'Vision par ordinateur', en: 'Computer vision' },
    summary: {
      fr: 'Détection et suivi d’insectes sur vidéo, tests comparatifs multi-graines et attention aux biais de jeux de données.',
      en: 'Insect detection and tracking on video, controlled benchmarks, and dataset generalization checks.',
    },
  },
  {
    id: 'hardware',
    icon: 'cpu',
    title: { fr: 'Capteurs et systèmes autonomes', en: 'Sensors and field electronics' },
    summary: {
      fr: 'Conception de boîtiers sur batterie et solaire, transmission longue portée et remise en état d’instruments de laboratoire.',
      en: 'Solar and battery-powered sensor enclosures, long-range radio links, and lab instrument retrofits.',
    },
  },
  {
    id: 'software',
    icon: 'code',
    title: { fr: 'Applications web et données', en: 'Web apps and data pipelines' },
    summary: {
      fr: 'Développement complet d’applications utilisables en ligne, avec bases de données propres et calculs fiables.',
      en: 'Building complete deployed web tools backed by clean databases and verified calculations.',
    },
  },
  {
    id: 'ai',
    icon: 'compass',
    title: { fr: 'Fiabilisation de l’IA', en: 'Making AI outputs reliable' },
    summary: {
      fr: 'Contrôler les modèles par des tests automatiques, des liens vers les sources et des calculs déterministes.',
      en: 'Keeping language models grounded with automated tests, source links, and deterministic kernels.',
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
      fr: 'Biologie, biostatistiques, génomique et informatique appliquée.',
      en: 'Biology, biostatistics, genomics, and applied computer science.',
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
      fr: 'Agent contractuel étudiant, Mission Éco-Responsable',
      en: 'Student Contract Staff, Eco-Responsibility Office',
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
  {
    id: 'civic',
    period: { fr: 'Juil. 2024 - en cours (YPSA) · 2025 - 2029 (CSE)', en: 'Jul 2024 - present (YPSA) · 2025 - 2029 (CSA)' },
    title: {
      fr: 'Délégué au Conseil des Suisses de l’étranger & comité YPSA',
      en: 'Delegate to the Council of the Swiss Abroad & YPSA Board',
    },
    place: { fr: 'Berne & international', en: 'Bern & international' },
    detail: {
      fr: 'Représentation des Suisses de France au CSE (mandat 2025-2029), membre de l’Events Committee du Youth Parliament of the Swiss Abroad (YPSA) et réalisation du site ypsa.ch.',
      en: 'Representing Swiss residents in France at the CSA (2025-2029 term), Events Committee member of the Youth Parliament of the Swiss Abroad (YPSA), and creator of ypsa.ch.',
    },
  },
];
