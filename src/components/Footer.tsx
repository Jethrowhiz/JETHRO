import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-600 pt-8 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-gray-100">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" theme="light" />
          </div>

          {/* Right: Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-gray-600">
              <li><a href="#home" className="hover:text-gray-950 transition-colors py-1 inline-block">Home</a></li>
              <li><a href="#projects" className="hover:text-gray-950 transition-colors py-1 inline-block">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-950 transition-colors py-1 inline-block">Contact</a></li>
            </ul>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <div>
            &copy; 2026 Jethro. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Jethro</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#8B1E13] transition-colors flex items-center gap-1.5 font-semibold cursor-pointer py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};