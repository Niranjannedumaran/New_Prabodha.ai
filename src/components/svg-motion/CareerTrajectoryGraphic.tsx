import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface CareerPath {
  id: string;
  domain: string;
  tabLabel: string;
  foundationalSkills: string[];
  strategicRoles: string[];
  marketDemand: string;
  growthMultiple: string;
  growthPercent: number; // 0-1 for animated bar
}

const CAREER_PATHS: CareerPath[] = [
  {
    id: 'policy',
    domain: 'Public Policy & Regulatory Governance',
    tabLabel: 'Public',
    foundationalSkills: ['Constitutional Law', 'Macroeconomic Multipliers', 'Administrative Ethics'],
    strategicRoles: ['Central Banking Policy Analyst', 'NITI Aayog Fellow', 'Regulatory Affairs Strategist'],
    marketDemand: 'High Demand in Public-Private Infrastructure',
    growthMultiple: '3.4x Trajectory Growth',
    growthPercent: 0.62,
  },
  {
    id: 'quant',
    domain: 'Quantitative Systems & Decision Science',
    tabLabel: 'Quant',
    foundationalSkills: ['Combinatorial Optimization', 'Bayesian Probability', 'Calculus Invariants'],
    strategicRoles: ['Quantitative Researcher', 'Risk Optimization Lead', 'Algorithmic Systems Engineer'],
    marketDemand: 'Global FinTech & Institutional Asset Management',
    growthMultiple: '4.8x Trajectory Growth',
    growthPercent: 0.82,
  },
  {
    id: 'tech',
    domain: 'Distributed Computing & AI Engineering',
    tabLabel: 'Tech',
    foundationalSkills: ['Automata Theory', 'Asymptotic Complexity', 'OS Concurrency'],
    strategicRoles: ['Core Infrastructure Architect', 'Distributed Consensus Engineer', 'AI Research Scientist'],
    marketDemand: 'Hyper-Scale Cloud & AI Frontier Labs',
    growthMultiple: '5.2x Trajectory Growth',
    growthPercent: 0.92,
  },
];

/* ------------------------------------------------------------------ */
/*  Layout constants                                                    */
/* ------------------------------------------------------------------ */
const VB_W = 720, VB_H = 260;
const LEFT_X = 95;   // center of skill capsules
const MID_X = 360;   // center of nexus
const RIGHT_X = 625; // center of role cards
const MID_Y = 130;   // vertical center
const SKILL_SPREAD = 70; // vertical spacing between skills
const ROLE_SPREAD = 70;

