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
      fr: 'On importe un cours et l’application construit des fiches avec renvoi direct aux passages d’origine, des quiz adaptés à ses erreurs et une carte pour voir comment les notions s’enchaînent. Sur les sujets scientifiques, les exercices reposent sur de vrais calculs plutôt que sur du texte improvisé.',
      en: 'Import a lecture and get structured study sheets linked back to exact passages, error-aware quizzes, and an interactive concept map. For physics and biology, interactive labs rely on verified mathematical models rather than improvised AI code.',
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
      fr: 'Conçu à l’origine pour la Mission Éco-Responsable d’Université Côte d’Azur, le projet réunit un boîtier de capteurs autonome installé sur un composteur et un site interactif pour comprendre les cycles du carbone, de l’azote et de l’eau. Les données mesurées sur le terrain ont aussi servi à corriger l’installation elle-même.',
      en: 'Initially created for Université Côte d’Azur’s Eco-Responsibility Office, Humuscope pairs a solar-powered sensor enclosure with an interactive pixel-art site explaining carbon, nitrogen, and water cycles. Field measurements also helped uncover and correct a placement limitation on the thermal probe.',
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
    title: { fr: 'Vision appliquée aux insectes', en: 'Computer vision for insects' },
    subtitle: {
      fr: 'Du suivi de ruche au FabLab jusqu’à mes travaux de recherche à l’Inria',
      en: 'From a campus FabLab smart-hive prototype to ongoing research work at Inria',
    },
    cardSummary: {
      fr: 'Comment repérer automatiquement des abeilles et des frelons asiatiques sur vidéo sans passer des heures à trier des images ? Ce parcours relie un prototype de ruche connectée développé au FabLab (code public sur GitHub) à mes travaux menés au Centre Inria d’Université Côte d’Azur depuis avril 2026.',
      en: 'How can video systems detect honeybees and Asian hornets reliably without endless manual annotation? This thread connects a campus FabLab smart-hive prototype (public on GitHub) with my work at Centre Inria d’Université Côte d’Azur since April 2026.',
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
    gallery: [
      {
        src: `${BASE}images/smarthive-dashboard.png`,
        width: 1024,
        height: 485,
        alt: {
          fr: 'Interface de suivi temps réel SmartHive montrant les courbes et les détections vidéo',
          en: 'SmartHive live monitoring dashboard showing telemetry charts and video detections',
        },
        caption: {
          fr: 'Interface web du prototype SmartHive reliant mesures environnementales et alertes vidéo.',
          en: 'Web interface from SmartHive combining sensor telemetry and video detection alerts.',
        },
      },
    ],
    links: [
      {
        label: { fr: 'Voir Ruche-public sur GitHub', en: 'View Ruche-public on GitHub' },
        url: 'https://github.com/CypreRask/Ruche-public',
        kind: 'github',
      },
    ],
    story: {
      problem: {
        fr: 'Surveiller une ruche ou étudier le comportement de pollinisateurs sur vidéo demande des modèles capables de fonctionner sur de nouveaux sites et de nouvelles conditions d’éclairage, sans devoir réannoter entièrement chaque jeu d’images.',
        en: 'Monitoring beehives or pollinator behavior in video requires models that hold up across new sites and lighting conditions without re-annotating every new dataset from scratch.',
      },
      context: {
        fr: 'Travail entamé au FabLab Valrose sur SmartHive (projet pédagogique repris sous l’encadrement de Didier Orlandi), puis prolongé au Centre Inria d’Université Côte d’Azur : stage de recherche d’avril à août 2026, suivi d’une collaboration extérieure depuis septembre 2026.',
        en: 'Started at FabLab Valrose on SmartHive (a teaching project supervised by Didier Orlandi), then expanded at Centre Inria d’Université Côte d’Azur through a research internship (Apr-Aug 2026) and ongoing external collaboration since September 2026.',
      },
      role: {
        fr: 'Sur SmartHive : développement de la brique de détection vidéo et de son intégration temps réel. À l’Inria : contribution aux pipelines de vision, campagnes de tests comparatifs et analyse des résultats.',
        en: 'On SmartHive: main work on the video detection pipeline and real-time integration. At Inria: contribution to vision evaluation pipelines, comparative experiments, and result analysis.',
      },
      built: {
        fr: 'Côté public : un prototype fonctionnel en laboratoire combinant détection abeilles/frelons, suivi de ruche et tableau de bord web (CypreRask/Ruche-public). Côté Inria : des outils internes de détection, d’apprentissage actif et de suivi vidéo.',
        en: 'Public side: a lab-working prototype pairing bee/hornet detection, hive telemetry, and a web dashboard (CypreRask/Ruche-public). At Inria: internal tooling for detection, active learning, and multi-frame tracking.',
      },
      workingAndLimits: {
        fr: 'Le code, les vidéos et les résultats internes du projet Inria restent confidentiels et ne sont pas publiés ici. Sur le prototype public SmartHive, le matériel est en cours de refonte pour tenir sur batterie dans la durée.',
        en: 'Code, datasets, and internal metrics from the Inria project remain confidential and are not published here. On the public SmartHive prototype, hardware is being redesigned to achieve sustained battery autonomy.',
      },
    },
    technical: {
      optionsAndChoices: {
        fr: 'Sur SmartHive : comparaison entre inférence déportée sur serveur et quantification embarquée sur Raspberry Pi, avec réflexion vers un déclenchement acoustique pour ne pas filmer en continu. Côté recherche : séparation stricte entre données utilisées pendant la mise au point et évaluation hors domaine, avec conservation explicite des pistes non concluantes.',
        en: 'On SmartHive: comparing remote server inference against quantized on-device execution on Raspberry Pi, plus acoustic trigger concepts to reduce camera duty cycle. In research: strict separation between tuning data and external validation, explicitly retaining negative outcomes.',
      },
      architecture: [
        {
          fr: 'SmartHive : capteurs LoRaWAN (ABP -> TTN -> MQTT), backend FastAPI + WebSocket, inférence YOLO/NCNN (~5 FPS sur Raspberry Pi 4 en 320 px), interface SvelteKit.',
          en: 'SmartHive: LoRaWAN sensors (ABP -> TTN -> MQTT), FastAPI + WebSocket backend, YOLO/NCNN inference (~5 FPS on Raspberry Pi 4 at 320px), SvelteKit UI.',
        },
        {
          fr: 'Travaux Inria : architecture modulaire séparant détection, sélection active, embeddings visuels, suivi temporel et registre d’expériences contrôlées.',
          en: 'Inria pipeline: modular separation across detection, active selection, visual embeddings, tracking, and controlled experiment registries.',
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
      fr: 'Assistant IA local et boîtier vocal connecté en cours de montage',
      en: 'Local AI assistant and an upcoming physical voice satellite',
    },
    summary: {
      fr: 'Un assistant qui fait tourner des modèles de langage sur mes propres machines, couplé à un mode agent capable d’exécuter des tâches de programmation avec sauvegarde avant modification. Un petit satellite vocal physique avec micro et haut-parleur est en cours d’assemblage.',
      en: 'A personal assistant running language models on local hardware, paired with an agent mode that handles coding tasks with safe rollback snapshots. A physical battery-powered voice speaker satellite is currently being assembled.',
    },
    role: { fr: 'Projet personnel · Dépôt privé', en: 'Personal project · Private repo' },
    links: [],
  },
  {
    id: 'midas',
    domain: 'software',
    statusLabel: { fr: 'Usage local · Privé', en: 'Local use · Private' },
    title: { fr: 'MIDAS (SmartPortefeuille)', en: 'MIDAS (SmartPortefeuille)' },
    subtitle: {
      fr: 'Suivi patrimonial sur mesure à comptabilité exacte',
      en: 'Local portfolio tracker with exact accounting',
    },
    summary: {
      fr: 'Application installée en local pour suivre des comptes, devises et opérations dans le temps. Les calculs financiers restent 100 % déterministes ; l’IA n’intervient que pour trier des informations et préparer des synthèses, sans jamais toucher aux chiffres de référence.',
      en: 'Local-first tool to track multi-currency accounts and transactions over time. Accounting balances remain strictly deterministic; AI is confined to research and summaries without modifying reference figures.',
    },
    role: { fr: 'Projet personnel · Données privées', en: 'Personal project · Private data' },
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
      fr: 'Projet mené en équipe en deuxième année (avec Irem Su Cone et Alex Rognone, encadré par Didier Orlandi) pour réparer un sismographe inutilisé, vérifier sa calibration sur des séismes connus et transmettre ses relevés sur un serveur de l’université.',
      en: 'Second-year team project (with Irem Su Cone and Alex Rognone, supervised by Didier Orlandi) to repair an unused lab seismograph, calibrate it against known earthquakes, and stream data to a university server.',
    },
    role: {
      fr: 'Diagnostic matériel, calibration et acquisition · Serveur universitaire actuellement hors ligne hors campus',
      en: 'Hardware repair, calibration, and acquisition · University URL currently unreachable externally',
    },
    links: [],
  },
  {
    id: 'neurone',
    domain: 'pedagogy',
    statusLabel: { fr: 'Prototype pédagogique', en: 'Teaching prototype' },
    title: { fr: 'Maquette Neurone & NeuroLab', en: 'Neuron model & NeuroLab' },
    subtitle: {
      fr: 'Manipuler la transmission nerveuse sur maquette physique et sur simulateurs hors ligne',
      en: 'Exploring neural signaling through a physical model and offline simulators',
    },
    summary: {
      fr: 'D’un côté, une maquette physique modulaire avec dendrites aimantées et LEDs pour montrer comment des signaux s’additionnent sur un neurone. De l’autre, NeuroLab : sept petits laboratoires interactifs utilisables sans connexion pour réviser la neurophysiologie.',
      en: 'A modular physical neuron model with magnetic dendrites and LED membrane visualization, paired with NeuroLab: seven offline interactive neurophysiology labs.',
    },
    role: { fr: 'Prototype personnel / FabLab', en: 'Personal / FabLab prototype' },
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
      fr: 'Stagiaire recherche, puis collaborateur extérieur',
      en: 'Research Intern, then external collaborator',
    },
    place: { fr: 'Centre Inria d’Université Côte d’Azur · Sophia Antipolis', en: 'Centre Inria d’Université Côte d’Azur · Sophia Antipolis' },
    detail: {
      fr: 'Stage terminé en août 2026 sur un projet de vision appliquée aux insectes (détection, apprentissage actif, suivi vidéo), suivi d’une collaboration extérieure depuis septembre 2026.',
      en: 'Completed research internship (Apr-Aug 2026) on insect computer vision (detection, active learning, tracking), followed by ongoing external collaboration since September 2026.',
    },
  },
  {
    id: 'eco-mission',
    period: {
      fr: 'Août 2023 - déc. 2025 · Reprise depuis sept. 2026',
      en: 'Aug 2023 - Dec 2025 · Resumed Sep 2026',
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
    period: { fr: 'Projets d’atelier', en: 'Workshop projects' },
    title: { fr: 'FabLab Valrose', en: 'FabLab Valrose' },
    place: { fr: 'Campus Valrose · Nice', en: 'Valrose Campus · Nice' },
    detail: {
      fr: 'Projets collectifs encadrés par Didier Orlandi (sismographe universitaire, vision de la ruche connectée SmartHive) et prototypage de maquettes.',
      en: 'Collaborative builds supervised by Didier Orlandi (university seismograph, SmartHive vision module) and hardware prototyping.',
    },
  },
  {
    id: 'civic',
    period: { fr: '2024 - en cours (YPSA) · 2025 - 2029 (CSE)', en: '2024 - present (YPSA) · 2025 - 2029 (CSA)' },
    title: {
      fr: 'Délégué au Conseil des Suisses de l’étranger & comité YPSA',
      en: 'Delegate to the Council of the Swiss Abroad & YPSA Board',
    },
    place: { fr: 'Berne & international', en: 'Bern & international' },
    detail: {
      fr: 'Représentation des Suisses de France au CSE (mandat 2025-2029), comité événements du Youth Parliament of the Swiss Abroad (YPSA) et réalisation du site ypsa.ch.',
      en: 'Representing Swiss residents in France at the CSA (2025-2029 term), Events Committee member of the Youth Parliament of the Swiss Abroad (YPSA), and creator of ypsa.ch.',
    },
  },
  {
    id: 'crete',
    period: { fr: 'Juin - août 2021', en: 'Jun - Aug 2021' },
    title: { fr: 'Stage en exploitation agricole', en: 'Agricultural farm internship' },
    place: { fr: 'Grillo’s stable · Crète, Grèce', en: 'Grillo’s stable · Crete, Greece' },
    detail: {
      fr: 'Trois mois de travail sur site en environnement anglophone.',
      en: 'Three months of field work in an international English-speaking environment.',
    },
  },
];
