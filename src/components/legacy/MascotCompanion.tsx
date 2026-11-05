import React, { useState } from 'react';
import { Sparkles, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface MascotCompanionProps {
  onOpenContact: () => void;
}

export const MascotCompanion: React.FC<MascotCompanionProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const tips = [
    'Your potential has no syllabus. What are you curious to explore today?',
    'Curiosity transforms hard concepts into fascinating adventures.',
    'First-principles thinking unlocks what conventional checklists miss.',
    'Mentorship is not about grading tests—it is about opening new horizons.',
  ];

  const nextTip = () => {
    setTipIndex((prev) => (prev + 1) % tips.length);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Speech Bubble Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.94 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 8, scale: 0.96 }
            }
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-72 sm:w-80 bg-white/95 dark:bg-[#181424]/95 backdrop-blur-xl rounded-3xl p-5 shadow-soft-xl border border-[#E8E1F5] dark:border-[#2A203E]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F1ECFA] dark:border-[#251D35]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#552AA8] dark:text-[#DDD2F7]">
                <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
                <span>Prabodha Companion</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#85818D] hover:text-[#17151D] dark:text-white/60 dark:hover:text-white p-1 rounded-full active:scale-[0.92] transition-transform duration-100"
                aria-label="Close companion dialog"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#302044] dark:text-white/90 font-medium my-3.5 leading-relaxed">
              "{tips[tipIndex]}"
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#F1ECFA] dark:border-[#251D35]">
              <button
                onClick={nextTip}
                className="text-xs text-[#7652C8] dark:text-[#B395F7] hover:underline font-semibold active:scale-[0.96] transition-transform duration-100"
              >
                Next spark ✦
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact();
                }}
                className="text-xs bg-[#EDE7FA] dark:bg-[#251A3A] hover:bg-[#7652C8] hover:text-white text-[#552AA8] dark:text-[#EDE7FA] px-3 py-1.5 rounded-full font-semibold active:scale-[0.96] transition-all duration-120 flex items-center gap-1 border border-[#DDD2F7] dark:border-[#382658]"
              >
                <span>Ask mentor</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mascot Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-white/95 dark:bg-[#181424]/95 backdrop-blur-md pl-1.5 pr-3.5 py-1.5 rounded-full shadow-soft-lg border border-[#E8E1F5] dark:border-[#2A203E] hover:border-[#7652C8]/50 active:scale-[0.95] transition-all duration-150"
        aria-label="Toggle Prabodha Companion"
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] flex items-center justify-center overflow-hidden transition-transform duration-150 group-hover:scale-105 flex-shrink-0">
          <img
            src="/assets/mascots/robot-welcome.png"
            alt="Prabodha Mascot Companion"
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-xs font-semibold text-[#17151D] dark:text-white leading-tight">
            Prabodha Guide
          </div>
          <div className="text-[10px] text-[#7652C8] dark:text-[#B395F7] font-medium leading-tight">
            Curiosity Spark
          </div>
        </div>
      </button>
    </div>
  );
};
