const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'images', 'alex.jpeg');
const destPublicPath = path.join(__dirname, 'public', 'icon.png');
const destAppPath = path.join(__dirname, 'app', 'icon.png');

const width = 256;
const r = width / 2;

// Create circular transparent SVG mask
const circleMask = Buffer.from(
  `<svg width="${width}" height="${width}">
     <circle cx="${r}" cy="${r}" r="${r}" fill="black" />
   </svg>`
);

console.log('Starting image rounding process using sharp...');

sharp(srcPath)
  .resize(width, width, { fit: 'cover' })
  .composite([{
    input: circleMask,
    blend: 'dest-in'
  }])
  .png()
  .toFile(destPublicPath)
  .then(() => {
    console.log(`[SUCCESS] Rounded PNG favicon written to: ${destPublicPath}`);
    
    // Copy the rounded file to app/icon.png
    fs.copyFileSync(destPublicPath, destAppPath);
    console.log(`[SUCCESS] Copied rounded PNG favicon to: ${destAppPath}`);
  })
  .catch(err => {
    console.error('[ERROR] Failed to round the image using sharp:', err);
    process.exit(1);
  });
