# PRABODHA AI — RESPONSIVE ARCHITECTURE & QUALITY ASSURANCE
## Independent Multi-Viewport Choreography, Mobile Ergonomics, and Quality Gates

---

### 1. The Independent Mobile-First Principle

Prabodha AI firmly rejects the practice of taking a desktop website and simply scaling it down with CSS media queries. Desktop and mobile experiences are architected independently according to their native ergonomic and computational profiles:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   DUAL-EXPERIENCE ARCHITECTURE                         │
├──────────────────────────────────┬─────────────────────────────────────┤
│ DESKTOP EXPERIENCE (>= 1024px)   │ MOBILE EXPERIENCE (< 1024px)        │
├──────────────────────────────────┼─────────────────────────────────────┤
│ • Kinetic Typography Stagger     │ • Compact, High-Legibility Type     │
│ • GSAP ScrollTrigger Pinned Demo │ • Vertical Stacked Story Rail       │
│ • Multi-Axis Pointer Parallax    │ • Static/Touch-Driven Perspective   │
│ • Multi-Column Asymmetric Grids  │ • Single-Column Rhythm, Zero Drifts │
│ • Gyroscopic SVG Orbit Animations│ • Lightweight Optimized Vector Paths│
│ • Floating Telemetry HUD Badges  │ • Embedded Ergonomic Swipers/Tabs   │
│ • Cursor Hover Micro-Interactions│ • Min 44px Finger Touch Targets     │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

### 2. Viewport Testing Matrix & Verification Gates

The website is validated across 14 rigorous viewport thresholds:

| Width (px) | Device Archetype | Layout Paradigm | Critical Quality Verification Gate |
|---|---|---|---|
| **320px** | iPhone SE (1st Gen), Smart Watches | Ultra-Compact Mobile | Zero horizontal scrolling (`overflow-x: hidden`), text does not clip, CTAs remain 100% accessible. |
| **360px** | Galaxy A-Series, Budget Android | Standard Compact Mobile | Navigation drawer smoothly animates; badge fonts downscale gracefully to 10px. |
| **375px** | iPhone 13/14 Mini, SE 3rd Gen | Core Standard Mobile | Padding maintains 16px margins; hero headline wraps into balanced lines. |
| **390px** | iPhone 13/14/15/16 Pro | Modern Flagship Mobile | Mascot image scales without covering core headlines; tab bars are horizontally scrollable. |
| **430px** | iPhone 15/16 Pro Max, Plus | Large Flagship Mobile | Sub-headlines breathe; 2-column micro-grids engage for metrics. |
| **480px** | Foldable Outer Screens | Phablet Transition | Dual-button CTAs convert from stacked vertical to inline flex. |
| **768px** | iPad Mini, Android Tablets | Portrait Tablet | 2-column bento grids activate; navigation switches to compact tablet mode. |
| **834px** | iPad Air 11" | Mid-Range Tablet | Ample white-space; SVG vector diagrams expand to full width. |
| **1024px** | iPad Pro 12.9", Small Laptops | Landscape Tablet / Netbook | Desktop horizontal navigation engages; GSAP ScrollTrigger pinning activates. |
| **1280px** | MacBook Air 13", Standard HD | Standard Laptop | Asymmetric column offsets render at full fidelity. |
| **1366px** | Enterprise Laptops | Common Workplace Display | Dual-audience investor metrics sidebar renders alongside learner UI. |
| **1440px** | MacBook Pro 16", QHD Laptops | Creative Benchmark Desktop | Ideal viewing canvas; full multi-axis pointer parallax operates at 60fps. |
| **1600px** | Large External Displays | Widescreen Desktop | Max-width containment (`max-w-[1400px]`) prevents over-stretched reading lines. |
| **1920px** | Full HD Desktop Monitors | Ultrawide Desktop | Centered content canvas with subtle atmospheric side gradients; zero layout drift. |

---

### 3. Touch Ergonomics & Mobile Quality Rules

1. **Touch Target Dimensions:** All interactive triggers, tabs, buttons, and navigation links maintain a minimum interactive hit area of `44px x 44px`.
2. **Elimination of Scroll-Jacking on Touchscreens:**
   - On iOS Safari and Chrome Android, momentum scrolling (`-webkit-overflow-scrolling: touch`) is never intercepted.
   - Pinned animations that freeze scrolling on desktop automatically convert into vertical step-by-step card sequences on mobile.
3. **No Horizontal Drift:**
   ```css
   html, body {
     max-width: 100vw;
     overflow-x: hidden !important;
   }
   ```
4. **Energy & Battery Conservation:**
   - Infinite SVG path animations are throttled or paused when out of the mobile viewport via `IntersectionObserver`.
   - Complex SVG blur filters (`feGaussianBlur stdDeviation > 8`) are reduced on mobile to maintain 60 FPS scrolling.

*Document Author: Mobile Ergonomics Specialist & Lead QA Engineer*
