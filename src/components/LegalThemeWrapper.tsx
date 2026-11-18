"use client";

import React, { useEffect, useState } from "react";

interface LegalThemeWrapperProps {
  children: React.ReactNode;
}

/**
 * Mirrors the Homepage Landing Page's theme preference ('theme' in localStorage)
 * onto /privacy-policy and /terms without introducing a duplicate theme switch.
 */
export function LegalThemeWrapper({ children }: LegalThemeWrapperProps) {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const syncFromHeroTheme = () => {
      const night = localStorage.getItem("theme") === "night";
      setIsNight(night);
      const navToggle = document.getElementById("theme-toggle");
      if (navToggle) {
        navToggle.setAttribute("aria-pressed", String(night));
        navToggle.classList.toggle("night", night);
      }
    };

    syncFromHeroTheme();

    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ night: boolean }>;
      if (typeof customEvent.detail?.night === "boolean") {
        setIsNight(customEvent.detail.night);
      } else {
        syncFromHeroTheme();
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme") syncFromHeroTheme();
    };

    window.addEventListener("legal-theme-change", handleThemeEvent);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("legal-theme-change", handleThemeEvent);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <div className={`legal-page-wrapper${isNight ? " night" : ""}`}>
      {children}
    </div>
  );
}
