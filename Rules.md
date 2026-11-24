# Project Rules & Standards

1. **Protected Homepage Restrictions**:
   - Never redesign or alter `#hero` layout, typography, gradients, avatar, or `.recorder` appearance.
2. **Scoped Theme & Navigation Rules**:
   - Homepage Dark Mode applies strictly to `#hero` (`localStorage` `'theme'`).
   - Legal pages (`/privacy-policy` and `/terms`) follow the homepage theme preference automatically without in-page switches.
   - All other pages and sections remain in Light Mode permanently.
   - Nav labels (`Home`, `Features`, `About`) must ALWAYS remain `#ffffff` in all states and backgrounds (never switch to black).
   - Liquid-glass navbar uses ~10% reduced blackness (charcoal glass with silver highlights and dynamic background-aware clipping).
3. **Music Player Rules**:
   - Only `#play-btn` toggles playback; `#disk-l`, `#disk-r`, and `.recorder` background must not trigger Play/Pause.
   - Preserve identical player colors in Day and Dark Mode.
4. **Asset & Link Integrity**:
   - Never store `.apk` binaries locally; all `Download App` links must target `https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest`.
   - Never replace real Android screenshots (`public/screenshots/app/`) or the official app icon (`/assets/app-icon.png`).
   - Keep `DVD/` (55 images), `public/dvd/disc-01.png`–`disc-55.png`, and `src/data/films_main.html` synchronized.
5. **Runtime Error Prevention & Performance**:
   - Gate Barba/Astro runtime loading (`RuntimeLoader`) to routes containing `[data-barba="container"]`.
   - Avoid `javascript:void(0)` hrefs inside Barba containers so prefetching never triggers CORS errors.
   - Use `prefers-reduced-motion`, `IntersectionObserver`, and `suppressHydrationWarning` only on DOM-injected legacy wrappers.
6. **Testing & Reporting**:
   - Run `npm run typecheck` and `npm run build` after final edits and report only directly observed results.
