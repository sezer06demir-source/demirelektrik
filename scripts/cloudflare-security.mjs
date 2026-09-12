#!/usr/bin/env node
/**
 * Cloudflare güvenlik ayarlarını tek komutla uygular / gösterir (SECURITY.md bölüm C).
 *
 * Kullanım (PowerShell):
 *   $env:CF_API_TOKEN = "<token>"
 *   node scripts/cloudflare-security.mjs            # uygula
 *   node scripts/cloudflare-security.mjs --status   # yalnızca mevcut durumu göster
 *   node scripts/cloudflare-security.mjs --under-attack on|off
 *
 * Gerekli token izinleri (yalnızca bu zone): Zone:Read, Zone Settings:Edit, Zone WAF:Edit,
 * Bot Management:Edit, Firewall Services:Edit.
 *
 * Ücretsiz plan sınırları: 5 özel WAF kuralı, 1 rate limit kuralı (engel süresi 10 sn sabit),
 * kural ifadesi en fazla 4096 karakter. Kural düzeni (5 slot):
 *   1-2. DE-IP engel listesi 1/2 ve 2/2  → middleware.ts içindeki BLOCKED_IPS_STATIC'ten üretilir
 *   3.   DE-Tarama yolları, yazma metotları ve scraper kimlikleri
 *   4.   "Türkiye"  (kullanıcının kuralı: TR/DZ dışı ve doğrulanmış bot değilse block) — dokunulmaz
 *   5.   "şüpheli ıp listesi" (kullanıcının Cloudflare listesi) — dokunulmaz
 * Betik yalnızca "DE-" ile başlayan kuralları yazar/günceller; diğerlerini olduğu gibi korur.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ZONE_NAME = process.env.CF_ZONE ?? 'demirelektrikankara.com.tr';
const TOKEN = process.env.CF_API_TOKEN;
const API = 'https://api.cloudflare.com/client/v4';
const args = process.argv.slice(2);
const STATUS_ONLY = args.includes('--status');
const UA_IDX = args.indexOf('--under-attack');
const MAX_EXPR = 4096;
const MAX_CUSTOM_RULES = 5;

if (!TOKEN) {
  console.error('CF_API_TOKEN ortam değişkeni gerekli.');
  process.exit(1);
}

async function cf(method, path, body) {
  const res = await fetch(API + path, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === false) {
    const msg = (data.errors ?? []).map((e) => `${e.code ?? ''} ${e.message}`).join('; ') || res.statusText;
    throw new Error(`${method} ${path} -> ${res.status} ${msg}`);
  }
  return data.result;
}

const ok = (m) => console.log('  [ok] ' + m);
const warn = (m) => console.log('  [!!] ' + m);

/* ---------------------------------------------------------------- kaynaklar */

/** middleware.ts içindeki BLOCKED_IPS_STATIC dizisini oku (tek kaynak). */
function readBlockedIps() {
  const root = dirname(dirname(fileURLToPath(import.meta.url)));
  const src = readFileSync(join(root, 'middleware.ts'), 'utf8');
  const m = src.match(/BLOCKED_IPS_STATIC[^=]*=\s*\[([\s\S]*?)\];/);
  if (!m) throw new Error('middleware.ts içinde BLOCKED_IPS_STATIC bulunamadı');
  const ips = [...m[1].matchAll(/'(\d+\.\d+\.\d+\.\d+)'/g)].map((x) => x[1].split('.').map(Number).join('.'));
  return [...new Set(ips)].sort((a, b) => {
    const A = a.split('.').map(Number), Bb = b.split('.').map(Number);
    for (let i = 0; i < 4; i++) if (A[i] !== Bb[i]) return A[i] - Bb[i];
    return 0;
  });
}

