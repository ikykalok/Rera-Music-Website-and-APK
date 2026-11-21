# Ryno Music — Premium Music App & 3D DVD Interactive Experience

A seamless, high-performance merged web application bringing together two world-class interactive experiences:
1. **Section 1 — Original Interactive Music App Landing Page** (from `zainabkabira`): Complete interactive tape recorder with spinning audio reels, real-time song streaming directly from Supabase Storage URLs (`tera_music_song_urls.json`), time scrub bar, sky shader, sun/moon celestial transition, and dual Dark / Light theme toggle.
2. **Section 2 — Scroll-Triggered Story Animation** (from `zainabkabira`): Pinned hero scaling, ascending cream `.sky-band`, line-by-line typography reveal (`.intro-copy`), and animated SVG paper plane (`.plane-fly`) with dynamic curved flight trajectory.
3. **Section 3 — Complete 3D WebGL DVD Experience** (from `24.raviklaas`): All 12 DVD film discs (*Backrooms*, *The Invite*, *Tony*, *Marty Supreme*, *The Smashing Machine*, *The Brutalist*, *Everything Everywhere All At Once*, *Lady Bird*, *Ex Machina*, *Hereditary*, *The Zone of Interest*, *Uncut Gems*) rendered in Three.js with realistic lighting, iridescence, wheel/touch/drag interaction, and GSAP text transitions.

---

## Quick Start (Run Locally)

### Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- npm

### 1. Install Dependencies
Dependencies are already installed in `node_modules`. If needed:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev -- -p 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm start
```

---

## Architectural Highlights
- **Framework**: Next.js 16 (App Router with Turbopack) + React 19 + Tailwind CSS v4.
- **Three.js & WebGL**: Preserves the original 3D WebGL bundle and materials without simplification.
- **Theme Support**: Real-time Light Mode (`#fff9f1`) and Dark Mode (`#0a0a0f`) switching via the sun/moon navigation button. The WebGL renderer background connects to `--bg-base`, ensuring zero seams or flashes across themes.
- **Scoped Styling**: Original styles from both projects are cleanly scoped (`#section_hero.hero` and `.dvd-section`) preventing any CSS leakage or layout conflicts.
