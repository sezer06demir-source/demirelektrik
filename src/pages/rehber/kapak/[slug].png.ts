import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { posts } from '@data/blog';

/**
 * Gerçek fotoğrafı OLMAYAN her rehber yazısı için Demir Elektrik'e ÖZGÜ markalı kapak (1200x630 PNG).
 * Not: Tasarım bilerek diğer sitelerden FARKLI (sarı sol bant + tracked etiket + çizgili kelime).
 * Çıktı: /rehber/kapak/<slug>.png. Gerçek foto (post.image) gelince onun yerine o kullanılır.
 */
export function getStaticPaths() {
  return posts.filter((p) => !p.image).map((p) => ({ params: { slug: p.slug }, props: { post: p } }));
}

const DARK = '#0b1220';
const DARK2 = '#172033';
const YELLOW = '#ffc107';
const ORANGE = '#ff8a00';

const esc = (s: string) => s.replace(/[&<>]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]!));

function wrap(text: string, maxChars = 22, maxLines = 4): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = w;
      if (lines.length === maxLines - 1) break;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line && lines.length < maxLines) lines.push(line.trim());
  return lines.length ? lines : [text];
}

export const GET: APIRoute = async ({ props }) => {
  const post = (props as any).post as { title: string; keyword: string };
  const lines = wrap(post.title, 24, 4);
  const fs = lines.length >= 4 ? 50 : lines.length === 3 ? 56 : 62;
  const startY = 300 - ((lines.length - 1) * fs) / 2;
  const tspans = lines
    .map((l, i) => `<tspan x="92" y="${Math.round(startY + i * (fs + 10))}">${esc(l)}</tspan>`)
    .join('');
  const kw = esc(post.keyword.toLocaleUpperCase('tr'));
  const kwW = Math.min(760, 30 + post.keyword.length * 15);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="${DARK2}"/><stop offset="1" stop-color="${DARK}"/></linearGradient>
      <radialGradient id="glow" cx="0.92" cy="0.95" r="0.7"><stop offset="0" stop-color="${ORANGE}" stop-opacity="0.4"/><stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect x="0" y="0" width="18" height="630" fill="${YELLOW}"/>
    <text x="92" y="104" font-family="Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="4" fill="${YELLOW}">DEMİR ELEKTRİK · REHBER</text>
    <rect x="92" y="122" width="150" height="4" rx="2" fill="${YELLOW}"/>
    <text font-family="Arial, sans-serif" font-size="${fs}" font-weight="800" fill="#ffffff">${tspans}</text>
    <text x="92" y="524" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="1" fill="${YELLOW}">${kw}</text>
    <rect x="92" y="540" width="${kwW}" height="4" rx="2" fill="${YELLOW}" opacity="0.7"/>
  </svg>`;

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
