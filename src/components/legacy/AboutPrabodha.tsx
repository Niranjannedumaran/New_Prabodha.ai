import React from 'react';
import { Compass, Sparkles, HeartHandshake, Eye, Lightbulb } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const AboutPrabodha: React.FC = () => {
  const values = [
    {
      title: 'Curiosity-Led Exploration',
      description: 'We believe learning thrives when fueled by genuine questions rather than passive compliance.',
      icon: Lightbulb,
    },
    {
      title: 'Human Agency & Clarity',
      description: 'AI should empower learners to make their own choices, not make choices for them.',
      icon: Compass,
    },
    {
      title: 'Long-Term Responsibility',
      description: 'We prioritize deep cognitive retention and authentic growth over quick vanity metrics.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 bg-[#FBF9FE] dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 relative border-t border-[#E8E1F5] dark:border-[#221B30]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Header Block */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
            <Eye className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>ORIGIN & PURPOSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight mb-4 leading-[1.08]">
            We believe everyone deserves the <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              opportunity to grow.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] dark:text-white/70 leading-relaxed font-light max-w-xl">
            Prabodha AI is an emerging education technology initiative focused on rethinking how people learn, explore, and develop their potential.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base text-[#4B5563] dark:text-white/80 leading-relaxed font-light">
            <p>
              We are deeply interested in the intersection of education, artificial intelligence, and personal growth. In a world saturated with information, true learning is not about accessing more content—it is about cultivating discernment, curiosity, and the courage to explore unknown territories.
            </p>
            <p>
              Our goal is not simply to add more technology to learning. It is to use technology meaningfully to make learning experiences more relevant, accessible, and genuinely engaging.
            </p>
            <p className="font-semibold text-[#17151D] dark:text-white border-l-2 border-[#7652C8] pl-4 italic font-editorial text-base sm:text-lg">
              "We are building with curiosity, experimentation, and a long-term vision for how individuals evolve across their lifespans."
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-square rounded-3xl bg-white dark:bg-[#120F1D] p-6 sm:p-8 border border-[#E8E1F5] dark:border-[#221B30] shadow-soft flex items-center justify-center">
              <div className="absolute inset-4 rounded-2xl bg-[#EDE7FA]/40 dark:bg-[#181424] -z-0" />
              <img
                src="/assets/mascots/student-stand-thumb.png"
                alt="Prabodha Student Mascot standing tall with backpack and ambition"
                className="relative z-10 w-[80%] h-auto object-contain filter drop-shadow-md"
                loading="lazy"
              />
              <div className="absolute -bottom-3 bg-[#7652C8] text-white text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full shadow-soft-sm">
                Driven by curiosity & ambition
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-[#E8E1F5] dark:border-[#221B30]">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <SpotlightCard
                key={v.title}
                className="bg-white dark:bg-[#120F1D] rounded-2xl p-6 sm:p-8 border border-[#E8E1F5] dark:border-[#221B30] shadow-soft-sm hover:shadow-soft transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EDE7FA] dark:bg-[#7652C8]/20 text-[#7652C8] dark:text-[#EDE7FA] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-[#17151D] dark:text-white mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 leading-relaxed font-light">{v.description}</p>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
