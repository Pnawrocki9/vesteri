// One-off asset step: turns the licensed relief JPGs (rendered on plain white)
// into WebP with a real alpha channel, so the map sits on the panel instead of
// showing a lighter rectangle behind it.
//
// Every pixel is split back into "colour over white": alpha is the smallest
// opacity that can produce it, so the soft drop shadow stays a translucent
// shadow. Land is then made fully opaque, which is still an exact split over
// white, so the colours of the render do not change.
//
//   node scripts/cutout-reliefs.mjs
//
// The source JPGs were removed once converted; restore them from git history
// (public/img/*-relief-*.jpg before this script was added) to re-run it.
import sharp from 'sharp';

const FILES = [
  'cyprus-relief-1200',
  'cyprus-relief-thumb',
  'thailand-relief-900',
  'thailand-relief-thumb',
];

// Below SHADOW_FADE the faint outer shadow is eased out quadratically, so it
// melts into the panel instead of stopping at a visible edge where the render
// clips to pure white. From LAND_LO to LAND_HI the alpha ramps up to fully
// opaque land.
const SHADOW_FADE = 0.12;
const LAND_LO = 0.14;
const LAND_HI = 0.34;

const smoothstep = (lo, hi, x) => {
  const t = Math.min(1, Math.max(0, (x - lo) / (hi - lo)));
  return t * t * (3 - 2 * t);
};

for (const name of FILES) {
  const src = `public/img/${name}.jpg`;
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4);

  for (let p = 0, q = 0; p < data.length; p += 3, q += 4) {
    const r = data[p];
    const g = data[p + 1];
    const b = data[p + 2];
    const a = (255 - Math.min(r, g, b)) / 255;
    if (a === 0) {
      out.fill(0, q, q + 4);
      continue;
    }
    // Colour from the exact split; only the faint shadow's opacity is eased.
    const alpha = Math.max(a, smoothstep(LAND_LO, LAND_HI, a));
    const lift = 255 * (1 - alpha);
    out[q] = Math.round((r - lift) / alpha);
    out[q + 1] = Math.round((g - lift) / alpha);
    out[q + 2] = Math.round((b - lift) / alpha);
    const shown = a < SHADOW_FADE ? (a * a) / SHADOW_FADE : alpha;
    out[q + 3] = Math.round(shown * 255);
  }

  const dest = `public/img/${name}.webp`;
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(dest);
  console.log(`${src} -> ${dest}`);
}
