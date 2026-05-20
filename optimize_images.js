const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

console.log('=' * 60);
console.log('  ALEX THOMPSON - LOCK-RESISTANT IMAGE COMPRESSOR');
console.log('=' * 60);
console.log(`Scanning target directory: ${imagesDir}\n`);

if (!fs.existsSync(imagesDir)) {
  console.error(`[ERROR] Images directory does not exist: ${imagesDir}`);
  process.exit(1);
}

const files = fs.readdirSync(imagesDir);
let totalOriginalBytes = 0;
let totalOptimizedBytes = 0;
let optimizedCount = 0;

const imageExtensions = ['.jpg', '.jpeg', '.png'];

const tasks = files.map(file => {
  // Skip temp or optimized files from previous scripts
  if (file.startsWith('opt_')) {
    return Promise.resolve();
  }

  const ext = path.extname(file).toLowerCase();
  if (!imageExtensions.includes(ext)) {
    return Promise.resolve();
  }

  const filePath = path.join(imagesDir, file);
  const stats = fs.statSync(filePath);
  const originalSizeKB = (stats.size / 1024).toFixed(1);
  totalOriginalBytes += stats.size;

  // Ignore already optimized or small images (< 300 KB)
  if (stats.size < 300 * 1024) {
    totalOptimizedBytes += stats.size;
    console.log(`[PASS] ${file} is already lightweight (${originalSizeKB} KB). Skipping.`);
    return Promise.resolve();
  }

  console.log(`[OPTIMIZING] Processing raw image: ${file} (${originalSizeKB} KB)...`);
  optimizedCount++;

  const optFilePath = path.join(imagesDir, 'opt_' + file);
  let pipeline = sharp(filePath);

  // Resize keeping aspect ratio if larger than 1600px width
  pipeline = pipeline.resize({
    width: 1600,
    height: 1600,
    fit: 'inside',
    withoutEnlargement: true
  });

  // Apply compression based on format
  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, progressive: true });
  }

  return pipeline
    .toFile(optFilePath)
    .then(() => {
      const optStats = fs.statSync(optFilePath);
      const optSizeKB = (optStats.size / 1024).toFixed(1);
      totalOptimizedBytes += optStats.size;
      
      const percentReduced = ((1 - optStats.size / stats.size) * 100).toFixed(1);
      console.log(`[SUCCESS] Compressed ${file}: ${originalSizeKB} KB ➔ ${optSizeKB} KB (Reduced by ${percentReduced}%)`);
    })
    .catch(err => {
      console.error(`[ERROR] Failed to compress ${file}:`, err);
    });
});

Promise.all(tasks).then(() => {
  const origMB = (totalOriginalBytes / (1024 * 1024)).toFixed(2);
  const optMB = (totalOptimizedBytes / (1024 * 1024)).toFixed(2);
  const savingsPercent = ((1 - totalOptimizedBytes / totalOriginalBytes) * 100).toFixed(1);

  console.log('\n' + '=' * 60);
  console.log('  COMPRESSION TASK STEP 1 COMPLETE');
  console.log('=' * 60);
  console.log(`Total Files Checked:      ${files.length}`);
  console.log(`Total Files Compressed:   ${optimizedCount}`);
  console.log(`Total Original Weight:    ${origMB} MB`);
  console.log(`Total Optimized Weight:   ${optMB} MB`);
  console.log('=' * 60 + '\n');
});
