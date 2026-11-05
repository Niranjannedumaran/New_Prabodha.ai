import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface Phase {
  num: number;
  title: string;
  status: string;
  color: string;
  xStart: number; // percentage 0-1 across the SVG
  xEnd: number;
}

const PHASES: Phase[] = [
  { num: 1, title: 'Month 0-3: Baseline & Misconceptions', status: 'Calibrated', color: '#7550C8', xStart: 0, xEnd: 0.22 },
  { num: 2, title: 'Month 4-12: Core Invariant Deep-Work', status: 'Optimal Zone', color: '#8E5CFF', xStart: 0.22, xEnd: 0.56 },
  { num: 3, title: 'Month 13-18: Exam Synthesis & PYQ Simulation', status: 'Peak Calm', color: '#10B981', xStart: 0.56, xEnd: 0.8 },
  { num: 4, title: 'Month 18+: Institutional Placement & Interview', status: 'Mastered', color: '#06B6D4', xStart: 0.8, xEnd: 1 },
];

const CHECKPOINTS = [
  { cx: 140, label: 'Spaced Audit 1', phase: 1 },
  { cx: 300, label: 'Spaced Audit 2', phase: 2 },
  { cx: 460, label: 'Full Mock Test', phase: 3 },
  { cx: 610, label: 'Final Consolidation', phase: 4 },
];

// SVG dims
const VB_W = 700, VB_H = 240;
const LEFT = 50, RIGHT = 660, TOP = 50, BOTTOM = 190;
const ZONE_W = RIGHT - LEFT;

// Waveform paths
const PRIMARY_WAVE = 'M 50 155 C 95 85, 135 175, 175 125 C 215 75, 255 160, 295 115 C 335 70, 375 155, 415 105 C 455 65, 495 150, 535 100 C 575 70, 615 130, 660 115';
const RECOVERY_WAVE = 'M 50 170 C 100 150, 140 175, 190 160 C 240 145, 280 172, 340 155 C 400 138, 440 168, 500 148 C 560 132, 610 155, 660 145';

