import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target, Compass, TrendingUp, CheckCircle2 } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface ClarityStage {
  id: string;
  num: string;
  title: string;
  tagline: string;
  studentBenefit: string;
  investorSignal: string;
  icon: React.ElementType;
  coords: { x: number; y: number };
}

const CLARITY_STAGES: ClarityStage[] = [
  {
    id: 'curiosity',
    num: '01',
    title: 'Curiosity',
    tagline: 'Inquiry without false shame',
    studentBenefit: 'Ask naive or complex questions without peer pressure or formula dumping.',
    investorSignal: 'High initial activation rate: frictionless conversational onboarding.',
    icon: Sparkles,
    coords: { x: 100, y: 120 },
  },
  {
    id: 'understanding',
    num: '02',
    title: 'Understanding',
    tagline: 'Deconstructing root causes',
    studentBenefit: 'Isolate foundational misconceptions and discover why theorems hold.',
    investorSignal: 'Proprietary Socratic LLM reasoning graph vs generic answer scrapers.',
    icon: Brain,
    coords: { x: 300, y: 80 },
  },
  {
    id: 'practice',
    num: '03',
    title: 'Practice',
    tagline: 'Invariant stress-testing',
    studentBenefit: 'Test 20+ past paper variations using one deep invariant model.',
    investorSignal: 'High-leverage pedagogical efficiency: 10x retention with 30% time spend.',
    icon: Target,
    coords: { x: 500, y: 140 },
  },
  {
    id: 'preparation',
    num: '04',
    title: 'Preparation',
    tagline: 'Longitudinal stamina & calm',
    studentBenefit: 'Dynamic fatigue sensors protect cognitive balance over 18+ months.',
    investorSignal: 'Multi-year user lifecycle & high retention through competitive exam cycles.',
    icon: Compass,
    coords: { x: 700, y: 90 },
  },
  {
    id: 'growth',
    num: '05',
    title: 'Growth',
    tagline: 'Strategic career competency',
    studentBenefit: 'Seamless bridge from exam mastery into policy, engineering, or quantitative tech.',
    investorSignal: 'Expansive TAM: Transitioning from $30B test-prep into lifelong career mobility.',
    icon: TrendingUp,
    coords: { x: 900, y: 130 },
  },
];

