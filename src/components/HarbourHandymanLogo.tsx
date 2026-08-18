import React from 'react';

interface HarbourHandymanLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'horizontal';
  theme?: 'dark' | 'light';
}

export const HarbourHandymanLogo: React.FC<HarbourHandymanLogoProps> = ({
  className = 'h-10',
  variant = 'full',
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0F172A';
  const roofRightColor = isDark ? '#FFFFFF' : '#0F172A';
  const windowColor = isDark ? '#FFFFFF' : '#0F172A';
  const orange = '#F58220'; // Exact warm vibrant orange from the brand logo

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 200 160"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized Hammer Left Roof Beam */}
        {/* Handle */}
        <path
          d="M 28 128 L 102 38 L 118 51 L 44 141 Z"
          fill={orange}
        />
        {/* Hammer Head */}
        <path
          d="M 90 28 C 96 14 116 10 132 18 L 138 23 L 130 33 L 122 30 C 114 26 104 29 100 36 Z"
          fill={orange}
        />
        <path
          d="M 124 28 L 142 42 L 132 54 L 114 40 Z"
          fill={orange}
        />
        {/* Left base horizontal foot */}
        <rect x="18" y="128" width="40" height="13" rx="3" fill={orange} />

        {/* Right Roof Beam */}
        <path
          d="M 124 55 L 176 128 L 160 139 L 108 67 Z"
          fill={roofRightColor}
        />
        {/* Right base horizontal foot */}
        <rect x="146" y="128" width="40" height="13" rx="3" fill={roofRightColor} />

        {/* Center Circular 4-Pane Window */}
        <circle cx="102" cy="115" r="22" fill={windowColor} />
        {/* Cross division lines in black/background */}
        <line x1="102" y1="91" x2="102" y2="139" stroke={isDark ? '#0B0F17' : '#FFFFFF'} strokeWidth="4" />
        <line x1="78" y1="115" x2="126" y2="115" stroke={isDark ? '#0B0F17' : '#FFFFFF'} strokeWidth="4" />
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Icon */}
        <svg
          viewBox="0 0 200 160"
          className="h-10 w-auto shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hammer Handle */}
          <path d="M 28 128 L 102 38 L 118 51 L 44 141 Z" fill={orange} />
          {/* Hammer Claw & Head */}
          <path d="M 90 28 C 96 14 116 10 132 18 L 138 23 L 130 33 L 122 30 C 114 26 104 29 100 36 Z" fill={orange} />
          <path d="M 124 28 L 142 42 L 132 54 L 114 40 Z" fill={orange} />
          <rect x="18" y="128" width="40" height="13" rx="3" fill={orange} />

          {/* Right Beam */}
          <path d="M 124 55 L 176 128 L 160 139 L 108 67 Z" fill={roofRightColor} />
          <rect x="146" y="128" width="40" height="13" rx="3" fill={roofRightColor} />

          {/* Window */}
          <circle cx="102" cy="115" r="22" fill={windowColor} />
          <line x1="102" y1="91" x2="102" y2="139" stroke={isDark ? '#0B0F17' : '#FFFFFF'} strokeWidth="4" />
          <line x1="78" y1="115" x2="126" y2="115" stroke={isDark ? '#0B0F17' : '#FFFFFF'} strokeWidth="4" />
        </svg>

        {/* Text */}
        <div className="flex flex-col">
          <span className="font-black tracking-tight text-lg sm:text-xl uppercase leading-none" style={{ color: textColor }}>
            HARBOUR <span style={{ color: orange }}>HANDYMAN</span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-orange-500 mt-0.5">
            YOUR ONE STOP HANDYMAN SERVICE
          </span>
        </div>
      </div>
    );
  }

  // Full Logo (Vertical Stacked matching image)
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <svg
        viewBox="0 0 240 160"
        className="w-32 sm:w-40 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hammer Handle */}
        <path d="M 44 128 L 118 38 L 134 51 L 60 141 Z" fill={orange} />
        {/* Hammer Claw */}
        <path d="M 106 28 C 112 14 132 10 148 18 L 154 23 L 146 33 L 138 30 C 130 26 120 29 116 36 Z" fill={orange} />
        {/* Hammer Striking Face */}
        <path d="M 140 28 L 158 42 L 148 54 L 130 40 Z" fill={orange} />
        {/* Left base horizontal foot */}
        <rect x="30" y="128" width="48" height="14" rx="3" fill={orange} />

        {/* Right Roof Beam */}
        <path d="M 140 55 L 196 128 L 180 139 L 124 67 Z" fill={roofRightColor} />
        {/* Right base horizontal foot */}
        <rect x="166" y="128" width="48" height="14" rx="3" fill={roofRightColor} />

        {/* Center Circular 4-Pane Window */}
        <circle cx="118" cy="115" r="23" fill={windowColor} />
        <line x1="118" y1="90" x2="118" y2="140" stroke={isDark ? '#0B0F17' : '#FFFFFF'} strokeWidth="4.5" />
        <line x1="93" y1="115" x2="143" y2="115" stroke={isDark ? '#0B0F17' : '#FFFFFF'} strokeWidth="4.5" />
      </svg>

      {/* HARBOUR HANDYMAN text */}
      <div className="font-black text-xl sm:text-2xl tracking-wider uppercase mt-1" style={{ color: textColor }}>
        HARBOUR HANDYMAN
      </div>

      {/* YOUR ONE STOP HANDYMAN SERVICE Pill */}
      <div
        className="mt-1 px-3.5 py-1 rounded-md text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-xs"
        style={{ backgroundColor: orange }}
      >
        YOUR ONE STOP HANDYMAN SERVICE
      </div>
    </div>
  );
};
