import React from 'react';
import { motion } from 'framer-motion';

export const HeroPortrait: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Clean Circular Portrait Container with Studio Grey Background */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px] xl:w-[330px] xl:h-[330px] rounded-full overflow-hidden bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200/70">
        <img
          src="/assets/images/jethro-hero-grey.png"
          alt="Jethro — Software Developer"
          className="w-full h-full object-cover object-center filter saturate-[1.02] contrast-[1.02] transition-transform duration-500 hover:scale-105"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/images/avatar.png';
          }}
        />
      </div>
    </motion.div>
  );
};