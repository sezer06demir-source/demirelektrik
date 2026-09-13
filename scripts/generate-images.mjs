/**
 * Görsel üretim scripti (build öncesi çalışır: `npm run images`).
 *
 * Üretilenler:
 *  - public/og-image.png            → Open Graph / Twitter paylaşım görseli (1200x630)
 *  - public/icons/icon-192.png      → PWA / manifest ikonları
 *  - public/icons/icon-512.png
 *  - public/icons/icon-512-maskable.png
 *  - public/icons/apple-touch-icon.png (180x180)
 *  - public/favicon.ico (32x32, gerçek ICO kabı içinde PNG)
 *  - public/images/projects/placeholder-*.svg → galeri örnek görselleri
 *
 * Gerçek fotoğraflar / logo geldiğinde bu script yerine kendi dosyalarını koyabilirsin.
 * Script, mevcut dosyayı yalnızca kaynak SVG'den yeniden üretir; elle koyduğun PNG'leri
 * korumak için ilgili bloğu yorum satırı yap.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = resolve(root, 'public');

const YELLOW = '#FFC107';
const ORANGE = '#FF8A00';
const DARK = '#0B1220';
const DARK2 = '#172033';

const exists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

async function write(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, data);
  console.log('✓', path.replace(root, '').replace(/\\/g, '/'));
}

/* ---------------------------------------------------------------- ikon */
const iconSvg = (padding = 0) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${padding ? 0 : 14}" fill="${YELLOW}"/>
  <g transform="translate(${padding} ${padding}) scale(${(64 - padding * 2) / 64})">
    <path d="M36 8 17 36h13l-2.5 20L47 27H34z" fill="${DARK}"/>
  </g>
</svg>`;

/* ---------------------------------------------------------------- og image */
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${DARK2}"/><stop offset="1" stop-color="${DARK}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.3" r="0.6">
      <stop offset="0" stop-color="${YELLOW}" stop-opacity="0.35"/><stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0v48" fill="none" stroke="#ffffff" stroke-opacity="0.06"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(80 80)">
    <rect width="88" height="88" rx="20" fill="${YELLOW}"/>
    <path d="M49.5 11 23.4 49.5h17.9L37.9 77 64.6 37h-17.9z" fill="${DARK}"/>
  </g>
  <text x="192" y="118" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="40" font-weight="900" fill="#ffffff" letter-spacing="2">DEMİR ELEKTRİK</text>
  <text x="194" y="152" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="20" font-weight="600" fill="#ffffff" fill-opacity="0.65" letter-spacing="3">ANKARA ELEKTRİK SERVİSİ</text>
  <text x="80" y="300" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="64" font-weight="900" fill="#ffffff">Ankara Elektrikçi</text>
  <text x="80" y="372" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="${YELLOW}">Elektrik Arıza · Tesisat · Pano · Otomasyon · Aydınlatma</text>
  <text x="80" y="430" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="24" font-weight="500" fill="#ffffff" fill-opacity="0.8">15+ yıllık tecrübe · Sincan merkezli · Ankara'nın tüm ilçelerine hizmet</text>
  <rect x="80" y="490" width="420" height="72" rx="14" fill="${YELLOW}"/>
  <text x="290" y="538" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="34" font-weight="900" fill="${DARK}">0506 254 76 78</text>
  <text x="540" y="537" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="24" font-weight="600" fill="#ffffff" fill-opacity="0.8">Her gün 08:00 – 23:00</text>
</svg>`;

/* ---------------------------------------------------------------- galeri placeholder */
const placeholders = [
  { key: 'tesisat', label: 'Elektrik Tesisatı', icon: 'M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9M21 21v-2h-4M3 5h4V3M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3' },
  { key: 'pano', label: 'Elektrik Panoları', icon: 'M3 3h18v18H3zM11 9h4a2 2 0 0 0 2-2V3M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 21v-4a2 2 0 0 1 2-2h4M15 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4' },
  { key: 'fabrika', label: 'Fabrika Elektrik', icon: 'M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2ZM17 18h1M12 18h1M7 18h1' },
  { key: 'aydinlatma', label: 'Aydınlatma', icon: 'M12 2v5M6 7h12l4 9H2l4-9ZM9.17 16a3 3 0 1 0 5.66 0' },
  { key: 'led', label: 'LED Uygulamaları', icon: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4' },
  { key: 'is-makinesi', label: 'İş Makineleri', icon: 'm10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20M16 18h-5M18 5a1 1 0 0 0-1 1v5.573M3 4h8.129a1 1 0 0 1 .99.863L13 11.246M4 11V4M7 15h.01M8 10.1V4M20 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 15a5 5 0 1 1-10 0 5 5 0 0 1 10 0' },
  { key: 'villa', label: 'Villa Projeleri', icon: 'M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6' },
  { key: 'magaza', label: 'Mağaza Projeleri', icon: 'm2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4M2 7h20' },
];

const placeholderSvg = ({ label, icon }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${DARK2}"/><stop offset="1" stop-color="${DARK}"/></linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="${YELLOW}" stop-opacity="0.22"/><stop offset="1" stop-color="${YELLOW}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0v40" fill="none" stroke="#fff" stroke-opacity="0.06"/></pattern>
  </defs>
  <rect width="600" height="450" fill="url(#bg)"/>
  <rect width="600" height="450" fill="url(#grid)"/>
  <rect width="600" height="450" fill="url(#glow)"/>
  <g transform="translate(240 130) scale(5)" fill="none" stroke="${YELLOW}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="${icon}"/>
  </g>
  <text x="300" y="330" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" fill="#fff">${label}</text>
  <text x="300" y="366" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="15" font-weight="600" fill="#fff" fill-opacity="0.55" letter-spacing="2">DEMİR ELEKTRİK · ANKARA</text>
</svg>`;

/* ---------------------------------------------------------------- çalıştır */
async function main() {
  // OG image
  await write(resolve(pub, 'og-image.png'), await sharp(Buffer.from(ogSvg)).png({ quality: 90 }).toBuffer());

  // İkonlar
  const icon = Buffer.from(iconSvg());
  /** PNG'yi geçerli bir ICO dosyasına sarar: 6 bayt başlık + 16 bayt dizin girdisi + PNG verisi. */
  const icoFromPng = (pngBuf, size) => {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(1, 4);
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(pngBuf.length, 8);
    entry.writeUInt32LE(22, 12);
    return Buffer.concat([header, entry, pngBuf]);
  };
  await write(resolve(pub, 'icons/icon-192.png'), await sharp(icon).resize(192, 192).png().toBuffer());
  await write(resolve(pub, 'icons/icon-512.png'), await sharp(icon).resize(512, 512).png().toBuffer());
  await write(resolve(pub, 'icons/apple-touch-icon.png'), await sharp(icon).resize(180, 180).png().toBuffer());
  await write(resolve(pub, 'icons/icon-512-maskable.png'), await sharp(Buffer.from(iconSvg(10))).resize(512, 512).png().toBuffer());
  // favicon.ico gerçek ICO olmalı: sunucu dosyayı image/vnd.microsoft.icon tipiyle ve
  // nosniff başlığıyla servis ettiği için ham PNG'yi .ico adıyla koymak yetmez.
  await write(resolve(pub, 'favicon.ico'), icoFromPng(await sharp(icon).resize(32, 32).png().toBuffer(), 32));

  // Galeri placeholder'ları (gerçek fotoğraf konmuşsa üzerine yazma)
  for (const p of placeholders) {
    const path = resolve(pub, `images/projects/placeholder-${p.key}.svg`);
    if (await exists(path)) continue;
    await write(path, placeholderSvg(p).trim());
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
