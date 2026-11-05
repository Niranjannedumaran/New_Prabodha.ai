// src/components/WhoWeBuildFor.tsx
import React from 'react';
import { GraduationCap, Target, Compass, Briefcase, ArrowUpRight, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { AnimatedSection } from './AnimatedSection';

export const WhoWeBuildFor: React.FC = () => {
  const audiences = [
    {
      role: 'Students',
      stage: 'Foundation & Curiosity',
      tagline: 'Build stronger foundations and discover new areas of interest.',
      description:
        "Move past passive textbook rote learning. Explore how math, science, humanities, and computer science intersect with real problems in the world, building deep intuitions early.",
      icon: GraduationCap,
      badge: 'School & College',
      span: 'lg:col-span-7',
      svgVisual: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
          <polygon points="50,15 85,80 15,80" stroke="#7652C8" strokeWidth="1.5" />
          <polygon points="50,25 75,75 25,75" stroke="#9B74F3" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <line x1="50" y1="15" x2="50" y2="80" stroke="#7652C8" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="4" fill="#7652C8" />
        </svg>
      ),
    },
    {
      role: 'Aspirants',
      stage: 'Direction & Rigor',
      tagline: 'Approach your learning journey with greater direction and purpose.',
      description:
        "Tackle ambitious examinations and competitive milestones with strategic clarity, diagnostic precision, and an encouraging companion that keeps motivation steady.",
      icon: Target,
      badge: 'Competitive Milestones',
      span: 'lg:col-span-5',
      svgVisual: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#7652C8" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="24" stroke="#9B74F3" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="6" fill="#7652C8" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#7652C8" strokeWidth="1" opacity="0.4" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#7652C8" strokeWidth="1" opacity="0.4" />
        </svg>
      ),
    },
    {
      role: 'Graduates',
      stage: 'Exploration & Transition',
      tagline: 'Explore opportunities and prepare for the next chapter.',
      description:
        "Bridge the chasm between academic theory and real industry needs. Discover interdisciplinary roles, hone practical projects, and gain clarity on where your genuine strengths lie.",
      icon: Compass,
      badge: 'University Transition',
      span: 'lg:col-span-5',
      svgVisual: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
          <rect x="20" y="20" width="60" height="60" rx="8" stroke="#7652C8" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="#9B74F3" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="7" fill="#13A8FF" />
          <circle cx="80" cy="20" r="4" fill="#7652C8" />
          <circle cx="20" cy="80" r="4" fill="#7652C8" />
        </svg>
      ),
    },
    {
      role: 'Young Professionals',
      stage: 'Continuous Evolution',
      tagline: 'Continue developing the skills and knowledge that help you evolve.',
      description:
        "Stay ahead of technological disruption without restarting from scratch. Upskill continuously, develop strategic cross‑functional expertise, and chart meaningful career trajectories.",
      icon: Briefcase,
      badge: 'Career Progression',
      span: 'lg:col-span-7',
      svgVisual: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
          <path d="M 15 85 Q 50 75 70 45 T 90 15" stroke="#7652C8" strokeWidth="2.5" fill="none" />
          <circle cx="90" cy="15" r="5" fill="#9B74F3" />
          <line x1="15" y1="85" x2="90" y2="85" stroke="#E8E1F5" strokeWidth="1" opacity="0.6" />
          <line x1="90" y1="15" x2="90" y2="85" stroke="#9B74F3" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#FBF9FE] dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 relative border-t border-[#E8E1F5] dark:border-[#221B30]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-14 sm:mb-20" offsetY={30} delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
            <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>WHO WE ARE BUILDING FOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight mb-4 leading-[1.08]">
            Every journey <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              starts somewhere.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] dark:text-white/70 leading-relaxed font-light">
            Whether you're exploring what to study, preparing for your next career pivot, or developing skills for emerging technologies, growth begins with the willingness to explore.
          </p>
        </AnimatedSection>
        {/* Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <AnimatedSection key={aud.role} className={aud.span + ' relative'} offsetY={30} delay={0}>
                <SpotlightCard
                  className={`relative rounded-3xl p-6 sm:p-10 border border-[#E8E1F5] dark:border-[#221B30] bg-white dark:bg-[#120F1D] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#F7F4FC] dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2A223B] flex items-center justify-center text-[#7652C8] dark:text-[#EDE7FA]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F7F4FC] dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2A223B] text-[#302044] dark:text-white">
                          {aud.badge}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#85818D] dark:text-white/50">{aud.stage}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 group-hover:text-[#7652C8] dark:group-hover:text-[#EDE7FA] transition-colors">
                      {aud.role}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-[#302044] dark:text-[#EDE7FA] mb-3 leading-snug font-editorial italic">
                      "{aud.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 leading-relaxed max-w-lg mb-8 font-light">
                      {aud.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-[#F7F4FC] dark:border-[#1E182B]">
                    <div className="text-xs font-semibold text-[#7652C8] dark:text-[#EDE7FA] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Designed for this phase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">{aud.svgVisual}</div>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
