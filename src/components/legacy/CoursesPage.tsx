import React, { useState } from 'react';
import { Search, Star, BookOpen, Clock, Users, ArrowRight, Bookmark, BookmarkCheck, Play, Sparkles, Check, Tag, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';
import { SessionItem, useWatchlist } from '../context/WatchlistContext';
import { FEATURED_SESSIONS, ASPIRANT_GOALS } from '../data/sessionsData';
import { BrandEmblem } from '../components/BrandEmblem';
import { MascotDisplay } from '../components/MascotDisplay';

interface CoursesPageProps {
  onSelectSession: (session: SessionItem) => void;
  onNavigate: (page: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onSelectSession, onNavigate }) => {
  const [selectedGoal, setSelectedGoal] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  const goals = [
    'All',
    'UPSC & State PSC',
    'Banking & Financial (RBI/IBPS)',
    'SSC & Central Staff',
    'GATE (CS & Engineering)',
    'CAT & Management',
    'AI & Career Foundations',
  ];

  const filtered = FEATURED_SESSIONS.filter((c) => {
    const matchGoal = selectedGoal === 'All' || c.category === selectedGoal;
    const matchQuery =
      searchQuery === '' ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.targetExam && c.targetExam.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchGoal && matchQuery;
  });

  return (
    <div className="pt-28 pb-24 bg-[#FAF8FE] dark:bg-[#0D0B14] text-[#17151D] dark:text-[#F3F0FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-bold mb-3 border border-[#DDD2F7] dark:border-[#382658]">
            <BookOpen className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
            <span>COMPETITIVE EXAMINATION COHORTS & MASTERCLASSES</span>
            <BrandEmblem size="sm" animated={true} />
          </div>

          <h1 className="text-4xl sm:text-6xl font-wide font-black uppercase tracking-tight text-[#17151D] dark:text-white leading-[1.08] mb-4">
            Graduate & Professional <br />
            <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
              rigorous cohorts.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 font-light leading-relaxed">
            Target UPSC CSE, State PSC, RBI Grade B, Banking, SSC CGL, GATE, and CAT without formula memorization. Every cohort pairs verified academic syllabi with Socratic AI root-cause diagnostics.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-[#14101F] border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-sm mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#85818D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by examination, subject, paper (e.g. UPSC Polity, RBI Finance, SSC Geometry, GATE Algorithms)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2E2442] text-xs sm:text-sm text-[#17151D] dark:text-white placeholder:text-[#85818D] focus:outline-none focus:border-[#7652C8]"
            />
          </div>

          {/* Goal Selector */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#F1ECFA] dark:border-[#241C35]">
            <span className="text-xs font-bold text-[#85818D] dark:text-white/50 mr-1">Target Exam:</span>
            {goals.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGoal(g)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                  selectedGoal === g
                    ? 'bg-[#7652C8] text-white shadow-sm'
                    : 'bg-[#FAF8FE] dark:bg-[#1A1428] text-[#85818D] dark:text-white/60 hover:text-[#17151D] hover:bg-[#EDE7FA] border border-[#E8E1F5] dark:border-[#2E2442]'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Cohort Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((batch) => {
            const isBookmarked = isInWatchlist(batch.id);

            return (
              <SpotlightCard
                key={batch.id}
                className="bg-white dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] overflow-hidden flex flex-col justify-between shadow-soft hover:shadow-soft-xl transition-all duration-300"
              >
                <div>
                  {/* Card Visual Header with Mascot Integration */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F5F1FD] to-[#EDE7FA] dark:from-[#1C162E] dark:to-[#120F1D] flex items-center justify-center p-4">
                    <MascotDisplay
                      src={batch.thumbnail}
                      alt={batch.title}
                      size="lg"
                      glow={false}
                    />

                    {/* Category & Status Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#7652C8] text-white shadow-sm">
                        {batch.category}
                      </span>
                      {batch.discountBadge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-black/70 text-[#552AA8] dark:text-[#DDD2F7] backdrop-blur-xs border border-[#DDD2F7]">
                          {batch.discountBadge}
                        </span>
                      )}
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWatchlist(batch);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-[#1A1428]/90 text-[#7652C8] dark:text-[#B395F7] hover:scale-110 active:scale-95 transition-all shadow-sm"
                      aria-label="Bookmark batch"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 fill-[#7652C8]" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-bold text-[#552AA8] dark:text-[#B395F7] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span>🎯 {batch.targetExam || batch.category}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#17151D] dark:text-white leading-snug mb-2 group-hover:text-[#7652C8] transition-colors">
                      {batch.title}
                    </h3>

                    <p className="text-xs text-[#6B7280] dark:text-white/60 line-clamp-2 leading-relaxed mb-4 font-light">
                      {batch.description}
                    </p>

                    {/* Meta Specs */}
                    <div className="space-y-1.5 pt-3 border-t border-[#F1ECFA] dark:border-[#241C35] text-[11px] text-[#85818D] dark:text-white/60">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#7652C8]" />
                        <span>{batch.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#7652C8]" />
                        <span>{batch.instructor} ({batch.instructorRole})</span>
                      </div>
                      {batch.practiceSetsCount && (
                        <div className="flex items-center gap-2 text-[#552AA8] dark:text-[#DDD2F7] font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#7652C8]" />
                          <span>{batch.practiceSetsCount}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-[#F1ECFA] dark:border-[#241C35]">
                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#17151D] dark:text-white font-mono">
                        {batch.price}
                      </div>
                      {batch.originalPrice && (
                        <div className="text-[10px] text-[#85818D] line-through font-mono">
                          {batch.originalPrice}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectSession(batch)}
                        className="px-4 py-2 rounded-xl bg-[#EDE7FA] dark:bg-[#251A3A] hover:bg-[#DDD2F7] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-bold transition-all"
                      >
                        Syllabus
                      </button>
                      <button
                        onClick={() => onSelectSession(batch)}
                        className="px-4 py-2 rounded-xl bg-[#7652C8] hover:bg-[#623cb8] text-white text-xs font-bold shadow-soft transition-all"
                      >
                        Enroll Track
                      </button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] p-8">
            <p className="text-base text-[#85818D] dark:text-white/60 mb-4">
              No batches found matching "{searchQuery}" in {selectedGoal}.
            </p>
            <button
              onClick={() => {
                setSelectedGoal('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-[#7652C8] text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
