import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface EvolutionPhase {
  id: string;
  stageNum: string;
  phaseName: string;
  studentPerspective: string;
  aiAction: string;
  invariantProof: string;
  color: string;
}

const PHASES: EvolutionPhase[] = [
  {
    id: 'inquiry',
    stageNum: '01',
    phaseName: 'Unstructured Inquiry Vapor',
    studentPerspective: '"Why does compound interest explode exponentially instead of growing linearly?"',
    aiAction: 'Captures raw natural language question without formula dumping or rote definition quoting.',
    invariantProof: 'Linear Offset Assumption detected and isolated from base equation.',
    color: '#7550C8',
  },
  {
    id: 'deconstruct',
    stageNum: '02',
    phaseName: 'Premise Isolation & Prism Splitting',
    studentPerspective: 'Student realizes interest in period t forms part of the principal for period t+1.',
    aiAction: 'Deconstructs recursive relation: P(t+1) = P(t) × (1 + r). Isolates multiplicative operator.',
    invariantProof: 'Multiplicative compounding operator verified as core structural property.',
    color: '#8E5CFF',
  },
  {
    id: 'neutralize',
    stageNum: '03',
    phaseName: 'Misconception Trap Neutralization',
    studentPerspective: 'Socratic counter-inquiry: "If compounding frequency doubles to infinity, does total value reach infinity?"',
    aiAction: 'Presents counter-factual boundary test. Prevents student from memorizing blind rules.',
    invariantProof: 'Euler limit e = lim (1 + 1/n)^n emerges naturally from inquiry.',
    color: '#06B6D4',
  },
  {
    id: 'crystallize',
    stageNum: '04',
    phaseName: 'First-Principles Invariant Crystallization',
    studentPerspective: 'Permanent breakthrough: Euler constant e and exponential growth curve internalized forever.',
    aiAction: 'Generates cross-paper invariant anchor: applies directly to population ecology (UPSC) and option pricing (RBI).',
    invariantProof: '100% Retained across 28 multi-paper examination variations.',
    color: '#10B981',
  },
];

