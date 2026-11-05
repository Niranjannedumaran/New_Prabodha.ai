import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magnetStrength?: number;
}

/**
 * MagneticButton — Premium interactive button that pulls toward
 * the cursor when hovered, like Apple/Linear product pages.
 * The content shifts magnetically toward the pointer position.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  magnetStrength = 0.35,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 280, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Content moves at half the rate of the button for layered parallax
  const contentX = useTransform(springX, (v) => v * 0.5);
  const contentY = useTransform(springY, (v) => v * 0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * magnetStrength);
    y.set((e.clientY - centerY) * magnetStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`relative ${className}`}
      data-cursor-hover
    >
      <motion.span
        style={{ x: contentX, y: contentY }}
        className="relative z-10 flex items-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

