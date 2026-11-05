import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Brain,
  Compass,
  CheckCircle2,
  TrendingUp,
  FileText,
  ShieldCheck,
  ChevronRight,
  GitBranch,
  Workflow
} from 'lucide-react';
import { NavigationPage } from '../types';
import { PRODUCT_PILLARS } from '../data/platformData';

interface PlatformPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('exam-intelligence');

  const selectedPillar =
    PRODUCT_PILLARS.find((p) => p.id === selectedPillarId) || PRODUCT_PILLARS[0];

  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] dark:bg-[#0B0A0F] text-[#121118] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#6E44FF] dark:text-[#B99CFF]">
            Platform Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.08]">
            The Unified Cognitive <br />
            <span className="font-editorial italic font-normal text-[#6E44FF] dark:text-[#D5C2FF]">
              architecture.
            </span>
          </h1>
          <p className="text-base text-[#64748B] dark:text-[#94A3B8] font-light leading-relaxed">
            How Prabodha seamlessly connects competitive examination intelligence, first-principles tutoring, career trajectory design, and autonomous AI mentorship into a single feedback system.
          </p>
        </div>

        {/* Visual System Interaction Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Pillar Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-2">
              System Capabilities
            </span>

            {PRODUCT_PILLARS.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full p-5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-white dark:bg-[#161421] border-[#6E44FF] shadow-sm'
                      : 'bg-[#FAF9F6] dark:bg-[#12111A] border-[#E8E7EE] dark:border-[#222030] hover:border-[#6E44FF]/40 text-[#64748B] dark:text-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1 font-mono">
                    <span className={isSelected ? 'text-[#6E44FF] font-bold' : 'text-[#94A3B8]'}>
                      Pillar {pillar.number}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-[#6E44FF]' : 'text-transparent'}`} />
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] dark:text-white">
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Canvas */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#14121E] border border-[#E5E5EA] dark:border-[#272535] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] border-b border-[#EAE9F0] dark:border-[#242232] pb-4">
                <span>System Node: {selectedPillar.id}</span>
                <span className="text-[#6E44FF] font-semibold">{selectedPillar.subtitle}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {selectedPillar.title}
                </h3>
                <p className="text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block">
                  Core Architectural Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPillar.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1A1826] border border-[#EAE9F0] dark:border-[#2A273A] text-xs text-[#334155] dark:text-[#E2E8F0] font-light flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#EAE9F0] dark:border-[#242232] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">
                Ready to inspect the specialized suite?
              </span>
              <button
                onClick={() => handleNav(selectedPillar.route as NavigationPage)}
                className="px-5 py-2 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs font-semibold flex items-center gap-1.5 hover:bg-[#6E44FF] transition-all"
              >
                <span>Launch {selectedPillar.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* The Feedback Loop Diagram (Linear System Architecture) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8F7FB] dark:bg-[#12111B] border border-[#EAE9F0] dark:border-[#242234] mb-20 space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6E44FF] dark:text-[#B99CFF]">
              Continuous Feedback Loop
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white">
              How the platform components talk to each other
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] font-light">
              A student’s interaction in one module enriches all other systems continuously without manual data entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E5E5EA] dark:border-[#2A283B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F4F0FF] dark:bg-[#25203A] text-[#6E44FF] flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <div className="text-xs font-bold text-[#0F172A] dark:text-white">Exam Syllabus Ingestion</div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-light">
                Past papers & statutory notifications are vectorized into conceptual dependency trees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E5E5EA] dark:border-[#2A283B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F4F0FF] dark:bg-[#25203A] text-[#6E44FF] flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <div className="text-xs font-bold text-[#0F172A] dark:text-white">Socratic Dialogue</div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-light">
                Learner errors trigger Socratic scaffolding, exposing the precise invariant that broke down.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E5E5EA] dark:border-[#2A283B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F4F0FF] dark:bg-[#25203A] text-[#6E44FF] flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <div className="text-xs font-bold text-[#0F172A] dark:text-white">Cognitive Calibration</div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-light">
                The mentorship engine records validated invariants and recalibrates time-to-mastery pacing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E5E5EA] dark:border-[#2A283B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F4F0FF] dark:bg-[#25203A] text-[#6E44FF] flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <div className="text-xs font-bold text-[#0F172A] dark:text-white">Career Alignment</div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-light">
                Foundational cognitive strengths are mapped directly into relevant frontier industry pathways.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

