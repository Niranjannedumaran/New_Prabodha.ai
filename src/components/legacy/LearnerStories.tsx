import React, { useState } from 'react';
import { Sparkles, Quote, Star, ArrowRight, CheckCircle2, User } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const LearnerStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: 'Maya Chen',
      role: 'Former Electrical Engineering Student ➔ Autonomous Agent Engineer',
      avatar: '/assets/mascots/student-stand-thumb.png',
      quote:
        'In college, I was memorizing equations for exams and forgetting them two weeks later. Prabodha taught me to think in invariants and mental state machines. When I built my first multi-agent research simulator, it wasn’t from copying a tutorial—I actually understood the geometric mechanics.',
      metric: '3 Capstone Systems Shipped',
      focus: 'Multi-Agent Cognitive Routing',
      tag: 'Student Pivot Story',
    },
    {
      name: 'Kabir Varma',
      role: 'Self-Directed Researcher & Olympiad Finalist',
      avatar: '/assets/mascots/student-jump.png',
      quote:
        'The Socratic companion completely transformed how I face roadblocks. It never hands me the plain formula. Instead, it asks me: "If you change the constraint here, where does the energy leak?" That moment of cognitive friction is where real comprehension lights up.',
      metric: '98% Intuition Benchmark',
      focus: 'Visual Calculus & High-Dim Spaces',
      tag: 'First-Principles Math',
    },
    {
      name: 'Dr. Sophia Reyes',
      role: 'STEM Educator & University Lecturer',
      avatar: '/assets/mascots/robot-compass.png',
      quote:
        'As an educator, seeing students move from syllabus anxiety to curiosity-led exploration is magical. Prabodha bridges the gap between theoretical knowledge and career relevance in a way no static textbook ever could.',
      metric: 'Faculty Advisory Partner',
      focus: 'Cognitive Scaffolding & Mentorship',
      tag: 'Educator Perspective',
    },
  ];

  return (
    <section id="stories" className="py-20 sm:py-28 md:py-36 bg-white dark:bg-[#0D0B14] text-[#17151D] dark:text-white transition-colors duration-300 relative border-t border-[#E8E1F5] dark:border-[#221B30]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
              <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
              <span>HUMAN STORIES & PSYCHOLOGICAL PROOF</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight leading-[1.08]">
              From rote anxiety to <br />
              <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
                authentic mastery.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 max-w-sm leading-relaxed font-light">
            Real learners, researchers, and educators sharing how first-principles thinking unlocked their potential beyond static syllabi.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, i) => (
            <SpotlightCard
              key={story.name}
              className="bg-[#FAF8FE] dark:bg-[#14101F] rounded-3xl p-6 sm:p-8 border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7]">
                    {story.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <Quote className="w-7 h-7 text-[#7652C8]/30 dark:text-[#B395F7]/30 mb-3" />

                <p className="text-xs sm:text-sm text-[#302044] dark:text-white/90 leading-relaxed font-light italic mb-6">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#E8E1F5] dark:border-[#241C35] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#EDE7FA] dark:bg-[#251A3A] overflow-hidden flex-shrink-0 p-1 flex items-center justify-center">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-full h-full object-contain filter drop-shadow-xs"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#17151D] dark:text-white">
                    {story.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#85818D] dark:text-white/60 line-clamp-1 font-light">
                    {story.role}
                  </p>
                  <div className="text-[10px] font-semibold text-[#7652C8] dark:text-[#B395F7] mt-0.5">
                    {story.metric}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

