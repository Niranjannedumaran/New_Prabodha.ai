import React, { useState } from 'react';
import {
  Brain,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  LineChart
} from 'lucide-react';
import { NavigationPage } from '../types';
import { MENTORSHIP_PILLARS } from '../data/platformData';
import { SpotlightCard } from '../components/SpotlightCard';

interface AiMentorshipPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const AiMentorshipPage: React.FC<AiMentorshipPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [activePillarId, setActivePillarId] = useState<string>('cognitive-diagnostic');

  const activePillar =
    MENTORSHIP_PILLARS.find((p) => p.id === activePillarId) || MENTORSHIP_PILLARS[0];

  return (
    <div className="pt-28 pb-24 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#16131F] dark:text-[#F3F2F8] min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - High Contrast & Crisp Hierarchy */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
            Pillar 04 • Autonomous AI Mentorship
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#16131F] dark:text-white leading-[1.08]">
            Longitudinal Mentorship & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              cognitive calibration.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#3D384D] dark:text-[#CBD5E1] font-normal leading-relaxed">
            Preparation over 12 to 24 months is a test of psychological and conceptual pacing. Prabodha’s mentorship framework tracks cognitive fatigue, eliminates blind spots, and protects intellectual calm.
          </p>
        </div>

        {/* 4 Phases Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MENTORSHIP_PILLARS.map((pillar) => {
            const isSelected = activePillarId === pillar.id;

            return (
              <SpotlightCard
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-6 rounded-2xl text-left border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-[#151320] border-[#7550C8] shadow-soft ring-1 ring-[#7550C8]/25'
                    : 'bg-[#FAF8FE] dark:bg-[#12111A] border-[#E2D9F3] dark:border-[#222030] text-[#3D384D] dark:text-[#94A3B8] hover:border-[#7550C8]/40'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] mb-1.5 font-bold">
                  {pillar.phase}
                </div>
                <div className={`text-sm font-bold mb-1 ${isSelected ? 'text-[#16131F] dark:text-white' : 'text-[#2C2638] dark:text-[#CBD5E1]'}`}>
                  {pillar.title}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Selected Mentorship Phase Deep Dive */}
        <SpotlightCard className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#13121C] border border-[#E2D9F3] dark:border-[#262436] shadow-soft mb-16 space-y-8">
          <div className="space-y-2 border-b border-[#EAE7EF] dark:border-[#242232] pb-6">
            <span className="text-xs font-mono font-bold uppercase text-[#7550C8] dark:text-[#B99CFF]">
              {activePillar.phase} Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16131F] dark:text-white">
              {activePillar.title}
            </h2>
            <p className="text-sm sm:text-base text-[#3D384D] dark:text-[#CBD5E1] font-normal leading-relaxed">
              {activePillar.rationale}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F6FD] dark:bg-[#181624] border border-[#E2D9F3] dark:border-[#282537] space-y-2">
              <span className="text-xs font-mono font-bold text-[#16131F] dark:text-white uppercase tracking-wider block">
                Automated Diagnostic Action
              </span>
              <p className="text-xs sm:text-sm text-[#3D384D] dark:text-[#CBD5E1] font-normal leading-relaxed">
                {activePillar.diagnosticAction}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F1FD] dark:bg-[#1C182A] border border-[#DDD2F7] dark:border-[#332A50] space-y-2">
              <span className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#D5C2FF] uppercase tracking-wider block">
                Calibrated Pedagogical Outcome
              </span>
              <p className="text-xs sm:text-sm text-[#2C2638] dark:text-[#E2E8F0] font-normal leading-relaxed">
                {activePillar.adaptiveOutcome}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#595466] dark:text-[#94A3B8]">
              Personalized mentorship runs autonomously across all platform interactions.
            </span>

            <button
              onClick={() => onNavigate('learning')}
              className="px-5 py-2.5 rounded-full bg-[#16131F] dark:bg-white text-white dark:text-[#16131F] text-xs font-semibold hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] transition-all flex items-center gap-1.5 self-start sm:self-auto shadow-soft-xs"
            >
              <span>Test Interactive Socratic Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </SpotlightCard>

      </div>
    </div>
  );
};
