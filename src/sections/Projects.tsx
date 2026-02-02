import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Lock } from 'lucide-react';
import { projects, type ProjectCategory, type Project } from '@/data';
import { GlassCard, StatusBadge } from '@/components/ui-custom/GlassCard';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { ProjectModal } from '@/components/ui-custom/ProjectModal';
import { cn } from '@/lib/utils';

const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'iot', label: 'IoT' },
  { id: 'ai', label: 'IA' },
  { id: 'bio', label: 'Bio' },
  { id: 'finance', label: 'Finance' }
];

const categoryColors: Record<ProjectCategory, string> = {
  iot: 'text-blue-500',
  ai: 'text-pink-500',
  systems: 'text-amber-500',
  bio: 'text-emerald-500',
  finance: 'text-purple-500'
};

const categoryBgColors: Record<ProjectCategory, string> = {
  iot: 'bg-blue-500/10',
  ai: 'bg-pink-500/10',
  systems: 'bg-amber-500/10',
  bio: 'bg-emerald-500/10',
  finance: 'bg-purple-500/10'
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Projets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Du hardware à l'IA — des systèmes complets assemblés bout en bout.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeFilter === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'glass text-muted-foreground hover:text-foreground'
              )}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                id={`project-${project.id}`}
                className="h-full"
              >
                <GlassCard
                  className="h-full flex flex-col"
                  glow={project.isSensitive ? 'amber' : 'chlorophyll'}
                  onClick={() => openModal(project)}
                >
                  {/* Header */}
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className={cn(
                        'text-xs font-medium uppercase tracking-wider px-2 py-1 rounded',
                        categoryBgColors[project.category],
                        categoryColors[project.category]
                      )}>
                        {project.category}
                      </span>
                      <StatusBadge status={project.status} />
                    </div>

                    <div className="flex items-start gap-2">
                      <h3 className="text-lg font-semibold mb-1">
                        {project.title}
                      </h3>
                      {project.isSensitive && (
                        <Lock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    {project.isSensitive && (
                      <p className="text-xs text-amber-500 mt-2 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Données masquées — démo avec données synthétiques
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="p-5 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded bg-white/10 dark:bg-white/5 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-0.5 rounded bg-white/10 dark:bg-white/5 text-muted-foreground">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Voir le case study
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};
