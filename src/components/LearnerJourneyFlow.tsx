import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sparkles, Brain, Compass, Rocket, CheckCircle2, Play, Pause, RotateCcw, ArrowRight } from 'lucide-react';

interface JourneyStep {
  id: number;
  stage: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  pedagogy: string;
  metric: string;
  simulation: {
    inputLabel: string;
    inputText: string;
    aiResponseLabel: string;
    aiResponseText: string;
    actionLabel: string;
  };
}

export const LearnerJourneyFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const shouldReduceMotion = useReducedMotion();

  const steps: JourneyStep[] = [
    {
      id: 0,
      stage: 'Step 01',
      title: 'First-Principles Deconstruction',
      badge: 'Unlearn Rote Memory',
      icon: Brain,
      description:
        'Instead of forcing you to memorize complex formulas or benchmark checklists, Prabodha strips concepts down to fundamental, intuitive building blocks.',
      pedagogy: 'Break complex ideas into intuitive visual and mechanical primitives before touching formulas or code.',
      metric: '92% higher conceptual retention',
      simulation: {
        inputLabel: 'Conventional Friction',
        inputText: '"I have to memorize dozens of mathematical formulas and neural loss functions for an exam."',
        aiResponseLabel: 'First-Principles Shift',
        aiResponseText:
          'Loss is simply measuring the distance between where a ball rolled and where you intended it to go. Once you see it as error distance and gravity, the math becomes self-evident.',
        actionLabel: 'Deconstruct Concept',
      },
    },
    {
      id: 1,
      stage: 'Step 02',
      title: 'Socratic Dialogue & Guided Inquiry',
      badge: 'Active Cognitive Discovery',
      icon: Sparkles,
      description:
        'When you hit a roadblock, your companion does not spoon-feed you answers. It asks thoughtful questions and provides intuitive analogies so you synthesize the insight yourself.',
      pedagogy: 'Enduring understanding happens through productive inquiry, not passive absorption.',
      metric: '3.4x faster problem resolution',
      simulation: {
        inputLabel: 'Learner Exploration',
        inputText: '"Why do large language models hallucinate if they have seen trillions of words?"',
        aiResponseLabel: 'Socratic Guidance',
        aiResponseText:
          'Think of a poet reciting verses from memory in a dim room. If they forget one line, do they freeze in silence, or do they improvise words that match the rhythm perfectly?',
        actionLabel: 'Explore Reasoning Path',
      },
    },
    {
      id: 2,
      stage: 'Step 03',
      title: 'Interconnected Skill Synthesis',
      badge: 'Connect The Dots',
      icon: Compass,
      description:
        'Knowledge exists in interconnected graphs, not isolated silos. Prabodha links fundamental mathematics, software systems, and creative design into cohesive capability.',
      pedagogy: 'Defensible creative leverage lives at the intersection of two or more distinct disciplines.',
      metric: 'Multi-Discipline Skill Graph',
      simulation: {
        inputLabel: 'Core Concept Links',
        inputText: 'Linear Algebra Matrices ➔ Spatial Embedding Latents ➔ Multimodal AI Systems',
        aiResponseLabel: 'Intuitive Synthesis',
        aiResponseText:
          'Transforming numbers into spatial vectors unlocks how AI perceives semantic meaning in text, audio pitch, and visual images all within the exact same geometry.',
        actionLabel: 'Inspect Concept Graph',
      },
    },
    {
      id: 3,
      stage: 'Step 04',
      title: 'Autonomous Capability & Real Impact',
      badge: 'Real-World Leverage',
      icon: Rocket,
      description:
        'Translate conceptual confidence into real-world capability. Chart personalized pathways into emerging technology domains and multidisciplinary frontiers.',
      pedagogy: 'Your potential has no syllabus. Move from a passive student to an empowered, autonomous creator.',
      metric: 'Career Readiness Index',
      simulation: {
        inputLabel: 'Target Career Pathway',
        inputText: 'AI Systems Architect • Research Engineer • Computational Designer',
        aiResponseLabel: 'Mastery Outcome',
        aiResponseText:
          'Equipped with first-principles comprehension, you navigate rapid shifts in technology without fear of obsolescence. You understand how systems are constructed from the ground up.',
        actionLabel: 'Launch Learning Pathway',
      },
    },
  ];

  // Auto-advance loop when playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section
      id="journey"
      className="py-20 sm:py-28 md:py-36 bg-[#F7F4FC] dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 relative overflow-hidden isolate border-b border-[#E8E1F5] dark:border-[#221B30]"
    >
      {/* Background radial violet atmosphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none -z-0 opacity-40 dark:opacity-25"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(118, 82, 200, 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#552AA8] dark:text-[#DDD2F7] bg-[#EDE7FA] dark:bg-[#251A3A] border border-[#DDD2F7] dark:border-[#382658] px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
              <span>THE LEARNER USER FLOW</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase text-[#17151D] dark:text-white tracking-tight leading-[1.08]">
              How you transform <br />
              <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
                from rote to mastery.
              </span>
            </h2>
          </div>

          {/* Interactive Playback Controls */}
          <div className="flex items-center gap-2 bg-white dark:bg-[#181424] p-1.5 rounded-full border border-[#E8E1F5] dark:border-[#2E2442] shadow-soft-sm self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#7652C8] dark:text-[#EDE7FA] hover:bg-[#EDE7FA] dark:hover:bg-[#2A203F] active:scale-[0.95] transition-all duration-120"
              aria-label={isPlaying ? 'Pause interactive journey' : 'Play interactive journey'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Auto-Advancing' : 'Play Flow'}</span>
            </button>

            <button
              onClick={() => {
                setActiveStep(0);
                setIsPlaying(false);
              }}
              className="p-2 rounded-full text-[#85818D] hover:text-[#17151D] dark:hover:text-white hover:bg-[#F7F4FC] dark:hover:bg-[#201B30] active:scale-[0.92] transition-all duration-120"
              title="Reset flow to beginning"
              aria-label="Reset journey to step 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4-Step Material Design 3 Interactive Progression Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {steps.map((s, index) => {
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;
            const Icon = s.icon;

            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(index);
                  setIsPlaying(false);
                }}
                className={`relative p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-white dark:bg-[#181424] border-[#7652C8] shadow-soft-lg ring-2 ring-[#7652C8]/20'
                    : isCompleted
                    ? 'bg-white/80 dark:bg-[#14101F]/80 border-[#DDD2F7] dark:border-[#2A223B]'
                    : 'bg-white/50 dark:bg-[#14101F]/50 border-[#E8E1F5] dark:border-[#221B30] hover:border-[#C2ACF1]'
                }`}
              >
                {/* Active step indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeFlowIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#7652C8] rounded-t-2xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#7652C8] dark:text-[#EDE7FA]">
                    {s.stage}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#7652C8] text-white shadow-sm'
                        : isCompleted
                        ? 'bg-[#EDE7FA] dark:bg-[#251A3A] text-[#7652C8] dark:text-[#EDE7FA]'
                        : 'bg-[#F7F4FC] dark:bg-[#1B162B] text-[#85818D]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-bold text-[#17151D] dark:text-white line-clamp-1 mb-1">
                  {s.title}
                </div>

                <div className="text-[11px] text-[#85818D] dark:text-white/60 font-light line-clamp-1">
                  {s.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Journey Simulation Stage */}
        <div className="bg-white dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-xl overflow-hidden">
          
          {/* Stage Header */}
          <div className="px-6 py-4 bg-[#F7F4FC] dark:bg-[#1A1428] border-b border-[#E8E1F5] dark:border-[#2A203E] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-[#17151D] dark:text-white">
                {current.stage}: {current.title}
              </span>
            </div>

            <div className="text-xs font-semibold text-[#552AA8] dark:text-[#EDE7FA] bg-[#EDE7FA] dark:bg-[#251A3A] border border-[#DDD2F7] dark:border-[#382658] px-3.5 py-1 rounded-full">
              {current.metric}
            </div>
          </div>

          {/* Animated Stage Body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8 }
              }
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Conceptual Journey Explanation */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#EDE7FA] text-xs font-semibold">
                  <StepIcon className="w-3.5 h-3.5" />
                  <span>{current.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17151D] dark:text-white tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/80 leading-relaxed font-light">
                  {current.description}
                </p>

                <div className="p-4 rounded-2xl bg-[#F7F4FC] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] text-xs text-[#302044] dark:text-[#EDE7FA] leading-relaxed">
                  <span className="font-semibold text-[#7652C8] dark:text-[#B395F7] block mb-1">
                    Pedagogical Insight:
                  </span>
                  {current.pedagogy}
                </div>
              </div>

              {/* Right Column: Interactive Simulation Preview Card */}
              <div className="lg:col-span-7">
                <div className="p-5 sm:p-7 rounded-2xl bg-[#FAF8FE] dark:bg-[#181226] border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-sm space-y-5">
                  
                  {/* Step Input Bubble */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#85818D] dark:text-white/50 uppercase tracking-wide mb-1.5">
                      {current.simulation.inputLabel}
                    </div>
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1F1730] border border-[#E8E1F5] dark:border-[#2E2442] text-xs sm:text-sm text-[#17151D] dark:text-white/90 italic">
                      {current.simulation.inputText}
                    </div>
                  </div>

                  {/* Socratic Response Bubble */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#7652C8] dark:text-[#B395F7] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{current.simulation.aiResponseLabel}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#EDE7FA]/80 dark:bg-[#251A3A]/90 border border-[#DDD2F7] dark:border-[#382658] text-xs sm:text-sm text-[#2B125C] dark:text-[#EDE7FA] leading-relaxed font-light">
                      {current.simulation.aiResponseText}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#85818D] dark:text-white/50 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Step validated by Prabodha curriculum
                    </span>
                    <a
                      href="#sessions"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7652C8] dark:text-[#EDE7FA] hover:text-[#552AA8] active:scale-[0.97] transition-all"
                    >
                      <span>{current.simulation.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
