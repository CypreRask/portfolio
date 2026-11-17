import { useState } from 'react';
import {
  ArrowRight,
  Compass,
  Cpu,
  Code,
  Dna,
  Eye,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import {
  contactLinks,
  copy,
  mainProjects,
  secondaryWorks,
  skillPillars,
  timelineItems,
  type CaseSlug,
  type SecondaryWork,
} from '@/data/vitrineData';
import { usePortfolioState } from '@/hooks/usePortfolioState';
import { BackgroundGrid, NetworkBackground } from '@/components/ui-custom/Background';
import { GlassCard } from '@/components/ui-custom/GlassCard';
import { CaseStudyView } from '@/components/CaseStudyView';

type FilterDomain = 'all' | SecondaryWork['domain'];

const pillarIcons = {
  dna: Dna,
  eye: Eye,
  cpu: Cpu,
  code: Code,
  compass: Compass,
};

export function App() {
  const { lang, setLang, activeCase, openCase, closeCase, theme, toggleTheme } =
    usePortfolioState();
  const [showcaseSlug, setShowcaseSlug] = useState<CaseSlug>('humuscope');
  const [domainFilter, setDomainFilter] = useState<FilterDomain>('all');
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = copy[lang];
  const activeProject = activeCase
    ? mainProjects.find((p) => p.slug === activeCase) ?? null
    : null;
  const showcaseProject =
    mainProjects.find((p) => p.slug === showcaseSlug) ?? mainProjects[0];

  const filteredSecondary =
    domainFilter === 'all'
      ? secondaryWorks
      : secondaryWorks.filter((w) => w.domain === domainFilter);

  const navItems = [
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#background', label: t.nav.background },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (activeProject) {
      closeCase();
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundGrid />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        {t.skip}
      </a>

      {/* Floating Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="px-4 sm:px-5 py-2.5" hover={false}>
            <div className="flex items-center justify-between gap-3">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  if (activeProject) closeCase();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <div className="hidden sm:flex w-9 h-9 rounded-xl bg-primary/15 items-center justify-center flex-shrink-0">
                  <Dna className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap block leading-tight">
                    Mathis Steinmann
                  </span>
                  <span className="hidden sm:block text-xs text-muted-foreground">
                    {t.nav.brandSub}
                  </span>
                </div>
              </a>

              <nav
                aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}
                className="hidden md:flex items-center gap-1"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <div
                  role="group"
                  aria-label={lang === 'fr' ? 'Langue' : 'Language'}
                  className="inline-flex rounded-lg border border-border p-0.5 bg-muted/40"
                >
                  {(['fr', 'en'] as const).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      aria-pressed={lang === code}
                      className={`min-w-[36px] min-h-[34px] px-2 rounded-md font-mono text-xs font-medium uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        lang === code
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={
                    theme === 'dark'
                      ? lang === 'fr'
                        ? 'Passer en mode clair'
                        : 'Switch to light mode'
                      : lang === 'fr'
                      ? 'Passer en mode sombre'
                      : 'Switch to dark mode'
                  }
                  className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Moon className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setMobileOpen((prev) => !prev)}
                  aria-expanded={mobileOpen}
                  aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Toggle menu'}
                  className="md:hidden min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {mobileOpen && (
              <nav
                aria-label={lang === 'fr' ? 'Menu mobile' : 'Mobile menu'}
                className="md:hidden mt-3 pt-3 border-t border-border grid gap-1"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="min-h-[44px] px-3 rounded-lg flex items-center text-sm font-medium hover:bg-muted/60"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            )}
          </GlassCard>
        </div>
      </header>

      <main id="main-content" className="relative z-10 flex-1">
        {activeProject ? (
          <CaseStudyView
            key={activeProject.slug}
            project={activeProject}
            lang={lang}
            onBack={closeCase}
            onSelect={openCase}
          />
        ) : (
          <>
            {/* Hero Vitrine */}
            <section
              id="hero"
              className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6"
            >
              <NetworkBackground />

              <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <GlassCard className="inline-flex items-center gap-2 px-4 py-2" hover={false}>
                    <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-medium">{t.hero.badge}</span>
                  </GlassCard>

                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06]">
                      {t.hero.name}
                    </h1>
                    <p className="text-sm sm:text-base text-primary font-medium">
                      {t.hero.option}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[54ch]">
                    {t.hero.lead}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#projects');
                      }}
                      className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-opacity"
                    >
                      {t.hero.ctaProjects}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      href={contactLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl glass text-sm font-medium hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      {t.hero.ctaGithub}
                    </a>

                    <a
                      href={contactLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl glass text-sm font-medium hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                      {t.hero.ctaLinkedin}
                    </a>
                  </div>
                </div>

                {/* Visual Glass Showcase */}
                <div className="lg:col-span-6">
                  <GlassCard
                    className="p-3 sm:p-4"
                    glow={showcaseProject.glow}
                    hover={false}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 px-1 pb-3">
                      <span className="text-xs font-mono text-muted-foreground">
                        {t.hero.showcaseLabel}
                      </span>
                      <div
                        role="tablist"
                        aria-label={t.hero.showcaseLabel}
                        className="flex flex-wrap gap-1"
                      >
                        {mainProjects.map((p) => (
                          <button
                            key={p.slug}
                            role="tab"
                            type="button"
                            aria-selected={showcaseSlug === p.slug}
                            onClick={() => setShowcaseSlug(p.slug)}
                            className={`min-h-[34px] px-2.5 py-1 rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                              showcaseSlug === p.slug
                                ? 'bg-primary text-primary-foreground'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                          >
                            {p.slug === 'noepora'
                              ? 'Noépora'
                              : p.slug === 'humuscope'
                              ? 'Humuscope'
                              : 'SmartHive / Inria'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-border bg-black/15">
                      <img
                        src={showcaseProject.cover.src}
                        width={showcaseProject.cover.width}
                        height={showcaseProject.cover.height}
                        alt={showcaseProject.cover.alt[lang]}
                        className="w-full h-56 sm:h-72 object-cover"
                      />
                    </div>

                    <div className="pt-3.5 px-1 flex flex-wrap items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold truncate">
                          {showcaseProject.title[lang]}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {showcaseProject.subtitle[lang]}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => openCase(showcaseProject.slug)}
                        className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-lg bg-primary/15 text-primary text-xs font-semibold hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                      >
                        {t.hero.openProject}
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </section>

            {/* Main Projects */}
            <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.projects.title}</h2>
                <p className="text-muted-foreground">{t.projects.intro}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-20">
                {mainProjects.map((project) => (
                  <GlassCard
                    key={project.slug}
                    glow={project.glow}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="overflow-hidden border-b border-border bg-black/10">
                        <img
                          src={project.cover.src}
                          width={project.cover.width}
                          height={project.cover.height}
                          loading="lazy"
                          alt={project.cover.alt[lang]}
                          className="w-full h-52 object-cover"
                        />
                      </div>

                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-mono text-muted-foreground">
                            {project.tag[lang]}
                          </span>
                          <span
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                              project.glow === 'chlorophyll'
                                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                                : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                            }`}
                          >
                            {project.statusLabel[lang]}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold leading-snug">
                          {project.title[lang]}
                        </h3>
                        <p className="text-sm text-primary font-medium leading-snug">
                          {project.subtitle[lang]}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.cardSummary[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => openCase(project.slug)}
                        className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-opacity"
                      >
                        {t.projects.readStory}
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>

                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl border border-border text-xs sm:text-sm font-medium hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                        >
                          {link.kind === 'github' ? (
                            <Github className="w-3.5 h-3.5" aria-hidden="true" />
                          ) : (
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          )}
                          {link.label[lang]}
                        </a>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Secondary Works */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {t.projects.secondaryTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t.projects.secondaryIntro}
                  </p>
                </div>

                <div
                  role="group"
                  aria-label={lang === 'fr' ? 'Filtrer les réalisations' : 'Filter projects'}
                  className="flex flex-wrap gap-2"
                >
                  {(
                    [
                      { id: 'all', label: t.projects.filters.all },
                      { id: 'software', label: t.projects.filters.software },
                      { id: 'hardware', label: t.projects.filters.hardware },
                      { id: 'pedagogy', label: t.projects.filters.pedagogy },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={domainFilter === item.id}
                      onClick={() => setDomainFilter(item.id)}
                      className={`min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        domainFilter === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'glass text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredSecondary.map((work) => (
                  <GlassCard key={work.id} className="p-5 sm:p-6 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400">
                          {work.statusLabel[lang]}
                        </span>
                        <span className="text-xs text-muted-foreground">{work.role[lang]}</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">{work.title[lang]}</h3>
                        <p className="text-sm text-primary font-medium mt-0.5">
                          {work.subtitle[lang]}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {work.summary[lang]}
                      </p>

                      {work.image && (
                        <figure className="rounded-xl overflow-hidden border border-border">
                          <img
                            src={work.image.src}
                            width={work.image.width}
                            height={work.image.height}
                            loading="lazy"
                            alt={work.image.alt[lang]}
                            className="w-full h-44 object-cover"
                          />
                          <figcaption className="px-3 py-2 text-xs text-muted-foreground bg-muted/40">
                            {work.image.caption[lang]}
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </section>

            {/* Skills & AI approach */}
            <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-border/60">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.skills.title}</h2>
                <p className="text-muted-foreground">{t.skills.intro}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {skillPillars.map((pillar, i) => {
                  const Icon = pillarIcons[pillar.icon];
                  return (
                    <GlassCard
                      key={pillar.id}
                      glow={i % 2 === 0 ? 'chlorophyll' : 'amber'}
                      className="p-5 sm:p-6 space-y-3"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold">{pillar.title[lang]}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.summary[lang]}
                      </p>
                    </GlassCard>
                  );
                })}
              </div>

              <GlassCard className="p-5 sm:p-6 max-w-4xl" hover={false}>
                <h3 className="text-base font-semibold mb-1.5">{t.skills.aiTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.skills.aiBody}</p>
              </GlassCard>
            </section>

            {/* Background */}
            <section id="background" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-border/60">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.background.title}</h2>
                <p className="text-muted-foreground">{t.background.intro}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {timelineItems.map((item) => (
                  <GlassCard key={item.id} className="p-5 sm:p-6 space-y-2" hover={false}>
                    <div className="text-xs font-mono text-primary font-medium">
                      {item.period[lang]}
                    </div>
                    <h3 className="text-lg font-bold">{item.title[lang]}</h3>
                    <div className="text-xs text-muted-foreground">{item.place[lang]}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {item.detail[lang]}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-border/60">
              <GlassCard className="p-6 sm:p-8" glow="chlorophyll" hover={false}>
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-3">
                    <h2 className="text-3xl font-bold">{t.contact.title}</h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t.contact.intro}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground pt-1">
                      <MapPin className="w-4 h-4 text-amber-500" aria-hidden="true" />
                      {t.contact.location}
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
                    <a
                      href={`mailto:${contactLinks.email}`}
                      className="rounded-xl border border-border p-4 bg-muted/30 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-emerald-500 mb-2.5" aria-hidden="true" />
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-xs sm:text-sm font-medium mt-1 break-all">
                        {contactLinks.email}
                      </div>
                    </a>

                    <a
                      href={contactLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-border p-4 bg-muted/30 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    >
                      <Github className="w-5 h-5 mb-2.5" aria-hidden="true" />
                      <div className="text-xs text-muted-foreground">GitHub</div>
                      <div className="text-xs sm:text-sm font-medium mt-1">
                        {contactLinks.githubLabel}
                      </div>
                    </a>

                    <a
                      href={contactLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-border p-4 bg-muted/30 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-500 mb-2.5" aria-hidden="true" />
                      <div className="text-xs text-muted-foreground">LinkedIn</div>
                      <div className="text-xs sm:text-sm font-medium mt-1">
                        {contactLinks.linkedinLabel}
                      </div>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </section>
          </>
        )}
      </main>

      <footer className="relative z-10 border-t border-border/60 py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 Mathis Steinmann</span>
          <span>{t.contact.footer}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
