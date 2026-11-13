import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, duration = 1.6, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * to);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="inline-flex items-center tabular-nums font-semibold">
      <span>{count}</span>
      <span className="text-black ml-0.5 font-semibold">{suffix}</span>
    </span>
  );
};

export const HighlightsStrip: React.FC = () => {
  const stats = [
    {
      target: 5,
      label: 'Years of experience',
    },
    {
      target: 32,
      label: 'Projects shipped',
    },
    {
      target: 57,
      label: 'Happy clients',
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFD] py-5 sm:py-6 lg:py-7 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-gray-200/70 rounded-xl sm:rounded-2xl shadow-sm px-4 py-3.5 sm:px-6 sm:py-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 text-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="py-2.5 sm:py-0 px-3 sm:px-4 flex flex-col items-center justify-center"
              >
                <div className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#111827] tracking-tight leading-none mb-1">
                  <AnimatedCounter to={stat.target} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
