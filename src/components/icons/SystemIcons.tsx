import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const NetworkGraphIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <path d="M12 8v3a2 2 0 0 0 2 2h3" />
    <path d="M12 8v3a2 2 0 0 1-2 2H7" />
    <path d="M7.5 16.5l2-2" />
    <path d="M16.5 16.5l-2-2" />
  </svg>
);

export const MyceliumIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M12 6c-2-1-4-1-6 1" />
    <path d="M12 10c2-1 4-1 6 1" />
    <path d="M12 14c-2 1-4 1-6-1" />
    <path d="M12 18c2 1 4 1 6-1" />
    <circle cx="6" cy="7" r="1.5" fill="currentColor" />
    <circle cx="18" cy="11" r="1.5" fill="currentColor" />
    <circle cx="6" cy="13" r="1.5" fill="currentColor" />
    <circle cx="18" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

export const DataFlowIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12h4l2-4 4 8 4-8 2 4h4" />
    <circle cx="2" cy="12" r="1.5" fill="currentColor" />
    <circle cx="22" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const BioTechIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
    <path d="M8 15h8" />
    <path d="M9 18h6" />
  </svg>
);

export const CircuitIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M7 7h4v4H7z" />
    <path d="M13 13h4v4h-4z" />
    <path d="M11 9h2v2h-2z" fill="currentColor" />
    <path d="M7 11v2" />
    <path d="M17 11v2" />
    <path d="M11 17h2" />
  </svg>
);

export const LoRaIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M4 6a8 8 0 0 1 16 0" />
    <path d="M7 10a5 5 0 0 1 10 0" />
    <path d="M10 14a2 2 0 0 1 4 0" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

export const SensorIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </svg>
);

export const PipelineIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="6" width="6" height="12" rx="1" />
    <rect x="9" y="8" width="6" height="8" rx="1" />
    <rect x="16" y="4" width="6" height="16" rx="1" />
    <path d="M8 12h1" />
    <path d="M15 12h1" />
  </svg>
);

export const NeuronIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path d="M12 8c-2-2-2-4 0-6" />
    <path d="M12 8c2-2 2-4 0-6" />
    <path d="M12 16c-2 2-2 4 0 6" />
    <path d="M12 16c2 2 2 4 0 6" />
    <path d="M8 12c-2-2-4-2-6 0" />
    <path d="M8 12c-2 2-4 2-6 0" />
    <path d="M16 12c2-2 4-2 6 0" />
    <path d="M16 12c2 2 4 2 6 0" />
    <circle cx="12" cy="2" r="1.5" fill="currentColor" />
    <circle cx="12" cy="22" r="1.5" fill="currentColor" />
    <circle cx="2" cy="12" r="1.5" fill="currentColor" />
    <circle cx="22" cy="12" r="1.5" fill="currentColor" />
  </svg>
);
