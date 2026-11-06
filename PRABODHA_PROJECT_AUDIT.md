# PRABODHA AI — COMPREHENSIVE PROJECT AUDIT (PHASE 1)
## Structural, Architectural, and Component Autopsy of Existing Codebase

---

### 1. Executive Forensic Summary

Previous design iterations attempted to modernize Prabodha AI through incremental additions: wrapping elements in Apple-style "curvy bento cards", applying soft drop-shadows, and layering generic purple gradients. However, the foundational structure remained tied to standard SaaS templates:
- A predictable centered hero with a generic spotlight glow.
- Symmetrical 3-card and 4-card grids that feel like template placeholders.
- Character artwork trapped inside arbitrary rounded card boxes with cut-off edges.
- Lack of authentic editorial pacing or dramatic typographic scale.

To satisfy the creative mandate, we must break this template-driven paradigm. We are rebuilding the visual hierarchy from scratch, establishing an original brand composition inspired by the editorial gravity of Two26 Studio, the disciplined UI restraint of Doko Studio, and the kinetic choreography of Mechay.

---

### 2. Dependency & Framework Audit

| Package / Tool | Version | Status | Architectural Role & Health Check |
|---|---|---|---|
| `react` / `react-dom` | `^18.3.1` | Preserved | Core UI view rendering. Stable concurrent mode support. |
| `vite` | `^5.4.14` | Preserved | Ultra-fast HMR and Rollup production bundling. |
| `typescript` | `^5.7.3` | Preserved | Strict typing across components, models, and tokens. |
| `tailwindcss` | `^3.4.17` | Preserved / Refactored | Utility styling engine. Needs custom editorial font & spacing tokens. |
| `gsap` & `@gsap/react` | `^3.12.7` | Active Primary | Core animation engine for scroll-linked choreography, timeline scrubbing, and text splitting. |
| `framer-motion` | `^11.18.2` | Secondary | Component-level layout transitions and spring physics. |
| `lucide-react` | `^0.475.0` | Active | Minimalist geometric iconography. |

---

### 3. Component & Page Inventory Assessment

#### A. Obsolete / Redundant Components Scheduled for Removal or Full Rebuild:
- `src/components/AppleHeroShowcase.tsx`: **REPLACE.** Traps the mascots in generic rounded cards with repetitive gradients. Needs replacement with an expansive, art-directed editorial hero stage.
- `src/components/HeroSpotlight.tsx`: **REPLACE.** Standard centered radial glow template. Needs replacement with a dynamic architectural backdrop (deep obsidian canvas, stark grid hairlines, and asymmetric spotlighting).
- `src/components/legacy/*`: Legacy artifacts containing outdated batch/session concepts. All retained code must be quarantined or permanently purged.

#### B. High-Value Retained & Upgraded Modules:
- `src/components/PrabodhaLogo.tsx`: The official P-mark and 4-pointed radiant star. High-contrast, brand-defining vector core.
- `src/components/BrandEmblem.tsx`: Geometric 4-pointed star motif used for subtle architectural accents.
- `src/components/svg-motion/*`: The newly engineered SVG motion systems (`HeroIntelligenceUniverse`, `PrabodhaClarityPath`, `ExamTopologyGraphic`, `CareerTrajectoryGraphic`, `MentorshipDialogueGraphic`). These are custom, mathematical vector creations that provide true pedagogical visualization.
- `src/utils/soundEngine.ts` & `src/context/SoundContext.tsx`: Zero-dependency native Web Audio API acoustic micro-feedback synthesizer (muted by default).

---

### 4. Critical Technical & Brand Constraints

1. **Zero Course Selling Constraint:** Under no circumstances shall the website include course batches, pricing tiers, discounts (`₹`), shopping carts, or Class 9–12 school tuition. Prabodha AI is an institutional intelligence platform for competitive examinations and career mastery.
2. **Authenticity Guarantee:** No invented metrics, testimonials, or artificial success percentages.
3. **Mascot Integrity:** The student mascot is the primary hero anchor; the robot is an AI companion used in Socratic demonstrations. Both must be grounded on architectural pedestals or seamless gradient fades—never floating with hard cropped edges.
4. **Performance Target:** Mobile-first architecture with strict `overflow-x: hidden`, zero layout thrashing, and graceful degradation for `prefers-reduced-motion`.

*Document Approved by: Lead Technical Architect & Systems Auditor*
