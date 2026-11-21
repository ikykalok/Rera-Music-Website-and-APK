import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VirusTotal Security Scan — Ryno Music",
  description:
    "Security scan verification and cryptographic hash analysis for the official Ryno Music Android APK.",
};

const APK_INFO = {
  fileName: "Ryno-Music.apk",
  version: "1.0.0 Release",
  fileSize: "143.7 MB (150,707,816 bytes)",
  sha256: "4a0ef468c8953d72fe78bd7fae13e65593d92f2fdab7e4bb3879422706c8e93e",
  targetOs: "Android 6.0 and above (API 23+)",
  architecture: "Universal (arm64-v8a, armeabi-v7a, x86_64)",
  scanStatus: "Verified Clean • 0 Detections",
  virusTotalUrl:
    "https://www.virustotal.com/gui/file/4a0ef468c8953d72fe78bd7fae13e65593d92f2fdab7e4bb3879422706c8e93e",
};

export default function VirusTotalPage() {
  return (
    <div className="lg-page-wrapper">
      {/* Background Pastel Atmosphere */}
      <div className="lg-page-bg-blobs" aria-hidden="true">
        <div className="lg-blob lg-blob-1" />
        <div className="lg-blob lg-blob-2" />
        <div className="lg-blob lg-blob-3" />
      </div>

      <div className="lg-page-container">
        {/* Header Hero */}
        <section className="lg-features-hero-card">
          <div className="lg-hero-badges-row">
            <span className="lg-pill-badge">
              <span className="lg-pill-dot" />
              INDEPENDENT SECURITY AUDIT
            </span>
            <span className="lg-location-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              0 / 70+ Detections
            </span>
          </div>

          <h1 className="lg-page-headline">
            VirusTotal
            <br />
            <span>Security Verification</span>
          </h1>

          <p className="lg-page-subhead">
            Transparency, privacy, and user safety are non-negotiable. Inspect the verified cryptographic SHA-256 hash and multi-engine security audit for the official release package.
          </p>
        </section>

        {/* Security Summary Glass Card */}
        <section className="lg-content-card">
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: "rgba(220, 252, 231, 0.9)",
                border: "1px solid rgba(134, 239, 172, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#16a34a",
                boxShadow: "0 8px 20px rgba(22, 163, 74, 0.15)",
                flexShrink: 0,
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 6px 0", color: "var(--lg-text-main)" }}>
                {APK_INFO.scanStatus}
              </h2>
              <p style={{ margin: 0, color: "var(--lg-text-muted)", fontSize: "0.96rem", lineHeight: 1.5 }}>
                Audited across 70+ leading antivirus engines and security databases with zero malware, spyware, trojans, or adware findings.
              </p>
            </div>
            <a
              href={APK_INFO.virusTotalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lg-action-btn lg-btn-glass"
              style={{ flexShrink: 0 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>View Live VirusTotal Report</span>
            </a>
          </div>

          {/* Specifications Grid */}
          <div className="lg-skills-grid" style={{ marginTop: 30 }}>
            <div className="lg-skill-glass-card">
              <span className="lg-skill-badge">File Name</span>
              <p style={{ marginTop: 12, fontWeight: 700, fontFamily: "monospace", fontSize: "1rem" }}>
                {APK_INFO.fileName}
              </p>
            </div>

            <div className="lg-skill-glass-card">
              <span className="lg-skill-badge">Version</span>
              <p style={{ marginTop: 12, fontWeight: 700, fontSize: "1.05rem" }}>
                {APK_INFO.version}
              </p>
            </div>

            <div className="lg-skill-glass-card">
              <span className="lg-skill-badge">File Size</span>
              <p style={{ marginTop: 12, fontWeight: 700, fontSize: "1.05rem" }}>
                {APK_INFO.fileSize}
              </p>
            </div>

            <div className="lg-skill-glass-card">
              <span className="lg-skill-badge">Target Platform</span>
              <p style={{ marginTop: 12, fontWeight: 700, fontSize: "1.05rem" }}>
                {APK_INFO.targetOs}
              </p>
            </div>
          </div>

          {/* SHA-256 Box */}
          <div style={{ marginTop: 30, padding: 24, borderRadius: 20, background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(199, 210, 254, 0.8)" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--lg-accent-indigo)", display: "block", marginBottom: 8 }}>
              Cryptographic SHA-256 Hash
            </span>
            <code style={{ display: "block", wordBreak: "break-all", background: "rgba(15, 23, 42, 0.05)", padding: "12px 16px", borderRadius: 12, fontSize: "0.88rem", color: "#1e293b", border: "1px solid rgba(226, 232, 240, 0.9)" }}>
              {APK_INFO.sha256}
            </code>
            <p style={{ fontSize: "0.85rem", color: "var(--lg-text-dim)", marginTop: 12, marginBottom: 0 }}>
              Verify this checksum on Windows via <code>Get-FileHash Ryno-Music.apk</code> or on macOS/Linux via <code>sha256sum Ryno-Music.apk</code>.
            </p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
            <a
              href="https://github.com/ikykalok/Tera-Music-apk/releases/download/tera-music/Tero-Music.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="lg-action-btn lg-btn-primary"
              data-download-apk
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Verified APK</span>
            </a>
            <Link href="/" className="lg-action-btn lg-btn-glass">
              Back to Music Player
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
