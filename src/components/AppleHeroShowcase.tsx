import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target, Compass, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const AppleHeroShowcase: React.FC<{ onExplore?: () => void; onSocraticDemo?: () => void }> = ({
  onExplore,
  onSocraticDemo,
}) => {
  const [activeExam, setActiveExam] = useState<'upsc' | 'rbi' | 'gate'>('upsc');

  const examData = {
    upsc: {
      exam: 'UPSC Civil Services',
      tag: 'GS-2 & GS-3',
      invariant: 'Constitutional Basic Structure Axiom',
      metric: 'Solves 28 Historical Questions',
    },
    rbi: {
      exam: 'RBI Grade B',
      tag: 'Finance & Management',
      invariant: 'Monetary Policy Transmission & Yield Curve',
      metric: 'Unlocks Multi-Tier Macro Problems',
    },
    gate: {
      exam: 'GATE Computing',
      tag: 'Algorithms & TOC',
      invariant: 'Turing Decidability & Diagonalization',
      metric: 'Solves Undecidability Reductions',
    },
  };

  return (
    <div className="w-full pt-10 sm:pt-14 select-none">
      
      {/* Apple-Style Curvy 3-Card Bento Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        
        {/* Curvy Card 1: Socratic AI Thought Machine (Left - 4 columns) */}
        <SpotlightCard
          onClick={onSocraticDemo}
          className="md:col-span-4 p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-white/95 dark:bg-[#151221]/95 border border-[#E2D9F3] dark:border-[#2A263D] shadow-[0_8px_30px_rgba(117,80,200,0.07)] flex flex-col justify-between space-y-5 cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55] text-[10px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase">
                <Brain className="w-3.5 h-3.5" />
                Socratic Engine
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Inquiry
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#16131F] dark:text-white tracking-tight group-hover:text-[#7550C8] transition-colors">
                No formula dumps. <br />
                <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                  Guided causal deduction.
                </span>
              </h3>
              <p className="text-xs text-[#3D384D] dark:text-[#A7A3B4] font-normal leading-relaxed mt-1.5">
                Targeted counter-inquiries that guide you to notice your own contradictory premises.
              </p>
            </div>

            {/* Socratic Preview Bubble */}
            <div className="p-3.5 rounded-2xl bg-[#F8F6FD] dark:bg-[#1A1629] border border-[#E4DCF0] dark:border-[#2C2740] space-y-1.5 text-xs">
              <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold block">
                Sample Counter-Example:
              </span>
              <p className="text-[#16131F] dark:text-[#E2DFEB] italic leading-snug">
                &ldquo;If a cart’s right wheel hits mud while the left stays on asphalt, why does the cart naturally turn?&rdquo;
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#7550C8] dark:text-[#B99CFF] border-t border-[#EAE7EF] dark:border-[#242135]">
            <span>Experience Socratic Dialogue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </SpotlightCard>

        {/* Curvy Card 2: Centerpiece Mascot Showcase (Center - 4 columns) */}
        <SpotlightCard className="md:col-span-4 p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#F7F3FD] via-white to-[#F5EFFB] dark:from-[#1A162B] dark:via-[#141120] dark:to-[#100D1A] border border-[#DDD2F7] dark:border-[#32294A] shadow-[0_12px_40px_rgba(117,80,200,0.1)] flex flex-col justify-between items-center text-center space-y-4 relative overflow-hidden">
          
          {/* Subtle radiant orb behind mascot */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#7550C8]/15 via-[#B99CFF]/10 to-transparent rounded-[32px] blur-xl -z-0" />

          {/* Top Pill Tag */}
          <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1D182E]/90 border border-[#DDD2F7] dark:border-[#3A2D58] shadow-soft-xs text-[10px] font-mono font-bold text-[#7550C8] dark:text-[#D5C2FF] uppercase">
            <Sparkles className="w-3 h-3 text-[#7550C8]" />
            Human Cognition × Socratic AI
          </div>

          {/* Mascot Image - Beautifully centered and scaled */}
          <div className="relative z-10 w-44 sm:w-52 h-44 sm:h-52 flex items-center justify-center my-auto">
            <img
              src="/new-assets/Cheerful Student and Robot Mascot.png"
              alt="Prabodha Student Explorer and Socratic AI Robot Mascot"
              className="w-full h-full object-contain filter drop-shadow-lg select-none hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>

          {/* Bottom Card Copy */}
          <div className="relative z-10 space-y-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#16131F] dark:text-white">
              Curiosity ➔ Understanding ➔ Growth
            </div>
            <p className="text-[11px] text-[#4D475B] dark:text-[#A7A3B4]">
              Mastery built on first principles, not competitive anxiety.
            </p>
          </div>
        </SpotlightCard>

        {/* Curvy Card 3: Competitive Exam Topology Matrix (Right - 4 columns) */}
        <SpotlightCard
          onClick={onExplore}
          className="md:col-span-4 p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-white/95 dark:bg-[#151221]/95 border border-[#E2D9F3] dark:border-[#2A263D] shadow-[0_8px_30px_rgba(117,80,200,0.07)] flex flex-col justify-between space-y-5 cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55] text-[10px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase">
                <Target className="w-3.5 h-3.5" />
                Exam Topology
              </span>
              <span className="text-[10px] font-mono text-[#77727F] dark:text-[#9A95A8]">
                5 National Tracks
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#16131F] dark:text-white tracking-tight group-hover:text-[#7550C8] transition-colors">
                High-yield axioms. <br />
                <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                  Zero surface cramming.
                </span>
              </h3>
              <p className="text-xs text-[#3D384D] dark:text-[#A7A3B4] font-normal leading-relaxed mt-1.5">
                Mastering 1 core structural invariant unlocks 28 past exam paper variations.
              </p>
            </div>

            {/* Interactive Exam Switcher Pills */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                {(['upsc', 'rbi', 'gate'] as const).map((ex) => (
                  <button
                    key={ex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveExam(ex);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
                      activeExam === ex
                        ? 'bg-[#7550C8] text-white shadow-xs'
                        : 'bg-[#F2EDFB] dark:bg-[#201A33] text-[#7550C8] dark:text-[#B99CFF] hover:bg-[#EDE6FB]'
                    }`}
                  >
                    {ex.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Dynamic Exam Invariant Preview */}
              <div className="p-3 rounded-2xl bg-[#F8F6FD] dark:bg-[#1A1629] border border-[#E4DCF0] dark:border-[#2C2740] space-y-1">
                <div className="text-[11px] font-bold text-[#16131F] dark:text-white">
                  {examData[activeExam].exam}
                </div>
                <div className="text-[10px] font-mono text-[#7550C8] dark:text-[#B99CFF] truncate">
                  {examData[activeExam].invariant}
                </div>
                <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  ✓ {examData[activeExam].metric}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#7550C8] dark:text-[#B99CFF] border-t border-[#EAE7EF] dark:border-[#242135]">
            <span>Explore Exam Intelligence</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </SpotlightCard>

      </div>

    </div>
  );
};
