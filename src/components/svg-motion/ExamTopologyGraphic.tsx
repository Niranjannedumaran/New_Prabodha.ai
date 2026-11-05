import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  coreLabel: string;
  nodes: Array<{
    id: string;
    label: string;
    subLabel: string;
    angle: number; // radians from center for positioning
  }>;
}

const TOPOLOGY_DATA: Record<ExamTrack, TrackData> = {
  upsc: {
    name: 'UPSC Civil Services',
    examCode: 'CSE GS-2 & GS-3',
    rootAxiom: 'Constitutional Basic Structure & Fiscal Multipliers',
    paper: 'General Studies Papers 2, 3 & 4',
    pyqCoverage: '15 Years (2010–2025) Verified',
    yieldScore: '98% Topic Yield',
    coreLabel: 'Kesavananda\nInvariant',
    nodes: [
      { id: 'u1', label: 'Part III Fundamental Rights', subLabel: 'GS Paper 2', angle: -Math.PI / 2 - 0.4 },
      { id: 'u2', label: 'Judicial Review (Art 13/32)', subLabel: 'Constitutional Law', angle: -Math.PI / 6 },
      { id: 'u3', label: 'Fiscal Policy Multipliers', subLabel: 'GS Paper 3', angle: Math.PI / 2 + 0.4 },
    ],
  },
  rbi: {
    name: 'RBI Grade B',
    examCode: 'Phase 2 DEPR / Finance',
    rootAxiom: 'Monetary Transmission & Yield Curve Dynamics',
    paper: 'Economic & Social Issues + Financial Management',
    pyqCoverage: '12 Years Official Regulatory Exams',
    yieldScore: '94% Structural Yield',
    coreLabel: 'IS-LM-BP\nInvariant',
    nodes: [
      { id: 'r1', label: 'Repo Rate & Liquidity Shift', subLabel: 'Monetary Policy', angle: -Math.PI / 2 - 0.4 },
      { id: 'r2', label: 'Term Premia & Yield Spread', subLabel: 'Sovereign Debt', angle: -Math.PI / 6 },
      { id: 'r3', label: 'Capex Multiplier Dynamics', subLabel: 'Credit Transmission', angle: Math.PI / 2 + 0.4 },
    ],
  },
  gate: {
    name: 'GATE CS & IT',
    examCode: 'Theoretical CS & Algo',
    rootAxiom: 'Turing Decidability & Asymptotic Recurrence',
    paper: 'Algorithms, TOC & Operating Systems',
    pyqCoverage: '18 Years (2007–2025) Standard Set',
    yieldScore: '99% Analytical Proof',
    coreLabel: 'Halting Problem\nInvariant',
    nodes: [
      { id: 'g1', label: 'Formal Grammar Hierarchy', subLabel: 'Automata Theory', angle: -Math.PI / 2 - 0.4 },
      { id: 'g2', label: 'Diagonalization Proof', subLabel: 'Decidability', angle: -Math.PI / 6 },
      { id: 'g3', label: 'Master Theorem Recurrence', subLabel: 'Complexity Analysis', angle: Math.PI / 2 + 0.4 },
    ],
  },
  cat: {
    name: 'CAT Analytics',
    examCode: 'QA & DILR Master',
    rootAxiom: 'Combinatorial Symmetry & Positional Permutations',
    paper: 'Quantitative Aptitude & High-Dim DILR',
    pyqCoverage: '16 Years IIM Slot Invariants',
    yieldScore: '96% Pattern Generalization',
    coreLabel: 'Burnside-Polya\nInvariant',
    nodes: [
      { id: 'c1', label: 'Unordered Object Sets', subLabel: 'Combinatorics', angle: -Math.PI / 2 - 0.4 },
      { id: 'c2', label: 'Circular Symmetries', subLabel: 'Positional Logic', angle: -Math.PI / 6 },
      { id: 'c3', label: 'Double Counting Elimination', subLabel: 'DILR Systems', angle: Math.PI / 2 + 0.4 },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const CX = 350, CY = 150; // SVG center
const ORBIT_RX = 200, ORBIT_RY = 100; // elliptical orbit radii
const NODE_DIST = 155; // node distance from center

function nodePos(angle: number) {
  return {
    x: CX + NODE_DIST * Math.cos(angle),
    y: CY + NODE_DIST * Math.sin(angle) * 0.72,
  };
}

function conduitPath(angle: number) {
  const { x, y } = nodePos(angle);
  const mx = CX + (x - CX) * 0.45;
  const my = CY + (y - CY) * 0.25;
  return `M ${CX} ${CY} Q ${mx} ${my}, ${x} ${y}`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const ExamTopologyGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeTrack, setActiveTrack] = useState<ExamTrack>('upsc');
  const prefersReduced = usePrefersReducedMotion();
  const uid = useId().replace(/:/g, '');

  const current = TOPOLOGY_DATA[activeTrack];

  // Stagger variants
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: prefersReduced ? 0 : 0.15 + i * MOTION_TOKENS.stagger.medium,
        duration: MOTION_TOKENS.duration.medium,
        ease: MOTION_TOKENS.ease.appleStandard as unknown as number[],
      },
    }),
  };

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
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-colors ${
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
          <motion.div
            key={activeTrack}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: MOTION_TOKENS.ease.appleStandard as unknown as number[] }}
          >
            <svg
              viewBox="0 0 700 300"
              className="w-full min-w-[480px] h-auto overflow-visible"
              aria-label={`${current.name} Topology Graph`}
            >
              <defs>
                {/* Core bloom glow */}
                <filter id={`bloom-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Core radial gradient */}
                <radialGradient id={`core-grad-${uid}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#7550C8" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#5B3BA0" stopOpacity="1" />
                </radialGradient>

                {/* Conduit gradient */}
                <linearGradient id={`conduit-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7550C8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
                </linearGradient>

                {/* Background radial fade */}
                <radialGradient id={`bg-fade-${uid}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7550C8" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#7550C8" stopOpacity="0" />
                </radialGradient>

                {/* Node card filter */}
                <filter id={`node-shadow-${uid}`} x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#7550C8" floodOpacity="0.12" />
                </filter>

                {/* Orbit gradient */}
                <linearGradient id={`orbit-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7550C8" stopOpacity="0" />
                  <stop offset="30%" stopColor="#7550C8" stopOpacity="0.2" />
                  <stop offset="70%" stopColor="#A855F7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background radial wash */}
              <ellipse cx={CX} cy={CY} rx="280" ry="140" fill={`url(#bg-fade-${uid})`} />

              {/* Faint dotted grid */}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`vg-${i}`} x1={80 * (i + 1)} y1="20" x2={80 * (i + 1)} y2="280" stroke="#E2D9F3" strokeWidth="0.5" strokeDasharray="2 8" className="dark:stroke-[#262238]" opacity="0.5" />
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <line key={`hg-${i}`} x1="40" y1={60 * (i + 1)} x2="660" y2={60 * (i + 1)} stroke="#E2D9F3" strokeWidth="0.5" strokeDasharray="2 8" className="dark:stroke-[#262238]" opacity="0.5" />
              ))}

              {/* Orbital elliptical ring */}
              <ellipse
                cx={CX} cy={CY}
                rx={ORBIT_RX} ry={ORBIT_RY}
                fill="none"
                stroke={`url(#orbit-grad-${uid})`}
                strokeWidth="1.5"
                strokeDasharray="6 4"
                transform={`rotate(-8, ${CX}, ${CY})`}
              >
                {!prefersReduced && (
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`-8 ${CX} ${CY}`}
                    to={`352 ${CX} ${CY}`}
                    dur="60s"
                    repeatCount="indefinite"
                  />
                )}
              </ellipse>

              {/* Second orbital ring — tighter, different tilt */}
              <ellipse
                cx={CX} cy={CY}
                rx={ORBIT_RX * 0.7} ry={ORBIT_RY * 0.6}
                fill="none"
                stroke="#A855F7"
                strokeWidth="1"
                strokeDasharray="3 6"
                opacity="0.15"
                transform={`rotate(25, ${CX}, ${CY})`}
              >
                {!prefersReduced && (
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`25 ${CX} ${CY}`}
                    to={`-335 ${CX} ${CY}`}
                    dur="45s"
                    repeatCount="indefinite"
                  />
                )}
              </ellipse>

              {/* Energy conduits from core to nodes */}
              {current.nodes.map((n, i) => {
                const pathD = conduitPath(n.angle);
                const len = 280; // approximate path length
                return (
                  <g key={n.id}>
                    {/* Static conduit base */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke={`url(#conduit-grad-${uid})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={prefersReduced ? {} : { strokeDasharray: `${len}`, strokeDashoffset: len }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: MOTION_TOKENS.ease.appleDecel as unknown as number[] }}
                    />
                    {/* Flowing energy particle */}
                    {!prefersReduced && (
                      <circle r="3" fill="#A855F7" opacity="0.8">
                        <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={pathD} />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Central Invariant Core — luminous diamond shape */}
              <g filter={`url(#bloom-${uid})`}>
                {/* Concentric pulse rings */}
                {!prefersReduced && [42, 56].map((r, i) => (
                  <ellipse key={`pulse-${i}`} cx={CX} cy={CY} rx={r} ry={r * 0.6} fill="none" stroke="#A855F7" strokeWidth="0.8" opacity="0">
                    <animate attributeName="opacity" values="0.3;0" dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
                    <animate attributeName="rx" values={`${r};${r + 18}`} dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
                    <animate attributeName="ry" values={`${r * 0.6};${(r + 18) * 0.6}`} dur={`${2.5 + i * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
                  </ellipse>
                ))}

                {/* Diamond shape */}
                <motion.polygon
                  points={`${CX},${CY - 34} ${CX + 28},${CY} ${CX},${CY + 34} ${CX - 28},${CY}`}
                  fill={`url(#core-grad-${uid})`}
                  stroke="#A855F7"
                  strokeWidth="1.5"
                  animate={prefersReduced ? {} : { scale: [1, 1.04, 1] }}
                  transition={prefersReduced ? {} : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Inner crystalline highlight */}
                <polygon
                  points={`${CX},${CY - 16} ${CX + 12},${CY} ${CX},${CY + 16} ${CX - 12},${CY}`}
                  fill="white"
                  opacity="0.18"
                />
              </g>

              {/* Core label */}
              {current.coreLabel.split('\n').map((line, li) => (
                <text
                  key={li}
                  x={CX}
                  y={CY + 50 + li * 13}
                  textAnchor="middle"
                  className="font-mono text-[9px] fill-[#7550C8] dark:fill-[#B99CFF] font-bold uppercase tracking-wider"
                >
                  {line}
                </text>
              ))}

              {/* Topic Nodes — frosted glass cards */}
              {current.nodes.map((n, i) => {
                const { x, y } = nodePos(n.angle);
                const cardW = 140, cardH = 50;
                return (
                  <motion.g
                    key={n.id}
                    custom={i}
                    variants={nodeVariants}
                    initial="hidden"
                    animate="show"
                    filter={`url(#node-shadow-${uid})`}
                  >
                    {/* Card background */}
                    <rect
                      x={x - cardW / 2}
                      y={y - cardH / 2}
                      width={cardW}
                      height={cardH}
                      rx="14"
                      className="fill-white dark:fill-[#1B172C] stroke-[#E2D9F3] dark:stroke-[#2E2746]"
                      strokeWidth="1.2"
                    />
                    {/* Yield indicator bar */}
                    <rect
                      x={x - cardW / 2 + 8}
                      y={y + cardH / 2 - 10}
                      width={cardW - 16}
                      height="3"
                      rx="1.5"
                      fill="#EDE6FB"
                      className="dark:fill-[#262238]"
                    />
                    <motion.rect
                      x={x - cardW / 2 + 8}
                      y={y + cardH / 2 - 10}
                      width={0}
                      height="3"
                      rx="1.5"
                      fill="#7550C8"
                      animate={{ width: (cardW - 16) * 0.88 }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: MOTION_TOKENS.ease.appleDecel as unknown as number[] }}
                    />
                    {/* Node label */}
                    <text
                      x={x}
                      y={y - 8}
                      textAnchor="middle"
                      className="font-mono text-[8px] fill-[#7550C8] dark:fill-[#B99CFF] font-bold uppercase tracking-wider"
                    >
                      NODE 0{i + 1} • {n.subLabel}
                    </text>
                    <text
                      x={x}
                      y={y + 8}
                      textAnchor="middle"
                      className="font-sans text-[10px] fill-[#110E1B] dark:fill-white font-bold"
                    >
                      {n.label}
                    </text>
                  </motion.g>
                );
              })}

              {/* Small orbiting particles on the outer ring */}
              {!prefersReduced && [0, 1, 2].map((i) => (
                <circle key={`orb-${i}`} r="2.5" fill="#A855F7" opacity="0.6">
                  <animateMotion
                    dur={`${8 + i * 3}s`}
                    repeatCount="indefinite"
                    begin={`${i * 2.5}s`}
                    path={`M ${CX + ORBIT_RX},${CY} A ${ORBIT_RX},${ORBIT_RY} 0 1 1 ${CX - ORBIT_RX},${CY} A ${ORBIT_RX},${ORBIT_RY} 0 1 1 ${CX + ORBIT_RX},${CY}`}
                  />
                </circle>
              ))}
            </svg>
          </motion.div>
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
          Derived from official gazette notifications &amp; past papers
        </span>
      </div>

    </div>
  );
};
