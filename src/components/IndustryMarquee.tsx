import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeItem {
  exam: string;
  concept: string;
  tag: string;
}

const INVARIANT_ITEMS: MarqueeItem[] = [
  { exam: 'UPSC CSE', concept: 'Constitutional Basic Structure Axiom', tag: 'Polity & GS-2' },
  { exam: 'RBI Grade B', concept: 'Monetary Transmission & Yield Curves', tag: 'Finance & Phase 2' },
  { exam: 'GATE CS', concept: 'Turing Decidability & Diagonalization', tag: 'Theory of Computation' },
  { exam: 'CAT QA', concept: 'Combinatorial Symmetry & Permutations', tag: 'Quantitative Analytics' },
  { exam: 'SSC CGL', concept: 'Euclidean Geometric Invariants', tag: 'Advanced Mathematics' },
  { exam: 'State PSC', concept: 'Fiscal Federalism & Devolution Formulas', tag: 'Public Administration' },
  { exam: 'AI Systems', concept: 'Transformer Attention & Latent Geometry', tag: 'Cognitive Architecture' },
  { exam: 'Distributed Systems', concept: 'CAP Invariant & Asynchronous Consensus', tag: 'System Design' },
];

export const IndustryMarquee: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Duplicate 4x for continuous, infinite sideways translation
  const list = [...INVARIANT_ITEMS, ...INVARIANT_ITEMS, ...INVARIANT_ITEMS, ...INVARIANT_ITEMS];

  return (
    <div className={`relative w-full overflow-hidden select-none py-6 sm:py-8 ${className}`}>
      
      {/* Subtle Apple Section Label */}
      <div className="text-center mb-4 sm:mb-6 px-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3F7]/60 dark:bg-[#1E192E]/60 border border-[#DCD0F2] dark:border-[#32274A] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#553C8B] dark:text-[#C5AFFF] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
          Verified Curriculum Invariants • Competitive Exam Topology
        </span>
      </div>

      {/* Deep Feathered Edge Fade Masks (Light: #F5F2FA, Dark: #0B0A0F) */}
      <div className="pointer-events-none absolute left-0 top-12 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F5F2FA] dark:from-[#0B0A0F] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-12 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F5F2FA] dark:from-[#0B0A0F] to-transparent z-10" />

      {/* Hardware-Accelerated 60fps Sideways Sliding Track */}
      <div className="flex w-max items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 32,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-3 sm:gap-4 pr-4 hover:[animation-play-state:paused]"
        >
          {list.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/95 dark:bg-[#151222]/95 backdrop-blur-xl border border-[#E2D9F3] dark:border-[#2C2640] shadow-[0_4px_20px_rgba(117,80,200,0.06)] hover:border-[#7550C8] hover:shadow-[0_6px_24px_rgba(117,80,200,0.18)] transition-all cursor-default shrink-0 group"
            >
              {/* Glowing Indicator Dot */}
              <span className="w-2 h-2 rounded-full bg-[#7550C8] group-hover:scale-125 transition-transform shrink-0" />

              {/* Exam Badge */}
              <span className="font-mono font-bold text-[10px] sm:text-[11px] text-[#7550C8] dark:text-[#B99CFF] tracking-wider uppercase px-2.5 py-0.5 rounded-lg bg-[#F2EDFB] dark:bg-[#201A33] shrink-0">
                {item.exam}
              </span>

              {/* Separator */}
              <span className="w-px h-3.5 bg-[#E2D9F3] dark:bg-[#28253A] shrink-0" />

              {/* Invariant Concept */}
              <span className="text-xs sm:text-sm font-semibold text-[#0F0C1B] dark:text-[#E2DFEB] tracking-tight whitespace-nowrap">
                {item.concept}
              </span>

              {/* Sub-tag */}
              <span className="text-[10px] font-mono text-[#5E596D] dark:text-[#9F9AA8] whitespace-nowrap hidden md:inline">
                • {item.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

