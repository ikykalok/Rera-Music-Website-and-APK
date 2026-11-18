import Link from "next/link";
import type { Metadata } from "next";
import { LegalThemeWrapper } from "@/components/LegalThemeWrapper";

export const metadata: Metadata = {
  title: "Terms & Conditions — Tera Music",
  description:
    "Terms and Conditions governing the use of the Tera Music application and website.",
};

export default function TermsPage() {
  return (
    <LegalThemeWrapper>
      <div className="legal-container">
        <header className="legal-header">
          <h1 className="legal-title">Terms &amp; Conditions</h1>
          <p className="legal-meta">Last updated: November 2026</p>
        </header>

        <div className="legal-body">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing, installing, downloading, or using Tera Music (including the website, application, and Android APK),
              you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, do not install or use the software.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. About the Application</h2>
            <p>
              Tera Music is a free and open-source third-party client designed for YouTube Music and streaming services.
              Tera Music does not host, upload, or own any audio or video content. All streams and metadata are provided directly by external public APIs.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Eligibility</h2>
            <p>
              You must be at least 13 years of age, or the legal age of majority in your jurisdiction, to use Tera Music.
              By using Tera Music, you represent and warrant that you meet this requirement.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Permitted Use</h2>
            <p>
              Tera Music is provided solely for personal, non-commercial entertainment and listening purposes.
              You agree not to modify, reverse-engineer, exploit for commercial gain, or redistribute audio streams without authorization from the respective rights holders.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. User Responsibilities</h2>
            <p>
              You are responsible for your use of the application and for complying with all applicable copyright laws,
              intellectual property regulations, and the terms of service of third-party platforms accessed through the client.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Content</h2>
            <p>
              All audio tracks, song titles, artist names, album artwork, and lyrics accessed via Tera Music belong to their respective copyright owners, record labels, and publishers.
              Tera Music claims no ownership, affiliation, or endorsement regarding any third-party intellectual property.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. YouTube Music and External Services</h2>
            <p>
              Tera Music connects to publicly accessible endpoints of YouTube Music and Spotify. Your use of features reliant on external providers is subject to
              their respective terms of service (including YouTube&rsquo;s Terms of Service and Spotify&rsquo;s User Agreement).
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Open-Source Licensing</h2>
            <p>
              The Tera Music source code is released under standard open-source licenses as set forth in the project repository.
              You may audit, fork, and contribute to the code in accordance with the repository&rsquo;s licensing terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Disclaimer of Warranties</h2>
            <p>
              Tera Music is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, either express or implied,
              including but not limited to warranties of merchantability, fitness for a particular purpose, or uninterrupted service.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the creators, contributors, and maintainers of Tera Music shall not be liable for any direct, indirect,
              incidental, consequential, or special damages arising out of your use or inability to use the application.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Modifications to Terms</h2>
            <p>
              We reserve the right to revise these Terms &amp; Conditions at any time. Any changes will be posted here with an updated revision date.
              Continued use of Tera Music after revisions constitutes acceptance of the modified terms.
            </p>
          </section>
        </div>

        <nav className="legal-footer-nav" aria-label="Legal navigation">
          <Link href="/privacy-policy" className="legal-nav-link">
            ← Privacy Policy
          </Link>
          <Link href="/" className="legal-nav-link">
            Back to Home →
          </Link>
        </nav>
      </div>
    </LegalThemeWrapper>
  );
}
