import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'none' | 'chlorophyll' | 'amber';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = 'none',
  onClick
}) => {
  const glowStyles = {
    none: '',
    chlorophyll: 'hover:shadow-[0_0_40px_-10px_hsl(160,70%,45%,0.3)]',
    amber: 'hover:shadow-[0_0_40px_-10px_hsl(38,90%,55%,0.3)]'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className={cn(
        'relative rounded-2xl overflow-hidden',
        'backdrop-blur-xl',
        'bg-white/70 dark:bg-black/40',
        'border border-white/20 dark:border-white/10',
        'transition-shadow duration-300',
        glowStyles[glow],
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

interface GlassBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'chlorophyll' | 'amber' | 'blue' | 'pink';
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-white/20 dark:bg-white/10 text-foreground',
    chlorophyll: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400',
    amber: 'bg-amber-500/20 text-amber-700 dark:text-amber-400',
    blue: 'bg-blue-500/20 text-blue-700 dark:text-blue-400',
    pink: 'bg-pink-500/20 text-pink-700 dark:text-pink-400'
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      'backdrop-blur-sm',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

interface StatusBadgeProps {
  status: 'deployed' | 'prototype' | 'wip';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    deployed: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400',
    wip: 'bg-amber-500/20 text-amber-700 dark:text-amber-400',
    prototype: 'bg-pink-500/20 text-pink-700 dark:text-pink-400'
  };

  const labels = {
    deployed: 'Déployé',
    wip: 'En cours',
    prototype: 'Prototype'
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      'backdrop-blur-sm',
      styles[status]
    )}>
      <span className={cn(
        'w-1.5 h-1.5 rounded-full mr-1.5',
        status === 'deployed' && 'bg-emerald-500',
        status === 'wip' && 'bg-amber-500',
        status === 'prototype' && 'bg-pink-500'
      )} />
      {labels[status]}
    </span>
  );
};
