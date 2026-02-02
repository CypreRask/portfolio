import { motion } from 'framer-motion';
import { Github, Sparkles, Cpu, Brain, Leaf, Code, Layers } from 'lucide-react';
import { personalInfo, heroStats } from '@/data';
import { GlassCard } from '@/components/ui-custom/GlassCard';
import { NetworkBackground } from '@/components/ui-custom/Background';
import { cn } from '@/lib/utils';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <NetworkBackground />

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-6xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="inline-flex items-center gap-2 px-4 py-2" hover={false}>
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium">{personalInfo.subtitle}</span>
              </GlassCard>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-foreground">{personalInfo.name}</span>
              <span className="block mt-2 text-muted-foreground text-2xl sm:text-3xl font-normal">
                {personalInfo.title}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <button
                onClick={scrollToProjects}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-3 sm:px-6 rounded-xl flex-1 sm:flex-none justify-center whitespace-nowrap',
                  'bg-primary text-primary-foreground font-medium text-sm sm:text-base',
                  'hover:bg-primary/90 transition-colors btn-shine'
                )}
              >
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                Projets
              </button>

              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-3 sm:px-6 rounded-xl flex-1 sm:flex-none justify-center whitespace-nowrap',
                  'glass text-foreground font-medium text-sm sm:text-base',
                  'hover:bg-white/20 dark:hover:bg-white/10 transition-colors'
                )}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                GitHub
              </a>
            </motion.div>

            {/* Stats - sans chiffres inventés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-4"
            >
              {heroStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-48 h-48 rounded-full border border-dashed border-primary/30" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-64 h-64 rounded-full border border-dashed border-amber-500/20" />
              </motion.div>

              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <GlassCard
                  className="w-24 h-24 rounded-full flex items-center justify-center glow-chlorophyll"
                  hover={false}
                >
                  <Layers className="w-10 h-10 text-primary" />
                </GlassCard>
              </div>

              {/* Orbiting nodes */}
              {[
                { icon: Cpu, angle: 0, color: 'text-blue-500', label: 'Hardware' },     // Hardware
                { icon: Leaf, angle: 90, color: 'text-emerald-500', label: 'Écologie' }, // Ecology
                { icon: Code, angle: 180, color: 'text-amber-500', label: 'Software' },  // Software (Architecture)
                { icon: Brain, angle: 270, color: 'text-pink-500', label: 'IA' }         // AI
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5
                  }}
                  style={{
                    transformOrigin: '0 0'
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      transform: `rotate(${item.angle}deg) translateX(120px) rotate(-${item.angle}deg)`
                    }}
                  >
                    <GlassCard
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      hover={false}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </GlassCard>
                  </div>
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + 120 * Math.cos((angle * Math.PI) / 180)}
                    y2={200 + 120 * Math.sin((angle * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
