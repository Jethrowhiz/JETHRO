import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroPortrait } from './HeroPortrait';
import { TechnologyMarquee } from './TechnologyMarquee';

interface HeroProps {
  onSelectService?: (service: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService }) => {
  return (
    <div className="relative w-full bg-white">
      {/* Main Responsive Hero Section with DM Sans font family and balanced scale */}
      <section
        id="home"
        style={{ fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif' }}
        className="relative bg-white text-[#111827] pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-hero"
      >
        <div className="max-w-6xl mx-auto">
          {/* Desktop: 2 balanced columns. Mobile: Heading -> Portrait -> Supporting content -> Buttons -> Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (Desktop) / Sequential Content (Mobile) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <HeroContent onSelectService={onSelectService} />
            </div>

            {/* Right Column (Desktop only): Clean Circular Portrait */}
            <div className="hidden lg:flex lg:col-span-5 justify-end w-full">
              <HeroPortrait />
            </div>

          </div>
        </div>
      </section>

      {/* Horizontally Scrolling Technology Marquee directly under Hero */}
      <TechnologyMarquee />
    </div>
  );
};
