import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Target, Compass, TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface ClarityStage {
  id: string;
  num: string;
  title: string;
  conceptHeading: string;
  tagline: string;
  studentBenefit: string;
  investorSignal: string;
  metricBadge: string;
  color: string;
  coords: { x: number; y: number };
}

const CLARITY_STAGES: ClarityStage[] = [
  {
    id: 'curiosity',
    num: '01',
    title: 'Curiosity',
    conceptHeading: 'Socratic Hypothesis Formulation',
    tagline: 'Inquiry without false anxiety or judgment',
    studentBenefit: 'Students frame genuine questions without peer pressure, formula dumping, or rote memorization intimidation.',
    investorSignal: 'Frictionless onboarding with >74% conversion from casual question to diagnostic assessment.',
    metricBadge: 'Zero False Shame',
    color: '#7550C8',
    coords: { x: 100, y: 150 },
  },
  {
    id: 'understanding',
    num: '02',
    title: 'Understanding',
    conceptHeading: 'Root-Premise Deconstruction',
    tagline: 'Deconstructing complex concepts down to bedrock invariants',
    studentBenefit: 'Isolate foundational misconceptions and discover why theorems hold through counter-factual guidance.',
    investorSignal: 'Proprietary Socratic reasoning engine generates defensible data flywheels across academic cohorts.',
    metricBadge: 'First-Principles Proof',
    color: '#8E5CFF',
    coords: { x: 300, y: 90 },
  },
  {
    id: 'practice',
    num: '03',
    title: 'Practice',
    conceptHeading: 'Multi-Variant Boundary Testing',
    tagline: 'Stress-testing invariant models against past examinations',
    studentBenefit: 'Master 1 core invariant to solve 20+ historical past question variations across UPSC, RBI, and GATE.',
    investorSignal: '10x pedagogical efficiency: dramatically reduces hours wasted on repetitive question banks.',
    metricBadge: '1 Invariant : 28 PYQs',
    color: '#A855F7',
    coords: { x: 500, y: 170 },
  },
  {
    id: 'preparation',
    num: '04',
    title: 'Preparation',
    conceptHeading: 'Longitudinal Cognitive Pacing',
    tagline: 'Dynamic cognitive load balancing over 12–24 months',
    studentBenefit: 'Autonomous fatigue sensors dynamically redistribute heavy modules, protecting intellectual calm and sleep.',
    investorSignal: 'Multi-year user retention spanning complete multi-tier examination preparation cycles.',
    metricBadge: 'Burnout Shield Active',
    color: '#06B6D4',
    coords: { x: 700, y: 95 },
  },
  {
    id: 'growth',
    num: '05',
    title: 'Growth',
    conceptHeading: 'Strategic Competency Placement',
    tagline: 'Translating academic mastery into elite career mobility',
    studentBenefit: 'Direct bridge from analytical exam prowess into regulatory governance, quant finance, or distributed AI engineering.',
    investorSignal: 'Expands platform TAM beyond the $30B test-prep market into lifelong institutional talent placement.',
    metricBadge: 'Top 1% Career Mobility',
    color: '#10B981',
    coords: { x: 900, y: 150 },
  },
];

