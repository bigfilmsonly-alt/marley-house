import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;

// Design tokens
const bg = '#0c0a08';
const gold = '#d8b15a';
const goldDeep = '#a9812f';
const cream = '#F6F1E6';
const dim = '#bdae97';
const ember = '#e2622f';
const green = '#7ba36e';
const jaGold = '#F2C744';
const jaGreen = '#1E9B4E';

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background radial glow -->
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="${gold}" stop-opacity="0.08"/>
      <stop offset="60%" stop-color="${gold}" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0"/>
    </radialGradient>

    <!-- Subtle grain texture -->
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.03"/>
      </feComponentTransfer>
      <feBlend in="SourceGraphic" mode="overlay"/>
    </filter>
  </defs>

  <!-- Base background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${bg}"/>

  <!-- Radial glow -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- Subtle top-left ember glow -->
  <ellipse cx="200" cy="100" rx="300" ry="200" fill="${ember}" opacity="0.03"/>

  <!-- Rasta stripe at top -->
  <rect x="0" y="0" width="400" height="4" fill="${jaGreen}"/>
  <rect x="400" y="0" width="400" height="4" fill="${jaGold}"/>
  <rect x="800" y="0" width="400" height="4" fill="${ember}"/>

  <!-- Rasta stripe at bottom -->
  <rect x="0" y="626" width="400" height="4" fill="${jaGreen}"/>
  <rect x="400" y="626" width="400" height="4" fill="${jaGold}"/>
  <rect x="800" y="626" width="400" height="4" fill="${ember}"/>

  <!-- Thin gold rule lines -->
  <line x1="80" y1="190" x2="1120" y2="190" stroke="${gold}" stroke-opacity="0.12" stroke-width="1"/>
  <line x1="80" y1="480" x2="1120" y2="480" stroke="${gold}" stroke-opacity="0.12" stroke-width="1"/>

  <!-- "Welcome to" small caps -->
  <text x="600" y="245" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="14" letter-spacing="6" fill="${goldDeep}" font-weight="400">
    WELCOME TO
  </text>

  <!-- MARLEY HOUSE main title -->
  <text x="600" y="320" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="72" fill="${cream}" font-weight="300" letter-spacing="4">
    MARLEY HOUSE
  </text>

  <!-- Decorative dot -->
  <circle cx="600" cy="365" r="3" fill="${gold}" opacity="0.6"/>

  <!-- Tagline -->
  <text x="600" y="405" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="22" fill="${dim}" font-style="italic" font-weight="300">
    Coffee is the invitation. Belonging is the product.
  </text>

  <!-- Bottom descriptor -->
  <text x="600" y="540" text-anchor="middle"
        font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="12" letter-spacing="4" fill="${dim}" opacity="0.5" font-weight="300">
    COFFEE  ·  MUSIC  ·  STORY  ·  COMMUNITY
  </text>

  <!-- Corner accent marks -->
  <line x1="60" y1="40" x2="60" y2="70" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
  <line x1="60" y1="40" x2="90" y2="40" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>

  <line x1="1140" y1="40" x2="1140" y2="70" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
  <line x1="1140" y1="40" x2="1110" y2="40" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>

  <line x1="60" y1="590" x2="60" y2="560" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
  <line x1="60" y1="590" x2="90" y2="590" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>

  <line x1="1140" y1="590" x2="1140" y2="560" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
  <line x1="1140" y1="590" x2="1110" y2="590" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
</svg>
`;

async function generate() {
  // Render the SVG background
  const background = sharp(Buffer.from(svg)).png();

  // Load and prepare the logo — invert it (black to white/cream) and resize
  const logoRaw = readFileSync(join(root, 'public', 'marley-logo.png'));
  const logo = await sharp(logoRaw)
    .negate({ alpha: false })  // invert black -> white
    .modulate({ brightness: 0.85 })  // slightly dim so it's cream-ish
    .resize(90, null, { fit: 'inside' })
    .png()
    .toBuffer();

  // Get logo dimensions after resize
  const logoMeta = await sharp(logo).metadata();
  const logoLeft = Math.round((WIDTH - (logoMeta.width || 90)) / 2);
  const logoTop = 95;

  // Composite logo onto background
  await background
    .composite([{
      input: logo,
      top: logoTop,
      left: logoLeft,
      blend: 'over',
    }])
    .toFile(join(root, 'public', 'og-image.png'));

  console.log('OG image generated: public/og-image.png (1200x630)');
}

generate().catch(console.error);
