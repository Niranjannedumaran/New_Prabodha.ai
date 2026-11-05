// src/components/BrandPhilosophy.tsx
import React from 'react';
import { BookOpen, Compass, TrendingUp, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { AnimatedSection } from './AnimatedSection';

export const BrandPhilosophy: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'LEARN',
      tagline: 'Knowledge is the beginning of every possibility.',
      description:
        'Discover concepts, develop useful skills and build a stronger foundation for your future. Learning is not memorization—it is cultivating a resilient framework to understand how the world works.',
      mascot: '/assets/mascots/robot-idea.png',
      mascotAlt: 'Prabodha Robot Mascot with lightbulb discovering ideas',
      badge: 'Concept & Skill Mastery',
      accentColor: 'from-[#EDE7FA]/70 dark:from-[#1E172E] to-white dark:to-[#120F1D]',
      badgeColor: 'bg-[#EDE7FA] dark:bg-[#7652C8]/30 text-[#7652C8] dark:text-[#EDE7FA]',
      icon: BookOpen,
      highlights: ['Deep conceptual grounding', 'Interactive skill development', 'Foundational clarity'],
    },
    {
      step: '02',
      title: 'EXPLORE',
      tagline: "Your next opportunity might be something you haven't discovered yet.",
      description:
        'Explore interests, understand possibilities and approach new challenges with curiosity. The future belongs to those who actively wander beyond conventional boundaries to uncover unexpected paths.',
      mascot: '/assets/mascots/robot-compass.png',
      mascotAlt: 'Prabodha Robot Mascot navigating with cosmic compass',
      badge: 'Pathfinding & Curiosity',
      accentColor: 'from-[#F3EEFC]/80 dark:from-[#241A38] to-white dark:to-[#120F1D]',
      badgeColor: 'bg-[#7652C8]/10 dark:bg-[#7652C8]/30 text-[#7652C8] dark:text-[#EDE7FA]',
      icon: Compass,
      highlights: ['Uncharted career directions', 'Curiosity-led roadmaps', 'Emerging domain insights'],
    },
    {
      step: '03',
      title: 'EVOLVE',
      tagline: "Growth doesn't happen in a single moment.",
      description:
        'Keep learning, adapting and developing the confidence to create your own direction. Continuous evolution turns raw curiosity into lasting, impactful competence.',
      mascot: '/assets/mascots/student-jump.png',
      mascotAlt: 'Prabodha Student Mascot leaping forward with confidence',
      badge: 'Continuous Transformation',
      accentColor: 'from-[#EDE7FA]/80 dark:from-[#1E172E] to-[#F7F4FC] dark:to-[#0D0B14]',
      badgeColor: 'bg-[#302044] dark:bg-[#7652C8] text-white',
      icon: TrendingUp,
      highlights: ['Lifelong adaptability', 'Autonomous direction', 'Confidence in action'],
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 md:py-36 bg-[#F7F4FC] dark:bg-[#0A090F] transition-colors duration-300 relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(118,82,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,82,200,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-14 sm:mb-20" offsetY={30} delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
            <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>BRAND PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight text-[#17151D] dark:text-white mb-3 leading-[1.08]">
            Learn. Explore. <br className="sm:hidden" />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">evolve.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#85818D] dark:text-white/60 font-light font-editorial italic">
            Three simple ideas. One bigger purpose.
          </p>
        </AnimatedSection>
        {/* Pillars */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {pillars.map((pillar, idx) => {
            const isReversed = idx % 2 === 1;
            const IconComponent = pillar.icon;
            return (
              <AnimatedSection key={pillar.step} className="relative" offsetY={30} delay={0}>
                <SpotlightCard
                  className={`relative rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#E8E1F5] dark:border-[#221B30] bg-gradient-to-br ${pillar.accentColor} shadow-soft hover:shadow-soft-xl transition-all duration-500 overflow-hidden group`}
                >
                  {/* Numeral watermark */}
                  <div className="absolute top-2 right-4 sm:top-4 sm:right-8 text-[90px] sm:text-[140px] md:text-[180px] font-extrabold font-mono text-[#7652C8]/5 dark:text-white/5 select-none pointer-events-none leading-none">
                    {pillar.step}
                  </div>
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text */}
                    <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#7652C8] dark:text-[#9B74F3] tracking-widest">{pillar.step}</span>
                        <span className="h-3 w-px bg-[#E8E1F5] dark:bg-[#302044]" />
                        <span className={`text-[11px] sm:text-xs font-semibold px-3 py-0.5 rounded-full ${pillar.badgeColor}`}> {pillar.badge} </span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[#17151D] dark:text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-base sm:text-xl font-medium text-[#302044] dark:text-[#EDE7FA] mb-3 leading-snug font-editorial italic">{pillar.tagline}</p>
                      <p className="text-xs sm:text-base text-[#4B5563] dark:text-white/80 leading-relaxed mb-6 sm:mb-8 font-light max-w-xl">
                        {pillar.description}
                      </p>
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {pillar.highlights.map((item) => (
                          <div key={item} className="inline-flex items-center gap-2 bg-white/80 dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2A223B] px-3 py-1.5 rounded-xl text-xs font-medium text-[#302044] dark:text-white/90 shadow-soft-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7652C8] dark:bg-[#9B74F3]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Mascot */}
                    <div className={`lg:col-span-5 flex items-center justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
                        {/* Aura */}
                        <div className="absolute inset-4 rounded-3xl bg-white/70 dark:bg-[#181424]/80 backdrop-blur-md shadow-soft border border-white/60 dark:border-white/10 -z-0" />
                        <img src={pillar.mascot} alt={pillar.mascotAlt} className="relative z-10 w-[82%] h-[82%] object-contain select-none transition-transform duration-500 group-hover:scale-105 filter drop-shadow-lg" loading="lazy" />
                        {/* Icon pill */}
                        <div className="absolute bottom-3 right-3 z-20 bg-white dark:bg-[#181424] p-2.5 rounded-2xl shadow-soft border border-[#E8E1F5] dark:border-[#2A223B] text-[#7652C8] dark:text-[#EDE7FA]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
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
