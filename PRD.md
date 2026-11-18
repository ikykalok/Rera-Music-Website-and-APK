# Product Requirements Document (PRD) — Tera Music Website

## 1. Project Purpose & Target Users
The **Tera Music Website** is the official showcase and APK distribution portal for **Tera Music**, an open-source, ad-free third-party Android YouTube Music client created by **Alok**.
- **Target Users**: Android listeners seeking ad-free music streaming, offline caching, synchronized lyrics, and verifiable open-source APK downloads.

## 2. Core Features & Functionality
1. **Protected Homepage Hero (`#hero`)**:
   - Preserves the exact blue sky gradient, typography, rotating hero text, 93-track `.recorder` audio player (`#play-btn`-only playback toggle, constant Day/Night player colors), and `#hero`-scoped Day/Night toggle with meteor and `hero-sky-gust` animations.
2. **55-Disc 3D DVD Collection (`DvdSection` / `StorySection`)**:
   - Displays all 55 circular-masked DVD discs (`public/dvd/disc-01.png`–`disc-55.png`, `1024x1024` with transparent corners and center hole).
3. **App Icon & Curved Screenshot Showcase (`ScreenshotShowcase`, `#features`)**:
   - Official Tera Music app icon (`/assets/app-icon.png`) in a circular liquid-glass frame above the showcase, rotating smoothly when visible via `IntersectionObserver` (pausing offscreen and under `prefers-reduced-motion`).
   - Curved, angled, layered 3D perspective showcase of 20 genuine Android screenshots (`public/screenshots/app/*.png`) with manual prev/next buttons, hover/focus pause, and touch-friendly horizontal scroll.
4. **Why Tera Section (`FeaturesShowcase`, `#why-tera`)**:
   - Editorial 12-column asymmetrical pastel bento layout presenting 8 distinct light-pastel feature cards.
5. **Straight Answers FAQ (`FaqShowcase`, `#faq`)**:
   - Clean editorial divider-separated accordion with numbered questions (`01`–`05`) and smooth CSS grid-row expand/collapse transitions.
6. **Personal About & Support (`SupportSection`, `#about`)**:
   - Presents Alok (`Student · Developer · AI Builder`, `Jaipur, India`), personal bio, social links, Buy Me a Coffee, and copyable UPI ID.
7. **Legal Pages (`/privacy-policy`, `/terms`)**:
   - Removed legacy "11. Contact Us" (`Privacy Policy`) and "11. Copyright Concerns & Contact" (`Terms`) sections and renumbered sequentially (`1`–`12` and `1`–`11`).
   - Scoped Dark/Light Mode toggle (`LegalThemeWrapper` + `site.js`) active **only** on `/privacy-policy` and `/terms`.
8. **Footer (`GlobalFooter`) & External APK Distribution**:
   - Cleaned footer removing redundant left-side Home/Features/About navigation columns while keeping Tera Music branding, description, social links, legal links, and external GitHub APK download (`https://github.com/ikykalok/Tera-Music-apk/releases/download/tera-music/Tero-Music.apk`).
   - No local `.apk` binary stored in the project.

## 3. Responsive & Performance Requirements
- Responsive across `320px` through `1920px+` viewports without horizontal overflow.
- Respects `prefers-reduced-motion`, lazy-loads below-the-fold screenshots, and gates Barba/Astro runtime loading (`RuntimeLoader`) to `/` where `[data-barba="container"]` exists.
