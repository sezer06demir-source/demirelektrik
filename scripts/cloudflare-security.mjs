#!/usr/bin/env node
/**
 * Cloudflare güvenlik ayarlarını tek komutla uygular (SECURITY.md bölüm C).
 *
 * Kullanım:
 *   CF_API_TOKEN=<token> node scripts/cloudflare-security.mjs            # uygula
 *   CF_API_TOKEN=<token> node scripts/cloudflare-security.mjs --status   # yalnızca mevcut durumu göster
 *   CF_API_TOKEN=<token> node scripts/cloudflare-security.mjs --under-attack on|off
 *
 * Gerekli token izinleri (yalnızca bu zone): Zone:Read, Zone Settings:Edit, Zone WAF:Edit,
 * Bot Management:Edit, Firewall Services:Edit.
 *
 * Yapılanlar:
 *  - Zone ayarları: SSL Full (strict), Always Use HTTPS, TLS 1.2+, Security Level high,
 *    Browser Integrity Check on, Challenge TTL 30 dk, Rocket Loader off
 *  - Bot Fight Mode on
 *  - WAF özel kuralları (4 adet, mevcutsa günceller)
 *  - Rate limiting kuralı: IP başına 10 sn / 40 istek → 10 dk block
 */

const ZONE_NAME = process.env.CF_ZONE ?? 'demirelektrikankara.com.tr';
const TOKEN = process.env.CF_API_TOKEN;
const API = 'https://api.cloudflare.com/client/v4';
const args = process.argv.slice(2);
const STATUS_ONLY = args.includes('--status');
const UA_IDX = args.indexOf('--under-attack');

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
    const msg = (data.errors ?? []).map((e) => `${e.code}: ${e.message}`).join('; ') || res.statusText;
    throw new Error(`${method} ${path} → ${res.status} ${msg}`);
  }
  return data.result;
}

const ok = (m) => console.log('  ✓ ' + m);
const warn = (m) => console.log('  ! ' + m);

/* ---------------------------------------------------------------- kurallar */

const ALLOWED = ['TR', 'DZ'];

const WAF_RULES = [
  {
    description: 'DE-1 Ülke filtresi (doğrulanmış botlar hariç)',
    action: 'block',
    expression: `(not ip.geoip.country in {${ALLOWED.map((c) => `"${c}"`).join(' ')}} and not cf.client.bot)`,
  },
  {
    description: 'DE-2 Scraper, SEO araçları ve saldırı istemcileri',
    action: 'block',
    expression:
      '(lower(http.user_agent) contains "ahrefsbot") or (lower(http.user_agent) contains "semrushbot") or (lower(http.user_agent) contains "siteauditbot") or (lower(http.user_agent) contains "mj12bot") or (lower(http.user_agent) contains "dotbot") or (lower(http.user_agent) contains "blexbot") or (lower(http.user_agent) contains "dataforseobot") or (lower(http.user_agent) contains "serpstatbot") or (lower(http.user_agent) contains "petalbot") or (lower(http.user_agent) contains "bytespider") or (lower(http.user_agent) contains "gptbot") or (lower(http.user_agent) contains "ccbot") or (lower(http.user_agent) contains "claudebot") or (lower(http.user_agent) contains "python-requests") or (lower(http.user_agent) contains "python-urllib") or (lower(http.user_agent) contains "go-http-client") or (lower(http.user_agent) contains "scrapy") or (lower(http.user_agent) contains "httrack") or (lower(http.user_agent) contains "nikto") or (lower(http.user_agent) contains "sqlmap") or (lower(http.user_agent) contains "masscan") or (lower(http.user_agent) contains "wpscan") or (http.user_agent eq "")',
  },
  {
    description: 'DE-3 Şüpheli trafiğe meydan okuma (Google Ads tıklamaları dahil)',
    action: 'managed_challenge',
    expression: '(cf.threat_score gt 10 and not cf.client.bot) or (http.request.uri.query contains "gclid" and not cf.client.bot and cf.threat_score gt 0)',
  },
  {
    description: 'DE-4 WordPress/PHP tarama yolları ve yazma metotları',
    action: 'block',
    expression:
      '(http.request.uri.path contains "/wp-") or (http.request.uri.path contains "xmlrpc") or (http.request.uri.path contains "/.env") or (http.request.uri.path contains "/.git") or (http.request.uri.path contains "phpmyadmin") or (http.request.uri.path ends with ".php") or (not http.request.method in {"GET" "HEAD" "OPTIONS"})',
  },
];

