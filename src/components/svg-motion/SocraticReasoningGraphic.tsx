import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, GitFork, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface ReasoningStep {
  id: string;
  stage: string;
  label: string;
  sub: string;
  type: 'question' | 'deconstruct' | 'misconception' | 'resolution';
  color: string;
  coords: { x: number; y: number };
}

const STEPS: ReasoningStep[] = [
  {
    id: 'step-1',
    stage: '01',
    label: 'Learner Query',
    sub: 'Why does compound interest scale exponentially instead of linearly?',
    type: 'question',
    color: '#7550C8',
    coords: { x: 80, y: 150 },
  },
  {
    id: 'step-2',
    stage: '02',
    label: 'Premise Deconstruction',
    sub: 'AI isolates recursive dependency: Principal(t+1) = Principal(t) × (1 + r)',
    type: 'deconstruct',
    color: '#8E5CFF',
    coords: { x: 260, y: 150 },
  },
  {
    id: 'step-3',
    stage: '03',
    label: 'Misconception Trap Isolated',
    sub: 'Student treated rate as additive offset rather than compounding operator',
    type: 'misconception',
    color: '#F59E0B',
    coords: { x: 440, y: 90 },
  },
  {
    id: 'step-4',
    stage: '04',
    label: 'Socratic Counter-Inquiry',
    sub: '"If interest earns interest, what happens to the base curve over 10 periods?"',
    type: 'deconstruct',
    color: '#06B6D4',
    coords: { x: 440, y: 210 },
  },
  {
    id: 'step-5',
    stage: '05',
    label: 'Invariant Mastery',
    sub: 'Euler Constant Limit & Geometric Multiplier Permanently Internalized',
    type: 'resolution',
    color: '#10B981',
    coords: { x: 620, y: 150 },
  },
];

export const SocraticReasoningGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStepId, setActiveStepId] = useState<string>('step-3');
  const prefersReduced = usePrefersReducedMotion();

  const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[2];

  return (
    <div className={`w-full rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#141120]/95 border border-[#E2D9F3] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 space-y-6 ${className}`}>
      
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE7EF] dark:border-[#242036]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
            Pillar 02 • Socratic Intelligence Architecture
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#110E1B] dark:text-white">
            Cognitive Deconstruction Sequence
          </h3>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
          <CheckCircle2 className="w-3 h-3" />
          Zero Answer Dumping
        </span>
      </div>

      {/* Interactive SVG Diagram */}
      <div className="relative overflow-x-auto py-2">
        <svg
          viewBox="0 0 700 300"
          className="w-full min-w-[550px] h-auto overflow-visible"
          aria-label="Socratic Reasoning Cognitive Graph"
        >
          {/* Connecting Branching Splines */}
          <path
            d="M 80 150 L 260 150"
            fill="none"
            stroke="#7550C8"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 260 150 C 350 150, 350 90, 440 90"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 260 150 C 350 150, 350 210, 440 210"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 440 90 C 530 90, 530 150, 620 150"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 440 210 C 530 210, 530 150, 620 150"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            className="opacity-70"
          />

          {/* Node Circles */}
          {STEPS.map((s) => {
            const isSelected = s.id === activeStepId;
            return (
              <g
                key={s.id}
                onClick={() => setActiveStepId(s.id)}
                className="cursor-pointer group"
              >
                {/* Selection halo */}
                {isSelected && (
                  <circle
                    cx={s.coords.x}
                    cy={s.coords.y}
                    r="28"
                    fill={s.color}
                    fillOpacity="0.15"
                  />
                )}

                {/* Main Node */}
                <circle
                  cx={s.coords.x}
                  cy={s.coords.y}
                  r="18"
                  fill={isSelected ? s.color : '#FFFFFF'}
                  className="dark:fill-[#1C182B] transition-colors"
                  stroke={s.color}
                  strokeWidth="2.5"
                />

                {/* Node number text */}
                <text
                  x={s.coords.x}
                  y={s.coords.y + 4}
                  textAnchor="middle"
                  className={`font-mono text-[10px] font-bold ${
                    isSelected ? 'fill-white' : 'fill-[#110E1B] dark:fill-white'
                  }`}
                >
                  {s.stage}
                </text>

                {/* Node Tag text */}
                <text
                  x={s.coords.x}
                  y={s.coords.y + (s.coords.y > 150 ? 32 : -24)}
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#110E1B] dark:fill-white"
                >
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active Stage Callout Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FE] dark:bg-[#181428] border border-[#E2D9F3] dark:border-[#2A233E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeStep.color }}
              />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#7550C8] dark:text-[#B99CFF]">
                Active Phase {activeStep.stage} • {activeStep.label}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#110E1B] dark:text-white">
              {activeStep.sub}
            </p>
          </div>

          <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white dark:bg-[#201A33] border border-[#E2D9F3] dark:border-[#382C58] text-[#555060] dark:text-[#9A95A8] shrink-0 font-semibold">
            Click nodes to explore pipeline
          </span>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};
