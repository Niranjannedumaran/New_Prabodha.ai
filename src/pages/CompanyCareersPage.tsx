import React from 'react';
import { ArrowRight, Sparkles, Heart, Brain, Compass, CheckCircle2 } from 'lucide-react';
import { NavigationPage } from '../types';

interface CompanyCareersPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const CompanyCareersPage: React.FC<CompanyCareersPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const contributionAreas = [
    {
      title: 'Cognitive AI & Socratic Modeling',
      desc: 'Developing deterministic evaluation harnesses, reasoning trees, and conversational protocols that refuse to give direct answers.',
    },
    {
      title: 'Syllabus Topology & Knowledge Graphs',
      desc: 'Transforming statutory legal frameworks, macroeconomic policies, and formal automata theory into machine-readable invariant graphs.',
    },
    {
      title: 'Educational Systems Architecture',
      desc: 'Engineering high-reliability distributed testing systems and latency-sensitive interfaces designed for deep human focus.',
    },
    {
      title: 'Curriculum & Invariant Engineering',
      desc: 'Subject-matter scholars in constitutional law, public economics, discrete mathematics, and causal econometrics.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#110E1B] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3F7]/70 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Careers & Culture
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            Help shape a more <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              intelligent future for learning.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            We are building an enduring institution at the intersection of cognitive science, artificial intelligence, and first-principles education.
          </p>
        </div>

        {/* Culture & Work Philosophy: Apple Curvy Card */}
        <div className="p-6 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-[0_8px_30px_rgba(117,80,200,0.06)] space-y-6 mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white">
            Our Work Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            <div className="space-y-2">
              <strong className="text-[#110E1B] dark:text-white block font-bold">Intellectual Rigor</strong>
              We do not chase transient AI hype cycles. We build software grounded in durable cognitive principles.
            </div>
            <div className="space-y-2">
              <strong className="text-[#110E1B] dark:text-white block font-bold">Calm Craft</strong>
              We prioritize quiet focus, thoughtful written communication, and deep work over endless meetings.
            </div>
            <div className="space-y-2">
              <strong className="text-[#110E1B] dark:text-white block font-bold">Long-Term Value</strong>
              We measure our success by the permanent capability built in our learners, not superficial vanity metrics.
            </div>
          </div>
        </div>

        {/* Areas of Contribution */}
        <div className="space-y-6 mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white">
            Areas of Ongoing Contribution
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contributionAreas.map((area, i) => (
              <div
                key={i}
                className="p-6 rounded-[24px] bg-white/95 dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-xs space-y-2"
              >
                <div className="text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-bold text-[#110E1B] dark:text-white">
                  {area.title}
                </h3>
                <p className="text-xs text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Openings Notice & Spontaneous Outreach: Apple Curvy Card */}
        <div className="p-8 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-[0_8px_30px_rgba(117,80,200,0.06)] text-center space-y-4">
          <span className="text-xs font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold">
            Spontaneous Applications
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white">
            Start a direct intellectual dialogue with us
          </h3>
          <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal max-w-lg mx-auto">
            While we do not list speculative openings, we continually open conversations with extraordinary engineers, researchers, and educators who share our first-principles vision.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs font-semibold shadow-soft-xs active:scale-[0.98]"
              style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
            >
              Introduce Yourself
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
