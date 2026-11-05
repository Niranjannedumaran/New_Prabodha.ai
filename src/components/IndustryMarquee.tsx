import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MarqueeItem {
  exam: string;
  category: string;
  concept: string;
  metric: string;
  metricColor: string;
}

const INVARIANT_ITEMS: MarqueeItem[] = [
  {
    exam: 'UPSC CSE',
    category: 'Polity & GS-2',
    concept: 'Constitutional Basic Structure Axiom',
    metric: '94% Exam Yield',
    metricColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
  },
  {
    exam: 'RBI Grade B',
    category: 'Finance & Phase 2',
    concept: 'Monetary Transmission & Yield Curves',
    metric: 'Macro Dynamic',
    metricColor: 'text-[#7550C8] dark:text-[#B99CFF] bg-[#F2EDFB] dark:bg-[#201A33] border-[#DDD2F7] dark:border-[#382B55]',
  },
  {
    exam: 'GATE CS',
    category: 'Theory of Computation',
    concept: 'Turing Decidability & Diagonalization',
    metric: '98% Proof Yield',
    metricColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
  },
  {
    exam: 'CAT QA',
    category: 'Quantitative Analytics',
    concept: 'Combinatorial Symmetry & Permutations',
    metric: 'Zero-Rote Logic',
    metricColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40',
  },
  {
    exam: 'SSC CGL',
    category: 'Advanced Mathematics',
    concept: 'Euclidean Geometric Invariants',
    metric: 'High Yield',
    metricColor: 'text-[#7550C8] dark:text-[#B99CFF] bg-[#F2EDFB] dark:bg-[#201A33] border-[#DDD2F7] dark:border-[#382B55]',
  },
  {
    exam: 'State PSC',
    category: 'Public Administration',
    concept: 'Fiscal Federalism & Devolution Formulas',
    metric: 'Statutory Core',
    metricColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
  },
  {
    exam: 'AI Systems',
    category: 'Cognitive Architecture',
    concept: 'Transformer Attention & Latent Geometry',
    metric: 'Frontier AI',
    metricColor: 'text-[#7550C8] dark:text-[#B99CFF] bg-[#F2EDFB] dark:bg-[#201A33] border-[#DDD2F7] dark:border-[#382B55]',
  },
  {
    exam: 'Distributed Systems',
    category: 'System Design',
    concept: 'CAP Invariant & Asynchronous Consensus',
    metric: 'System Core',
    metricColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40',
  },
];

export const IndustryMarquee: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Duplicate 4x for continuous seamless loop
  const list = [...INVARIANT_ITEMS, ...INVARIANT_ITEMS, ...INVARIANT_ITEMS, ...INVARIANT_ITEMS];

  return (
    <div className={`relative w-full overflow-hidden select-none py-6 sm:py-8 ${className}`}>
      
      {/* Header Pill */}
      <div className="text-center mb-5 sm:mb-6 px-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#161324]/90 backdrop-blur-md border border-[#E2D9F3] dark:border-[#32274A] shadow-[0_2px_12px_rgba(117,80,200,0.06)] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#553C8B] dark:text-[#C5AFFF] font-bold">
          <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-pulse" />
          Live Curriculum Invariants • 15 Years Competitive Exam Topologies
        </span>
      </div>

      {/* Deep Feathered Edge Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-12 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-[#F5F2FA] dark:from-[#0B0A0F] via-[#F5F2FA]/80 dark:via-[#0B0A0F]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-12 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-[#F5F2FA] dark:from-[#0B0A0F] via-[#F5F2FA]/80 dark:via-[#0B0A0F]/80 to-transparent z-10" />

      {/* Hardware-Accelerated 60fps Sideways Sliding Track */}
      <div className="flex w-max items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 38,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-4 sm:gap-5 pr-5 hover:[animation-play-state:paused]"
        >
          {list.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/95 dark:bg-[#151222]/95 backdrop-blur-xl border border-[#E2D9F3] dark:border-[#2C2640] shadow-[0_4px_24px_rgba(117,80,200,0.06)] hover:border-[#7550C8] hover:shadow-[0_8px_30px_rgba(117,80,200,0.18)] transition-all cursor-default shrink-0 group"
            >
              {/* Exam Badge with Pulsing Dot */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#F4EFFB] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] group-hover:scale-125 transition-transform" />
                <span className="font-mono font-bold text-[10px] sm:text-[11px] text-[#7550C8] dark:text-[#B99CFF] tracking-wider uppercase">
                  {item.exam}
                </span>
              </div>

              {/* Invariant Concept & Category */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#110E1B] dark:text-white tracking-tight whitespace-nowrap group-hover:text-[#7550C8] transition-colors">
                  {item.concept}
                </span>
                <span className="text-[10px] font-mono text-[#585366] dark:text-[#9F9AA8] whitespace-nowrap">
                  {item.category}
                </span>
              </div>

              {/* Status / Metric Chip */}
              <div className={`px-2.5 py-0.5 rounded-lg border text-[10px] font-mono font-semibold whitespace-nowrap shrink-0 ${item.metricColor}`}>
                {item.metric}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};
