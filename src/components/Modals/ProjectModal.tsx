import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'preview' | 'code';
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'preview',
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>(initialTab);

  if (!project) return null;

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
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFF9EE] border border-[#E8DAC4] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-2xl"
          >
            {/* Top Bar with View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 sm:mb-6 border-b border-[#E8DAC4]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase bg-[#54230F]/10 text-[#54230F]">
                  {project.badge}
                </span>

                <div className="flex items-center p-1 rounded-full bg-[#E8DAC4]/50 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeTab === 'preview'
                        ? 'bg-[#54230F] text-[#FFF9EE]'
                        : 'text-[#453A33] hover:text-[#171310]'
                    }`}
                  >
                    Interactive Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-[#54230F] text-[#FFF9EE]'
                        : 'text-[#453A33] hover:text-[#171310]'
                    }`}
                  >
                    Architecture Code
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full hover:bg-[#E8DAC4]/40 text-[#54230F] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#171310] tracking-tight mb-1">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#C47A3E] mb-4 sm:mb-5">
                {project.subtitle}
              </p>

              {activeTab === 'preview' ? (
                <div className="space-y-5 sm:space-y-6">
                  <p className="text-sm sm:text-base text-[#453A33] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 sm:p-3 rounded-xl bg-[#F6EBD6]/60 border border-[#E8DAC4] text-center"
                      >
                        <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7A695E] font-bold">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#54230F] mt-1">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DAC4]">
                    <h4 className="text-xs font-mono font-bold uppercase text-[#54230F] mb-3">
                      Key Technical Highlights
                    </h4>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {project.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#453A33]">
                          <Check className="w-4 h-4 text-[#C47A3E] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-xs font-mono uppercase text-[#7A695E] mb-2">
                      Technologies &amp; Libraries
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#54230F]/10 text-[#54230F] border border-[#54230F]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#7A695E]">
                    Production Architecture Implementation (Excerpt)
                  </div>
                  <pre className="p-4 sm:p-5 rounded-2xl bg-[#171310] text-[#FFF9EE] font-mono text-xs overflow-x-auto leading-relaxed border border-white/10">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-[#E8DAC4] flex flex-wrap items-center justify-between gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#54230F] text-[#FFF9EE] hover:bg-[#713315] transition-all text-center"
              >
                <span>Inquire About Similar Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-bold text-[#54230F] hover:underline flex items-center justify-center gap-1 py-1"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
