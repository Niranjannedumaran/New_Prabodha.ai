import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface CareerPath {
  id: string;
  domain: string;
  foundationalSkills: string[];
  strategicRoles: string[];
  marketDemand: string;
  growthMultiple: string;
}

const CAREER_PATHS: CareerPath[] = [
  {
    id: 'policy',
    domain: 'Public Policy & Regulatory Governance',
    foundationalSkills: ['Constitutional Law', 'Macroeconomic Multipliers', 'Administrative Ethics'],
    strategicRoles: ['Central Banking Policy Analyst', 'NITI Aayog Fellow', 'Regulatory Affairs Strategist'],
    marketDemand: 'High Demand in Public-Private Infrastructure',
    growthMultiple: '3.4x Trajectory Growth',
  },
  {
    id: 'quant',
    domain: 'Quantitative Systems & Decision Science',
    foundationalSkills: ['Combinatorial Optimization', 'Bayesian Probability', 'Calculus Invariants'],
    strategicRoles: ['Quantitative Researcher', 'Risk Optimization Lead', 'Algorithmic Systems Engineer'],
    marketDemand: 'Global FinTech & Institutional Asset Management',
    growthMultiple: '4.8x Trajectory Growth',
  },
  {
    id: 'tech',
    domain: 'Distributed Computing & AI Engineering',
    foundationalSkills: ['Automata Theory', 'Asymptotic Complexity', 'Operating System Concurrency'],
    strategicRoles: ['Core Infrastructure Architect', 'Distributed Consensus Engineer', 'AI Research Scientist'],
    marketDemand: 'Hyper-Scale Cloud & AI Frontier Labs',
    growthMultiple: '5.2x Trajectory Growth',
  },
];

export const CareerTrajectoryGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedPathId, setSelectedPathId] = useState<string>('quant');
  const prefersReduced = usePrefersReducedMotion();

  const selectedPath = CAREER_PATHS.find((p) => p.id === selectedPathId) || CAREER_PATHS[1];

  return (
    <div className={`w-full rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#141120]/95 border border-[#E2D9F3] dark:border-[#282238] shadow-[0_8px_30px_rgba(117,80,200,0.06)] p-6 sm:p-8 space-y-6 ${className}`}>
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE7EF] dark:border-[#242036]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
            Pillar 03 • Career Intelligence Architecture
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#110E1B] dark:text-white">
            Competency Lattice to Market Placement
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#F5F2FA] dark:bg-[#1A162B] border border-[#E2D9F3] dark:border-[#2A233E]">
          {CAREER_PATHS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPathId(p.id)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedPathId === p.id
                  ? 'bg-[#7550C8] text-white shadow-soft-xs'
                  : 'text-[#555060] dark:text-[#9A95A8] hover:text-[#110E1B] dark:hover:text-white'
              }`}
            >
              {p.domain.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic SVG Flow: Foundations -> Lattice -> Roles */}
      <div className="relative overflow-x-auto py-2">
        <svg
          viewBox="0 0 700 240"
          className="w-full min-w-[550px] h-auto overflow-visible"
          aria-label="Career Competency Lattice Graph"
        >
          {/* Connecting flowing splines */}
          <path
            d="M 120 70 C 260 70, 260 120, 400 120"
            fill="none"
            stroke="#7550C8"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-60"
          />
          <path
            d="M 120 170 C 260 170, 260 120, 400 120"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-60"
          />
          <path
            d="M 400 120 C 520 120, 520 60, 620 60"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 400 120 C 520 120, 520 180, 620 180"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />

          {/* Left Column: Academic Foundations */}
          <g>
            <rect
              x="20"
              y="40"
              width="180"
              height="60"
              rx="16"
              className="fill-white dark:fill-[#1B172C] stroke-[#E2D9F3] dark:stroke-[#2E2746]"
              strokeWidth="1.5"
            />
            <text x="110" y="66" textAnchor="middle" className="font-sans font-bold text-[11px] fill-[#110E1B] dark:fill-white">
              Socratic Academic Mastery
            </text>
            <text x="110" y="82" textAnchor="middle" className="font-mono text-[9px] fill-[#7550C8] dark:fill-[#B99CFF]">
              Part III Rights / Decidability
            </text>

            <rect
              x="20"
              y="140"
              width="180"
              height="60"
              rx="16"
              className="fill-white dark:fill-[#1B172C] stroke-[#E2D9F3] dark:stroke-[#2E2746]"
              strokeWidth="1.5"
            />
            <text x="110" y="166" textAnchor="middle" className="font-sans font-bold text-[11px] fill-[#110E1B] dark:fill-white">
              Mathematical Invariants
            </text>
            <text x="110" y="182" textAnchor="middle" className="font-mono text-[9px] fill-[#06B6D4]">
              Combinatorics & Statistics
            </text>
          </g>

          {/* Center Column: Intelligence Lattice */}
          <g>
            <circle
              cx="400"
              cy="120"
              r="34"
              className="fill-[#7550C8] stroke-white dark:stroke-[#141120]"
              strokeWidth="4"
              style={{ filter: 'drop-shadow(0 4px 16px rgba(117, 80, 200, 0.4))' }}
            />
            <text x="400" y="117" textAnchor="middle" className="font-mono font-bold text-[10px] fill-white uppercase tracking-wider">
              PRABODHA
            </text>
            <text x="400" y="130" textAnchor="middle" className="font-sans text-[8px] fill-white/80">
              Skill Telemetry
            </text>
          </g>

          {/* Right Column: Strategic Career Roles */}
          <g>
            <rect
              x="520"
              y="30"
              width="170"
              height="60"
              rx="16"
              className="fill-white dark:fill-[#1B172C] stroke-[#A7F3D0] dark:stroke-[#10B981]/40"
              strokeWidth="1.5"
            />
            <text x="605" y="56" textAnchor="middle" className="font-sans font-bold text-[11px] fill-[#110E1B] dark:fill-white">
              {selectedPath.strategicRoles[0]}
            </text>
            <text x="605" y="72" textAnchor="middle" className="font-mono text-[9px] fill-emerald-600 dark:text-emerald-400 font-semibold">
              Top 1% Percentile
            </text>

            <rect
              x="520"
              y="150"
              width="170"
              height="60"
              rx="16"
              className="fill-white dark:fill-[#1B172C] stroke-[#A7F3D0] dark:stroke-[#10B981]/40"
              strokeWidth="1.5"
            />
            <text x="605" y="176" textAnchor="middle" className="font-sans font-bold text-[11px] fill-[#110E1B] dark:fill-white">
              {selectedPath.strategicRoles[1]}
            </text>
            <text x="605" y="192" textAnchor="middle" className="font-mono text-[9px] fill-emerald-600 dark:text-emerald-400 font-semibold">
              Verified Competency
            </text>
          </g>
        </svg>
      </div>

      {/* Breakdown bar */}
      <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242036] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-[11px] font-bold text-[#110E1B] dark:text-white">
            {selectedPath.marketDemand}
          </span>
        </div>

        <span className="font-mono text-[11px] font-bold text-[#7550C8] dark:text-[#B99CFF]">
          {selectedPath.growthMultiple}
        </span>
      </div>

    </div>
  );
};
