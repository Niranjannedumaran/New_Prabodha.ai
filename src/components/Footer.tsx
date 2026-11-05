import React from 'react';
import { PrabodhaLogo } from './PrabodhaLogo';
import { Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { NavigationPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onOpenLegal,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0A0F] text-white pt-20 pb-12 border-t border-white/8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/8">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-5">
            <div onClick={() => handleNav('home')} className="cursor-pointer inline-block">
              <PrabodhaLogo variant="light" size="lg" />
            </div>

            <p className="text-xl sm:text-2xl font-editorial italic text-[#EDE6FB] tracking-tight">
              Learn. Prepare. Grow. Evolve.
            </p>

            <p className="text-xs sm:text-sm text-white/55 leading-relaxed max-w-sm font-normal">
              Prabodha AI is an intelligent technology platform unifying competitive examination intelligence, first-principles Socratic tutoring, career exploration, and adaptive mentorship.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#7550C8] text-white/60 hover:text-white flex items-center justify-center border border-white/8"
                style={{ transition: 'background-color 150ms ease, color 150ms ease' }}
                aria-label="Prabodha AI on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#7550C8] text-white/60 hover:text-white flex items-center justify-center border border-white/8"
                style={{ transition: 'background-color 150ms ease, color 150ms ease' }}
                aria-label="Prabodha AI on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#7550C8] text-white/60 hover:text-white flex items-center justify-center border border-white/8"
                style={{ transition: 'background-color 150ms ease, color 150ms ease' }}
                aria-label="Prabodha AI on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Architecture */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/35 font-semibold">
              Platform Architecture
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60 font-normal">
              <li>
                <button
                  onClick={() => handleNav('platform')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Platform Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('exams')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Competitive Exam Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('learning')}
                  className="hover:text-white text-left flex items-center gap-2"
                  style={{ transition: 'color 150ms ease' }}
                >
                  <span>AI Learning Suite</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#7550C8] text-white font-semibold">Demo</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Career Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mentorship')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Personalised AI Mentorship
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Insights */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/35 font-semibold">
              Company & Research
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60 font-normal">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  About & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('updates')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Research Notes & Updates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('company-careers')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Careers & Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white text-left"
                  style={{ transition: 'color 150ms ease' }}
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Collaboration */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/35 font-semibold">
              Dialogue
            </h4>
            <p className="text-xs text-white/50 leading-relaxed font-normal">
              Connect with our academic research and cognitive systems cell.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="px-4 py-2.5 rounded-full bg-white/8 hover:bg-[#7550C8] text-white text-xs font-medium border border-white/12"
                style={{ transition: 'background-color 150ms ease' }}
              >
                Direct Dialogue
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div>
            © {currentYear} Prabodha AI. All rights reserved. Grounded in first principles.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white" style={{ transition: 'color 150ms ease' }}>
              Privacy Policy
            </button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white" style={{ transition: 'color 150ms ease' }}>
              Terms of Service
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-white" style={{ transition: 'color 150ms ease' }}>
              Brand Philosophy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
