import Link from "next/link";
import type { Metadata } from "next";
import { LegalThemeWrapper } from "@/components/LegalThemeWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — Tera Music",
  description:
    "Privacy Policy for Tera Music App. Explaining how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalThemeWrapper>
      <div className="legal-container">
        <header className="legal-header">
          <h1 className="legal-title">Privacy Policy for Tera Music App</h1>
          <p className="legal-meta">Last updated: November 2026</p>
        </header>

        <div className="legal-body">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Tera Music (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the &ldquo;App&rdquo;).
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <ul>
              <li><strong>Account Information:</strong> When you log in to Spotify or YouTube, we may collect your username and basic profile information.</li>
              <li><strong>Usage Data:</strong> We collect information about how you use the App, including:
                <ul>
                  <li>Songs played, paused, and skipped</li>
                  <li>Playlists created and modified</li>
                  <li>Search queries</li>
                  <li>App settings and preferences</li>
                  <li>Screen views and user interactions</li>
                </ul>
              </li>
            </ul>

            <h3>2.2 Device Information</h3>
            <ul>
              <li><strong>Device Details:</strong> Device model, operating system version, and unique device identifiers.</li>
              <li><strong>App Performance:</strong> Crash reports and performance metrics to improve app stability.</li>
              <li><strong>Network Information:</strong> IP address and network type for analytics purposes.</li>
            </ul>

            <h3>2.3 Music Data</h3>
            <ul>
              <li><strong>Local Music Library:</strong> Access to your device&rsquo;s music files for playback.</li>
              <li><strong>Streaming Data:</strong> Information about songs streamed from YouTube Music and Spotify.</li>
              <li><strong>Playlist Data:</strong> Your created playlists and song collections.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <h3>3.1 App Functionality</h3>
            <ul>
              <li>Provide music streaming and playback services.</li>
              <li>Manage your playlists and music library.</li>
              <li>Sync your preferences across devices.</li>
              <li>Enable search and discovery features.</li>
            </ul>

            <h3>3.2 Analytics and Improvement</h3>
            <ul>
              <li><strong>Google Analytics Firebase:</strong> We use Firebase Analytics to understand app usage patterns and improve user experience.</li>
              <li><strong>Crash Reporting:</strong> We collect crash reports to identify and fix bugs.</li>
              <li><strong>Performance Monitoring:</strong> We monitor app performance to ensure smooth operation.</li>
            </ul>

            <h3>3.3 Personalization</h3>
            <ul>
              <li>Recommend music based on your listening habits.</li>
              <li>Customize the app interface according to your preferences.</li>
              <li>Remember your settings and preferences.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Sharing and Disclosure</h2>
            <h3>4.1 Third-Party Services</h3>
            <ul>
              <li><strong>YouTube Music:</strong> We integrate with YouTube Music for streaming content.</li>
              <li><strong>Spotify:</strong> We integrate with Spotify for music streaming and lyrics.</li>
              <li><strong>Google Analytics:</strong> We share anonymized usage data with Google Analytics Firebase.</li>
            </ul>

            <h3>4.2 No Sale of Personal Data</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties for marketing purposes.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law or to protect our rights and safety.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Storage and Security</h2>
            <h3>5.1 Local Storage</h3>
            <p>
              Your music playlists and preferences are stored locally on your device. We use secure local storage to protect your data.
            </p>

            <h3>5.2 Cloud Storage</h3>
            <p>
              Some data may be synced to cloud services (Spotify, YouTube) as per their privacy policies. We use industry-standard security measures to protect your data.
            </p>

            <h3>5.3 Data Retention</h3>
            <ul>
              <li>We retain analytics data for up to 2 years.</li>
              <li>Local app data is retained until you uninstall the app or clear app data.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights and Choices</h2>
            <h3>6.1 Data Access</h3>
            <p>
              You can view your data through the app settings and export your playlists and preferences.
            </p>

            <h3>6.2 Data Deletion</h3>
            <p>
              Uninstalling the app will remove all local data. You can clear app data through device settings or contact us to request deletion of any stored data.
            </p>

            <h3>6.3 Privacy Controls</h3>
            <p>
              You can disable analytics in app settings, control which services you connect to, and manage permissions through your device settings.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Third-Party Services</h2>
            <ul>
              <li><strong>YouTube Music:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="legal-link">YouTube Privacy Policy</a>. YouTube may collect data about your music preferences and usage.</li>
              <li><strong>Spotify:</strong> <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="legal-link">Spotify Privacy Policy</a>. Spotify may collect data about your listening habits.</li>
              <li><strong>Google Analytics Firebase:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="legal-link">Google Privacy Policy</a>. Google collects anonymized usage analytics.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Children&rsquo;s Privacy</h2>
            <p>
              Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. International Users</h2>
            <p>
              If you are using our App from outside the United States, please note that your information may be transferred to, stored, and processed in the United States where our servers are located.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App, updating the &ldquo;Last Updated&rdquo; date, or sending you a notification if significant changes are made.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Data Protection Compliance</h2>
            <p>This Privacy Policy complies with:</p>
            <ul>
              <li><strong>GDPR</strong> (General Data Protection Regulation) for EU users</li>
              <li><strong>CCPA</strong> (California Consumer Privacy Act) for California users</li>
              <li><strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act) for Canadian users</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Summary</h2>
            <ul>
              <li>We collect minimal personal information necessary for app functionality.</li>
              <li>We use Google Analytics Firebase for app improvement.</li>
              <li>We integrate with YouTube Music and Spotify for music streaming.</li>
              <li>We do not sell your personal data.</li>
              <li>You have control over your data and privacy settings.</li>
              <li>We are committed to protecting your privacy and being transparent about our practices.</li>
            </ul>
            <p className="legal-closing">
              <strong>By using Tera Music, you agree to the collection and use of information in accordance with this Privacy Policy.</strong>
            </p>
          </section>
        </div>

        <nav className="legal-footer-nav" aria-label="Legal navigation">
          <Link href="/terms" className="legal-nav-link">
            Terms &amp; Conditions →
          </Link>
          <Link href="/" className="legal-nav-link">
            ← Back to Home
          </Link>
        </nav>
      </div>
    </LegalThemeWrapper>
  );
}
