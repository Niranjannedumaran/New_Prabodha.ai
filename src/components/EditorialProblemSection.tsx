import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, AlertCircle, Compass, Brain, Layers, ShieldAlert } from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';

export const EditorialProblemSection: React.FC = () => {
  const challenges = [
    {
      index: '01',
      title: 'Information Overload Without Synthesis',
      problem: 'Aspirants drown in thousands of pages of static compilations, unindexed past questions, and conflicting test series.',
      consequence: 'Cognitive fatigue replaces conceptual clarity. Learners spend 70% of study time sorting material rather than mastering core invariants.',
      stat: '70% Lost to curation noise',
    },
    {
      index: '02',
      title: 'Rote Memorization vs. First-Principles',
      problem: 'Conventional coaching teaches brittle heuristic shortcuts and surface-level pattern matching.',
      consequence: 'When premier competitive exams (UPSC, GATE, CAT, RBI Grade B) alter a premise, memorized formulas collapse. Aspirants fail to derive solutions from ground truth.',
      stat: '85% Question variant failure',
    },
    {
      index: '03',
      title: 'The Exam-to-Career Disconnect',
      problem: 'Competitive preparation exists in an artificial silo, completely detached from professional skills and industry placement.',
      consequence: 'Candidates who dedicate years to developing mathematical and analytical rigor find no structured pathway to translate their competence into high-impact roles.',
      stat: 'Zero structural career bridging',
    },
    {
      index: '04',
      title: 'Cognitive Burnout & Isolation',
      problem: 'Preparation without longitudinal pacing, objective fatigue telemetry, or Socratic guidance breeds emotional anxiety.',
      consequence: 'More than 60% of capable aspirants drop out not from lack of intellectual capability, but from unmanaged cognitive exhaustion and isolation.',
      stat: '62% Unmonitored fatigue attrition',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F7FD] dark:bg-[#0B0912] border-t border-[#E5DCF2] dark:border-[#221C30] relative overflow-hidden">
      {/* Precision architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(117,80,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(117,80,200,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header — Editorial Asymmetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#151221] border border-[#E2D9F3] dark:border-[#2A243D] text-[11px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase tracking-widest shadow-soft-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8]" />
              <span>Section 03 • The Structural Problem</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
              The preparation paradigm is broken. <br />
              <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
                More information is not the answer.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-sm sm:text-base text-[#555060] dark:text-[#A7A3B4] font-normal leading-relaxed">
              Every competitive examination aspirant is given millions of words to read, but almost no tools to build <strong className="text-[#110E1B] dark:text-white font-semibold">axiomatic reasoning</strong>. Here is why the traditional coaching industry leaves learners exhausted.
            </p>
          </div>
        </div>

        {/* 4 Asymmetrical Editorial Challenge Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {challenges.map((c, i) => (
            <motion.div
              key={c.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 sm:p-10 rounded-[32px] bg-white dark:bg-[#141120] border border-[#E2D9F3] dark:border-[#272138] hover:border-[#7550C8]/50 dark:hover:border-[#7550C8]/50 shadow-[0_4px_24px_rgba(117,80,200,0.04)] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EBF8] dark:border-[#221C33]">
                  <span className="font-mono text-xs font-bold text-[#7550C8] dark:text-[#B99CFF] tracking-wider">
                    CHALLENGE {c.index}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 font-semibold">
                    {c.stat}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white group-hover:text-[#7550C8] dark:group-hover:text-[#B99CFF] transition-colors">
                  {c.title}
                </h3>

                <p className="text-sm text-[#555060] dark:text-[#A7A3B4] leading-relaxed">
                  {c.problem}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F2FA] dark:border-[#1E192D]">
                <p className="text-xs text-[#7550C8] dark:text-[#B99CFF] font-medium leading-relaxed bg-[#FAF8FE] dark:bg-[#1B162C] p-3.5 rounded-2xl border border-[#EDE6FB] dark:border-[#28213E]">
                  <strong className="block text-[#110E1B] dark:text-white font-bold mb-0.5">The Direct Impact:</strong>
                  {c.consequence}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Synthesis Banner: Fragmented vs Unified */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-[#110E1B] to-[#1C172E] text-white shadow-soft-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#7550C8]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-[#B99CFF] tracking-widest uppercase font-bold">
                The Prabodha Paradigm Shift
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                From passive memorization to structured invariant reasoning.
              </h3>
              <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
                Prabodha decomposes 15 years of statutory examination papers into underlying core invariants, so you learn to deduce every answer from first principles.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                <BrandEmblem size="sm" animated={true} />
                <span>Zero-Rote Socratic Intelligence</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

