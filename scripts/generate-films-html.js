const fs = require('fs');
const path = require('path');

function generateFilmsHtml(totalDiscs = 52) {
  const starsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 11 10" fill="none" class="star">
                    <path d="M5.24862 0L6.68508 3.53591L10.4972 3.81215L7.62431 6.29834L8.50829 10L5.24862 8.01105L1.98895 10L2.87293 6.29834L0 3.81215L3.81215 3.53591L5.24862 0Z" fill="currentColor"></path>
                  </svg>`.repeat(5);

  let itemsHtml = '';
  for (let i = 1; i <= totalDiscs; i++) {
    const numStr = String(i).padStart(2, '0');
    const item = `            <div data-film-item="" role="listitem" class="collection-item w-dyn-item">
              <p data-film-field="title" class="paragraph-xxs">DVD ${numStr}</p>
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <p data-film-field="directors" class="paragraph-xxs">Ryno Music</p>
                  </div>
                </div>
              </div>
              <p data-film-field="year" class="paragraph-xxs">2026</p>
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <p data-film-field="starring" class="paragraph-xxs">Studio Master</p>
                  </div><div role="listitem" class="w-dyn-item">
                    <p data-film-field="starring" class="paragraph-xxs">Lossless Hi-Fi</p>
                  </div>
                </div>
              </div>
              <p data-film-field="disc-art-url" class="paragraph-xxs">/dvd/disc-${numStr}.png</p>
              <p data-film-field="disc-art-alt" class="paragraph-xxs">Ryno Music DVD ${numStr} disc artwork</p>
              <a data-film-field="detail-url" href="#dvd" data-barba-prevent="all" style="pointer-events:none" class="w-inline-block"></a>
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div data-review-source-item="" role="listitem" class="w-dyn-item">
                    <p data-film-field="review-publication" class="paragraph-xxs">Ryno Audio</p>
                    <p data-film-field="review-testimonial" class="paragraph-xxs">Spatial Audio &amp; Lossless Dynamics</p>
                    <p data-film-field="review-stars" class="paragraph-xxs">5</p>
                  </div><div data-review-source-item="" role="listitem" class="w-dyn-item">
                    <p data-film-field="review-publication" class="paragraph-xxs">Audiophile Review</p>
                    <p data-film-field="review-testimonial" class="paragraph-xxs">Pure Studio Experience Without Ads</p>
                    <p data-film-field="review-stars" class="paragraph-xxs">5</p>
                  </div>
                </div>
              </div>
            </div>`;
    itemsHtml += (i > 1 ? '\n' : '') + item;
  }

  const fullHtml = `<main data-barba-namespace="films" data-barba="container" class="main-wrapper">
      <section id="section_hero" data-theme-change="nav:dark" data-disc-gallery="" data-disc-touch-action="pan-y" class="hero theme-base">
        <div class="container">
          <div class="experience_wrap">
            <h1 class="sr-only">Discover the Ryno Music ${totalDiscs} Disc Collection</h1>
            <div class="experience_info">
              <p space-top="" space-bottom="" data-film-target="title" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element heading-s">DVD 01</p>
              <div class="info-content">
                <div class="info-content_panel">
                  <div class="divider-horizontal top"></div>
                  <div class="info-content_label-wrap">
                    <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element subheading-xs">ARTIST / LABEL</p>
                  </div>
                  <p space-top="" space-bottom="" data-film-target="primary-credit" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element paragraph-m text-align-right">Ryno Music</p>
                </div>
                <div class="info-content_panel">
                  <div class="divider-horizontal top"></div>
                  <div class="info-content_label-wrap">
                    <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element subheading-xs">YEAR</p>
                  </div>
                  <p space-top="" space-bottom="" data-film-target="year" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element paragraph-m text-align-right">2026</p>
                </div>
                <div class="info-content_panel">
                  <div class="divider-horizontal top"></div>
                  <div class="info-content_label-wrap">
                    <p space-top="x" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element subheading-xs">FORMAT</p>
                  </div>
                  <p space-top="" space-bottom="" data-film-target="starring" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element paragraph-m text-align-right">Studio Master<br>Lossless Hi-Fi</p>
                </div>
              </div>
            </div>
            <div class="testimonial_wrap">
              <div data-review-target-item="" class="testimonial">
                <div data-film-target="review-stars" class="testimonial__stars">${starsSvg}</div>
                <div class="testimonial__text">
                  <p space-top="" space-bottom="" data-film-target="review-publication" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element subheading-xs text-align-center">Ryno Audio</p>
                  <p space-top="" space-bottom="" data-film-target="review-testimonial" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element heading-xs text-align-center">Spatial Audio &amp; Lossless Dynamics</p>
                </div>
              </div>
              <div data-review-target-item="" class="testimonial">
                <div data-film-target="review-stars" class="testimonial__stars">${starsSvg}</div>
                <div class="testimonial__text">
                  <p space-top="" space-bottom="" data-film-target="review-publication" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element subheading-xs text-align-center">Audiophile Review</p>
                  <p space-top="" space-bottom="" data-film-target="review-testimonial" style="" data-balance-lines="" data-reserve-lines="" data-reveal="" class="custom-element heading-xs text-align-center">Pure Studio Experience Without Ads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-disc-canvas="" class="experience-canvas"></div>
        <div data-film-list="" class="film-data w-dyn-list">
          <div role="list" class="w-dyn-items">
${itemsHtml}
          </div>
        </div>
      </section>
    </main>
`;

  fs.writeFileSync('src/data/films_main.html', fullHtml, 'utf8');
  console.log(`Successfully wrote ${totalDiscs} items to src/data/films_main.html!`);
}

generateFilmsHtml(55);
