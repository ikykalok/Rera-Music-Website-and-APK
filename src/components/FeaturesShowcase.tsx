"use client";

import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface Feature {
  id: string;
  number: string;
  title: string;
  desc: string;
  pill: string;
  colorTheme: {
    bg: string;
    border: string;
    borderHover: string;
    iconBg: string;
    iconColor: string;
    pillBg: string;
    pillColor: string;
    shadowHover: string;
  };
  iconSvg: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    id: "offline",
    number: "01",
    title: "Offline Playback",
    desc: "Save tracks and playlists to your phone for seamless listening anywhere.",
    pill: "Full Offline Mode",
    colorTheme: {
      bg: "#f0f7ff",
      border: "rgba(186, 224, 255, 0.85)",
      borderHover: "rgba(96, 165, 250, 0.9)",
      iconBg: "#dbeafe",
      iconColor: "#1d4ed8",
      pillBg: "rgba(219, 234, 254, 0.9)",
      pillColor: "#1e40af",
      shadowHover: "0 20px 35px -10px rgba(59, 130, 246, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    id: "lyrics",
    number: "02",
    title: "Synced Lyrics",
    desc: "Follow precision time-synced lyrics word-by-word and tap any line to jump.",
    pill: "Word-by-Word",
    colorTheme: {
      bg: "#faf5ff",
      border: "rgba(233, 213, 255, 0.85)",
      borderHover: "rgba(192, 132, 252, 0.9)",
      iconBg: "#f3e8ff",
      iconColor: "#7e22ce",
      pillBg: "rgba(243, 232, 255, 0.9)",
      pillColor: "#6b21a8",
      shadowHover: "0 20px 35px -10px rgba(168, 85, 247, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: "ads",
    number: "03",
    title: "Zero Ads, Forever",
    desc: "Pure, uninterrupted music with zero audio, video, or banner commercials.",
    pill: "100% Ad-Free",
    colorTheme: {
      bg: "#f0fdf4",
      border: "rgba(187, 247, 208, 0.85)",
      borderHover: "rgba(74, 222, 128, 0.9)",
      iconBg: "#dcfce7",
      iconColor: "#15803d",
      pillBg: "rgba(220, 252, 231, 0.9)",
      pillColor: "#166534",
      shadowHover: "0 20px 35px -10px rgba(34, 197, 94, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "queue",
    number: "04",
    title: "Smart Queue",
    desc: "Predictive auto-mix queues that adapt to your taste and keep music flowing.",
    pill: "Predictive Auto-Mix",
    colorTheme: {
      bg: "#fefce8",
      border: "rgba(254, 240, 138, 0.85)",
      borderHover: "rgba(250, 204, 21, 0.9)",
      iconBg: "#fef9c3",
      iconColor: "#a16207",
      pillBg: "rgba(254, 249, 195, 0.9)",
      pillColor: "#854d0e",
      shadowHover: "0 20px 35px -10px rgba(234, 179, 8, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <polyline points="3 6 4 7 3 8" />
        <polyline points="3 12 4 13 3 14" />
        <polyline points="3 18 4 19 3 20" />
      </svg>
    ),
  },
  {
    id: "opensource",
    number: "05",
    title: "Open Source",
    desc: "Transparent, privacy-first code with zero hidden fees or telemetry trackers.",
    pill: "GPL-3.0 Transparent",
    colorTheme: {
      bg: "#ecfeff",
      border: "rgba(165, 243, 252, 0.85)",
      borderHover: "rgba(34, 211, 238, 0.9)",
      iconBg: "#cffafe",
      iconColor: "#0e7490",
      pillBg: "rgba(207, 250, 254, 0.9)",
      pillColor: "#155e75",
      shadowHover: "0 20px 35px -10px rgba(6, 182, 212, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "together",
    number: "06",
    title: "Listen Together",
    desc: "Host or join live listening rooms and sync playback with friends in real time.",
    pill: "Real-time Sync",
    colorTheme: {
      bg: "#fff1f2",
      border: "rgba(254, 205, 211, 0.85)",
      borderHover: "rgba(251, 113, 133, 0.9)",
      iconBg: "#ffe4e6",
      iconColor: "#be123c",
      pillBg: "rgba(255, 228, 230, 0.9)",
      pillColor: "#9f1239",
      shadowHover: "0 20px 35px -10px rgba(244, 63, 94, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "podcasts",
    number: "07",
    title: "Podcast Support",
    desc: "Stream top podcasts and shows alongside music with playback speed controls.",
    pill: "Shows & Talk",
    colorTheme: {
      bg: "#fff7ed",
      border: "rgba(254, 215, 170, 0.85)",
      borderHover: "rgba(251, 146, 60, 0.9)",
      iconBg: "#ffedd5",
      iconColor: "#c2410c",
      pillBg: "rgba(255, 237, 213, 0.9)",
      pillColor: "#9a3412",
      shadowHover: "0 20px 35px -10px rgba(249, 115, 22, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    id: "datasaver",
    number: "08",
    title: "Data Saver Mode",
    desc: "Smart caching and bitrate controls keep cellular data usage low on the go.",
    pill: "Smart Caching",
    colorTheme: {
      bg: "#eef2ff",
      border: "rgba(199, 210, 254, 0.85)",
      borderHover: "rgba(129, 140, 248, 0.9)",
      iconBg: "#e0e7ff",
      iconColor: "#4338ca",
      pillBg: "rgba(224, 231, 255, 0.9)",
      pillColor: "#3730a3",
      shadowHover: "0 20px 35px -10px rgba(99, 102, 241, 0.22)",
    },
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

interface FeaturesShowcaseProps {
  className?: string;
}

export function FeaturesShowcase({ className = "" }: FeaturesShowcaseProps) {
  return (
    <section className={`lg-features-section ${className}`} id="why-tera">
      <ScrollReveal className="lg-features-header">
        <span className="lg-pill-badge">
          <span className="lg-pill-dot" />
          WHY TERA
        </span>
        <h2 className="lg-features-title">Everything you need, nothing you don&apos;t</h2>
        <p className="lg-features-desc">
          Eight reasons people choose Echo over every other music player.
        </p>
      </ScrollReveal>

      <ScrollReveal className="lg-features-grid" delayMs={80}>
        {FEATURES.map((feat) => {
          const { bg, border, borderHover, iconBg, iconColor, pillBg, pillColor, shadowHover } = feat.colorTheme;
          return (
            <div
              key={feat.id}
              className={`lg-feature-card lg-feature-card--${feat.id}`}
              style={
                {
                  "--card-bg": bg,
                  "--card-border": border,
                  "--card-border-hover": borderHover,
                  "--card-shadow-hover": shadowHover,
                  "--icon-bg": iconBg,
                  "--icon-color": iconColor,
                  "--pill-bg": pillBg,
                  "--pill-color": pillColor,
                } as React.CSSProperties
              }
            >
              <div className="lg-feature-top">
                <span className="lg-feature-number">{feat.number}</span>
                <span className="lg-feature-badge-tag">{feat.pill}</span>
                <div className="lg-feature-icon-box">{feat.iconSvg}</div>
              </div>
              <h3 className="lg-feature-name">{feat.title}</h3>
              <p className="lg-feature-body">{feat.desc}</p>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
