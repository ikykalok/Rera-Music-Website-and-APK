
  /* design-system gallery: seamless, non-interactive auto-scroll loop */
  (function(){
    var g = document.querySelector('#hatcha-view .cs-gallery');
    if(!g) return;
    /* mobile: the gallery stacks into a plain vertical run, so neither the
       duplicate tile set nor the rAF scrollLeft loop has anything to do —
       and the loop would fight the page's own scrolling. */
    if(document.documentElement.classList.contains('cs-static')) return;

    /* duplicate the tile set once so the loop wraps invisibly */
    var originals = Array.prototype.slice.call(g.children);
    var half = 0;
    originals.forEach(function(node){
      var c = node.cloneNode(true);
      c.setAttribute('data-clone','');
      c.setAttribute('aria-hidden','true');
      g.appendChild(c);
      c.querySelectorAll('video').forEach(function(v){
        v.muted = true; var p = v.play && v.play(); if(p && p.catch) p.catch(function(){});
      });
    });
    /* ── measuring the wrap distance is the whole ballgame ──
       #hatcha-view starts hidden on every load that doesn't open straight into the
       case study, and inside a display:none subtree every offsetLeft is 0 — so the
       original one-shot measure() left half at 0, the loop's half>0 test never
       passed, and the marquee sat dead unless something happened to fire a resize.
       Measuring once on first paint isn't enough either: the tiles are sized by
       images and videos that haven't decoded yet, so an early read returns a couple
       of px and locks THAT in. So: re-measure until the value repeats for half a
       second, and re-arm on anything that can change tile widths. */
    var settled = 0;
    function measure(){
      var first = g.children[0], mid = g.children[originals.length];
      if(!mid || !g.offsetParent) return;
      var h = mid.offsetLeft - first.offsetLeft;
      if(h <= 0) return;
      settled = (h === half) ? settled + 1 : 0;
      half = h;
    }
    function remeasure(){ settled = 0; measure(); }
    measure();
    window.addEventListener('resize', remeasure);
    window.addEventListener('load', remeasure);
    window.addEventListener('hashchange', function(){ requestAnimationFrame(remeasure); });
    g.querySelectorAll('img').forEach(function(im){ im.addEventListener('load', remeasure); });
    g.querySelectorAll('video').forEach(function(v){ v.addEventListener('loadedmetadata', remeasure); });

    function norm(){
      if(half > 0){
        while(g.scrollLeft >= half) g.scrollLeft -= half;
        while(g.scrollLeft < 0)     g.scrollLeft += half;
      }
    }

    /* ── speed is in px per SECOND, and the loop below spends it via a fractional
       carry, for two reasons the old `scrollLeft += 1.4` per-frame value hid ──
       1. this scroller snaps scrollLeft to whole pixels on read-back, so any
          per-frame value under 1px rounded UP to a full pixel: 0.6 and 1.4 both
          scrolled at exactly 1px/frame, which is why lowering the number alone
          changed nothing.
       2. per-frame means the strip runs twice as fast on a 120Hz display.
       Only whole pixels are ever written; the remainder rides in `carry`. */
    var SPEED = 40;                  /* px per second */
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* hover parks the strip so a tile can actually be looked at. Wired only on
       real hover devices — a touch screen wide enough to miss cs-static fires
       mouseenter with no matching mouseleave, which would strand it paused.
       The rAF keeps running while paused so it picks straight back up. */
    var paused = false;
    var hoverTarget = g.closest('.cs-gal-marq') || g;
    if(!window.matchMedia || window.matchMedia('(hover: hover)').matches){
      hoverTarget.addEventListener('mouseenter', function(){ paused = true;  });
      hoverTarget.addEventListener('mouseleave', function(){ paused = false; });
    }

    /* the loop runs ONLY while #hatcha-view is actually shown (and the tab is
       visible) — the old unconditional rAF ran forever on every route, and its
       per-frame g.offsetParent guard was itself a layout read. Visibility is
       tracked via the view's `hidden` attribute instead of read per frame. */
    var view = document.getElementById('hatcha-view');
    var running = false;
    var rafId = 0, last = 0, carry = 0;
    function tick(ts){
      rafId = 0;
      if(!running) return;           // view hidden → loop parks until re-shown
      if(!reduce){
        if(settled < 30) measure();  // ~0.5s of agreement, then stop forcing layout each frame
        if(half > 0 && !paused){
          /* clamped so a long hover or a backgrounded tab can't bank a jump */
          var dt = last ? Math.min((ts - last) / 1000, 0.05) : 0;
          carry += SPEED * dt;
          var step = Math.floor(carry);
          if(step){ carry -= step; g.scrollLeft += step; norm(); }
        }
      }
      last = ts;
      rafId = requestAnimationFrame(tick);
    }
    /* One chain, ever. The old version scheduled a fresh rAF on every off→on
       flip without cancelling the pending callback, and a hide/show inside a
       single frame let the stale callback see running===true again and keep
       going — seven had piled up by the time the page settled, each adding its
       own pixel per frame. Cancelling the outstanding handle here, and having
       tick() own the next one, keeps exactly one loop alive. */
    function syncRunning(){
      var on = !view.hidden && !document.hidden;
      if(on === running) return;
      running = on;
      if(rafId){ cancelAnimationFrame(rafId); rafId = 0; }
      if(on){ settled = 0; last = 0; carry = 0; rafId = requestAnimationFrame(tick); }
    }
    new MutationObserver(syncRunning).observe(view, { attributes:true, attributeFilter:['hidden'] });
    document.addEventListener('visibilitychange', syncRunning);
    syncRunning();
  })();
  