const BAD_UA = [
  'ahrefsbot', 'semrushbot', 'siteauditbot', 'mj12bot', 'dotbot', 'blexbot', 'dataforseobot', 'serpstatbot',
  'petalbot', 'bytespider', 'gptbot', 'ccbot', 'claudebot', 'python-requests', 'python-urllib', 'go-http-client',
  'scrapy', 'httrack', 'nikto', 'sqlmap', 'masscan', 'wpscan', 'libwww-perl', 'megaindex', 'seokicks', 'barkrowler',
];

function buildRules() {
  const ips = readBlockedIps();
  const half = Math.ceil(ips.length / 2);
  const ipExpr = (list) => `(ip.src in {${list.join(' ')}})`;
  const scan =
    '(starts_with(http.request.uri.path, "/wp-")) or (http.request.uri.path contains "xmlrpc") or (starts_with(http.request.uri.path, "/.env")) or (starts_with(http.request.uri.path, "/.git")) ' +
    'or (http.request.uri.path contains "phpmyadmin") or (ends_with(http.request.uri.path, ".php")) or (ends_with(http.request.uri.path, ".asp")) or (ends_with(http.request.uri.path, ".aspx")) ' +
    'or (not http.request.method in {"GET" "HEAD" "OPTIONS"}) or (http.user_agent eq "")';
  const ua = BAD_UA.map((u) => `(lower(http.user_agent) contains "${u}")`).join(' or ');
  const rules = [
    { description: 'DE-IP engel listesi 1/2 (rakip/şüpheli adresler)', expression: ipExpr(ips.slice(0, half)), action: 'block', enabled: true },
    { description: 'DE-IP engel listesi 2/2 (rakip/şüpheli adresler)', expression: ipExpr(ips.slice(half)), action: 'block', enabled: true },
    { description: 'DE-Tarama yolları, yazma metotları ve scraper kimlikleri', expression: `${scan} or ${ua}`, action: 'block', enabled: true },
  ];
  for (const r of rules) {
    if (r.expression.length > MAX_EXPR) throw new Error(`Kural ifadesi ${MAX_EXPR} karakteri aşıyor: ${r.description} (${r.expression.length}). IP listesini bölmek gerekir.`);
  }
  return { rules, ipCount: ips.length };
}

const ZONE_SETTINGS = [
  ['ssl', 'strict', 'SSL/TLS: Full (strict)'],
  ['always_use_https', 'on', 'Always Use HTTPS'],
  ['min_tls_version', '1.2', 'Minimum TLS 1.2'],
  ['security_level', 'high', 'Security Level: high'],
  ['browser_check', 'on', 'Browser Integrity Check'],
  ['challenge_ttl', 1800, 'Challenge Passage: 30 dk'],
  ['rocket_loader', 'off', 'Rocket Loader kapalı'],
];

/* ---------------------------------------------------------------- yardımcılar */

async function getZoneId() {
  const zones = await cf('GET', `/zones?name=${ZONE_NAME}`);
  if (!zones.length) throw new Error(`Zone bulunamadı: ${ZONE_NAME}`);
  return zones[0].id;
}

async function getEntrypoint(zoneId, phase) {
  try {
    return await cf('GET', `/zones/${zoneId}/rulesets/phases/${phase}/entrypoint`);
  } catch {
    return null;
  }
}

function stripRule(r) {
  const out = { description: r.description, expression: r.expression, action: r.action, enabled: r.enabled !== false };
  if (r.id) out.id = r.id;
  if (r.action_parameters) out.action_parameters = r.action_parameters;
  if (r.ratelimit) out.ratelimit = r.ratelimit;
  return out;
}

/* ---------------------------------------------------------------- ana akış */

const zoneId = await getZoneId();
console.log(`Zone: ${ZONE_NAME} (${zoneId})`);

if (UA_IDX !== -1) {
  const on = args[UA_IDX + 1] === 'on';
  await cf('PATCH', `/zones/${zoneId}/settings/security_level`, { value: on ? 'under_attack' : 'high' });
  ok(`Under Attack Mode: ${on ? 'ACIK' : 'kapali (security level high)'}`);
  process.exit(0);
}