const RATE_RULE = {
  description: 'DE-RL IP başına 10 sn / 40 istek',
  expression: '(http.request.uri.path ne "/robots.txt")',
  action: 'block',
  ratelimit: {
    characteristics: ['ip.src', 'cf.colo.id'],
    period: 10,
    requests_per_period: 40,
    mitigation_timeout: 600,
  },
};

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

async function upsertPhaseRules(zoneId, phase, wanted, matchKey = 'description') {
  // Phase entrypoint ruleset'ini al (yoksa oluştur)
  let ruleset;
  try {
    ruleset = await cf('GET', `/zones/${zoneId}/rulesets/phases/${phase}/entrypoint`);
  } catch {
    ruleset = await cf('POST', `/zones/${zoneId}/rulesets`, {
      name: `${phase} entrypoint`,
      kind: 'zone',
      phase,
      rules: [],
    });
  }
  const existing = ruleset.rules ?? [];
  // Bizim (DE-) kurallarımızı güncelle, kullanıcının diğer kurallarına dokunma
  const ours = new Map(wanted.map((r) => [r[matchKey], r]));
  const kept = existing.filter((r) => !(r.description ?? '').startsWith('DE-'));
  const merged = [...kept, ...wanted.map((r) => ({ ...r, enabled: true }))];
  await cf('PUT', `/zones/${zoneId}/rulesets/${ruleset.id}`, { rules: merged });
  return { total: merged.length, ours: ours.size, others: kept.length };
}

/* ---------------------------------------------------------------- ana akış */

const zoneId = await getZoneId();
console.log(`Zone: ${ZONE_NAME} (${zoneId})`);

if (UA_IDX !== -1) {
  const mode = args[UA_IDX + 1] === 'on' ? 'under_attack' : 'high';
  await cf('PATCH', `/zones/${zoneId}/settings/security_level`, { value: mode });
  ok(`Under Attack Mode: ${mode === 'under_attack' ? 'AÇIK' : 'kapalı (security level high)'}`);
  process.exit(0);
}

if (STATUS_ONLY) {
  console.log('\nZone ayarları:');
  for (const [key] of ZONE_SETTINGS) {
    const s = await cf('GET', `/zones/${zoneId}/settings/${key}`);
    console.log(`  ${key}: ${s.value}`);
  }
  try {
    const bm = await cf('GET', `/zones/${zoneId}/bot_management`);
    console.log(`  bot fight mode: ${bm.fight_mode}`);
  } catch (e) {
    warn(`bot_management okunamadı: ${e.message}`);
  }
  for (const phase of ['http_request_firewall_custom', 'http_ratelimit']) {
    try {
      const rs = await cf('GET', `/zones/${zoneId}/rulesets/phases/${phase}/entrypoint`);
      console.log(`\n${phase}: ${rs.rules?.length ?? 0} kural`);
      for (const r of rs.rules ?? []) console.log(`  - [${r.enabled ? 'on ' : 'off'}] ${r.action} | ${r.description}`);
    } catch {
      console.log(`\n${phase}: kural yok`);
    }
  }
  process.exit(0);
}

console.log('\nZone ayarları:');
for (const [key, value, label] of ZONE_SETTINGS) {
  try {
    await cf('PATCH', `/zones/${zoneId}/settings/${key}`, { value });
    ok(label);
  } catch (e) {
    warn(`${label} → ${e.message}`);
  }
}

console.log('\nBot Fight Mode:');
try {
  await cf('PUT', `/zones/${zoneId}/bot_management`, { fight_mode: true });
  ok('açık');
} catch (e) {
  warn(`ayarlanamadı (token izni "Bot Management: Edit" gerekir): ${e.message}`);
}

console.log('\nWAF özel kuralları:');
try {
  const r = await upsertPhaseRules(zoneId, 'http_request_firewall_custom', WAF_RULES);
  ok(`${r.ours} DE- kuralı yazıldı, ${r.others} diğer kural korundu (toplam ${r.total})`);
} catch (e) {
  warn(`WAF → ${e.message}`);
}

console.log('\nRate limiting:');
try {
  const r = await upsertPhaseRules(zoneId, 'http_ratelimit', [RATE_RULE]);
  ok(`rate limit kuralı yazıldı (toplam ${r.total})`);
} catch (e) {
  warn(`rate limit → ${e.message}`);
}

console.log('\nTamamlandı. Durum için: node scripts/cloudflare-security.mjs --status');
