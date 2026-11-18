"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  progressBased?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  progressBased = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      el.style.opacity = "1";
      el.style.filter = "none";
      el.style.transform = "none";
      return;
    }

    const isProgress = progressBased || className.includes("cd-animation-container");

    if (isProgress) {
      let lastP = -1;
      let ticking = false;

      const calcAndApply = () => {
        if (!el) return;
        const ScrollEngine = (window as unknown as { Scroll?: { rect: (el: HTMLElement) => DOMRect; vh: () => number } }).Scroll;
        const rect = ScrollEngine ? ScrollEngine.rect(el) : el.getBoundingClientRect();
        const vh = ScrollEngine ? ScrollEngine.vh() : window.innerHeight;

        // 0% when element's top enters bottom of viewport (rect.top == vh)
        // 100% when element rises past ~35% of viewport
        const start = vh;
        const end = vh * 0.35;
        let p = (start - rect.top) / (start - end);
        p = Math.min(1, Math.max(0, p));

        if (Math.abs(p - lastP) > 0.005) {
          lastP = p;
          if (p >= 0.98) {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.filter = "none";
          } else {
            // High-performance 120Hz GPU composition (transform + opacity only, zero blur filter re-rasterization)
            el.style.opacity = (0.2 + 0.8 * p).toFixed(3);
            const yOffset = ((1 - p) * 24).toFixed(1);
            el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            el.style.filter = "none";
          }
        }
      };

      const updateProgress = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            ticking = false;
            calcAndApply();
          });
        }
      };

      // Subscribe via window.Scroll if available, or native passive scroll with rAF gating
      const ScrollEngine = (window as unknown as { Scroll?: { add: (fn: () => void) => void } }).Scroll;
      if (ScrollEngine && typeof ScrollEngine.add === "function") {
        ScrollEngine.add(calcAndApply);
      } else {
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress, { passive: true });
      }
      calcAndApply();

      return () => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      };
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [progressBased, className]);

  return (
    <div
      ref={ref}
      className={`lg-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
