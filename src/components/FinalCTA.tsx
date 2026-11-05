import React from 'react';
import { ArrowUp, Sparkles, Send } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#F7F4FC] dark:bg-[#0A090F] text-[#17151D] dark:text-white transition-colors duration-300 relative overflow-hidden border-t border-[#E8E1F5] dark:border-[#221B30]">
      
      {/* Precision hairline grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(118,82,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,82,200,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl bg-white dark:bg-[#14101F] border border-[#E8E1F5] dark:border-[#2A203E] shadow-soft-xl p-6 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] text-[#552AA8] dark:text-[#DDD2F7] text-xs font-semibold border border-[#DDD2F7] dark:border-[#382658]">
                <Sparkles className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#B395F7]" />
                <span>JOIN THE JOURNEY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-wide font-black uppercase tracking-tight leading-[1.08]">
                Your next chapter <br className="hidden sm:inline" />
                <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
                  starts with curiosity.
                </span>
              </h2>

              <p className="text-base sm:text-xl font-medium text-[#302044] dark:text-[#EDE7FA] font-editorial italic">
                "Keep learning. Stay curious. Explore what is possible."
              </p>

              <p className="text-sm sm:text-base text-[#4B5563] dark:text-white/70 leading-relaxed max-w-xl font-light">
                Discover the vision behind Prabodha AI and join us as we build a new perspective on learning, exploration, and individual potential.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 bg-[#7652C8] hover:bg-[#643EBA] text-white px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm shadow-soft hover:shadow-soft-lg active:scale-[0.97] transition-all duration-150"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Connect With Us</span>
                </button>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center gap-2 bg-[#F7F4FC] dark:bg-[#1A1428] hover:bg-[#EDE7FA] dark:hover:bg-[#241A38] text-[#17151D] dark:text-white px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm border border-[#E8E1F5] dark:border-[#2A203E] active:scale-[0.97] transition-all duration-150"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#7652C8] dark:text-[#EDE7FA]" />
                  <span>Back to Top</span>
                </button>
              </div>

              <div className="pt-2 text-xs text-[#85818D] dark:text-white/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 ring-4 ring-emerald-500/20" />
                <span>Actively engaging with learners, mentors & academic collaborators.</span>
              </div>
            </div>

            {/* Right Column: Dynamic Duo Mascot Celebration */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square flex items-center justify-center">
                
                {/* Aura backdrop */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EDE7FA] dark:from-[#1E1730] to-[#FAF8FE] dark:to-[#0A090F] shadow-soft -z-0" />
                <div className="absolute inset-4 rounded-full border border-dashed border-[#7652C8]/30 dark:border-[#7652C8]/50 animate-[spin_60s_linear_infinite]" />

                {/* Leaping student mascot */}
                <div className="relative z-10 w-[78%] transition-transform duration-500 hover:scale-105 filter drop-shadow-xl">
                  <img
                    src="/assets/mascots/student-jump.png"
                    alt="Prabodha Student Mascot leaping toward the future"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Cheering robot mascot floating alongside */}
                <div className="absolute -top-4 -right-2 z-20 w-[45%] animate-float-slow filter drop-shadow-lg">
                  <img
                    src="/assets/mascots/robot-cheer.png"
                    alt="Prabodha AI Robot Mascot cheering enthusiastically"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
