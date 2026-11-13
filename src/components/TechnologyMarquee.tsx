import React from 'react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    name: 'Python',
    icon: (
      <svg className="w-4 h-4 text-[#3776AB] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.7 2 8.7 3.4 8.7 3.4L8.7 5.6H12.3V6.2H5.1C5.1 6.2 2 6 2 9.6C2 13.2 4.6 13.1 4.6 13.1L6.1 13.1L6.1 11.3C6.1 9.4 7.7 9.4 7.7 9.4L11.5 9.4C12.4 9.4 13.2 8.6 13.2 7.7L13.2 3.9C13.2 3 12.4 2 12 2ZM10.2 3.3C10.6 3.3 11 3.7 11 4.1C11 4.5 10.6 4.9 10.2 4.9C9.8 4.9 9.4 4.5 9.4 4.1C9.4 3.7 9.8 3.3 10.2 3.3ZM12 22C15.3 22 15.3 20.6 15.3 20.6L15.3 18.4H11.7V17.8H18.9C18.9 17.8 22 18 22 14.4C22 10.8 19.4 10.9 19.4 10.9L17.9 10.9L17.9 12.7C17.9 14.6 16.3 14.6 16.3 14.6L12.5 14.6C11.6 14.6 10.8 15.4 10.8 16.3L10.8 20.1C10.8 21 11.6 22 12 22ZM13.8 20.7C13.4 20.7 13 20.3 13 19.9C13 19.5 13.4 19.1 13.8 19.1C14.2 19.1 14.6 19.5 14.6 19.9C14.6 20.3 14.2 20.7 13.8 20.7Z"/>
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    icon: (
      <svg className="w-4 h-4 text-[#05998B] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l5-7v4h3l-5 7z" />
      </svg>
    ),
  },
  {
    name: 'Django',
    icon: (
      <span className="text-[#092E20] font-black text-xs font-mono leading-none tracking-tight">
        dj
      </span>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg className="w-4 h-4 text-black flex-shrink-0" viewBox="0 0 180 180" fill="currentColor">
        <circle cx="90" cy="90" r="85" fill="#111827" />
        <path d="M117 122V58H104L68 112V58H56V122H68L106 66V122H117Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg className="w-4 h-4 text-[#336791] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5S10 17.33 10 16.5v-3h3v3zm2-5h-6V9c0-1.66 1.34-3 3-3s3 1.34 3 3v2.5z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <svg className="w-4 h-4 text-[#3ECF8E] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.82 14.288a.396.396 0 0 0 .317.652H12v8.665a.396.396 0 0 0 .716.233l10.464-14.125a.396.396 0 0 0-.317-.652z" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg className="w-4 h-4 text-[#00D8FF] flex-shrink-0" viewBox="0 0 115.3 100" fill="currentColor">
        <ellipse cx="57.65" cy="50" rx="14" ry="14" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21.5" fill="none" stroke="currentColor" strokeWidth="6" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(60 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(120 57.65 50)" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <span className="w-4 h-4 rounded-[3px] bg-[#3178C6] text-white text-[9px] font-bold flex items-center justify-center font-mono leading-none">
        TS
      </span>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-4 h-4 text-[#06B6D4] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-4 h-4 text-[#539E43] flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2.5l12 6.9v13.8L16 30 4 23.2V9.4L16 2.5zm0 3.3L6.5 11.2v10.2L16 26.8l9.5-5.4V11.2L16 5.8z" />
        <path d="M16 11l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" />
      </svg>
    ),
  },
  {
    name: 'Web3',
    icon: (
      <svg className="w-4 h-4 text-[#8B1E13] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export const TechnologyMarquee: React.FC = () => {
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full relative py-2.5 sm:py-3 bg-white border-y border-gray-200 overflow-hidden select-none">
      {/* Side Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      {/* Scrolling Strip */}
      <div className="animate-marquee items-center gap-7 sm:gap-10">
        {duplicatedTechnologies.map((tech, idx) => (
          <div key={`${tech.name}-${idx}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 flex-shrink-0">
            <span className="flex-shrink-0 flex items-center justify-center">
              {tech.icon}
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-tight text-gray-700 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};