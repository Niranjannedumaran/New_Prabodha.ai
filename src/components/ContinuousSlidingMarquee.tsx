import React from 'react';
import { Sparkles } from 'lucide-react';

interface ContinuousSlidingMarqueeProps {
  className?: string;
}

export const ContinuousSlidingMarquee: React.FC<ContinuousSlidingMarqueeProps> = ({
  className = '',
}) => {
  const items = [
    { label: 'UPSC CSE', concept: 'Constitutional Basic Structure Axiom' },
    { label: 'RBI Grade B', concept: 'Monetary Transmission & Yield Curves' },
    { label: 'GATE CS', concept: 'Turing Decidability & Diagonal Contradiction' },
    { label: 'CAT Analytics', concept: 'Combinatorial Symmetry & Overcounting Correction' },
    { label: 'SSC CGL', concept: 'Euclidean Geometric Invariants & Modular Numbers' },
    { label: 'AI Systems', concept: 'Transformer Latent Geometry & High-Dim Spaces' },
    { label: 'State PSC', concept: 'Fiscal Federalism & Public Administration Ethics' },
    { label: 'Distributed Systems', concept: 'CAP Invariant & Asynchronous State Consistency' },
  ];

  // Repeat for continuous seamless marquee loop
  const marqueeList = [...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-4 select-none ${className}`}>
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FCFBFE] dark:from-[#0B0A0F] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FCFBFE] dark:from-[#0B0A0F] to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-4">
        {marqueeList.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-[#14121E]/80 backdrop-blur-xs border border-[#EAE7EF] dark:border-[#272535] text-xs shadow-soft-xs hover:border-[#7550C8]/50 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8]" />
            <span className="font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase text-[10px]">
              {item.label}
            </span>
            <span className="text-[#19171F] dark:text-[#E2E8F0] font-light">
              {item.concept}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

