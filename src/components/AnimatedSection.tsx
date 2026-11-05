// src/components/AnimatedSection.tsx
import { motion, MotionProps } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

/**
 * A wrapper that applies a subtle spring‑fade‑in animation when the element
 * scrolls into view. It respects the user's "prefers-reduced-motion" setting
 * and disables the animation in that case.
 */
export const AnimatedSection: React.FC<{
  /** Optional className applied to the underlying motion.div */
  className?: string;
  /** Children to render inside the animated wrapper */
  children: React.ReactNode;
  /** Controls the upward distance on entry – default 30px */
  offsetY?: number;
  /** Delay multiplier for staggered sections – default 0 */
  delay?: number;
}> = ({ className = '', children, offsetY = 30, delay = 0 }) => {
  const prefersReduced = useReducedMotion();
  const motionProps: MotionProps = prefersReduced
    ? { initial: false, animate: false }
    : {
        initial: { opacity: 0, y: offsetY },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          type: 'spring',
          damping: 22,
          stiffness: 150,
          delay,
        },
      };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};

