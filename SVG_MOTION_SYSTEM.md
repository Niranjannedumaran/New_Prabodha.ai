# Prabodha AI — Advanced SVG Motion Graphics Architecture & System Documentation

## 1. Creative Direction & Motion Philosophy

Prabodha AI utilizes a signature vector motion graphics system designed to communicate two objectives simultaneously:
1. **For Everyday Aspirants & Scholars:** Demystify high-stakes competitive examinations and complex intellectual concepts by visualizing how inquiry leads to understanding without rote formulas.
2. **For Venture Investors & Institutional Partners:** Demonstrate clear product defensibility, technical rigor, multi-paper scalability, and an Apple-grade design aesthetic tailored for long-term category leadership.

Motion is not decorative embellishment; it is pedagogical scaffolding.

---

## 2. Motion Design Tokens & Timing Specifications (`motionTokens.ts`)

| Token Category | Key Identifier | Value / Curve | Mathematical / Perceptual Purpose |
|---|---|---|---|
| **Apple Standard Ease** | `appleStandard` | `cubic-bezier(0.16, 1, 0.3, 1)` | Mimics iOS / macOS fluid spring deceleration. Avoids robotic linear motion. |
| **Gentle Sine Ease** | `gentleSine` | `cubic-bezier(0.445, 0.05, 0.55, 0.95)` | Used for infinite orbital floating and cosmic micro-particles. |
| **Spring Snappy** | `snappy` | `{ damping: 24, stiffness: 280 }` | Micro-interactions: tab switching, card elevation, button click feedback. |
| **Spring Gentle** | `gentle` | `{ damping: 32, stiffness: 140 }` | Desktop pointer-following parallax tilt across SVG universe layers. |
| **Storytelling Timing**| `storytelling` | `1.4s` | Progressive SVG path drawing (`stroke-dashoffset`). |
| **Palette Alignment** | `primary` | `#7550C8` / `#EDE6FB` | Calibrated violet tone paired with light canvas `#F5F2FA` and dark `#0B0A0F`. |

---

## 3. Signature Animated SVG Components

### A. Hero — Prabodha Intelligence Universe (`HeroIntelligenceUniverse.tsx`)
* **Mathematical Origin:** Centered at `(400, 300)` on an `800 × 600` SVG coordinate grid.
* **Architecture:** 
  - 3 Concentric orbital guide rings (`r = 120`, `r = 210`, `r = 300`) with dashed vector strokes.
  - 4 Cardinal Satellite Nodes representing the core platform faculties:
    * **Top (400, 90):** Exam Topology (`98% Yield`)
    * **Right (610, 300):** Socratic Dialogue (`Zero-Rote`)
    * **Bottom (400, 510):** Career Lattice (`Skill Demand`)
    * **Left (190, 300):** Longitudinal Pacing (`Calm State`)
  - Interconnecting cubic Bézier splines drawn sequentially via Framer Motion's `pathLength: 0 → 1`.
  - Micro-particles with continuous orbital rotation and pointer-responsive parallax depth on desktop.
* **Dual-Audience Value:**
  - *Learners:* Grasp that Prabodha unites all facets of learning into one calm ecosystem.
  - *Investors:* Signals a multi-sided platform architecture rather than a single-point test-prep app.

### B. The Prabodha Clarity Path (`PrabodhaClarityPath.tsx`)
* **Visual Journey:** `Curiosity → Understanding → Practice → Preparation → Growth`
* **Desktop Implementation:** Smooth flowing gradient curve (`x: 100 → 900`, `y: 80 → 140`) with progressive SVG stroke reveals, interactive milestone discs, and dual-lens comparative callouts:
  - *Learner Dimension:* E.g. "Ask naive questions without peer pressure", "Isolate foundational misconceptions".
  - *Investor Thesis:* E.g. "High activation rate", "Proprietary Socratic LLM reasoning graph", "Transitioning into lifelong career mobility".
* **Mobile Implementation:** Seamlessly refactors into a touch-friendly vertical timeline with zero horizontal overflow, preserving full text hierarchy.

### C. Pillar 01 — Competitive Exam Intelligence (`ExamTopologyGraphic.tsx`)
* **Visual Sequence:** Official Syllabus Root Nodes → Multi-Year PYQ Cluster Correlators → Invariant Axiom Extraction.
* **Interactive Scope:** Live 4-track switching across UPSC CSE, RBI Grade B, GATE CS, and CAT Analytics with verified historical yield indicators.

### D. Pillar 02 — Socratic Reasoning Architecture (`SocraticReasoningGraphic.tsx`)
* **Visual Sequence:** Learner Query → Premise Deconstruction → Misconception Trap Isolation → Socratic Counter-Inquiry → Invariant Mastery.
* **Interactive Scope:** Interactive SVG nodes allowing users and investors to step through the exact pedagogical deconstruction pipeline.

### E. Pillar 03 — Career Competency Lattice (`CareerTrajectoryGraphic.tsx`)
* **Visual Sequence:** Academic Invariant Foundation → Skill Telemetry Lattice → High-Impact Strategic Roles (Quant Finance, Regulatory Policy, Distributed Systems).
* **Interactive Scope:** Live domain toggles demonstrating how academic exam competencies translate directly into high-percentile professional compensation.

### F. Pillar 04 — Longitudinal Cognitive Pacing (`MentorshipDialogueGraphic.tsx`)
* **Visual Sequence:** 12–24 month continuous sinusoidal pacing curve with active Burnout Avoidance Thresholds (`Fatigue > 85%`) and Intellectual Calm Baselines.
* **Interactive Scope:** Four longitudinal phase cards displaying calibrated milestone progress.

---

## 4. Accessibility & Performance Compliance

1. **`usePrefersReducedMotion` Hook:**
   - Detects `prefers-reduced-motion: reduce`.
   - Bypasses continuous rotations and progressive path draws, instantly providing clean, fully legible static vector representations.
2. **WCAG 2.1 AA Contrast Compliance:**
   - Headings rendered in high-contrast `#110E1B` on light backgrounds and `#FFFFFF` on dark backgrounds.
   - Text elements use crisp SVG text nodes or accompanying semantic HTML with ARIA roles and labels.
3. **Responsive Viewport Testing:**
   - Validated across mobile narrow screens (320px, 375px, 430px), tablet viewports (768px, 1024px), and ultra-wide desktops (1440px, 1920px).
   - Zero horizontal scrollbars (`overflow-x: hidden`).
