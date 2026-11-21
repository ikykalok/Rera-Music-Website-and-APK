# Design System — Ryno Music Website

## 1. Visual Architecture
The website combines two distinct visual zones:
1. **Atmospheric Hero (`#hero`)**:
   - Blue daytime sky gradient (`--hero-from`, `--hero-to`) transitioning smoothly to starry night sky with `.hero-meteor` and `.moon-group` when `#hero.night` is active.
   - Night-to-Day transition triggers `hero-sky-gust` (`3s cubic-bezier(0.2, 0.7, 0.3, 1)`) on `.hero-sky`.
   - Tactile neumorphic `.recorder` music player (`#dfdcd5` body, `#373535` rimmed vinyl/tape `.disk`s, `#373535` / `#060606` controls) whose colors stay constant in both Day and Night modes.
2. **Permanent Light Mode Liquid Glass Sections**:
   - Frosted glass cards, soft gradients, and pastel accents across `ScreenshotShowcase`, `FeaturesShowcase`, `FaqShowcase`, `SupportSection`, and `GlobalFooter`.
   - Typography uses `Space Grotesk` (`src/styles/site.css`).

## 2. Motion & Accessibility
- `document.startViewTransition` with `#hero.theme-fading` (`0.45s ease`) fallback for theme switches.
- `.lg-marquee-track` (`85s linear infinite` with `translate3d`) pauses on `:hover` and `:focus-within`; `.lg-phone-card` elevates smoothly on hover (`cubic-bezier(0.22, 1, 0.36, 1)`).
- `@media (prefers-reduced-motion: reduce)` disables hero theme fade, meteor/wind-gust animations, and screenshot marquee/hover animations while keeping manual scroll and button navigation functional.
