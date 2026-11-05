import React, { useState } from 'react';
import { Briefcase, TrendingUp, Award, CheckCircle2, ArrowRight, Users, Sparkles, Send } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';
import { BrandEmblem } from '../components/BrandEmblem';

interface CareersPageProps {
  onOpenCareersModal: () => void;
  onNavigate: (page: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onOpenCareersModal, onNavigate }) => {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      role: 'AI Systems Architect & Cognitive Engineer',
      domain: 'Agentic Frameworks • Latent Geometry • Model Orchestration',
      timeline: '12-16 Weeks Cohort',
      outcome: 'Frontier Builder',
      desc: 'Move past superficial API scripting. Understand how neural models represent semantics, implement state-space reflection, and construct defensible production agent frameworks.',
      capstone: 'Autonomous Multi-Agent Cognitive Orchestrator for Real-World Decision Graphs',
      milestones: [
        'First-Principles Neural Mechanics & Error Surfaces',
        'State-Space Cognitive Routing & Tool Invariants',
        'Evaluation Benchmarks & Hallucination Suppression',
        'High-Throughput Production Deployment',
      ],
    },
    {
      role: 'Applied Mathematical Modeler & Intuition Lead',
      domain: 'Spatial Vectors • Differential Manifolds • Optimization Geometry',
      timeline: '10-14 Weeks Cohort',
      outcome: 'Deep Problem Solver',
      desc: 'Unpack advanced mathematics visually and intuitively. Replace formula memorization with profound geometric intuition for calculus, transformations, and error surfaces.',
      capstone: 'Interactive Visual Manifold Explorer for High-Dimensional Latent Reduction',
      milestones: [
        'Geometric Calculus & Instantaneous Rates',
        'High-Dimensional Vector Projections',
        'Probabilistic Logic & Error Spaces',
        'First-Principles Analytical Proofs',
      ],
    },
    {
      role: 'Creative Technologist & Spatial Interface Designer',
      domain: 'Human-AI Collaboration • Spatial Canvas UI • Kinetic Systems',
      timeline: '8-12 Weeks Cohort',
      outcome: 'Frontier Experience Creator',
      desc: 'Design calm, intuitive digital environments where humans and AI co-create seamlessly. Master canvas-based interaction, tactile state layers, and cognitive ergonomics.',
      capstone: 'Adaptive Socratic Canvas Interface with Fluid Micro-Interactions',
      milestones: [
        'Cognitive Load UI/UX Architecture',
        'Canvas Interaction & Physics Engines',
        'Material Design 3 & Spatial Stacking',
        'Generative Visual Experience Systems',
      ],
    },
  ];

  const current = tracks[activeTrack];

  return (
    <div className="pt-28 pb-24 bg-[#FAF8FE] dark:bg-[#0D0B14] text-[#17151D] dark:text-[#F3F0FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-3 border border-[#DDD2F7] dark:border-[#382658]">
            <Briefcase className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>CAREER PATHWAYS & FELLOWSHIPS</span>
            <BrandEmblem size="sm" animated={true} />
          </div>

          <h1 className="text-4xl sm:text-6xl font-wide font-black uppercase tracking-tight text-[#17151D] dark:text-white leading-[1.08] mb-4">
            Transform from a student to <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              an autonomous builder.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 font-light leading-relaxed">
            Standard degrees prepare you for static jobs that are rapidly disappearing. Prabodha connects deep fundamental foundations with verified portfolio capstones and high-leverage industry career pathways.
          </p>
        </div>

        {/* Pathways Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-[#85818D] dark:text-white/50 uppercase tracking-wider block mb-1">
              Select Career Pathway
            </span>

            {tracks.map((t, idx) => (
              <button
                key={t.role}
                onClick={() => setActiveTrack(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all ${
                  activeTrack === idx
                    ? 'bg-white dark:bg-[#181424] border-[#7652C8] shadow-soft-lg ring-2 ring-[#7652C8]/20'
                    : 'bg-white/60 dark:bg-[#120F1D]/60 border-[#E8E1F5] dark:border-[#221B30] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-[#7652C8] dark:text-[#B395F7]">
                    Pathway 0{idx + 1}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] font-semibold">
                    {t.timeline}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#17151D] dark:text-white leading-snug">
                  {t.role}
                </h3>
                <p className="text-[11px] text-[#85818D] dark:text-white/60 mt-1 line-clamp-1">
                  {t.domain}
                </p>
              </button>
            ))}

            {/* We Are Hiring Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#EDE7FA] dark:from-[#201835] to-white dark:to-[#14101F] border border-[#DDD2F7] dark:border-[#382658] mt-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#7652C8] dark:text-[#B395F7]" />
                <span className="text-xs font-bold text-[#17151D] dark:text-white">
                  Work With Us at Prabodha
                </span>
              </div>
              <p className="text-xs text-[#4B5563] dark:text-white/70 font-light leading-relaxed mb-4">
                We are actively recruiting Curriculum Fellows, AI Pedagogy Researchers, and Student Campus Ambassadors.
              </p>
              <button
                onClick={onOpenCareersModal}
                className="w-full py-2.5 bg-[#7652C8] hover:bg-[#643EBA] active:scale-95 text-white rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <span>Apply for Fellowship Roles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-8">
            <SpotlightCard className="bg-white dark:bg-[#14101F] rounded-3xl p-6 sm:p-10 border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F1ECFA] dark:border-[#241C35] mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] uppercase tracking-wider">
                    Competency Profile
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#17151D] dark:text-white mt-1">
                    {current.role}
                  </h2>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] border border-[#DDD2F7] dark:border-[#382658] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold">
                  {current.outcome}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/80 font-light leading-relaxed mb-8">
                {current.desc}
              </p>

              {/* Capstone Proof */}
              <div className="p-5 rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2A203E] mb-8">
                <span className="text-[11px] font-semibold text-[#7652C8] dark:text-[#B395F7] uppercase tracking-wide block mb-1">
                  Verified Capstone Deliverable
                </span>
                <div className="text-xs sm:text-sm font-semibold text-[#17151D] dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{current.capstone}</span>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="mb-8">
                <span className="text-xs font-semibold text-[#85818D] dark:text-white/60 uppercase tracking-wide block mb-3">
                  Verified Mastery Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.milestones.map((m) => (
                    <div
                      key={m}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#1E1730] border border-[#E8E1F5] dark:border-[#2A203E] flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-[#17151D] dark:text-white/90">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#F1ECFA] dark:border-[#241C35]">
                <span className="text-xs text-[#85818D] dark:text-white/60">
                  Ready to start your first module in this pathway?
                </span>
                <button
                  onClick={() => onNavigate('courses')}
                  className="w-full sm:w-auto px-6 py-3 bg-[#7652C8] hover:bg-[#643EBA] active:scale-95 text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Explore Masterclass Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </div>
  );
};

