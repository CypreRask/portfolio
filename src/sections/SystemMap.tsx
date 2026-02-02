import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Activity, Radio, Server, Brain, Monitor, Target,
  ArrowRight, ChevronRight
} from 'lucide-react';
import { systemStages, projects } from '@/data';
import { GlassCard } from '@/components/ui-custom/GlassCard';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Activity,
  Radio,
  Server,
  Brain,
  Monitor,
  Target
};

export const SystemMap: React.FC = () => {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  // Auto-scroll to related projects when a stage is selected
  React.useEffect(() => {
    if (selectedStage) {
      setTimeout(() => {
        const el = document.getElementById('related-projects');
        if (el) {
          const yOffset = -80; // Offset for navbar
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [selectedStage]);


  const activeStage = selectedStage || hoveredStage;

  const relatedProjects = useMemo(() => {
    if (!activeStage) return [];
    const stage = systemStages.find(s => s.id === activeStage);
    if (!stage) return [];
    return projects.filter(p => stage.projectIds.includes(p.id));
  }, [activeStage]);

  return (
    <section id="system-map" className="relative py-24 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            System Map
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Du capteur à la décision : un pipeline complet qui traverse
            l'énergie, les données, l'intelligence et l'action.
          </p>
        </AnimatedSection>

        {/* Pipeline */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/30 via-amber-500/30 to-emerald-500/30 -translate-y-1/2 hidden lg:block" />

            {/* Stages */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {systemStages.map((stage, index) => {
                const Icon = iconMap[stage.icon];
                const isActive = activeStage === stage.id;
                const isHighlighted = activeStage && !isActive;

                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredStage(stage.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
                    className="relative"
                  >
                    <GlassCard
                      className={cn(
                        'p-4 cursor-pointer h-full',
                        isActive && 'ring-2 ring-primary',
                        isHighlighted && 'opacity-50'
                      )}
                      glow={isActive ? 'chlorophyll' : 'none'}
                    >
                      {/* Stage number */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto transition-colors',
                          isActive ? 'bg-primary/20' : 'bg-white/10'
                        )}
                        style={{ color: isActive ? stage.color : undefined }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Label */}
                      <h3 className="text-sm font-semibold text-center mb-1">
                        {stage.label}
                      </h3>

                      {/* Description on hover/active */}
                      <AnimatePresence>
                        {(isActive || window.innerWidth < 1024) && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-muted-foreground text-center"
                          >
                            {stage.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Project count */}
                      <div className="mt-2 text-center">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          {projects.filter(p => stage.projectIds.includes(p.id)).length} projet{projects.filter(p => stage.projectIds.includes(p.id)).length > 1 ? 's' : ''}
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </GlassCard>

                    {/* Arrow (hidden on mobile) */}
                    {index < systemStages.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Related Projects */}
        <AnimatePresence>
          {relatedProjects.length > 0 && (
            <motion.div
              id="related-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">
                Projets liés
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {relatedProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={`#projects`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        const el = document.getElementById(`project-${project.id}`);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el?.classList.add('ring-2', 'ring-primary');
                        setTimeout(() => el?.classList.remove('ring-2', 'ring-primary'), 2000);
                      }, 500);
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4" glow="amber">
                      <h4 className="font-medium text-sm">{project.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </GlassCard>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pipeline flow visualization */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="relative h-24 rounded-2xl overflow-hidden glass">
            {/* Animated flow */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(160, 70%, 45%)" />
                  <stop offset="50%" stopColor="hsl(38, 90%, 55%)" />
                  <stop offset="100%" stopColor="hsl(160, 70%, 45%)" />
                </linearGradient>
              </defs>

              {/* Flow line */}
              <motion.path
                d="M0 48 Q200 20 400 48 T800 48 T1200 48 T1600 48 T2000 48 T2400 48 T2800 48 T3200 48"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -200 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Stage labels */}
            <div className="absolute inset-0 flex items-center justify-around px-4">
              {['Capteurs', 'Réseau', 'API', 'IA', 'Action'].map((label, i) => (
                <div key={i} className="text-xs font-medium text-muted-foreground">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
