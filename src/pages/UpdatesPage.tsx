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
    <div className="pt-28 pb-24 bg-[#FCFBFE] dark:bg-[#0B0A0F] text-[#19171F] dark:text-[#F3F2F8] min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF]">
            Platform Dispatch & Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-[#19171F] dark:text-white leading-[1.08]">
            Updates & <br />
            <span className="font-editorial italic font-normal text-[#7550C8] dark:text-[#B99CFF]">
              research notes.
            </span>
          </h1>
          <p className="text-base text-[#77727F] dark:text-[#9490A0] font-light leading-relaxed">
            Verified architectural releases, pedagogical investigations, and learning research published by the Prabodha AI engineering and academic cell.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6 mb-16">
          {updates.map((post) => (
            <article
              key={post.id}
              className="p-8 rounded-3xl bg-white dark:bg-[#14121E] border border-[#EAE7EF] dark:border-[#272535] shadow-soft-xs hover:border-[#7550C8]/50 transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#77727F] dark:text-[#9490A0]">
                <span className="px-3 py-1 rounded-full bg-[#F7F3FD] dark:bg-[#1F1C2E] text-[#7550C8] dark:text-[#B99CFF] font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date} • {post.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#19171F] dark:text-white">
                {post.title}
              </h2>

              <p className="text-sm text-[#475569] dark:text-[#CBD5E1] font-light leading-relaxed">
                {post.summary}
              </p>
            </article>
          ))}
        </div>

        {/* Dialogue Note */}
        <div className="p-8 rounded-3xl bg-[#F5F4F7] dark:bg-[#151320] border border-[#EAE7EF] dark:border-[#272535] text-center space-y-3">
          <h3 className="text-lg font-bold text-[#19171F] dark:text-white">
            Interested in learning research collaborations?
          </h3>
          <p className="text-xs sm:text-sm text-[#77727F] dark:text-[#9490A0] font-light max-w-md mx-auto">
            Our team collaborates with cognitive scientists, educational researchers, and academic institutions worldwide.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-[#19171F] dark:bg-white text-white dark:text-[#19171F] hover:bg-[#7550C8] text-xs font-semibold transition-all"
            >
              Contact Research Cell
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

