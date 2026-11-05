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
    <footer className="bg-[#0B0A0F] text-white pt-20 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-5">
            <div onClick={() => handleNav('home')} className="cursor-pointer inline-block">
              <PrabodhaLogo variant="light" size="lg" />
            </div>

            <p className="text-xl sm:text-2xl font-editorial italic text-[#EDE6FB] tracking-tight">
              Learn. Prepare. Grow. Evolve.
            </p>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm font-light">
              Prabodha AI is an intelligent technology platform unifying competitive examination intelligence, first-principles Socratic tutoring, career exploration, and adaptive mentorship.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#7550C8] text-white/70 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Prabodha AI on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#7550C8] text-white/70 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Prabodha AI on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#7550C8] text-white/70 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Prabodha AI on YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Platform Architecture */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40">
              Platform Architecture
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('platform')}
                  className="hover:text-white transition-colors text-left"
                >
                  Platform Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('exams')}
                  className="hover:text-white transition-colors text-left"
                >
                  Competitive Exam Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('learning')}
                  className="hover:text-white transition-colors text-left flex items-center gap-2"
                >
                  <span>AI Learning Suite</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#7550C8] text-white font-semibold">Demo</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Career Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mentorship')}
                  className="hover:text-white transition-colors text-left"
                >
                  Personalised AI Mentorship
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Insights */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40">
              Company & Research
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-light">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('updates')}
                  className="hover:text-white transition-colors text-left"
                >
                  Research Notes & Updates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('company-careers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Careers & Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Collaboration */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40">
              Dialogue
            </h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Connect with our academic research and cognitive systems cell.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#7550C8] text-white text-xs font-medium transition-all border border-white/15"
              >
                Direct Dialogue
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} Prabodha AI. All rights reserved. Grounded in first principles.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
              Brand Philosophy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
