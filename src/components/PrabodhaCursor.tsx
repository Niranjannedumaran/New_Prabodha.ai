import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * PrabodhaCursor — Premium custom cursor with dot + ring follower.
 * The dot tracks the real cursor tightly; the ring trails behind
 * with spring physics for that luxurious, organic lag.
 *
 * On interactive elements (buttons, links, cards), the ring expands
 * and the dot shrinks — giving a "magnetic lock-on" feel.
 *
 * Hidden on touch devices and mobile.
 */
export const PrabodhaCursor: React.FC = () => {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(dotX, springConfig);
  const ringY = useSpring(dotY, springConfig);

  const ringScale = useMotionValue(1);
  const smoothRingScale = useSpring(ringScale, { damping: 20, stiffness: 260 });

  const dotScale = useMotionValue(1);
  const smoothDotScale = useSpring(dotScale, { damping: 20, stiffness: 300 });

  const ringOpacity = useMotionValue(0.5);
  const smoothRingOpacity = useSpring(ringOpacity, { damping: 20, stiffness: 200 });

  const isTouchRef = useRef(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      isTouchRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    checkTouch();

    if (isTouchRef.current) return;

    // Hide default cursor globally
    document.documentElement.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [role="button"], input, textarea, select, [data-cursor-hover]');

      if (interactive) {
        ringScale.set(1.8);
        dotScale.set(0.5);
        ringOpacity.set(0.85);
      } else {
        ringScale.set(1);
        dotScale.set(1);
        ringOpacity.set(0.5);
      }
    };

    const handleMouseDown = () => {
      ringScale.set(0.85);
      dotScale.set(0.7);
    };

    const handleMouseUp = () => {
      ringScale.set(1);
      dotScale.set(1);
    };

    const handleMouseLeave = () => {
      dotX.set(-100);
      dotY.set(-100);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dotX, dotY, ringScale, dotScale, ringOpacity]);

  // Don't render on touch
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Outer Ring — trails behind cursor with spring physics */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          scale: smoothRingScale,
          opacity: smoothRingOpacity,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(117, 80, 200, 0.6)',
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'normal',
        }}
      />

      {/* Inner Dot — tracks cursor directly, shrinks on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          scale: smoothDotScale,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#7550C8',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

