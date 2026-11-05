import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface OurVisionProps {
  onOpenContact: () => void;
}

export const OurVision: React.FC<OurVisionProps> = ({ onOpenContact }) => {
  const [activeVector, setActiveVector] = useState<number>(0);

  const vectors = [
    {
      title: 'Autonomous Trajectory',
      desc: 'Learners steering their own curiosity rather than being constrained by static syllabi.',
      stage: '01 / Directional Clarity',
      metric: 'Self-Determined Pacing',
    },
    {
      title: 'Cognitive Mentorship',
      desc: 'Intelligent AI companions providing real-time Socratic inquiry at every cognitive bottleneck.',
      stage: '02 / Adaptive Scaffolding',
      metric: 'First-Principles Guidance',
    },
    {
      title: 'Holistic Capability',
      desc: 'Connecting fundamental conceptual theory with practical real-world leverage.',
      stage: '03 / Continuous Evolution',
      metric: 'Lifelong Adaptability',
    },
  ];

  return (
    <section id="vision" className="relative py-24 sm:py-32 md:py-40 bg-[#0E0C16] text-white overflow-hidden select-none">
      
      {/* Precision architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wide text-[#EDE7FA] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B395F7]" />
            <span>VISION & LONG-TERM HORIZON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-wide font-black text-white tracking-tight leading-[1.08] uppercase mb-4">
            Building for a <br />
            world that <br />
            <span className="font-editorial italic lowercase font-normal tracking-normal text-[#EDE7FA] editorial-underline">
              never stops evolving.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mt-6 leading-relaxed font-sans font-light">
            Our vision is to make intelligent, accessible, and engaging learning experiences available to everyone. We imagine a future where discovering knowledge, exploring opportunities, and developing personal capabilities feel deeply connected rather than separate.
          </p>
        </div>

        {/* 2-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Milestone Navigation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold text-[#B395F7] tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B395F7] animate-pulse" />
              <span>STRATEGIC MILESTONES</span>
            </div>

            {vectors.map((vec, i) => {
              const isActive = activeVector === i;
              return (
                <div
                  key={vec.stage}
                  onClick={() => setActiveVector(i)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'bg-white/10 border-[#7652C8] shadow-[0_0_30px_rgba(118,82,200,0.25)]'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="text-xs text-white/60 mb-2 flex items-center justify-between">
                    <span className="font-semibold text-[#EDE7FA]">{vec.stage}</span>
                    <span className="text-[#B395F7] text-xs font-semibold">{vec.metric}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center justify-between">
                    <span>{vec.title}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#B395F7]' : 'text-white/40'}`} />
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {vec.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-[#7652C8] hover:bg-[#643EBA] active:scale-[0.97] text-white rounded-full text-xs font-semibold transition-all duration-150 shadow-soft"
              >
                Join our research initiative
              </button>

              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B395F7]" />
                Building with long-term responsibility
              </span>
            </div>
          </div>

          {/* Right Column: Material Design 3 Conceptual Ecosystem Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#151221] border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Top Ecosystem Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-white font-semibold">PRABODHA LEARNING ECOSYSTEM</span>
                </div>
                <span className="text-[#B395F7] font-medium">Interconnected Model</span>
              </div>

              {/* Ecosystem Diagram */}
              <div className="relative aspect-[16/10] w-full bg-[#0E0C16] rounded-2xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                
                {/* Background coordinate grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                {/* Vector Diagram Geometry */}
                <div className="relative z-10 grid grid-cols-3 gap-4 h-full items-center">
                  
                  {/* Node 1: Curiosity */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-[#7652C8]/40 text-center">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#7652C8]/25 flex items-center justify-center text-[#EDE7FA] mb-2 text-xs font-bold">
                      01
                    </div>
                    <div className="text-xs font-bold text-white">Curiosity Ingestion</div>
                    <div className="text-[10px] text-white/60 mt-1">Open Questions</div>
                  </div>

                  {/* Connecting Arrow */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-[#7652C8] to-[#13A8FF] relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#13A8FF] rotate-45" />
                    </div>
                    <span className="text-[10px] text-white/50 mt-1.5 uppercase font-medium">Socratic Synthesis</span>
                  </div>

                  {/* Node 2: Capability */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-[#13A8FF]/40 text-center">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#13A8FF]/20 flex items-center justify-center text-[#13A8FF] mb-2 text-xs font-bold">
                      02
                    </div>
                    <div className="text-xs font-bold text-white">Real Impact</div>
                    <div className="text-[10px] text-white/60 mt-1">Personal Leverage</div>
                  </div>

                </div>

                {/* Bottom Status Ticker */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span>Core Principle: Potential has no syllabus.</span>
                  <span className="text-[#B395F7] font-semibold">Continuous Adaptation</span>
                </div>

              </div>

              {/* Sub-caption */}
              <div className="mt-4 text-xs text-white/50 leading-relaxed">
                * Interconnected learning architecture bridging fundamental conceptual thinking with real-world capability.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
