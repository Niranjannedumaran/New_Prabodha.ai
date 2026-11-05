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
    <div className="pt-28 pb-24 bg-[#FAF9F6] dark:bg-[#0B0A0F] text-[#121118] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#6E44FF] dark:text-[#B99CFF]">
            Pillar 04 • AI Mentorship
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.08]">
            Longitudinal Mentorship & <br />
            <span className="font-editorial italic font-normal text-[#6E44FF] dark:text-[#D5C2FF]">
              cognitive calibration.
            </span>
          </h1>
          <p className="text-base text-[#64748B] dark:text-[#94A3B8] font-light leading-relaxed">
            Preparation over 12 to 24 months is a test of psychological and conceptual pacing. Prabodha’s mentorship framework tracks cognitive fatigue, eliminates blind spots, and protects intellectual calm.
          </p>
        </div>

        {/* 4 Phases Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MENTORSHIP_PILLARS.map((pillar) => {
            const isSelected = activePillarId === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-6 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-[#151320] border-[#6E44FF] shadow-sm'
                    : 'bg-[#FAF9F6] dark:bg-[#12111A] border-[#E8E7EE] dark:border-[#222030] text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] hover:border-[#6E44FF]/30'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#6E44FF] mb-1 font-semibold">
                  {pillar.phase}
                </div>
                <div className="text-sm font-bold text-[#0F172A] dark:text-white mb-1">
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Mentorship Phase Deep Dive */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#13121C] border border-[#E5E5EA] dark:border-[#262436] shadow-sm mb-16 space-y-8">
          <div className="space-y-2 border-b border-[#EAE9F0] dark:border-[#242232] pb-6">
            <span className="text-xs font-mono uppercase text-[#6E44FF]">
              {activePillar.phase} Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white">
              {activePillar.title}
            </h2>
            <p className="text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
              {activePillar.rationale}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F7FB] dark:bg-[#181624] border border-[#EAE9F0] dark:border-[#282537] space-y-2">
              <span className="text-xs font-mono font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">
                Automated Diagnostic Action
              </span>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
                {activePillar.diagnosticAction}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F3FF] dark:bg-[#1C182A] border border-[#DDD2F7] dark:border-[#332A50] space-y-2">
              <span className="text-xs font-mono font-bold text-[#6E44FF] dark:text-[#D5C2FF] uppercase tracking-wider">
                Calibrated Pedagogical Outcome
              </span>
              <p className="text-xs sm:text-sm text-[#334155] dark:text-[#E2E8F0] font-light leading-relaxed">
                {activePillar.adaptiveOutcome}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EAE9F0] dark:border-[#242232] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#94A3B8]">
              Personalized mentorship runs autonomously across all platform interactions.
            </span>

            <button
              onClick={() => onNavigate('learning')}
              className="px-5 py-2.5 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs font-semibold hover:bg-[#6E44FF] transition-all flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Test Interactive Socratic Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

