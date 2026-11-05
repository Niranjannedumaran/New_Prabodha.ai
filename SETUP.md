# Prabodha AI — Local Deployment & Setup Guide

This guide provides clean, step-by-step instructions to install dependencies, compile the production build, run the local server, and preview the **Prabodha AI** website with full fluid physics motion.

---

## 🚀 Quick Launch (1-Click on Windows)

In the project folder, two launcher scripts are provided:

* **Production Preview (Recommended):** Double-click `start-local.bat`  
  *Compiles the optimized production package into `/dist` and serves it live at `http://localhost:5173/`.*
* **Development Server (HMR):** Double-click `start-dev.bat`  
  *Launches Vite dev server with Hot Module Replacement for live editing.*

---

## 📋 Prerequisites

Before running the project, make sure **Node.js** is installed on your computer:

* **Node.js**: `v18.0.0` or higher (`v20+` or `v22+` LTS recommended).
* **npm**: `v9.0.0` or higher (bundled with Node.js).

Check your installed versions by opening a terminal:
```bash
node -v
npm -v
```

> **Note for Windows Users:** If Node.js is not yet installed, download it from [nodejs.org](https://nodejs.org/) or install via Windows terminal:
> ```powershell
> winget install OpenJS.NodeJS.LTS
> ```

---

## 🛠️ Step-by-Step Manual Setup

Open your terminal (PowerShell, Command Prompt, or Git Bash) inside the project folder:

```powershell
cd c:\Users\Niranjan\Downloads\Prabodha.AI-Website
```

### Step 1: Install Dependencies
```powershell
npm.cmd install
```
*(On Windows PowerShell, using `npm.cmd` bypasses execution policy restrictions).*

### Step 2: Build Production Bundle
```powershell
npm.cmd run build
```
This runs TypeScript validation (`tsc`) and Vite asset bundling into the `/dist` directory.

### Step 3: Launch Local Production Server
```powershell
npm.cmd run preview -- --port 5173 --host 0.0.0.0
```

Once running, open your web browser to:
👉 **[http://localhost:5173/](http://localhost:5173/)** (or `http://127.0.0.1:5173/`)

---

## 💻 Running Development Server (Live Code Editing)

If you are developing or making UI changes:
```powershell
npm.cmd run dev -- --host 0.0.0.0
```
Open **[http://localhost:5173/](http://localhost:5173/)**. Any edits saved in `src/` will hot-reload in under 50ms without resetting page state.

---

## 🧩 Fluid Interactions & Motion Craft Included

The deployed site features Apple-grade fluid interface physics and Emil Kowalski design engineering principles:

1. **Persistent Watchlist Drawer (`WatchlistDrawer.tsx`):**
   * Gesture-driven 1:1 horizontal drag-to-dismiss with pointer capture.
   * Velocity handoff ($v_x > 250\text{ px/s}$) and momentum threshold dismissal.
   * Critically damped Apple spring snapping (`stiffness: 340, damping: 34`).
   * Escape key instant dismissal and frosted glass backdrop blur.

2. **Curriculum Preview Modal (`SessionPreviewModal.tsx`):**
   * Materializing blur + scale entrance (`opacity: 0 -> 1, scale: 0.96 -> 1, blur: 4px -> 0px`).
   * Subtle, faster exit (`duration: 160ms, scale: 0.98, blur: 2px`).
   * Clean `AnimatePresence` unmounting (no sudden DOM removal).

3. **Hands-On Interactive Sandbox (`InteractiveDemo.tsx`):**
   * Shared layout sliding indicator (`layoutId="activeSandboxTab"`) between tabs.
   * Fluid message entry with subtle blur/opacity reveal in Socratic AI chat.
   * Tactile interactive knowledge graph nodes.

4. **Floating Navbar & Theme Engine (`Navbar.tsx`):**
   * Rotational spring flip icon transition between Light and Dark mode.
   * Watchlist counter badge spring pop.
   * Zero-latency `:active` press scale feedback (`scale(0.97)` / `scale(0.93)`).

5. **FAQ Accordion (`FAQ.tsx`):**
   * Height-animated accordion expansion with silky custom bezier easing.

6. **Accessibility (`prefers-reduced-motion`):**
   * Every component includes automatic fallbacks for reduced-motion settings.

---

## ⚙️ Windows Troubleshooting

### 1. `npm.ps1 cannot be loaded because running scripts is disabled`
PowerShell disables `.ps1` execution by default. Use `npm.cmd` instead:
```powershell
npm.cmd install
npm.cmd run build
npm.cmd run preview
```

### 2. Port `5173` is Already in Use
Specify an alternative port such as `3000`:
```powershell
npm.cmd run preview -- --port 3000
```

### 3. Exposing on Local Network (Mobile Testing)
The `--host 0.0.0.0` flag binds to all local network adapters. Connect your phone or tablet via your computer's local IP (e.g. `http://192.168.1.X:5173/`).

---

## 📦 Project Scripts Reference

| Command | Purpose |
|---|---|
| `npm.cmd run dev` | Starts Vite dev server with instant HMR |
| `npm.cmd run build` | Compiles TypeScript (`tsc`) and generates optimized production bundle |
| `npm.cmd run preview` | Runs local HTTP server hosting `/dist` |

---

## ✅ Deployment Verification Checklist

- [x] Production build passes cleanly with 0 TypeScript/Vite errors.
- [x] Local preview server is active at `http://localhost:5173/`.
- [x] Watchlist Drawer slides with gesture drag, velocity dismiss, and backdrop blur.
- [x] Theme switcher rotates with spring animation.
- [x] Socratic Sandbox tabs glide smoothly using shared layout pill.
- [x] Zero scrollbar layout preserved across all viewport widths.
