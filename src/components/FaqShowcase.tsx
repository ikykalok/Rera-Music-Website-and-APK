"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "free",
    question: "Is Tera Music really 100% free with no ads?",
    answer:
      "Yes, completely. Tera Music has zero subscription tiers, zero audio or video advertisements, and zero paywalls. It is an independent open-source project built for pure, uninterrupted listening.",
  },
  {
    id: "offline",
    question: "Can I download songs for offline playback?",
    answer:
      "Yes! You can download your favorite tracks, full albums, and custom playlists directly to your phone for offline playback. Your music travels with you wherever you go, without needing a mobile data connection.",
  },
  {
    id: "listen-together",
    question: "How does Listen Together work?",
    answer:
      "Listen Together lets you host or join live listening rooms with friends using a unique room code. Everyone in the session hears the same song at the exact same millisecond, similar to Spotify Jam.",
  },
  {
    id: "safe",
    question: "Is Tera Music safe to install on Android?",
    answer:
      "Tera Music is 100% safe, privacy-respecting, and open source. It contains no trackers or hidden malware, and every release can be scanned and verified via VirusTotal with a 100% clean detection score.",
  },
  {
    id: "source",
    question: "Where does the music come from?",
    answer:
      "Tera Music acts as a modern, lightweight third-party client for YouTube Music and public streaming APIs. Tera Music does not host or store proprietary audio on its own servers.",
  },
];

interface FaqShowcaseProps {
  className?: string;
}

export function FaqShowcase({ className = "" }: FaqShowcaseProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`lg-faq-section ${className}`} id="faq">
      <ScrollReveal className="lg-faq-header">
        <span className="lg-pill-badge">
          <span className="lg-pill-dot" />
          FREQUENTLY ASKED
        </span>
        <h2 className="lg-faq-title">Straight answers</h2>
        <p className="lg-faq-desc">
          Everything you need to know about Tera Music, security, features, and how it works.
        </p>
      </ScrollReveal>

      <ScrollReveal className="lg-faq-list" delayMs={80}>
        {FAQS.map((faq, idx) => {
          const isOpen = openId === faq.id;
          const num = String(idx + 1).padStart(2, "0");
          return (
            <div
              key={faq.id}
              className={`lg-faq-item ${isOpen ? "open" : ""}`}
            >
              <button
                type="button"
                className="lg-faq-trigger"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="lg-faq-q-wrap">
                  <span className="lg-faq-index" aria-hidden="true">{num}</span>
                  <span className="lg-faq-question">{faq.question}</span>
                </span>
                <span className="lg-faq-icon" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`lg-faq-collapse${isOpen ? " is-open" : ""}`}
              >
                <div className="lg-faq-collapse-inner">
                  <div className="lg-faq-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
