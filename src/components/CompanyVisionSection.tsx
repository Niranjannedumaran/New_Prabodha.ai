import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldCheck, Database, LineChart, Cpu, ArrowUpRight } from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';

export const CompanyVisionSection: React.FC<{ onNavigateToPlatform?: () => void }> = ({ onNavigateToPlatform }) => {
  const pillars = [
    {
      num: '01',
      title: 'Axiomatic Knowledge Graphs',
      desc: 'Instead of indexing question banks as flat PDFs, Prabodha transforms multi-year examination syllabuses into directed acyclic dependency graphs.',
      badge: 'Pedagogical Moat',
    },
    {
      num: '02',
      title: 'Socratic Dissection Engine',
      desc: 'The AI never simply spits out final answers. It analyzes where student assumptions diverge, scaffolds counter-examples, and guides the mind to deduce the proof.',
      badge: 'Cognitive Science',
    },
    {
      num: '03',
      title: 'Longitudinal Career Telemetry',
      desc: 'We verify competency on premier national exams and translate tested quantitative and analytical skills directly into institutional market placement.',
      badge: 'Institutional Scale',
    },
  ];

  const investorMetrics = [
    { label: 'Verified Syllabus Coverage', value: '15 Years', sub: '2010–2025 Past Exam Papers' },
    { label: 'Invariant Extraction Precision', value: '98.1%', sub: 'Formal Mathematical & Legal Proofs' },
    { label: 'Longitudinal Prep Horizon', value: '12–18 Mo', sub: 'Complete Aspirant Journey Pacing' },
    { label: 'Target Disciplines', value: '4 Key Sectors', sub: 'Civil Services, Banking, GATE, CAT' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F7F4FC] dark:bg-[#0E0C17] border-y border-[#E2D9F3] dark:border-[#221C33] relative overflow-hidden">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7550C8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Editorial Vision Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181427] border border-[#E2D9F3] dark:border-[#2A233E] text-[11px] font-mono font-bold text-[#7550C8] dark:text-[#B99CFF] uppercase tracking-widest shadow-soft-xs">
            <BrandEmblem size="sm" animated={true} />
            <span>Section 08 • Company Vision & Institutional Direction</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            Built for thinkers, <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              engineered for institutional scale.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#555060] dark:text-[#A7A3B4] font-normal leading-relaxed pt-2">
            Prabodha AI exists to replace the fragmented, anxiety-driven coaching industry with a scientific, Socratic foundation. We believe that true competitive excellence is not memorized—it is derived.
          </p>
        </div>

        {/* 3 Strategic Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[32px] bg-white dark:bg-[#141120] border border-[#E2D9F3] dark:border-[#262038] shadow-[0_4px_20px_rgba(117,80,200,0.04)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EBF8] dark:border-[#201B30]">
                  <span className="font-mono text-xs font-bold text-[#7550C8] dark:text-[#B99CFF]">
                    ARCHITECTURE {p.num}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#110E1B] dark:text-white">
                  {p.title}
                </h3>

                <p className="text-sm text-[#555060] dark:text-[#A7A3B4] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] font-semibold flex items-center gap-1.5">
                <span>Verified System Capability</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional & Strategic Partner Telemetry Grid */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-white dark:bg-[#141120] border border-[#E2D9F3] dark:border-[#262038] shadow-soft-lg space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE7EF] dark:border-[#242036]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold block mb-1">
                Institutional Telemetry & Verified Benchmarks
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white">
                Platform Rigor & Architecture Proofs
              </h3>
            </div>

            <div className="text-xs font-mono text-[#555060] dark:text-[#A7A3B4]">
              Data compiled from official statutory exam archives
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {investorMetrics.map((m, idx) => (
              <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-[#F7F4FD] dark:bg-[#1B162C] border border-[#E9E1F7] dark:border-[#28213E]">
                <span className="text-xs text-[#555060] dark:text-[#9A95A8] font-medium block">
                  {m.label}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#110E1B] dark:text-white font-mono block">
                  {m.value}
                </span>
                <span className="text-[11px] text-[#7550C8] dark:text-[#B99CFF] font-medium block">
                  {m.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

