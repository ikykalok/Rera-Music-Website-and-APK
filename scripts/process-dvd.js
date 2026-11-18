const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processAllDiscs() {
  const dvdDir = 'e:/tera music website/DVD';
  const outDir = path.resolve(__dirname, '../public/dvd');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(dvdDir);
  const nums = [];
  for (const f of files) {
    const m = f.match(/^(\d+)\.(jpg|jpeg|png|webp)$/i);
    if (m) nums.push({ num: parseInt(m[1], 10), file: f });
  }
  nums.sort((a, b) => a.num - b.num);

  const total = nums.length;
  const size = 1024;
  const outerR = size / 2; // 512
  const innerR = size * 0.12; // 122.88 (hubSize 0.24 * R)

  const maskSvg = Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffffff" fill-rule="evenodd" d="
        M ${outerR}, 0
        A ${outerR},${outerR} 0 1,0 ${outerR},${size}
        A ${outerR},${outerR} 0 1,0 ${outerR},0 Z
        M ${outerR}, ${outerR - innerR}
        A ${innerR},${innerR} 0 1,1 ${outerR},${outerR + innerR}
        A ${innerR},${innerR} 0 1,1 ${outerR},${outerR - innerR} Z
      " />
    </svg>
  `.trim());

  console.log(`Processing ${total} DVD disc textures with circular mask and transparent center hole...`);

  for (const item of nums) {
    const inputPath = path.join(dvdDir, item.file);
    const numStr = String(item.num).padStart(2, '0');
    const outputPath = path.join(outDir, `disc-${numStr}.png`);

    await sharp(inputPath)
      .resize(size, size, { fit: 'cover', position: 'center' })
      .ensureAlpha()
      .composite([{ input: maskSvg, blend: 'dest-in' }])
      .png({ compressionLevel: 8 })
      .toFile(outputPath);

    if (item.num % 10 === 0 || item.num === 1 || item.num === total) {
      console.log(`Processed ${item.num}/${total}: disc-${numStr}.png (from ${item.file})`);
    }
  }

  // Validate first and last discs
  for (const checkNum of [1, 53, 54, 55]) {
    const numStr = String(checkNum).padStart(2, '0');
    const sample = path.join(outDir, `disc-${numStr}.png`);
    if (fs.existsSync(sample)) {
      const { data } = await sharp(sample).raw().toBuffer({ resolveWithObject: true });
      const centerIdx = (Math.floor(size / 2) * size + Math.floor(size / 2)) * 4;
      const discIdx = (Math.floor(size / 4) * size + Math.floor(size / 2)) * 4;
      console.log(`Validation disc-${numStr}.png: CornerAlpha=${data[3]}, CenterHoleAlpha=${data[centerIdx + 3]}, DiscBandAlpha=${data[discIdx + 3]}`);
    }
  }

  console.log(`All ${total} DVD disc textures processed successfully!`);
}

processAllDiscs().catch(err => {
  console.error('Error processing discs:', err);
  process.exit(1);
});
