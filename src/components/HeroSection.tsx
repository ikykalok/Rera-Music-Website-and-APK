export function HeroSection() {
  return (
    <div
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{
        __html: `<section class="hero" id="hero">
    <img class="hero-shader" src="/assets/hero-shader.webp" fetchpriority="high" alt="" aria-hidden="true">
    <div class="hero-sky" aria-hidden="true"></div>
    <div class="hero-stars" aria-hidden="true"></div>
    <div class="hero-meteor" aria-hidden="true"></div>
    <div class="hero-noise" aria-hidden="true"></div>

    <div class="hero-content" id="hero-content">

    <img class="sun-group" src="/assets/sun.svg" alt="" aria-hidden="true">
    <!-- night moon -->
    <div class="moon-group" aria-hidden="true">
      <span class="moon-glow"></span>
      <img class="moon-disc" src="/assets/moon.svg" alt="">
    </div>
    <img class="hero-cloud cloud-a" src="/assets/cloud.svg" alt="" aria-hidden="true">
    <img class="hero-cloud cloud-b" src="/assets/cloud.svg" alt="" aria-hidden="true">

    <p class="hero-eyebrow">
      <img src="/assets/imgEllipse14.svg" alt="">
      WELCOME TO TERA MUSIC – YOUR WORLD OF SOUND
    </p>

    <span class="hero-vertical" aria-hidden="true">MUSIC / DISCOVER / EXPERIENCE</span>

    <h1>
      <span class="sr-only">Tera Music, Your World of Sound — Jaipur, India</span>
      <span class="h-line multidisciplinary">Press<span class="h-space"> </span>Play</span>
      <span class="h-line designer" id="scramble">Music</span>
    </h1>

    <!-- ── cassette player matching reference design ── -->
    <div class="recorder" role="region" aria-label="Tera Music Audio Player">

      <div class="disk" id="disk-l" aria-hidden="true">
        <div class="disk-face"></div>
        <img class="disk-texture" src="/assets/imgDisk.png" alt="">
        <img class="disk-cap c1" src="/assets/imgEllipse13.svg" alt="">
        <img class="disk-cap c2" src="/assets/imgEllipse12.svg" alt="">
        <img class="disk-cap c3" src="/assets/imgEllipse11.svg" alt="">
      </div>

      <div class="rec-center">
        <p class="rec-title" id="rec-title">Your Next Favorite Song</p>

        <div class="play-slider" id="play-slider">
          <div class="slider-track">
            <div class="slider-fill" id="slider-fill"></div>
          </div>
          <div class="slider-knob" id="slider-knob"></div>
        </div>

        <div class="timestamps">
          <span id="t-current">0:00</span>
          <span id="t-total">0:00</span>
        </div>

        <div class="rec-controls">
          <button class="track-btn" id="prev-btn" type="button" aria-label="Previous track">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>

          <button class="play-circle" id="play-btn" type="button" aria-label="Play">
            <img class="tri" src="/assets/imgGroup.svg" alt="">
            <span class="pause-bars" aria-hidden="true"><span></span><span></span></span>
          </button>

          <button class="track-btn" id="next-btn" type="button" aria-label="Next track">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="disk" id="disk-r" aria-hidden="true">
        <div class="disk-face"></div>
        <img class="disk-texture" src="/assets/imgDisk.png" alt="">
        <img class="disk-cap c1" src="/assets/imgEllipse13.svg" alt="">
        <img class="disk-cap c2" src="/assets/imgEllipse12.svg" alt="">
        <img class="disk-cap c3" src="/assets/imgEllipse11.svg" alt="">
      </div>
    </div>

    </div><!-- /hero-content -->
  </section>
  <audio id="audio" preload="metadata"></audio>`
      }}
    />
  );
}
