import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MOTION_TOKENS } from './motionTokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface HeroIntelligenceUniverseProps {
  className?: string;
}

/**
 * HeroIntelligenceUniverse — High-End Studio-Grade Motion Graphic for Prabodha AI
 * 
 * Concept: The Quantum Gyroscopic Locus (3D Multi-Axis Orbital Intelligence Core)
 * 
 * Visual Architecture:
 * - 3 Asynchronous Gyroscopic Orbital Rings tilted at 3D angles with gradient light sweeps.
 * - Luminous Multi-Layered Refractive Diamond Core with breathing harmonic shockwaves.
 * - Flowing Synaptic Energy Splines channeling luminous particle comets.
 * - 4 Floating Architectural HUD Telemetry Capsules with frosted glass finishes.
 * - Interactive 3D mouse parallax tilt with Apple spring physics.
 */
export const HeroIntelligenceUniverse: React.FC<HeroIntelligenceUniverseProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [activeTelemetry, setActiveTelemetry] = useState<string>('socratic');

  // Desktop Pointer Parallax Tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = prefersReduced
    ? { damping: 100, stiffness: 100 }
    : { damping: 28, stiffness: 160 };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], prefersReduced ? [0, 0] : [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1], prefersReduced ? [0, 0] : [-8, 8]);
  const coreTranslateZ = useTransform(smoothX, [0, 1], [-15, 15]);

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

  const telemetryData = [
    {
      id: 'exams',
      title: 'Exam Invariant Topology',
      metric: '98% Yield Accuracy',
      desc: '15-Year Syllabus Deconstruction',
      coords: { x: 130, y: 110 },
      color: '#8E5CFF',
    },
    {
      id: 'socratic',
      title: 'Socratic Inquiry Engine',
      metric: 'Zero-Rote Retention',
      desc: 'First-Principles Scaffolding',
      coords: { x: 670, y: 110 },
      color: '#7550C8',
    },
    {
      id: 'careers',
      title: 'Career Competency Lattice',
      metric: 'Top 1% Percentile Placement',
      desc: 'Market-to-Skill Graphing',
      coords: { x: 670, y: 490 },
      color: '#06B6D4',
    },
    {
      id: 'mentorship',
      title: 'Longitudinal Pacing Wave',
      metric: 'Optimal Calm Baseline',
      desc: 'Dynamic Cognitive Load Shield',
      coords: { x: 130, y: 490 },
      color: '#10B981',
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[920px] mx-auto select-none py-6 sm:py-8 ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-auto transition-transform duration-200"
      >
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto overflow-visible filter drop-shadow-[0_20px_60px_rgba(117,80,200,0.12)]"
          aria-label="Prabodha AI Advanced Quantum Gyroscopic Intelligence Core"
          role="img"
        >
          <defs>
            {/* Core Volumetric Glow Gradient */}
            <radialGradient id="gyo-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#8E5CFF" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#A855F7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0" />
            </radialGradient>

            {/* Radiant Bloom Filter */}
            <filter id="gyo-bloom" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="16" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle Caustic Flare Filter */}
            <filter id="gyo-flare" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Ring 1 Gradient: Deep Violet to Electric Cyan */}
            <linearGradient id="gyo-ring-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8E5CFF" stopOpacity="0.9" />
            </linearGradient>

            {/* Ring 2 Gradient: Vibrant Violet to Emerald */}
            <linearGradient id="gyo-ring-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8E5CFF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0.85" />
            </linearGradient>

            {/* Ring 3 Gradient: Lavender to Violet */}
            <linearGradient id="gyo-ring-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#EDE6FB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7550C8" stopOpacity="0.75" />
            </linearGradient>

            {/* Synaptic Filament Gradients */}
            <linearGradient id="gyo-synapse-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8E5CFF" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="gyo-synapse-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7550C8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* ========================================================= */}
          {/* LAYER 1: AMBIENT ATMOSPHERIC BACKGROUND RADIAL FIELD      */}
          {/* ========================================================= */}
          <circle cx="400" cy="300" r="280" fill="url(#gyo-core-glow)" className="opacity-40 dark:opacity-60" />

          {/* Subtle Concentric Energy Harmonic Wavefronts */}
          {[160, 220, 280, 340].map((radius, i) => (
            <motion.circle
              key={`harmonic-${i}`}
              cx="400"
              cy="300"
              r={radius}
              fill="none"
              stroke="#7550C8"
              strokeWidth="1"
              strokeDasharray="3 9"
              className="opacity-20 dark:opacity-30"
              animate={
                prefersReduced
                  ? undefined
                  : {
                      scale: [1, 1.04, 1],
                      opacity: [0.15, 0.35, 0.15],
                    }
              }
              transition={{
                duration: 4.5 + i * 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
              style={{ originX: '400px', originY: '300px' }}
            />
          ))}

          {/* ========================================================= */}
          {/* LAYER 2: FLOWING SYNAPTIC CONDUIT RIBBONS (Cubic Béziers)  */}
          {/* ========================================================= */}
          {/* Top-Left to Core */}
          <motion.path
            d="M 190 140 C 260 160, 320 220, 400 300"
            fill="none"
            stroke="url(#gyo-synapse-1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: MOTION_TOKENS.ease.appleStandard }}
          />

          {/* Top-Right to Core */}
          <motion.path
            d="M 610 140 C 540 160, 480 220, 400 300"
            fill="none"
            stroke="url(#gyo-synapse-1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.15, ease: MOTION_TOKENS.ease.appleStandard }}
          />

          {/* Bottom-Right to Core */}
          <motion.path
            d="M 610 460 C 540 440, 480 380, 400 300"
            fill="none"
            stroke="url(#gyo-synapse-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: MOTION_TOKENS.ease.appleStandard }}
          />

          {/* Bottom-Left to Core */}
          <motion.path
            d="M 190 460 C 260 440, 320 380, 400 300"
            fill="none"
            stroke="url(#gyo-synapse-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.45, ease: MOTION_TOKENS.ease.appleStandard }}
          />

          {/* Continuous Traveling Luminous Photons along conduits */}
          {!prefersReduced && (
            <>
              {/* Photon 1: Top-Left */}
              <motion.circle
                r="3.5"
                fill="#8E5CFF"
                filter="url(#gyo-flare)"
                animate={{
                  cx: [190, 260, 330, 400],
                  cy: [140, 170, 230, 300],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Photon 2: Top-Right */}
              <motion.circle
                r="3.5"
                fill="#7550C8"
                filter="url(#gyo-flare)"
                animate={{
                  cx: [610, 540, 470, 400],
                  cy: [140, 170, 230, 300],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3.1,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: 'easeInOut',
                }}
              />

              {/* Photon 3: Bottom-Right */}
              <motion.circle
                r="3.5"
                fill="#06B6D4"
                filter="url(#gyo-flare)"
                animate={{
                  cx: [610, 540, 470, 400],
                  cy: [460, 430, 370, 300],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.9,
                  repeat: Infinity,
                  delay: 1.4,
                  ease: 'easeInOut',
                }}
              />

              {/* Photon 4: Bottom-Left */}
              <motion.circle
                r="3.5"
                fill="#10B981"
                filter="url(#gyo-flare)"
                animate={{
                  cx: [190, 260, 330, 400],
                  cy: [460, 430, 370, 300],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3.3,
                  repeat: Infinity,
                  delay: 2.0,
                  ease: 'easeInOut',
                }}
              />
            </>
          )}

          {/* ========================================================= */}
          {/* LAYER 3: 3D GYROSCOPIC INTERLOCKING ORBITAL RINGS         */}
          {/* ========================================================= */}

          {/* Ring 1: Primary Elliptical Orbit (Rotated -35deg) */}
          <g transform="translate(400, 300) rotate(-35) translate(-400, -300)">
            <ellipse
              cx="400"
              cy="300"
              rx="210"
              ry="75"
              fill="none"
              stroke="url(#gyo-ring-1)"
              strokeWidth="2"
              strokeDasharray="12 6"
              className="opacity-80"
            />
            {!prefersReduced && (
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '400px', originY: '300px' }}
              >
                <circle cx="610" cy="300" r="5" fill="#06B6D4" filter="url(#gyo-bloom)" />
                <circle cx="190" cy="300" r="3" fill="#8E5CFF" opacity="0.8" />
              </motion.g>
            )}
          </g>

          {/* Ring 2: Secondary Elliptical Orbit (Rotated +40deg) */}
          <g transform="translate(400, 300) rotate(40) translate(-400, -300)">
            <ellipse
              cx="400"
              cy="300"
              rx="180"
              ry="65"
              fill="none"
              stroke="url(#gyo-ring-2)"
              strokeWidth="2.25"
              strokeDasharray="8 8"
              className="opacity-85"
            />
            {!prefersReduced && (
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '400px', originY: '300px' }}
              >
                <circle cx="580" cy="300" r="4.5" fill="#10B981" filter="url(#gyo-bloom)" />
                <circle cx="220" cy="300" r="3" fill="#7550C8" opacity="0.9" />
              </motion.g>
            )}
          </g>

          {/* Ring 3: Polar Gyroscopic Incline (Rotated +85deg) */}
          <g transform="translate(400, 300) rotate(85) translate(-400, -300)">
            <ellipse
              cx="400"
              cy="300"
              rx="150"
              ry="50"
              fill="none"
              stroke="url(#gyo-ring-3)"
              strokeWidth="1.75"
              strokeDasharray="6 4"
              className="opacity-70"
            />
            {!prefersReduced && (
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '400px', originY: '300px' }}
              >
                <circle cx="550" cy="300" r="4" fill="#A855F7" filter="url(#gyo-bloom)" />
              </motion.g>
            )}
          </g>

          {/* ========================================================= */}
          {/* LAYER 4: CENTRAL LUMINOUS DIAMOND PRISM / INTELLIGENCE CORE */}
          {/* ========================================================= */}
          <g>
            {/* Ambient Refraction Aura */}
            <circle cx="400" cy="300" r="60" fill="url(#gyo-core-glow)" filter="url(#gyo-bloom)" />

            {/* Breathing Outer Hexagonal Shield */}
            <motion.polygon
              points="400,245 448,272 448,328 400,355 352,328 352,272"
              fill="none"
              stroke="#7550C8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-60"
              animate={
                prefersReduced
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      rotate: [0, 15, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ originX: '400px', originY: '300px' }}
            />

            {/* Crystalline Tesseract Facet 1 */}
            <polygon
              points="400,260 435,285 435,315 400,340 365,315 365,285"
              fill="currentColor"
              className="text-white dark:text-[#18132B]"
              stroke="#7550C8"
              strokeWidth="2.5"
              style={{
                filter: 'drop-shadow(0 8px 30px rgba(117, 80, 200, 0.4))',
              }}
            />

            {/* Faceted Internal Diamond Rays */}
            <line x1="400" y1="260" x2="400" y2="340" stroke="#7550C8" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="365" y1="285" x2="435" y2="315" stroke="#7550C8" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="365" y1="315" x2="435" y2="285" stroke="#7550C8" strokeWidth="1.5" strokeOpacity="0.5" />

            {/* Central Hyper-Luminous Singularity Photon */}
            <circle cx="400" cy="300" r="9" fill="#7550C8" filter="url(#gyo-flare)" />
            <circle cx="400" cy="300" r="4.5" fill="#FFFFFF" />

            {/* Core Architectural Monogram Text */}
            <text
              x="400"
              y="382"
              textAnchor="middle"
              className="fill-[#110E1B] dark:fill-white font-sans font-extrabold text-[15px] tracking-tight"
            >
              Prabodha Intelligence Core
            </text>
            <text
              x="400"
              y="398"
              textAnchor="middle"
              className="fill-[#7550C8] dark:fill-[#B99CFF] font-mono text-[9px] font-semibold tracking-widest uppercase"
            >
              Quantum Invariant Engine
            </text>
          </g>

          {/* ========================================================= */}
          {/* LAYER 5: FOUR ARCHITECTURAL TELEMETRY HUD CAPSULES         */}
          {/* ========================================================= */}
          {telemetryData.map((node) => {
            const isHovered = activeTelemetry === node.id;

            return (
              <g
                key={node.id}
                onClick={() => setActiveTelemetry(node.id)}
                className="cursor-pointer group"
                transform={`translate(${node.coords.x}, ${node.coords.y})`}
              >
                {/* Outer Glass Card Base */}
                <rect
                  x="-95"
                  y="-40"
                  width="190"
                  height="80"
                  rx="22"
                  className={`transition-all duration-300 ${
                    isHovered
                      ? 'fill-white dark:fill-[#1E1833] stroke-[#7550C8]'
                      : 'fill-white/90 dark:fill-[#151124]/90 stroke-[#E2D9F3] dark:stroke-[#2C2442]'
                  }`}
                  strokeWidth={isHovered ? '2' : '1.25'}
                  style={{
                    filter: isHovered
                      ? 'drop-shadow(0 12px 35px rgba(117, 80, 200, 0.22))'
                      : 'drop-shadow(0 4px 18px rgba(0, 0, 0, 0.04))',
                  }}
                />

                {/* Status Dot */}
                <circle
                  cx="-70"
                  cy="-18"
                  r="4"
                  fill={node.color}
                  filter={isHovered ? 'url(#gyo-flare)' : undefined}
                />

                {/* Subtitle / Yield Metric */}
                <text
                  x="-60"
                  y="-15"
                  className="font-mono text-[9px] font-bold fill-[#7550C8] dark:fill-[#B99CFF] uppercase tracking-wider"
                >
                  {node.metric}
                </text>

                {/* Main Node Title */}
                <text
                  x="-70"
                  y="7"
                  className="font-sans text-[12px] font-bold fill-[#110E1B] dark:fill-white tracking-tight"
                >
                  {node.title}
                </text>

                {/* Node Description Line */}
                <text
                  x="-70"
                  y="23"
                  className="font-sans text-[9.5px] fill-[#555060] dark:fill-[#9A95A8]"
                >
                  {node.desc}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};
