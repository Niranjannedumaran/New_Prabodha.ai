import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  interactive?: boolean;
  tilt?: boolean;
}

/**
 * SpotlightCard with ultra-smooth spring cursor tracking,
 * pleasant hover aura, and optional subtle 3D tilt.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(117, 80, 200, 0.18)',
  onClick,
  interactive = true,
  tilt = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates inside card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for pleasant, organic cursor lag
  const springConfig = { damping: 24, stiffness: 260 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Optional subtle 3D tilt
  const rotateX = useTransform(smoothY, [0, 400], [tilt ? 3 : 0, tilt ? -3 : 0]);
  const rotateY = useTransform(smoothX, [0, 600], [tilt ? -3 : 0, tilt ? 3 : 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: tilt ? 'preserve-3d' : 'flat',
      }}
      whileHover={interactive ? { y: -3, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      className={`group relative overflow-hidden rounded-3xl transition-colors duration-200 ${className}`}
    >
      {/* Silky Smooth Cursor-Following Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) =>
              `radial-gradient(480px circle at ${x}px ${y}px, ${glowColor}, rgba(117, 80, 200, 0.05) 45%, transparent 75%)`
          ),
        }}
      />

      {/* Pleasant Interactive Border Glow under cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          borderColor: 'rgba(117, 80, 200, 0.4)',
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) =>
              `radial-gradient(280px circle at ${x}px ${y}px, rgba(142, 92, 255, 0.2), transparent 80%)`
          ),
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Ambient Inner Shimmer on Hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-[#7550C8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
