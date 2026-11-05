import React from 'react';

interface PrabodhaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const PrabodhaLogo: React.FC<PrabodhaLogoProps> = ({
  className = '',
  variant = 'auto',
  size = 'md',
  showTagline = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  // Determine text color based on variant
  // 'light' = white text (for dark backgrounds like footer)
  // 'dark' = dark text (for light backgrounds)
  // 'auto' = adapts automatically (dark in light theme, white in dark theme)
  const textColorClass =
    variant === 'light'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-[#16131F]'
      : 'text-[#16131F] dark:text-white';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 font-display select-none group cursor-pointer ${className}`}>
      {/* Official Brand Logo Icon with Metallic Violet Sheen & Dynamic Hover */}
      <div className="relative flex-shrink-0">
        {/* Ambient violet glow on hover */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7652C8] via-[#B395F7] to-[#9B74F3] opacity-0 group-hover:opacity-75 blur-md transition-all duration-300 -z-0" />

        <div
          className={`relative ${iconSizes[size]} rounded-2xl overflow-hidden shadow-soft-sm border border-[#DDD2F7] dark:border-[#382658] bg-[#0E0C16] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(117,80,200,0.45)] group-active:scale-95`}
        >
          <img
            src="/assets/brand/prabodha-logo.png"
            alt="Prabodha AI Logo - Ascending Learner & Knowledge Star"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="eager"
          />

          {/* Specular light sweep on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        </div>

        {/* 4-pointed radiant sparkle badge */}
        <div className="absolute -top-1 -right-1 w-3 h-3 text-[#B395F7] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full filter drop-shadow">
            <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
          </svg>
        </div>
      </div>

      {/* Brand Name & AI Pill Badge - Guaranteed Crystal-Clear Visibility */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight ${textColorClass} ${textSizes[size]} transition-colors duration-200 group-hover:text-[#7550C8] dark:group-hover:text-[#B99CFF]`}
          >
            Prabodha
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-[#7550C8] to-[#9B74F3] text-white shadow-xs font-mono">
            AI
          </span>
        </div>

        {showTagline && (
          <span className="text-[10px] text-[#595466] dark:text-white/60 tracking-wider uppercase font-medium mt-0.5">
            Learn • Explore • Evolve
          </span>
        )}
      </div>
    </div>
  );
};
