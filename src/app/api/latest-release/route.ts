import { NextResponse } from "next/server";

export const revalidate = 60; // Edge / ISR cache for 60 seconds

const REPO_OWNER = "ikykalok";
const REPO_NAME = "Rera-Music-Website-and-APK";
const GITHUB_RELEASES_API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=10`;
const DEFAULT_FALLBACK_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest`;

export interface ReleaseAsset {
  id?: number;
  name?: string;
  size?: number;
  download_count?: number;
  browser_download_url?: string;
  content_type?: string;
}

export interface GithubReleaseItem {
  id?: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  draft: boolean;
  prerelease: boolean;
  published_at: string;
  html_url: string;
  assets?: ReleaseAsset[];
}

interface CachedPayload {
  tag: string;
  name: string;
  body: string | null;
  publishedAt: string;
  htmlUrl: string;
  apk: {
    name: string;
    size: number;
    downloadCount: number;
    downloadUrl: string;
  } | null;
  downloadUrl: string;
  cached?: boolean;
  timestamp?: number;
}

// In-memory fallback cache to ensure 100% uptime even if GitHub API is down or rate-limited
let lastSuccessfulRelease: CachedPayload | null = null;

/**
 * Finds the most relevant APK asset for a release using tiered priority matching.
 * Handles exact user convention ("Ryno Music v.1.1.1.apk"), variations ("Ryno.Music.v1.4.9.apk"),
 * and generic APK naming formats.
 */
function findBestApkAsset(assets: ReleaseAsset[], tagName: string): ReleaseAsset | null {
  if (!Array.isArray(assets) || assets.length === 0) return null;

  const cleanVersion = tagName.replace(/^[vV]\.?/, "").trim();

  // Filter all assets that have an .apk extension and a valid browser_download_url
  const apkAssets = assets.filter(
    (a) =>
      typeof a.name === "string" &&
      a.name.toLowerCase().endsWith(".apk") &&
      typeof a.browser_download_url === "string" &&
      a.browser_download_url.length > 0
  );

  if (apkAssets.length === 0) return null;

  // Priority 1: Exact user specification: "Ryno Music v.X.Y.Z.apk" or "Ryno Music vX.Y.Z.apk"
  const exactPatterns = [
    new RegExp(`^ryno\\s*music\\s*v\\.?${cleanVersion.replace(/\./g, "\\.")}\\.apk$`, "i"),
    new RegExp(`^ryno[._]music[._]v\\.?${cleanVersion.replace(/\./g, "\\.")}\\.apk$`, "i"),
  ];

  for (const pattern of exactPatterns) {
    const matched = apkAssets.find((a) => a.name && pattern.test(a.name));
    if (matched) return matched;
  }

  // Priority 2: Contains clean version number and word "ryno"
  const brandedVersionMatch = apkAssets.find(
    (a) =>
      a.name &&
      a.name.toLowerCase().includes("ryno") &&
      a.name.includes(cleanVersion)
  );
  if (brandedVersionMatch) return brandedVersionMatch;

  // Priority 3: Contains clean version number
  const versionMatch = apkAssets.find((a) => a.name && a.name.includes(cleanVersion));
  if (versionMatch) return versionMatch;

  // Priority 4: Contains "ryno" and ends with .apk
  const rynoApk = apkAssets.find((a) => a.name && a.name.toLowerCase().includes("ryno"));
  if (rynoApk) return rynoApk;

  // Priority 5: First available APK
  return apkAssets[0];
}

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Ryno-Music-Web/1.0",
    };

    const token = process.env.GH_RELEASE_TOKEN || process.env.GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const res = await fetch(GITHUB_RELEASES_API, {
      headers,
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      // If GitHub is rate-limited or fails, return last successful release if available
      if (lastSuccessfulRelease) {
        return NextResponse.json({
          ...lastSuccessfulRelease,
          cached: true,
          rateLimited: res.status === 403,
        });
      }

      return NextResponse.json(
        {
          error: "Failed to fetch releases from GitHub",
          status: res.status,
          downloadUrl: DEFAULT_FALLBACK_URL,
          fallbackUrl: DEFAULT_FALLBACK_URL,
        },
        { status: res.status }
      );
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      if (lastSuccessfulRelease) {
        return NextResponse.json({ ...lastSuccessfulRelease, cached: true });
      }
      return NextResponse.json(
        {
          error: "No releases found in repository",
          downloadUrl: DEFAULT_FALLBACK_URL,
          fallbackUrl: DEFAULT_FALLBACK_URL,
        },
        { status: 404 }
      );
    }

    // 1. Filter out draft and prerelease releases (only published stable releases)
    const stableReleases = (data as GithubReleaseItem[]).filter(
      (r) => !r.draft && !r.prerelease
    );

    if (stableReleases.length === 0) {
      if (lastSuccessfulRelease) {
        return NextResponse.json({ ...lastSuccessfulRelease, cached: true });
      }
      return NextResponse.json(
        {
          error: "No stable published releases found",
          downloadUrl: DEFAULT_FALLBACK_URL,
          fallbackUrl: DEFAULT_FALLBACK_URL,
        },
        { status: 404 }
      );
    }

    // 2. Sort releases chronologically by published date descending (latest first)
    stableReleases.sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    // 3. Find the most recently published release that has a valid APK asset
    let targetRelease = stableReleases[0];
    let chosenApkAsset = findBestApkAsset(targetRelease.assets || [], targetRelease.tag_name);

    if (!chosenApkAsset) {
      // If the latest release doesn't have an APK yet (e.g. still uploading),
      // look for the newest release that does have one
      for (let i = 1; i < stableReleases.length; i++) {
        const candidateAsset = findBestApkAsset(
          stableReleases[i].assets || [],
          stableReleases[i].tag_name
        );
        if (candidateAsset) {
          targetRelease = stableReleases[i];
          chosenApkAsset = candidateAsset;
          break;
        }
      }
    }

    // Official browser_download_url from GitHub
    const downloadUrl =
      chosenApkAsset?.browser_download_url ||
      targetRelease.html_url ||
      DEFAULT_FALLBACK_URL;

    const payload: CachedPayload = {
      tag: targetRelease.tag_name,
      name: targetRelease.name || `Ryno Music ${targetRelease.tag_name}`,
      body: targetRelease.body,
      publishedAt: targetRelease.published_at,
      htmlUrl: targetRelease.html_url,
      apk: chosenApkAsset
        ? {
            name: chosenApkAsset.name || `Ryno Music ${targetRelease.tag_name}.apk`,
            size: chosenApkAsset.size || 0,
            downloadCount: chosenApkAsset.download_count || 0,
            downloadUrl: chosenApkAsset.browser_download_url || downloadUrl,
          }
        : null,
      downloadUrl,
      cached: false,
      timestamp: Date.now(),
    };

    // Update in-memory fallback
    lastSuccessfulRelease = payload;

    return NextResponse.json(payload);
  } catch (err: unknown) {
    if (lastSuccessfulRelease) {
      return NextResponse.json({
        ...lastSuccessfulRelease,
        cached: true,
        errorRecovery: true,
      });
    }

    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: message,
        downloadUrl: DEFAULT_FALLBACK_URL,
        fallbackUrl: DEFAULT_FALLBACK_URL,
      },
      { status: 500 }
    );
  }
}
