import React from 'react';
import { HeroPortrait } from './HeroPortrait';
import { motion } from 'framer-motion';

interface HeroContentProps {
  onSelectService?: (service: string) => void;
  onOpenHire?: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenHire }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left w-full font-hero"
      style={{ fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* 1. Dark Crimson Eyebrow matching mrbayo.dev */}
      <span className="text-xs sm:text-sm font-semibold text-[#8B1E13] mb-2 sm:mb-2.5 block tracking-wide text-center lg:text-left">
        Software Developer
      </span>

      {/* 2. Main Headline (Centered on mobile, left-aligned on PC) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-bold leading-[1.12] tracking-tight text-[#111827] mb-3 sm:mb-4 text-center lg:text-left w-full">
        Solving Real-World Problems<br className="hidden sm:inline" /> with Software
      </h1>

      {/* 3. Mobile-only Portrait (Stacking order on mobile: Heading -> Portrait -> Supporting Info) */}
      <div className="w-full flex justify-center py-4 sm:py-5 lg:hidden">
        <HeroPortrait />
      </div>

      {/* 4. Supporting Description */}
      <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-lg mb-5 sm:mb-6 text-center lg:text-left mx-auto lg:mx-0">
        I’m a software developer focused on building modern web applications, user-friendly interfaces, and Web3 solutions that solve real-world problems.
      </p>

      {/* 5. Action Buttons (Two pill buttons matching mrbayo.dev) */}
      <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-[#70160D] text-white hover:bg-[#59120A] shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
        >
          <span>See my work</span>
        </a>

        <button
          type="button"
          onClick={onOpenHire}
          className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB] shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
        >
          <span>Hire me</span>
        </button>
      </div>
    </motion.div>
  );
};