"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface AppScreenshot {
  id: string;
  name: string;
  category: string;
  src: string;
}

const NEW_APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: "home-feed",
    name: "Home Feed",
    category: "Explore & Moods",
    src: "/screenshots/app/home-feed-discover.png",
  },
  {
    id: "now-playing",
    name: "Now Playing Player",
    category: "Audio Stream",
    src: "/screenshots/app/now-playing-player.png",
  },
  {
    id: "synced-lyrics",
    name: "Synced Lyrics",
    category: "Real-time Gliding",
    src: "/screenshots/app/synced-lyrics-view.png",
  },
  {
    id: "fullscreen-lyrics",
    name: "Fullscreen Karaoke",
    category: "Immersive View",
    src: "/screenshots/app/fullscreen-lyrics.png",
  },
  {
    id: "music-library",
    name: "Music Library",
    category: "Local & Cloud",
    src: "/screenshots/app/library-overview.png",
  },
  {
    id: "curated-playlists",
    name: "Curated Playlists",
    category: "Collection Grids",
    src: "/screenshots/app/playlists-collection.png",
  },
  {
    id: "playlist-details",
    name: "Playlist Details",
    category: "Track Organization",
    src: "/screenshots/app/playlist-detailed-view.png",
  },
  {
    id: "track-queue",
    name: "Smart Queue & Tracks",
    category: "Playlists",
    src: "/screenshots/app/playlist-tracklist.png",
  },
  {
    id: "instant-search",
    name: "Instant Search",
    category: "Smart Suggestions",
    src: "/screenshots/app/instant-search-suggestions.png",
  },
  {
    id: "search-filters",
    name: "Filtered Search",
    category: "Universal Catalog",
    src: "/screenshots/app/filtered-search-results.png",
  },
  {
    id: "top-charts",
    name: "Top 100 Charts",
    category: "Apple Music Ranked",
    src: "/screenshots/app/top-charts-apple-music.png",
  },
  {
    id: "listen-together-host",
    name: "Listen Together",
    category: "Party Jam Rooms",
    src: "/screenshots/app/listen-together-room.png",
  },
  {
    id: "listen-together-join",
    name: "Join Live Session",
    category: "Room Sync",
    src: "/screenshots/app/listen-together-join.png",
  },
  {
    id: "music-recognition",
    name: "Music Recognition",
    category: "Instant Sound Match",
    src: "/screenshots/app/music-recognition.png",
  },
  {
    id: "listening-stats",
    name: "Listening Stats",
    category: "Personal Trends",
    src: "/screenshots/app/listening-statistics.png",
  },
  {
    id: "playback-history",
    name: "Playback History",
    category: "Timeline Log",
    src: "/screenshots/app/playback-history.png",
  },
  {
    id: "curated-flow",
    name: "Home Flow & Picks",
    category: "Listen Again",
    src: "/screenshots/app/home-explore-flow.png",
  },
  {
    id: "artist-profile",
    name: "Artist Profile",
    category: "Bio & Discography",
    src: "/screenshots/app/artist-discography.png",
  },
  {
    id: "ai-hub-drawer",
    name: "AI Hub & Extensions",
    category: "Preferences Drawer",
    src: "/screenshots/app/ai-hub-account-drawer.png",
  },
  {
    id: "cloud-integrations",
    name: "Cloud Sync & Spotify",
    category: "Account Settings",
    src: "/screenshots/app/cloud-integrations-sync.png",
  },
];

interface ScreenshotShowcaseProps {
  className?: string;
}

export function ScreenshotShowcase({ className = "" }: ScreenshotShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconStageRef = useRef<HTMLDivElement>(null);
  const [iconVisible, setIconVisible] = useState(false);
  const [tappedKey, setTappedKey] = useState<string | null>(null);

  // Duplicate for seamless infinite marquee loop
  const displayItems = [...NEW_APP_SCREENSHOTS, ...NEW_APP_SCREENSHOTS];

  useEffect(() => {
    const el = iconStageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIconVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className={`lg-showcase-section ${className}`} id="features">
      <div id="showcase" className="lg-anchor-offset" aria-hidden="true" />
      <ScrollReveal className="lg-showcase-header">
        {/* Official Ryno Music App Icon — rotates smoothly while visible in viewport */}
        <div ref={iconStageRef} className="lg-app-icon-stage">
          <div className={`lg-app-icon-ring${iconVisible ? " is-spinning" : ""}`}>
            <Image
              src="/assets/app-icon.png"
              alt="Ryno Music Official App Icon"
              width={88}
              height={88}
              className="lg-app-icon-img"
              priority={false}
            />
          </div>
        </div>
        <span className="lg-pill-badge">
          <span className="lg-pill-dot" />
          SEE IT IN ACTION
        </span>
        <h2 className="lg-showcase-title">Built for the way you listen</h2>
        <p className="lg-showcase-desc">
          Actual screenshots from Ryno Music running on Android. Seamless offline caching,
          real-time synced lyrics, and clean navigation without promotional interruptions.
        </p>

        {/* Carousel manual controls */}
        <div className="lg-carousel-controls" aria-label="Carousel navigation">
          <button
            type="button"
            onClick={scrollLeft}
            className="lg-carousel-btn"
            aria-label="Previous screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="lg-carousel-counter">
            20 Screens · Hover or drag to pause
          </span>
          <button
            type="button"
            onClick={scrollRight}
            className="lg-carousel-btn"
            aria-label="Next screenshot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={90}>
        <div
          className="lg-marquee-container"
          ref={containerRef}
          tabIndex={0}
          aria-label="Ryno Music Android App Screenshots"
        >
          <div className="lg-marquee-track">
            {displayItems.map((item, idx) => {
              const cardKey = `${item.id}-${idx}`;
              const isTapped = tappedKey === cardKey;
              return (
                <div
                  key={cardKey}
                  className={`lg-phone-card${isTapped ? " is-tapped" : ""}`}
                  onClick={() => setTappedKey((prev) => (prev === cardKey ? null : cardKey))}
                >
              <div className="lg-phone-bezel">
                <div className="lg-phone-speaker-punch" aria-hidden="true" />
                <div className="lg-phone-screen">
                  <Image
                    src={item.src}
                    alt={`Ryno Music ${item.name} Android screen`}
                    width={270}
                    height={585}
                    className="lg-screenshot-img"
                    loading="lazy"
                  />
                  <div className="lg-phone-glass-glare" aria-hidden="true" />
                </div>
              </div>
              <div className="lg-phone-meta">
                <span className="lg-phone-category">{item.category}</span>
                <p className="lg-phone-name">{item.name}</p>
              </div>
            </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
