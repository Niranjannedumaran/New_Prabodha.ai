import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Sparkles, CheckCircle2, ArrowRight, Lightbulb, Compass } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const PhysicalAnalogySimulator: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(35); // 0 to 100%
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(2);

  // Ongoing simulation animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1.2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Derive cart and ray position and angle based on boundary crossing at progress = 50
  const isPastBoundary = progress >= 50;
  const pivotAngle = isPastBoundary ? Math.min(26, ((progress - 50) / 25) * 26) : 0;

  return (
    <SpotlightCard className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#141220] border border-[#E4DCF0] dark:border-[#272439] shadow-[0_8px_30px_-6px_rgba(117,80,200,0.08)] space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE7EF] dark:border-[#252236] pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#7550C8] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7550C8] dark:text-[#B99CFF] font-bold">
              Living Socratic Laboratory
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#19171F] dark:text-white">
            Deconstructing Snell's Law via Physical Analogy
          </h3>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5F2FB] dark:bg-[#1E192E] border border-[#DDD2F7] dark:border-[#382D55] text-xs font-mono font-medium text-[#7550C8] dark:text-[#D5C2FF] hover:bg-[#EDE6FB] transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Motion</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Run Wavefront</span>
              </>
            )}
          </button>
          
          <button
            onClick={() => { setProgress(0); setIsPlaying(true); }}
            className="p-1.5 rounded-full bg-[#F5F2FB] dark:bg-[#1E192E] border border-[#DDD2F7] dark:border-[#382D55] text-[#7550C8] dark:text-[#D5C2FF] hover:bg-[#EDE6FB] transition-colors"
            title="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Visual Simulation Stage */}
      <div className="relative rounded-2xl bg-[#F8F6FD] dark:bg-[#100E19] border border-[#E6DEF2] dark:border-[#2A263E] p-5 sm:p-8 overflow-hidden space-y-6">
        
        {/* Subtle background coordinate grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#7550C8_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-10 dark:opacity-15 pointer-events-none" />

        {/* Boundary separator line (Medium 1 vs Medium 2) */}
        <div className="relative h-44 sm:h-52 rounded-xl bg-white/70 dark:bg-[#151221]/80 backdrop-blur-sm border border-[#E4DCF0] dark:border-[#2D2842] overflow-hidden flex flex-col justify-between p-4">
          
          {/* Top Half: Medium 1 (Asphalt / Air, speed = c) */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-amber-50/30 dark:bg-amber-950/10 border-b-2 border-dashed border-[#7550C8]/40 flex items-start justify-between p-3 pointer-events-none">
            <span className="text-[10px] font-mono text-[#77727F] dark:text-[#9A95A8] uppercase font-bold">
              Medium 1: Air / Smooth Asphalt (Speed = 1.0c)
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              Unrestricted Velocity
            </span>
          </div>

          {/* Bottom Half: Medium 2 (Glass / Thick Mud, speed = 0.67c) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#EDE6FB]/20 dark:bg-[#201838]/30 flex items-end justify-between p-3 pointer-events-none">
            <span className="text-[10px] font-mono text-[#7550C8] dark:text-[#B99CFF] uppercase font-bold">
              Medium 2: Optical Glass / Mud (Speed = 0.67c)
            </span>
            <span className="text-[10px] font-mono text-[#7550C8] dark:text-[#D5C2FF] font-semibold">
              Wave Speed Retarded
            </span>
          </div>

          {/* Animated Wavefront / Cart Crossing Boundary */}
          <div
            className="absolute z-10 transition-transform duration-75"
            style={{
              left: `${progress}%`,
              top: `${Math.min(85, 15 + progress * 0.7)}%`,
              transform: `translate(-50%, -50%) rotate(${pivotAngle}deg)`,
            }}
          >
            {/* The Cart & Wavefront Icon */}
            <div className="relative p-2.5 rounded-xl bg-[#7550C8] text-white shadow-soft flex items-center gap-2 border border-white/30">
              <Compass className="w-5 h-5 animate-pulse" />
              <div className="text-[10px] font-mono font-bold leading-tight">
                <div>Wavefront</div>
                <div className="text-white/80">{pivotAngle > 0 ? `Bending: +${pivotAngle.toFixed(0)}°` : 'Straight'}</div>
              </div>

              {/* Trailing light ray beam */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-24 h-0.5 bg-gradient-to-l from-[#7550C8] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Boundary Normal Indicator */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-[#7550C8]/30 flex items-center justify-center">
            <span className="text-[9px] font-mono bg-white dark:bg-[#1A1629] px-1 py-0.5 rounded text-[#77727F] -rotate-90">
              Normal Axis
            </span>
          </div>

        </div>

        {/* Interactive Scrub Slider for Manual Exploration */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#77727F]">
            <span>Drag to inspect boundary transition:</span>
            <span className="font-bold text-[#7550C8]">{progress.toFixed(0)}% Progress</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
              setProgress(Number(e.target.value));
              setIsPlaying(false);
            }}
            className="w-full h-2 rounded-full appearance-none bg-[#EAE7EF] dark:bg-[#28233C] accent-[#7550C8] cursor-pointer"
          />
        </div>

      </div>

      {/* Socratic Dialogue Contrast Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Conventional Coaching Trap */}
        <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-rose-700 dark:text-rose-400 font-bold">
              Traditional Coaching (Rote Equation)
            </span>
            <span className="text-[10px] font-mono text-rose-600 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded">
              Superficial
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#334155] dark:text-[#E2E8F0] font-light leading-relaxed">
            &ldquo;Apply Snell’s law: n₁·sin(θ₁) = n₂·sin(θ₂). The refractive index of glass is higher, so the angle decreases toward the normal.&rdquo;
          </p>
          <div className="text-[11px] text-rose-800 dark:text-rose-300 font-light pt-1">
            <strong>Why it fails:</strong> The student memorizes the algebra, but cannot explain why light bends or how Fermat's Principle governs refraction.
          </div>
        </div>

        {/* Prabodha Socratic Scaffolding */}
        <div className="p-5 rounded-2xl bg-[#FAF7FE] dark:bg-[#1B162C] border border-[#DDD2F7] dark:border-[#382D55] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7550C8] dark:text-[#B99CFF]" />
              <span className="text-[11px] font-mono uppercase text-[#7550C8] dark:text-[#B99CFF] font-bold">
                Prabodha Socratic Scaffolding
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#7550C8] dark:text-[#D5C2FF] bg-[#EDE6FB] dark:bg-[#2A2045] px-2 py-0.5 rounded font-semibold">
              Permanent Insight
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#19171F] dark:text-white font-medium italic leading-relaxed">
            &ldquo;Imagine you are pulling a cart across smooth asphalt, and the right wheel suddenly enters thick mud while the left wheel remains on asphalt. Which wheel slows down first? How does that velocity imbalance physically force the cart to pivot?&rdquo;
          </p>
          <div className="text-[11px] text-[#51349A] dark:text-[#C5B4EB] font-light pt-1">
            <strong>The breakthrough:</strong> Refraction is simply the natural consequence of wave speed differential across a boundary.
          </div>
        </div>

      </div>

      {/* The Core Invariant Ground Truth */}
      <div className="p-5 rounded-2xl bg-[#F6F3FB] dark:bg-[#181527] border border-[#E4DCF0] dark:border-[#2D2743] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start sm:items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
          <span className="text-[#19171F] dark:text-[#E2DFEB]">
            <strong>The Core Invariant:</strong> Fermat's Principle of Least Time. Light traverses the path that minimizes elapsed travel time, naturally creating Snell's trigonometric ratios.
          </span>
        </div>
      </div>

    </SpotlightCard>
  );
};

