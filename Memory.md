# Project Memory

## Completed Work
- **APK Cleanup & External Link**: Deleted `public/Tera-Music.apk`; all `Download App` links use `https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest`.
- **Runtime & Console Fixes**:
  - `src/app/layout.tsx`: Added `data-scroll-behavior="smooth"` to `<html>`.
  - `src/components/RuntimeLoader.tsx`: Gated Astro/Barba runtime script injection to `pathname === "/"` when `[data-barba="container"]` exists.
  - `scripts/generate-films-html.js` & `src/data/films_main.html`: Replaced `href="javascript:void(0)"` with `href="#dvd" data-barba-prevent="all"` (eliminated CORS XHR error).
  - `SiteNav.tsx`, `HeroSection.tsx`, `PageLoader.tsx`, `RouteCurtain.tsx`: Added `suppressHydrationWarning` to eliminate React hydration mismatch.
- **UI & Content Updates**:
  - `src/app/layout.tsx` & `src/styles/liquid-glass.css`: Loaded `Manrope` via `next/font/google` (`--font-ui-sans`) for all non-locked sections while preserving `#hero` typography.
  - `public/js/site.js` & `src/styles/site.css`: Added partial-overlap background-aware dark liquid-glass navigation (`.nav-pill-glass` with dynamic `--glass-clip-top` inset); reduced blackness by ~10% (translucent charcoal glass with silver highlights); strictly locked `.nav-link` labels (`Home`, `Features`, `About`) to `#ffffff !important` in all navigation states.
  - `src/styles/sections.css`: Ensured collision-free positioning and responsive sizing for `.hero-eyebrow` ("WELCOME TO TERA MUSIC — YOUR WORLD OF SOUND") and `h1 .h-line` ("Music that Moves") across desktop, tablet, and mobile.
  - `src/components/GlobalFooter.tsx`: Removed unwanted phrases (`"Crafted with passion in Jaipur, India"` and `"Open-source third-party music client"`).
  - Evaluated paper plane animation dependency in `e:\zainabkabira`: confirmed dependency on `.intro-copy` and 4 project tiles which were intentionally replaced by the 55-disc DVD section.
  - `src/components/ScreenshotShowcase.tsx` & `src/styles/liquid-glass.css`: Added `#features` anchor + `IntersectionObserver`-driven rotating `/assets/app-icon.png` above a 3D perspective-curved, angled screenshot showcase with dark device borders (`.lg-phone-bezel`) and touch tap-to-focus (`.is-tapped`).
  - `src/components/FeaturesShowcase.tsx` & `src/styles/liquid-glass.css`: Asymmetrical 12-column pastel bento grid (`#why-tera`) with `"Eight reasons people choose Echo over every other music player."` subtitle and 1–2 line descriptions.
  - `src/components/FaqShowcase.tsx` & `src/styles/liquid-glass.css`: Editorial "Straight Answers" divider-separated accordion with CSS `grid-template-rows` animation.
  - `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx`, `src/components/LegalThemeWrapper.tsx`, `public/js/site.js`, `src/styles/site.css`: Removed old Section 11, renumbered sections (`1`–`12` / `1`–`11`), and synced Dark/Light mode directly to the Homepage Landing Page `'theme'` preference without adding a second theme switch.
  - `src/components/GlobalFooter.tsx` & `src/styles/liquid-glass.css`: Removed Home/Features/About footer nav column; balanced 2-column footer.
  - `src/styles/site.css`: Added `#nav .nav-link, .nav-link { display: none !important; }` at `<= 640px` to prevent 375px mobile navbar overlap.

## Network & Dev Server Notes
- `scripts/dev-lan.js` dynamically detects the active Wi-Fi/LAN IPv4 address (`10.228.80.252`), prints `Local: http://localhost:3000` and `Mobile (LAN): http://10.228.80.252:3000`, and starts `next dev -H 0.0.0.0 -p 3000`.
- `next.config.ts` `allowedDevOrigins` includes `localhost:*`, `10.*`, `192.168.*`, `172.16.*`–`172.31.*`, `*.local`.
- `Invoke-WebRequest http://10.228.80.252:3000/` timed out from the host and `Get-NetFirewallRule` returned Access Denied without admin rights, so external phone access over Wi-Fi could not be verified.

## Verification Status
- **Automated Tests**:
  - `npm run typecheck` (`tsc --noEmit`): Passed (exit code 0).
  - `npm run build` (`next build`, Next.js 16.3.5 Turbopack): Passed (exit code 0, 10/10 static pages generated).
  - `npm run lint` (`eslint` 9.39.4): Failed (exit code 1) — no `eslint.config.(js|mjs|cjs)` file present in the project root.
- **Browser QA**:
  - Verified 0 JavaScript console errors across `/`, `/privacy-policy`, and `/terms`.
  - Verified partial-overlap `--glass-clip-top` liquid-glass navbar transitions (56px over `#hero` -> proportional mid-scroll -> 0px `.is-glass-dark` over light sections -> 56px upon returning).
  - Verified dark phone device frames with hover/touch straightening and lift.
  - Verified `Manrope` typography loaded via `next/font/google` applied to all non-locked sections while `#hero` typography remains unchanged.
  - Verified legal pages synchronize with `#theme-toggle` without redundant in-page switch buttons.
