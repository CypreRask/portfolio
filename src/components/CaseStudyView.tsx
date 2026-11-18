import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  Github,
  Layers,
  BookOpen,
  Maximize2,
  X,
} from 'lucide-react';
import {
  copy,
  mainProjects,
  type Lang,
  type MainProjectCase,
  type VisualAsset,
} from '@/data/vitrineData';
import { GlassCard } from '@/components/ui-custom/GlassCard';

interface CaseStudyViewProps {
  project: MainProjectCase;
  lang: Lang;
  onBack: () => void;
  onSelect: (slug: MainProjectCase['slug']) => void;
}

type TabMode = 'story' | 'tech';

export function CaseStudyView({ project, lang, onBack, onSelect }: CaseStudyViewProps) {
  const t = copy[lang].caseView;
  const [tab, setTab] = useState<TabMode>('story');
  const [copied, setCopied] = useState(false);
  const [lightbox, setLightbox] = useState<VisualAsset | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) {
          setLightbox(null);
        } else {
          onBack();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onBack, lightbox]);

  const handleCopy = async () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('case', project.slug);
      url.searchParams.set('lang', lang);
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable
    }
  };

  return (
    <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl glass text-sm font-medium hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          {t.back}
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl glass text-sm font-medium hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
          ) : (
            <Copy className="w-4 h-4" aria-hidden="true" />
          )}
          {copied ? t.copied : t.copyLink}
        </button>
      </div>

      {/* Header */}
      <GlassCard className="p-6 sm:p-8 mb-8" glow={project.glow} hover={false}>
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              project.glow === 'chlorophyll'
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
            }`}
          >
            {project.statusLabel[lang]}
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {project.tag[lang]}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {project.title[lang]}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {project.subtitle[lang]}
        </p>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-opacity"
              >
                {link.kind === 'github' ? (
                  <Github className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                )}
                {link.label[lang]}
              </a>
            ))}
          </div>
        )}
      </GlassCard>

      {/* Visual Gallery */}
      <section aria-label={lang === 'fr' ? 'Images du projet' : 'Project visuals'} className="mb-10">
        <div className="grid md:grid-cols-12 gap-5">
          <GlassCard className={`overflow-hidden ${project.gallery.length > 0 ? 'md:col-span-7' : 'md:col-span-12'}`} hover={false}>
            <figure>
              <button
                type="button"
                onClick={() => setLightbox(project.cover)}
                aria-label={`${lang === 'fr' ? 'Agrandir' : 'Enlarge'}: ${project.cover.alt[lang]}`}
                className="group relative block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={project.cover.src}
                  width={project.cover.width}
                  height={project.cover.height}
                  alt={project.cover.alt[lang]}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/65 text-white text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  {lang === 'fr' ? 'Agrandir' : 'Enlarge'}
                </span>
              </button>
              <figcaption className="p-3.5 text-xs text-muted-foreground border-t border-border">
                {project.cover.caption[lang]}
              </figcaption>
            </figure>
          </GlassCard>

          {project.gallery.length > 0 && (
            <div className="md:col-span-5 grid gap-5">
              {project.gallery.map((img) => (
                <GlassCard key={img.src} className="overflow-hidden" hover={false}>
                  <figure>
                    <button
                      type="button"
                      onClick={() => setLightbox(img)}
                      aria-label={`${lang === 'fr' ? 'Agrandir' : 'Enlarge'}: ${img.alt[lang]}`}
                      className="group relative block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <img
                        src={img.src}
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        alt={img.alt[lang]}
                        className="w-full h-36 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <span className="absolute bottom-2.5 right-2.5 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-black/65 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </button>
                    <figcaption className="px-3.5 py-2.5 text-xs text-muted-foreground border-t border-border">
                      {img.caption[lang]}
                    </figcaption>
                  </figure>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt[lang]}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-[#0e1319] border border-white/15 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label={lang === 'fr' ? 'Fermer l’aperçu' : 'Close preview'}
              className="absolute top-3 right-3 z-10 min-w-[44px] min-h-[44px] rounded-xl bg-black/70 text-white flex items-center justify-center hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt[lang]}
              className="w-full max-h-[78vh] object-contain bg-black/40"
            />
            <p className="px-4 py-3 text-xs sm:text-sm text-zinc-300 border-t border-white/10">
              {lightbox.caption[lang]}
            </p>
          </div>
        </div>
      )}

      {/* Two-level tabs: Story first, Technical details on demand */}
      <div
        role="tablist"
        aria-label={lang === 'fr' ? 'Niveau de lecture' : 'Reading mode'}
        className="flex flex-wrap gap-2 mb-6"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'story'}
          onClick={() => setTab('story')}
          className={`inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            tab === 'story'
              ? 'bg-primary text-primary-foreground'
              : 'glass text-muted-foreground hover:text-foreground'
          }`}
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          {t.tabStory}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={tab === 'tech'}
          onClick={() => setTab('tech')}
          className={`inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            tab === 'tech'
              ? 'bg-primary text-primary-foreground'
              : 'glass text-muted-foreground hover:text-foreground'
          }`}
        >
          <Layers className="w-4 h-4" aria-hidden="true" />
          {t.tabTech}
        </button>
      </div>

      {tab === 'story' ? (
        <div className="grid gap-4">
          {[
            { label: t.storyLabels.problem, text: project.story.problem[lang] },
            { label: t.storyLabels.context, text: project.story.context[lang] },
            { label: t.storyLabels.role, text: project.story.role[lang] },
            { label: t.storyLabels.built, text: project.story.built[lang] },
            { label: t.storyLabels.workingAndLimits, text: project.story.workingAndLimits[lang] },
          ].map((block) => (
            <GlassCard key={block.label} className="p-5 sm:p-6" hover={false}>
              <h2 className="text-lg font-semibold mb-2">{block.label}</h2>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-[70ch]">
                {block.text}
              </p>
            </GlassCard>
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          <GlassCard className="p-5 sm:p-6" hover={false}>
            <h2 className="text-lg font-semibold mb-2">{t.techLabels.choices}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[72ch]">
              {project.technical.optionsAndChoices[lang]}
            </p>
          </GlassCard>

          <GlassCard className="p-5 sm:p-6" hover={false}>
            <h2 className="text-lg font-semibold mb-3">{t.techLabels.architecture}</h2>
            <ul className="space-y-2.5">
              {project.technical.architecture.map((step, i) => (
                <li key={step.fr} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-primary/15 text-primary mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step[lang]}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-4">
            <GlassCard className="p-5 sm:p-6" hover={false}>
              <h2 className="text-lg font-semibold mb-2">{t.techLabels.tests}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.technical.testsAndMeasures[lang]}
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6" hover={false}>
              <h2 className="text-lg font-semibold mb-2">{t.techLabels.limits}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.technical.difficultiesAndLimits[lang]}
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-5 sm:p-6" hover={false}>
            <h2 className="text-sm font-semibold mb-3">{t.techLabels.stack}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technical.stack.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      )}

      {/* Other studies */}
      <nav aria-label={lang === 'fr' ? 'Autres études de cas' : 'Other case studies'} className="mt-12 pt-8 border-t border-border">
        <div className="grid sm:grid-cols-2 gap-4">
          {mainProjects
            .filter((p) => p.slug !== project.slug)
            .map((other) => (
              <button
                key={other.slug}
                type="button"
                onClick={() => onSelect(other.slug)}
                className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
              >
                <GlassCard className="p-5 h-full" glow={other.glow}>
                  <span className="text-xs font-mono text-primary">{other.statusLabel[lang]}</span>
                  <div className="font-semibold text-base mt-1">{other.title[lang]}</div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {other.subtitle[lang]}
                  </p>
                </GlassCard>
              </button>
            ))}
        </div>
      </nav>
    </article>
  );
}
