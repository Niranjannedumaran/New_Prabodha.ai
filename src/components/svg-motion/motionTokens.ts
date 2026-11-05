/**
 * Motion Design Tokens & Easing Standards for Prabodha AI
 * Follows Apple Human Interface Guidelines and Framer Motion spring physics.
 */

export const MOTION_TOKENS = {
  // Apple Easing Curves
  ease: {
    appleStandard: [0.16, 1, 0.3, 1] as const,
    appleDecel: [0.25, 1, 0.5, 1] as const,
    appleAccel: [0.32, 0, 0.67, 0] as const,
    gentleSine: [0.445, 0.05, 0.55, 0.95] as const,
    softBounce: [0.34, 1.56, 0.64, 1] as const,
  },

  // Spring Physics for Interactive Objects
  spring: {
    snappy: { damping: 24, stiffness: 280 },
    gentle: { damping: 32, stiffness: 140 },
    float: { damping: 40, stiffness: 90 },
    orbital: { damping: 50, stiffness: 60 },
  },

  // Timings (in seconds)
  duration: {
    instant: 0.15,
    quick: 0.3,
    medium: 0.55,
    relaxed: 0.85,
    storytelling: 1.4,
    loopOrbital: 18,
    loopPulse: 3.2,
  },

  // Stagger Delays
  stagger: {
    micro: 0.04,
    fast: 0.08,
    medium: 0.14,
    narrative: 0.22,
  },

  // Signature Theme Palettes for SVG Strokes & Fills
  colors: {
    primary: '#7550C8',
    primaryLight: '#EDE6FB',
    primaryGlow: 'rgba(117, 80, 200, 0.22)',
    accentCyan: '#06B6D4',
    accentEmerald: '#10B981',
    accentViolet: '#A855F7',
    gridLight: '#E2D9F3',
    gridDark: '#262238',
    canvasLight: '#F5F2FA',
    canvasDark: '#0B0A0F',
    textLight: '#110E1B',
    textDark: '#FFFFFF',
    mutedLight: '#555060',
    mutedDark: '#A7A3B4',
  },
};
