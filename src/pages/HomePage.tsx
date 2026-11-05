import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Brain,
  Layers,
  Cpu,
  Target,
  FileText,
  Compass,
  TrendingUp,
  BarChart3,
  Calendar,
  Zap,
  BookOpen,
  HelpCircle,
  Clock,
  ShieldCheck,
  Check,
  Scale,
  Play,
  RotateCcw,
  Sliders,
  Activity,
  Terminal,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandEmblem } from '../components/BrandEmblem';
import { SpotlightCard } from '../components/SpotlightCard';
import { HeroSpotlight } from '../components/HeroSpotlight';
import { MagneticButton } from '../components/MagneticButton';
import { AppleHeroShowcase } from '../components/AppleHeroShowcase';
import { SocraticReasoningSandbox } from '../components/SocraticReasoningSandbox';
import { MentorshipStepperJourney } from '../components/MentorshipStepperJourney';
import { NavigationPage } from '../types';
import {
  PRODUCT_PILLARS,
  EXAM_SYSTEMS,
  LEARNING_FEATURES,
  CAREER_TRACKS,
  MENTORSHIP_PILLARS,
  FIRST_PRINCIPLES_PROOFS,
} from '../data/platformData';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  // Socratic Interactive Demonstration State
  const [activeProofIndex, setActiveProofIndex] = useState(0);
  const [activeProofStep, setActiveProofStep] = useState<1 | 2 | 3>(1);

  // Mentorship Interactive Sliding State (Image 1 fix)
  const [activeMentorshipIndex, setActiveMentorshipIndex] = useState(0);

  // Exam Matrix Interactive State (Replaces static image)
  const [activeExamTab, setActiveExamTab] = useState<'upsc-cse' | 'rbi-grade-b' | 'gate-cs' | 'cat-mgmt'>('upsc-cse');

  // Career Trajectory Interactive State (Replaces static image)
  const [activeCareerIndex, setActiveCareerIndex] = useState(0);

  const currentProof = FIRST_PRINCIPLES_PROOFS[activeProofIndex] || FIRST_PRINCIPLES_PROOFS[0];
  const currentCareer = CAREER_TRACKS[activeCareerIndex] || CAREER_TRACKS[0];

  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mentorshipDetails = [
    {
      step: '01',
      title: 'Goal Discovery & Trajectory Audit',
      badge: 'Target Definition',
      metric: 'Exam Scope: 100% Calibrated',
      description: 'Defines your target competitive examination (UPSC, Banking, GATE, CAT) and maps out the complete conceptual breadth without emotional rush.',
      diagnosticItems: [
        'Statutory & constitutional syllabus baseline locked',
        'Longitudinal time horizon established (12 to 18 months)',
        'Core reasoning profile categorized (analytical vs verbal)',
      ],
      insight: 'Clarifying the exact target constraints eliminates 80% of preparation panic before study even begins.',
    },
    {
      step: '02',
      title: 'Current Position & Misconception Audit',
      badge: 'Cognitive Baseline',
      metric: 'Conceptual Friction: Audited',
      description: 'Diagnoses baseline cognitive strengths without shame or false urgency. Identifies where you rely on memorized formulas versus genuine causal intuition.',
      diagnosticItems: [
        'Response latency evaluated across 20 foundational invariant problems',
        'Identifies rote formula dependence in Quantitative Aptitude',
        'Isolates constitutional article confusion from basic structure understanding',
      ],
      insight: 'Exposing hidden faulty premises early prevents months of ineffective, repetitive practice.',
    },
    {
      step: '03',
      title: 'High-Yield Opportunity Mapping',
      badge: 'Curriculum Topology',
      metric: 'Yield Leverage: Maximal',
      description: 'Pinpoints high-leverage conceptual invariants that unlock multi-step problem solving across papers and question types.',
      diagnosticItems: [
        'Maps exponential compounding invariants across commercial math',
        'Unlocks fiscal policy multipliers for UPSC GS Paper 3',
        'Connects formal automata to algorithmic complexity in GATE',
      ],
      insight: 'Mastering 5 foundational invariants renders 150 surface formula variants self-evident.',
    },
    {
      step: '04',
      title: 'Dynamic Milestone Calibration',
      badge: 'Fatigue & Pacing',
      metric: 'Weekly Pacing: Calibrated',
      description: 'Preparation pacing adapts dynamically based on comprehension speed, retention decay, and cognitive fatigue indicators.',
      diagnosticItems: [
        'Monitors memory trace decay using spaced retrieval intervals',
        'Automatically redistributes heavy syllabus modules when fatigue spikes',
        'Protects intellectual calm and sleep schedules for peak mental performance',
      ],
      insight: 'Sustainable pacing over 18 months outperforms erratic cramming sessions every single time.',
    },
    {
      step: '05',
      title: 'Next Intentional Action',
      badge: 'Execution Focus',
      metric: 'Next Module: Ready',
      description: 'Always provides one clear, manageable next step so you never stare at an overwhelming textbook wondering where to begin.',
      diagnosticItems: [
        'Targeted 25-minute Socratic deconstruction of one concept',
        'Immediate feedback on root-cause deductions without solution dumping',
        'Instant milestone checklist update upon conceptual breakthrough',
      ],
      insight: 'Focus on one invariant concept today. The examination will take care of itself.',
    },
  ];

  const currentMentorship = mentorshipDetails[activeMentorshipIndex] || mentorshipDetails[0];

  return (
    <div className="pt-24 pb-20 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#16131F] dark:text-[#F3F2F8] selection:bg-[#EDE6FB] selection:text-[#51349A] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* SECTION 2: HERO — APPLE-STYLE CURVY CARDS SHOWCASE        */}
      {/* ========================================================= */}
      <HeroSpotlight className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Subtle Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#14121E]/90 backdrop-blur-sm border border-[#E4DCF0] dark:border-[#272535] shadow-soft-xs hover:border-[#7550C8]/50 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-xs font-medium text-[#6E6978] dark:text-[#9490A0]">
              The AI Platform for Learning, Exam Intelligence & Career Growth
            </span>
            <BrandEmblem size="sm" animated={true} />
          </motion.div>

          {/* Master Headline with staggered word entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-sans font-extrabold tracking-tight text-[#16131F] dark:text-white leading-[1.06]">
              Think deeper. Learn smarter. <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                Grow further.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-[#6E6978] dark:text-[#9490A0] font-light leading-relaxed max-w-2xl mx-auto"
            >
              Prabodha brings intelligent learning, competitive examination preparation and career guidance together in one calm, AI-powered platform.
            </motion.p>
          </motion.div>

          {/* Primary Actions — Magnetic Hover Effect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <MagneticButton
              onClick={() => handleNav('platform')}
              className="px-7 py-3.5 rounded-full bg-[#16131F] dark:bg-white text-white dark:text-[#16131F] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] dark:hover:text-[#7550C8] text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-soft active:scale-[0.97]"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              onClick={() => {
                const el = document.getElementById('socratic-demo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-full bg-white/90 dark:bg-[#14121E]/90 backdrop-blur-sm hover:bg-[#F7F3FD] dark:hover:bg-[#1C1A29] text-[#16131F] dark:text-[#F3F2F8] text-xs sm:text-sm font-medium border border-[#E4DCF0] dark:border-[#272535] hover:border-[#7550C8]/60 transition-colors duration-200 shadow-soft-xs"
            >
              <Sparkles className="w-4 h-4 text-[#7550C8]" />
              <span>Experience Socratic Demo</span>
            </MagneticButton>
          </motion.div>

          {/* Apple-Style Curvy Bento Cards Showcase (Desktop & Mobile Optimized) */}
          <AppleHeroShowcase
            onExplore={() => handleNav('exams')}
            onSocraticDemo={() => handleNav('learning')}
          />

        </div>
      </HeroSpotlight>

      {/* ========================================================= */}
      {/* SECTION 3: BRAND PHILOSOPHY — CLARITY PATH RIBBON         */}
      {/* ========================================================= */}
      <section className="py-20 bg-white dark:bg-[#100F17] border-y border-[#EAE7EF] dark:border-[#222030]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
              Brand Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
              Understanding changes <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                everything.
              </span>
            </h2>
            <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
              Learning is more than collecting answers. It is the process of questioning, connecting ideas, practising and discovering how knowledge works.
            </p>
          </div>

          {/* THE PRABODHA CLARITY PATH: Interactive Progress System */}
          <SpotlightCard className="bg-[#FCFBFE] dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] p-6 sm:p-10 space-y-8 shadow-soft-sm">
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#77727F] dark:text-[#9490A0] border-b border-[#EAE7EF] dark:border-[#242232] pb-4 gap-2">
              <span className="font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-ping" />
                The Prabodha Clarity Path
              </span>
              <span>Curiosity ➔ Understanding ➔ Practice ➔ Preparation ➔ Growth</span>
            </div>

            {/* Signature Ribbon Art */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#F7F3FD] via-white to-[#F7F3FD] dark:from-[#1A1728] dark:via-[#14121E] dark:to-[#1A1728] p-4 flex items-center justify-center">
              <img
                src="/new-assets/Curiosity to Growth Learning Path.png"
                alt="The Prabodha Clarity Path Ribbon Architecture"
                className="w-full max-h-[260px] object-contain hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Step-by-Step Intellectual Progression with Cursor Spotlight on Each Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {[
                { stage: 'Stage 01', title: 'Curiosity', desc: 'Framing genuine causal inquiries instead of memorizing surface statements.' },
                { stage: 'Stage 02', title: 'Understanding', desc: 'Deconstructing problems down to bedrock premises and physical invariants.' },
                { stage: 'Stage 03', title: 'Application', desc: 'Testing models under altered boundary conditions to solidify neural pathways.' },
                { stage: 'Stage 04', title: 'Growth & Agency', desc: 'Translating verified intellectual competence into long-term career capability.' },
              ].map((step, idx) => (
                <SpotlightCard
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#171524] border border-[#EAE7EF] dark:border-[#29263A] space-y-2 hover:border-[#7550C8]/40 transition-colors"
                >
                  <span className="text-[10px] font-mono text-[#7550C8] dark:text-[#B99CFF] font-bold uppercase">{step.stage}</span>
                  <h4 className="text-sm font-bold text-[#19171F] dark:text-white">{step.title}</h4>
                  <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </SpotlightCard>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: CONNECTED PLATFORM (THE FOUR PILLARS)          */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#FCFBFE] dark:bg-[#0B0A0F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
              Unified Intelligence Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
              One platform. <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                Different paths forward.
              </span>
            </h2>
            <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
              Whether you're preparing for an examination, exploring a difficult concept or planning your next career step, Prabodha brings intelligent guidance into one connected experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCT_PILLARS.map((pillar) => (
              <SpotlightCard
                key={pillar.id}
                onClick={() => handleNav(pillar.route as NavigationPage)}
                className="p-8 rounded-3xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] hover:border-[#7550C8]/60 shadow-soft-xs hover:shadow-soft transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#B99CFF]">
                      Pillar {pillar.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#77727F] group-hover:text-[#7550C8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold text-[#19171F] dark:text-white group-hover:text-[#7550C8] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-[#EAE7EF] dark:border-[#232132]">
                    {pillar.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="text-xs text-[#77727F] dark:text-[#9490A0] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-[#7550C8] dark:text-[#B99CFF]">
                  <span>Explore Pillar Capabilities</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: SOCRATIC AI DEMO (LIVING SANDBOX WITH ONGOING MOTION) */}
      {/* ========================================================= */}
      <section id="socratic-demo" className="py-20 sm:py-24 bg-white/70 dark:bg-[#100F17] border-y border-[#E4DCF0] dark:border-[#222030] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Interactive Socratic Demonstration
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#16131F] dark:text-white leading-[1.08]">
              Don't just receive answers. <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                Understand why.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6978] dark:text-[#9490A0] font-light leading-relaxed">
              Explore an active learning experience built around counter-inquiries, causal deduction and permanent cognitive retention.
            </p>
          </div>

          {/* Socratic Living Sandbox Component (Fixes Photo 3 Flat Box) */}
          <SocraticReasoningSandbox onExploreSuite={() => handleNav('learning')} />

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: COMPETITIVE EXAM INTELLIGENCE (LIVE CODE UI!)  */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#FCFBFE] dark:bg-[#0B0A0F]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
              Pillar 01 • Exam Topology & Analytics
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
              Prepare with a clearer <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                understanding of the journey.
              </span>
            </h2>
            <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
              Explore examination requirements, organise preparation, practise important concepts and identify where your understanding needs more attention.
            </p>
          </div>

          {/* Living Code-Driven Exam Matrix (Replaces flat photo) */}
          <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] shadow-soft space-y-8">
            
            {/* Exam Selector Tabs with Sliding Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE7EF] dark:border-[#242232] pb-4">
              <div className="flex items-center gap-2 overflow-x-auto p-1 rounded-full bg-[#F5F4F7] dark:bg-[#1A1826] border border-[#EAE7EF] dark:border-[#29263A]">
                {[
                  { id: 'upsc-cse', label: 'UPSC Civil Services' },
                  { id: 'rbi-grade-b', label: 'RBI Grade B' },
                  { id: 'gate-cs', label: 'GATE Computing' },
                  { id: 'cat-mgmt', label: 'CAT Analytics' },
                ].map((item) => {
                  const isActive = activeExamTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveExamTab(item.id as any)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-[#77727F] dark:text-[#9490A0] hover:text-[#19171F] dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeExamTabPill"
                          className="absolute inset-0 rounded-full bg-[#7550C8]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                Live Syllabus Topology Active
              </span>
            </div>

            {/* Interactive Exam Topology Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#FCFBFE] dark:bg-[#181625] border border-[#EAE7EF] dark:border-[#29263A] space-y-3">
                <span className="text-[10px] font-mono uppercase text-[#7550C8] font-bold">Topology Node 01</span>
                <h4 className="text-sm font-bold text-[#19171F] dark:text-white">Constitutional Basic Structure</h4>
                <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light">
                  Axiomatic anchors linking Part III rights with judicial review and separation of powers.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#77727F]">
                  <span>Historical Yield: High</span>
                  <span className="text-emerald-500 font-bold">Verified Invariant</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FCFBFE] dark:bg-[#181625] border border-[#EAE7EF] dark:border-[#29263A] space-y-3">
                <span className="text-[10px] font-mono uppercase text-[#7550C8] font-bold">Topology Node 02</span>
                <h4 className="text-sm font-bold text-[#19171F] dark:text-white">Macro-Fiscal Policy Multipliers</h4>
                <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light">
                  Causal linkages between interest rate transmission, public capital capex, and inflation dynamics.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#77727F]">
                  <span>Difficulty: High Order</span>
                  <span className="text-emerald-500 font-bold">Verified Invariant</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FCFBFE] dark:bg-[#181625] border border-[#EAE7EF] dark:border-[#29263A] space-y-3">
                <span className="text-[10px] font-mono uppercase text-[#7550C8] font-bold">Topology Node 03</span>
                <h4 className="text-sm font-bold text-[#19171F] dark:text-white">Administrative Ethics & Case Studies</h4>
                <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light">
                  Multi-stakeholder ethical dilemma frameworks designed for GS Paper 4 decision models.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#77727F]">
                  <span>Evaluation: Socratic</span>
                  <span className="text-emerald-500 font-bold">Verified Invariant</span>
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#77727F]">
                Access 15 years of structured question deconstruction and syllabus topologies.
              </span>
              <button
                onClick={() => handleNav('exams')}
                className="px-6 py-2.5 rounded-full bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] hover:bg-[#7550C8] text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <span>Explore All Examination Dossiers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </SpotlightCard>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: CAREER INTELLIGENCE (INTERACTIVE RADAR UI)     */}
      {/* ========================================================= */}
      <section className="py-24 bg-white dark:bg-[#100F17] border-y border-[#EAE7EF] dark:border-[#222030]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
              Pillar 03 • Career Intelligence
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
              Turn what you know into <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                where you can go.
              </span>
            </h2>
            <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
              Understand your current skills, explore career directions and discover practical steps towards your professional goals.
            </p>
          </div>

          {/* Living Code-Driven Career Trajectory Interface (Replaces flat photo) */}
          <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-[#FCFBFE] dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] shadow-soft space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE7EF] dark:border-[#242232] pb-4">
              <div className="flex items-center gap-2 overflow-x-auto p-1 rounded-full bg-white dark:bg-[#1A1826] border border-[#EAE7EF] dark:border-[#29263A]">
                {CAREER_TRACKS.map((track, i) => {
                  const isActive = activeCareerIndex === i;

                  return (
                    <button
                      key={track.id}
                      onClick={() => setActiveCareerIndex(i)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-[#77727F] dark:text-[#9490A0] hover:text-[#19171F] dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCareerPill"
                          className="absolute inset-0 rounded-full bg-[#7550C8]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{track.title.split('&')[0].trim()}</span>
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                Trajectory Competency Matrix
              </span>
            </div>

            {/* Active Career Detail Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-[#7550C8] uppercase font-bold">
                  {currentCareer.domain}
                </span>
                <h3 className="text-2xl font-bold text-[#19171F] dark:text-white">
                  {currentCareer.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
                  {currentCareer.overview}
                </p>

                <div className="p-4 rounded-xl bg-white dark:bg-[#181625] border border-[#EAE7EF] dark:border-[#29263A] text-xs text-[#19171F] dark:text-[#F3F2F8]">
                  <strong>Market Reality:</strong> {currentCareer.marketReality}
                </div>
              </div>

              {/* Animated Competency Bars */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#181625] border border-[#EAE7EF] dark:border-[#29263A] space-y-4">
                <span className="text-xs font-mono uppercase text-[#77727F] font-bold block">
                  Core Competency Benchmark Weights
                </span>

                {currentCareer.competencyPillars.map((pillar, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#19171F] dark:text-white">{pillar.name}</span>
                      <span className="text-[10px] font-mono text-[#7550C8] font-semibold bg-[#F7F3FD] dark:bg-[#25203A] px-2 py-0.5 rounded">
                        {pillar.proficiency}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F5F4F7] dark:bg-[#201D2C] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${85 + i * 5}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#7550C8] to-[#9B74F3] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232] flex items-center justify-between text-xs">
              <span className="text-[#77727F]">
                Inspect production capstone specifications and skill-gap audits.
              </span>
              <button
                onClick={() => handleNav('careers')}
                className="font-bold text-[#7550C8] dark:text-[#B99CFF] flex items-center gap-1 hover:underline"
              >
                <span>Launch Career Intelligence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </SpotlightCard>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: AI MENTORSHIP (LIVING JOURNEY STEPPER COMPONENT) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#FAF8FE]/80 dark:bg-[#0B0A0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 04 • Autonomous AI Mentorship
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#16131F] dark:text-white leading-[1.08]">
              Progress needs <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                direction.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6978] dark:text-[#9490A0] font-light leading-relaxed">
              Define meaningful goals, inspect diagnostic data, and execute high-yield study actions with personalized AI guidance.
            </p>
          </div>

          {/* Living Interactive 5-Stage Stepper (Fixes Photo 1 Flat List) */}
          <MentorshipStepperJourney onLaunchMentorship={() => handleNav('mentorship')} />

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: CLOSING INVITATION (BALANCED SHOWCASE)        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8FE] dark:bg-[#100F17] border-t border-[#E4DCF0] dark:border-[#222030] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SpotlightCard className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/90 dark:bg-[#151221]/90 border border-[#DDD2F7] dark:border-[#2D2A42] shadow-[0_12px_40px_-6px_rgba(117,80,200,0.12)] relative overflow-hidden">
            
            {/* Subtle radial glow background */}
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-[450px] h-[450px] bg-gradient-to-tl from-[#7550C8]/15 via-[#EDE6FB]/20 to-transparent rounded-full blur-3xl -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Headline, Description, Actions */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1FD] dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7550C8] dark:text-[#B99CFF] font-bold">
                    Begin Your Journey
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#16131F] dark:text-white leading-[1.08]">
                  Your next step starts with <br />
                  <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                    understanding.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#595466] dark:text-[#9490A0] font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Discover a calmer, more connected approach to competitive examination preparation, Socratic concept mastery, and long-term career growth. Grounded strictly in first principles.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <button
                    onClick={() => handleNav('platform')}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#16131F] dark:bg-white text-white dark:text-[#16131F] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs sm:text-sm font-semibold transition-all shadow-soft active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    <span>Explore the Platform</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white dark:bg-[#1A1629] text-[#16131F] dark:text-[#F3F2F8] text-xs sm:text-sm font-medium border border-[#E2D9F3] dark:border-[#322A4A] hover:border-[#7550C8] transition-all shadow-soft-xs flex items-center justify-center gap-2"
                  >
                    <span>Contact & Inquiries</span>
                  </button>
                </div>

                {/* 3 micro-trust items */}
                <div className="pt-3 border-t border-[#EAE7EF] dark:border-[#252236] flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] font-mono text-[#77727F] dark:text-[#9A95A8]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Socratic Guided Scaffolding</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Zero Rote Memorization</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Autonomous Calibration</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Mascot Showcase prominently centered */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
                {/* Radiant backdrop blur ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7550C8]/20 via-[#B99CFF]/15 to-transparent rounded-full blur-2xl -z-0" />

                <div className="relative w-56 sm:w-72 lg:w-80 max-w-full">
                  <img
                    src="/new-assets/Triumphant Student and Robot Mascot.png"
                    alt="Prabodha Triumphant Student and Socratic Robot Mascot"
                    className="w-full h-auto object-contain animate-float-slow filter drop-shadow-xl select-none"
                    loading="lazy"
                  />

                  {/* Floating Achievement Capsule */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-2 -left-2 sm:left-0 bg-white/95 dark:bg-[#1C182B]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#DDD2F7] dark:border-[#3A2E59] shadow-soft flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-[#16131F] dark:text-white">
                      Invariant Mastered • 100% Retained
                    </span>
                  </motion.div>
                </div>
              </div>

            </div>

          </SpotlightCard>

        </div>
      </section>

    </div>
  );
};
