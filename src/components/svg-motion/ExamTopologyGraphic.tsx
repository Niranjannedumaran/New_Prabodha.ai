import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, CheckCircle2, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type ExamTrack = 'upsc' | 'rbi' | 'gate' | 'cat';

interface TrackData {
  name: string;
  examCode: string;
  rootAxiom: string;
  paper: string;
  pyqCoverage: string;
  yieldScore: string;
  nodes: Array<{
    id: string;
    label: string;
    type: 'root' | 'cluster' | 'invariant';
    x: number;
    y: number;
  }>;
  connections: Array<{ from: number; to: number }>;
}

const TOPOLOGY_DATA: Record<ExamTrack, TrackData> = {
  upsc: {
    name: 'UPSC Civil Services',
    examCode: 'CSE GS-2 & GS-3',
    rootAxiom: 'Constitutional Basic Structure & Fiscal Multipliers',
    paper: 'General Studies Papers 2, 3 & 4',
    pyqCoverage: '15 Years (2010–2025) Verified',
    yieldScore: '98% Topic Yield',
    nodes: [
      { id: 'u1', label: 'Part III Fundamental Rights', type: 'root', x: 100, y: 150 },
      { id: 'u2', label: 'Judicial Review (Art 13/32)', type: 'cluster', x: 280, y: 80 },
      { id: 'u3', label: 'Constituent vs Legislative Power', type: 'cluster', x: 280, y: 220 },
      { id: 'u4', label: 'Kesavananda Invariant Axiom', type: 'invariant', x: 500, y: 150 },
    ],
    connections: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
    ],
  },
  rbi: {
    name: 'RBI Grade B',
    examCode: 'Phase 2 DEPR / Finance',
    rootAxiom: 'Monetary Transmission & Yield Curve Dynamics',
    paper: 'Economic & Social Issues + Financial Management',
    pyqCoverage: '12 Years Official Regulatory Exams',
    yieldScore: '94% Structural Yield',
    nodes: [
      { id: 'r1', label: 'Repo Rate Shift & Liquidity', type: 'root', x: 100, y: 150 },
      { id: 'r2', label: 'Term Premia & Yield Spread', type: 'cluster', x: 280, y: 80 },
      { id: 'r3', label: 'Commercial Bank Capex Multipliers', type: 'cluster', x: 280, y: 220 },
      { id: 'r4', label: 'IS-LM-BP Open Economy Invariant', type: 'invariant', x: 500, y: 150 },
    ],
    connections: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
    ],
  },
  gate: {
    name: 'GATE CS & IT',
    examCode: 'Theoretical CS & Algo',
    rootAxiom: 'Turing Decidability & Asymptotic Recurrence',
    paper: 'Algorithms, TOC & Operating Systems',
    pyqCoverage: '18 Years (2007–2025) Standard Set',
    yieldScore: '99% Analytical Proof',
    nodes: [
      { id: 'g1', label: 'Formal Grammar Hierarchy', type: 'root', x: 100, y: 150 },
      { id: 'g2', label: 'Diagonalization Contradiction', type: 'cluster', x: 280, y: 80 },
      { id: 'g3', label: 'Rice Theorem Reduction', type: 'cluster', x: 280, y: 220 },
      { id: 'g4', label: 'Halting Problem Invariant Limit', type: 'invariant', x: 500, y: 150 },
    ],
    connections: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
    ],
  },
  cat: {
    name: 'CAT Analytics',
    examCode: 'QA & DILR Master',
    rootAxiom: 'Combinatorial Symmetry & Positional Permutations',
    paper: 'Quantitative Aptitude & High-Dim DILR',
    pyqCoverage: '16 Years IIM Slot Invariants',
    yieldScore: '96% Pattern Generalization',
    nodes: [
      { id: 'c1', label: 'Unordered Object Sets', type: 'root', x: 100, y: 150 },
      { id: 'c2', label: 'Circular & Positional Symmetries', type: 'cluster', x: 280, y: 80 },
      { id: 'c3', label: 'Double Counting Elimination', type: 'cluster', x: 280, y: 220 },
      { id: 'c4', label: 'Burnside / Polya Counting Invariant', type: 'invariant', x: 500, y: 150 },
    ],
    connections: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
    ],
  },
};

export const ExamTopologyGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeTrack, setActiveTrack] = useState<ExamTrack>('upsc');
  const prefersReduced = usePrefersReducedMotion();

  const current = TOPOLOGY_DATA[activeTrack];

  return (
    <div className={`w-full rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#141120]/95 border border-[#E2D9F3] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 space-y-6 ${className}`}>
      
      {/* Track Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE7EF] dark:border-[#242036]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
            Pillar 01 • Competitive Exam Intelligence
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#110E1B] dark:text-white">
            15-Year Syllabus Invariant Topology
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#F5F2FA] dark:bg-[#1A162B] border border-[#E2D9F3] dark:border-[#2A233E]">
          {(['upsc', 'rbi', 'gate', 'cat'] as ExamTrack[]).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTrack(t)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTrack === t
                  ? 'bg-[#7550C8] text-white shadow-soft-xs'
                  : 'text-[#555060] dark:text-[#9A95A8] hover:text-[#110E1B] dark:hover:text-white'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Topology Viewport */}
      <div className="relative overflow-x-auto py-2">
        <AnimatePresence mode="wait">
          <motion.svg
            key={activeTrack}
            viewBox="0 0 620 300"
            className="w-full min-w-[500px] h-auto overflow-visible"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            aria-label={`${current.name} Topology Graph`}
          >
            {/* Draw Connecting Splines */}
            {current.connections.map((c, i) => {
              const start = current.nodes[c.from];
              const end = current.nodes[c.to];
              return (
                <path
                  key={`conn-${i}`}
                  d={`M ${start.x} ${start.y} C ${(start.x + end.x) / 2} ${start.y}, ${(start.x + end.x) / 2} ${end.y}, ${end.x} ${end.y}`}
                  fill="none"
                  stroke="#7550C8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-60"
                />
              );
            })}

            {/* Nodes */}
            {current.nodes.map((n) => {
              const isRoot = n.type === 'root';
              const isInv = n.type === 'invariant';

              return (
                <g key={n.id} className="cursor-default">
                  {/* Outer circle */}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isInv ? 22 : isRoot ? 20 : 16}
                    fill={isInv ? '#7550C8' : isRoot ? '#8E5CFF' : '#FFFFFF'}
                    className={isInv || isRoot ? '' : 'dark:fill-[#1E192D]'}
                    stroke={isInv ? '#51349A' : '#7550C8'}
                    strokeWidth="2.5"
                    style={{
                      filter: isInv ? 'drop-shadow(0 4px 14px rgba(117, 80, 200, 0.4))' : undefined,
                    }}
                  />

                  {/* Inner indicator */}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isInv ? 6 : 4}
                    fill={isInv || isRoot ? '#FFFFFF' : '#7550C8'}
                  />

                  {/* Label */}
                  <text
                    x={n.x}
                    y={n.y + (n.y < 150 ? -24 : 32)}
                    textAnchor="middle"
                    className="font-sans font-bold text-[11px] fill-[#110E1B] dark:fill-white"
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </motion.svg>
        </AnimatePresence>
      </div>

      {/* Footer Metrics */}
      <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242036] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] font-bold text-[#7550C8] dark:text-[#B99CFF]">
            {current.pyqCoverage}
          </span>
          <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
            {current.yieldScore}
          </span>
        </div>

        <span className="text-[11px] text-[#555060] dark:text-[#9A95A8]">
          Derived from official gazette notifications & past papers
        </span>
      </div>

    </div>
  );
};
