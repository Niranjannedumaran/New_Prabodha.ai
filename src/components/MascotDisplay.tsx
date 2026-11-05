import React from 'react';

interface MascotDisplayProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  glow?: boolean;
  priority?: boolean;
}

export const MascotDisplay: React.FC<MascotDisplayProps> = ({
  src,
  alt,
  className = '',
  size = 'md',
  glow = true,
}) => {
  const isTransparentPng = src.endsWith('.png');

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    xl: 'w-52 h-52 sm:w-64 sm:h-64',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
  };

  if (isTransparentPng) {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
        {/* Soft violet radial ambiance behind transparent mascot */}
        {glow && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7652C8]/25 via-[#9B74F3]/15 to-transparent blur-xl pointer-events-none -z-0" />
        )}
        <img
          src={src}
          alt={alt}
          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(48,32,68,0.18)] dark:drop-shadow-[0_12px_28px_rgba(118,82,200,0.35)] transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
      </div>
    );
  }

  // Framed for JPG assets to blend with light and dark themes
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8E1F5] dark:border-[#2E2442] bg-[#FAF8FE] dark:bg-[#14101F] shadow-soft transition-all duration-300 group ${sizeClasses[size]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14101F]/40 via-transparent to-transparent pointer-events-none opacity-0 dark:opacity-60 transition-opacity" />
    </div>
  );
};

