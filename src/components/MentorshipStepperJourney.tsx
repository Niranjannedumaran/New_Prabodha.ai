import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Activity, GitBranch, Gauge, Zap, CheckCircle2, ArrowRight, Target, Clock } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface MentorshipStep {
  step: string;
  num: number;
  title: string;
  tag: string;
  metric: string;
  description: string;
  icon: React.ElementType;
  diagnosticItems: string[];
  simulationData: {
    badge: string;
    headline: string;
    detail: string;
    visualType: 'radar' | 'retention' | 'topology' | 'fatigue' | 'action';
    metricValue: string;
    metricLabel: string;
  };
}

const MENTORSHIP_STEPS: MentorshipStep[] = [
  {
    step: '01',
    num: 1,
    title: 'Goal Discovery & Trajectory Audit',
    tag: 'Trajectory Calibration',
    metric: 'Horizon: 18 Months • Confidence: 94%',
    description: 'Clarifying the target examination, academic milestone, or career trajectory without false pressure.',
    icon: Compass,
    diagnosticItems: [
      'Deconstructs target exam into structural subject invariants',
      'Filters out vanity milestones and establishes realistic calendar timelines',
      'Aligns your existing undergraduate background with exam paper strengths',
    ],
    simulationData: {
      badge: 'Cognitive Architecture Diagnostic',
      headline: 'Target Trajectory Formulation',
      detail: 'Maps your personal starting line against historical qualification percentiles across UPSC, RBI, and GATE.',
      visualType: 'radar',
      metricValue: '18 Months',
      metricLabel: 'Optimal Strategic Horizon',
    },
  },
  {
    step: '02',
    num: 2,
    title: 'Cognitive Baseline Audit',
    tag: 'Zero-Shame Diagnostic',
    metric: 'Misconception Clusters: 3 Isolated',
    description: 'Diagnosing baseline cognitive mastery without judgment, false anxiety, or artificial rankings.',
    icon: Activity,
    diagnosticItems: [
      'Detects whether wrong answers stem from calculation slips or faulty premises',
      'Isolates hidden conceptual blind-spots before they compound into anxiety',
      'Generates a calibrated conceptual heat-map without comparative peer pressure',
    ],
    simulationData: {
      badge: 'Misconception Heat-Map',
      headline: 'Memory Trace Retention Comparison',
      detail: 'Standard rote formulas decay rapidly (Ebbinghaus forgetting curve). First-principles invariants maintain 88%+ recall.',
      visualType: 'retention',
      metricValue: '88.4%',
      metricLabel: 'Invariant Retention Rate vs 22% Rote',
    },
  },
  {
    step: '03',
    num: 3,
    title: 'High-Yield Opportunity Mapping',
    tag: 'Curriculum Topology',
    metric: 'Yield Leverage: 12x Coverage',
    description: 'Pinpoints high-leverage conceptual invariants that unlock multi-step problem solving across papers.',
    icon: GitBranch,
    diagnosticItems: [
      'Maps exponential compounding invariants across quantitative papers',
      'Unlocks fiscal policy multipliers for UPSC GS Paper 3 economics',
      'Connects formal automata theory to algorithmic complexity in GATE',
    ],
    simulationData: {
      badge: 'Invariant Network Topology',
      headline: 'Conceptual Multiplier Node',
      detail: 'Mastering 1 core structural invariant unlocks 28 past examination variations without separate memorization.',
      visualType: 'topology',
      metricValue: '1 : 28',
      metricLabel: 'Invariant to Problem Ratio',
    },
  },
  {
    step: '04',
    num: 4,
    title: 'Dynamic Milestone Calibration',
    tag: 'Fatigue & Pacing Engine',
    metric: 'Pacing: Dynamically Balanced',
    description: 'Preparation pacing adapts dynamically based on comprehension speed, retention decay, and cognitive fatigue.',
    icon: Gauge,
    diagnosticItems: [
      'Monitors retention decay using spaced retrieval intervals',
      'Automatically redistributes heavy syllabus modules when fatigue spikes',
      'Protects intellectual calm and sleep schedules for sustainable peak performance',
    ],
    simulationData: {
      badge: 'Fatigue & Cognitive Load Sensor',
      headline: 'Dynamic Load Rebalancing',
      detail: 'Monitors cognitive strain indicators and redistributes syllabus blocks to prevent academic burnout.',
      visualType: 'fatigue',
      metricValue: '34% Peak',
      metricLabel: 'Sustainable Cognitive Load Index',
    },
  },
  {
    step: '05',
    num: 5,
    title: 'Immediate Intentional Action',
    tag: 'Execution Engine',
    metric: 'Active Focus: 25 Min Deep-Work',
    description: 'Always provides one clear, manageable next step so you never stare at an overwhelming syllabus.',
    icon: Zap,
    diagnosticItems: [
      'Targeted 25-minute Socratic deconstruction of one concept',
      'Immediate feedback on root-cause deductions without solution dumping',
      'Instant milestone checklist update upon conceptual breakthrough',
    ],
    simulationData: {
      badge: 'Deep-Work Execution Module',
      headline: 'Next High-Leverage Study Action',
      detail: 'No ambiguity. No choice paralysis. Exactly one concept to master in the next 25 minutes with AI scaffolding.',
      visualType: 'action',
      metricValue: '25 Mins',
      metricLabel: 'Targeted Socratic Focus Block',
    },
  },
];

