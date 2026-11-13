import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  onOpenAboutModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAboutModal }) => {
  // Generate radial ticks for the architectural semi-circle
  const ticks = useMemo(() => {
    const cx = 525;
    const cy = 525;
    const radius = 460;
    const startAngle = 200;
    const endAngle = 340;
    const totalTicks = 85;

    const list = [];
    for (let i = 0; i <= totalTicks; i++) {
      const fraction = i / totalTicks;
      const angleDeg = startAngle + fraction * (endAngle - startAngle);
      const angleRad = (angleDeg * Math.PI) / 180;
      const isMajor = i % 5 === 0;
      const tickLength = isMajor ? 14 : 7;

      const x1 = cx + (radius - tickLength) * Math.cos(angleRad);
      const y1 = cy + (radius - tickLength) * Math.sin(angleRad);
      const x2 = cx + radius * Math.cos(angleRad);
      const y2 = cy + radius * Math.sin(angleRad);

      list.push({
        x1,
        y1,
        x2,
        y2,
        strokeWidth: isMajor ? 1.5 : 1,
        opacity: isMajor ? 0.45 : 0.2,
      });
    }
    return list;
  }, []);

  const floatingCards = [
    {
      src: '/assets/images/showcase-1.jpg',
      alt: 'Lacrosse Estates & DProperties — Luxury Real Estate Mobile App',
      classDesktop: 'radial-card-1',
      title: 'Real Estate & Architectural Mobile App',
    },
    {
      src: '/assets/images/showcase-2.jpg',
      alt: 'Apartment Kalibata City — Travel & Apartment Booking Experience',
      classDesktop: 'radial-card-2',
      title: 'Travel & Apartment Booking Platform',
    },
    {
      src: '/assets/images/showcase-3.jpg',
      alt: 'Find The Perfect Home — Modern Home & Architectural Discovery',
      classDesktop: 'radial-card-3',
      title: 'Modern Architecture & Home Discovery UI',
    },
    {
      src: '/assets/images/showcase-4.jpg',
      alt: 'Popcorn — Global SaaS & Telecommunication Product',
      classDesktop: 'radial-card-4',
      title: 'Global SaaS & Connectivity Platform',
    },
  ];

  return (
    <section id="about" className="relative bg-[#FFF9EE] py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E8DAC4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Radial Arc Layout */}
        <div className="radial-arc-wrapper relative flex flex-col items-center justify-center min-h-0 lg:min-h-[740px]">
          
          {/* Architectural SVG Radial Ticks (Visible on Desktop) */}
          <svg className="radial-arc-svg hidden lg:block" viewBox="0 0 1050 1050" fill="none">
            <circle cx="525" cy="525" r="460" stroke="#C47A3E" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="525" cy="525" r="445" stroke="#C47A3E" strokeOpacity="0.08" strokeWidth="1" />
            <g id="radial-ticks">
              {ticks.map((t, idx) => (
                <line
                  key={idx}
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  stroke="#C47A3E"
                  strokeWidth={t.strokeWidth}
                  strokeOpacity={t.opacity}
                />
              ))}
            </g>
          </svg>

          {/* Desktop Floating Radial Cards */}
          <div className="hidden lg:block">
            {floatingCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                onClick={onOpenAboutModal}
                className={`radial-card ${card.classDesktop}`}
                title={card.title}
              >
                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Carousel Row (Screen < 1024px) */}
          <div className="lg:hidden flex gap-4 overflow-x-auto w-full pb-6 pt-1 px-1 scrollbar-none snap-x snap-mandatory">
            {floatingCards.map((card, idx) => (
              <div
                key={idx}
                onClick={onOpenAboutModal}
                className="flex-shrink-0 w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border border-[#E8DAC4] shadow-md snap-center bg-white cursor-pointer hover:shadow-lg transition-all"
              >
                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Center Content inside the Arc: The 3 Core Developer Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl text-center mx-auto px-4 pt-10 lg:pt-36"
          >
            <div className="bg-[#FFF9EE]/95 backdrop-blur-md border border-[#E8DAC4] rounded-[24px] sm:rounded-[32px] p-6 sm:p-9 lg:p-11 shadow-[0_20px_50px_-15px_rgba(84,35,15,0.12)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DAC4]">
                
                {/* Metric 1 */}
                <div className="flex flex-col items-center justify-center px-4 pt-2 sm:pt-0">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171310] mb-1 sm:mb-2">
                    5<span className="text-[#C47A3E]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#7A695E] tracking-wide">
                    Years of experience
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center justify-center px-4 pt-6 sm:pt-0">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171310] mb-1 sm:mb-2">
                    30<span className="text-[#C47A3E]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#7A695E] tracking-wide">
                    Projects shipped
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center justify-center px-4 pt-6 sm:pt-0">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171310] mb-1 sm:mb-2">
                    48<span className="text-[#C47A3E]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#7A695E] tracking-wide">
                    Happy clients
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
