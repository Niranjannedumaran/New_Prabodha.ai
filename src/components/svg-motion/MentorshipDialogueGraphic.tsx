import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export const MentorshipDialogueGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(2);
  const prefersReduced = usePrefersReducedMotion();

  const phases = [
    { num: 1, title: 'Month 0-3: Baseline & Misconceptions', status: 'Calibrated', color: '#7550C8' },
    { num: 2, title: 'Month 4-12: Core Invariant Deep-Work', status: 'Optimal Zone', color: '#8E5CFF' },
    { num: 3, title: 'Month 13-18: Exam Synthesis & PYQ Simulation', status: 'Peak Calm', color: '#10B981' },
    { num: 4, title: 'Month 18+: Institutional Placement & Interview', status: 'Mastered', color: '#06B6D4' },
  ];

  return (
    <div className={`w-full rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#141120]/95 border border-[#E2D9F3] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 space-y-6 ${className}`}>
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE7EF] dark:border-[#242036]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
            Pillar 04 • AI Mentorship Architecture
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#110E1B] dark:text-white">
            Longitudinal Cognitive Pacing & Fatigue Invariant
          </h3>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
          <Heart className="w-3 h-3" />
          Burnout Shield Active
        </span>
      </div>

      {/* SVG Sinusoidal Pacing Waveform */}
      <div className="relative overflow-x-auto py-2">
        <svg
          viewBox="0 0 700 240"
          className="w-full min-w-[550px] h-auto overflow-visible"
          aria-label="Cognitive Pacing and Fatigue Prevention Waveform"
        >
          <defs>
            <linearGradient id="pacing-zone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Burnout Danger Threshold line */}
          <line x1="40" y1="50" x2="660" y2="50" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
          <text x="660" y="44" textAnchor="end" className="font-mono text-[9px] fill-[#EF4444] font-semibold">
            BURNOUT THRESHOLD (Fatigue &gt; 85%)
          </text>

          {/* Sustainable Cognitive Zone fill */}
          <rect x="40" y="50" width="620" height="130" fill="url(#pacing-zone)" />

          {/* Calm Baseline Threshold line */}
          <line x1="40" y1="180" x2="660" y2="180" stroke="#7550C8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
          <text x="660" y="196" textAnchor="end" className="font-mono text-[9px] fill-[#7550C8] dark:fill-[#B99CFF]">
            INTELLECTUAL CALM BASELINE (Rest & Consolidation)
          </text>

          {/* Smooth Pacing Sinus Curve */}
          <path
            d="M 50 150 C 120 70, 160 170, 220 120 C 280 70, 320 160, 380 110 C 440 60, 480 170, 540 100 C 600 70, 630 130, 660 120"
            fill="none"
            stroke="#7550C8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Spaced Retrieval Review Points */}
          {[
            { cx: 140, cy: 110, label: 'Spaced Audit 1' },
            { cx: 300, cy: 105, label: 'Spaced Audit 2' },
            { cx: 460, cy: 100, label: 'Full Mock Test' },
            { cx: 620, cy: 95, label: 'Final Consolidation' },
          ].map((pt, i) => (
            <g key={i}>
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="6"
                className="fill-white dark:fill-[#141120] stroke-[#10B981]"
                strokeWidth="2.5"
              />
              <circle cx={pt.cx} cy={pt.cy} r="2.5" fill="#10B981" />
              <text x={pt.cx} y={pt.cy - 12} textAnchor="middle" className="font-mono text-[9px] fill-[#110E1B] dark:fill-white font-bold">
                {pt.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Interactive 4-Phase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {phases.map((p) => {
          const isSelected = p.num === selectedPhase;
          return (
            <div
              key={p.num}
              onClick={() => setSelectedPhase(p.num)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
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
