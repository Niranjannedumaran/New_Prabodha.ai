import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HeroSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * HeroSpotlight — Wraps the hero area and creates a smooth,
 * cursor-reactive radial gradient aurora that follows the mouse.
 * Also provides subtle parallax depth to child layers.
 * 
 * On mobile/touch, it simply renders children without effects.
 */
export const HeroSpotlight: React.FC<HeroSpotlightProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 40, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Convert normalized mouse position to CSS gradient coordinates
  const bgX = useTransform(smoothX, [0, 1], ['20%', '80%']);
  const bgY = useTransform(smoothY, [0, 1], ['15%', '85%']);

  // Subtle parallax offset for floating elements
  const parallaxX = useTransform(smoothX, [0, 1], [-12, 12]);
  const parallaxY = useTransform(smoothY, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Cursor-reactive aurora gradient (light mode: lavender tint, dark mode: deep purple glow) */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-40 transition-opacity duration-700"
        style={{
          background: useTransform(
            [bgX, bgY],
            ([x, y]) =>
              `radial-gradient(ellipse 700px 500px at ${x} ${y}, rgba(117, 80, 200, 0.12), rgba(237, 230, 251, 0.06) 50%, transparent 80%)`
          ),
        }}
      />

      {/* Secondary ambient orb — slower, bigger, persistent */}
      <motion.div
        className="pointer-events-none absolute -z-10 w-[600px] h-[400px] rounded-full blur-3xl"
        style={{
          x: parallaxX,
          y: parallaxY,
          top: '20%',
          left: '50%',
          translateX: '-50%',
          background: 'radial-gradient(circle, rgba(117, 80, 200, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle floating ambient glow orbs */}
      <div className="pointer-events-none absolute top-1/3 right-[10%] w-64 h-64 bg-[#7550C8]/[0.04] rounded-full blur-3xl animate-float-slow -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 left-[5%] w-48 h-48 bg-[#EDE6FB]/30 dark:bg-[#7550C8]/[0.06] rounded-full blur-2xl animate-pulse-subtle -z-10" />

      {children}
    </motion.div>
  );
};

