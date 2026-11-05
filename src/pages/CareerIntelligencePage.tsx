import React, { useState } from 'react';
import {
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ChevronRight,
  GitBranch,
  FileCode,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { NavigationPage } from '../types';
import { CAREER_TRACKS } from '../data/platformData';

interface CareerIntelligencePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const CareerIntelligencePage: React.FC<CareerIntelligencePageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('ai-systems-engineer');

  const selectedTrack =
    CAREER_TRACKS.find((t) => t.id === selectedTrackId) || CAREER_TRACKS[0];

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] dark:bg-[#0B0A0F] text-[#121118] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#6E44FF] dark:text-[#B99CFF]">
            Pillar 03 • Career Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.08]">
            Frontier Career Trajectories & <br />
            <span className="font-editorial italic font-normal text-[#6E44FF] dark:text-[#D5C2FF]">
              skill-gap analysis.
            </span>
          </h1>
          <p className="text-base text-[#64748B] dark:text-[#94A3B8] font-light leading-relaxed">
            Bridging graduate foundations with real industry capabilities. Map your strengths to high-leverage technical and policy disciplines without superficial buzzwords.
          </p>
        </div>

        {/* Track Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CAREER_TRACKS.map((track) => {
            const isSelected = selectedTrackId === track.id;

            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`p-6 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-[#151320] border-[#6E44FF] shadow-sm'
                    : 'bg-[#FAF9F6] dark:bg-[#12111A] border-[#E8E7EE] dark:border-[#222030] text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] hover:border-[#6E44FF]/30'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#6E44FF] mb-1 font-semibold">
                  Trajectory
                </div>
                <div className="text-base font-bold text-[#0F172A] dark:text-white mb-1">
                  {track.title}
                </div>
                <div className="text-xs text-[#94A3B8] font-light">
                  {track.domain}
                </div>
              </button>
            );
          })}
        </div>

        {/* Track Detail Dossier */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#13121C] border border-[#E5E5EA] dark:border-[#262436] shadow-sm mb-16 space-y-8">
          
          <div className="space-y-2 border-b border-[#EAE9F0] dark:border-[#242232] pb-6">
            <span className="text-xs font-mono uppercase text-[#6E44FF]">
              {selectedTrack.domain}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white">
              {selectedTrack.title}
            </h2>
            <p className="text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
              {selectedTrack.overview}
            </p>
          </div>

          {/* Market Reality Context */}
          <div className="p-6 rounded-2xl bg-[#F8F7FB] dark:bg-[#181624] border border-[#EAE9F0] dark:border-[#282537] space-y-2">
            <div className="text-xs font-mono font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">
              Industry Reality vs Common Misconception
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
              {selectedTrack.marketReality}
            </p>
          </div>

          {/* Invariant Bedrocks */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block">
              Invariant Mathematical & Engineering Foundations
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedTrack.invariants.map((inv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#1A1826] border border-[#EAE9F0] dark:border-[#2A273A] text-xs text-[#334155] dark:text-[#E2E8F0] font-light flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{inv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competency Pillars */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block">
              Core Technical Competencies Evaluated in Senior Interviews
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedTrack.competencyPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E5E5EA] dark:border-[#2A283B] space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#0F172A] dark:text-white">{pillar.name}</span>
                    <span className="text-[#6E44FF] bg-[#F4F0FF] dark:bg-[#25203A] px-2 py-0.5 rounded-md font-semibold">
                      {pillar.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-light">
                    {pillar.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Capstone Blueprint */}
          <div className="p-6 rounded-2xl bg-[#F6F3FF] dark:bg-[#1C182A] border border-[#DDD2F7] dark:border-[#332A50] space-y-2">
            <span className="text-xs font-mono font-bold text-[#6E44FF] dark:text-[#D5C2FF] uppercase tracking-wider">
              Production Capstone Specification
            </span>
            <p className="text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] font-medium leading-relaxed">
              "{selectedTrack.capstoneProblemStatement}"
            </p>
          </div>

          <div className="pt-4 border-t border-[#EAE9F0] dark:border-[#242232] flex items-center justify-between">
            <span className="text-xs text-[#94A3B8]">
              Discuss technical trajectory alignment with academic mentors
            </span>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs font-semibold hover:bg-[#6E44FF] transition-all flex items-center gap-1.5"
            >
              <span>Schedule Diagnostic Dialogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

