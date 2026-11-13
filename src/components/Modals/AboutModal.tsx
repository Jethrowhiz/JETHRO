import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#171310]/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF9EE] border border-[#E8DAC4] rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 md:p-10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-[#E8DAC4]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C47A3E]"></span>
                <span className="text-xs font-mono font-bold uppercase text-[#54230F]">
                  Developer Retrospective
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full hover:bg-[#E8DAC4]/40 text-[#54230F] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-5 sm:space-y-6 text-[#453A33]">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#171310] tracking-tight">
                Crafting Digital Products with Purpose and Precision
              </h3>

              <p className="text-sm sm:text-base leading-relaxed">
                I am Jethro Samson, a software developer focused on the intersection of intuitive frontend engineering, robust application architecture, and emerging Web3 technologies.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                My philosophy revolves around intentional craft: software should not merely function; it should communicate clarity, evoke trust, and operate with remarkable speed. Every line of TypeScript, component breakdown, and smart contract method is engineered to withstand scale while keeping the user experience seamless and enjoyable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 py-2 sm:py-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F6EBD6] border border-[#E8DAC4]">
                  <div className="text-xs sm:text-sm font-bold text-[#54230F] mb-1">Architecture-First Mindset</div>
                  <p className="text-xs text-[#7A695E] leading-relaxed">
                    Rigorous planning, state predictability, and modular separation of concerns before code is written.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F6EBD6] border border-[#E8DAC4]">
                  <div className="text-xs sm:text-sm font-bold text-[#54230F] mb-1">Aesthetic &amp; Performance Rigor</div>
                  <p className="text-xs text-[#7A695E] leading-relaxed">
                    Sub-second first contentful paint, 60fps micro-interactions, and accessible typography scale.
                  </p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#54230F] text-[#FFF9EE] hover:bg-[#713315] hover:shadow-lg transition-all duration-200"
                >
                  <span>Work With Jethro</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

