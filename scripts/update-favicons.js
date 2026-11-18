const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function updateFavicons() {
  const iconSrc = 'public/assets/app-icon.png';
  if (!fs.existsSync(iconSrc)) {
    throw new Error('app-icon.png not found');
  }

  // Generate 32x32 favicon png
  await sharp(iconSrc)
    .resize(32, 32)
    .png()
    .toFile('public/assets/favicon-32.png');
  console.log('Updated public/assets/favicon-32.png');

  // Generate 180x180 apple touch icon
  await sharp(iconSrc)
    .resize(180, 180)
    .png()
    .toFile('public/assets/favicon-180.png');
  console.log('Updated public/assets/favicon-180.png');

  // Generate public/images/favicon.png
  await sharp(iconSrc)
    .resize(32, 32)
    .png()
    .toFile('public/images/favicon.png');
  console.log('Updated public/images/favicon.png');

  // Generate public/sites/a24/images/favicon.png if directory exists
  if (fs.existsSync('public/sites/a24/images')) {
    await sharp(iconSrc)
      .resize(32, 32)
      .png()
      .toFile('public/sites/a24/images/favicon.png');
    console.log('Updated public/sites/a24/images/favicon.png');
  }

  // Also create public/favicon.ico (can be 32x32 png saved as favicon.ico or proper ico buffer)
  // Modern browsers accept PNG formatted favicon.ico or favicon.png
  await sharp(iconSrc)
    .resize(32, 32)
    .png()
    .toFile('public/favicon.ico');
  console.log('Updated public/favicon.ico');

  // Also create src/app/icon.png (Next.js App Router convention)
  await sharp(iconSrc)
    .resize(32, 32)
    .png()
    .toFile('src/app/icon.png');
  console.log('Updated src/app/icon.png');

  // Also create src/app/apple-icon.png
  await sharp(iconSrc)
    .resize(180, 180)
    .png()
    .toFile('src/app/apple-icon.png');
  console.log('Updated src/app/apple-icon.png');

  console.log('All favicons updated to official Tera Music red disc app icon!');
}

updateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