export const CareerTrajectoryGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedPathId, setSelectedPathId] = useState<string>('quant');
  const prefersReduced = usePrefersReducedMotion();
  const uid = useId().replace(/:/g, '');

  const selectedPath = CAREER_PATHS.find((p) => p.id === selectedPathId) || CAREER_PATHS[1];

  const skillYPositions = selectedPath.foundationalSkills.map((_, i) => MID_Y - SKILL_SPREAD + i * SKILL_SPREAD);
  const roleYPositions = selectedPath.strategicRoles.map((_, i) => MID_Y - ROLE_SPREAD + i * ROLE_SPREAD);

  // Bézier conduit from a skill node to center nexus
  function leftConduit(sy: number) {
    const cp1x = LEFT_X + 80, cp2x = MID_X - 90;
    return `M ${LEFT_X + 60} ${sy} C ${cp1x} ${sy}, ${cp2x} ${MID_Y}, ${MID_X - 30} ${MID_Y}`;
  }
  // Bézier conduit from center nexus to a role card
  function rightConduit(ry: number) {
    const cp1x = MID_X + 90, cp2x = RIGHT_X - 80;
    return `M ${MID_X + 30} ${MID_Y} C ${cp1x} ${MID_Y}, ${cp2x} ${ry}, ${RIGHT_X - 60} ${ry}`;
  }

  const nodeEnter = {
    hidden: { opacity: 0, scale: 0.85 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: prefersReduced ? 0 : 0.08 + i * 0.1,
        duration: MOTION_TOKENS.duration.medium,
        ease: MOTION_TOKENS.ease.appleStandard as unknown as number[],
      },
    }),
  };

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
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-colors ${
                selectedPathId === p.id
                  ? 'bg-[#7550C8] text-white shadow-soft-xs'
                  : 'text-[#555060] dark:text-[#9A95A8] hover:text-[#110E1B] dark:hover:text-white'
              }`}
            >
              {p.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic SVG Flow */}
      <div className="relative overflow-x-auto py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPathId}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: MOTION_TOKENS.ease.appleStandard as unknown as number[] }}
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="w-full min-w-[520px] h-auto overflow-visible"
              aria-label="Career Competency Lattice Graph"
            >
              <defs>
                {/* Central nexus glow */}
                <filter id={`nexus-bloom-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Nexus radial gradient */}
                <radialGradient id={`nexus-grad-${uid}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.85" />
                  <stop offset="55%" stopColor="#7550C8" />
                  <stop offset="100%" stopColor="#5B3BA0" />
                </radialGradient>

                {/* Left conduit gradient (purple) */}
                <linearGradient id={`left-cond-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7550C8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7550C8" stopOpacity="0.8" />
                </linearGradient>

                {/* Right conduit gradient (emerald) */}
                <linearGradient id={`right-cond-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>

                {/* Card shadow */}
                <filter id={`card-sh-${uid}`} x="-8%" y="-8%" width="116%" height="128%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7550C8" floodOpacity="0.1" />
                </filter>

                {/* Background radial */}
                <radialGradient id={`bg-rad-${uid}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7550C8" stopOpacity="0.035" />
                  <stop offset="100%" stopColor="#7550C8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background wash */}
              <ellipse cx={MID_X} cy={MID_Y} rx="320" ry="120" fill={`url(#bg-rad-${uid})`} />

              {/* Faint grid */}
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`vg-${i}`} x1={72 * (i + 1)} y1="10" x2={72 * (i + 1)} y2={VB_H - 10} stroke="#E2D9F3" strokeWidth="0.4" strokeDasharray="2 8" className="dark:stroke-[#262238]" opacity="0.4" />
              ))}

              {/* Sonar rings from nexus */}
              {!prefersReduced && [38, 52, 68].map((r, i) => (
                <circle key={`sonar-${i}`} cx={MID_X} cy={MID_Y} r={r} fill="none" stroke="#A855F7" strokeWidth="0.6" opacity="0">
                  <animate attributeName="r" values={`${r};${r + 22}`} dur={`${3 + i * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.9}s`} />
                  <animate attributeName="opacity" values="0.2;0" dur={`${3 + i * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.9}s`} />
                </circle>
              ))}

              {/* Left conduits: skills → nexus */}
              {skillYPositions.map((sy, i) => {
                const path = leftConduit(sy);
                return (
                  <g key={`lc-${i}`}>
                    <motion.path
                      d={path}
                      fill="none"
                      stroke={`url(#left-cond-${uid})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={prefersReduced ? {} : { strokeDasharray: '300', strokeDashoffset: 300 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: MOTION_TOKENS.ease.appleDecel as unknown as number[] }}
                    />
                    {!prefersReduced && (
                      <circle r="2.5" fill="#7550C8" opacity="0.7">
                        <animateMotion dur={`${3.5 + i * 0.6}s`} repeatCount="indefinite" path={path} />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Right conduits: nexus → roles */}
              {roleYPositions.map((ry, i) => {
                const path = rightConduit(ry);
                return (
                  <g key={`rc-${i}`}>
                    <motion.path
                      d={path}
                      fill="none"
                      stroke={`url(#right-cond-${uid})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={prefersReduced ? {} : { strokeDasharray: '300', strokeDashoffset: 300 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: MOTION_TOKENS.ease.appleDecel as unknown as number[] }}
                    />
                    {!prefersReduced && (
                      <circle r="2.5" fill="#10B981" opacity="0.7">
                        <animateMotion dur={`${3.5 + i * 0.6}s`} repeatCount="indefinite" path={path} />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Left Column: Skill Foundation Capsules */}
              {selectedPath.foundationalSkills.map((skill, i) => {
                const sy = skillYPositions[i];
                const cW = 120, cH = 38;
                return (
                  <motion.g key={`skill-${i}`} custom={i} variants={nodeEnter} initial="hidden" animate="show" filter={`url(#card-sh-${uid})`}>
                    {/* Capsule bg */}
                    <rect x={LEFT_X - cW / 2} y={sy - cH / 2} width={cW} height={cH} rx="12"
                      className="fill-white dark:fill-[#1B172C] stroke-[#E2D9F3] dark:stroke-[#2E2746]" strokeWidth="1.2" />
                    {/* Ambient ring */}
                    {!prefersReduced && (
                      <rect x={LEFT_X - cW / 2 - 3} y={sy - cH / 2 - 3} width={cW + 6} height={cH + 6} rx="14" fill="none" stroke="#7550C8" strokeWidth="0.5" opacity="0">
                        <animate attributeName="opacity" values="0;0.25;0" dur="3s" repeatCount="indefinite" begin={`${i * 0.8}s`} />
                      </rect>
                    )}
                    <text x={LEFT_X} y={sy - 4} textAnchor="middle" className="font-mono text-[7px] fill-[#7550C8] dark:fill-[#B99CFF] font-bold uppercase tracking-wider">
                      SKILL 0{i + 1}
                    </text>
                    <text x={LEFT_X} y={sy + 9} textAnchor="middle" className="font-sans text-[9px] fill-[#110E1B] dark:fill-white font-bold">
                      {skill}
                    </text>
                  </motion.g>
                );
              })}

              {/* Central Intelligence Nexus */}
              <g filter={`url(#nexus-bloom-${uid})`}>
                <motion.circle
                  cx={MID_X} cy={MID_Y} r="30"
                  fill={`url(#nexus-grad-${uid})`}
                  stroke="#A855F7"
                  strokeWidth="1.5"
                  animate={prefersReduced ? {} : { scale: [1, 1.05, 1] }}
                  transition={prefersReduced ? {} : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: `${MID_X}px ${MID_Y}px` }}
                />
                {/* Inner crystalline diamond */}
                <polygon
                  points={`${MID_X},${MID_Y - 14} ${MID_X + 10},${MID_Y} ${MID_X},${MID_Y + 14} ${MID_X - 10},${MID_Y}`}
                  fill="white" opacity="0.15"
                />
                <text x={MID_X} y={MID_Y - 4} textAnchor="middle" className="font-mono font-bold text-[8px] fill-white uppercase tracking-wider">
                  PRABODHA
                </text>
                <text x={MID_X} y={MID_Y + 8} textAnchor="middle" className="font-sans text-[7px] fill-white/80">
                  Skill Telemetry
                </text>
              </g>

              {/* Right Column: Career Role Destinations */}
              {selectedPath.strategicRoles.map((role, i) => {
                const ry = roleYPositions[i];
                const cW = 140, cH = 42;
                return (
                  <motion.g key={`role-${i}`} custom={i} variants={nodeEnter} initial="hidden" animate="show" filter={`url(#card-sh-${uid})`}>
                    <rect x={RIGHT_X - cW / 2} y={ry - cH / 2} width={cW} height={cH} rx="13"
                      className="fill-white dark:fill-[#1B172C] stroke-[#A7F3D0] dark:stroke-[#10B981]/40" strokeWidth="1.2" />
                    <text x={RIGHT_X} y={ry - 5} textAnchor="middle" className="font-sans font-bold text-[9px] fill-[#110E1B] dark:fill-white">
                      {role}
                    </text>
                    <text x={RIGHT_X} y={ry + 10} textAnchor="middle" className="font-mono text-[7px] fill-emerald-600 dark:fill-emerald-400 font-semibold">
                      Top 1% Percentile
                    </text>
                  </motion.g>
                );
              })}

              {/* Growth arc indicator at top */}
              <motion.g initial={prefersReduced ? {} : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <line x1={LEFT_X + 70} y1="18" x2={RIGHT_X - 70} y2="18" stroke="#E2D9F3" strokeWidth="3" strokeLinecap="round" className="dark:stroke-[#262238]" />
                <motion.line
                  x1={LEFT_X + 70} y1="18" x2={LEFT_X + 70} y2="18"
                  stroke="#10B981" strokeWidth="3" strokeLinecap="round"
                  animate={{ x2: LEFT_X + 70 + (RIGHT_X - LEFT_X - 140) * selectedPath.growthPercent }}
                  transition={{ delay: 0.6, duration: 0.8, ease: MOTION_TOKENS.ease.appleDecel as unknown as number[] }}
                />
                <text x={MID_X} y="12" textAnchor="middle" className="font-mono text-[8px] fill-emerald-600 dark:fill-emerald-400 font-bold">
                  {selectedPath.growthMultiple}
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </AnimatePresence>
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
