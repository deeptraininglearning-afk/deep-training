import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light background = dark logo text; dark background = white logo text
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const isDarkBg = variant === 'dark';
  
  // Size adjustments
  const heights = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16'
  };

  const navyColor = isDarkBg ? '#FFFFFF' : '#002147';
  const cyanColor = '#00A8E8';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg 
        className={`${heights[size]} w-auto`} 
        viewBox="0 0 450 110" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter D */}
        <path 
          d="M 30 18 H 68 C 92 18 108 30 108 55 C 108 80 92 92 68 92 H 30 V 18 Z M 48 33 V 77 H 67 C 82 77 90 69 90 55 C 90 41 82 33 67 33 H 48 Z" 
          fill={navyColor} 
        />

        {/* First E (3 Horizontal Bars in Navy) */}
        <rect x="140" y="18" width="85" height="15" rx="7.5" fill={navyColor} />
        <rect x="140" y="47.5" width="85" height="15" rx="7.5" fill={navyColor} />
        <rect x="140" y="77" width="85" height="15" rx="7.5" fill={navyColor} />

        {/* Second E (3 Horizontal Bars in Cyan) */}
        <rect x="242" y="18" width="85" height="15" rx="7.5" fill={cyanColor} />
        <rect x="242" y="47.5" width="85" height="15" rx="7.5" fill={cyanColor} />
        <rect x="242" y="77" width="85" height="15" rx="7.5" fill={cyanColor} />

        {/* Letter P */}
        <path 
          d="M 352 18 H 392 C 412 18 426 28 426 46 C 426 64 412 74 392 74 H 370 V 92 H 352 V 18 Z M 370 33 V 59 H 390 C 400 59 408 53 408 46 C 408 39 400 33 390 33 H 370 Z" 
          fill={navyColor} 
        />
      </svg>

      {/* Subtitle with side lines */}
      <div className="w-full flex items-center justify-between gap-2 mt-1">
        <div className="h-[2px] flex-1 bg-[#00A8E8]"></div>
        <span className={`text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase font-sans ${isDarkBg ? 'text-gray-200' : 'text-[#002147]'}`}>
          TRAINING & LEARNING SOLUTIONS
        </span>
        <div className="h-[2px] flex-1 bg-[#00A8E8]"></div>
      </div>
    </div>
  );
};
