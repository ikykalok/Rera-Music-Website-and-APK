#!/usr/bin/env node

/**
 * ════════════════════════════════════════════════════════════════════════
 * Ryno Music — CLI Release Publishing Tool
 * ════════════════════════════════════════════════════════════════════════
 * Automatically packages, renames, creates GitHub tags & releases, and
 * uploads the official APK asset to GitHub Releases.
 *
 * Usage:
 *   node scripts/publish-release.js --apk "path/to/app-release.apk" --version "1.4.8"
 *
 * Options:
 *   --apk <path>        Path to the newly built .apk file (required)
 *   --version <ver>     Version number, e.g. 1.4.8 (required)
 *   --notes <notes>     Optional custom changelog notes
 *   --token <token>     Optional GitHub token (defaults to GH_RELEASE_TOKEN env var)
 *   --repo <owner/repo> Default: ikykalok/Rera-Music-Website-and-APK
 * ════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const REPO_DEFAULT = 'ikykalok/Rera-Music-Website-and-APK';

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    apk: null,
    version: null,
    notes: null,
    filename: null,
    token: process.env.GH_RELEASE_TOKEN || process.env.GITHUB_TOKEN || null,
    repo: REPO_DEFAULT,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--apk' && args[i + 1]) options.apk = args[++i];
    else if (arg === '--version' && args[i + 1]) options.version = args[++i];
    else if (arg === '--filename' && args[i + 1]) options.filename = args[++i];
    else if (arg === '--notes' && args[i + 1]) options.notes = args[++i];
    else if (arg === '--token' && args[i + 1]) options.token = args[++i];
    else if (arg === '--repo' && args[i + 1]) options.repo = args[++i];
  }

  return options;
}

function request(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : {};
          resolve({ status: res.statusCode, headers: res.headers, data: parsed });
        } catch (_) {
          resolve({ status: res.statusCode, headers: res.headers, data: body });
        }
      });
    });

    req.on('error', reject);
    if (postData) {
      if (Buffer.isBuffer(postData)) {
        req.write(postData);
      } else if (typeof postData === 'string') {
        req.write(postData);
      } else {
        req.write(JSON.stringify(postData));
      }
    }
    req.end();
  });
}

async function main() {
  const opts = parseArgs();

  console.log('───────────────────────────────────────────────────────');
  console.log('  Ryno Music — GitHub Release Automation Tool');
  console.log('───────────────────────────────────────────────────────');

  if (!opts.apk) {
    console.error('✖ Error: Missing required --apk parameter.');
    console.error('  Example: node scripts/publish-release.js --apk "app-release.apk" --version "1.4.8"');
    process.exit(1);
  }

  if (!opts.version) {
    console.error('✖ Error: Missing required --version parameter.');
    process.exit(1);
  }

  if (!opts.token) {
    console.error('✖ Error: No GitHub Token provided.');
    console.error('  Please set GH_RELEASE_TOKEN environment variable or pass --token <token>.');
    process.exit(1);
  }

  // 1. Verify APK file exists and size
  const apkPath = path.resolve(opts.apk);
  if (!fs.existsSync(apkPath)) {
    console.error(`✖ Error: APK file not found at: ${apkPath}`);
    process.exit(1);
  }

  const stat = fs.statSync(apkPath);
  if (stat.size < 1000000) {
    console.error(`✖ Error: APK file is too small (${stat.size} bytes). Valid APK must exceed 1MB.`);
    process.exit(1);
  }

  // Calculate SHA-256
  const apkBuffer = fs.readFileSync(apkPath);
  const sha256 = crypto.createHash('sha256').update(apkBuffer).digest('hex');
  const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);

  // 2. Strict naming specifications
  const cleanVersion = opts.version.replace(/^[vV]\.?/, '').trim();
  const tagName = `v.${cleanVersion}`;
  const releaseTitle = `Ryno Music v.${cleanVersion}`;
  const apkFilename = opts.filename || `Ryno Music v.${cleanVersion}.apk`;

  console.log(`• Target Repository:    ${opts.repo}`);
  console.log(`• Release Version:      ${cleanVersion}`);
  console.log(`• Git Tag:              ${tagName}`);
  console.log(`• Release Title:        ${releaseTitle}`);
  console.log(`• APK Asset Filename:   ${apkFilename}`);
  console.log(`• APK Size:             ${sizeMb} MB (${stat.size} bytes)`);
  console.log(`• SHA-256 Checksum:     ${sha256}`);
  console.log('───────────────────────────────────────────────────────');

  const headers = {
    'User-Agent': 'Ryno-Music-Release-Agent',
    Authorization: `token ${opts.token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  // 3. Compose release notes
  const changeNotes = opts.notes
    ? opts.notes
    : '- Performance improvements.\n- Bug fixes and stability enhancements.\n- Improvements to the overall listening experience.';

  const releaseBody = [
    '# Ryno Music — Your Music, Your Experience.',
    '',
    'Experience your music with Ryno Music, designed to make listening simple, smooth, and enjoyable.',
    '',
    '### What\'s New',
    changeNotes,
    '',
    '### Download',
    'Download the latest Ryno Music Android APK from this release.',
    '',
    `- **File:** \`${apkFilename}\``,
    `- **File Size:** ${sizeMb} MB`,
    `- **SHA-256:** \`${sha256}\``,
    '- **Compatibility:** Android 6.0+ (API 23+)',
  ].join('\n');

  // 4. Create or retrieve GitHub Release
  console.log(`→ Creating GitHub release ${tagName}...`);
  const createRes = await request(
    {
      hostname: 'api.github.com',
      path: `/repos/${opts.repo}/releases`,
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
    },
    {
      tag_name: tagName,
      name: releaseTitle,
      body: releaseBody,
      draft: false,
      prerelease: false,
    }
  );

  let releaseId;
  let uploadUrlTemplate;

  if (createRes.status === 201) {
    releaseId = createRes.data.id;
    uploadUrlTemplate = createRes.data.upload_url;
    console.log(`✔ Release created successfully! (ID: ${releaseId})`);
  } else if (createRes.status === 422) {
    // Release already exists, fetch existing
    console.log(`ℹ Release tag ${tagName} already exists. Fetching existing release...`);
    const getRes = await request({
      hostname: 'api.github.com',
      path: `/repos/${opts.repo}/releases/tags/${tagName}`,
      method: 'GET',
      headers,
    });

    if (getRes.status === 200) {
      releaseId = getRes.data.id;
      uploadUrlTemplate = getRes.data.upload_url;
      console.log(`✔ Found existing release (ID: ${releaseId})`);

      // Delete old asset if already present with same filename
      const existingAsset = getRes.data.assets?.find((a) => a.name === apkFilename);
      if (existingAsset) {
        console.log(`→ Deleting existing asset ${apkFilename} (ID: ${existingAsset.id})...`);
        await request({
          hostname: 'api.github.com',
          path: `/repos/${opts.repo}/releases/assets/${existingAsset.id}`,
          method: 'DELETE',
          headers,
        });
        console.log('✔ Old asset deleted.');
      }
    } else {
      console.error(`✖ Error fetching release: HTTP ${getRes.status}`, getRes.data);
      process.exit(1);
    }
  } else {
    console.error(`✖ Failed to create release: HTTP ${createRes.status}`, createRes.data);
    process.exit(1);
  }

  // 5. Upload APK Asset
  console.log(`→ Uploading ${apkFilename} to release assets...`);
  const uploadHost = 'uploads.github.com';
  const uploadPath = `/repos/${opts.repo}/releases/${releaseId}/assets?name=${encodeURIComponent(
    apkFilename
  )}`;

  const uploadRes = await request(
    {
      hostname: uploadHost,
      path: uploadPath,
      method: 'POST',
      headers: {
        'User-Agent': 'Ryno-Music-Release-Agent',
        Authorization: `token ${opts.token}`,
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Length': apkBuffer.length,
      },
    },
    apkBuffer
  );

  if (uploadRes.status === 201) {
    console.log('✔ Asset uploaded successfully!');
    console.log('───────────────────────────────────────────────────────');
    console.log('★ RELEASE PUBLISHED & VERIFIED:');
    console.log(`  • Tag:            ${tagName}`);
    console.log(`  • Title:          ${releaseTitle}`);
    console.log(`  • Asset:          ${uploadRes.data.name}`);
    console.log(`  • Download URL:   ${uploadRes.data.browser_download_url}`);
    console.log('───────────────────────────────────────────────────────');
    console.log('Website release updater will now automatically detect this APK!');
  } else {
    console.error(`✖ Asset upload failed: HTTP ${uploadRes.status}`, uploadRes.data);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('✖ Unexpected error:', err.message);
  process.exit(1);
});
