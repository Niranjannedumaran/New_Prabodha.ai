import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface HeroIntelligenceUniverseProps {
  className?: string;
}

/**
 * HeroIntelligenceUniverse — Flagship Animated SVG Universe for Prabodha AI
 * 
 * Mathematical Layout:
 * - Center Origin: (400, 300)
 * - Concentric Orbit 1 (radius 120), Orbit 2 (radius 210), Orbit 3 (radius 300)
 * - 4 Cardinal Pillar Nodes:
 *     Top (400, 90)    -> Exam Intelligence (Axiom Graph)
 *     Right (610, 300) -> Socratic Dialogue (First-Principles)
 *     Bottom (400, 510)-> Career Trajectory (Skill Lattice)
 *     Left (190, 300)  -> AI Mentorship (Longitudinal Calibration)
 * - Coordinated SVG Spline Paths linking nodes to central intelligence core.
 */
export const HeroIntelligenceUniverse: React.FC<HeroIntelligenceUniverseProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Desktop Pointer Parallax Tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springTilt = prefersReduced
    ? { damping: 100, stiffness: 100 }
    : MOTION_TOKENS.spring.gentle;

  const smoothX = useSpring(mouseX, springTilt);
  const smoothY = useSpring(mouseY, springTilt);

  const rotateX = useTransform(smoothY, [0, 1], prefersReduced ? [0, 0] : [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], prefersReduced ? [0, 0] : [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const nodes = [
    {
      id: 'exams',
      title: 'Exam Topology',
      metric: '98% Yield',
      cx: 400,
      cy: 90,
      color: '#7550C8',
      path: 'M 400 300 C 400 210, 400 150, 400 90',
    },
    {
      id: 'learning',
      title: 'Socratic Dialogue',
      metric: 'Zero-Rote',
      cx: 610,
      cy: 300,
      color: '#8E5CFF',
      path: 'M 400 300 C 490 300, 550 300, 610 300',
    },
    {
      id: 'careers',
      title: 'Career Lattice',
      metric: 'Skill Demand',
      cx: 400,
      cy: 510,
      color: '#06B6D4',
      path: 'M 400 300 C 400 390, 400 450, 400 510',
    },
    {
      id: 'mentorship',
      title: 'Longitudinal Pacing',
      metric: 'Calm State',
      cx: 190,
      cy: 300,
      color: '#10B981',
      path: 'M 400 300 C 310 300, 250 300, 190 300',
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[800px] mx-auto select-none ${className}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-auto transition-transform duration-300"
      >
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto overflow-visible filter drop-shadow-[0_12px_40px_rgba(117,80,200,0.09)]"
          aria-label="Prabodha AI Intelligence Universe showing interconnected cognitive systems"
          role="img"
        >
          <defs>
            {/* Ambient Radial Gradient for Central Core */}
            <radialGradient id="p-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#B99CFF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0" />
            </radialGradient>

            {/* Linear Gradient for Interconnecting Synaptic Paths */}
            <linearGradient id="p-path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
            </linearGradient>

            {/* Glow Filter for High-Order Nodes */}
            <filter id="p-node-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ========================================================= */}
          {/* LAYER 1: AMBIENT CONCENTRIC ORBITS                        */}
          {/* ========================================================= */}
          <g className="stroke-[#E2D9F3] dark:stroke-[#28223B]" strokeWidth="1" fill="none">
            {/* Inner Orbital */}
            <circle
              cx="400"
              cy="300"
              r="120"
              strokeDasharray="4 6"
              className="opacity-70 dark:opacity-40"
            />
            {/* Mid Orbital */}
            <circle
              cx="400"
              cy="300"
              r="210"
              strokeDasharray="6 8"
              className="opacity-60 dark:opacity-30"
            />
            {/* Outer Orbital */}
            <circle
              cx="400"
              cy="300"
              r="300"
              strokeDasharray="8 10"
              className="opacity-40 dark:opacity-20"
            />
          </g>

          {/* Rotating Orbital Particles (Slow, graceful cosmic drift) */}
          {!prefersReduced && (
            <motion.g
              animate={{ rotate: 360 }}
              transition={{
                duration: MOTION_TOKENS.duration.loopOrbital * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ originX: '400px', originY: '300px' }}
            >
              {/* Particle on Inner Orbit */}
              <circle cx="520" cy="300" r="3" fill="#7550C8" opacity="0.8" />
              {/* Particle on Mid Orbit */}
              <circle cx="400" cy="90" r="3.5" fill="#A855F7" opacity="0.7" />
              {/* Particle on Outer Orbit */}
              <circle cx="188" cy="512" r="2.5" fill="#06B6D4" opacity="0.85" />
            </motion.g>
          )}

          {/* Counter-Rotating Orbital Micro-Nodes */}
          {!prefersReduced && (
            <motion.g
              animate={{ rotate: -360 }}
              transition={{
                duration: MOTION_TOKENS.duration.loopOrbital * 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ originX: '400px', originY: '300px' }}
            >
              <circle cx="280" cy="300" r="2.5" fill="#10B981" opacity="0.75" />
              <circle cx="400" cy="510" r="3" fill="#7550C8" opacity="0.6" />
            </motion.g>
          )}

          {/* ========================================================= */}
          {/* LAYER 2: INTERCONNECTING SYNAPTIC PATHS (Drawn on Entry) */}
          {/* ========================================================= */}
          {nodes.map((n, i) => (
            <g key={n.id}>
              {/* Progressive SVG Path Drawing */}
              <motion.path
                d={n.path}
                fill="none"
                stroke="url(#p-path-gradient)"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                initial={prefersReduced ? { opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{
                  duration: MOTION_TOKENS.duration.storytelling,
                  delay: i * MOTION_TOKENS.stagger.medium,
                  ease: MOTION_TOKENS.ease.appleStandard,
                }}
              />

              {/* Data pulse traveling along the path */}
              {!prefersReduced && (
                <motion.circle
                  r="3.5"
                  fill={n.color}
                  initial={{ offsetDistance: '0%', opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: 'easeInOut',
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(117, 80, 200, 0.6))',
                  }}
                />
              )}
            </g>
          ))}

          {/* Cross Diagonal Spline Lattice */}
          <motion.path
            d="M 190 300 Q 295 195 400 90 Q 505 195 610 300 Q 505 405 400 510 Q 295 405 190 300 Z"
            fill="none"
            stroke="#7550C8"
            strokeWidth="0.85"
            strokeOpacity="0.25"
            strokeDasharray="4 8"
            initial={prefersReduced ? { opacity: 0.3 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* ========================================================= */}
          {/* LAYER 3: FOUR CORNER INTELLIGENCE NODES                   */}
          {/* ========================================================= */}
          {nodes.map((n, i) => (
            <motion.g
              key={`node-${n.id}`}
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: MOTION_TOKENS.duration.medium,
                delay: 0.2 + i * MOTION_TOKENS.stagger.medium,
                ease: MOTION_TOKENS.ease.appleStandard,
              }}
              className="cursor-pointer group"
            >
              {/* Outer Radiant Ring */}
              <circle
                cx={n.cx}
                cy={n.cy}
                r="38"
                fill="currentColor"
                className="text-white dark:text-[#151224]"
                stroke="#E2D9F3"
                strokeWidth="1.5"
                style={{
                  filter: 'drop-shadow(0 4px 16px rgba(117, 80, 200, 0.12))',
                }}
              />

              {/* Pulsing Status Dot */}
              <circle
                cx={n.cx}
                cy={n.cy}
                r="6"
                fill={n.color}
                style={{ filter: 'url(#p-node-glow)' }}
              />

              {/* Node Headline (SVG Text for Crisp Typography) */}
              <text
                x={n.cx}
                y={n.cy + (n.cy < 300 ? -48 : 56)}
                textAnchor="middle"
                className="fill-[#110E1B] dark:fill-white font-sans font-bold text-[13px] tracking-tight"
              >
                {n.title}
              </text>

              {/* Node Yield Subtitle */}
              <text
                x={n.cx}
                y={n.cy + (n.cy < 300 ? -33 : 71)}
                textAnchor="middle"
                className="fill-[#7550C8] dark:fill-[#B99CFF] font-mono font-semibold text-[10px] tracking-wider uppercase"
              >
                {n.metric}
              </text>
            </motion.g>
          ))}

          {/* ========================================================= */}
          {/* LAYER 4: CENTRAL INTELLIGENCE CORE (Socratic Anchor)      */}
          {/* ========================================================= */}
          <g>
            {/* Ambient Core Halo */}
            <circle cx="400" cy="300" r="100" fill="url(#p-core-glow)" />

            {/* Outer Rotating Gear Ring */}
            <circle
              cx="400"
              cy="300"
              r="48"
              fill="none"
              stroke="#7550C8"
              strokeWidth="2"
              strokeDasharray="8 6"
              className="opacity-70"
            />

            {/* Inner Core Disc */}
            <circle
              cx="400"
              cy="300"
              r="34"
              className="fill-white dark:fill-[#1A162B] stroke-[#7550C8]"
              strokeWidth="2"
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(117, 80, 200, 0.28))',
              }}
            />

            {/* Central Socratic Monogram / Diamond Invariant */}
            <polygon
              points="400,282 414,300 400,318 386,300"
              fill="#7550C8"
              className="dark:fill-[#B99CFF]"
            />
            <circle cx="400" cy="300" r="3" fill="#FFFFFF" />

            {/* Core Label */}
            <text
              x="400"
              y="370"
              textAnchor="middle"
              className="fill-[#110E1B] dark:fill-white font-sans font-extrabold text-[14px] tracking-tight"
            >
              Prabodha Core
            </text>
            <text
              x="400"
              y="386"
              textAnchor="middle"
              className="fill-[#6B6578] dark:fill-[#94A3B8] font-mono text-[9px] tracking-widest uppercase"
            >
              First-Principles Engine
            </text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
