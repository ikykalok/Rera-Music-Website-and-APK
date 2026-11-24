"use client";

import Link from "next/link";
import Image from "next/image";

export function GlobalFooter() {
  const handleScrollClick = (targetId: string, e: React.MouseEvent) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  return (
    <footer className="lg-footer" role="contentinfo">
      <div className="lg-footer-container">
        {/* Main 3-column top row */}
        <div className="lg-footer-grid">
          {/* Col 1: Brand Info */}
          <div className="lg-footer-brand-col">
            <Link
              href="/#top"
              onClick={(e) => handleScrollClick("top", e)}
              className="lg-footer-brand-header"
            >
              <div className="lg-footer-icon-wrap">
                <Image
                  src="/assets/app-icon.png"
                  alt="Ryno Music Icon"
                  width={42}
                  height={42}
                  className="lg-footer-app-icon"
                />
              </div>
              <span className="lg-footer-brand-name">Ryno Music</span>
            </Link>
            <p className="lg-footer-brand-desc">
              A modern, ad-free third-party YouTube Music client. Experience
              lossless audio streaming, synchronized lyrics, and offline playback.
            </p>
            <div className="lg-footer-social-row">
              <a
                href="https://github.com/ikykalok"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-footer-social-pill"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/ikyk.alok"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-footer-social-pill"
                aria-label="Instagram Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="lg-footer-social-pill"
                aria-label="X Profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / Twitter</span>
              </a>
              <a
                href="https://buymeacoffee.com/ikyk"
                target="_blank"
                rel="noopener noreferrer"
                className="lg-footer-social-pill lg-bmac-pill"
                aria-label="Buy Me a Coffee"
              >
                <span>☕ Buy Me a Coffee</span>
              </a>
            </div>
          </div>

          {/* Col 2: External & Legal Links */}
          <div className="lg-footer-links-col">
            <h4 className="lg-footer-col-title">Resources &amp; Legal</h4>
            <ul className="lg-footer-link-list">
              <li>
                <a
                  href="https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg-footer-link lg-highlight-link"
                  data-download-apk
                >
                  Download App (APK)
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="lg-footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="lg-footer-link">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/virustotal" className="lg-footer-link">
                  VirusTotal Security Scan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="lg-footer-bottom">
          <p className="lg-footer-copy">© 2026 Ryno Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
