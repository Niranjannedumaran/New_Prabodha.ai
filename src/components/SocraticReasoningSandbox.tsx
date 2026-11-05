import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Play, Pause, RotateCcw, CheckCircle2, XCircle, Sparkles, ArrowRight, Activity, Terminal } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface ProofItem {
  id: string;
  domain: string;
  exam: string;
  question: string;
  roteResponse: string;
  roteFlaw: string;
  socraticInquiry: string;
  socraticThoughtAnalogy: string;
  invariantTruth: string;
  leverageFact: string;
}

const SOCRATIC_DATA: ProofItem[] = [
  {
    id: 'upsc',
    domain: 'Constitutional Law',
    exam: 'UPSC Civil Services • GS-2',
    question: 'Can Parliament amend Article 368 to make all constitutional provisions amendable without judicial review?',
    roteResponse: 'Memorise that Kesavananda Bharati case established the Basic Structure doctrine and recite the list of non-amendable features.',
    roteFlaw: 'Fails to explain WHY. Under stress, aspirants confuse constituent power with ordinary legislative power.',
    socraticInquiry: 'Consider the difference between a creator and its created agent. If the Constitution created Parliament under Article 79 and gave it amending power under Article 368, is Parliament the original constituent sovereign, or a delegated creature of the Constitution? Can a delegated agent expand the terms of its own authority to destroy its creator?',
    socraticThoughtAnalogy: 'Can a power of attorney document grant an attorney the right to declare themselves the owner of the client?',
    invariantTruth: 'An amendment power is by definition intra-constitutional, not extra-constitutional. A power to amend the document cannot logically include the power to destroy the foundational axioms that legitimize the amending power itself.',
    leverageFact: 'Mastering this single sovereign-delegation invariant solves 28 past UPSC GS-2 questions on Articles 13, 32, 226, 368, and judicial review.',
  },
  {
    id: 'banking',
    domain: 'Quantitative Sciences',
    exam: 'Banking & RBI Grade B • Phase 2',
    question: 'Why does the difference between Compound Interest and Simple Interest for 2 years equal P · (r / 100)²?',
    roteResponse: 'Memorise formula D = P*(r/100)^2 and plug in numbers blindly with scratch calculations.',
    roteFlaw: 'Pure rote formula. Breaks down instantly on 3-year differences, semi-annual compounding, or variable rates.',
    socraticInquiry: 'In year 1, both simple and compound interest earn interest on what exact sum? Only P. At the beginning of year 2, what NEW amount exists under compound interest that does not exist under simple interest? That new amount is (P · r). What interest does that extra sum earn during year 2? Exactly (P · r) · r. Look at what you just discovered.',
    socraticThoughtAnalogy: 'Compound interest is simply simple interest plus the interest on interest.',
    invariantTruth: 'The difference Δ is solely the interest earned on year 1’s interest. Δ = (P · r) · r = P · r². No algebra memorization required.',
    leverageFact: 'Unlocks all multi-tier compound interest, annuities, and yield curve problems in RBI Grade B Phase 2 without memorizing formulas.',
  },
  {
    id: 'gate',
    domain: 'Theoretical Computer Science',
    exam: 'GATE CS & IT • Algorithms',
    question: 'Why is the Halting Problem undecidable for any Turing machine or general algorithm?',
    roteResponse: 'Memorise that Alan Turing proved undecidability by contradiction in 1936 using a diagonalisation argument.',
    roteFlaw: 'Leaves students helpless when asked about Rice’s Theorem, semantic properties, or reductions.',
    socraticInquiry: 'Suppose a program Halt(P, I) exists that always returns TRUE if P halts on I, and FALSE if it loops. Now let us write a program Adversary(X): if Halt(X, X) says TRUE, Adversary goes into an infinite loop; if Halt(X, X) says FALSE, Adversary halts immediately. What happens when we run Adversary(Adversary)? Can Halt answer TRUE or FALSE without contradicting its own answer?',
    socraticThoughtAnalogy: 'The Barber Paradox: If the barber shaves all men who do not shave themselves, who shaves the barber?',
    invariantTruth: 'Self-referential logical negation: any closed algorithmic system capable of simulating its own code can construct an adversarial input that inverts the decider’s output. Undecidability is an invariant boundary of formal computation.',
    leverageFact: 'Directly unlocks undecidability reductions across formal languages, compiler verification, and Church-Turing limits.',
  },
  {
    id: 'cat',
    domain: 'Combinatorics & Analytics',
    exam: 'CAT • Quantitative Aptitude',
    question: 'Why does C(n, k) equal n! / (k! · (n - k)!) instead of just n! / (n - k)!?',
    roteResponse: 'Memorise the formula nCr = n! / (r! * (n-r)!) and substitute values using paper scratchwork.',
    roteFlaw: 'Students repeatedly confuse arrangements with selections and double-count in probability questions.',
    socraticInquiry: 'When you arrange 3 distinct people into 3 specific roles (President, VP, Treasurer), order matters: there are 3! = 6 unique outcomes. But if you choose 3 people to form a committee where all members are equal, does changing their order produce a new committee? How many times did the arrangement process over-count that identical committee? Exactly 3! times. Why must you divide?',
    socraticThoughtAnalogy: 'Arranging is choosing AND ordering. Selection is simply arrangement corrected for symmetry.',
    invariantTruth: 'C(n, k) is simply the permutation count divided by the k! internal symmetries that have no positional distinction.',
    leverageFact: 'Eliminates 90% of permutations-combinations calculation errors across CAT QA and Data Interpretation.',
  },
];

