export function TrailerLightbox() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<div data-trailer-lightbox="" data-trailer-status="not-active" class="trailer-lightbox theme-dark">
      <div data-trailer-strip="top" class="trailer-lightbox__strip"></div>
      <div data-trailer-strip="bottom" class="trailer-lightbox__strip"></div>
      <div data-trailer-canvas="" class="trailer-lightbox__canvas">
        <div data-trailer-plate="" class="trailer-lightbox__plate"></div>
        <div data-trailer-stage="" class="trailer-lightbox__stage">
          <div data-trailer-player="" class="trailer-lightbox__player">
            <div data-trailer-frame="" class="trailer-lightbox__frame">
              <div data-trailer-iframe="" class="trailer-lightbox__iframe"></div>
            </div>
            <div data-trailer-shield="" class="trailer-lightbox__shield"></div>
            <div data-trailer-paused="" class="trailer-lightbox__paused"></div>
            <a data-hover="" data-trailer-unmute="" href="#" class="trailer-lightbox__unmute w-button">TAP FOR SOUND</a>
          </div>
        </div>
        <div data-trailer-ui="" class="trailer-lightbox__ui">
          <div class="trailer-lightbox__top">
            <div data-wrap-group="1.25rem" data-trailer-meta="" data-wrap-flow="" class="trailer-lightbox__meta"></div>
            <a data-hover="" data-trailer-close="" href="#" class="trailer-lightbox__ctl w-button">CLOSE</a>
          </div>
          <div class="trailer-lightbox__bottom">
            <a data-hover="" data-trailer-control="playpause" href="#" class="trailer-lightbox__ctl w-button">PAUSE</a>
            <p data-trailer-time="" class="trailer-lightbox__time">00:00 / 00:00</p>
            <div data-trailer-timeline="" class="trailer-lightbox__timeline">
              <div class="trailer-lightbox__timeline-rule"></div>
              <div data-trailer-buffer="" class="trailer-lightbox__timeline-buffer"></div>
              <div data-trailer-progress="" class="trailer-lightbox__timeline-progress"></div>
              <div data-trailer-handle="" class="trailer-lightbox__timeline-handle"></div>
            </div>
            <div data-trailer-sound="" class="trailer-lightbox__sound">
              <a data-hover="" data-trailer-control="mute" href="#" class="trailer-lightbox__ctl">SOUND</a>
              <div data-trailer-volume="" class="trailer-lightbox__volume">
                <div class="trailer-lightbox__volume-rule"></div>
                <div data-trailer-volume-level="" class="trailer-lightbox__volume-level"></div>
                <div data-trailer-volume-handle="" class="trailer-lightbox__volume-handle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
      }}
      style={{ display: "contents" }}
    />
  );
}
