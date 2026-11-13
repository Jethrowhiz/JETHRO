import React from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessModalProps {
  isOpen: boolean;
  senderName: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  senderName,
  onClose,
}) => {
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
            className="relative z-10 w-full max-w-md bg-[#FFF9EE] border border-[#E8DAC4] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 md:p-10 text-center shadow-2xl"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8A65D]/20 text-[#C47A3E] flex items-center justify-center mx-auto mb-4 sm:mb-5">
              <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#171310] mb-2">Message Received!</h3>
            <p className="text-xs sm:text-sm text-[#453A33] mb-6 leading-relaxed">
              Thank you, <span className="font-bold text-[#54230F]">{senderName || 'friend'}</span>. Your project inquiry has been received. I look forward to reviewing your requirements and will reply within 24 hours.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#54230F] text-[#FFF9EE] hover:bg-[#713315] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Close Window</span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

