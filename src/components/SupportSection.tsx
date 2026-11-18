"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function SupportSection({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const upiId = "7014180967@fam";

  const handleCopyUpi = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = upiId;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className={`lg-support-about-section ${className}`} id="about" data-anchor="support">
      <div id="support" className="lg-anchor-offset" aria-hidden="true" />
      <ScrollReveal className="lg-combined-card">
        {/* Top Eyebrow Badge */}
        <div className="lg-combined-top-badge">
          <span className="lg-pill-badge">
            <span className="lg-pill-dot" />
            ABOUT THE BUILDER &amp; SUPPORT
          </span>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="lg-combined-grid">
          {/* Left Column: Personal About */}
          <div className="lg-col-about">
            <div className="lg-about-header-row">
              <div className="lg-about-avatar-frame">
                <Image
                  src="/assets/imgProfilePicture.jpg"
                  alt="Alok"
                  width={96}
                  height={96}
                  className="lg-about-avatar"
                  priority
                />
                <div className="lg-avatar-ambient" aria-hidden="true" />
              </div>

              <div className="lg-about-titles">
                <div className="lg-about-loc-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Jaipur, India
                </div>
                <h3 className="lg-about-name">Alok</h3>
                <p className="lg-about-role">Student · Developer · AI Builder</p>
              </div>
            </div>

            <p className="lg-about-intro">
              &ldquo;I&apos;m Alok, a student and developer from Jaipur. I build websites and apps using AI, turning creative ideas into real digital experiences. Tera Music is one of my projects, and I&apos;m always learning, building, and creating something new.&rdquo;
            </p>

            {/* Social Links Row */}
            <div className="lg-about-socials">
              <a
                href="https://github.com/ikykalok"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-social-tag"
                aria-label="GitHub Profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/ikyk.alok"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-social-tag"
                aria-label="Instagram Profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://x.com/ikykAlok"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-social-tag"
                aria-label="X Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / Twitter</span>
              </a>
            </div>
          </div>

          {/* Right Column: Voluntary Support for Alok */}
          <div className="lg-col-support">
            <h4 className="lg-support-heading">Support My Work</h4>
            <p className="lg-support-explanation">
              If you enjoy my independent projects and creative experiments and would like to support my ongoing learning and builds, your voluntary support means a lot!
            </p>

            <div className="lg-support-buttons">
              {/* Buy Me a Coffee */}
              <a
                href="https://buymeacoffee.com/ikyk"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-support-bmac-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666A4.542 4.542 0 0 0 15.65 2H4.45A2.45 2.45 0 0 0 2 4.45v9.1A6.45 6.45 0 0 0 8.45 20h4.1a6.45 6.45 0 0 0 6.368-5.385l.89-5.342a3.46 3.46 0 0 0 .408-2.858zM18.1 8.875l-.47 2.82A4.45 4.45 0 0 1 13.25 18H8.45A4.45 4.45 0 0 1 4 13.55V4.45A.45.45 0 0 1 4.45 4H15.65a2.54 2.54 0 0 1 2.49 2.05l.09.43A3.42 3.42 0 0 0 18.1 8.875zM20.9 9.38l-.05.31A1.46 1.46 0 0 1 19.8 11h-.08l.38-2.3a1.46 1.46 0 0 1 1.46 1.35zM6 8h8v2H6zm0 4h6v2H6z" />
                </svg>
                <span>Buy Me a Coffee</span>
              </a>

              {/* UPI Card with Copy button */}
              <div className="lg-support-upi-pill">
                <div className="lg-upi-text-group">
                  <span className="lg-upi-badge-text">UPI ID (India)</span>
                  <span className="lg-upi-code">{upiId}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className={`lg-upi-copy-action ${copied ? "copied" : ""}`}
                  aria-label="Copy UPI ID"
                >
                  {copied ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy UPI</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {copied && (
              <p className="lg-upi-feedback-msg" role="status">
                ✓ UPI ID copied to clipboard! You can paste it into GPay, PhonePe, Paytm, or any UPI app.
              </p>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
