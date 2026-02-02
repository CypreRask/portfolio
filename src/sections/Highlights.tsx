import { Cpu, Network, Dna, ArrowUpRight } from 'lucide-react';
import { highlights } from '@/data';
import { GlassCard } from '@/components/ui-custom/GlassCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui-custom/AnimatedSection';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Network,
  Dna
};

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Ce qui me définit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trois piliers qui structurent mon approche : 
            des systèmes réels, une IA pragmatique, et une passion pour le vivant.
          </p>
        </AnimatedSection>

        <StaggerContainer 
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            
            return (
              <StaggerItem key={highlight.id}>
                <GlassCard 
                  className="h-full p-6 group"
                  glow={index === 0 ? 'chlorophyll' : index === 1 ? 'amber' : 'none'}
                >
                  {/* Icon */}
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center mb-5',
                    'bg-gradient-to-br',
                    index === 0 && 'from-emerald-500/20 to-emerald-600/10',
                    index === 1 && 'from-amber-500/20 to-amber-600/10',
                    index === 2 && 'from-blue-500/20 to-blue-600/10'
                  )}>
                    <Icon className={cn(
                      'w-7 h-7',
                      index === 0 && 'text-emerald-500',
                      index === 1 && 'text-amber-500',
                      index === 2 && 'text-blue-500'
                    )} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {highlight.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom quote */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <GlassCard className="inline-block max-w-2xl p-6" hover={false}>
            <blockquote className="text-lg italic text-muted-foreground">
              "La technologie est un moyen, pas une fin. 
              Ce qui compte, c'est ce qu'elle permet de comprendre et d'accomplir."
            </blockquote>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};
