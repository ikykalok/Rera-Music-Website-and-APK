"use client";

import { useEffect, useRef } from "react";

export function CustomScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startScrollTopRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;

    // Cached dimensions to eliminate forced synchronous layouts (reflow) on scroll
    let cachedScrollHeight = 0;
    let cachedClientHeight = 0;
    let cachedMaxScroll = 0;
    let cachedTrackHeight = 0;
    let cachedThumbHeight = 0;
    let cachedMaxThumbTravel = 0;
    let isTicking = false;

    function measureMetrics() {
      cachedScrollHeight = document.documentElement.scrollHeight;
      cachedClientHeight = window.innerHeight;
      cachedMaxScroll = cachedScrollHeight - cachedClientHeight;
      if (cachedMaxScroll <= 0) {
        track!.style.display = "none";
        return;
      }
      track!.style.display = "block";

      cachedTrackHeight = track!.clientHeight;
      cachedThumbHeight = Math.max(36, (cachedClientHeight / cachedScrollHeight) * cachedTrackHeight);
      thumb!.style.height = `${cachedThumbHeight}px`;
      cachedMaxThumbTravel = cachedTrackHeight - cachedThumbHeight;
    }

    function renderThumbPosition() {
      isTicking = false;
      if (isDraggingRef.current || cachedMaxScroll <= 0) return;
      const y = window.scrollY || window.pageYOffset || 0;
      const scrollFraction = Math.min(1, Math.max(0, y / cachedMaxScroll));
      const thumbY = scrollFraction * cachedMaxThumbTravel;
      thumb!.style.transform = `translate3d(0, ${thumbY}px, 0)`;
    }

    function handleScroll() {
      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(renderThumbPosition);
      }
    }

    function handleResize() {
      measureMetrics();
      renderThumbPosition();
    }

    function handleThumbPointerDown(e: PointerEvent) {
      e.preventDefault();
      e.stopPropagation();
      isDraggingRef.current = true;
      startYRef.current = e.clientY;
      startScrollTopRef.current = window.scrollY;
      thumb!.classList.add("dragging");
      thumb!.setPointerCapture(e.pointerId);
    }

    function handleThumbPointerMove(e: PointerEvent) {
      if (!isDraggingRef.current) return;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = scrollHeight - clientHeight;
      const trackHeight = track!.clientHeight;
      const thumbHeight = thumb!.clientHeight;
      const maxThumbTravel = trackHeight - thumbHeight;
      if (maxThumbTravel <= 0) return;

      const deltaY = e.clientY - startYRef.current;
      const scrollDelta = (deltaY / maxThumbTravel) * maxScroll;
      const targetScroll = Math.min(maxScroll, Math.max(0, startScrollTopRef.current + scrollDelta));

      window.scrollTo({ top: targetScroll, behavior: "auto" });

      const scrollFraction = targetScroll / maxScroll;
      thumb!.style.transform = `translateY(${scrollFraction * maxThumbTravel}px)`;
    }

    function handleThumbPointerUp(e: PointerEvent) {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      thumb!.classList.remove("dragging");
      try {
        thumb!.releasePointerCapture(e.pointerId);
      } catch (_) {}
      renderThumbPosition();
    }

    function handleTrackClick(e: MouseEvent) {
      if (e.target === thumb) return;
      const rect = track!.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const trackHeight = track!.clientHeight;
      const thumbHeight = thumb!.clientHeight;
      const targetRatio = Math.min(1, Math.max(0, (clickY - thumbHeight / 2) / (trackHeight - thumbHeight)));
      const scrollHeight = document.documentElement.scrollHeight;
      const maxScroll = scrollHeight - window.innerHeight;
      window.scrollTo({
        top: targetRatio * maxScroll,
        behavior: "smooth",
      });
    }

    function handleKeyDown(e: KeyboardEvent) {
      const active = document.activeElement;
      if (
        active &&
        (/^(INPUT|TEXTAREA|SELECT)$/i.test(active.tagName) ||
          (active as HTMLElement).isContentEditable)
      ) {
        return;
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = Math.max(0, scrollHeight - clientHeight);
      if (maxScroll <= 0) return;

      const currentScroll = window.scrollY;
      let targetScroll: number | null = null;
      const step = 90;
      const pageStep = Math.round(clientHeight * 0.85);

      if (e.key === "ArrowDown") {
        targetScroll = Math.min(maxScroll, currentScroll + step);
      } else if (e.key === "ArrowUp") {
        targetScroll = Math.max(0, currentScroll - step);
      } else if (e.key === "PageDown") {
        targetScroll = Math.min(maxScroll, currentScroll + pageStep);
      } else if (e.key === "PageUp") {
        targetScroll = Math.max(0, currentScroll - pageStep);
      } else if (e.key === "Home") {
        targetScroll = 0;
      } else if (e.key === "End") {
        targetScroll = maxScroll;
      } else if (e.key === " " && !/^(BUTTON|A)$/i.test(active?.tagName || "")) {
        targetScroll = e.shiftKey
          ? Math.max(0, currentScroll - pageStep)
          : Math.min(maxScroll, currentScroll + pageStep);
      }

      if (targetScroll !== null && targetScroll !== currentScroll) {
        e.preventDefault();
        window.scrollTo({
          top: targetScroll,
          behavior: Math.abs(targetScroll - currentScroll) > clientHeight * 1.5 ? "auto" : "smooth",
        });
      }
    }

    // Safety check: ensure scroll isn't accidentally locked by third-party remnants
    function ensureUnlocked() {
      if (document.documentElement.classList.contains("pl-lock") && !document.getElementById("page-loader")) {
        document.documentElement.classList.remove("pl-lock");
      }
      if (document.body.classList.contains("pl-lock") && !document.getElementById("page-loader")) {
        document.body.classList.remove("pl-lock");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    thumb.addEventListener("pointerdown", handleThumbPointerDown);
    window.addEventListener("pointermove", handleThumbPointerMove);
    window.addEventListener("pointerup", handleThumbPointerUp);
    track.addEventListener("click", handleTrackClick);

    const observer = new ResizeObserver(() => {
      measureMetrics();
      renderThumbPosition();
      ensureUnlocked();
    });
    observer.observe(document.body);

    measureMetrics();
    renderThumbPosition();
    ensureUnlocked();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      thumb.removeEventListener("pointerdown", handleThumbPointerDown);
      window.removeEventListener("pointermove", handleThumbPointerMove);
      window.removeEventListener("pointerup", handleThumbPointerUp);
      track.removeEventListener("click", handleTrackClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="custom-scrollbar-track"
      aria-hidden="true"
    >
      <div ref={thumbRef} className="custom-scrollbar-thumb" />
    </div>
  );
}