export const MentorshipDialogueGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(2);
  const prefersReduced = usePrefersReducedMotion();
  const uid = useId().replace(/:/g, '');

  return (
    <div className={`w-full rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#141120]/95 border border-[#E2D9F3] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 space-y-6 ${className}`}>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE7EF] dark:border-[#242036]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
            Pillar 04 • AI Mentorship Architecture
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#110E1B] dark:text-white">
            Longitudinal Cognitive Pacing &amp; Fatigue Invariant
          </h3>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
          <Heart className="w-3 h-3" />
          Burnout Shield Active
        </span>
      </div>

      {/* SVG Cognitive Pacing Waveform */}
      <div className="relative overflow-x-auto py-2">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="w-full min-w-[520px] h-auto overflow-visible"
          aria-label="Cognitive Pacing and Fatigue Prevention Waveform"
        >
          <defs>
            {/* Sustainable zone gradient */}
            <linearGradient id={`zone-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#7550C8" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0.01" />
            </linearGradient>

            {/* Burnout danger gradient */}
            <linearGradient id={`danger-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.04" />
            </linearGradient>

            {/* Checkpoint bloom */}
            <filter id={`cp-bloom-${uid}`} x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Wave glow */}
            <filter id={`wave-glow-${uid}`} x="-5%" y="-20%" width="110%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#7550C8" floodOpacity="0.2" />
            </filter>

            {/* Primary wave gradient stroke */}
            <linearGradient id={`wave-stroke-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7550C8" />
              <stop offset="40%" stopColor="#8E5CFF" />
              <stop offset="70%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Background: faint vertical grid */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`vg-${i}`} x1={LEFT + (i + 1) * (ZONE_W / 10)} y1="30" x2={LEFT + (i + 1) * (ZONE_W / 10)} y2="210" stroke="#E2D9F3" strokeWidth="0.4" strokeDasharray="2 8" className="dark:stroke-[#262238]" opacity="0.4" />
          ))}

          {/* Phase zone bands */}
          {PHASES.map((p) => {
            const x = LEFT + p.xStart * ZONE_W;
            const w = (p.xEnd - p.xStart) * ZONE_W;
            const isActive = p.num === selectedPhase;
            return (
              <motion.rect
                key={`zone-${p.num}`}
                x={x}
                y={TOP - 8}
                width={w}
                height={BOTTOM - TOP + 24}
                rx="4"
                fill={p.color}
                animate={{ fillOpacity: isActive ? 0.07 : 0.02 }}
                transition={{ duration: 0.4 }}
              />
            );
          })}

          {/* Burnout Danger Zone — top band */}
          <rect x={LEFT} y={TOP - 10} width={ZONE_W} height="22" fill={`url(#danger-grad-${uid})`} rx="3" />
          {!prefersReduced && (
            <rect x={LEFT} y={TOP - 10} width={ZONE_W} height="22" fill="none" stroke="#EF4444" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" rx="3">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
            </rect>
          )}

          {/* Burnout threshold line */}
          <line x1={LEFT} y1={TOP} x2={RIGHT} y2={TOP} stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
          <text x={RIGHT} y={TOP - 14} textAnchor="end" className="font-mono text-[8px] fill-[#EF4444] font-semibold">
            BURNOUT THRESHOLD (Fatigue &gt; 85%)
          </text>

          {/* Sustainable Cognitive Zone fill */}
          <rect x={LEFT} y={TOP} width={ZONE_W} height={BOTTOM - TOP} fill={`url(#zone-grad-${uid})`} />

          {/* Calm Baseline */}
          <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#7550C8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
          <text x={RIGHT} y={BOTTOM + 14} textAnchor="end" className="font-mono text-[8px] fill-[#7550C8] dark:fill-[#B99CFF]">
            INTELLECTUAL CALM BASELINE
          </text>

          {/* Recovery wave (thin, green) */}
          <path
            d={RECOVERY_WAVE}
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
            strokeDasharray="4 3"
          />

          {/* Primary Cognitive Intensity Wave */}
          <path
            d={PRIMARY_WAVE}
            fill="none"
            stroke={`url(#wave-stroke-${uid})`}
            strokeWidth="3"
            strokeLinecap="round"
            filter={`url(#wave-glow-${uid})`}
          />

          {/* Flowing particle along primary wave */}
          {!prefersReduced && (
            <g>
              <circle r="4" fill="#7550C8" opacity="0.7">
                <animateMotion dur="6s" repeatCount="indefinite" path={PRIMARY_WAVE} />
              </circle>
              <circle r="2" fill="white" opacity="0.9">
                <animateMotion dur="6s" repeatCount="indefinite" path={PRIMARY_WAVE} />
              </circle>
            </g>
          )}

          {/* Spaced Retrieval Checkpoints */}
          {CHECKPOINTS.map((pt, i) => {
            const isActive = pt.phase === selectedPhase;
            // Interpolate Y from the wave path — approximate based on visible positions
            const yVals = [110, 105, 100, 112];
            const cy = yVals[i];
            return (
              <g key={`cp-${i}`}>
                {/* Sonar pulse rings */}
                {!prefersReduced && isActive && [0, 1].map((ri) => (
                  <circle key={`sonar-${ri}`} cx={pt.cx} cy={cy} r="8" fill="none" stroke={PHASES[i]?.color || '#7550C8'} strokeWidth="0.8" opacity="0">
                    <animate attributeName="r" values="8;22" dur={`${2 + ri * 0.6}s`} repeatCount="indefinite" begin={`${ri * 0.5}s`} />
                    <animate attributeName="opacity" values="0.35;0" dur={`${2 + ri * 0.6}s`} repeatCount="indefinite" begin={`${ri * 0.5}s`} />
                  </circle>
                ))}

                {/* Vertical connector to label */}
                <line x1={pt.cx} y1={cy - 14} x2={pt.cx} y2={cy - 30} stroke={isActive ? (PHASES[i]?.color || '#7550C8') : '#C8C0DA'} strokeWidth="1" strokeDasharray="2 2" opacity={isActive ? 0.7 : 0.3} />

                {/* Diamond checkpoint marker */}
                <g filter={isActive ? `url(#cp-bloom-${uid})` : undefined}>
                  <motion.polygon
                    points={`${pt.cx},${cy - 7} ${pt.cx + 6},${cy} ${pt.cx},${cy + 7} ${pt.cx - 6},${cy}`}
                    fill={isActive ? (PHASES[i]?.color || '#7550C8') : '#E2D9F3'}
                    className={isActive ? '' : 'dark:fill-[#2E2746]'}
                    stroke={isActive ? 'white' : '#C8C0DA'}
                    strokeWidth="1.5"
                    animate={!prefersReduced && isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={!prefersReduced && isActive ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
                    style={{ transformOrigin: `${pt.cx}px ${cy}px` }}
                  />
                  {/* Inner dot */}
                  <circle cx={pt.cx} cy={cy} r="2" fill={isActive ? 'white' : '#7550C8'} opacity={isActive ? 0.9 : 0.4} />
                </g>

                {/* Label capsule */}
                <g opacity={isActive ? 1 : 0.55}>
                  <rect x={pt.cx - 40} y={cy - 48} width="80" height="18" rx="9" fill={isActive ? (PHASES[i]?.color || '#7550C8') : '#F5F2FA'} className={isActive ? '' : 'dark:fill-[#1E192D]'} opacity={isActive ? 0.12 : 1} stroke={isActive ? (PHASES[i]?.color || '#7550C8') : '#E2D9F3'} strokeWidth="0.8" />
                  <text x={pt.cx} y={cy - 35} textAnchor="middle" className={`font-mono text-[8px] font-bold ${isActive ? 'fill-[#110E1B] dark:fill-white' : 'fill-[#555060] dark:fill-[#9A95A8]'}`}>
                    {pt.label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive 4-Phase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {PHASES.map((p) => {
          const isSelected = p.num === selectedPhase;
          return (
            <div
              key={p.num}
              onClick={() => setSelectedPhase(p.num)}
              className={`p-3.5 rounded-2xl border transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-white dark:bg-[#1A162B] border-[#7550C8] shadow-soft-xs ring-1 ring-[#7550C8]/25'
                  : 'bg-[#FAF8FE] dark:bg-[#110F1C] border-[#E2D9F3] dark:border-[#221D32]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#7550C8] dark:text-[#B99CFF]">
                  Phase 0{p.num}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold">
                  {p.status}
                </span>
              </div>
              <div className="text-xs font-bold text-[#110E1B] dark:text-white">
                {p.title}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