if (STATUS_ONLY) {
  console.log('\nZone ayarlari:');
  for (const [key] of ZONE_SETTINGS) {
    const s = await cf('GET', `/zones/${zoneId}/settings/${key}`);
    console.log(`  ${key}: ${s.value}`);
  }
  try {
    const bm = await cf('GET', `/zones/${zoneId}/bot_management`);
    console.log(`  bot fight mode: ${bm.fight_mode}`);
  } catch (e) {
    warn(`bot_management okunamadi: ${e.message}`);
  }
  for (const phase of ['http_request_firewall_custom', 'http_ratelimit']) {
    const rs = await getEntrypoint(zoneId, phase);
    console.log(`\n${phase}: ${rs?.rules?.length ?? 0} kural`);
    for (const r of rs?.rules ?? []) {
      const extra = r.ratelimit ? ` | ${r.ratelimit.requests_per_period} istek / ${r.ratelimit.period} sn` : ` | ${r.expression.length} kar`;
      console.log(`  - [${r.enabled ? 'on ' : 'off'}] ${r.action} | ${r.description}${extra}`);
    }
  }
  process.exit(0);
}

console.log('\nZone ayarlari:');
for (const [key, value, label] of ZONE_SETTINGS) {
  try {
    await cf('PATCH', `/zones/${zoneId}/settings/${key}`, { value });
    ok(label);
  } catch (e) {
    warn(`${label} -> ${e.message}`);
  }
}

console.log('\nBot Fight Mode:');
try {
  await cf('PUT', `/zones/${zoneId}/bot_management`, { fight_mode: true });
  ok('acik');
} catch (e) {
  warn(`ayarlanamadi: ${e.message}`);
}

console.log('\nWAF ozel kurallari:');
try {
  const { rules: mine, ipCount } = buildRules();
  const rs = await getEntrypoint(zoneId, 'http_request_firewall_custom');
  const existing = rs?.rules ?? [];
  const others = existing.filter((r) => !(r.description ?? '').startsWith('DE-')).map(stripRule);
  if (mine.length + others.length > MAX_CUSTOM_RULES) {
    throw new Error(`Toplam kural ${mine.length + others.length} > ${MAX_CUSTOM_RULES}. Cloudflare panelinden gereksiz bir kural silin ya da betiği düzenleyin.`);
  }
  const merged = [...mine, ...others];
  if (rs) await cf('PUT', `/zones/${zoneId}/rulesets/${rs.id}`, { rules: merged });
  else await cf('POST', `/zones/${zoneId}/rulesets`, { name: 'custom', kind: 'zone', phase: 'http_request_firewall_custom', rules: merged });
  ok(`${mine.length} DE- kurali yazildi (${ipCount} IP), ${others.length} kullanici kurali korundu (toplam ${merged.length})`);
} catch (e) {
  warn(`WAF -> ${e.message}`);
}

console.log('\nRate limiting:');
try {
  const rl = await getEntrypoint(zoneId, 'http_ratelimit');
  if (rl?.rules?.length) {
    const r = rl.rules[0].ratelimit;
    ok(`mevcut kural korundu: ${r.requests_per_period} istek / ${r.period} sn (engel ${r.mitigation_timeout} sn)`);
  } else {
    const rule = {
      description: 'DE-RL IP basina 10 sn / 40 istek',
      expression: '(http.request.uri.path ne "/robots.txt")',
      action: 'block',
      enabled: true,
      ratelimit: { characteristics: ['ip.src', 'cf.colo.id'], period: 10, requests_per_period: 40, mitigation_timeout: 10 },
    };
    await cf('POST', `/zones/${zoneId}/rulesets`, { name: 'ratelimit', kind: 'zone', phase: 'http_ratelimit', rules: [rule] });
    ok('rate limit kurali olusturuldu (10 sn / 40 istek)');
  }
} catch (e) {
  warn(`rate limit -> ${e.message}`);
}

console.log('\nTamamlandi. Durum: node scripts/cloudflare-security.mjs --status');
