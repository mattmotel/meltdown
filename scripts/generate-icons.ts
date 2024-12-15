import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function generateIcons() {
  const sizes = {
    favicon: 32,
    apple: 180,
    icon192: 192,
    icon512: 512
  };

  // Create canvas for emoji rendering
  for (const [name, size] of Object.entries(sizes)) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Draw emoji
    ctx.font = `${size}px "Segoe UI Emoji"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🚨', size/2, size/2);

    // Save file
    const buffer = canvas.toBuffer('image/png');
    const ext = name === 'favicon' ? 'ico' : 'png';
    writeFileSync(join(__dirname, '..', 'public', `${name}.${ext}`), buffer);
  }
}

generateIcons().catch(console.error); 