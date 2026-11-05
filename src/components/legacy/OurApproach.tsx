import React from 'react';
import { Sparkles, Compass, Lightbulb, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const OurApproach: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Curiosity first',
      statement: 'Encourage people to ask questions, explore ideas and discover new possibilities.',
      detail:
        'Curiosity is the engine of genuine understanding. Rather than forcing one-size-fits-all curricula, we empower learners to start with the questions they genuinely wonder about.',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'Learning with purpose',
      statement: 'Make learning meaningful by connecting it with individual goals and aspirations.',
      detail:
        'Knowledge becomes unforgettable when it has immediate context. We map every theoretical concept back to real applications, creative projects, and tangible career aspirations.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Technology with intention',
      statement: 'Use AI thoughtfully to support more accessible and engaging learning experiences.',
      detail:
        'We do not treat AI as a replacement for human thought or a shortcut generator. We build intelligent scaffolding that clarifies bottlenecks and guides deep inquiry.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Growth without limits',
      statement: 'Encourage continuous development as people and opportunities evolve.',
      detail:
        'Learning does not end with a graduation certificate or job placement. We foster habits and systems for lifelong adaptation in a rapidly transforming world.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="approach" className="py-20 sm:py-28 md:py-36 bg-white dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 border-t border-[#E8E1F5] dark:border-[#221B30] relative">
      
      {/* Precision hairline grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(118,82,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,82,200,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
            <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>OUR METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight mb-4 leading-[1.08]">
            Not just learning. <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              a journey of discovery.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 leading-relaxed font-light max-w-xl">
            We believe meaningful growth comes from connecting knowledge with curiosity, exploration, and action.
          </p>
        </div>

        {/* 4 Pillars Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <SpotlightCard
                key={principle.num}
                className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FBF9FE] dark:bg-[#120F1D] border border-[#E8E1F5] dark:border-[#221B30] hover:border-[#7652C8]/50 transition-all duration-300 hover:shadow-soft group"
              >
                <div className="flex items-start justify-between mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white dark:bg-[#181424] shadow-soft-sm border border-[#E8E1F5] dark:border-[#2A223B] flex items-center justify-center text-[#7652C8] dark:text-[#EDE7FA] group-hover:bg-[#7652C8] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#85818D] dark:text-white/60 px-3 py-1 bg-white dark:bg-[#181424] rounded-lg border border-[#E8E1F5] dark:border-[#2A223B]">
                    {principle.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight mb-2 group-hover:text-[#7652C8] dark:group-hover:text-[#EDE7FA] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-[#302044] dark:text-[#EDE7FA] mb-3 leading-snug font-editorial italic">
                  "{principle.statement}"
                </p>

                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 leading-relaxed font-light">
                  {principle.detail}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Clean Architectural Callout Strip */}
        <div className="mt-12 sm:mt-16 bg-[#FBF9FE] dark:bg-[#120F1D] rounded-3xl p-6 sm:p-10 border border-[#E8E1F5] dark:border-[#221B30] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <div className="text-[11px] font-mono text-[#7652C8] dark:text-[#EDE7FA] uppercase tracking-wider font-semibold">
              HUMAN-CENTERED COGNITION
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#17151D] dark:text-white">
              Empathy, encouragement, and cognitive clarity.
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 font-light leading-relaxed">
              We believe the most powerful technology acts like a patient, supportive mentor beside you—clarifying bottlenecks and expanding what you imagine is possible.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href="#demo"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#7652C8] hover:bg-[#623cb8] text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-soft hover:shadow-glow-purple transition-all"
            >
              <span>Test Interactive Method</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