export const SocraticReasoningGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(1);
  const prefersReduced = usePrefersReducedMotion();

  const currentPhase = PHASES[activePhaseIndex];

  return (
    <div className={`w-full rounded-[32px] sm:rounded-[36px] bg-white/95 dark:bg-[#141120]/95 border border-[#E2D9F3] dark:border-[#282238] shadow-[0_12px_45px_rgba(117,80,200,0.06)] p-6 sm:p-10 space-y-8 select-none ${className}`}>
      
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#EAE7EF] dark:border-[#242036]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
            Pillar 02 • Socratic Intelligence Visual Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white">
            Concept Crystallization Lifecycle
          </h3>
        </div>

        {/* 4 Interactive Phase Scrubbers */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F5F2FA] dark:bg-[#1A162B] border border-[#E2D9F3] dark:border-[#2A233E] overflow-x-auto max-w-full">
          {PHASES.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePhaseIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap ${
                activePhaseIndex === idx
                  ? 'bg-[#7550C8] text-white shadow-soft-xs'
                  : 'text-[#555060] dark:text-[#9A95A8] hover:text-[#110E1B] dark:hover:text-white'
              }`}
            >
              Phase 0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Motion Canvas: Crystallizing Vector Core */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#F9F7FD] via-white to-[#F9F7FD] dark:from-[#171426] dark:via-[#13101E] dark:to-[#171426] p-6 sm:p-8 border border-[#E5DCF3] dark:border-[#2B2340]">
        
        <svg
          viewBox="0 0 760 320"
          className="w-full h-auto overflow-visible filter drop-shadow-sm"
          aria-label="Socratic Reasoning Concept Crystallization SVG"
        >
          <defs>
            <radialGradient id="soc-flare" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#8E5CFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="soc-stream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8E5CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
            </linearGradient>

            <filter id="soc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Ambient Waveguides */}
          <path
            d="M 60 160 C 180 80, 240 240, 380 160 C 500 80, 580 220, 700 160"
            fill="none"
            stroke="url(#soc-stream)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="opacity-50"
          />

          {/* Dynamic Stage Representation */}
          {/* STAGE 1: INQUIRY VAPOR (Dispersed Particles) */}
          <g className={`transition-opacity duration-500 ${activePhaseIndex === 0 ? 'opacity-100' : 'opacity-25'}`}>
            <circle cx="120" cy="160" r="45" fill="none" stroke="#7550C8" strokeWidth="1.5" strokeDasharray="3 3" />
            {[
              { cx: 105, cy: 145, r: 3 },
              { cx: 135, cy: 155, r: 4 },
              { cx: 110, cy: 175, r: 2.5 },
              { cx: 130, cy: 135, r: 3.5 },
              { cx: 120, cy: 160, r: 5 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#7550C8" opacity="0.8" />
            ))}
            <text x="120" y="225" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#110E1B] dark:fill-white">
              Raw Inquiry
            </text>
          </g>

          {/* STAGE 2: PRISM SPLITTING (Refraction Triangles) */}
          <g className={`transition-opacity duration-500 ${activePhaseIndex === 1 ? 'opacity-100' : 'opacity-25'}`}>
            <polygon
              points="290,120 330,195 250,195"
              fill="none"
              stroke="#8E5CFF"
              strokeWidth="2.5"
              filter={activePhaseIndex === 1 ? 'url(#soc-glow)' : undefined}
            />
            <line x1="220" y1="160" x2="270" y2="160" stroke="#7550C8" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="310" y1="150" x2="360" y2="130" stroke="#06B6D4" strokeWidth="2" />
            <line x1="310" y1="170" x2="360" y2="190" stroke="#F59E0B" strokeWidth="2" />
            <text x="290" y="225" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#110E1B] dark:fill-white">
              Premise Deconstruction
            </text>
          </g>

          {/* STAGE 3: MISCONCEPTION NEUTRALIZATION (Vortex Boundary) */}
          <g className={`transition-opacity duration-500 ${activePhaseIndex === 2 ? 'opacity-100' : 'opacity-25'}`}>
            <ellipse cx="480" cy="160" rx="40" ry="25" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5 3" />
            <ellipse cx="480" cy="160" rx="25" ry="40" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="480" cy="160" r="8" fill="#06B6D4" filter={activePhaseIndex === 2 ? 'url(#soc-glow)' : undefined} />
            <text x="480" y="225" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#110E1B] dark:fill-white">
              Boundary Neutralization
            </text>
          </g>

          {/* STAGE 4: CRYSTALLIZED INVARIANT (Luminous Diamond Tesseract) */}
          <g className={`transition-opacity duration-500 ${activePhaseIndex === 3 ? 'opacity-100' : 'opacity-25'}`}>
            <polygon
              points="660,115 705,160 660,205 615,160"
              fill="currentColor"
              className="text-white dark:text-[#181329]"
              stroke="#10B981"
              strokeWidth="3"
              style={{
                filter: activePhaseIndex === 3 ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))' : undefined,
              }}
            />
            <polygon points="660,135 685,160 660,185 635,160" fill="#10B981" opacity="0.4" />
            <circle cx="660" cy="160" r="5" fill="#10B981" />
            <text x="660" y="225" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#10B981] dark:fill-emerald-400">
              Invariant Crystallized
            </text>
          </g>

          {/* Central Active Phase Highlight Beam */}
          <line
            x1={[120, 290, 480, 660][activePhaseIndex]}
            y1="240"
            x2={[120, 290, 480, 660][activePhaseIndex]}
            y2="255"
            stroke="#7550C8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Phase Narrative Card */}
        <div className="mt-4 p-5 rounded-2xl bg-white/90 dark:bg-[#1B172E]/90 border border-[#E2D9F3] dark:border-[#2E2548] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentPhase.color }} />
              <span className="text-[10px] font-mono uppercase font-bold text-[#7550C8] dark:text-[#B99CFF]">
                Active State • Phase {currentPhase.stageNum}: {currentPhase.phaseName}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#110E1B] dark:text-white">
              {currentPhase.studentPerspective}
            </p>
            <p className="text-xs text-[#555060] dark:text-[#A7A3B4]">
              {currentPhase.aiAction}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-purple-50 dark:bg-[#251D3A] border border-purple-200 dark:border-[#3E2E62] text-[11px] font-mono font-bold text-[#7550C8] dark:text-[#D4C3FF] shrink-0">
            {currentPhase.invariantProof}
          </div>
        </div>

      </div>

      {/* Footer Metrics */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#EAE7EF] dark:border-[#252236]">
        <span className="text-[#555060] dark:text-[#9A95A8]">
          Socratic scaffolding prevents rote formula decay and builds permanent recall.
        </span>
        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Zero Rote Memorization
        </span>
      </div>

    </div>
  );
};
