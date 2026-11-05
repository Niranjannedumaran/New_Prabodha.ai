import React, { useState, useEffect } from 'react';
import { PrabodhaLogo } from './PrabodhaLogo';
import { Menu, X, ArrowUpRight, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { NavigationPage } from '../types';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavigationPage; label: string }[] = [
    { id: 'platform', label: 'Platform' },
    { id: 'exams', label: 'Competitive Exams' },
    { id: 'learning', label: 'AI Learning' },
    { id: 'careers', label: 'Career' },
    { id: 'mentorship', label: 'AI Mentorship' },
    { id: 'about', label: 'About' },
  ];

  const handleLinkClick = (id: NavigationPage) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8" style={{ isolation: 'isolate' }}>
      <div className="max-w-7xl mx-auto">
        <nav
          className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full ${
            isScrolled
              ? 'bg-white/90 dark:bg-[#14121E]/90 backdrop-blur-xl border border-[#E3DAF2] dark:border-[#272535] shadow-[0_4px_20px_rgba(117,80,200,0.06)]'
              : 'bg-white/70 dark:bg-[#14121E]/70 backdrop-blur-md border border-[#E3DAF2]/70 dark:border-[#272535]/50'
          }`}
          style={{ transition: 'background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease' }}
          aria-label="Global Navigation"
        >
          {/* Brand Logo */}
          <div onClick={() => handleLinkClick('home')} className="cursor-pointer">
            <PrabodhaLogo size="md" variant="auto" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium ${
                    isActive
                      ? 'text-[#110E1B] dark:text-white font-semibold'
                      : 'text-[#585366] dark:text-[#9490A0] hover:text-[#110E1B] dark:hover:text-white'
                  }`}
                  style={{ transition: 'color 150ms ease' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-[#EDE6FB] dark:bg-[#231F38] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#585366] dark:text-[#9490A0] hover:text-[#110E1B] dark:hover:text-white hover:bg-[#EDE6FB] dark:hover:bg-[#231F38]"
              style={{ transition: 'color 150ms ease, background-color 150ms ease' }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Updates link */}
            <button
              onClick={() => handleLinkClick('updates')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                currentPage === 'updates'
                  ? 'text-[#7550C8] dark:text-[#B99CFF] font-semibold'
                  : 'text-[#585366] dark:text-[#9490A0] hover:text-[#110E1B] dark:hover:text-white'
              }`}
              style={{ transition: 'color 150ms ease' }}
            >
              Updates
            </button>

            {/* Contact / Inquire */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#110E1B] dark:text-white border border-[#E3DAF2] dark:border-[#272535] hover:border-[#7550C8]"
              style={{ transition: 'border-color 150ms ease' }}
            >
              Contact
            </button>

            {/* Primary Platform CTA */}
            <button
              onClick={() => handleLinkClick('platform')}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] dark:hover:text-[#7550C8] shadow-[0_2px_8px_rgba(117,80,200,0.1)] flex items-center gap-1.5 active:scale-[0.97]"
              style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
            >
              <span>Explore Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#585366] dark:text-[#9490A0]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#110E1B] dark:text-white hover:bg-[#F5F2FA]/80 dark:hover:bg-white/10"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden mt-2 max-w-7xl mx-auto rounded-[28px] bg-white/95 dark:bg-[#14121E]/95 backdrop-blur-xl border border-[#E3DAF2] dark:border-[#272535] shadow-[0_12px_40px_rgba(117,80,200,0.1)] p-5 space-y-3"
          >
            <div className="space-y-1">
              {[...navLinks, { id: 'updates' as NavigationPage, label: 'Updates' }, { id: 'contact' as NavigationPage, label: 'Contact & Inquiries' }].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between ${
                    currentPage === link.id
                      ? 'bg-[#EDE6FB] dark:bg-[#231F38] text-[#7550C8] dark:text-[#B99CFF] font-semibold'
                      : 'text-[#383347] dark:text-[#CBD5E1] hover:bg-[#F5F2FA] dark:hover:bg-white/5'
                  }`}
                  style={{ transition: 'background-color 150ms ease' }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E3DAF2] dark:border-[#272535] flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('platform')}
                className="w-full py-3 rounded-full text-sm font-semibold text-center bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] active:scale-[0.97]"
                style={{ transition: 'transform 100ms ease' }}
              >
                Explore Platform
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
