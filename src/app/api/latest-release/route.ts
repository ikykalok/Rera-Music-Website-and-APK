import { NextResponse } from "next/server";

export const revalidate = 300; // Cache on edge/server for 5 minutes

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Ryno-Music-Web/1.0",
    };

    // Use secret token if configured on server (increases rate limit to 5000/hr)
    const token = process.env.GH_RELEASE_TOKEN || process.env.GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const res = await fetch(
      "https://api.github.com/repos/ikykalok/Rera-Music-Website-and-APK/releases/latest",
      {
        headers,
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch latest release from GitHub",
          status: res.status,
          fallbackUrl:
            "https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest",
        },
        { status: res.status }
      );
    }

    const release = await res.json();

    // Verify it is not a draft or prerelease
    if (release.draft || release.prerelease) {
      return NextResponse.json(
        {
          error: "No stable release found",
          fallbackUrl:
            "https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest",
        },
        { status: 404 }
      );
    }

    // Locate the APK asset
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const apkAsset =
      assets.find((a: { name?: string }) =>
        a.name?.toLowerCase().endsWith(".apk")
      ) || assets[0];

    const downloadUrl =
      apkAsset?.browser_download_url ||
      release.html_url ||
      "https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest";

    return NextResponse.json({
      tag: release.tag_name,
      name: release.name,
      body: release.body,
      publishedAt: release.published_at,
      htmlUrl: release.html_url,
      apk: apkAsset
        ? {
            name: apkAsset.name,
            size: apkAsset.size,
            downloadCount: apkAsset.download_count,
            downloadUrl: apkAsset.browser_download_url,
          }
        : null,
      downloadUrl,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: message,
        fallbackUrl:
          "https://github.com/ikykalok/Rera-Music-Website-and-APK/releases/latest",
      },
      { status: 500 }
    );
  }
}
