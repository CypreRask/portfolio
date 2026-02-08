import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, Lightbulb, Wrench, CheckCircle, Lock } from 'lucide-react';
import type { Project } from '@/data';
import { GlassCard, StatusBadge } from './GlassCard';
import { cn } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center items-start sm:items-center overflow-y-auto custom-scrollbar bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-12">
          {/* Backdrop click handler layer */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl my-auto pointer-events-auto"
          >
            <GlassCard className="w-full flex flex-col max-h-[85vh] sm:max-h-none sm:h-auto overflow-hidden sm:overflow-visible" hover={false}>
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-white/10 flex-shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <StatusBadge status={project.status} />
                    <span className={cn(
                      'text-xs font-medium uppercase tracking-wider',
                      project.category === 'iot' && 'text-blue-500',
                      project.category === 'ai' && 'text-pink-500',
                      project.category === 'bio' && 'text-emerald-500',
                      project.category === 'systems' && 'text-amber-500',
                      project.category === 'finance' && 'text-purple-500'
                    )}>
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h2>
                    {project.isSensitive && (
                      <Lock className="w-6 h-6 text-amber-500" />
                    )}
                  </div>
                  <p className="text-muted-foreground mt-1">
                    {project.subtitle}
                  </p>
                  {project.isSensitive && (
                    <p className="text-sm text-amber-500 mt-2 flex items-center gap-1">
                      <Lock className="w-4 h-4" />
                      Projet privé — données masquées (démo synthétique à venir)
                    </p>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content - Scrollable INTERNAL on mobile, AUTO on desktop if needed, but primary scroll is Overlay */}
              <div className="p-6 space-y-8 overflow-y-auto sm:overflow-visible max-h-[60vh] sm:max-h-none custom-scrollbar">
                {/* Description */}
                <section>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>
                </section>

                {/* Problem / Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <GlassCard className="p-5" hover={false}>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-amber-500" />
                      <h3 className="font-semibold">Problème</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </GlassCard>

                  <GlassCard className="p-5" hover={false}>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <h3 className="font-semibold">Solution</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </GlassCard>
                </div>

                {/* Architecture */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-5 h-5 text-blue-500" />
                    <h3 className="font-semibold text-lg">Architecture</h3>
                  </div>
                  <div className="space-y-2">
                    {project.architecture.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-white/5"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Demonstrations - Ce que ça démontre */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-pink-500" />
                    <h3 className="font-semibold text-lg">Ce que ça démontre</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.demonstrations.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Technologies */}
                <section>
                  <h3 className="font-semibold text-lg mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 dark:bg-white/5 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer */}
              {project.links && project.links.length > 0 && (
                <div className="p-6 border-t border-white/10 flex gap-3 flex-shrink-0">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
                        'bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
                      )}
                    >
                      {link.label === 'GitHub' ? (
                        <Github className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
