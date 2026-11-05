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
    <div className="pt-28 pb-24 bg-[#FCFBFE] dark:bg-[#0B0A0F] text-[#19171F] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
            Careers & Culture
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
            Help shape a more <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              intelligent future for learning.
            </span>
          </h1>
          <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
            We are building an enduring institution at the intersection of cognitive science, artificial intelligence, and first-principles education.
          </p>
        </div>

        {/* Culture & Work Philosophy */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] shadow-soft-xs space-y-6 mb-12">
          <h2 className="text-xl font-bold text-[#19171F] dark:text-white">
            Our Work Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
            <div className="space-y-2">
              <strong className="text-[#19171F] dark:text-white block font-medium">Intellectual Rigor</strong>
              We do not chase transient AI hype cycles. We build software grounded in durable cognitive principles.
            </div>
            <div className="space-y-2">
              <strong className="text-[#19171F] dark:text-white block font-medium">Calm Craft</strong>
              We prioritize quiet focus, thoughtful written communication, and deep work over endless meetings.
            </div>
            <div className="space-y-2">
              <strong className="text-[#19171F] dark:text-white block font-medium">Long-Term Value</strong>
              We measure our success by the permanent capability built in our learners, not superficial vanity metrics.
            </div>
          </div>
        </div>

        {/* Areas of Contribution */}
        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-bold text-[#19171F] dark:text-white">
            Areas of Ongoing Contribution
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contributionAreas.map((area, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] space-y-2"
              >
                <div className="text-xs font-mono text-[#7550C8] dark:text-[#B99CFF] font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-bold text-[#19171F] dark:text-white">
                  {area.title}
                </h3>
                <p className="text-xs text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Openings Notice & Spontaneous Outreach */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F4F7] dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] text-center space-y-4">
          <span className="text-xs font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-semibold">
            Spontaneous Applications
          </span>
          <h3 className="text-xl font-bold text-[#19171F] dark:text-white">
            Start a direct intellectual dialogue with us
          </h3>
          <p className="text-xs sm:text-sm text-[#77727F] dark:text-[#9490A0] font-light max-w-lg mx-auto">
            While we do not list speculative openings, we continually open conversations with extraordinary engineers, researchers, and educators who share our first-principles vision.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-full bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] hover:bg-[#7550C8] text-xs font-semibold transition-all"
            >
              Introduce Yourself
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

