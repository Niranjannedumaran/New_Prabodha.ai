import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Layers, ArrowUpRight, Target, Repeat, Signal, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const TheProblem: React.FC = () => {
  const editorialStatements = [
    {
      num: '01',
      icon: Layers,
      title: 'Too much information. Not enough clarity.',
      narrative:
        'The internet holds virtually all human knowledge, yet finding what is meaningful, relevant, and actionable has never been harder. Raw content without synthesis leads to cognitive fatigue rather than true comprehension.',
      takeaway: 'Curated signals over endless noise.',
    },
    {
      num: '02',
      icon: Target,
      title: 'Learning without direction can feel disconnected.',
      narrative:
        'Syllabuses often focus strictly on standardized benchmarks while disconnecting learners from how real skills apply to evolving careers, dynamic problem spaces, and individual aspirations.',
      takeaway: 'Purpose-driven paths over rote compliance.',
    },
    {
      num: '03',
      icon: Repeat,
      title: 'The future demands continuous growth.',
      narrative:
        'The era of static degrees and fixed job definitions is over. Thriving in an AI-accelerated landscape requires agility, self-directed exploration, and an appetite to continuously evolve.',
      takeaway: 'Lifelong evolution over temporary finishes.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#F7F4FC] dark:bg-[#0D0B14] border-y border-[#E8E1F5] dark:border-[#221B30] transition-colors duration-300 relative overflow-hidden isolate">
      
      {/* Precision architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(118,82,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,82,200,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <AnimatedSection
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 sm:mb-20"
          offsetY={16}
          delay={0}
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
              <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
              <span>THE STRUCTURAL CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase text-[#17151D] dark:text-white tracking-tight leading-[1.08]">
              The world is changing. <br />
              <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
                learning should move with it.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-sm sm:text-base text-[#4B5563] dark:text-white/70 leading-relaxed font-light">
            <p>
              Students and young professionals face an increasingly complex world. Information is everywhere, opportunities keep changing, and choosing the right direction can feel overwhelming.
            </p>
            <p>
              Traditional approaches to learning do not always connect knowledge with practical skills, exploration, and long-term growth.
            </p>
            <p className="font-semibold text-[#17151D] dark:text-white pt-1">
              We believe people deserve a more connected, accessible, and engaging way to learn and discover their potential.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Editorial Statement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {editorialStatements.map((item) => {
            const Icon = item.icon;
            return (
              <AnimatedSection offsetY={30} delay={0}><SpotlightCard
                key={item.num}
                className="bg-white dark:bg-[#120F1D] rounded-3xl p-6 sm:p-10 border border-[#E8E1F5] dark:border-[#221B30] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-bold text-[#7652C8] dark:text-[#EDE7FA] tracking-widest px-2.5 py-1 rounded-md bg-[#EDE7FA] dark:bg-[#7652C8]/25">
                      STATEMENT {item.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F7F4FC] dark:bg-[#181424] text-[#7652C8] dark:text-[#EDE7FA] flex items-center justify-center group-hover:bg-[#7652C8] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#17151D] dark:text-white tracking-tight leading-snug mb-3 group-hover:text-[#7652C8] dark:group-hover:text-[#EDE7FA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 leading-relaxed mb-6 font-light">
                    {item.narrative}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F7F4FC] dark:border-[#1E182B] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#302044] dark:text-white/90">
                    {item.takeaway}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#7652C8]/30 group-hover:bg-[#7652C8] transition-colors" />
                </div>
              </SpotlightCard></AnimatedSection>
            );
          })}
        </div>

        {/* Clean Editorial Synthesis Strip - No Mascot Sticker, Authentic Architectural Visual */}
        <div className="mt-12 sm:mt-16 bg-white dark:bg-[#120F1D] rounded-3xl p-6 sm:p-8 border border-[#E8E1F5] dark:border-[#221B30] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EDE7FA] dark:bg-[#7652C8]/20 flex items-center justify-center text-[#7652C8] dark:text-[#EDE7FA] flex-shrink-0">
              <Signal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#17151D] dark:text-white">
                Rethinking the relationship between knowledge and action.
              </h4>
              <p className="text-xs sm:text-sm text-[#85818D] dark:text-white/60 font-light mt-0.5">
                Every concept bridges directly into personal exploration and real-world competence.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold bg-[#F7F4FC] dark:bg-[#181424] hover:bg-[#EDE7FA] dark:hover:bg-[#201B30] text-[#7652C8] dark:text-[#EDE7FA] border border-[#E8E1F5] dark:border-[#2A223B] px-5 py-2.5 rounded-xl active:scale-[0.97] transition-all duration-120"
            >
              <span>Explore our approach</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
