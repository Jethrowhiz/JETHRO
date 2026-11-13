import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'watermark';
  theme?: 'light' | 'dark';
  className?: string;
}

export const JethroMonogram: React.FC<{ sizeClass?: string; className?: string; theme?: 'light' | 'dark' }> = ({
  sizeClass = 'w-8 h-8 sm:w-9 sm:h-9',
  className = '',
  theme = 'light',
}) => {
  const logoSrc = theme === 'dark' ? '/assets/images/logo-white.png' : '/assets/images/logo.png';
  return (
    <img
      src={logoSrc}
      alt="Jethro Logo"
      className={`${sizeClass} ${className} object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
      loading="eager"
    />
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'light',
  className = '',
}) => {
  const sizeMap = {
    sm: { img: 'w-7 h-7', text: 'text-base font-bold' },
    md: { img: 'w-8 h-8 sm:w-9 sm:h-9', text: 'text-lg sm:text-xl font-extrabold' },
    lg: { img: 'w-10 h-10 sm:w-11 sm:h-11', text: 'text-xl sm:text-2xl font-extrabold' },
    watermark: { img: 'w-full h-full', text: '' },
  };

  const logoSrc = theme === 'dark' ? '/assets/images/logo-white.png' : '/assets/images/logo.png';
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#111827]';

  if (variant === 'monogram') {
    return (
      <img
        src={logoSrc}
        alt="Jethro"
        className={`${sizeMap[size].img} object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <img
        src={logoSrc}
        alt="Jethro Logo"
        className={`${sizeMap[size].img} object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
        loading="eager"
      />
      <span className={`${sizeMap[size].text} tracking-tight ${textColor} transition-colors`}>
        Jethro
      </span>
    </div>
  );
};
