import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Target, Sparkles, ArrowRight, CheckCircle2, Compass, Activity, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface AppleHeroShowcaseProps {
  onExplore?: () => void;
  onSocraticDemo?: () => void;
}

export const AppleHeroShowcase: React.FC<AppleHeroShowcaseProps> = ({
  onExplore,
  onSocraticDemo,
}) => {
  const [selectedExam, setSelectedExam] = useState<'upsc' | 'rbi' | 'gate' | 'cat'>('upsc');

  const examInvariants = {
    upsc: {
      exam: 'UPSC Civil Services',
      paper: 'GS Paper 2 & 3',
      theorem: 'Constitutional Basic Structure Axiom',
      why: 'Constituent power vs delegated legislative power. Unlocks 28 historical exam variations.',
      tag: 'Polity & Governance',
    },
    rbi: {
      exam: 'RBI Grade B',
      paper: 'Phase 2 Economics & Finance',
      theorem: 'Monetary Transmission & Yield Curve Dynamics',
      why: 'Policy rate pass-through to liquidity ratios and capex multipliers without rote memorization.',
      tag: 'Macro-Finance',
    },
    gate: {
      exam: 'GATE CS & IT',
      paper: 'Algorithms & Theoretical CS',
      theorem: 'Turing Decidability & Diagonalization Limit',
      why: 'Self-referential adversarial logic proves fundamental boundaries of computation.',
      tag: 'Theoretical CS',
    },
    cat: {
      exam: 'CAT Analytics',
      paper: 'Quantitative Aptitude & DILR',
      theorem: 'Combinatorial Symmetry & Permutation Correction',
      why: 'Arrangements divided by positional symmetries eliminate 90% of counting errors.',
      tag: 'Decision Sciences',
    },
  };

  const current = examInvariants[selectedExam];

  return (
    <div className="w-full pt-8 sm:pt-12 select-none">
      
      {/* ======================================================== */}
      {/* APPLE BENTO STAGE: 2-ROW FLUID ARCHITECTURE             */}
      {/* ======================================================== */}
      <div className="space-y-5 sm:space-y-6">
        
        {/* ROW 1: Heroic Centerpiece Showcase Card (Apple Flagship Card) */}
        <SpotlightCard className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/95 via-[#FAF7FE]/90 to-white/95 dark:from-[#181428]/95 dark:via-[#13101E]/90 dark:to-[#181428]/95 border border-[#E3DAF2] dark:border-[#2D2742] shadow-[0_12px_45px_rgba(117,80,200,0.08)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Luminous Apple Radial Glow Background */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#7550C8]/15 via-[#EDE6FB]/25 to-transparent rounded-full blur-3xl -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Column (7 Cols on desktop, stacked on mobile) */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#3A2E59]">
                <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase tracking-wider">
                  The Socratic Learning Architecture
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.12]">
                Learning built on <br />
                <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                  unshakable first principles.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Conventional coaching forces rote formulas that evaporate under examination stress. Prabodha guides you through targeted Socratic counter-inquiries so you discover the core invariant yourself.
              </p>

              {/* 3 Apple-Grade Capability Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {[
                  'Zero Rote Memorization',
                  'Fermat & Turing Proof Scaffolding',
                  'Permanent Cognitive Recall',
                ].map((cap, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1D192E] border border-[#E4DCF0] dark:border-[#32284C] text-[11px] font-mono font-semibold text-[#110E1B] dark:text-[#E2DFEB] shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{cap}</span>
                  </span>
                ))}
              </div>

              {/* Direct Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={onSocraticDemo}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] text-xs sm:text-sm font-semibold hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] shadow-[0_4px_16px_rgba(117,80,200,0.18)] active:scale-[0.97] flex items-center justify-center gap-2 group"
                  style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
                >
                  <Sparkles className="w-4 h-4 text-[#B99CFF] dark:text-[#7550C8]" />
                  <span>Launch Socratic Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExplore}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/90 dark:bg-[#1B172B] text-[#110E1B] dark:text-white text-xs sm:text-sm font-medium border border-[#E3DAF2] dark:border-[#352A50] hover:border-[#7550C8] shadow-xs flex items-center justify-center gap-2 active:scale-[0.98]"
                  style={{ transition: 'border-color 150ms ease, background-color 150ms ease' }}
                >
                  <span>Explore Exam Syllabi</span>
                </button>
              </div>

            </div>

            {/* Right Mascot Spotlight (5 Cols desktop, centered uncropped on mobile) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
              
              {/* Pedestal Radiant Ring */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7550C8]/25 via-[#B99CFF]/15 to-transparent rounded-full blur-2xl -z-0" />

              {/* The Mascot Duo Container with Architecturally Grounded Pedestal Base */}
              <div className="relative w-56 sm:w-72 lg:w-96 max-w-full flex flex-col items-center justify-center mx-auto">
                <div 
                  className="relative w-full flex items-center justify-center overflow-hidden"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
                  }}
                >
                  <img
                    src="/new-assets/Cheerful Student and Robot Mascot.png"
                    alt="Official Prabodha Student Scholar and Socratic Robot Companion"
                    className="w-full h-auto object-contain filter drop-shadow-2xl select-none animate-float-slow pb-4"
                    loading="eager"
                  />
                </div>

                {/* Grounding Frosted Glass Pedestal Dock */}
                <div className="w-48 sm:w-60 h-2 -mt-2 bg-gradient-to-r from-transparent via-[#7550C8]/30 to-transparent rounded-full blur-xs" />

                {/* Floating Apple-Style Invariant Pill Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="mt-2 bg-white/95 dark:bg-[#1C182E]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#DDD2F7] dark:border-[#3A2D58] shadow-[0_4px_20px_rgba(117,80,200,0.15)] flex items-center gap-2 relative z-10"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#110E1B] dark:text-white">
                    Invariant Verified • 100% Recall
                  </span>
                </motion.div>
              </div>

            </div>

          </div>

        </SpotlightCard>

        {/* ROW 2: Two Apple Curvy Sub-Cards (Exam Topology + Cognitive Diagnostic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card A: Interactive Exam Topology Matrix */}
          <SpotlightCard
            onClick={onExplore}
            className="rounded-[28px] sm:rounded-[32px] bg-white/95 dark:bg-[#141120]/95 border border-[#E3DAF2] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 flex flex-col justify-between space-y-5 cursor-pointer group"
          >
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55] text-[10px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase">
                  <Target className="w-3.5 h-3.5" />
                  Exam Topology
                </span>
                <span className="text-[10px] font-mono text-[#585366] dark:text-[#9A95A8] font-semibold">
                  4 Verified Tracks
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#110E1B] dark:text-white tracking-tight group-hover:text-[#7550C8] transition-colors">
                  High-Yield Curriculum Invariants
                </h3>
                <p className="text-xs text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed mt-1">
                  Tap an examination to inspect its core structural invariant:
                </p>
              </div>

              {/* Interactive Exam Selector Tabs */}
              <div
                className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#F6F2FB] dark:bg-[#1B1629] border border-[#E5DCF2] dark:border-[#2C243E]"
                onClick={(e) => e.stopPropagation()}
              >
                {(['upsc', 'rbi', 'gate', 'cat'] as const).map((key) => {
                  const isCur = selectedExam === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedExam(key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all flex-1 text-center ${
                        isCur
                          ? 'bg-[#7550C8] text-white shadow-xs'
                          : 'text-[#4D475B] dark:text-[#A7A3B4] hover:text-[#110E1B] dark:hover:text-white'
                      }`}
                    >
                      {key.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Selected Exam Invariant Details Card */}
              <div className="p-4 rounded-2xl bg-[#FAF7FE] dark:bg-[#1B162A] border border-[#E3DAF2] dark:border-[#2D2542] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#110E1B] dark:text-white">
                    {current.exam}
                  </span>
                  <span className="text-[10px] font-mono text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                    {current.paper}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#7550C8] dark:text-[#D5C2FF]">
                  &ldquo;{current.theorem}&rdquo;
                </div>
                <p className="text-[11px] text-[#383347] dark:text-[#CBD5E1] leading-relaxed">
                  {current.why}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#7550C8] dark:text-[#B99CFF] border-t border-[#EAE7EF] dark:border-[#252036]">
              <span>Explore Exam Intelligence Matrix</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

          </SpotlightCard>

          {/* Card B: Cognitive Retention & Fatigue Diagnostic */}
          <SpotlightCard
            onClick={onExplore}
            className="rounded-[28px] sm:rounded-[32px] bg-white/95 dark:bg-[#141120]/95 border border-[#E3DAF2] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 flex flex-col justify-between space-y-5 cursor-pointer group"
          >
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F0FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55] text-[10px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase">
                  <Activity className="w-3.5 h-3.5" />
                  Cognitive Pacing
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  ● Spaced Retrieval
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#110E1B] dark:text-white tracking-tight group-hover:text-[#7550C8] transition-colors">
                  Longitudinal Memory Trace Audit
                </h3>
                <p className="text-xs text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed mt-1">
                  Comparing rote formula decay against first-principles invariant consolidation:
                </p>
              </div>

              {/* Retention Comparison Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                
                {/* Rote Coaching Decay */}
                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/25 border border-rose-200/70 dark:border-rose-900/40 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-rose-700 dark:text-rose-400 font-bold block">
                    Conventional Rote
                  </span>
                  <div className="text-2xl font-mono font-bold text-rose-700 dark:text-rose-300">
                    22.0%
                  </div>
                  <p className="text-[10px] text-rose-800/80 dark:text-rose-300/80 leading-tight">
                    78% decays within 14 days under exam stress.
                  </p>
                </div>

                {/* Prabodha Invariant Recall */}
                <div className="p-4 rounded-2xl bg-[#FAF6FE] dark:bg-[#1E1730] border border-[#DDD2F7] dark:border-[#3B2F57] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#D5C2FF] font-bold block">
                    Prabodha Invariant
                  </span>
                  <div className="text-2xl font-mono font-bold text-[#7550C8] dark:text-white">
                    88.4%
                  </div>
                  <p className="text-[10px] text-[#51349A] dark:text-[#D5C2FF] leading-tight font-medium">
                    Permanent recall based on causal deduction.
                  </p>
                </div>

              </div>

              {/* Dynamic load status */}
              <div className="p-3 rounded-2xl bg-[#FAF7FE] dark:bg-[#1A1629] border border-[#E3DAF2] dark:border-[#2C243E] flex items-center justify-between text-xs">
                <span className="text-[#383347] dark:text-[#CBD5E1] font-medium">
                  Weekly Cognitive Fatigue:
                </span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  Optimal Balanced Zone
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#7550C8] dark:text-[#B99CFF] border-t border-[#EAE7EF] dark:border-[#252036]">
              <span>Inspect Mentorship Framework</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

          </SpotlightCard>

        </div>

      </div>

    </div>
  );
};