export const PrabodhaClarityPath: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStageId, setActiveStageId] = useState<string>('understanding');
  const prefersReduced = usePrefersReducedMotion();

  const activeStage = CLARITY_STAGES.find((s) => s.id === activeStageId) || CLARITY_STAGES[1];

  return (
    <section className={`w-full py-16 sm:py-24 select-none relative overflow-hidden ${className}`}>
      {/* Ambient background light wash */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#7550C8]/10 via-[#B99CFF]/15 to-[#06B6D4]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3F7]/80 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Autonomous Learning Pipeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            The Prabodha <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              Clarity Path.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed max-w-2xl mx-auto">
            A continuous, living vector of cognitive progression. How learners move from raw inquiry to permanent first-principles understanding, and how institutions scale genuine analytical capability.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: FLOWING 3D KINETIC ENERGY RIBBON PIPELINE  */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative bg-white/95 dark:bg-[#13111E]/95 rounded-[36px] border border-[#E2D9F3] dark:border-[#2A233E] shadow-[0_16px_50px_rgba(117,80,200,0.08)] p-8 sm:p-10">
          
          <svg
            viewBox="0 0 1000 270"
            className="w-full h-auto overflow-visible filter drop-shadow-md"
            aria-label="Continuous 3D Kinetic Learning Ribbon"
          >
            <defs>
              {/* Continuous Flowing Multi-Stop Gradient */}
              <linearGradient id="ribbon-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7550C8" />
                <stop offset="25%" stopColor="#8E5CFF" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="75%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>

              {/* Radiant Ribbon Glow */}
              <linearGradient id="ribbon-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7550C8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
              </linearGradient>

              {/* Flare filter */}
              <filter id="ribbon-flare" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ambient Ribbon Halo (Wide diffuse blurred spine) */}
            <path
              d="M 100 150 C 200 150, 200 90, 300 90 C 400 90, 400 170, 500 170 C 600 170, 600 95, 700 95 C 800 95, 800 150, 900 150"
              fill="none"
              stroke="url(#ribbon-glow)"
              strokeWidth="16"
              strokeLinecap="round"
              className="opacity-40 dark:opacity-60 blur-sm"
            />

            {/* Background Structural Track Guide */}
            <path
              d="M 100 150 C 200 150, 200 90, 300 90 C 400 90, 400 170, 500 170 C 600 170, 600 95, 700 95 C 800 95, 800 150, 900 150"
              fill="none"
              stroke="#E2D9F3"
              className="dark:stroke-[#28223B]"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Master Kinetic Flowing Gradient Ribbon */}
            <motion.path
              d="M 100 150 C 200 150, 200 90, 300 90 C 400 90, 400 170, 500 170 C 600 170, 600 95, 700 95 C 800 95, 800 150, 900 150"
              fill="none"
              stroke="url(#ribbon-flow)"
              strokeWidth="4.5"
              strokeLinecap="round"
              initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: MOTION_TOKENS.ease.appleStandard }}
            />

            {/* Traveling Light Pulse Comets along the continuous ribbon */}
            {!prefersReduced && (
              <>
                <motion.circle
                  r="5"
                  fill="#FFFFFF"
                  filter="url(#ribbon-flare)"
                  animate={{
                    cx: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    cy: [150, 115, 90, 135, 170, 135, 95, 125, 150],
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.circle
                  r="3.5"
                  fill="#06B6D4"
                  animate={{
                    cx: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    cy: [150, 115, 90, 135, 170, 135, 95, 125, 150],
                    opacity: [0, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    delay: 2.75,
                    ease: 'easeInOut',
                  }}
                />
              </>
            )}

            {/* 5 Architectural Waypoint Stations along the Ribbon */}
            {CLARITY_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;

              return (
                <g
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className="cursor-pointer group"
                >
                  {/* Subtle Expanding Target Shield */}
                  <circle
                    cx={stage.coords.x}
                    cy={stage.coords.y}
                    r={isSelected ? 36 : 26}
                    fill={isSelected ? 'rgba(117, 80, 200, 0.12)' : 'transparent'}
                    className="transition-all duration-300"
                  />

                  {/* Outer Concentric Station Ring */}
                  <circle
                    cx={stage.coords.x}
                    cy={stage.coords.y}
                    r={isSelected ? 22 : 18}
                    fill="currentColor"
                    className="text-white dark:text-[#181329] transition-all duration-200"
                    stroke={isSelected ? stage.color : '#D1C6EB'}
                    strokeWidth={isSelected ? 3.5 : 2}
                    style={{
                      filter: isSelected
                        ? 'drop-shadow(0 6px 18px rgba(117, 80, 200, 0.35))'
                        : 'drop-shadow(0 2px 8px rgba(0,0,0,0.05))',
                    }}
                  />

                  {/* Station Core Invariant Diamond */}
                  <polygon
                    points={`${stage.coords.x},${stage.coords.y - 7} ${stage.coords.x + 7},${stage.coords.y} ${stage.coords.x},${stage.coords.y + 7} ${stage.coords.x - 7},${stage.coords.y}`}
                    fill={isSelected ? stage.color : '#7550C8'}
                    className="transition-colors"
                  />

                  {/* Stage Headline Text Label */}
                  <text
                    x={stage.coords.x}
                    y={stage.coords.y + (stage.coords.y < 120 ? -36 : 46)}
                    textAnchor="middle"
                    className={`font-sans text-[13px] font-bold tracking-tight transition-colors ${
                      isSelected
                        ? 'fill-[#7550C8] dark:fill-[#B99CFF]'
                        : 'fill-[#110E1B] dark:fill-white group-hover:fill-[#7550C8]'
                    }`}
                  >
                    {stage.title}
                  </text>

                  {/* Stage Metric Tag */}
                  <text
                    x={stage.coords.x}
                    y={stage.coords.y + (stage.coords.y < 120 ? -22 : 60)}
                    textAnchor="middle"
                    className="font-mono text-[9px] uppercase tracking-wider fill-[#77727F] dark:fill-[#8E8A9B] font-semibold"
                  >
                    Phase {stage.num}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Stage Detailed Breakdown (Student + Investor Dual Lens) */}
          <div className="mt-8 pt-8 border-t border-[#EAE7EF] dark:border-[#252236] grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Student Experience Dimension */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF8FE] dark:bg-[#181427] border border-[#E3DAF2] dark:border-[#2D2644] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#7550C8] dark:text-[#B99CFF] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeStage.color }} />
                    Learner Experience • Phase {activeStage.num}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/70 text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                    {activeStage.metricBadge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#110E1B] dark:text-white">
                  {activeStage.conceptHeading}
                </h4>

                <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] leading-relaxed">
                  {activeStage.studentBenefit}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE7EF] dark:border-[#262138] text-xs font-mono text-[#555060] dark:text-[#9A95A8] italic">
                &ldquo;{activeStage.tagline}&rdquo;
              </div>
            </div>

            {/* Investor & Strategic Partner Dimension */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#F4F9F8] dark:bg-[#111F24] border border-[#CEE9E4] dark:border-[#1F3E3D] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Strategic & Investor Thesis
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-semibold">
                    Scalable Defensibility
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#0F2D28] dark:text-[#E6F4F1]">
                  Pedagogical Moat & Economic Leverage
                </h4>

                <p className="text-xs sm:text-sm text-[#274B45] dark:text-[#A7D7CF] leading-relaxed">
                  {activeStage.investorSignal}
                </p>
              </div>

              <div className="pt-3 border-t border-[#CEE9E4] dark:border-[#1E3A39] text-xs font-mono text-[#2C554F] dark:text-[#92C4BC]">
                Zero formula memorization • High-margin SaaS & institutional delivery
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: RESPONSIVE ILLUMINATED VERTICAL SPINAL TRACK */}
        {/* ======================================================== */}
        <div className="block lg:hidden space-y-4">
          {CLARITY_STAGES.map((stage) => {
            const isSelected = stage.id === activeStageId;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-5 rounded-3xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-[#151224] border-[#7550C8] shadow-[0_8px_30px_rgba(117,80,200,0.12)] ring-1 ring-[#7550C8]/25'
                    : 'bg-[#FAF8FE] dark:bg-[#110F1B] border-[#E2D9F3] dark:border-[#221E31]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-bold text-xs ${
                        isSelected
                          ? 'bg-[#7550C8] text-white shadow-soft-xs'
                          : 'bg-[#EDE6FB] dark:bg-[#201A33] text-[#7550C8] dark:text-[#B99CFF]'
                      }`}
                    >
                      {stage.num}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7550C8] dark:text-[#B99CFF] font-bold">
                        Phase {stage.num}
                      </span>
                      <h4 className="text-sm font-bold text-[#110E1B] dark:text-white">
                        {stage.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EDE6FB] dark:bg-[#1E1830] text-[#7550C8] dark:text-[#B99CFF]">
                    {stage.metricBadge}
                  </span>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-[#EAE7EF] dark:border-[#242036] space-y-3"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#110E1B] dark:text-white block mb-1">
                        {stage.conceptHeading}
                      </span>
                      <p className="text-xs text-[#383347] dark:text-[#CBD5E1] leading-relaxed">
                        {stage.studentBenefit}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300">
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