export const MentorshipStepperJourney: React.FC<{ onLaunchMentorship?: () => void }> = ({ onLaunchMentorship }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStep = MENTORSHIP_STEPS[activeIdx];

  return (
    <div className="space-y-8">
      
      {/* Top Header Bar - Clean Architecture Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#13111F] border border-[#E2D9F3] dark:border-[#272439] shadow-soft-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#16131F] dark:text-white uppercase tracking-wider">
            Autonomous 5-Stage Cognitive Guidance Architecture
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#77727F] dark:text-[#9A95A8]">
          <span className="px-2.5 py-1 rounded-full bg-[#F5F1FD] dark:bg-[#1E192E] text-[#7550C8] dark:text-[#B99CFF] font-semibold">
            Stage {activeStep.step} of 05 Active
          </span>
        </div>
      </div>

      {/* Main Grid: Left interactive milestone cards, Right visual diagnostic canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 5 Clean Cards (Zero Timer, Zero Underline) */}
        <div className="lg:col-span-5 space-y-3 relative">
          
          {/* Subtle connected vertical guide */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#7550C8]/30 via-[#DDD2F7]/25 to-transparent -z-0" />

          {MENTORSHIP_STEPS.map((item, idx) => {
            const isSelected = activeIdx === idx;
            const Icon = item.icon;

            return (
              <SpotlightCard
                key={item.step}
                onClick={() => setActiveIdx(idx)}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border relative z-10 ${
                  isSelected
                    ? 'bg-white dark:bg-[#181528] border-[#7550C8] shadow-soft ring-1 ring-[#7550C8]/20'
                    : 'bg-[#FAF8FE] dark:bg-[#13111E] border-[#E2D9F3] dark:border-[#242234] hover:border-[#7550C8]/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {/* Step Icon Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-[#7550C8] text-white shadow-soft-xs'
                          : 'bg-[#F2EDFB] dark:bg-[#201C31] text-[#7550C8] dark:text-[#B99CFF]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold">
                          Stage {item.step}
                        </span>
                        <span className="text-[10px] font-mono text-[#77727F] dark:text-[#8E8A9B]">
                          • {item.tag}
                        </span>
                      </div>
                      <div className={`text-xs sm:text-sm font-bold tracking-tight ${isSelected ? 'text-[#16131F] dark:text-white' : 'text-[#555060] dark:text-[#A7A3B4]'}`}>
                        {item.title}
                      </div>
                    </div>
                  </div>

                  {/* Clean active indicator dot */}
                  {isSelected && (
                    <motion.div
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full bg-[#7550C8] shrink-0"
                    />
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Right Column: Sliding Living Diagnostic Simulation Canvas */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-9 rounded-3xl bg-white dark:bg-[#141220] border border-[#E2D9F3] dark:border-[#272439] shadow-soft space-y-6">
            
            {/* Stage Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EAE7EF] dark:border-[#252236]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
                  {activeStep.simulationData.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#16131F] dark:text-white">
                  {activeStep.title}
                </h3>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-[#F7F3FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382D57] text-right">
                <div className="text-xs sm:text-sm font-mono font-bold text-[#7550C8] dark:text-[#D4C3FF]">
                  {activeStep.simulationData.metricValue}
                </div>
                <div className="text-[9px] font-mono text-[#77727F] dark:text-[#9A95A8] uppercase">
                  {activeStep.simulationData.metricLabel}
                </div>
              </div>
            </div>

            {/* Sliding Visual Simulation Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                <p className="text-sm text-[#555060] dark:text-[#CBD5E1] font-light leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Rich Code-Driven Visual Interactive Telemetry Widget */}
                <div className="p-5 rounded-2xl bg-[#F8F6FD] dark:bg-[#191629] border border-[#E2D9F3] dark:border-[#2A263E] space-y-4">
                  
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#16131F] dark:text-white flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#7550C8]" />
                      {activeStep.simulationData.headline}
                    </span>
                    <span className="text-[#7550C8] dark:text-[#B99CFF] text-[11px]">
                      Live Diagnostic Stream
                    </span>
                  </div>

                  {/* Dynamic Simulation Content */}
                  {activeStep.num === 1 && (
                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#77727F]">Foundation Phase (Axiom Mapping)</span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">100% Calibrated</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#EAE7EF] dark:bg-[#28233C] overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-full" />
                      </div>

                      <div className="flex items-center justify-between text-xs pt-2">
                        <span className="text-[#77727F]">Multi-Paper Invariant Synthesis</span>
                        <span className="font-mono font-bold text-[#7550C8]">78% Projected</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#EAE7EF] dark:bg-[#28233C] overflow-hidden">
                        <div className="h-full bg-[#7550C8] rounded-full w-[78%]" />
                      </div>
                    </div>
                  )}

                  {activeStep.num === 2 && (
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40">
                        <div className="text-[10px] font-mono uppercase text-rose-600 dark:text-rose-400 font-bold mb-1">
                          Rote Memorization Decay
                        </div>
                        <div className="text-xl font-mono font-bold text-rose-700 dark:text-rose-300">
                          -78% in 14d
                        </div>
                        <p className="text-[11px] text-rose-800/80 dark:text-rose-300/70 mt-1">
                          Formulas vanish under exam anxiety.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-50/70 dark:bg-[#261E3B] border border-purple-200/60 dark:border-[#4B3B6D]">
                        <div className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#D4C3FF] font-bold mb-1">
                          Prabodha Invariant Recall
                        </div>
                        <div className="text-xl font-mono font-bold text-[#7550C8] dark:text-white">
                          88.4% Retained
                        </div>
                        <p className="text-[11px] text-[#51349A] dark:text-[#C5B4EB] mt-1">
                          Root causes remain permanent.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep.num === 3 && (
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#201C31] border border-[#E2D9F3] dark:border-[#332B4C] flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold text-[#16131F] dark:text-white">
                          Central Invariant Multiplier Node
                        </div>
                        <p className="text-[11px] text-[#77727F] dark:text-[#A7A3B4]">
                          1 Core Theorem &rarr; 28 Past Exam Paper Variations Solved
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span
                            key={i}
                            className="w-2 h-2 rounded-full bg-[#7550C8]"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep.num === 4 && (
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#77727F]">Cognitive Strain Balance</span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">Optimal Zone</span>
                      </div>
                      <div className="h-10 rounded-xl bg-white dark:bg-[#1E192D] border border-[#EAE7EF] dark:border-[#2F2746] flex items-center justify-around px-3">
                        {[20, 45, 75, 60, 35, 50, 70, 40, 25, 55, 65, 30].map((val, i) => (
                          <div
                            key={i}
                            className="w-1.5 bg-[#7550C8] rounded-full"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep.num === 5 && (
                    <div className="p-4 rounded-xl bg-white dark:bg-[#201B33] border border-[#DDD2F7] dark:border-[#3C2F58] flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#7550C8]" />
                        <div>
                          <div className="text-xs font-bold text-[#16131F] dark:text-white">
                            25-Minute Single-Concept Sprint
                          </div>
                          <div className="text-[11px] text-[#77727F] dark:text-[#A7A3B4]">
                            Zero ambiguity. Pure focus on one high-yield invariant.
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#7550C8] text-white text-[11px] font-mono font-bold shrink-0">
                        Ready
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-[#77727F] dark:text-[#9490A0] italic">
                    {activeStep.simulationData.detail}
                  </p>
                </div>

                {/* 3 Key Operational Principles */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#77727F] dark:text-[#8E8A9B] font-bold block">
                    Automated Diagnostic Protocols:
                  </span>
                  {activeStep.diagnosticItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#16131F] dark:text-[#E2DFEB]">
                      <CheckCircle2 className="w-4 h-4 text-[#7550C8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#252236] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-[#77727F] dark:text-[#9490A0]">
                    Autonomous calibration runs 24/7 across every study session.
                  </span>

                  {onLaunchMentorship && (
                    <button
                      onClick={onLaunchMentorship}
                      className="px-4 py-2 rounded-full bg-[#16131F] dark:bg-white text-white dark:text-[#16131F] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                    >
                      <span>Explore Mentorship Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>

          </SpotlightCard>
        </div>

      </div>

    </div>
  );
};
