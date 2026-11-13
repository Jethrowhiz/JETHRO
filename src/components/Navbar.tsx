import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenHire?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHire }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 border-b border-gray-200/70 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
        
        {/* Left: Custom Jethro Logo + Name with Hover Box */}
        <div className="flex-shrink-0">
          <a
            href="#home"
            aria-label="Jethro Home"
            className="inline-flex items-center px-2 py-1 -ml-2 rounded-lg transition-all duration-200 hover:bg-[rgb(245,245,247)]"
          >
            <BrandLogo size="sm" theme="light" />
          </a>
        </div>

        {/* Center/Right: Navigation Links with rgb(245, 245, 247) Hover Box */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-[rgb(245,245,247)] hover:text-gray-950 ${
                  isActive
                    ? 'text-gray-950 font-semibold bg-[rgb(245,245,247)]/70'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Far Right: Rounded "Hire me" Button (matching mrbayo.dev) */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenHire}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#8B1E13] text-white hover:bg-[#70160D] shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Hire me</span>
          </button>

          {/* Mobile Hamburger Toggle with Hover Box */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-[rgb(245,245,247)] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 border-b border-gray-200 px-4 sm:px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-2.5 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-gray-950 py-2.5 px-4 rounded-xl hover:bg-[rgb(245,245,247)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHire?.();
                  }}
                  className="inline-flex items-center justify-center w-full py-3 rounded-full font-bold bg-[#8B1E13] text-white shadow-sm hover:bg-[#70160D] transition-all cursor-pointer"
                >
                  <span>Hire me</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
