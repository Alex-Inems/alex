import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = path.join('public', 'images');
const files = [
  'inkamoto.png',
  'inkamoto-tours.png',
  'yowaa.png',
  'inema.png',
  'aurum.png',
  'yanga.png',
  'blogme (2).png',
  'eventie (2).png',
  'n8n lead classifier.png',
  'linkedin post generator.png',
  'sturdee.png',
];

for (const file of files) {
  const fp = path.join(dir, file);
  if (!fs.existsSync(fp)) {
    console.log('skip', file);
    continue;
  }
  const before = fs.statSync(fp).size;
  const tmp = fp + '.tmp';
  const ext = path.extname(file).toLowerCase();
  let pipeline = sharp(fp).resize({ width: 1200, fit: 'inside', withoutEnlargement: true });
  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 78, compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, progressive: true });
  }
  await pipeline.toFile(tmp);
  fs.renameSync(tmp, fp);
  const after = fs.statSync(fp).size;
  console.log(`${file}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
}

const unused = path.join(dir, 'inkamoto-2.png');
if (fs.existsSync(unused)) {
  fs.unlinkSync(unused);
  console.log('deleted inkamoto-2.png');
}