export const PrabodhaClarityPath: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStageId, setActiveStageId] = useState<string>('understanding');
  const prefersReduced = usePrefersReducedMotion();

  const activeStage = CLARITY_STAGES.find((s) => s.id === activeStageId) || CLARITY_STAGES[1];

  return (
    <section className={`w-full py-12 sm:py-20 select-none ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3F7]/80 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Cognitive Evolution Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.12]">
            The Prabodha <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              Clarity Path.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            From raw curiosity to verified mastery: how learners build unshakable reasoning architectures, and how institutions scale genuine cognitive capital.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: HORIZONTAL CURVED SVG MOTION PIPELINE      */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative bg-white/90 dark:bg-[#13111E]/90 rounded-[32px] sm:rounded-[36px] border border-[#E2D9F3] dark:border-[#272338] shadow-[0_12px_45px_rgba(117,80,200,0.06)] p-8">
          
          <svg
            viewBox="0 0 1000 240"
            className="w-full h-auto overflow-visible"
            aria-label="Interactive 5-stage Clarity Path visualization"
          >
            <defs>
              <linearGradient id="clarity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7550C8" />
                <stop offset="25%" stopColor="#8E5CFF" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="75%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Background Track Guide */}
            <path
              d="M 100 120 C 200 120, 200 80, 300 80 C 400 80, 400 140, 500 140 C 600 140, 600 90, 700 90 C 800 90, 800 130, 900 130"
              fill="none"
              stroke="#E2D9F3"
              className="dark:stroke-[#282238]"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Animated Flowing Gradient Spine */}
            <motion.path
              d="M 100 120 C 200 120, 200 80, 300 80 C 400 80, 400 140, 500 140 C 600 140, 600 90, 700 90 C 800 90, 800 130, 900 130"
              fill="none"
              stroke="url(#clarity-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: MOTION_TOKENS.ease.appleStandard }}
            />

            {/* Nodes along the spine */}
            {CLARITY_STAGES.map((stage, idx) => {
              const isSelected = stage.id === activeStageId;
              const Icon = stage.icon;

              return (
                <g
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className="cursor-pointer group"
                >
                  {/* Subtle Outer Target Area */}
                  <circle
                    cx={stage.coords.x}
                    cy={stage.coords.y}
                    r={isSelected ? 32 : 24}
                    fill={isSelected ? 'rgba(117, 80, 200, 0.12)' : 'transparent'}
                    className="transition-all duration-300"
                  />

                  {/* Main Node Disc */}
                  <circle
                    cx={stage.coords.x}
                    cy={stage.coords.y}
                    r={isSelected ? 20 : 16}
                    fill={isSelected ? '#7550C8' : '#FFFFFF'}
                    className="dark:fill-[#1E192D] transition-all duration-200"
                    stroke={isSelected ? '#7550C8' : '#D1C6EB'}
                    strokeWidth="3"
                    style={{
                      filter: isSelected
                        ? 'drop-shadow(0 4px 14px rgba(117, 80, 200, 0.35))'
                        : 'drop-shadow(0 2px 6px rgba(0,0,0,0.04))',
                    }}
                  />

                  {/* Central Node Number */}
                  <text
                    x={stage.coords.x}
                    y={stage.coords.y + 4}
                    textAnchor="middle"
                    className={`font-mono text-[11px] font-bold ${
                      isSelected ? 'fill-white' : 'fill-[#7550C8] dark:fill-[#B99CFF]'
                    }`}
                  >
                    {stage.num}
                  </text>

                  {/* Stage Label Below */}
                  <text
                    x={stage.coords.x}
                    y={stage.coords.y + 46}
                    textAnchor="middle"
                    className={`font-sans text-[13px] font-bold tracking-tight transition-colors ${
                      isSelected
                        ? 'fill-[#7550C8] dark:fill-[#B99CFF]'
                        : 'fill-[#110E1B] dark:fill-white group-hover:fill-[#7550C8]'
                    }`}
                  >
                    {stage.title}
                  </text>

                  <text
                    x={stage.coords.x}
                    y={stage.coords.y + 60}
                    textAnchor="middle"
                    className="font-mono text-[9px] uppercase tracking-wider fill-[#77727F] dark:fill-[#8E8A9B]"
                  >
                    Phase {stage.num}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Stage Detailed Breakdown (Student + Investor Dual Lens) */}
          <div className="mt-8 pt-8 border-t border-[#EAE7EF] dark:border-[#252236] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Student Experience Dimension */}
            <div className="p-6 rounded-2xl bg-[#FAF8FE] dark:bg-[#181427] border border-[#E3DAF2] dark:border-[#2D2644] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7550C8]" />
                <span className="text-[11px] font-mono uppercase font-bold text-[#7550C8] dark:text-[#B99CFF]">
                  Learner Experience • {activeStage.title}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#110E1B] dark:text-white">
                {activeStage.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] leading-relaxed">
                {activeStage.studentBenefit}
              </p>
            </div>

            {/* Investor & Partner Dimension */}
            <div className="p-6 rounded-2xl bg-[#F4F9F8] dark:bg-[#111F24] border border-[#CEE9E4] dark:border-[#1F3E3D] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400">
                  Strategic & Investor Thesis
                </span>
              </div>
              <h4 className="text-base font-bold text-[#0F2D28] dark:text-[#E6F4F1]">
                Defensibility & Unit Economics
              </h4>
              <p className="text-xs sm:text-sm text-[#274B45] dark:text-[#A7D7CF] leading-relaxed">
                {activeStage.investorSignal}
              </p>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: VERTICAL RESPONSIVE ILLUMINATED TRACK        */}
        {/* ======================================================== */}
        <div className="block lg:hidden space-y-4">
          {CLARITY_STAGES.map((stage) => {
            const isSelected = stage.id === activeStageId;
            const Icon = stage.icon;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-[#151224] border-[#7550C8] shadow-[0_6px_24px_rgba(117,80,200,0.12)] ring-1 ring-[#7550C8]/20'
                    : 'bg-[#FAF8FE] dark:bg-[#110F1B] border-[#E2D9F3] dark:border-[#221E31]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                        isSelected
                          ? 'bg-[#7550C8] text-white shadow-soft-xs'
                          : 'bg-[#EDE6FB] dark:bg-[#201A33] text-[#7550C8] dark:text-[#B99CFF]'
                      }`}
                    >
                      {stage.num}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7550C8] dark:text-[#B99CFF] font-bold">
                        Stage {stage.num}
                      </span>
                      <h4 className="text-sm font-bold text-[#110E1B] dark:text-white">
                        {stage.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#77727F]">
                    {isSelected ? '● Active' : '○'}
                  </span>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-3 border-t border-[#EAE7EF] dark:border-[#242036] space-y-3"
                  >
                    <p className="text-xs text-[#383347] dark:text-[#CBD5E1] leading-relaxed">
                      {stage.studentBenefit}
                    </p>
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300">
                      <strong>Investor Value:</strong> {stage.investorSignal}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
