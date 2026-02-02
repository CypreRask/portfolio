import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Mycelium pattern */}
      <div className="absolute inset-0 bg-mycelium opacity-30" />
      
      {/* Subtle curves */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="curves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path 
              d="M0 50 Q25 30 50 50 T100 50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
            <path 
              d="M0 70 Q25 50 50 70 T100 70" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#curves)" />
      </svg>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </div>
  );
};

interface FloatingNodeProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: number;
}

export const FloatingNode: React.FC<FloatingNodeProps> = ({ 
  className = '',
  delay = 0,
  duration = 6,
  size = 8
}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [-10, 10, -10],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};

export const DataFlowLines: React.FC = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(160, 70%, 45%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(160, 70%, 45%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(38, 90%, 55%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Animated lines */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${-100 + i * 300} ${100 + i * 150} Q${400 + i * 100} ${50 + i * 100} ${1500 + i * 200} ${200 + i * 150}`}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="10 20"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -300 }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </svg>
  );
};

interface NetworkNode {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const NetworkBackground: React.FC<{ nodes?: NetworkNode[] }> = ({ 
  nodes = [] 
}) => {
  const defaultNodes: NetworkNode[] = [
    { id: '1', x: 20, y: 30, size: 6, color: 'hsl(160, 70%, 45%)' },
    { id: '2', x: 40, y: 50, size: 8, color: 'hsl(38, 90%, 55%)' },
    { id: '3', x: 60, y: 25, size: 5, color: 'hsl(160, 70%, 45%)' },
    { id: '4', x: 80, y: 60, size: 7, color: 'hsl(38, 90%, 55%)' },
    { id: '5', x: 30, y: 70, size: 4, color: 'hsl(160, 70%, 45%)' },
    { id: '6', x: 70, y: 40, size: 6, color: 'hsl(38, 90%, 55%)' },
  ];

  const allNodes = nodes.length > 0 ? nodes : defaultNodes;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Connections */}
        {allNodes.map((node, i) => 
          allNodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            if (distance > 50) return null;
            
            return (
              <motion.line
                key={`${node.id}-${otherNode.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${otherNode.x}%`}
                y2={`${otherNode.y}%`}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity={0.1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: (i + j) * 0.2 }}
              />
            );
          })
        )}
        
        {/* Nodes */}
        {allNodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill={node.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, delay: i * 0.5 },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.5 }
            }}
          />
        ))}
      </svg>
    </div>
  );
};
