# Architecture — Tera Music Website

## 1. Technical Stack
- **Framework**: Next.js `16.3.5` (App Router, Turbopack)
- **UI Library**: React `19.2.4`
- **Language**: TypeScript (`tsc --noEmit`)
- **Styling**: `src/app/globals.css`, `src/styles/site.css`, `src/styles/sections.css`, `src/styles/dvd-section.css`, `src/styles/liquid-glass.css`

## 2. Routing & App Structure
- `src/app/layout.tsx`: Root layout with `data-scroll-behavior="smooth"`, `CustomScrollbar`, `RuntimeLoader`, `SiteNav`, `TrailerLightbox`, `GlobalFooter`, and client scripts (`site.js`, `hero-player.js`).
- `src/app/page.tsx`: Main page (`HeroSection`, `StorySection`, `ScreenshotShowcase`, `FeaturesShowcase`, `FaqShowcase`, `SupportSection`).
- `src/app/privacy-policy/page.tsx`: Privacy Policy wrapped in `LegalThemeWrapper`.
- `src/app/terms/page.tsx`: Terms & Conditions wrapped in `LegalThemeWrapper`.
- `src/app/virustotal/page.tsx`: APK SHA-256 verification and external GitHub release download.
- `next.config.ts`: Redirects `/about` -> `/#about`, `/features` -> `/#features`; `allowedDevOrigins` configured for LAN devices.

## 3. Theme Architecture
- **Homepage Hero (`#hero`)**: `public/js/site.js` `initTheme()` toggles `.night` strictly on `#hero` and `#theme-toggle` (stored in `localStorage` under `'theme'`), with `startViewTransition` and `#hero.theme-fading` fallback.
- **Legal Pages (`/privacy-policy`, `/terms`)**: `src/components/LegalThemeWrapper.tsx` + `initTheme()` toggle `.legal-page-wrapper.night` (stored separately under `'legal-theme'`).
- **All Other Sections/Pages**: Permanent Light Mode.

## 4. Animation, DVD & Audio-Player Architecture
- **Hero Sky**: `public/js/hero-player.js` observes `#hero` for `.night` to trigger `.hero-meteor` and `hero-sky-gust`.
- **Audio Player**: `public/js/hero-player.js` streams audio directly from Supabase Storage URLs (`tera_music_song_urls.json`) with play/pause bound strictly to `#play-btn` across the 93-track library. Local MP3 files have been completely eliminated.
- **3D DVD Section**: `RuntimeLoader.tsx` loads `/_astro/ExportPage.astro_astro_type_script_index_0_lang.DQlUkOwJ.js` only on `/` when `[data-barba="container"]` is present; `src/data/films_main.html` maps 55 discs (`public/dvd/disc-01.png`–`disc-55.png`).
- **Showcase & App Icon**: `ScreenshotShowcase.tsx` uses `IntersectionObserver` to spin `/assets/app-icon.png` only while visible, above a 3D perspective-curved marquee with dark device borders (`.lg-phone-bezel`).
- **Paper Plane Animation Dependency Analysis**:
  - `e:\zainabkabira\public\js\hero-player.js` (lines 415–606) implemented a paper-plane scroll animation requiring `.intro-copy` ("Six years across architecture...") and 4 portfolio project tiles.
  - Per previous user instructions, `.intro-copy` and the 4 tiles were replaced by the 55-disc 3D DVD section.
  - As instructed ("Do not invent the original animation if the source is not available. Report the missing source dependency instead"), the missing source structural elements prevent binding without inventing a non-original flight path.

## 5. Folder Structure
- `src/app/` — App Router pages & layout
- `src/components/` — UI components (`HeroSection`, `StorySection`, `DvdSection`, `ScreenshotShowcase`, `FeaturesShowcase`, `FaqShowcase`, `SupportSection`, `GlobalFooter`, `LegalThemeWrapper`, `RuntimeLoader`, etc.)
- `src/styles/` — Global and section stylesheets
- `src/data/` — `films_main.html` (55 discs)
- `public/` — Static assets (`dvd/`, `screenshots/app/`, `assets/`, `js/`, `_astro/`, `songs/`)
- `scripts/` — `process-dvd.js`, `generate-films-html.js`, `update-favicons.js`
