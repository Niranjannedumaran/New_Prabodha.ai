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
  // Duplicate for seamless infinite loop
  const list = [...INVARIANT_ITEMS, ...INVARIANT_ITEMS];

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      
      {/* Subtle Section Label */}
      <div className="text-center mb-6">
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#77727F] dark:text-[#8E8A9E] font-medium">
          Verified High-Yield Invariants • Competitive Examination Curriculum Topology
        </span>
      </div>

      {/* Deep Feathered Edge Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-10 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#FAF8FE] dark:from-[#0B0A0F] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-10 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#FAF8FE] dark:from-[#0B0A0F] to-transparent z-10" />

      {/* Hardware-Accelerated 60fps Sideways Sliding Track */}
      <div className="flex w-max items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-3.5 sm:gap-4 pr-4 hover:[animation-play-state:paused]"
        >
          {list.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#141220]/90 backdrop-blur-md border border-[#E2D9F3] dark:border-[#272439] shadow-[0_2px_10px_-2px_rgba(117,80,200,0.06)] hover:border-[#7550C8] hover:shadow-[0_4px_18px_-2px_rgba(117,80,200,0.18)] transition-all cursor-default shrink-0 group"
            >
              {/* Glowing Indicator Dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] group-hover:scale-125 transition-transform" />

              {/* Exam Badge */}
              <span className="font-mono font-bold text-[10px] sm:text-[11px] text-[#7550C8] dark:text-[#B99CFF] tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#F2EDFB] dark:bg-[#201A33]">
                {item.exam}
              </span>

              {/* Separator */}
              <span className="w-px h-3 bg-[#E2D9F3] dark:bg-[#28253A]" />

              {/* Invariant Concept */}
              <span className="text-xs font-semibold text-[#16131F] dark:text-[#E2DFEB] tracking-tight">
                {item.concept}
              </span>

              {/* Sub-tag */}
              <span className="text-[10px] font-mono text-[#77727F] dark:text-[#8E8A9E] hidden md:inline">
                • {item.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};
