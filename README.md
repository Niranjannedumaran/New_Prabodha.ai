# Prabodha AI — Official Company Website

> **"Learn. Explore. Evolve."**  
> An emerging AI-powered education and career development platform built to empower self-directed, curiosity-first learners.

![Prabodha AI Banner](public/assets/mascots/duo-hero-showcase.png)

---

## 🌟 Executive Overview

**Prabodha AI** is rethinking the modern learning experience. Traditional education systems often constrain students and young professionals within rigid, standardized syllabi, leaving them unprepared for an era of rapid technological disruption. 

Prabodha AI connects **foundational knowledge**, **curiosity-led exploration**, and **continuous capability development** into a cohesive, interactive platform.

- **Learn:** Build deep first-principles comprehension rather than memorizing benchmarks.
- **Explore:** Discover emerging interdisciplinary roles, creative technology fields, and uncharted career vectors.
- **Evolve:** Cultivate lifelong cognitive agility with personal, intelligent AI mentorship.

---

## ✨ Key Platform Features

### 1. Distinctive Brand Hero & Vector Architecture
- **Unbounded Typography:** High-impact display typography (`Unbounded`) paired with editorial italic serif accents (`Newsreader`).
- **Baseline-Hugging Continuous Underline:** Proprietary `.editorial-underline` system where the solid brand-purple bar (`#7652C8`) hugs the baseline and cuts smoothly through letter descenders across all device viewports.
- **Studio Ambient Background:** Deep atmospheric lighting with a precision-vignetted architectural grid, zero generic AI bubble slop, and an interactive mouse-following spotlight beam.
- **Dynamic Trajectory Vectors:** Animated SVG dashed vectors (`@keyframes flowTrajectory`) with glowing waypoint nodes representing non-linear paths of self-determined growth.

### 2. Dual Brand Mascot System
- **Curious Student Explorer:** Represents ambitious, creative, and proactive learners charting their own trajectories.
- **Socratic AI Companion:** An intelligent, encouraging guide that asks high-value questions rather than spoon-feeding shallow answers.
- **Interactive Companion Widget:** Floating ambient assistant (`MascotCompanion.tsx`) offering bite-sized cognitive sparks and direct mentor contact without blocking main UI actions.

### 3. Exploration Tracks & Curriculum Architecture
- Categorized pathways across **Foundations**, **Career Vectors**, **Creative Tech**, and **Cognitive Science**.
- Clean geometric SVG architectural schematics replace fake video placeholders.
- Instant curriculum modal previews (`SessionPreviewModal.tsx`) with detailed module syllabi, mental models, and prerequisites.

### 4. Interactive Learning Sandbox (`InteractiveDemo.tsx`)
- **Socratic AI Companion Simulator:** Test-drive real-time Socratic inquiry with preset prompts on neural networks, curiosity retention, and career pivots.
- **Dynamic Knowledge Map:** Interactive node graph demonstrating multidimensional vector connections between theory, application, and industry horizons.
- **First-Principles Diagnostic Lab:** Hands-on reasoning challenge with celebratory feedback and diagnostic explanations.

### 5. Persistent Personal Watchlist (`WatchlistDrawer.tsx`)
- Save, bookmark, and curate personalized learning tracks with browser `localStorage` persistence.
- Slide-over drawer with one-click enrollment and direct track navigation.

### 6. Universal Dark & Light Theme System
- **Default Light Mode:** Welcoming, clean pearl aesthetic (`#F8F6FD`).
- **Dark Mode:** Deep velvety obsidian studio palette (`#08070D`).
- Seamless toggle with persistent preference memory.

### 7. Universal Zero-Scrollbar Layout
- Clean `flex-wrap` pill navigation and global CSS elimination of ugly horizontal scrollbar thumbs and tracks on all mobile, tablet, and desktop screens.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build & Tooling** | [Vite 5](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Motion & Animations** | [Framer Motion](https://www.framer.com/motion/) + Custom CSS Keyframes |
| **Icons & Symbols** | [Lucide React](https://lucide.dev/) |
| **Typography** | Google Fonts (`Unbounded`, `Syne`, `Newsreader`, `Plus Jakarta Sans`, `JetBrains Mono`) |

---

## 📁 Repository Structure

```text
Prabodha/
├── dist/                          # Production build output
├── public/
│   ├── favicon.svg                # 4-point diamond star brand icon
│   └── assets/
│       └── mascots/               # Official PNG mascot illustrations
│           ├── robot-welcome.png
│           ├── student-peace.png
│           ├── student-jump.png
│           └── duo-hero-showcase.png
├── src/
│   ├── components/                # Modular UI section components
│   │   ├── Navbar.tsx             # Responsive glassmorphism navigation
│   │   ├── Hero.tsx               # High-impact hero section with trajectory lines
│   │   ├── SessionsSection.tsx    # Exploration tracks & curriculum filter
│   │   ├── InteractiveDemo.tsx    # Socratic AI companion & knowledge sandbox
│   │   ├── BrandPhilosophy.tsx    # 01 Learn • 02 Explore • 03 Evolve matrix
│   │   ├── TheProblem.tsx         # 3 Structural challenge statements
│   │   ├── IntroducingPrabodha.tsx# Conceptual product schematic
│   │   ├── WhoWeBuildFor.tsx      # Audience architecture cards
│   │   ├── OurApproach.tsx        # 4 Core pedagogical principles
│   │   ├── OurVision.tsx          # Long-term horizon architectural matrix
│   │   ├── AboutPrabodha.tsx      # Purpose, origin, and core company values
│   │   ├── FAQ.tsx                # Searchable FAQ accordion
│   │   ├── FinalCTA.tsx           # Call-to-action banner
│   │   ├── Footer.tsx             # Semantic sitemap & legal links
│   │   ├── MascotCompanion.tsx    # Floating interactive assistant
│   │   ├── SessionPreviewModal.tsx# Detailed curriculum inspection modal
│   │   ├── WatchlistDrawer.tsx    # Slide-over saved pathways manager
│   │   ├── ContactModal.tsx       # Interactive contact & partnership form
│   │   ├── LegalModal.tsx         # Privacy Policy & Terms of Service modals
│   │   ├── SpotlightCard.tsx      # Radial cursor spotlight card utility
│   │   └── ScrollProgress.tsx     # Reading progress bar
│   ├── context/
│   │   ├── ThemeContext.tsx       # Dark / Light theme provider (defaults to light)
│   │   └── WatchlistContext.tsx   # Saved courses provider with localStorage sync
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind directives, keyframes & custom scroll styles
├── index.html                     # HTML root template with fonts
├── tailwind.config.js             # Tailwind configuration & typography tokens
├── tsconfig.json                  # TypeScript compiler settings
├── package.json                   # Project dependencies and run scripts
├── SETUP.md                       # Comprehensive local setup and deployment guide
└── README.md                      # Project documentation (this file)
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher ([Download Node.js](https://nodejs.org/))

### 2. Installation
```bash
# Clone or navigate to the repository
cd Prabodha

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser. Changes saved in `src/` will hot-reload instantly.

### 4. Production Build & Local Preview
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
Visit **[http://localhost:5173/](http://localhost:5173/)**.

---

## 📄 License & Attribution

© 2026 Prabodha AI. All rights reserved.  
All brand trademarks, design assets, mascot artwork, and copy belong to Prabodha AI.

