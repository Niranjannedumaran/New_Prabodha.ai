import React, { useEffect } from 'react';
import { X, Bookmark, BookmarkCheck, Sparkles, BookOpen, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SessionItem, useWatchlist } from '../context/WatchlistContext';

interface SessionPreviewModalProps {
  session: SessionItem | null;
  onClose: () => void;
  onOpenCompanion: () => void;
}

export const SessionPreviewModal: React.FC<SessionPreviewModalProps> = ({
  session,
  onClose,
  onOpenCompanion,
}) => {
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const shouldReduceMotion = useReducedMotion();

  // Instant Escape key dismissal
  useEffect(() => {
    if (!session) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [session, onClose]);

  const defaultSyllabus = [
    {
      title: 'Module 01: Axiomatic Foundations & Intuition',
      hours: '35 Hours',
      topics: ['First-principles reasoning without rote memorization', 'Structural mental models and invariant laws', 'Deconstructing past examination misconceptions'],
    },
    {
      title: 'Module 02: Analytical Problem Deconstruction',
      hours: '50 Hours',
      topics: ['Multi-variable problem modeling', 'Elimination through logical boundary testing', 'High-speed deductive reasoning'],
    },
    {
      title: 'Module 03: Socratic Diagnostic Lab & PYQ Mastery',
      hours: '45 Hours',
      topics: ['Past 10 years actual exam problem analysis', 'Socratic mistake pattern identification', 'Timed adaptive accuracy drills'],
    },
  ];

  const modulesToDisplay = session?.syllabusModules && session.syllabusModules.length > 0
    ? session.syllabusModules
    : defaultSyllabus;

  return (
    <AnimatePresence mode="wait">
      {session && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Scrim with Glass Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#0C0A12]/65 dark:bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Dialog Card with Materializing Blur & Scale */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 12, filter: 'blur(4px)' }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.98, y: 6, filter: 'blur(2px)' }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.1 }
                : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
            }
            className="relative bg-white/95 dark:bg-[#120F1D]/95 backdrop-blur-2xl text-[#17151D] dark:text-white rounded-3xl max-w-3xl w-full border border-[#E8E1F5] dark:border-[#241C35] shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Top Header */}
            <div className="p-6 sm:p-8 border-b border-[#E8E1F5] dark:border-[#221B30] flex items-start justify-between relative bg-gradient-to-b from-[#F7F4FC] to-white dark:from-[#181424] dark:to-[#120F1D]">
              <div className="pr-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA] bg-[#EDE7FA]/80 dark:bg-[#201B30] border border-[#E8E1F5] dark:border-[#2A223B] px-2.5 py-0.5 rounded-md">
                    {session.category}
                  </span>
                  {session.targetExam && (
                    <span className="text-xs font-semibold text-[#552AA8] dark:text-[#B395F7]">
                      🎯 {session.targetExam}
                    </span>
                  )}
                  <span className="text-xs font-mono text-[#85818D] dark:text-white/60">• {session.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[#17151D] dark:text-white">
                  {session.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#85818D] hover:text-[#17151D] dark:hover:text-white hover:bg-white dark:hover:bg-[#201B30] active:scale-[0.92] transition-all duration-120"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Details & Syllabus Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA] mb-2">
                  Aspirant Cohort Syllabus & Pedagogy
                </h4>
                <p className="text-sm text-[#4B5563] dark:text-white/80 leading-relaxed font-light">
                  {session.description}
                </p>
              </div>

              {/* Pricing & Watchlist Bar */}
              <div className="p-4 rounded-2xl bg-[#F7F4FC] dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2A223B] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    {session.price && (
                      <span className="text-xl font-bold text-[#17151D] dark:text-white font-mono">
                        {session.price}
                      </span>
                    )}
                    {session.originalPrice && (
                      <span className="text-xs text-[#85818D] line-through font-mono">
                        {session.originalPrice}
                      </span>
                    )}
                    {session.discountBadge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {session.discountBadge}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#85818D] dark:text-white/60 mt-0.5">
                    {session.instructor} • {session.instructorRole}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleWatchlist(session)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border active:scale-[0.96] transition-all duration-150 ${
                      isInWatchlist(session.id)
                        ? 'bg-[#7652C8] border-[#7652C8] text-white'
                        : 'bg-white dark:bg-[#120F1D] border-[#E8E1F5] dark:border-[#2A223B] text-[#7652C8] dark:text-[#EDE7FA] hover:border-[#7652C8]/50'
                    }`}
                  >
                    {isInWatchlist(session.id) ? (
                      <BookmarkCheck className="w-3.5 h-3.5 fill-white" />
                    ) : (
                      <Bookmark className="w-3.5 h-3.5" />
                    )}
                    <span>{isInWatchlist(session.id) ? 'Saved to Watchlist' : 'Save Batch'}</span>
                  </button>
                </div>
              </div>

              {/* Syllabus Modules */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7652C8] dark:text-[#EDE7FA] mb-3">
                  Verified Curriculum Modules
                </h4>

                <div className="space-y-3">
                  {modulesToDisplay.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-[#E8E1F5] dark:border-[#221B30] bg-white dark:bg-[#181424] hover:border-[#7652C8]/50 transition-colors duration-150"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#17151D] dark:text-white">{m.title}</span>
                        <span className="text-[10px] font-mono text-[#85818D] dark:text-white/50">{m.hours}</span>
                      </div>
                      <div className="space-y-1">
                        {m.topics.map((t, tIdx) => (
                          <div key={tIdx} className="text-xs text-[#6B7280] dark:text-white/70 flex items-start gap-1.5">
                            <span className="text-[#7652C8] font-bold">•</span>
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenCompanion();
                  }}
                  className="w-full py-3.5 bg-[#7652C8] hover:bg-[#623cb8] active:scale-[0.98] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-soft hover:shadow-glow-purple transition-all duration-150"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Test First-Principles Deconstruction in Socratic Lab</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
