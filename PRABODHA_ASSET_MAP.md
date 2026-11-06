# PRABODHA AI — COMPREHENSIVE ASSET INVENTORY & INTEGRATION MAP
## Format Verification, Dimensional Integrity, and Placement Strategy

---

### 1. Executive Asset Audit

A meticulous byte-level audit was conducted across the `public/assets` and `public/new-assets` directories to verify true MIME types, aspect ratios, alpha transparency channels, and device-specific rendering roles.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CRITICAL DISCOVERY                              │
├────────────────────────────────────────────────────────────────────────┤
│ • `public/assets/brand/prabodha-logo.png` contains JPEG JFIF headers   │
│   (Magic bytes: FF D8 FF E0). It is a high-resolution raster JPEG,     │
│   not an SVG or PNG. It must be rendered with crisp rounded border    │
│   capsules and specular overlays to prevent compression artifacting.   │
│ • Student & Robot Mascot PNGs (`duo-hero-showcase.png`,                │
│   `student-stand-thumb.png`, `robot-welcome.png`, etc.) contain true   │
│   32-bit RGBA channels with alpha transparency.                        │
│ • High-resolution dashboard renders (1774 x 887) are optimized for     │
│   retina display density on desktop and responsive downscaling on      │
│   mobile viewport widths.                                              │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Complete Asset Matrix

| Asset File Path | Verified Format | Dimensions (px) | Alpha Channel | Role & Placement Context | Responsive Strategy |
|---|---|---|---|---|---|
| `/assets/brand/prabodha-logo.png` | JPEG (JFIF) | 1024 x 1024 | No (Opaque) | Primary Navbar Mark, Footer Brand, Favicon Source | Contained within 36px–48px squircle frame with violet specular hairline |
| `/assets/mascots/duo-hero-showcase.png` | PNG (RGBA) | 1024 x 935 | Yes (Transparent) | Hero Showcase Dock & Section 02 Focal Composition | Grounded on feathered gradient base dock; scaled `max-h-[380px]` mobile, `max-h-[480px]` desktop |
| `/assets/mascots/student-stand-thumb.png`| PNG (RGBA) | 682 x 1024 | Yes (Transparent) | Section 06 Socratic Learning Demonstration Mascot | Positioned adjacent to interactive inquiry cards |
| `/assets/mascots/robot-welcome.png` | PNG (RGBA) | 853 x 1024 | Yes (Transparent) | AI Mentorship & Cognitive Pacing Feature Showcase | Scaled `w-28` to `w-36` next to Burnout Shield metrics |
| `/assets/mascots/robot-heart.png` | PNG (RGBA) | 853 x 1024 | Yes (Transparent) | Mentorship Diagnostic Telemetry Modal & Status Badge | Iconographic accent in burnout prevention headers |
| `/assets/mascots/robot-idea.png` | PNG (RGBA) | 959 x 1024 | Yes (Transparent) | Socratic Sandbox "Aha! Invariant" Crystallization State | Triggered during Step 3 proof revelation |
| `/assets/mascots/student-peace.png` | PNG (RGBA) | 682 x 1024 | Yes (Transparent) | Career Outcomes & Institutional Placement Showcase | Displayed alongside verified candidate percentiles |
| `/assets/mascots/student-laptop-success.jpg` | JPEG | 1024 x 1024 | No (Opaque) | Platform Storytelling & Aspirant Journey Feature | Contained within frosted glass card with 24px radius |
| `/new-assets/Competitive Exam Intelligence Dashboard.png` | PNG | 1774 x 887 | Yes | Pillar 01 Exam Intelligence Live System Preview | Full-width retina showcase with subtle zoom on scroll |
| `/new-assets/Career Intelligence Dashboard.png` | PNG | 1774 x 887 | Yes | Pillar 03 Career Competency Lattice Live System Preview | Pinned / scrubbed interactive preview card |
| `/new-assets/Prabodha AI Futuristic Learning Dashboard.png` | PNG | 1774 x 887 | Yes | Section 06 Product Experience Master Interface | Featured in high-contrast Apple squircle device bezel |
| `/new-assets/Curiosity to Growth Learning Path.png` | PNG | 1774 x 887 | Yes | Section 07 5-Stage Learner Journey Concept Art | Integrated with responsive SVG kinetic path |
| `/new-assets/Triumphant Student and Robot Mascot.png` | PNG | 1774 x 887 | Yes | Section 11 Final Closing Call-to-Action Dock | Centered above final registration & inquiry portal |

---

### 3. Usage & Preservation Rules

1. **Anti-Cutoff Principle:** Transparent mascot PNGs must **never** float in empty space where straight image borders create unnatural visual cutoffs. All character assets are anchored using grounded pedestals or CSS feather masks:
   ```css
   mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
   ```
2. **SVG vs Raster Discipline:**
   - Vector graphics (Hero Intelligence Universe, Clarity Path, Exam Topology Splines, Pacing Waveforms) are purely authored as scalable SVG code.
   - 3D Mascot renders are retained as crisp transparent PNGs with WebP fallback where applicable.
3. **Lazy-Loading Discipline:**
   - Hero brand mark and hero showcase mascot load with `loading="eager"` and `fetchpriority="high"`.
   - Below-the-fold dashboard screens and secondary mascot illustrations load with `loading="lazy"`.

*Document Author: Digital Asset Specialist & Creative Frontend Technologist*
