import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onLoaded?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 750; // smooth 750ms loader

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          if (onLoaded) onLoaded();
        }, 180);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="page-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.99,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle Ambient Background Warmth */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#8B1E13]/5 to-[#E8A65D]/10 blur-3xl pointer-events-none" />

          {/* Centered Brand Content */}
          <div className="relative flex flex-col items-center px-4 text-center">
            
            {/* Animated Logo Container with Pulse */}
            <motion.div
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3.5 flex items-center justify-center"
            >
              <img
                src="/assets/images/logo.png"
                alt="Jethro Logo"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
              {/* Subtle orbital ping */}
              <div className="absolute -inset-2 rounded-full border border-[#8B1E13]/20 animate-ping opacity-25 pointer-events-none" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight mb-3.5"
            >
              Jethro
            </motion.div>

            {/* Slender Luxury Progress Track */}
            <div className="w-44 sm:w-52 h-1 bg-gray-100 rounded-full overflow-hidden relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8B1E13] via-[#E8A65D] to-[#8B1E13] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Minimal Percentage Counter */}
            <div className="mt-2 text-[10px] font-mono font-medium text-gray-400">
              {progress}%
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

