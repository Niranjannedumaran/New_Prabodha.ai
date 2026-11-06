import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';
import { ScrollProgress } from './components/ScrollProgress';
import { NavigationPage } from './types';

// Multi-Page Views (Complete 10-Surface Platform Architecture)
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { ExamIntelligencePage } from './pages/ExamIntelligencePage';
import { AiLearningPage } from './pages/AiLearningPage';
import { CareerIntelligencePage } from './pages/CareerIntelligencePage';
import { AiMentorshipPage } from './pages/AiMentorshipPage';
import { AboutPage } from './pages/AboutPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { CompanyCareersPage } from './pages/CompanyCareersPage';
import { ContactPage } from './pages/ContactPage';

const MainAppContent: React.FC = () => {
  // Page routing state synced with URL Hash
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
      
      const validPages: NavigationPage[] = [
        'home',
        'platform',
        'exams',
        'learning',
        'careers',
        'mentorship',
        'about',
        'updates',
        'company-careers',
        'contact',
      ];

      if (validPages.includes(hash as NavigationPage)) {
        setCurrentPage(hash as NavigationPage);
      } else if (hash === 'courses') {
        setCurrentPage('exams');
      } else if (hash === 'portal') {
        setCurrentPage('learning');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#16131F] dark:text-[#F3F2F8] flex flex-col selection:bg-[#EDE6FB] selection:text-[#51349A] dark:selection:bg-[#7550C8] dark:selection:text-white transition-colors duration-300">
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Global Minimal Glass Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Platform Content Surface */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'platform' && (
          <PlatformPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'exams' && (
          <ExamIntelligencePage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'learning' && (
          <AiLearningPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'careers' && (
          <CareerIntelligencePage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'mentorship' && (
          <AiMentorshipPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenContact={() => setIsContactOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'updates' && (
          <UpdatesPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'company-careers' && (
          <CompanyCareersPage
            onNavigate={navigateTo}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Editorial Platform Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Contact & Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Legal & Policy Dialog Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <MainAppContent />
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
