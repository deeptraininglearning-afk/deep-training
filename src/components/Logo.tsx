import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light background = dark logo text; dark background = white logo text
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const isDarkBg = variant === 'dark';
  
  // Height adjustments for different contexts
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-20'
  };

  const navyColor = isDarkBg ? '#FFFFFF' : '#002147';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg 
        className={`${heights[size]} w-auto block`} 
        viewBox="0 0 450 135" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter D */}
        <path 
          d="M 20 12 H 60 C 86 12 104 26 104 52 C 104 78 86 92 60 92 H 20 V 12 Z M 41 27 V 77 H 59 C 75 77 84 69 84 52 C 84 35 75 27 59 27 H 41 Z" 
          fill={navyColor} 
        />

        {/* First E (3 Horizontal Dark Navy Bars) */}
        <rect x="132" y="12" width="84" height="17" rx="8.5" fill={navyColor} />
        <rect x="132" y="43.5" width="84" height="17" rx="8.5" fill={navyColor} />
        <rect x="132" y="75" width="84" height="17" rx="8.5" fill={navyColor} />

        {/* Second E (3 Horizontal Cyan & Blue Gradient Bars) */}
        <rect x="238" y="12" width="84" height="17" rx="8.5" fill="#23B5F5" />
        <rect x="238" y="43.5" width="84" height="17" rx="8.5" fill="#00A3E0" />
        <rect x="238" y="75" width="84" height="17" rx="8.5" fill="#1C72C8" />

        {/* Letter P */}
        <path 
          d="M 346 12 H 390 C 412 12 426 23 426 42 C 426 61 412 72 390 72 H 367 V 92 H 346 V 12 Z M 367 27 V 57 H 388 C 399 57 406 51 406 42 C 406 33 399 27 388 27 H 367 Z" 
          fill={navyColor} 
        />

        {/* Subtitle Section: Left Line, Text, Right Line */}
        <line x1="20" y1="120" x2="94" y2="120" stroke="#00A8E8" strokeWidth="2.5" strokeLinecap="round" />

        <text 
          x="223" 
          y="124" 
          textAnchor="middle" 
          fill={navyColor} 
          fontSize="13" 
          fontWeight="700" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          letterSpacing="2.4"
        >
          TRAINING & LEARNING SOLUTIONS
        </text>

        <line x1="352" y1="120" x2="426" y2="120" stroke="#00A8E8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

