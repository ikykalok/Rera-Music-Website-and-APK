# Ryno Music — GitHub Release Automation & APK Management Guide

This document explains the release architecture, automated APK publishing pipeline, and client-side dynamic release detection system for **Ryno Music**.

---

## 1. Repository Information

| Property | Value |
| :--- | :--- |
| **App Name** | Ryno Music |
| **GitHub Repository** | [`ikykalok/Rera-Music-Website-and-APK`](https://github.com/ikykalok/Rera-Music-Website-and-APK) |
| **Repository Owner** | `ikykalok` |
| **Release Platform** | GitHub Releases |
| **Public API Endpoint** | `https://api.github.com/repos/ikykalok/Rera-Music-Website-and-APK/releases/latest` |
| **Internal Server Endpoint** | `/api/latest-release` |

---

## 2. Strict Naming Conventions

Always adhere strictly to these formats for all future releases:

| Asset Type | Format | Example | Notes |
| :--- | :--- | :--- | :--- |
| **Git Tag** | `v.<version>` | `v.1.4.8` | **Must include the dot** immediately after `v` |
| **Release Title** | `Ryno Music v.<version>` | `Ryno Music v.1.4.8` | Includes app name and version with dot |
| **APK Asset Filename** | `Ryno Music v<version>.apk` | `Ryno Music v1.4.8.apk` | **No dot** after `v` in the filename |

---

## 3. How Automatic Website Updates Work

The Ryno Music website automatically detects the latest published stable release and updates all "Download App" buttons dynamically without requiring manual code changes or site redeployments:

1. **Client Page Load**:
   - `public/js/site.js` runs on every page visit.
   - Checks `localStorage` for cached release data (10-minute TTL). If valid, immediately assigns the latest APK download URL to all download buttons.
2. **Background Release Fetch**:
   - The browser queries `/api/latest-release` (a serverless endpoint on Vercel with 5-minute edge revalidation cache to prevent GitHub rate-limiting).
   - If offline or on static preview, it falls back directly to `https://api.github.com/repos/ikykalok/Rera-Music-Website-and-APK/releases/latest`.
3. **Asset Identification**:
   - Locates the official release asset ending with `.apk` (matching `Ryno Music v*.apk`).
   - Retrieves its official `browser_download_url`.
4. **Targeted Button Update**:
   - Automatically updates `href` attributes for:
     - Header primary button: `.nav-cta`
     - Mobile menu link: `.menu-link[data-download-apk]`
     - Footer APK link: `a[data-download-apk]`
     - VirusTotal download button: `a[data-download-apk]`
5. **Graceful Fallback**:
   - If GitHub is temporarily unreachable or rate-limited, all buttons retain the verified fallback URL:
     `https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest`
   - Users are never presented with a broken or empty link.

---

## 4. How to Configure GitHub Repository Secrets

To enable GitHub Actions to publish releases and upload APK assets:

1. Open your repository on GitHub:
   `https://github.com/ikykalok/Rera-Music-Website-and-APK`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**.
3. Click **New repository secret**.
4. Set the **Name** to:
   ```
   GH_RELEASE_TOKEN
   ```
5. Paste your GitHub Fine-Grained Personal Access Token (or classic PAT with `repo` scope).
6. Click **Add secret**.

*(Note: The workflow also falls back to `GITHUB_TOKEN` with `contents: write` permissions, but configuring `GH_RELEASE_TOKEN` ensures cross-repository access if needed.)*

---

## 5. Publishing a New Release

You can publish a new release using either **GitHub Actions** (cloud) or the **CLI Publishing Script** (local).

### Method A: Via GitHub Actions Workflow (Recommended)

1. Open the repository on GitHub and click the **Actions** tab.
2. Select **Publish Ryno Music APK Release** from the left sidebar.
3. Click **Run workflow**.
4. Provide the inputs:
   - **Release Version**: e.g., `1.4.9`
   - **Path to newly built APK**: e.g., `app-release.apk`
   - **Optional custom changelog**: bullet points of new features or fixes
5. Click **Run workflow**.
6. The workflow will:
   - Verify the APK exists and exceeds 1 MB.
   - Rename the APK to `Ryno Music v1.4.9.apk`.
   - Calculate SHA-256 hash.
   - Create tag `v.1.4.9` and release `Ryno Music v.1.4.9`.
   - Upload the APK asset.
   - Verify publication on GitHub.

### Method B: Via Local CLI Tool

When building in Android Studio on your local machine, publish in one command:

```powershell
# Set your token in the current terminal session
$env:GH_RELEASE_TOKEN = "your_personal_access_token"

# Run the release script
node scripts/publish-release.js --apk "C:\path\to\app-release.apk" --version "1.4.9"
```

Optional arguments:
- `--notes "Custom changelog line 1\nCustom changelog line 2"`
- `--repo "ikykalok/Rera-Music-Website-and-APK"`

---

## 6. Standard Release Description Template

Every release published through the pipeline generates formatted release notes:

```markdown
# Ryno Music — Your Music, Your Experience.

Experience your music with Ryno Music, designed to make listening simple, smooth, and enjoyable.

### What's New
- Performance improvements.
- Bug fixes and stability enhancements.
- Improvements to the overall listening experience.

### Download
Download the latest Ryno Music Android APK from this release.

- **File:** `Ryno Music v1.4.8.apk`
- **File Size:** 147.93 MB
- **SHA-256:** `[Calculated SHA-256 Checksum]`
- **Compatibility:** Android 6.0+ (API 23+)
```

---

## 7. Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Download button points to GitHub release page instead of direct APK** | No `.apk` asset found in the latest release | Ensure the published release has an asset ending in `.apk`. |
| **GitHub API Rate Limit Exceeded (403)** | Unauthenticated requests from same client IP exceeded 60/hr | The website automatically caches responses for 10 minutes in `localStorage`. Configure `GH_RELEASE_TOKEN` in Vercel environment variables to raise server rate limits to 5,000/hr. |
| **GitHub Actions fails on asset upload** | Token lacks write permissions | Ensure your Personal Access Token has **Contents: Read and write** permissions on `ikykalok/Rera-Music-Website-and-APK`. |
| **Website shows old version after publishing** | Client browser cached release info | The cache auto-expires after 10 minutes. Hard refresh (`Ctrl + F5`) or clear `localStorage.removeItem('ryno_latest_release_info')` to see the new release immediately. |
