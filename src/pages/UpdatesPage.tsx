import React from 'react';
import { Calendar, ArrowRight, Tag, BookOpen, Sparkles } from 'lucide-react';
import { NavigationPage, PlatformUpdate } from '../types';

interface UpdatesPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenContact: () => void;
}

export const UpdatesPage: React.FC<UpdatesPageProps> = ({ onNavigate, onOpenContact }) => {
  const updates: PlatformUpdate[] = [
    {
      id: 'update-socratic-scaffolding',
      date: 'November 2026',
      category: 'Intelligence Engine',
      title: 'Formalization of Socratic Dialogue Protocols for Graduate Competitive Examinations',
      summary:
        'A comprehensive research overview detailing how guided counter-questioning prevents cognitive shortcutting and preserves deep conceptual retention across high-ambiguity civil service and engineering problem sets.',
      readTime: '6 min read',
    },
    {
      id: 'update-pyq-topology',
      date: 'October 2026',
      category: 'Syllabus Topology',
      title: 'Vectorizing 15 Years of UPSC & Central Banking Question Patterns',
      summary:
        'How we map historical question ambiguity shifts into directed acyclic concept graphs, highlighting the exact structural divergence from standard textbook definitions.',
      readTime: '8 min read',
    },
    {
      id: 'update-cognitive-calibration',
      date: 'September 2026',
      category: 'Research Note',
      title: 'Mitigating Cognitive Fatigue in 18-Month Preparation Cycles',
      summary:
        'An empirical analysis of spaced retrieval schedules and dynamic milestone redistribution designed to protect intellectual calm during high-stakes competitive preparation.',
      readTime: '5 min read',
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
              Platform Dispatch & Research
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#110E1B] dark:text-white leading-[1.08]">
            Updates & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              research notes.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
            Verified architectural releases, pedagogical investigations, and learning research published by the Prabodha AI engineering and academic cell.
          </p>
        </div>

        {/* Articles List: Apple Curvy Cards */}
        <div className="space-y-6 mb-16">
          {updates.map((post) => (
            <article
              key={post.id}
              className="p-6 sm:p-8 rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#14121E] border border-[#E3DAF2] dark:border-[#272535] shadow-[0_4px_20px_rgba(117,80,200,0.04)] hover:border-[#7550C8]/50 space-y-4"
              style={{ transition: 'border-color 150ms ease, box-shadow 150ms ease' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#585366] dark:text-[#9A95A8]">
                <span className="px-3 py-1 rounded-full bg-[#FAF6FE] dark:bg-[#1F1C2E] text-[#7550C8] dark:text-[#B99CFF] font-semibold border border-[#DDD2F7] dark:border-[#332A50]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#7550C8]" />
                  <span>{post.date} • {post.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#110E1B] dark:text-white tracking-tight">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal leading-relaxed">
                {post.summary}
              </p>
            </article>
          ))}
        </div>

        {/* Dialogue Note: Apple Curvy Card */}
        <div className="p-8 sm:p-10 rounded-[28px] sm:rounded-3xl bg-white/95 dark:bg-[#151320] border border-[#E3DAF2] dark:border-[#272535] shadow-[0_8px_30px_rgba(117,80,200,0.06)] text-center space-y-3">
          <h3 className="text-xl font-bold text-[#110E1B] dark:text-white">
            Interested in learning research collaborations?
          </h3>
          <p className="text-xs sm:text-sm text-[#383347] dark:text-[#CBD5E1] font-normal max-w-md mx-auto">
            Our team collaborates with cognitive scientists, educational researchers, and academic institutions worldwide.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 rounded-full bg-[#110E1B] dark:bg-white text-white dark:text-[#110E1B] hover:bg-[#7550C8] dark:hover:bg-[#EDE6FB] text-xs font-semibold shadow-soft-xs active:scale-[0.98]"
              style={{ transition: 'background-color 150ms ease, transform 100ms ease' }}
            >
              Contact Research Cell
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
