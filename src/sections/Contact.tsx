import { motion } from 'framer-motion';
import {
  Mail, MapPin, Github, Linkedin, ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '@/data';
import { GlassCard } from '@/components/ui-custom/GlassCard';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { cn } from '@/lib/utils';

export const Contact: React.FC = () => {

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.github,
      href: `https://${personalInfo.github}`,
      color: 'hover:text-purple-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`,
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-emerald-500'
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative section-padding max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Proposez un défi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je cherche des problèmes complexes à résoudre en IoT, IA ou Bio.
            Discutons de vos contraintes.
          </p>
        </AnimatedSection>

        <div className="flex justify-center">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} className="w-full max-w-2xl">
            <div className="space-y-6">
              {/* Availability */}
              <GlassCard className="p-6" glow="chlorophyll">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium">{personalInfo.availability}</span>
                </div>
              </GlassCard>

              {/* Links */}
              <div className="grid gap-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <GlassCard className="p-4 flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{link.label}</div>
                          <div className="font-medium">{link.value}</div>
                        </div>
                      </div>
                      <ArrowUpRight className={cn(
                        'w-5 h-5 text-muted-foreground transition-colors',
                        link.color
                      )} />
                    </GlassCard>
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <GlassCard className="p-4 flex items-center gap-4" hover={false}>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Localisation</div>
                  <div className="font-medium">{personalInfo.location}</div>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection delay={0.3} className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">MS</span>
              </div>
              <span className="font-semibold">{personalInfo.name}</span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              © 2026 {personalInfo.name}. Construit avec React, TypeScript & Tailwind — et généré avec l'aide précieuse de l'IA.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#hero"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Haut de page
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
