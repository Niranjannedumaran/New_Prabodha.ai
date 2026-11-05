import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Compass, Brain, Layers } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const IntroducingPrabodha: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'graph' | 'radar' | 'companion'>('graph');
  const shouldReduceMotion = useReducedMotion();

  const conceptualPillars = [
    {
      id: 'graph' as const,
      label: 'Knowledge Graph',
      tagline: 'From isolated lessons to interconnected understanding',
      description:
        'Instead of disjointed chapter PDFs, ideas are organized into organic knowledge graphs showing conceptual prerequisites, real-world analogies, and multi-disciplinary links.',
      status: 'Interconnected Foundations',
      features: ['Contextual concept mapping', 'Cross-discipline links', 'Visual prerequisite clarity'],
      svgVisual: (
        <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
          <line x1="40" y1="40" x2="100" y2="30" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <line x1="100" y1="30" x2="160" y2="50" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <line x1="40" y1="40" x2="70" y2="100" stroke="#7652C8" strokeWidth="1.5" opacity="0.4" />
          <line x1="100" y1="30" x2="140" y2="110" stroke="#7652C8" strokeWidth="1.5" opacity="0.4" />
          <line x1="70" y1="100" x2="140" y2="110" stroke="#9B74F3" strokeWidth="1.5" opacity="0.7" />

          <circle cx="40" cy="40" r="10" fill="#EDE7FA" stroke="#7652C8" strokeWidth="2" />
          <circle cx="100" cy="30" r="14" fill="#7652C8" />
          <circle cx="160" cy="50" r="9" fill="#13A8FF" />
          <circle cx="70" cy="100" r="11" fill="#9B74F3" />
          <circle cx="140" cy="110" r="12" fill="#EDE7FA" stroke="#9B74F3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'radar' as const,
      label: 'Opportunity Radar',
      tagline: 'Bridging curiosity with emerging real-world pathways',
      description:
        'Connects what you learn with real industry domains, creative projects, and personal exploration goals rather than generic test scores.',
      status: 'Curiosity Navigation',
      features: ['Dynamic pathway exploration', 'Skill relevance mapping', 'Curiosity-led roadmaps'],
      svgVisual: (
        <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
          <circle cx="100" cy="70" r="55" stroke="#7652C8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="100" cy="70" r="35" stroke="#7652C8" strokeWidth="1" opacity="0.5" />
          <circle cx="100" cy="70" r="15" stroke="#7652C8" strokeWidth="1" opacity="0.7" />
          <polygon points="100,25 145,80 65,95 75,45" fill="#7652C8" fillOpacity="0.25" stroke="#9B74F3" strokeWidth="1.5" />
          <circle cx="100" cy="70" r="4" fill="#13A8FF" />
        </svg>
      ),
    },
    {
      id: 'companion' as const,
      label: 'Socratic Companion',
      tagline: 'Supportive guidance tailored to how you think',
      description:
        'An adaptive companion that does not just answer questions, but sparks deeper inquiry, asks clarifying prompts, and celebrates incremental progress.',
      status: 'Active Scaffolding',
      features: ['Socratic inquiry prompts', 'Adaptive pacing cues', 'Encouragement at roadblocks'],
      svgVisual: (
        <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
          <circle cx="100" cy="70" r="45" stroke="#7652C8" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.5" />
          <circle cx="100" cy="70" r="28" fill="#EDE7FA" stroke="#7652C8" strokeWidth="1" />
          <circle cx="100" cy="70" r="8" fill="#7652C8" />
          <circle cx="70" cy="55" r="5" fill="#9B74F3" />
          <circle cx="130" cy="55" r="5" fill="#9B74F3" />
          <path d="M 85 85 Q 100 95 115 85" stroke="#7652C8" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
  ];

  const currentPillar = conceptualPillars.find((p) => p.id === activeTab) || conceptualPillars[0];

  return (
    <section id="platform" className="py-20 sm:py-28 md:py-36 bg-white dark:bg-[#0A090F] border-b border-[#E8E1F5] dark:border-[#221B30] transition-colors duration-300 relative overflow-hidden isolate">
      
      {/* Background radial accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none -z-0 opacity-40 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(118, 82, 200, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] border border-[#DDD2F7] dark:border-[#382658] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>PLATFORM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase text-[#17151D] dark:text-white tracking-tight leading-[1.08] mb-5">
            What is Prabodha AI <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              building towards?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            We are designing an interconnected learning ecosystem where curiosity-led research, foundation concepts, and real career trajectories reinforce one another.
          </p>
        </div>

        {/* Conceptual Product Preview Canvas */}
        <div className="bg-[#FAF8FE] dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-xl overflow-hidden">
          
          {/* Top M3 Control Bar */}
          <div className="bg-white dark:bg-[#1A1428] border-b border-[#E8E1F5] dark:border-[#2A203E] px-5 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 w-full md:w-auto">
              <span className="w-3 h-3 rounded-full bg-rose-400/90" />
              <span className="w-3 h-3 rounded-full bg-amber-400/90" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
              <span className="ml-2 text-xs font-medium text-[#85818D] dark:text-white/60">
                Prabodha Interactive Learning Sandbox
              </span>
            </div>

            {/* M3 Segmented Navigation Chips */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1ECF6] dark:bg-[#14101F] rounded-full border border-[#E8E1F5] dark:border-[#2A203E]">
              {conceptualPillars.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap active:scale-[0.96] transition-all duration-150 ${
                    activeTab === tab.id
                      ? 'bg-[#7652C8] text-white shadow-sm'
                      : 'text-[#85818D] dark:text-white/60 hover:text-[#17151D] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#552AA8] dark:text-[#EDE7FA] bg-[#EDE7FA] dark:bg-[#251A3A] px-3.5 py-1 rounded-full font-semibold hidden lg:block border border-[#DDD2F7] dark:border-[#382658]">
              {currentPillar.status}
            </div>
          </div>

          {/* Interactive Conceptual Visualization Body with Smooth Transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] tracking-wider uppercase">
                  {currentPillar.label}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17151D] dark:text-white tracking-tight leading-snug">
                  {currentPillar.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/80 leading-relaxed font-light">
                  {currentPillar.description}
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  {currentPillar.features.map((feat) => (
                    <div
                      key={feat}
                      className="p-3 rounded-2xl bg-white dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-[#17151D] dark:text-white/90">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href="#sessions"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7652C8] dark:text-[#EDE7FA] hover:text-[#552AA8] transition-all"
                  >
                    <span>Explore corresponding curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Stage */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-[320px] aspect-square rounded-3xl bg-white dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-sm p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(118,82,200,0.08)_0%,transparent_70%)]" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {currentPillar.svgVisual}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
