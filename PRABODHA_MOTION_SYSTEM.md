# PRABODHA AI — ADVANCED GSAP & MOTION ENGINEERING SPECIFICATION
## Motion Language, ScrollTrigger Orchestration, and Interactive Sound Design

---

### 1. Motion Philosophy

Motion is an architectural storytelling layer, never a superficial embellishment. Every motion sequence serves to:
1. Direct visual attention to key conceptual pivots.
2. Demonstrate how raw questions crystallize into formal invariants.
3. Establish tangible physical depth between foundational axioms and future career placement.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MOTION TOKEN SYSTEM                             │
├────────────────────┬───────────┬───────────────────────────────────────┤
│ EASING TOKEN       │ VALUE     │ CONTEXT                               │
├────────────────────┼───────────┼───────────────────────────────────────┤
│ `ease-apple-std`   │ 0.16,1,0.3,1  Kinetic Typography & Clip Reveals │
│ `ease-apple-decel` │ 0.25,1,0.5,1  Entering Cards & Pinned Snap Panels│
│ `ease-gentle-sine` │ 0.44,0.05,0.55,0.95 Orbital SVG & Breathing Nodes│
│ `ease-spring-snap` │ damping 26, stiffness 220 Interactive UI Physics │
├────────────────────┼───────────┼───────────────────────────────────────┤
│ DURATION TOKEN     │ SECONDS   │ CONTEXT                               │
├────────────────────┼───────────┼───────────────────────────────────────┤
│ `dur-micro`        │ 0.15s     │ Button hovers, audio ticks, badges    │
│ `dur-standard`     │ 0.35s     │ Tab switches, modal transitions       │
│ `dur-reveal`       │ 0.65s     │ Headline word stagger, line masks     │
│ `dur-hero-seq`     │ 1.40s     │ Multi-layer hero entrance sequence    │
│ `dur-orbit-loop`   │ 24.0s     │ Ambient gyroscopic SVG orbital paths  │
└────────────────────┴───────────┴───────────────────────────────────────┘
```

---

### 2. GSAP Implementation Architecture

```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely for browser runtime
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
```

#### Lifecycle & Cleanup Protocol
To eliminate memory leaks, layout thrashing, and hydration mismatches in React:
- All GSAP timelines must be instantiated inside `useEffect` or `useGSAP` using `gsap.context((self) => { ... }, scopeRef)`.
- Cleanup is mandatory on unmount via `ctx.revert()`.
- ScrollTriggers must execute `ScrollTrigger.refresh()` after dynamic content mounts or layout transitions occur.

---

### 3. Kinetic Hero Choreography

The hero experience is an unhurried, multi-tier sequence:

```
Timeline Step 1 (0.00s - 0.25s): Brand Emblem appears with subtle specular shine.
Timeline Step 2 (0.15s - 0.60s): Headline "LEARN." rises through overflow-hidden mask.
Timeline Step 3 (0.30s - 0.75s): Headline "PREPARE." reveals with staggered letter spacing.
Timeline Step 4 (0.45s - 0.95s): Headline "GROW." enters with dynamic violet gradient bloom.
Timeline Step 5 (0.60s - 1.10s): Subheading and dual-audience badges enter with gentle opacity.
Timeline Step 6 (0.75s - 1.25s): Student mascot reveals grounded on dock pedestal.
Timeline Step 7 (0.90s - 1.40s): Primary CTA magnetic buttons settle into position.
```

---

### 4. ScrollTrigger Pinned Narrative Section

In the **First-Principles Reasoning Sandbox (Section 06)**:
- **Desktop (>= 1024px):** The left interactive proof viewport pins while the right-hand narrative sequence scrolls across 3 consecutive analytical phases (Inquiry Vapor → Socratic Dissection → Invariant Crystal).
- **Mobile (< 1024px):** The pinned scrub degrades gracefully into an accessible, vertically stacked step-by-step card rail. Pinned scroll-jacking is strictly avoided on touchscreens.

---

### 5. Web Audio API Synthesizer Architecture

A zero-latency, zero-dependency sound synthesis engine powers subtle micro-haptics for user interactions.

```typescript
// Conceptual Synthesizer Blueprint
class SoundFeedbackEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false; // Muted by default per specification

  public playTick(freq = 1200, duration = 0.03) {
    if (!this.enabled || typeof window === 'undefined') return;
    try {
      if (!this.ctx) this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {}
  }
}
```

- Prominently surfaced in the navigation header as an interactive Sound Toggle pill: `[ 🔈 Audio Off / 🔊 Audio On ]`.
- Sound is **always muted by default**.

---

### 6. Accessibility & Reduced Motion

- When `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is active:
  - All GSAP timeline durations compress to `0.001s`.
  - Pinned ScrollTrigger scrub effects convert to standard document scroll.
  - Orbiting SVG loops freeze on their primary equilibrium state.
  - No continuous rotation or parallax is applied.

*Document Author: GSAP Motion Director & Creative Frontend Engineer*

