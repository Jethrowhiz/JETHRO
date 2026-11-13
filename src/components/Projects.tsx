import React, { useState } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsProps {
  onOpenPreview: (project: Project) => void;
  onOpenCode: (project: Project) => void;
}

// Minimal colored tech badges matching mrbayo.dev
const renderTechIcon = (techName: string) => {
  const lower = techName.toLowerCase();

  if (lower.includes('python')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#3776AB] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.7 2 8.7 3.4 8.7 3.4L8.7 5.6H12.3V6.2H5.1C5.1 6.2 2 6 2 9.6C2 13.2 4.6 13.1 4.6 13.1L6.1 13.1L6.1 11.3C6.1 9.4 7.7 9.4 7.7 9.4L11.5 9.4C12.4 9.4 13.2 8.6 13.2 7.7L13.2 3.9C13.2 3 12.4 2 12 2ZM10.2 3.3C10.6 3.3 11 3.7 11 4.1C11 4.5 10.6 4.9 10.2 4.9C9.8 4.9 9.4 4.5 9.4 4.1C9.4 3.7 9.8 3.3 10.2 3.3ZM12 22C15.3 22 15.3 20.6 15.3 20.6L15.3 18.4H11.7V17.8H18.9C18.9 17.8 22 18 22 14.4C22 10.8 19.4 10.9 19.4 10.9L17.9 10.9L17.9 12.7C17.9 14.6 16.3 14.6 16.3 14.6L12.5 14.6C11.6 14.6 10.8 15.4 10.8 16.3L10.8 20.1C10.8 21 11.6 22 12 22ZM13.8 20.7C13.4 20.7 13 20.3 13 19.9C13 19.5 13.4 19.1 13.8 19.1C14.2 19.1 14.6 19.5 14.6 19.9C14.6 20.3 14.2 20.7 13.8 20.7Z"/>
      </svg>
    );
  }

  if (lower.includes('fastapi')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#05998B] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l5-7v4h3l-5 7z"/>
      </svg>
    );
  }

  if (lower.includes('django')) {
    return (
      <span className="text-[#092E20] font-black text-[10px] font-mono leading-none tracking-tight">
        dj
      </span>
    );
  }

  if (lower.includes('next')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#111827] flex-shrink-0" viewBox="0 0 180 180" fill="currentColor">
        <circle cx="90" cy="90" r="85" fill="#111827" />
        <path d="M117 122V58H104L68 112V58H56V122H68L106 66V122H117Z" fill="white" />
      </svg>
    );
  }

  if (lower.includes('react')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#00D8FF] flex-shrink-0" viewBox="0 0 115.3 100" fill="currentColor">
        <ellipse cx="57.65" cy="50" rx="13" ry="13" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21.5" fill="none" stroke="currentColor" strokeWidth="6" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(60 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21.5" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(120 57.65 50)" />
      </svg>
    );
  }

  if (lower.includes('node')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#539E43] flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2.5l12 6.9v13.8L16 30 4 23.2V9.4L16 2.5zm0 3.3L6.5 11.2v10.2L16 26.8l9.5-5.4V11.2L16 5.8z" />
        <path d="M16 11l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" />
      </svg>
    );
  }

  if (lower.includes('html')) {
    return (
      <span className="w-3.5 h-3.5 rounded-[2px] bg-[#E34F26] text-white text-[9px] font-bold flex items-center justify-center font-mono leading-none">
        5
      </span>
    );
  }

  if (lower.includes('css')) {
    return (
      <span className="w-3.5 h-3.5 rounded-[2px] bg-[#1572B6] text-white text-[9px] font-bold flex items-center justify-center font-mono leading-none">
        #
      </span>
    );
  }

  if (lower.includes('javascript') || lower === 'js') {
    return (
      <span className="w-3.5 h-3.5 rounded-[2px] bg-[#F7DF1E] text-black text-[9px] font-bold flex items-center justify-center font-mono leading-none">
        JS
      </span>
    );
  }

  if (lower.includes('typescript') || lower === 'ts') {
    return (
      <span className="w-3.5 h-3.5 rounded-[2px] bg-[#3178C6] text-white text-[9px] font-bold flex items-center justify-center font-mono leading-none">
        TS
      </span>
    );
  }

  if (lower.includes('tailwind')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#06B6D4] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  if (lower.includes('stacks') || lower.includes('stx')) {
    return (
      <svg className="w-3.5 h-3.5 text-[#5546FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7l8-4 8 4-8 4-8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    );
  }

  if (lower.includes('clarity')) {
    return (
      <span className="w-3.5 h-3.5 rounded-[2px] bg-[#22C55E] text-white text-[9px] font-bold flex items-center justify-center font-mono leading-none">
        CL
      </span>
    );
  }

  return (
    <span className="w-2 h-2 rounded-full bg-[#8B1E13] flex-shrink-0" />
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onOpenPreview }) => {
  const [showAll, setShowAll] = useState(false);

  // By default, display 3 cards matching mrbayo.dev; clicking "All projects >" reveals all
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="bg-white text-[#111827] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean Centered Section Heading (Matching "Things I have built") */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111827] tracking-tight">
            Things I have built
          </h2>
        </div>

        {/* 3-Column Responsive Grid matching mrbayo.dev */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group ${
                  !showAll && idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Mockup Preview Image at the Top */}
                <div
                  onClick={() => onOpenPreview(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100 cursor-pointer"
                >
                  <img
                    src={project.mockupImg}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors pointer-events-none" />
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Project Title */}
                    <h3
                      onClick={() => onOpenPreview(project)}
                      className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight mb-1.5 group-hover:text-[#8B1E13] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* Subtitle / Short Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {project.subtitle || project.summary}
                    </p>

                    {/* Tech Badges with Minimal Colored Icons */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700">
                          {renderTechIcon(t)}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Project Link aligned to the Right leading to GitHub profile */}
                  <div className="flex items-center justify-end pt-4 mt-4 border-t border-gray-100">
                    <a
                      href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#8B1E13] hover:text-[#70160D] transition-colors group/link cursor-pointer"
                    >
                      <span>Open</span>
                      <span className="text-base leading-none transition-transform duration-200 group-hover/link:translate-x-0.5">&rsaquo;</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Centered "All projects >" Action Link below the grid */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-[#8B1E13] hover:text-[#70160D] transition-colors group cursor-pointer"
          >
            <span>{showAll ? 'Show fewer projects' : 'All projects'}</span>
            <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-0.5">&rsaquo;</span>
          </button>
        </div>

      </div>
    </section>
  );
};