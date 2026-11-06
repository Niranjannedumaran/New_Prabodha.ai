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
import { IndustryMarquee } from '../components/IndustryMarquee';
import { SocraticReasoningSandbox } from '../components/SocraticReasoningSandbox';
import { MentorshipStepperJourney } from '../components/MentorshipStepperJourney';
import { HeroIntelligenceUniverse } from '../components/svg-motion/HeroIntelligenceUniverse';
import { PrabodhaClarityPath } from '../components/svg-motion/PrabodhaClarityPath';
import { SocraticReasoningGraphic } from '../components/svg-motion/SocraticReasoningGraphic';
import { ExamTopologyGraphic } from '../components/svg-motion/ExamTopologyGraphic';
import { CareerTrajectoryGraphic } from '../components/svg-motion/CareerTrajectoryGraphic';
import { MentorshipDialogueGraphic } from '../components/svg-motion/MentorshipDialogueGraphic';
import { EditorialProblemSection } from '../components/EditorialProblemSection';
import { CompanyVisionSection } from '../components/CompanyVisionSection';
import { LearnerJourneyFlow } from '../components/LearnerJourneyFlow';
import { FAQ } from '../components/FAQ';
import { useSound } from '../context/SoundContext';
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
  const { playTick, playPop, playCrystal } = useSound();

  // Socratic Interactive Demonstration State
  const [activeProofIndex, setActiveProofIndex] = useState(0);
  const [activeProofStep, setActiveProofStep] = useState<1 | 2 | 3>(1);

  // Mentorship Interactive Sliding State (Image 1 fix)
  const [activeMentorshipIndex, setActiveMentorshipIndex] = useState(0);

  // Exam Matrix Interactive State (Replaces static image)
  const [activeExamTab, setActiveExamTab] = useState<'upsc-cse' | 'rbi-grade-b' | 'gate-cs' | 'cat-mgmt'>('upsc-cse');

  // Interactive Live Examination Topology Matrix for Section 6
  const TOPOLOGY_MATRIX = {
    'upsc-cse': {
      examName: 'UPSC Civil Services (IAS, IPS & IFS)',
      paperTrack: 'GS Papers 1, 2, 3 & 4 + CSAT Foundation',
      metrics: '15 Years Past Papers Vectorized • 94.2% Invariant Convergence',
      nodes: [
        {
          nodeNum: '01',
          tag: 'GS Paper 2 • Constitutional Law',
          title: 'Constitutional Basic Structure Axiom',
          theorem: 'Kesavananda Bharati Invariant',
          desc: 'Constituent amending power under Art 368 vs bedrock constitutional identity. Unlocks 28 historical analytical question variants.',
          yieldVal: '94% Past Paper Yield',
          difficulty: 'Bedrock Invariant',
          latency: '~35s First-Principles Derivation',
        },
        {
          nodeNum: '02',
          tag: 'GS Paper 3 • Macroeconomics',
          title: 'Macro-Fiscal Policy Multipliers',
          theorem: 'IS-LM & Credit Transmission Dynamics',
          desc: 'Causal transmission from policy repo rate adjustments to capex multipliers, public debt sustainability, and structural inflation.',
          yieldVal: '88% Past Paper Yield',
          difficulty: 'Causal Multi-Variable',
          latency: '~42s First-Principles Derivation',
        },
        {
          nodeNum: '03',
          tag: 'GS Paper 4 • Ethics & Governance',
          title: 'Administrative Ethics & Deontology',
          theorem: 'Public Interest Fiduciary Invariant',
          desc: 'Multi-stakeholder ethical dilemma resolution without procedural shortcuts. Balancing administrative rigidity with public welfare.',
          yieldVal: '91% Past Paper Yield',
          difficulty: 'Socratic Evaluation',
          latency: '~50s First-Principles Derivation',
        },
      ],
    },
    'rbi-grade-b': {
      examName: 'RBI Grade B (Phase 2 Specialization)',
      paperTrack: 'Economic & Social Issues + Finance & Management',
      metrics: '12 Years Regulatory Examination Papers • 96.4% Quantitative Yield',
      nodes: [
        {
          nodeNum: '01',
          tag: 'Finance • Sovereign Debt Markets',
          title: 'Yield Curve Dynamics & Term Premia',
          theorem: 'Expectations Hypothesis vs Liquidity Risk',
          desc: 'Explaining why 10-year sovereign yields decline during tightening cycles through forward rate anticipation and duration risk hedging.',
          yieldVal: '96% Past Paper Yield',
          difficulty: 'Quantitative Macro',
          latency: '~38s First-Principles Derivation',
        },
        {
          nodeNum: '02',
          tag: 'Banking • Prudential Regulation',
          title: 'Basel III Capital Adequacy & CRR/SLR',
          theorem: 'Counter-Cyclical Buffer Axiom',
          desc: 'Risk-Weighted Assets (RWA), Tier 1 capital ratios, and systemic liquidity buffers under macroeconomic credit shock scenarios.',
          yieldVal: '92% Past Paper Yield',
          difficulty: 'Prudential Systems',
          latency: '~40s First-Principles Derivation',
        },
        {
          nodeNum: '03',
          tag: 'Management • Organizational Theory',
          title: 'Corporate Governance & Agency Conflicts',
          theorem: 'Fiduciary Stewardship Invariant',
          desc: 'Resolving principal-agent friction, asymmetric information in corporate credit underwriting, and independent board oversight ethics.',
          yieldVal: '89% Past Paper Yield',
          difficulty: 'Organizational Invariant',
          latency: '~44s First-Principles Derivation',
        },
      ],
    },
    'gate-cs': {
      examName: 'GATE Computer Science & Information Technology',
      paperTrack: 'Theory of Computation, Algorithms & Operating Systems',
      metrics: '20 Years GATE Papers Vectorized • 98.1% Formal Proof Precision',
      nodes: [
        {
          nodeNum: '01',
          tag: 'Theory of Computation • Automata',
          title: 'Turing Decidability & Diagonalization',
          theorem: 'Halting Problem Non-Decidability Limit',
          desc: 'Self-referential adversarial logic proving fundamental boundaries of computation. Solves undecidability reduction questions directly.',
          yieldVal: '98% Past Paper Yield',
          difficulty: 'Formal Automata Proof',
          latency: '~30s First-Principles Derivation',
        },
        {
          nodeNum: '02',
          tag: 'Algorithms • Complexity Theory',
          title: 'Asymptotic Recurrence & Master Invariant',
          theorem: 'Divide-and-Conquer Complexity Bounds',
          desc: 'Bounding continuous recurrence trees without rote memorization of edge cases by tracking subproblem leaf-level work.',
          yieldVal: '95% Past Paper Yield',
          difficulty: 'Asymptotic Rigor',
          latency: '~28s First-Principles Derivation',
        },
        {
          nodeNum: '03',
          tag: 'Operating Systems • Concurrency',
          title: 'Deadlock Invariants & Dining Philosophers',
          theorem: 'Coffman 4-Condition Simultaneous Truth',
          desc: 'Proving circular wait elimination and mutual exclusion invariants across distributed locks without race conditions or starvation.',
          yieldVal: '93% Past Paper Yield',
          difficulty: 'Concurrent State Systems',
          latency: '~36s First-Principles Derivation',
        },
      ],
    },
    'cat-mgmt': {
      examName: 'CAT Analytics & Quantitative Aptitude',
      paperTrack: 'Quantitative Aptitude (QA) & Data Interpretation (DILR)',
      metrics: '14 Years IIM Examination Papers • 97.2% Analytical Speed Leverage',
      nodes: [
        {
          nodeNum: '01',
          tag: 'Quantitative Aptitude • Modern Math',
          title: 'Combinatorial Symmetry & Permutations',
          theorem: 'Positional Division Symmetry Invariant',
          desc: 'Dividing arrangements by positional symmetries eliminates 90% of counting errors without memorizing brittle surface formulas.',
          yieldVal: '97% Past Paper Yield',
          difficulty: 'Analytical Symmetry',
          latency: '~25s First-Principles Derivation',
        },
        {
          nodeNum: '02',
          tag: 'Decision Sciences • Probability',
          title: 'Bayesian Conditional Probability Chains',
          theorem: 'Inverse Probability Theorem',
          desc: 'Updating prior probabilities into posterior certainty under sequential diagnostic tests and imperfect information matrices.',
          yieldVal: '94% Past Paper Yield',
          difficulty: 'Bayesian Inference',
          latency: '~32s First-Principles Derivation',
        },
        {
          nodeNum: '03',
          tag: 'DILR • Logical Games',
          title: 'Matrix Optimization & Network Flow',
          theorem: 'Constraint Satisfaction Axiom',
          desc: 'Deducing binary seating grids and tournament elimination brackets by identifying unshared unique attributes under strict constraints.',
          yieldVal: '92% Past Paper Yield',
          difficulty: 'Constraint Deduction',
          latency: '~35s First-Principles Derivation',
        },
      ],
    },
  };

  const currentExamTopology = TOPOLOGY_MATRIX[activeExamTab] || TOPOLOGY_MATRIX['upsc-cse'];

  // Career Trajectory Interactive State (Replaces static image)
  const [activeCareerIndex, setActiveCareerIndex] = useState(0);

  const currentProof = FIRST_PRINCIPLES_PROOFS[activeProofIndex] || FIRST_PRINCIPLES_PROOFS[0];
  const currentCareer = CAREER_TRACKS[activeCareerIndex] || CAREER_TRACKS[0];

  const handleNav = (page: NavigationPage) => {
    playTick(920, 0.03);
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
  const [activePillarVisual, setActivePillarVisual] = useState<'exams' | 'learning' | 'careers' | 'mentorship'>('exams');

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

          {/* Master Kinetic Headline with masked word reveals */}
          <div className="space-y-5 max-w-4xl mx-auto pt-2">
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-sans font-black tracking-tight text-[#110E1B] dark:text-white leading-[1.04]">
              <span className="inline-block overflow-hidden align-top mr-2 sm:mr-3">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Learn.
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden align-top mr-2 sm:mr-3">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Prepare.
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden align-top mr-2 sm:mr-3">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-[#7550C8] dark:text-[#B99CFF]"
                >
                  Grow.
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden align-top">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block font-editorial italic font-normal text-[#8E5CFF] dark:text-[#D4BFFC]"
                >
                  Evolve.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base sm:text-lg text-[#555060] dark:text-[#A7A3B4] font-normal leading-relaxed max-w-2xl mx-auto"
            >
              An AI-powered platform for intelligent learning, competitive examination preparation and career growth. Grounded in first-principles Socratic reasoning, not rote memorization.
            </motion.p>
          </div>

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

          {/* Hero Intelligence Universe — Advanced SVG Motion Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4 pb-2"
          >
            <HeroIntelligenceUniverse />
          </motion.div>

          {/* Apple-Style Curvy Bento Cards Showcase (Desktop & Mobile Optimized) */}
          <AppleHeroShowcase
            onExplore={() => handleNav('exams')}
            onSocraticDemo={() => handleNav('learning')}
          />

        </div>
      </HeroSpotlight>

      {/* ========================================================= */}
      {/* SIDEWAYS MOVING CONTINUOUS CURRICULUM MARQUEE              */}
      {/* ========================================================= */}
      <IndustryMarquee className="max-w-7xl mx-auto my-2 sm:my-6 px-3 sm:px-6" />

      {/* ========================================================= */}
      {/* SECTION 03: THE STRUCTURAL PROBLEM (EDITORIAL ASYMMETRY)  */}
      {/* ========================================================= */}
      <EditorialProblemSection />

      {/* ========================================================= */}
      {/* SECTION 04: PRABODHA'S APPROACH — CLARITY PATH PIPELINE   */}
      {/* ========================================================= */}
      <PrabodhaClarityPath />

      {/* ========================================================= */}
      {/* SECTION 4: CONNECTED PLATFORM (THE FOUR PILLARS)          */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#F5F2FA] dark:bg-[#0B0A0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Unified Intelligence Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
              One platform. <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                Different paths forward.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
              Whether you're preparing for an examination, exploring a difficult concept or planning your next career step, Prabodha brings intelligent guidance into one connected experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {PRODUCT_PILLARS.map((pillar) => (
              <SpotlightCard
                key={pillar.id}
                onClick={() => handleNav(pillar.route as NavigationPage)}
                className="p-7 sm:p-9 rounded-[32px] sm:rounded-[36px] bg-white dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] hover:border-[#7550C8]/60 shadow-[0_8px_30px_rgba(117,80,200,0.06)] hover:shadow-soft transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#B99CFF]">
                      Pillar {pillar.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#77727F] group-hover:text-[#7550C8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold text-[#110E1B] dark:text-white group-hover:text-[#7550C8] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-[#EAE7EF] dark:border-[#232132]">
                    {pillar.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="text-xs text-[#383347] dark:text-[#CBD5E1] flex items-center gap-2">
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

          {/* Interactive Motion Architecture of the 4 Pillars */}
          <div className="mt-12 sm:mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/80 dark:bg-[#141220]/80 border border-[#E2D9F3] dark:border-[#282238] backdrop-blur-md">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
                  Live Motion Vector Architecture
                </span>
                <h4 className="text-base font-bold text-[#110E1B] dark:text-white">
                  Inspect the Socratic & Cognitive Engines in Real Time
                </h4>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F5F2FA] dark:bg-[#1C182E] border border-[#E2D9F3] dark:border-[#2D2644] overflow-x-auto">
                {[
                  { id: 'exams', label: '01 Exam Topology' },
                  { id: 'learning', label: '02 Socratic Reasoning' },
                  { id: 'careers', label: '03 Career Lattice' },
                  { id: 'mentorship', label: '04 Pacing Wave' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePillarVisual(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap ${
                      activePillarVisual === tab.id
                        ? 'bg-[#7550C8] text-white shadow-soft-xs'
                        : 'text-[#555060] dark:text-[#9A95A8] hover:text-[#110E1B] dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Render Selected Dynamic SVG Motion Graphic */}
            <AnimatePresence mode="wait">
              {activePillarVisual === 'exams' && (
                <motion.div
                  key="exams-graphic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExamTopologyGraphic />
                </motion.div>
              )}
              {activePillarVisual === 'learning' && (
                <motion.div
                  key="learning-graphic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SocraticReasoningGraphic />
                </motion.div>
              )}
              {activePillarVisual === 'careers' && (
                <motion.div
                  key="careers-graphic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CareerTrajectoryGraphic />
                </motion.div>
              )}
              {activePillarVisual === 'mentorship' && (
                <motion.div
                  key="mentorship-graphic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MentorshipDialogueGraphic />
                </motion.div>
              )}
            </AnimatePresence>
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
      {/* SECTION 07: THE LEARNER JOURNEY (FIRST-PRINCIPLES FLOW)   */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8FE] dark:bg-[#0B0912] border-b border-[#E4DCF0] dark:border-[#222030]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LearnerJourneyFlow />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 08: COMPANY VISION & INSTITUTIONAL DIRECTION       */}
      {/* ========================================================= */}
      <CompanyVisionSection onNavigateToPlatform={() => handleNav('platform')} />

      {/* ========================================================= */}
      {/* SECTION 09: COMPETITIVE EXAM INTELLIGENCE (LIVE CODE UI!) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24 bg-[#F5F2FA] dark:bg-[#0B0A0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 01 • Exam Topology & Analytics
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
              Prepare with a clearer <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                understanding of the journey.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
              Explore examination requirements, organise preparation, practise important concepts and identify where your understanding needs more attention.
            </p>
          </div>

          {/* Living Code-Driven Exam Matrix: Apple Squircle Card */}
          <SpotlightCard className="p-6 sm:p-10 rounded-[32px] sm:rounded-[36px] bg-white dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-[0_8px_30px_rgba(117,80,200,0.06)] space-y-8">
            
            {/* Exam Selector Tabs with Sliding Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE7EF] dark:border-[#242232] pb-4">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto p-1 rounded-full bg-[#F5F1FD] dark:bg-[#1A1826] border border-[#E2D9F3] dark:border-[#29263A] max-w-full">
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
                      className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'text-[#484255] dark:text-[#9490A0] hover:text-[#110E1B] dark:hover:text-white'
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

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#B99CFF]">
                  {currentExamTopology.metrics}
                </span>
              </div>
            </div>

            {/* Active Track Title & Scope Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-[#FAF8FE] dark:bg-[#191629] border border-[#E3DAF2] dark:border-[#2D2543]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold block">
                  Active Examination Scope
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#110E1B] dark:text-white">
                  {currentExamTopology.examName}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#585366] dark:text-[#A7A3B4] font-semibold">
                {currentExamTopology.paperTrack}
              </span>
            </div>

            {/* Interactive Exam Topology Breakdown: Truly Dynamic Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExamTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
              >
                {currentExamTopology.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl sm:rounded-3xl bg-[#FAF8FE] dark:bg-[#181625] border border-[#E3DAF2] dark:border-[#29263A] space-y-3.5 flex flex-col justify-between hover:border-[#7550C8]/60 transition-colors shadow-xs"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold">
                          Topology Node {node.nodeNum}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/40">
                          {node.yieldVal}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-[#585366] dark:text-[#9A95A8] block">
                        {node.tag}
                      </span>

                      <h4 className="text-base font-bold text-[#110E1B] dark:text-white tracking-tight">
                        {node.title}
                      </h4>

                      <div className="text-xs font-editorial italic text-[#7550C8] dark:text-[#D5C2FF] font-medium">
                        &ldquo;{node.theorem}&rdquo;
                      </div>

                      <p className="text-xs text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE7EF] dark:border-[#272438] flex items-center justify-between text-[11px] font-mono text-[#585366] dark:text-[#A7A3B4]">
                      <span>{node.difficulty}</span>
                      <span className="text-[#7550C8] dark:text-[#B99CFF] font-semibold">{node.latency}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#383347] dark:text-[#CBD5E1]">
                Access 15 years of structured question deconstruction and syllabus topologies.
              </span>
              <button
                onClick={() => handleNav('exams')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-soft-xs"
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
      <section className="py-20 sm:py-24 bg-white/70 dark:bg-[#100F17] border-y border-[#E4DCF0] dark:border-[#222030] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 03 • Career Intelligence
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
              Turn what you know into <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                where you can go.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
              Understand your current skills, explore career directions and discover practical steps towards your professional goals.
            </p>
          </div>

          {/* Living Code-Driven Career Trajectory Interface: Apple Squircle Card */}
          <SpotlightCard className="p-6 sm:p-10 rounded-[32px] sm:rounded-[36px] bg-white dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-[0_8px_30px_rgba(117,80,200,0.06)] space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE7EF] dark:border-[#242232] pb-4">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto p-1 rounded-full bg-[#F5F1FD] dark:bg-[#1A1826] border border-[#E2D9F3] dark:border-[#29263A] max-w-full">
                {CAREER_TRACKS.map((track, i) => {
                  const isActive = activeCareerIndex === i;

                  return (
                    <button
                      key={track.id}
                      onClick={() => setActiveCareerIndex(i)}
                      className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'text-[#484255] dark:text-[#9490A0] hover:text-[#110E1B] dark:hover:text-white'
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
                <span className="text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] uppercase font-bold">
                  {currentCareer.domain}
                </span>
                <h3 className="text-2xl font-bold text-[#110E1B] dark:text-white">
                  {currentCareer.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                  {currentCareer.overview}
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF8FE] dark:bg-[#181625] border border-[#E3DAF2] dark:border-[#29263A] text-xs text-[#110E1B] dark:text-[#F3F2F8]">
                  <strong>Market Reality:</strong> {currentCareer.marketReality}
                </div>
              </div>

              {/* Animated Competency Bars */}
              <div className="lg:col-span-5 p-6 rounded-2xl sm:rounded-3xl bg-[#FAF8FE] dark:bg-[#181625] border border-[#E3DAF2] dark:border-[#29263A] space-y-4">
                <span className="text-xs font-mono uppercase text-[#585366] dark:text-[#A7A3B4] font-bold block">
                  Core Competency Benchmark Weights
                </span>

                {currentCareer.competencyPillars.map((pillar, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#110E1B] dark:text-white">{pillar.name}</span>
                      <span className="text-[10px] font-mono text-[#7550C8] dark:text-[#B99CFF] font-semibold bg-[#F2EDFB] dark:bg-[#25203A] px-2 py-0.5 rounded-md">
                        {pillar.proficiency}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#EAE5F5] dark:bg-[#201D2C] overflow-hidden">
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

            <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#383347] dark:text-[#CBD5E1]">
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
      <section className="py-20 sm:py-24 bg-[#F5F2FA] dark:bg-[#0B0A0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 04 • Autonomous AI Mentorship
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
              Progress needs <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                direction.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
              Define meaningful goals, inspect diagnostic data, and execute high-yield study actions with personalized AI guidance.
            </p>
          </div>

          {/* Living Interactive 5-Stage Stepper: Zero Timer, Zero Underline */}
          <MentorshipStepperJourney onLaunchMentorship={() => handleNav('mentorship')} />

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS (ACCESSIBLE ACCORDION) */}
      {/* ========================================================= */}
      <FAQ onOpenContact={onOpenContact} />

      {/* ========================================================= */}
      {/* SECTION 11: CLOSING INVITATION (GROW WITH DIRECTION)       */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F2FA] dark:bg-[#0B0A0F] border-t border-[#E4DCF0] dark:border-[#222030] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SpotlightCard className="p-6 sm:p-12 lg:p-16 rounded-[32px] sm:rounded-[36px] bg-white/95 dark:bg-[#151221]/95 border border-[#E3DAF2] dark:border-[#2D2A42] shadow-[0_12px_45px_rgba(117,80,200,0.08)] relative overflow-hidden">
            
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

                <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
                  Grow with direction. <br />
                  <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                    Master the invariants.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Discover a calmer, more connected approach to competitive examination preparation, Socratic concept mastery, and long-term career growth. Grounded strictly in first principles.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <button
                    onClick={() => handleNav('platform')}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs sm:text-sm font-semibold transition-all shadow-soft active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    <span>Explore the Platform</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white dark:bg-[#1A1629] text-[#110E1B] dark:text-[#F3F2F8] text-xs sm:text-sm font-semibold border border-[#E3DAF2] dark:border-[#322A4A] hover:border-[#7550C8] transition-all shadow-soft-xs flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#7550C8]" />
                    <span>Investor & Academic Inquiries</span>
                  </button>
                </div>

                {/* 3 micro-trust items */}
                <div className="pt-3 border-t border-[#EAE7EF] dark:border-[#252236] flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] font-mono text-[#585366] dark:text-[#A7A3B4]">
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
                    <span>Institutional Alignment</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Mascot Showcase with Grounded Pedestal Dock */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
                {/* Radiant backdrop blur ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7550C8]/20 via-[#B99CFF]/15 to-transparent rounded-full blur-2xl -z-0" />

                <div className="relative w-52 sm:w-72 lg:w-80 max-w-full mx-auto flex flex-col items-center justify-center">
                  <div 
                    className="relative w-full flex items-center justify-center overflow-hidden"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                    }}
                  >
                    <img
                      src="/new-assets/Triumphant Student and Robot Mascot.png"
                      alt="Prabodha Triumphant Student and Socratic Robot Mascot"
                      className="w-full h-auto object-contain animate-float-slow filter drop-shadow-2xl select-none pb-3"
                      loading="lazy"
                    />
                  </div>

                  {/* Grounding Base Dock */}
                  <div className="w-44 sm:w-56 h-2 -mt-1 bg-gradient-to-r from-transparent via-[#7550C8]/30 to-transparent rounded-full blur-xs" />

                  {/* Floating Achievement Capsule */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-2 bg-white/95 dark:bg-[#1C182B]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#DDD2F7] dark:border-[#3A2E59] shadow-soft flex items-center gap-2 relative z-10"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#110E1B] dark:text-white">
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
