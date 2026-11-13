import React, { useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { Projects } from './components/Projects';
import { FindMeOnline } from './components/FindMeOnline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutModal } from './components/Modals/AboutModal';
import { ProjectModal } from './components/Modals/ProjectModal';
import { SuccessModal } from './components/Modals/SuccessModal';
import { HireModal } from './components/Modals/HireModal';
import { Project } from './types';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const App: React.FC = () => {
  // Modal & Selection States
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'preview' | 'code'>('preview');
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successSender, setSuccessSender] = useState('');
  const [selectedService, setSelectedService] = useState('Frontend Development');

  // Global Toast
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleOpenPreview = (project: Project) => {
    setSelectedProject(project);
    setProjectModalTab('preview');
    setProjectModalOpen(true);
  };

  const handleOpenCode = (project: Project) => {
    setSelectedProject(project);
    setProjectModalTab('code');
    setProjectModalOpen(true);
  };

  const handleContactSuccess = (name: string) => {
    setSuccessSender(name);
    setSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col selection:bg-[#8B1E13] selection:text-white">
      {/* 0. Initial Luxury Page Preloader */}
      <PageLoader />

      {/* 1. Permanent Sticky Navigation with Reading Progress Bar */}
      <Navbar onOpenHire={() => setHireModalOpen(true)} />

      {/* Main Content with offset to accommodate the slim fixed sticky navbar */}
      <main className="flex-1 pt-12 sm:pt-14">
        {/* 2. Hero Section */}
        <Hero
          onSelectService={(srv) => setSelectedService(srv)}
          onOpenHire={() => setHireModalOpen(true)}
        />

        {/* 2.5 Animated Key Metrics Strip (Before "Things I have built") */}
        <HighlightsStrip />

        {/* 3. Selected Projects ("Things I have built") */}
        <Projects onOpenPreview={handleOpenPreview} onOpenCode={handleOpenCode} />

        {/* 4. Find Me Online */}
        <FindMeOnline />

        {/* 5. Contact Section ("Hire Me / Start a Conversation") */}
        <Contact
          selectedService={selectedService}
          onSuccess={handleContactSuccess}
          onShowToast={showToast}
        />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Modals */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        project={selectedProject}
        initialTab={projectModalTab}
        onClose={() => setProjectModalOpen(false)}
        onOpenHire={() => setHireModalOpen(true)}
      />

      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        onSuccess={handleContactSuccess}
      />

      <SuccessModal
        isOpen={successModalOpen}
        senderName={successSender}
        onClose={() => setSuccessModalOpen(false)}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-4 sm:right-6 left-4 sm:left-auto max-w-sm z-50 flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#111827] text-white shadow-2xl border border-gray-700"
          >
            <Info className="w-4 h-4 text-[#8B1E13] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;