import { Cpu, Radio, Server, BarChart3, Brain, Monitor, Dna } from 'lucide-react';
import { skills } from '@/data';
import { GlassCard } from '@/components/ui-custom/GlassCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui-custom/AnimatedSection';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Radio,
  Server,
  BarChart3,
  Brain,
  Monitor,
  Dna
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="section-padding max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Ce que je sais faire
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Compétences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un pipeline complet du capteur à l'interface —
            avec une approche système et une curiosité pour le vivant.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];

            return (
              <StaggerItem key={skill.id}>
                <GlassCard
                  className="p-5 h-full group"
                  glow={index < 2 ? 'chlorophyll' : index < 4 ? 'amber' : 'none'}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                      'bg-gradient-to-br',
                      index < 2 && 'from-emerald-500/20 to-emerald-600/10',
                      index >= 2 && index < 4 && 'from-amber-500/20 to-amber-600/10',
                      index >= 4 && 'from-blue-500/20 to-blue-600/10'
                    )}>
                      <Icon className={cn(
                        'w-6 h-6',
                        index < 2 && 'text-emerald-500',
                        index >= 2 && index < 4 && 'text-amber-500',
                        index >= 4 && 'text-blue-500'
                      )} />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-1">{skill.label}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
