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
    <div className="pt-28 pb-24 bg-[#F5F2FA] dark:bg-[#0B0A0F] text-[#110E1B] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3F7]/70 dark:bg-[#201A33] border border-[#DDD2F7] dark:border-[#382B55]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Pillar 03 • Career Intelligence
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            Frontier Career Trajectories & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              skill-gap analysis.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            Bridging graduate foundations with real industry capabilities. Map your strengths to high-leverage technical and policy disciplines without superficial buzzwords.
          </p>
        </div>

        {/* Track Selector Bar: Apple Curvy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CAREER_TRACKS.map((track) => {
            const isSelected = selectedTrackId === track.id;

            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`p-6 rounded-[24px] sm:rounded-3xl text-left border active:scale-[0.98] ${
                  isSelected
                    ? 'bg-white dark:bg-[#151320] border-[#7550C8] shadow-[0_4px_20px_rgba(117,80,200,0.12)] ring-1 ring-[#7550C8]/20'
                    : 'bg-[#FAF8FE] dark:bg-[#12111A] border-[#E3DAF2] dark:border-[#222030] text-[#4D475B] dark:text-[#94A3B8] hover:text-[#110E1B] hover:border-[#7550C8]/40'
                }`}
                style={{ transition: 'background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease' }}
              >
                <div className="text-[10px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] mb-1 font-bold">
                  Trajectory
                </div>
                <div className="text-base font-bold text-[#110E1B] dark:text-white mb-1">
                  {track.title}
                </div>
                <div className="text-xs text-[#585366] dark:text-[#94A3B8] font-normal">
                  {track.domain}
                </div>
              </button>
            );
          })}
        </div>

        {/* Track Detail Dossier: Apple Curvy Squircle Card */}
        <div className="p-6 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-white/95 dark:bg-[#13121C] border border-[#E3DAF2] dark:border-[#262436] shadow-[0_8px_30px_rgba(117,80,200,0.06)] mb-16 space-y-8">
          
          <div className="space-y-2 border-b border-[#EAE7EF] dark:border-[#242232] pb-6">
            <span className="text-xs font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold">
              {selectedTrack.domain}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#110E1B] dark:text-white tracking-tight">
              {selectedTrack.title}
            </h2>
            <p className="text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
              {selectedTrack.overview}
            </p>
          </div>

          {/* Market Reality Context */}
          <div className="p-6 rounded-2xl bg-[#FAF8FE] dark:bg-[#181624] border border-[#E3DAF2] dark:border-[#282537] space-y-2">
            <div className="text-xs font-mono font-bold text-[#110E1B] dark:text-white uppercase tracking-wider">
              Industry Reality vs Common Misconception
            </div>
            <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
              {selectedTrack.marketReality}
            </p>
          </div>

          {/* Invariant Bedrocks */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#585366] dark:text-[#9A95A8] font-bold block">
              Invariant Mathematical & Engineering Foundations
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedTrack.invariants.map((inv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl sm:rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1826] border border-[#E3DAF2] dark:border-[#2A273A] text-xs text-[#2E293B] dark:text-[#E2E8F0] font-normal flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{inv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competency Pillars */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#585366] dark:text-[#9A95A8] font-bold block">
              Core Technical Competencies Evaluated in Senior Interviews
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedTrack.competencyPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E3DAF2] dark:border-[#2A283B] space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#110E1B] dark:text-white">{pillar.name}</span>
                    <span className="text-[#7550C8] dark:text-[#B99CFF] bg-[#F2EDFB] dark:bg-[#25203A] px-2 py-0.5 rounded-md font-semibold">
                      {pillar.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-[#383347] dark:text-[#94A3B8] font-normal">
                    {pillar.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Capstone Blueprint */}
          <div className="p-6 rounded-2xl bg-[#FAF6FE] dark:bg-[#1C182A] border border-[#DDD2F7] dark:border-[#332A50] space-y-2">
            <span className="text-xs font-mono font-bold text-[#7550C8] dark:text-[#D5C2FF] uppercase tracking-wider">
              Production Capstone Specification
            </span>
            <p className="text-xs sm:text-sm text-[#110E1B] dark:text-[#F1F5F9] font-medium leading-relaxed">
              "{selectedTrack.capstoneProblemStatement}"
            </p>
          </div>

          <div className="pt-4 border-t border-[#EAE7EF] dark:border-[#242232] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#585366] dark:text-[#9A95A8]">
              Discuss technical trajectory alignment with academic mentors
            </span>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-soft-xs active:scale-[0.98]"
              style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
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
