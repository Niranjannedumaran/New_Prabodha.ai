# PRABODHA AI — COMPREHENSIVE DESIGN SYSTEM & TOKENS
## Human-Directed Creative System for Web, Mobile, and Motion

---

### 1. Brand Identity & Color Architecture

Prabodha AI utilizes a purposeful, tri-tonal color strategy. Purple is treated as an intentional brand signal, not a reckless background wash.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COLOR ARCHITECTURE MATRIX                       │
├───────────────────┬────────────────────────────────────────────────────┤
│ CINEMATIC DARK    │ #0B0A0F (Obsidian Canvas)                          │
│                   │ #14121E (Deep Surface)                             │
│                   │ #1C1929 (Elevated Layer)                           │
│                   │ Reserved for: Hero Intelligence, Core Proof Labs   │
├───────────────────┼────────────────────────────────────────────────────┤
│ EDITORIAL LIGHT   │ #FAF8FE (Clean Bone Canvas)                        │
│                   │ #FFFFFF (Crisp Sheet)                              │
│                   │ #F3EFFB (Subtle Tint)                              │
│                   │ Reserved for: Reading, Examination Topology, QA    │
├───────────────────┼────────────────────────────────────────────────────┤
│ SURGICAL ACCENTS  │ #6D28D9 (Primary Royal Violet)                     │
│                   │ #8E5CFF (Vibrant Kinetic Violet)                   │
│                   │ #06B6D4 (Analytical Cyan - Algorithms/Logic)       │
│                   │ #10B981 (Empirical Emerald - Verified Invariants)  │
│                   │ #EF4444 (Risk Red - Burnout Fatigue Warning)       │
└───────────────────┴────────────────────────────────────────────────────┘
```

#### Token Palette Definitions

| Token Name | Hex Code | Functional Context | Contrast Ratio (vs Canvas) |
|---|---|---|---|
| `color-brand-primary` | `#6D28D9` | Brand Mark, Primary Interactive Buttons, Key Headings | 7.8:1 (AAA on Light) |
| `color-brand-light` | `#EDE6FB` | Pill Backgrounds, Soft Badges, Subtle Dividers | - |
| `color-brand-glow` | `rgba(109,40,217,0.18)` | Volumetric Bloom, Active Glow Filters | Ambient |
| `color-accent-cyan` | `#06B6D4` | GATE CS, Distributed Algorithms, Tech Nodes | 5.2:1 (AA) |
| `color-accent-emerald` | `#10B981` | Verified PYQ Invariants, Positive Placement Metrics | 4.9:1 (AA) |
| `color-surface-obsidian` | `#0B0A0F` | Dark Canvas Surface, Code & Terminal Windows | Primary Dark |
| `color-surface-bone` | `#FAF8FE` | Light Editorial Surface, Narrative Canvas | Primary Light |
| `color-text-main` | `#16131F` | High-Contrast Typography on Light Surfaces | 14.1:1 (AAA) |
| `color-text-muted` | `#6E6978` | Metadata, Footnotes, Secondary Labels | 4.8:1 (AA) |
| `color-hairline` | `rgba(117,80,200,0.12)`| Crisp 1px Structural Dividers | - |

---

### 2. Typography Hierarchy

Prabodha AI establishes a dual-personality font stack:
1. **Plus Jakarta Sans / Syne / Unbounded:** Confident, geometric display and technical headings.
2. **Newsreader (Editorial Italic Serif):** Elegant humanistic cadence for high-impact conceptual emphasis.
3. **JetBrains Mono:** High-precision telemetry, syllabus codes, latency proofs, and exam metrics.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TYPOGRAPHIC SCALE SYSTEM                        │
├───────────────┬────────────┬─────────────┬──────────────┬──────────────┤
│ LEVEL         │ SIZE (px)  │ REM         │ LINE HEIGHT  │ WEIGHT       │
├───────────────┼────────────┼─────────────┼──────────────┼──────────────┤
│ Display Hero  │ 64–88px    │ 4.0–5.5rem  │ 0.95         │ Black (900)  │
│ H1 Headline   │ 44–56px    │ 2.75–3.5rem │ 1.05         │ Bold (800)   │
│ H2 Section    │ 32–40px    │ 2.0–2.5rem  │ 1.15         │ Bold (700)   │
│ H3 Subsection │ 22–26px    │ 1.375–1.6rem│ 1.25         │ Semibold (600│
│ Body Lead     │ 18–20px    │ 1.125–1.25r │ 1.6          │ Regular (400)│
│ Body Default  │ 15–16px    │ 0.938–1.0rem│ 1.65         │ Regular (400)│
│ Caption/Mono  │ 11–13px    │ 0.7–0.813rem│ 1.4          │ Medium (500) │
│ Pill/Badge    │ 10–11px    │ 0.625–0.7rem│ 1.0          │ Bold (700)   │
└───────────────┴────────────┴─────────────┴──────────────┴──────────────┘
```

---

### 3. Layout, Spacing & Breakpoints

#### Responsive Breakpoints
- **Mobile Compact (xs):** `320px – 389px` (Strict single-column flow, zero horizontal overflow)
- **Mobile Standard (sm):** `390px – 639px` (iPhone 14/15/16 Pro, Samsung S24)
- **Tablet / Phablet (md):** `640px – 1023px` (iPad, iPad Mini, Foldables)
- **Desktop (lg):** `1024px – 1279px` (MacBook Air 13", Standard Laptops)
- **Desktop Studio (xl):** `1280px – 1535px` (MacBook Pro 16", 1440p displays)
- **Ultrawide (2xl):** `1536px+` (Max content container capped at `1400px` for optimal reading scan lines)

#### Modular Spacing Grid
All paddings and margins derive from a strict geometric 4/8-point scale:
- `space-1` = 4px | `space-2` = 8px | `space-3` = 12px | `space-4` = 16px
- `space-6` = 24px | `space-8` = 32px | `space-12` = 48px | `space-16` = 64px
- `space-24` = 96px | `space-32` = 128px (Desktop Section Gaps)

---

### 4. Elevation, Radii & Hairline Boundaries

Rather than heavy artificial drop shadows, depth is achieved via:
1. **Curved Squircle Geometry:** Standard cards use `rounded-[24px]` to `rounded-[32px]`.
2. **Hairline Precision Borders:** `1px solid rgba(117, 80, 200, 0.12)` in light mode, `rgba(255, 255, 255, 0.08)` in dark mode.
3. **Subtle Elevation Shadows:**
   - `shadow-soft-sm`: `0 2px 8px -2px rgba(109, 40, 217, 0.06), 0 1px 2px rgba(0,0,0,0.02)`
   - `shadow-soft-lg`: `0 16px 40px -8px rgba(109, 40, 217, 0.08), 0 0 0 1px rgba(109, 40, 217, 0.06)`

---

### 5. Dual-Audience Presentation Rules

- **Everyday Learners:** Focus on clear problem-solving, intuitive stage-by-stage mastery, and interactive tools. No confusing financial jargon.
- **Investors & Strategic Partners:** High-density telemetry ribbons, verifiable syllabus convergence metrics (e.g., "15 Years Past Papers Vectorized", "98.1% Formal Proof Precision"), and clear technological moat signals.
- **Zero Course Selling Constraint:** Strictly forbid "Course Batches", "₹ Pricing Tables", "Discount Coupons", or "Class 9-12 Tuition". Prabodha AI is an institutional intelligence platform.

*Document Author: Senior Design Systems Architect & Brand Identity Designer*
