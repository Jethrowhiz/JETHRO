import React from 'react';
import { Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingInfoCards: React.FC = () => {
  return (
    <>
      {/* Card 1: WHAT I BUILD (Top Left / Mid Left) */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1 -left-2 sm:-left-4 md:-left-6 z-20 max-w-[190px] sm:max-w-[220px] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#3D1708]/90 border border-white/20 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#E8A65D]/50"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-md bg-[#E8A65D]/20 text-[#E8A65D] flex items-center justify-center">
            <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8A65D]">
            WHAT I BUILD
          </span>
        </div>
        <p className="text-[11px] sm:text-xs font-semibold text-[#FFF9EE] tracking-tight pl-0.5 sm:pl-1">
          Websites &bull; Applications &bull; Web3
        </p>
      </motion.div>

      {/* Card 2: MY APPROACH (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-1 -right-2 sm:-right-4 md:-right-6 z-20 max-w-[200px] sm:max-w-[230px] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#3D1708]/90 border border-white/20 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#E8A65D]/50"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-md bg-[#E8A65D]/20 text-[#E8A65D] flex items-center justify-center">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8A65D]">
            MY APPROACH
          </span>
        </div>
        <p className="text-[11px] sm:text-xs font-medium text-[#F6EBD6]/90 pl-0.5 sm:pl-1 leading-snug">
          Thoughtful design. Clean engineering.
        </p>
      </motion.div>
    </>
  );
};

