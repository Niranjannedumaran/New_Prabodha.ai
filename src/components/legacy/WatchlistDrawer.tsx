import React, { useEffect } from 'react';
import { X, Bookmark, Trash2, Play, Clock, ArrowRight, Sparkles, GripVertical } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useWatchlist, SessionItem } from '../context/WatchlistContext';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSession: (session: SessionItem) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSession,
}) => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const shouldReduceMotion = useReducedMotion();

  // Escape key listener for keyboard-initiated dismissal (instant / fast per Emil)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Scrim with Glass Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.22, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 bg-[#0C0A12]/60 dark:bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            {/* Gesture-driven Draggable Drawer Shell */}
            <motion.div
              drag={shouldReduceMotion ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0.05, right: 0.65 }}
              onDragEnd={(_, info) => {
                // Velocity handoff & momentum projection (Emil + Apple fluid principles)
                // Dismiss if flicked right with velocity > 250px/s or pulled > 110px
                if (info.velocity.x > 250 || info.offset.x > 110) {
                  onClose();
                }
              }}
              initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.12 }
                  : { type: 'spring', stiffness: 340, damping: 34, mass: 0.9 }
              }
              className="w-screen max-w-md bg-white/95 dark:bg-[#120F1D]/95 backdrop-blur-2xl text-[#17151D] dark:text-white shadow-[-12px_0_48px_-8px_rgba(24,16,42,0.28)] border-l border-[#E8E1F5] dark:border-[#241C35] flex flex-col justify-between touch-pan-y"
            >
              {/* Header with Visual Grab Handle affordance */}
              <div className="p-5 sm:p-6 border-b border-[#E8E1F5] dark:border-[#241C35] flex items-center justify-between relative bg-gradient-to-b from-[#F7F4FC]/80 to-transparent dark:from-[#181424]/60">
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex text-[#85818D]/40 cursor-grab active:cursor-grabbing" title="Drag right to dismiss">
                    <GripVertical className="w-4 h-4" />
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#EDE7FA] dark:bg-[#7652C8]/20 text-[#7652C8] dark:text-[#EDE7FA] flex items-center justify-center flex-shrink-0">
                    <Bookmark className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display">Your Saved Watchlist</h3>
                    <p className="text-[11px] text-[#85818D] dark:text-white/60">
                      {watchlist.length} {watchlist.length === 1 ? 'learning track' : 'learning tracks'} saved
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-[#85818D] hover:text-[#17151D] dark:hover:text-white hover:bg-[#F7F4FC] dark:hover:bg-[#1B162B] active:scale-[0.93] transition-all duration-150"
                  aria-label="Close watchlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body: List of saved sessions */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                {watchlist.length > 0 ? (
                  watchlist.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="p-4 rounded-2xl bg-[#F7F4FC]/90 dark:bg-[#171324] border border-[#E8E1F5] dark:border-[#241C35] flex gap-3.5 items-start group hover:border-[#7652C8]/40 hover:shadow-soft transition-all duration-200"
                    >
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-[#241C35]"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-[#EDE7FA] dark:bg-[#241C35] flex items-center justify-center text-[#7652C8] flex-shrink-0">
                          <Bookmark className="w-5 h-5" />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono font-semibold uppercase text-[#7652C8] dark:text-[#EDE7FA]">
                          {item.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#17151D] dark:text-white line-clamp-2 mt-0.5 mb-1 group-hover:text-[#7652C8] transition-colors duration-150">
                          {item.title}
                        </h4>
                        <div className="text-[11px] text-[#85818D] dark:text-white/50 flex items-center gap-1 mb-2.5">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onClose();
                              onSelectSession(item);
                            }}
                            className="px-3 py-1 bg-[#7652C8] hover:bg-[#623cb8] active:scale-[0.96] text-white rounded-lg text-[11px] font-semibold flex items-center gap-1 shadow-sm transition-all duration-120"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Launch</span>
                          </button>

                          <button
                            onClick={() => removeFromWatchlist(item.id)}
                            className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center text-[#85818D] hover:text-rose-500 active:scale-[0.92] rounded-lg transition-all duration-120 focus-visible:ring-2 focus-visible:ring-[#7652C8]"
                            title="Remove from watchlist"
                            aria-label={`Remove ${item.title} from watchlist`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-16 px-4 flex flex-col items-center">
                    <div className="w-24 h-24 mb-4">
                      <img
                        src="/assets/mascots/robot-welcome.png"
                        alt="Empty Watchlist Mascot"
                        className="w-full h-full object-contain filter drop-shadow-md"
                      />
                    </div>
                    <h4 className="text-base font-bold text-[#17151D] dark:text-white">
                      Your Watchlist is empty
                    </h4>
                    <p className="text-xs text-[#85818D] dark:text-white/60 max-w-xs mt-1 mb-6 leading-relaxed">
                      Bookmark masterclasses and conceptual tracks to build your personalized discovery queue.
                    </p>
                    <a
                      href="#sessions"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7652C8] text-white text-xs font-semibold rounded-xl hover:bg-[#623cb8] active:scale-[0.97] shadow-sm transition-all duration-150"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Browse Masterclasses</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Footer */}
              {watchlist.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-[#E8E1F5] dark:border-[#241C35] bg-[#F7F4FC] dark:bg-[#171324]/50">
                  <div className="flex items-center justify-between text-xs text-[#85818D] dark:text-white/60 mb-3">
                    <span>Personal Learning Path</span>
                    <span className="font-mono text-[#7652C8] font-semibold">{watchlist.length} modules queued</span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectSession(watchlist[0]);
                    }}
                    className="w-full py-3 bg-[#7652C8] hover:bg-[#623cb8] active:scale-[0.98] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-soft hover:shadow-glow-purple transition-all duration-150"
                  >
                    <span>Start Next Queued Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
