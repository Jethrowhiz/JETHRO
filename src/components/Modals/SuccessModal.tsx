import React from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessModalProps {
  isOpen: boolean;
  senderName?: string;
  reachChannel?: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  reachChannel = 'WhatsApp',
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Dimmed backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container matching reference screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-3xl p-8 sm:p-12 md:p-14 text-center shadow-2xl border border-gray-100 my-auto"
          >
            {/* Top Status Icon */}
            <div className="w-12 h-12 rounded-full bg-[#FDF2F0] flex items-center justify-center mx-auto mb-5 sm:mb-6">
              <div className="w-6 h-6 rounded-full border border-[#70160D] flex items-center justify-center text-[#70160D]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-2 sm:mb-3">
              Request sent
            </h3>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-gray-500 max-w-sm mx-auto leading-relaxed mb-6 sm:mb-8 font-normal">
              Thanks! I have your project details and will reach out via {reachChannel || 'WhatsApp'} within 24 hours.
            </p>

            {/* Pill Action Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB] active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Back to the site</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
