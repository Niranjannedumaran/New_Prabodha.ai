import React from 'react';
import { Sparkles, Eye, Compass, HeartHandshake, ShieldCheck, ArrowRight, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import { MascotDisplay } from '../components/MascotDisplay';
import { NavigationPage } from '../types';

interface AboutPageProps {
  onOpenContact: () => void;
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact, onNavigate }) => {
  const values = [
    {
      title: 'First Principles Over Superficial Tricks',
      desc: 'True competence is born when formulas are derived from elementary axioms. Shortcuts collapse under non-standard questions; structural understanding endures.',
    },
    {
      title: 'Active Friction Over Passive Consumption',
      desc: 'AI must never act as an answer-dispenser that atrophies critical thought. It should serve as a patient Socratic mentor that guides you through productive struggle.',
    },
    {
      title: 'Intellectual Calm Over Artificial Urgency',
      desc: 'We reject high-pressure marketing, countdown timers, and commercial hype. Preparing for demanding careers requires sustained discipline, focus, and quiet rigor.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#110E1B] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3F7]/70 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Mission & Foundations
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            We believe human potential <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              has no syllabus.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            Prabodha AI exists to dismantle rote memorization in competitive examinations and career preparation. We build intelligent software that restores first-principles thinking to the learning process.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-24">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            <p>
              Across India and the world, millions of ambitious graduates and students prepare for rigorous competitive examinations—UPSC Civil Services, central banking regulators, engineering tests, and management assessments.
            </p>
            <p>
              Yet the commercial coaching ecosystem has industrialized shortcut memorization. Students are handed 400 brittle formula sheets, passive 3-hour video streams, and anxiety-driven sales pitches. When examination bodies introduce novel analytical twists, rote memory collapses.
            </p>
            
            <div className="p-6 rounded-[24px] bg-white dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#D5C2FF] uppercase tracking-wider">
                The Foundational Rationale
              </span>
              <p className="font-editorial italic text-base sm:text-lg text-[#110E1B] dark:text-white leading-snug">
                "We do not use artificial intelligence to spoon-feed answers. We use it as an intelligent Socratic mirror that exposes flawed assumptions, guides causal deduction, and builds permanent capability."
              </p>
            </div>

            <p>
              Whether you are an aspirant striving for public service leadership, an engineer exploring autonomous systems architecture, or a professional charting a high-leverage career, Prabodha provides the calm, rigorous cognitive scaffolding you deserve.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_8px_30px_rgba(117,80,200,0.06)] flex flex-col items-center text-center space-y-4 w-full">
              <MascotDisplay
                src="/assets/mascots/student-stand-thumb.png"
                alt="Prabodha Student Scholar"
                size="lg"
                glow={true}
              />
              <div>
                <div className="text-base font-bold text-[#110E1B] dark:text-white">
                  The Invariant Learner
                </div>
                <p className="text-xs text-[#585366] dark:text-[#9A95A8] font-normal">
                  A symbol of independent inquiry, curiosity, and disciplined perseverance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Pillars / Core Principles */}
        <div className="space-y-6 mb-20 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-wider text-[#585366] dark:text-[#9A95A8] font-bold block">
            Guiding Product Principles
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_4px_20px_rgba(117,80,200,0.04)] space-y-3"
              >
                <div className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#D5C2FF]">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-[#110E1B] dark:text-white">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Dialogue Closer: Apple Curvy Card */}
        <div className="p-8 sm:p-12 rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#12111B] border border-[#E3DAF2] dark:border-[#242234] shadow-[0_8px_30px_rgba(117,80,200,0.06)] text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#110E1B] dark:text-white">
            Engage with our research & academic cell
          </h2>
          <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal max-w-lg mx-auto">
            We welcome academic collaborations, institutional inquiries, and thoughtful discussions on cognitive AI architecture.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs font-semibold shadow-soft-xs active:scale-[0.98]"
              style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
            >
              Contact Academic Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
