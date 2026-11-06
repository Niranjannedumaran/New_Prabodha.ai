import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';
import { HeroIntelligenceUniverse } from './svg-motion/HeroIntelligenceUniverse';
import { useSound } from '../context/SoundContext';

interface EditorialHeroStageProps {
  onExplore: () => void;
  onSocraticDemo: () => void;
}

/**
 * EditorialHeroStage — Master Hero Experience for Prabodha AI
 * 
 * Synthesized from:
 * - Two26 Studio: Oversized kinetic editorial typography & confident asymmetry
 * - Doko Studio: Clean structural alignment, crisp hairlines, restrained color palette
 * - Mechay: Fluid masked text entrance, interactive micro-ticks, and layered visual depth
 */
export const EditorialHeroStage: React.FC<EditorialHeroStageProps> = ({
  onExplore,
  onSocraticDemo,
}) => {
  const { playTick, playPop } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 bg-[#0B0A0F] text-white overflow-hidden border-b border-white/[0.08]"
      style={{ isolation: 'isolate' }}
    >
      {/* Precision architectural grid lines (Two26 & Doko discipline) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Atmospheric ambient violet spotlight — restrained, not overwhelming */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#6D28D9]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#8E5CFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dual-Audience Institutional Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] mb-8 sm:mb-12 shadow-soft-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-white/80 font-semibold">
            Institutional Intelligence Platform
          </span>
          <span className="text-white/30">•</span>
          <span className="text-[11px] sm:text-xs font-mono text-[#B99CFF] font-medium hidden sm:inline">
            15-Year Syllabus Invariant Vectors
          </span>
          <BrandEmblem size="sm" animated={true} />
        </motion.div>

        {/* Master Editorial Layout: Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Typography & Strategic Positioning (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* The Master Kinetic Headline */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-[84px] font-sans font-black tracking-[-0.035em] text-white leading-[0.96] uppercase"
                >
                  Learn.
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-[84px] font-sans font-black tracking-[-0.035em] text-white leading-[0.96] uppercase"
                >
                  Prepare.
                </motion.h1>
              </div>

              <div className="overflow-hidden flex flex-wrap items-baseline gap-3">
                <motion.span 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-[84px] font-sans font-black tracking-[-0.035em] text-[#A855F7] leading-[0.96] uppercase"
                >
                  Grow.
                </motion.span>
                <motion.span 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-[84px] font-editorial italic font-normal tracking-[-0.02em] text-[#DDD2F7] leading-[0.96] lowercase"
                >
                  evolve.
                </motion.span>
              </div>
            </div>

            {/* Core Positioning Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-xl"
            >
              An AI-powered platform for intelligent learning, competitive examination preparation and career growth. Engineered from first-principles Socratic reasoning, not rote memorization.
            </motion.p>

            {/* Action Buttons with Sound & Magnetic Response */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => {
                  playPop(520, 0.08);
                  onExplore();
                }}
                onMouseEnter={() => playTick(960, 0.02)}
                className="px-8 py-4 rounded-full bg-white text-[#0B0A0F] hover:bg-[#EDE6FB] hover:text-[#6D28D9] text-sm font-bold tracking-tight transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.15)] active:scale-[0.97] flex items-center justify-center gap-2 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  playTick(1100, 0.03);
                  onSocraticDemo();
                }}
                onMouseEnter={() => playTick(960, 0.02)}
                className="px-7 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-semibold border border-white/[0.15] hover:border-[#A855F7]/80 transition-all duration-200 backdrop-blur-md active:scale-[0.97] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C4B5FD]" />
                <span>Experience Socratic Demo</span>
              </button>
            </motion.div>

            {/* Institutional Verification Anchors (Dual-Audience Credibility) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-white/60"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero Rote Memorization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>15-Year Syllabus Deconstruction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero Course Selling / No Batches</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Grounded Mascot Composition & Gyroscopic Universe (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Embedded 3D Gyroscopic Intelligence Universe SVG */}
            <div className="w-full max-w-[520px] mx-auto relative">
              <HeroIntelligenceUniverse />

              {/* Official Student & Robot Mascot Duo — Feathered Grounding */}
              <div className="relative -mt-16 sm:-mt-24 z-20 flex flex-col items-center">
                <div 
                  className="relative w-64 sm:w-80 lg:w-96 max-w-full overflow-hidden"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  }}
                >
                  <img
                    src="/new-assets/Prabodha AI Duo Render.png"
                    alt="Prabodha Student and Socratic Robot Mascot"
                    className="w-full h-auto object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.6)] select-none transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Grounding Base Dock Pedestal */}
                <div className="w-48 sm:w-64 h-2.5 -mt-2 bg-gradient-to-r from-transparent via-[#8E5CFF]/40 to-transparent rounded-full blur-sm" />

                {/* Live Pedagogical Telemetry Capsule */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-3 px-4 py-2 rounded-full bg-[#181427]/90 backdrop-blur-xl border border-[#A855F7]/30 shadow-soft flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-white tracking-wide">
                    Socratic Invariant Engine • Active
                  </span>
                </motion.div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Architectural Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8E5CFF]/30 to-transparent" />
    </section>
  );
};
