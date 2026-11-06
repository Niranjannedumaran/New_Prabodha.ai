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
  ChevronLeft,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandEmblem } from '../components/BrandEmblem';
import { EditorialHeroStage } from '../components/EditorialHeroStage';
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

  // Active Pillar Drawer in Section 05
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [activePillarVisual, setActivePillarVisual] = useState<'exams' | 'learning' | 'careers' | 'mentorship'>('exams');

  // Examination Track Selector for Section 09
  const [activeExamTab, setActiveExamTab] = useState<'upsc-cse' | 'rbi-grade-b' | 'gate-cs' | 'cat-mgmt'>('upsc-cse');

  // Career Track Selector
  const [activeCareerIndex, setActiveCareerIndex] = useState(0);

  const handleNav = (page: NavigationPage) => {
    playTick(920, 0.03);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
  const currentCareer = CAREER_TRACKS[activeCareerIndex] || CAREER_TRACKS[0];

  return (
    <div className="bg-[#09080E] text-white selection:bg-[#7C3AED] selection:text-white transition-colors duration-300 overflow-x-hidden">
      
      {/* ========================================================= */}
      {/* SECTION 01 & 02: MASTER EDITORIAL HERO STAGE              */}
      {/* ========================================================= */}
      <EditorialHeroStage
        onExplore={() => handleNav('platform')}
        onSocraticDemo={() => {
          const el = document.getElementById('socratic-demo');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* ========================================================= */}
      {/* ARCHITECTURAL CURRICULUM MARQUEE TICKER                   */}
      {/* ========================================================= */}
      <div className="border-y border-white/[0.08] bg-[#0E0C16] py-3">
        <IndustryMarquee className="max-w-7xl mx-auto px-4" />
      </div>

      {/* ========================================================= */}
      {/* SECTION 03: THE BOLD BRAND MANIFESTO (TWO26 STYLE)        */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-36 bg-[#0E0D16] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B99CFF] font-bold">
              02 / Brand Philosophy
            </span>
            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-[-0.035em] text-white leading-[1.05] uppercase">
                Traditional coaching teaches answers to memorize. <br />
                <span className="font-editorial italic font-normal text-[#C4B5FD] tracking-normal lowercase">
                  Prabodha builds the minds that derive them.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:pl-6 border-l border-white/[0.08]">
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Competitive examinations like UPSC, RBI Grade B, GATE and CAT are not tests of memory. They are adversarial cognitive environments designed to eliminate candidates who rely on memorized formulas.
              </p>
              <p className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider font-semibold">
                — Ground-Truth Derivation Over Brittle Heuristics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04: THE STRUCTURAL PROBLEM (EDITORIAL ASYMMETRY)  */}
      {/* ========================================================= */}
      <EditorialProblemSection />

      {/* ========================================================= */}
      {/* SECTION 05: PRABODHA'S CONNECTED APPROACH (CLARITY PATH)  */}
      {/* ========================================================= */}
      <PrabodhaClarityPath />

      {/* ========================================================= */}
      {/* SECTION 06: THE FOUR PILLARS (EDITORIAL ARCHITECTURE)     */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-36 bg-[#0E0C17] border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B99CFF] font-bold block">
                04 / The Architectural Pillars
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.05]">
                Four distinct systems. <br />
                <span className="font-editorial italic font-normal text-[#DDD2F7]">
                  One interconnected intelligence core.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-full bg-white/[0.06] border border-white/[0.12] overflow-x-auto">
              {[
                { id: 'exams', label: '01 Exam Topology' },
                { id: 'learning', label: '02 Socratic Reasoning' },
                { id: 'careers', label: '03 Career Lattice' },
                { id: 'mentorship', label: '04 Pacing Wave' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    playTick(960, 0.025);
                    setActivePillarVisual(tab.id as any);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap ${
                    activePillarVisual === tab.id
                      ? 'bg-white text-[#0B0A0F] shadow-soft'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Live Motion Vector Canvas */}
          <div className="rounded-[32px] overflow-hidden border border-white/[0.12] bg-[#13111E] p-2 sm:p-6 shadow-2xl">
            <AnimatePresence mode="wait">
              {activePillarVisual === 'exams' && (
                <motion.div
                  key="exams-graphic"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExamTopologyGraphic />
                </motion.div>
              )}
              {activePillarVisual === 'learning' && (
                <motion.div
                  key="learning-graphic"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <SocraticReasoningGraphic />
                </motion.div>
              )}
              {activePillarVisual === 'careers' && (
                <motion.div
                  key="careers-graphic"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <CareerTrajectoryGraphic />
                </motion.div>
              )}
              {activePillarVisual === 'mentorship' && (
                <motion.div
                  key="mentorship-graphic"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <MentorshipDialogueGraphic />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4 Architectural Rows (Doko Style) */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {PRODUCT_PILLARS.map((pillar, i) => (
              <div 
                key={pillar.id}
                onClick={() => handleNav(pillar.route as NavigationPage)}
                className="py-8 sm:py-10 group cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors hover:bg-white/[0.02] px-4"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="font-mono text-sm font-bold text-[#A855F7] tracking-widest pt-1 sm:pt-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-white/60 max-w-2xl mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end lg:self-auto">
                  <div className="hidden sm:flex items-center gap-2">
                    {pillar.capabilities.slice(0, 2).map((cap, ci) => (
                      <span key={ci} className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/70">
                        {cap}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0B0A0F] group-hover:border-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 07: SOCRATIC LIVING SANDBOX (INTERACTIVE LAB)     */}
      {/* ========================================================= */}
      <section id="socratic-demo" className="py-24 sm:py-36 bg-[#09080E] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B99CFF] font-bold block">
              05 / Interactive Pedagogical Sandbox
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.05]">
              Don't just receive answers. <br />
              <span className="font-editorial italic font-normal text-[#C4B5FD]">
                Derive the invariant proofs.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Explore an active cognitive session. The Socratic engine detects where misconceptions originate, provides surgical counter-examples, and guides the mind to deduce the solution.
            </p>
          </div>

          <SocraticReasoningSandbox onExploreSuite={() => handleNav('learning')} />

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 08: THE LEARNER JOURNEY (5-STAGE PROGRESSION)     */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-36 bg-[#0F0D1A] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LearnerJourneyFlow />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 09: COMPANY VISION & INSTITUTIONAL DIRECTION       */}
      {/* ========================================================= */}
      <CompanyVisionSection onNavigateToPlatform={() => handleNav('platform')} />

      {/* ========================================================= */}
      {/* SECTION 10: COMPETITIVE EXAMINATION DOSSIER MATRIX        */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-36 bg-[#0A090F] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B99CFF] font-bold block">
                07 / Examination Syllabus Topologies
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white">
                Statutory Examination Vectors
              </h2>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/[0.12] overflow-x-auto">
              {[
                { id: 'upsc-cse', label: 'UPSC Civil Services' },
                { id: 'rbi-grade-b', label: 'RBI Grade B' },
                { id: 'gate-cs', label: 'GATE Computing' },
                { id: 'cat-mgmt', label: 'CAT Analytics' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    playTick(960, 0.025);
                    setActiveExamTab(tab.id as any);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap ${
                    activeExamTab === tab.id
                      ? 'bg-white text-[#0B0A0F] shadow-soft'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dossier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentExamTopology.nodes.map((node, ni) => (
              <div 
                key={ni} 
                className="p-8 rounded-[28px] bg-[#141120] border border-white/[0.1] space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-bold text-[#A855F7]">
                      NODE {node.nodeNum}
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      {node.yieldVal}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-white/50 block">
                    {node.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {node.title}
                  </h3>

                  <div className="font-editorial italic text-sm text-[#C4B5FD]">
                    &ldquo;{node.theorem}&rdquo;
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/50">
                  <span>{node.difficulty}</span>
                  <span className="text-[#A855F7] font-semibold">{node.latency}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/70">
            <span>{currentExamTopology.metrics}</span>
            <button
              onClick={() => handleNav('exams')}
              className="text-white hover:text-[#C4B5FD] font-bold flex items-center gap-1 transition-colors"
            >
              <span>Inspect Full Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: COGNITIVE PACING & AI MENTORSHIP STEPPER      */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-36 bg-[#0E0C16] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B99CFF] font-bold block">
              08 / Longitudinal Cognitive Guidance
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.05]">
              Progress requires pacing. <br />
              <span className="font-editorial italic font-normal text-[#C4B5FD]">
                Not solitary exhaustion.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Define statutory milestones, audit diagnostic blindspots, and execute high-yield study workflows with real-time burnout telemetry.
            </p>
          </div>

          <MentorshipStepperJourney onLaunchMentorship={() => handleNav('mentorship')} />

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (ACCESSIBLE)       */}
      {/* ========================================================= */}
      <div className="bg-[#09080E] border-b border-white/[0.08]">
        <FAQ onOpenContact={onOpenContact} />
      </div>

      {/* ========================================================= */}
      {/* SECTION 13: THE MONOLITH FINALE (CLOSING CALL TO ACTION)  */}
      {/* ========================================================= */}
      <section className="py-28 sm:py-40 bg-gradient-to-b from-[#0E0C17] to-[#06050A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="p-8 sm:p-16 lg:p-20 rounded-[40px] bg-[#120F1F] border border-white/[0.12] shadow-2xl relative overflow-hidden">
            <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono font-bold text-[#B99CFF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Begin Ground-Truth Preparation</span>
                </div>

                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-[-0.035em] text-white leading-[0.98] uppercase">
                  Grow with direction. <br />
                  <span className="font-editorial italic font-normal text-[#C4B5FD] lowercase tracking-normal">
                    master the invariants.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl">
                  Step away from memorized formulas and chaotic test series. Discover a disciplined, Socratic path toward competitive examination mastery and institutional placement.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      playPop(520, 0.08);
                      handleNav('platform');
                    }}
                    className="px-8 py-4 rounded-full bg-white text-[#0B0A0F] hover:bg-[#EDE6FB] hover:text-[#6D28D9] text-sm font-bold tracking-tight transition-all shadow-xl active:scale-[0.97] flex items-center justify-center gap-2 group"
                  >
                    <span>Explore the Platform</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      playTick(1100, 0.03);
                      onOpenContact();
                    }}
                    className="px-7 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-semibold border border-white/[0.15] transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#C4B5FD]" />
                    <span>Institutional & Investor Inquiries</span>
                  </button>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-white/50">
                  <span>✓ Socratic Ground-Truth</span>
                  <span>✓ Zero Rote Memorization</span>
                  <span>✓ Formal Invariant Proofs</span>
                </div>
              </div>

              {/* Right Column: Grounded Duo Character Finale */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                <div 
                  className="relative w-64 sm:w-80 max-w-full overflow-hidden"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  }}
                >
                  <img
                    src="/new-assets/Triumphant Student and Robot Mascot.png"
                    alt="Prabodha Triumphant Student and Socratic Robot Mascot"
                    className="w-full h-auto object-contain filter drop-shadow-2xl select-none"
                    loading="lazy"
                  />
                </div>
                <div className="w-48 sm:w-64 h-2 -mt-1 bg-gradient-to-r from-transparent via-[#8E5CFF]/40 to-transparent rounded-full blur-xs" />
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
