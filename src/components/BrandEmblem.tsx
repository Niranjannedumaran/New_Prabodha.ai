import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({
  className = '',
  size = 'md',
  animated = true,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* 4-pointed radiant star from the official logo */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${sizeClasses[size]} text-[#7652C8] dark:text-[#B395F7] ${
          animated ? 'hover:scale-125 hover:rotate-45 transition-transform duration-300' : ''
        }`}
      >
        <defs>
          <linearGradient id="brandStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDD2F7" />
            <stop offset="45%" stopColor="#9B74F3" />
            <stop offset="100%" stopColor="#7652C8" />
          </linearGradient>
        </defs>
        <path
          d="M12 1.5C12 7.29899 7.29899 12 1.5 12C7.29899 12 12 16.701 12 22.5C12 16.701 16.701 12 22.5 12C16.701 12 12 7.29899 12 1.5Z"
          fill="url(#brandStarGrad)"
        />
      </svg>
    </div>
  );
};

