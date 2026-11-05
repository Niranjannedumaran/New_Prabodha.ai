import React, { useState } from 'react';
import { Bookmark, BookmarkCheck, ArrowRight, Sparkles, Compass, CheckCircle2, Star, Search, Clock, Users, Play } from 'lucide-react';
import { useWatchlist, SessionItem } from '../context/WatchlistContext';
import { SpotlightCard } from './SpotlightCard';
import { BrandEmblem } from './BrandEmblem';

interface SessionsSectionProps {
  onSelectSession: (session: SessionItem) => void;
}

export const SessionsSection: React.FC<SessionsSectionProps> = ({ onSelectSession }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  const categories = ['All', 'AI & Frontiers', 'Foundations', 'Career Vector', 'Creative Tech', 'Cognitive Science'];

  const learningPathways: Array<SessionItem & { svgIcon: React.ReactNode; mentalModels: string[] }> = [
    {
      id: 'ai-frontiers-101',
      title: 'First-Principles AI Architecture & Cognitive Agents',
      category: 'AI & Frontiers',
      level: 'Intermediate',
      duration: '4h 30m • 8 Modules',
      instructor: 'Dr. Aris Thorne',
      instructorRole: 'Principal AI Researcher & Systems Architect',
      rating: 4.96,
      studentsCount: '4.2k curious minds',
      thumbnail: '/assets/mascots/duo-study-composition.jpg',
      tags: ['Neural Models', 'Agentic Systems', 'Cognitive Scaffolding'],
      description:
        'Dismantle the black box of machine intelligence. Learn how modern AI agents perceive, reflect, plan, and reason from fundamental computational mechanics.',
      mentalModels: ['State Space Exploration', 'Vector Latent Representation', 'Reflective Tool Use'],
      svgIcon: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <circle cx="60" cy="60" r="45" stroke="#7652C8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="60" cy="60" r="30" stroke="#9B74F3" strokeWidth="1.5" opacity="0.6" />
          <circle cx="60" cy="60" r="6" fill="#7652C8" />
          <circle cx="35" cy="45" r="4" fill="#13A8FF" />
          <circle cx="85" cy="45" r="4" fill="#13A8FF" />
          <circle cx="45" cy="80" r="4" fill="#9B74F3" />
          <circle cx="75" cy="80" r="4" fill="#9B74F3" />
          <line x1="60" y1="60" x2="35" y2="45" stroke="#7652C8" strokeWidth="1.5" opacity="0.7" />
          <line x1="60" y1="60" x2="85" y2="45" stroke="#7652C8" strokeWidth="1.5" opacity="0.7" />
          <line x1="60" y1="60" x2="45" y2="80" stroke="#7652C8" strokeWidth="1.5" opacity="0.7" />
          <line x1="60" y1="60" x2="75" y2="80" stroke="#7652C8" strokeWidth="1.5" opacity="0.7" />
        </svg>
      ),
    },
    {
      id: 'math-intuition-202',
      title: 'Mathematical Intuition: Beyond Standard Formulas',
      category: 'Foundations',
      level: 'Foundational',
      duration: '3h 15m • 6 Modules',
      instructor: 'Elena Rostova',
      instructorRole: 'Curiosity Educator & Olympiad Mentor',
      rating: 4.98,
      studentsCount: '6.8k learners',
      thumbnail: '/assets/mascots/student-laptop-success.jpg',
      tags: ['Visual Calculus', 'Spatial Intuition', 'Pattern Discovery'],
      description:
        'Experience the profound beauty of mathematics visually. Bridge abstract symbols with spatial geometry and dynamic simulations that stick for life.',
      mentalModels: ['Rates of Accumulation', 'Manifold Transformations', 'Invariant Symmetry'],
      svgIcon: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <polygon points="60,20 100,85 20,85" stroke="#7652C8" strokeWidth="1.5" opacity="0.6" />
          <circle cx="60" cy="55" r="22" stroke="#9B74F3" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.7" />
          <line x1="60" y1="20" x2="60" y2="85" stroke="#7652C8" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="85" x2="80" y2="52" stroke="#13A8FF" strokeWidth="1" opacity="0.4" />
          <circle cx="60" cy="55" r="4" fill="#7652C8" />
        </svg>
      ),
    },
    {
      id: 'career-navigation-303',
      title: 'Strategic Career Navigation in the Age of AI Acceleration',
      category: 'Career Vector',
      level: 'Mastery',
      duration: '2h 45m • 5 Modules',
      instructor: 'Marcus Vance',
      instructorRole: 'Founding Talent Partner & Tech Strategist',
      rating: 4.92,
      studentsCount: '3.9k professionals',
      thumbnail: '/assets/mascots/student-peace.png',
      tags: ['Uncharted Paths', 'Portfolio Leverage', 'Asymmetric Growth'],
      description:
        'Stop blindly applying to rigid job descriptions. Build a resilient personal compass to discover emerging multidisciplinary roles and position yourself ahead of curve shifts.',
      mentalModels: ['Opportunity Arbitrage', 'Asymmetric Leverage', 'Defensible Specialization'],
      svgIcon: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <circle cx="60" cy="60" r="40" stroke="#7652C8" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <polygon points="60,25 72,55 60,50 48,55" fill="#7652C8" />
          <polygon points="60,95 72,65 60,70 48,65" fill="#EDE7FA" stroke="#7652C8" strokeWidth="1" />
          <circle cx="60" cy="60" r="3" fill="#13A8FF" />
        </svg>
      ),
    },
    {
      id: 'creative-systems-404',
      title: 'Creative Systems Engineering: Code & Spatial UI',
      category: 'Creative Tech',
      level: 'Advanced',
      duration: '5h 10m • 10 Modules',
      instructor: 'Siddharth Roy',
      instructorRole: 'Creative Technologist & UI Pioneer',
      rating: 4.95,
      studentsCount: '5.1k creators',
      thumbnail: '/assets/mascots/robot-compass.png',
      tags: ['Interactive Canvas', 'Micro-interactions', 'System Aesthetics'],
      description:
        'Master the synthesis of code, design discipline, and spatial motion. Build distinctive digital experiences that evoke wonder and command attention.',
      mentalModels: ['Kinetic Spring Physics', 'Spatial Stacking Contexts', 'Fluid Interpolation'],
      svgIcon: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <rect x="25" y="25" width="70" height="70" rx="16" stroke="#7652C8" strokeWidth="1.5" opacity="0.6" />
          <rect x="40" y="40" width="40" height="40" rx="8" stroke="#9B74F3" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="60" cy="60" r="8" fill="#EDE7FA" stroke="#7652C8" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'aspirant-diagnostics-505',
      title: 'Competitive Exam Rigor: Diagnostic Mental Models',
      category: 'Foundations',
      level: 'Intermediate',
      duration: '3h 50m • 7 Modules',
      instructor: 'Priya Narayanan',
      instructorRole: 'Cognitive Performance Coach & Exam Mentor',
      rating: 4.94,
      studentsCount: '8.4k aspirants',
      thumbnail: '/assets/mascots/student-stand-thumb.png',
      tags: ['Error Analysis', 'Speed-Accuracy Balance', 'Cognitive Stamina'],
      description:
        'Break free from brute-force question drilling. Discover personalized error diagnosis, cognitive load management, and calm composure under exam conditions.',
      mentalModels: ['Deliberate Error Taxonomy', 'Pacing Calibration', 'Pressure Invariance'],
      svgIcon: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <circle cx="60" cy="60" r="42" stroke="#7652C8" strokeWidth="1.5" opacity="0.6" />
          <path d="M 60 25 L 60 60 L 85 75" stroke="#9B74F3" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="60" r="5" fill="#7652C8" />
        </svg>
      ),
    },
    {
      id: 'socratic-thinking-606',
      title: 'Autonomous Inquiry: The Art of Asking Better Questions',
      category: 'Cognitive Science',
      level: 'Foundational',
      duration: '2h 20m • 4 Modules',
      instructor: 'Dr. Maya Lin',
      instructorRole: 'Epistemology & Education Theorist',
      rating: 4.99,
      studentsCount: '2.7k thinkers',
      thumbnail: '/assets/mascots/robot-idea.png',
      tags: ['Socratic Dialogue', 'Mental Clarity', 'Deep Questioning'],
      description:
        'The quality of your thinking is bounded by the quality of your questions. Learn to systematically deconstruct assumptions and ask questions that illuminate new frontiers.',
      mentalModels: ['First-Principles Disassembly', 'Assumption Inversion', 'Second-Order Inferences'],
      svgIcon: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <path d="M 35 60 Q 60 20 85 60 Q 60 100 35 60 Z" stroke="#7652C8" strokeWidth="1.5" opacity="0.7" />
          <circle cx="60" cy="60" r="14" fill="#EDE7FA" stroke="#9B74F3" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="5" fill="#7652C8" />
        </svg>
      ),
    },
  ];

  const filteredPathways = learningPathways.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mentalModels.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="sessions" className="py-20 sm:py-28 md:py-36 bg-white dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 relative border-t border-[#E8E1F5] dark:border-[#221B30]">
      {/* Precision hairline grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(118,82,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,82,200,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Coursera/Udemy/Apple High-Credibility Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold mb-4 border border-[#DDD2F7] dark:border-[#382658]">
              <Compass className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
              <span>CURATED MASTERCLASSES & LABS</span>
              <BrandEmblem size="sm" animated={true} />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight text-[#17151D] dark:text-white leading-[1.08]">
              Masterclasses & <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
                first-principles labs.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 mt-4 max-w-xl font-light leading-relaxed">
              Taught by top researchers, Olympiad mentors, and frontier engineers. Designed to cultivate permanent intuition rather than temporary test scores.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="w-full lg:w-80 relative">
            <Search className="w-4 h-4 text-[#85818D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search courses, skills, or models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F7F4FC] dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2E2442] text-xs text-[#17151D] dark:text-white placeholder:text-[#85818D] focus:outline-none focus:border-[#7652C8] transition-all"
            />
          </div>
        </div>

        {/* Category Pills (Coursera style with counts) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E8E1F5] dark:border-[#241C35]">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? learningPathways.length
                : learningPathways.filter((item) => item.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap active:scale-[0.96] transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#7652C8] text-white shadow-sm'
                    : 'bg-[#F7F4FC] dark:bg-[#181424] text-[#85818D] dark:text-white/60 hover:text-[#17151D] dark:hover:text-white border border-[#E8E1F5] dark:border-[#2E2442]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-[#EDE7FA] dark:bg-[#251A3A] text-[#7652C8] dark:text-[#DDD2F7]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPathways.map((pathway) => {
            const saved = isInWatchlist(pathway.id);

            return (
              <SpotlightCard
                key={pathway.id}
                className="bg-white dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  
                  {/* Card Header: Category Pill & Save Bookmark */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#552AA8] dark:text-[#DDD2F7] bg-[#EDE7FA] dark:bg-[#251A3A] px-3 py-1 rounded-full border border-[#DDD2F7] dark:border-[#382658]">
                      {pathway.category}
                    </span>

                    <button
                      onClick={() => toggleWatchlist(pathway)}
                      className={`p-2 rounded-full border active:scale-[0.9] transition-all duration-150 ${
                        saved
                          ? 'bg-[#7652C8] border-[#7652C8] text-white shadow-sm'
                          : 'border-[#E8E1F5] dark:border-[#2E2442] text-[#85818D] hover:text-[#7652C8] dark:hover:text-white hover:bg-[#F7F4FC] dark:hover:bg-[#1B162B]'
                      }`}
                      title={saved ? 'Remove from saved tracks' : 'Save to Watchlist'}
                      aria-label="Bookmark track"
                    >
                      {saved ? <BookmarkCheck className="w-4 h-4 fill-white" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Visual Diagram Banner with Preview Overlay */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl bg-[#FAF8FE] dark:bg-[#1A1428] border border-[#E8E1F5] dark:border-[#2E2442] flex items-center justify-center p-6 mb-5 overflow-hidden group-hover:border-[#7652C8]/50 transition-colors">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 ease-out group-hover:scale-105">
                      {pathway.svgIcon}
                    </div>

                    {/* Quick Preview Hover Pill */}
                    <div className="absolute inset-0 bg-[#7652C8]/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181424] shadow-soft text-xs font-semibold text-[#7652C8] dark:text-white flex items-center gap-1.5">
                        <Play className="w-3 h-3 fill-current" />
                        <span>Interactive Lab Ready</span>
                      </div>
                    </div>
                    
                    {/* Level / Duration Tag */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-medium text-[#85818D] dark:text-white/60">
                      <span>{pathway.level}</span>
                      <span>{pathway.duration}</span>
                    </div>
                  </div>

                  {/* Course Rating & Student Count (Coursera / Udemy style) */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                      <span>{pathway.rating}</span>
                    </div>
                    <span className="text-[11px] text-[#85818D] dark:text-white/50">•</span>
                    <span className="text-[11px] text-[#85818D] dark:text-white/60">
                      {pathway.studentsCount}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#17151D] dark:text-white mb-2 leading-snug group-hover:text-[#7652C8] dark:group-hover:text-[#EDE7FA] transition-colors">
                    {pathway.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4B5563] dark:text-white/70 leading-relaxed mb-5 font-light">
                    {pathway.description}
                  </p>

                  {/* Mental Models Acquired */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F1ECFA] dark:border-[#241C35]">
                    <div className="text-[10px] font-semibold text-[#85818D] dark:text-white/50 uppercase">
                      Mental Models Mastered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pathway.mentalModels.map((model) => (
                        <span
                          key={model}
                          className="text-[10px] bg-[#FAF8FE] dark:bg-[#1A1428] text-[#552AA8] dark:text-[#DDD2F7] border border-[#E8E1F5] dark:border-[#2E2442] px-2.5 py-0.5 rounded-full font-medium"
                        >
                          ✦ {model}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0 border-t border-[#F1ECFA] dark:border-[#241C35] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#17151D] dark:text-white">{pathway.instructor}</div>
                    <div className="text-[10px] text-[#85818D] dark:text-white/50">{pathway.instructorRole}</div>
                  </div>

                  <button
                    onClick={() => onSelectSession(pathway)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7652C8] dark:text-[#B395F7] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {filteredPathways.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8FE] dark:bg-[#14101F] rounded-3xl border border-[#E8E1F5] dark:border-[#2A203E] mt-6">
            <p className="text-sm text-[#85818D] dark:text-white/60 mb-2">No masterclasses matched your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#7652C8] underline"
            >
              Reset filters & search
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