export const SocraticReasoningSandbox: React.FC<{ onExploreSuite?: () => void }> = ({ onExploreSuite }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeStage, setActiveStage] = useState<number>(3); // 1: Ingestion, 2: Rote Trap, 3: Socratic Dialogue, 4: Invariant
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [autoProgress, setAutoProgress] = useState(0);

  const currentItem = SOCRATIC_DATA[activeTabIdx];

  // Auto-play timer for ongoing animation
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          // Advance stage or tab
          setActiveStage((currStage) => {
            if (currStage < 4) {
              return currStage + 1;
            } else {
              setActiveTabIdx((currTab) => (currTab + 1) % SOCRATIC_DATA.length);
              return 1;
            }
          });
          return 0;
        }
        return prev + 2.5; // ~4 seconds cycle
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
    setActiveStage(3);
    setAutoProgress(0);
  };

  return (
    <SpotlightCard className="rounded-3xl bg-[#FCFBFE] dark:bg-[#12101C] border border-[#EAE7EF] dark:border-[#272535] shadow-soft-lg overflow-hidden">
      
      {/* Top Bar: Telemetry Waveform + Tabs */}
      <div className="px-6 py-4 bg-[#F5F4F7] dark:bg-[#181626] border-b border-[#EAE7EF] dark:border-[#272535] flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Terminal status indicator with ongoing neural pulse */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#110F1B] border border-[#EAE7EF] dark:border-[#2A273D]">
            <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#7550C8] -ml-3.5" />
            <span className="text-[11px] font-mono font-bold text-[#19171F] dark:text-white uppercase tracking-wider">
              Socratic Reasoning Console
            </span>
          </div>

          {/* Ongoing visual animated audio/neural waveform */}
          <div className="hidden sm:flex items-center gap-1 h-4 px-2">
            {[40, 75, 50, 90, 60, 100, 45, 80].map((h, i) => (
              <motion.span
                key={i}
                className="w-1 bg-[#7550C8] dark:bg-[#B99CFF] rounded-full"
                animate={{
                  height: [`${h * 0.3}%`, `${h}%`, `${h * 0.2}%`],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Sliding Domain Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-white dark:bg-[#110F1B] border border-[#EAE7EF] dark:border-[#28253A] overflow-x-auto">
          {SOCRATIC_DATA.map((item, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(idx)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#77727F] dark:text-[#9490A0] hover:text-[#19171F] dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSocraticDomainPill"
                    className="absolute inset-0 rounded-full bg-[#7550C8] shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.domain}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Main Interactive Stage Body */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Exam Context & Question Banner with sliding keyframe */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#171524] border border-[#EAE7EF] dark:border-[#28253A] shadow-soft-xs space-y-2"
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#7550C8] dark:text-[#B99CFF] font-bold">
                {currentItem.exam}
              </span>
              <span className="text-[#77727F] dark:text-[#8E8A9B]">
                Aspirant Inquiry #0{activeTabIdx + 1}
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#19171F] dark:text-white tracking-tight leading-snug">
              &ldquo;{currentItem.question}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Sliding 4-Stage Reasoning Timeline Controls */}
        <div className="p-3 rounded-2xl bg-[#F5F4F7] dark:bg-[#161423] border border-[#EAE7EF] dark:border-[#262338] flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-mono uppercase text-[#77727F] dark:text-[#9490A0] font-bold px-2 hidden sm:inline">
              Cognitive Path:
            </span>
            {[
              { num: 1, label: 'Inquiry' },
              { num: 2, label: 'Rote Trap' },
              { num: 3, label: 'Socratic Inquiry' },
              { num: 4, label: 'Invariant Truth' },
            ].map((st) => {
              const isCurrent = activeStage === st.num;
              return (
                <button
                  key={st.num}
                  onClick={() => {
                    setActiveStage(st.num);
                    setAutoProgress(0);
                  }}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    isCurrent
                      ? 'bg-white dark:bg-[#25203A] text-[#7550C8] dark:text-white shadow-soft-xs border border-[#EAE7EF] dark:border-[#382E55] font-bold'
                      : 'text-[#77727F] dark:text-[#9490A0] hover:text-[#19171F] dark:hover:text-white'
                  }`}
                >
                  <span>{st.num}. {st.label}</span>
                </button>
              );
            })}
          </div>

          {/* Auto-Play Toggle with ongoing progress bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1C182B] border border-[#EAE7EF] dark:border-[#2D2842] text-xs font-mono text-[#19171F] dark:text-[#E2DFEB] hover:border-[#7550C8] transition-colors"
              title={isAutoPlaying ? 'Pause demonstration' : 'Play ongoing demonstration'}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#7550C8]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#7550C8]" />
                  <span>Auto-Demo</span>
                </>
              )}
            </button>
            {isAutoPlaying && (
              <div className="w-16 h-1.5 rounded-full bg-[#EAE7EF] dark:bg-[#2A263D] overflow-hidden">
                <motion.div
                  className="h-full bg-[#7550C8]"
                  style={{ width: `${autoProgress}%` }}
                />
              </div>
            )}
          </div>

        </div>

        {/* Side-by-Side Comparative Cards with Sliding Visual Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card 1: Rote Coaching Method (Red warning accent) */}
          <motion.div
            animate={{
              opacity: activeStage === 2 || activeStage === 3 ? 1 : 0.7,
              scale: activeStage === 2 ? 1.01 : 1,
            }}
            transition={{ duration: 0.25 }}
            className={`p-6 rounded-2xl border transition-all ${
              activeStage === 2
                ? 'bg-rose-50/50 dark:bg-[#1D1218] border-rose-300 dark:border-rose-900/60 shadow-soft-xs'
                : 'bg-white dark:bg-[#151322] border-[#EAE7EF] dark:border-[#272439]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold">
                  Superficial Memorised Approach
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                Decays in 14 Days
              </span>
            </div>

            <p className="text-sm font-medium text-[#19171F] dark:text-[#E2DFEB] leading-relaxed mb-3">
              &ldquo;{currentItem.roteResponse}&rdquo;
            </p>

            <div className="p-3 rounded-xl bg-rose-100/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-xs text-rose-800 dark:text-rose-300">
              <strong className="font-semibold">The Cognitive Flaw:</strong> {currentItem.roteFlaw}
            </div>
          </motion.div>

          {/* Card 2: Prabodha Socratic Scaffolding (Radiant Purple Accent) */}
          <motion.div
            animate={{
              opacity: activeStage === 3 || activeStage === 4 ? 1 : 0.75,
              scale: activeStage === 3 ? 1.01 : 1,
            }}
            transition={{ duration: 0.25 }}
            className={`p-6 rounded-2xl border transition-all ${
              activeStage === 3
                ? 'bg-[#F9F6FE] dark:bg-[#1A152C] border-[#7550C8] shadow-soft'
                : 'bg-white dark:bg-[#151322] border-[#EAE7EF] dark:border-[#272439]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7550C8] dark:text-[#B99CFF]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7550C8] dark:text-[#B99CFF] font-bold">
                  Prabodha Socratic Scaffolding
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#EDE6FB] dark:bg-[#2D234A] text-[#7550C8] dark:text-[#D4C3FF] font-semibold">
                Permanent Retention
              </span>
            </div>

            <p className="text-sm font-medium text-[#19171F] dark:text-white leading-relaxed italic mb-3">
              &ldquo;{currentItem.socraticInquiry}&rdquo;
            </p>

            <div className="p-3 rounded-xl bg-[#EDE6FB]/60 dark:bg-[#251D3B] border border-[#DDD2F7] dark:border-[#3D305F] text-xs text-[#51349A] dark:text-[#D4C3FF]">
              <strong className="font-semibold font-mono uppercase text-[10px] block mb-0.5">Physical / Conceptual Model:</strong>
              {currentItem.socraticThoughtAnalogy}
            </div>
          </motion.div>

        </div>

        {/* The Invariant Understanding (Breakthrough Box) */}
        <motion.div
          animate={{
            scale: activeStage === 4 ? 1.01 : 1,
          }}
          className="p-6 rounded-2xl bg-white dark:bg-[#161424] border border-[#EAE7EF] dark:border-[#27243A] shadow-soft-xs space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                The Invariant Ground Truth
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#77727F] dark:text-[#9490A0]">
              First-Principles Consolidation
            </span>
          </div>

          <p className="text-sm text-[#19171F] dark:text-[#E2DFEB] leading-relaxed">
            {currentItem.invariantTruth}
          </p>

          <div className="pt-3 border-t border-[#EAE7EF] dark:border-[#262338] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-[#7550C8] dark:text-[#B99CFF] font-medium flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              {currentItem.leverageFact}
            </span>
            {onExploreSuite && (
              <button
                onClick={onExploreSuite}
                className="font-bold text-[#19171F] dark:text-white hover:text-[#7550C8] dark:hover:text-[#B99CFF] flex items-center gap-1 self-start sm:self-auto transition-colors"
              >
                <span>Launch Full Learning Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

      </div>

    </SpotlightCard>
  );
};

