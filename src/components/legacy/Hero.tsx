import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Search, CheckCircle2, Lightbulb, BookOpen, ArrowDown } from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [heroPrompt, setHeroPrompt] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isLogoSparkling, setIsLogoSparkling] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const curiositySuggestions = [
    { label: 'Neural Networks Intuition', target: 'demo' },
    { label: 'Mathematical Foundations', target: 'sessions' },
    { label: 'Autonomous AI Agents', target: 'sessions' },
    { label: 'Systems Thinking', target: 'demo' },
  ];

  const handleSelectSuggestion = (topic: { label: string; target: string }) => {
    setHeroPrompt(topic.label);
    setSelectedTopic(topic.label);
    const targetEl = document.getElementById(topic.target);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const demoEl = document.getElementById('demo') || document.getElementById('sessions');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerLogoSparkle = () => {
    setIsLogoSparkling(true);
    setTimeout(() => setIsLogoSparkling(false), 1200);
  };

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-38 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#FAF8FE] dark:bg-[#0D0B14] text-[#17151D] dark:text-[#F3F0FA] transition-colors duration-300 isolate"
    >
      {/* 1. Material 3 Tonal Radial Aura in Company Violet */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] pointer-events-none select-none -z-0 opacity-80 dark:opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 10%, rgba(118, 82, 200, 0.22), rgba(155, 116, 243, 0.06) 50%, transparent 75%)',
        }}
      />

      {/* 2. Soft Ambient Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(118,82,200,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,82,200,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none select-none -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center w-full">
          
          {/* Left Column: Material Design 3 Editorial Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* M3 Tonal Pill Badge with Brand Logo Icon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EDE7FA] dark:bg-[#251A3A] border border-[#DDD2F7] dark:border-[#382658] text-[#552AA8] dark:text-[#DDD2F7] shadow-sm mb-6 transition-all duration-200 hover:scale-102">
              <div className="w-5 h-5 rounded-lg overflow-hidden flex-shrink-0 shadow-xs">
                <img
                  src="/assets/brand/prabodha-logo.png"
                  alt="Prabodha Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold tracking-wide">
                Materializing the Future of Learning
              </span>
              <BrandEmblem size="sm" animated={true} />
            </div>

            {/* M3 Display Headline with Signature Violet Accent */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-wide font-black uppercase tracking-tight leading-[1.06] mb-6 text-[#17151D] dark:text-white">
              YOUR <br />
              POTENTIAL <br />
              HAS{' '}
              <span className="font-editorial italic font-normal lowercase tracking-normal text-[#7652C8] dark:text-[#EDE7FA] editorial-underline">
                no syllabus.
              </span>
            </h1>

            {/* M3 Body Large: Inspiring Mission */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4B5563] dark:text-white/80 leading-relaxed max-w-2xl mb-8 font-light">
              Learning is more than memorizing for the next exam. Prabodha AI connects first-principles intuition with personal curiosity, collaborative mentorship, and lifelong career growth.
            </p>

            {/* M3 Interactive Curiosity Search Bar */}
            <div className="w-full max-w-xl mb-6">
              <form
                onSubmit={handlePromptSubmit}
                className="flex items-center gap-2 p-2 rounded-full bg-white dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2E2442] shadow-soft-md focus-within:border-[#7652C8] focus-within:ring-4 focus-within:ring-[#7652C8]/15 transition-all duration-200"
              >
                <div className="pl-3 text-[#7652C8] dark:text-[#B395F7]">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="What are you curious about today?"
                  value={heroPrompt}
                  onChange={(e) => setHeroPrompt(e.target.value)}
                  className="flex-1 px-2 py-1.5 text-xs sm:text-sm bg-transparent text-[#17151D] dark:text-white placeholder:text-[#85818D] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#7652C8] hover:bg-[#643EBA] active:scale-[0.96] text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-150 shadow-sm"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Suggestion Chips with Brand Sparkle */}
              <div className="flex flex-wrap items-center gap-2 mt-3 pl-2">
                <span className="text-[11px] font-medium text-[#85818D] dark:text-white/50">Try:</span>
                {curiositySuggestions.map((topic) => (
                  <button
                    key={topic.label}
                    onClick={() => handleSelectSuggestion(topic)}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full active:scale-[0.95] transition-all duration-150 flex items-center gap-1.5 ${
                      selectedTopic === topic.label
                        ? 'bg-[#7652C8] text-white shadow-xs'
                        : 'bg-[#F1ECF6] dark:bg-[#201A2E] text-[#552AA8] dark:text-[#DDD2F7] hover:bg-[#EDE7FA] dark:hover:bg-[#2A203F]'
                    }`}
                  >
                    <span>✦</span>
                    <span>{topic.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* M3 Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary Filled Button */}
              <a
                href="#sessions"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#7652C8] hover:bg-[#643EBA] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-soft hover:shadow-soft-lg active:scale-[0.97] transition-all duration-150"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Learning Pathways</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </a>

              {/* Tonal Button */}
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-[#EDE7FA] dark:bg-[#201A2E] hover:bg-[#E3D7F7] dark:hover:bg-[#2C2340] text-[#552AA8] dark:text-[#EDE7FA] border border-[#DDD2F7] dark:border-[#382658] px-6 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-all duration-150"
              >
                <Lightbulb className="w-4 h-4 text-[#7652C8] dark:text-[#B395F7]" />
                <span>Try Socratic Sandbox</span>
              </a>
            </div>

            {/* M3 Surface Container: Highlights Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 mt-8 border-t border-[#E8E1F5] dark:border-[#241C35] w-full max-w-lg">
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-[#161222]/70 border border-[#E8E1F5] dark:border-[#2A203E] hover:border-[#7652C8]/40 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-[#17151D] dark:text-white">01</div>
                <div className="text-[11px] sm:text-xs text-[#85818D] dark:text-white/60 font-medium mt-0.5">
                  Deep Foundations
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#EDE7FA]/60 dark:bg-[#221838]/60 border border-[#DDD2F7] dark:border-[#382658] hover:border-[#7652C8]/60 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-[#7652C8] dark:text-[#B395F7]">02</div>
                <div className="text-[11px] sm:text-xs text-[#552AA8] dark:text-[#EDE7FA]/80 font-medium mt-0.5">
                  Socratic Guidance
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-[#161222]/70 border border-[#E8E1F5] dark:border-[#2A203E] hover:border-[#7652C8]/40 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-[#17151D] dark:text-white">03</div>
                <div className="text-[11px] sm:text-xs text-[#85818D] dark:text-white/60 font-medium mt-0.5">
                  Continuous Growth
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Mascot Duo + Official Brand Logo Emblem Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Aura & Orbital Framing */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Outer soft ambient rings */}
              <div className="absolute inset-0 rounded-full border border-[#EDE7FA] dark:border-[#2A223B] animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-dashed border-[#7652C8]/20 dark:border-[#7652C8]/35 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-b from-[#EDE7FA]/70 dark:from-[#1E1730]/80 to-[#FAF8FE] dark:to-[#0D0B14] shadow-soft-xl -z-0" />

              {/* Student Mascot Image */}
              <div className="relative z-10 w-[72%] -ml-12 filter drop-shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src="/assets/mascots/student-peace.png"
                  alt="Prabodha Student Mascot - Curious, ambitious learner"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* AI Robot Mascot Companion */}
              <div className="absolute -top-4 -right-2 z-20 w-[48%] animate-float-slow filter drop-shadow-xl transition-transform duration-500 hover:scale-110">
                <img
                  src="/assets/mascots/robot-welcome.png"
                  alt="Prabodha AI Robot Mascot - Guiding and supportive companion"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Official Brand Logo Floating Seal (Interactive Click & Hover) */}
              <div
                onClick={triggerLogoSparkle}
                className="absolute top-2 left-4 z-30 cursor-pointer group/seal"
                title="Click to activate Prabodha spark!"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-1 bg-[#0E0C16] border-2 border-[#DDD2F7] dark:border-[#B395F7] shadow-soft-xl transition-all duration-300 group-hover/seal:scale-115 group-hover/seal:rotate-3 group-active/seal:scale-90 ${
                    isLogoSparkling ? 'ring-4 ring-[#7652C8] animate-pulse' : ''
                  }`}
                >
                  <img
                    src="/assets/brand/prabodha-logo.png"
                    alt="Prabodha Brand Logo Emblem"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Glowing 4-pointed sparkle indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#7652C8] text-white rounded-full flex items-center justify-center shadow-xs">
                    <span className="text-[10px]">✦</span>
                  </div>
                </div>
              </div>

              {/* M3 Floating Insight Card 1 */}
              <div className="absolute -bottom-3 -left-3 z-30">
                <div className="bg-white/95 dark:bg-[#181424]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft-lg flex items-center gap-3 border border-[#E8E1F5] dark:border-[#2E2442] animate-float-delayed hover:scale-103 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-[#EDE7FA] dark:bg-[#251A3A] flex items-center justify-center text-[#7652C8] dark:text-[#EDE7FA] flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#17151D] dark:text-white">Curiosity Roadmaps</div>
                    <div className="text-[10px] text-[#85818D] dark:text-white/60">Beyond static syllabus</div>
                  </div>
                </div>
              </div>

              {/* M3 Floating Insight Card 2: Socratic Mentor Active */}
              <div className="absolute top-16 -right-6 z-30 hidden sm:block">
                <div className="bg-white/95 dark:bg-[#181424]/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-soft-md flex items-center gap-2 border border-[#E8E1F5] dark:border-[#2E2442] animate-float-slow hover:scale-103 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                  <span className="text-xs font-semibold text-[#302044] dark:text-white/90">
                    Socratic Mentor Active
                  </span>
                </div>
              </div>

              {/* M3 Floating Insight Card 3: Retention Metric */}
              <div className="absolute bottom-16 -right-4 z-30 hidden sm:block">
                <div className="bg-white/95 dark:bg-[#181424]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-soft-md flex items-center gap-2 border border-[#E8E1F5] dark:border-[#2E2442] hover:scale-103 transition-transform">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11px] font-semibold text-[#17151D] dark:text-white/90">
                    94% Conceptual Retention
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Cue Button */}
      <div className="w-full flex justify-center pb-2 pt-6 relative z-10">
        <button
          onClick={scrollToJourney}
          className="group inline-flex flex-col items-center gap-1.5 text-xs text-[#85818D] dark:text-white/50 hover:text-[#7652C8] dark:hover:text-[#EDE7FA] active:scale-[0.95] transition-all"
          aria-label="Scroll to user journey flow"
        >
          <span className="text-[11px] font-semibold tracking-wider uppercase">Scroll to explore</span>
          <div className="w-7 h-7 rounded-full bg-white dark:bg-[#181424] border border-[#E8E1F5] dark:border-[#2E2442] flex items-center justify-center shadow-xs group-hover:border-[#7652C8] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#7652C8] dark:text-[#B395F7]" />
          </div>
        </button>
      </div>
    </section>
  );
};
