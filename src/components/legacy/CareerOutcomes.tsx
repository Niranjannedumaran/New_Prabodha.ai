import React, { useState } from 'react';
import { ArrowRight, Briefcase, Sparkles, TrendingUp, CheckCircle2, ShieldCheck, Award, Users, BookOpen } from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';
import { SpotlightCard } from './SpotlightCard';

interface CareerOutcomesProps {
  onOpenCareers: () => void;
}

export const CareerOutcomes: React.FC<CareerOutcomesProps> = ({ onOpenCareers }) => {
  const [selectedTrack, setSelectedTrack] = useState<number>(0);

  const careerTracks = [
    {
      role: 'AI Systems Architect & Cognitive Engineer',
      focus: 'Agentic Frameworks • Distributed Logic • Latent Geometry',
      medianOutcome: 'High-Leverage Builder',
      timeline: '12-16 Weeks Self-Directed',
      description:
        'Bridge the gap between foundational computer science and next-generation autonomous AI systems. You move past calling APIs to understanding model internals, cognitive scaffolding, and autonomous orchestration.',
      capstone: 'Autonomous Multi-Agent Cognitive Orchestrator for Real-World Decision Graphs',
      competencies: [
        'First-Principles Neural Mechanics',
        'State-Space Cognitive Routing',
        'Model Evaluation & Invariant Testing',
        'Defensible System Architecture',
      ],
      icon: TrendingUp,
    },
    {
      role: 'Applied Mathematical Modeler & Intuition Lead',
      focus: 'Spatial Vectors • Differential Manifolds • Optimization Geometry',
      medianOutcome: 'Deep Problem Solver',
      timeline: '10-14 Weeks Self-Directed',
      description:
        'Unpack mathematical concepts visually. Instead of memorizing rote formulas for examinations, develop spatial intuition for calculus, linear transformations, and high-dimensional spaces.',
      capstone: 'Interactive Visual Manifold Explorer for Neural Dimensionality Reduction',
      competencies: [
        'Geometric Calculus & Rates of Change',
        'High-Dimensional Vector Spaces',
        'Probabilistic Reasoning & Error Surfaces',
        'Analytical Rigor & Proof Construction',
      ],
      icon: BookOpen,
    },
    {
      role: 'Creative Technologist & Spatial Interface Designer',
      focus: 'Human-AI Collaboration • Spatial UI • Interactive Canvas',
      medianOutcome: 'Frontier Product Creator',
      timeline: '8-12 Weeks Self-Directed',
      description:
        'Design interfaces where humans and AI co-create seamlessly. Move beyond static form fields into dynamic canvas environments, multimodal inputs, and calm cognitive experiences.',
      capstone: 'Adaptive Socratic Canvas Interface with Fluid Micro-Interactions',
      competencies: [
        'Cognitive Load UI/UX Architecture',
        'Fluid Canvas Interaction Models',
        'Material Design 3 & Spatial Depth',
        'Generative User Experience Systems',
      ],
      icon: Sparkles,
    },
  ];

  const psychologyPillars = [
    {
      title: 'Active Cognitive Friction',
      conventional: 'Passive video lecture playback resulting in a 12% 7-day retention cliff.',
      prabodha: 'Socratic inquiry prompts that spark neural dopamine and build enduring mental models.',
      stat: '94% Retention',
    },
    {
      title: 'First-Principles Grounding',
      conventional: 'Surface memorization of syntax and benchmarks that quickly become obsolete.',
      prabodha: 'Indisputable primitives that empower you to understand any new system from zero.',
      stat: 'Zero Obsolescence',
    },
    {
      title: 'Curiosity-Driven Trajectory',
      conventional: 'One-size-fits-all rigid syllabi dictated by standardized test criteria.',
      prabodha: 'Autonomous pathfinding where your personal curiosity charts real career relevance.',
      stat: '3.8x Faster Mastery',
    },
  ];

  const current = careerTracks[selectedTrack];

  return (
    <section id="careers" className="py-20 sm:py-28 md:py-36 bg-[#FAF8FE] dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 relative border-t border-[#E8E1F5] dark:border-[#221B30]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Block with M3 Pill Badge */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
            <Briefcase className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>CAREER PATHWAYS & REAL OUTCOMES</span>
            <BrandEmblem size="sm" animated={true} />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight mb-4 leading-[1.08]">
            Built for capability, <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              not just completion.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] dark:text-white/70 leading-relaxed font-light">
            Traditional education measures hours logged and tests passed. Prabodha measures autonomy, first-principles problem solving, and defensible real-world competence.
          </p>
        </div>

        {/* Dynamic Career Pathway Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-24">
          
          {/* Track Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-[#85818D] dark:text-white/50 tracking-wider uppercase block mb-1">
              Select Career Pathway
            </span>

            {careerTracks.map((track, idx) => {
              const isSelected = selectedTrack === idx;
              return (
                <button
                  key={track.role}
                  onClick={() => setSelectedTrack(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? 'bg-white dark:bg-[#181424] border-[#7652C8] shadow-soft-lg ring-2 ring-[#7652C8]/20'
                      : 'bg-white/60 dark:bg-[#120F1D]/60 border-[#E8E1F5] dark:border-[#221B30] hover:bg-white dark:hover:bg-[#181424]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#7652C8] dark:text-[#B395F7]">
                      Pathway 0{idx + 1}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] font-medium">
                      {track.timeline}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#17151D] dark:text-white leading-snug">
                    {track.role}
                  </h3>

                  <p className="text-[11px] text-[#85818D] dark:text-white/60 mt-1 line-clamp-1">
                    {track.focus}
                  </p>
                </button>
              );
            })}

            {/* We Are Hiring & Mentorship Fellowship Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#EDE7FA]/80 dark:from-[#201835] to-white dark:to-[#120F1D] border border-[#DDD2F7] dark:border-[#382658] mt-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#7652C8] dark:text-[#B395F7]" />
                <span className="text-xs font-bold text-[#17151D] dark:text-white">
                  Join the Prabodha Team
                </span>
              </div>
              <p className="text-xs text-[#4B5563] dark:text-white/70 leading-relaxed font-light mb-3">
                We are actively recruiting Curriculum Fellows, Pedagogy Researchers, and Student Ambassadors.
              </p>
              <button
                onClick={onOpenCareers}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] hover:underline"
              >
                <span>View open fellowship roles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Detailed Selected Pathway Showcase */}
          <div className="lg:col-span-8">
            <SpotlightCard className="bg-white dark:bg-[#14101F] rounded-3xl p-6 sm:p-10 border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F1ECFA] dark:border-[#241C35] mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] tracking-wider uppercase">
                    Target Competency Profile
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#17151D] dark:text-white mt-1">
                    {current.role}
                  </h3>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] border border-[#DDD2F7] dark:border-[#382658] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold">
                  {current.medianOutcome}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/80 leading-relaxed font-light mb-8">
                {current.description}
              </p>

              {/* Capstone Proof */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] mb-8">
                <span className="text-[11px] font-semibold text-[#7652C8] dark:text-[#B395F7] uppercase tracking-wide block mb-1">
                  Verified Capstone Portfolio Artifact
                </span>
                <div className="text-xs sm:text-sm font-semibold text-[#17151D] dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{current.capstone}</span>
                </div>
              </div>

              {/* Core Competencies Grid */}
              <div className="mb-8">
                <span className="text-xs font-semibold text-[#85818D] dark:text-white/60 uppercase tracking-wide block mb-3">
                  Verified Mastery Milestones
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.competencies.map((comp) => (
                    <div
                      key={comp}
                      className="p-3 rounded-xl bg-white dark:bg-[#1E1730] border border-[#E8E1F5] dark:border-[#2A203E] flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-[#17151D] dark:text-white/90">
                        {comp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore Pathway CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#F1ECFA] dark:border-[#241C35]">
                <span className="text-xs text-[#85818D] dark:text-white/60">
                  Ready to map your personal roadmap for this pathway?
                </span>
                <a
                  href="#sessions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7652C8] hover:bg-[#643EBA] active:scale-[0.97] text-white px-6 py-3 rounded-full text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Explore Curriculum Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Psychology of Learning Comparison Matrix */}
        <div className="pt-12 sm:pt-16 border-t border-[#E8E1F5] dark:border-[#221B30]">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] tracking-wider uppercase block mb-2">
              The Cognitive Psychology of Prabodha
            </span>
            <h3 className="text-2xl sm:text-4xl font-wide font-black uppercase text-[#17151D] dark:text-white">
              Why first principles work.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {psychologyPillars.map((p) => (
              <SpotlightCard
                key={p.title}
                className="bg-white dark:bg-[#14101F] rounded-3xl p-6 sm:p-8 border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-[#17151D] dark:text-white">
                      {p.title}
                    </h4>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7]">
                      {p.stat}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30 text-[#881337] dark:text-rose-300">
                      <span className="font-semibold block mb-0.5">Conventional EdTech:</span>
                      {p.conventional}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 text-[#064E3B] dark:text-emerald-300">
                      <span className="font-semibold block mb-0.5">The Prabodha Approach:</span>
                      {p.prabodha}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F1ECFA] dark:border-[#241C35] flex items-center justify-between text-[11px] text-[#85818D] dark:text-white/50">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Cognitive science validated
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

