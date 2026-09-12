/**
 * Vercel Routing Middleware (Edge) — site geneli erişim filtresi.
 *
 * Her HTML isteği önce buradan geçer. Amaç:
 *  1. Yalnızca izin verilen ülkelerden (TR, DZ) gelen ziyaretçilere sayfa sunmak.
 *  2. Arama motoru ve sosyal medya botlarını (Google, Bing, Yandex, WhatsApp vb.) ülkeden bağımsız geçirmek.
 *  3. SEO/scraper botlarını (Ahrefs, Semrush, MJ12 vb.) ve saldırı araçlarını engellemek.
 *  4. WordPress/PHP tarama isteklerini (wp-login, .env, xmlrpc) hızlıca reddetmek.
 *  5. SALDIRI MODU (FIGHT_MODE=1): tarayıcı olmayan istemcilere JavaScript doğrulaması uygulamak.
 *
 * Ayarlar Vercel ortam değişkenleriyle yapılır (Project → Settings → Environment Variables):
 *   SECURITY_MODE     = "on" (varsayılan) | "off"  → filtreyi tamamen kapatır (acil durum)
 *   ALLOWED_COUNTRIES = "TR,DZ" (varsayılan)       → ISO 3166-1 alpha-2 kodları, virgülle
 *   FIGHT_MODE        = "0" (varsayılan) | "1"     → JS doğrulaması. Kullanıcı kararıyla 12 Eylül 2026'dan
 *                                                    itibaren üretimde SÜREKLİ AÇIK (Vercel env FIGHT_MODE=1).
 *   FIGHT_MODE_SECRET = rastgele uzun metin        → doğrulama çerezi imzası (FIGHT_MODE için önerilir)
 *   BEHIND_CLOUDFLARE = "0" (varsayılan) | "1"     → İsteğe bağlı. Cloudflare proxy'si bağlanan IP'den
 *                                                    otomatik tespit edilir; 1 yapmak yalnızca zorlar.
 *   BLOCKED_IPS       = "1.2.3.4,5.6.7.8"          → elle engellenecek ek IP'ler (isteğe bağlı)
 *   Kalıcı IP engel listesi: bu dosyadaki BLOCKED_IPS_STATIC dizisi (dış import edge paketleyicide çalışmadı)
 *
 * Değişken değiştirince yeniden deploy gerekmez; Vercel bir sonraki istekte yeni değeri okur
 * (bazı durumlarda "Redeploy" gerekebilir).
 */

export const config = {
  // Statik varlıklar, sitemap, robots ve manifest için çalışmaz; yalnızca sayfa isteklerinde devreye girer.
  matcher: ['/((?!_astro/|images/|videos/|icons/|favicon\\.ico|favicon\\.svg|og-image\\.png|manifest\\.webmanifest|robots\\.txt|sitemap).*)'],
};

/* ----------------------------------------------------------------------------- yardımcılar */

/** Kalıcı IP engel listesi — security/blocked-ips.ts ile aynı içerik; middleware dış dosya import etmez. */
const BLOCKED_IPS_STATIC: readonly string[] = [
  '192.0.78.12',
  '192.0.78.13',
  '198.185.159.144',
  '94.73.151.142',
  '94.138.202.5',
  '89.252.186.32',
  '89.252.186.67',
  '193.238.27.36',
  '185.199.108.153',
  '93.187.200.130',
  '92.42.34.228',
  '185.216.113.90',
  '216.239.38.108',
  '172.217.16.206',
  '37.230.110.110',
  '37.230.111.111',
  '216.239.32.101',
  '216.239.34.101',
  '185.106.210.202',
  '216.239.32.108',
  '216.239.34.108',
  '216.239.36.108',
  '212.68.57.61',
  '94.138.202.135',
  '66.235.200.147',
  '5.2.80.7',
  '77.245.159.15',
  '45.158.14.18',
  '45.84.189.3',
  '89.35.73.99',
  '216.58.214.14',
  '178.128.126.151',
  '31.192.212.112',
  '162.159.24.80',
  '162.159.25.175',
  '77.223.134.235',
  '104.21.61.85',
  '185.111.247.38',
  '89.252.181.146',
  '104.26.2.133',
  '104.26.3.133',
  '172.67.74.176',
  '94.73.148.122',
  '185.242.161.49',
  '185.85.191.179',
  '77.88.21.249',
  '142.250.179.206',
  '216.239.32.100',
  '216.239.34.100',
  '142.250.179.174',
  '78.135.105.7',
  '185.126.219.251',
  '172.217.16.142',
  '45.151.249.65',
  '78.142.210.148',
  '165.227.179.236',
  '188.114.97.3',
  '188.114.96.3',
  '188.114.96.0',
  '141.98.205.98',
  '185.199.109.153',
  '142.250.184.238',
  '142.250.185.110',
  '142.250.185.142',
  '142.250.185.238',
  '142.250.186.174',
  '142.250.186.46',
  '89.252.159.131',
  '172.67.175.18',
  '78.135.106.243',
  '45.84.189.227',
  '78.47.117.75',
  '217.195.202.9',
  '34.120.137.41',
  '76.223.105.230',
  '34.149.87.45',
  '142.250.102.26',
  '142.250.102.27',
  '45.84.189.66',
  '94.73.147.32',
  '13.248.243.5',
  '31.186.11.174',
  '194.62.54.236',
  '212.68.34.228',
  '172.64.32.104',
  '45.158.14.78',
  '89.252.138.99',
  '94.199.206.56',
  '104.247.165.3',
  '185.210.94.91',
  '162.159.24.201',
  '162.159.25.42',
  '185.216.114.15',
  '185.165.46.140',
  '213.238.183.121',
  '185.171.24.51',
  '78.135.83.3',
  '5.180.185.136',
  '104.21.8.144',
  '78.142.208.75',
  '51.83.126.129',
  '88.99.106.172',
  '95.179.245.162',
  '212.64.215.48',
  '3.125.172.46',
  '3.73.27.108',
  '173.245.58.186',
  '83.150.213.76',
  '45.141.151.84',
  '89.252.182.211',
  '173.201.71.24',
  '173.245.58.100',
  '97.74.103.24',
  '178.211.58.92',
  '89.163.140.74',
  '172.65.182.103',
  '172.217.23.206',
  '172.217.18.4',
  '172.67.134.8',
  '172.67.178.222',
  '172.67.192.170',
  '104.247.165.99',
  '185.111.234.53',
  '93.177.103.4',
  '93.180.132.207',
  '109.203.126.178',
  '104.247.162.35',
  '104.21.46.211',
  '188.114.96.4',
  '104.247.165.146',
  '188.132.201.19',
  '89.252.182.227',
  '104.21.9.33',
  '104.21.11.205',
  '45.94.4.26',
  '108.177.125.26',
  '104.247.167.227',
  '5.2.85.161',
  '104.21.42.121',
  '78.142.208.87',
  '81.30.157.4',
  '104.247.168.131',
  '89.163.225.88',
  '185.210.92.193',
  '185.165.46.3',
  '80.253.246.246',
  '45.87.149.34',
  '104.247.166.110',
  '104.21.42.99',
  '172.67.173.131',
  '185.33.233.187',
  '188.132.180.69',
  '31.210.51.113',
  '45.84.207.157',
  '77.245.158.129',
  '85.95.237.94',
  '198.12.220.0',
  '89.252.187.235',
  '77.245.149.76',
  '104.247.167.3',
  '185.106.210.122',
  '5.250.252.238',
  '38.46.220.134',
  '172.67.219.12',
  '172.66.0.70',
  '34.144.206.118',
  '172.67.207.175',
  '185.210.95.46',
  '104.21.8.49',
  '104.21.86.121',
  '185.92.2.250',
  '78.142.210.147',
  '89.252.183.211',
  '84.32.84.57',
  '172.64.32.111',
  '172.67.142.202',
  '92.113.16.177',
  '142.250.203.110',
  '84.32.84.3',
  '78.135.105.10',
  '213.142.159.191',
  '188.132.200.16',
  '104.247.165.211',
  '89.252.183.131',
  '162.159.44.14',
  '104.21.64.39',
  '104.21.48.1',
  '172.67.210.120',
  '104.21.53.63',
  '104.247.168.227',
  '31.192.214.52',
  '172.67.181.31',
  '92.113.16.221',
  '172.64.33.224',
  '108.162.195.206',
  '94.73.146.61',
  '64.29.17.65',
  '5.250.251.6',
  '108.162.192.170',
  '185.50.70.106',
  '173.201.73.26',
  '97.74.105.26',
  '213.238.191.201',
  '104.247.165.67',
  '2.59.119.221',
  '172.67.223.245',
  '46.202.158.21',
  '172.67.189.14',
  '172.67.202.198',
  '94.199.205.2',
  '172.67.175.45',
  '66.33.60.193',
  '172.67.134.213',
  '104.247.179.179',
  '89.252.183.179',
  '5.250.255.35',
  '172.67.215.117',
  '31.186.11.182',
  '172.67.198.118',
  '63.176.8.218',
  '35.157.26.135',
  '92.113.23.227',
  '104.21.24.189',
  '108.162.192.148',
  '77.245.159.231',
  '91.102.163.4',
  '94.73.148.77',
  '104.247.162.226',
  '142.250.27.139',
  '94.199.206.162',
  '92.113.16.95',
  '31.186.11.112',
  '89.252.183.35',
  '104.247.179.66',
  '104.21.26.32',
  '153.92.220.207',
  '45.84.189.51',
  '5.180.185.122',
  '104.21.21.52',
  '78.142.208.170',
  '172.67.206.143',
  '185.149.100.59',
  '185.106.210.51',
  '104.247.160.136',
  '94.73.150.169',
  '89.252.181.227',
  '83.150.215.94',
  '193.111.77.77',
  '89.252.181.35',
  '94.73.149.174',
  '104.247.179.227',
  '94.199.206.204',
  '160.153.133.177',
  '103.224.212.216',
  '104.21.53.69',
  '104.21.92.128',
  '78.135.105.100',
  '193.162.43.12',
  '95.173.190.25',
  '152.53.142.196',
  '172.67.138.85',
  '45.151.250.199',
  '194.163.154.138',
  '78.135.107.40',
  '104.247.167.202',
  '31.186.11.139',
  '172.67.152.130',
  '45.151.251.113',
  '91.198.66.13',
  '185.237.83.250',
  '45.151.251.206',
  '46.202.154.197',
  '172.67.128.201',
  '104.21.31.224',
  '172.67.178.228',
  '104.247.167.130',
  '94.199.205.234',
  '23.88.0.101',
  '104.247.161.58',
  '104.21.2.189',
  '5.9.123.99',
  '82.198.227.64',
  '104.21.44.228',
  '185.148.240.173',
  '216.9.227.72',
  '172.67.199.94',
  '185.50.70.103',
  '104.21.50.106',
  '172.67.196.107',
  '5.250.244.253',
  '31.186.11.109',
  '141.11.109.216',
  '94.73.146.150',
  '172.67.200.174',
  '37.9.205.14',
  '172.67.172.64',
  '45.84.207.216',
  '104.21.21.221',
  '93.127.192.200',
  '45.92.10.13',
  '104.247.167.194',
  '94.199.206.19',
  '104.21.75.240',
  '62.72.37.68',
  '141.94.31.189',
  '78.142.208.8',
  '185.149.100.25',
  '160.153.0.89',
  '5.2.85.221',
  '104.247.160.69',
  '128.199.173.206',
  '165.232.126.61',
  '134.199.193.27',
  '2.59.119.222',
  '94.199.201.8',
  '185.123.54.146',
  '172.67.142.254',
  '89.19.5.199',
  '94.73.187.201',
  '83.217.77.15',
  '94.73.187.202',
  '142.251.39.142',
  '5.250.252.6',
  '78.142.209.199',
  '136.243.229.181',
  '172.67.200.177',
  '159.223.222.79',
  '31.192.212.6',
  '89.252.138.67',
  '142.250.179.162',
  '104.21.30.183',
  '172.64.34.13',
  '89.252.181.138',
  '95.173.189.90',
  '77.245.159.131',
  '5.250.243.7',
  '5.250.242.7',
  '188.132.130.146',
  '173.245.58.174',
  '172.64.35.244',
  '104.21.43.167',
  '45.84.205.109',
  '94.199.206.107',
  '213.238.183.40',
  '78.46.74.6',
  '92.113.23.174',
  '142.251.140.174',
  '78.135.107.23',
  '185.149.100.144',
  '212.68.57.49',
  '172.253.130.27',
  '172.253.144.27',
  '41.137.120.34',
  '77.245.156.176',
  '104.247.178.109',
  '89.0.153.160',
  '78.111.111.157',
  '173.245.59.137',
  '172.64.33.239',
  '5.250.243.253',
  '104.247.160.179',
  '172.67.177.133',
  '104.21.4.63',
  '185.149.101.62',
  '172.67.158.89',
  '185.14.23.58',
  '80.79.116.119',
  '173.245.58.160',
  '173.245.59.75',
  '45.84.189.242',
  '172.67.184.80',
  '172.67.218.95',
  '78.142.208.93',
  '95.0.27.158',
  '31.58.248.211',
  '172.67.196.252',
  '89.19.30.73',
  '91.217.119.200',
  '162.241.216.221',
  '108.162.193.207',
  '173.245.58.70',
  '142.250.147.26',
  '168.119.94.138',
  '104.21.7.245',
  '172.67.222.103',
  '213.145.94.14',
  '204.69.207.1',
  '104.21.45.211',
  '5.2.85.171',
  '83.150.215.93',
  '83.150.212.70',
  '188.132.231.177',
  '45.84.189.34',
  '104.21.23.80',
  '4.197.167.136',
  '45.43.143.152',
  '45.43.143.224',
  '34.40.30.2',
  '45.87.120.150',
  '108.162.195.46',
  '34.160.37.117',
  '185.33.233.252',
  '94.199.206.68',
  '77.245.159.97',
  '172.67.218.69',
  '172.67.206.133',
  '104.21.59.253',
  '78.142.209.204',
  '172.67.199.152',
  '89.252.180.19',
  '104.21.78.124',
  '188.132.198.225',
  '104.21.36.65',
  '104.21.82.142',
  '46.202.142.20',
  '159.253.33.92',
  '104.21.17.206',
  '162.159.142.117',
  '5.250.254.67',
  '31.58.248.215',
  '104.21.72.27',
  '172.67.135.151',
  '104.21.78.15',
  '104.21.84.128',
  '94.73.151.51',
  '213.130.145.156',
  '172.67.176.13',
  '104.21.49.55',
  '217.18.85.54',
  '178.16.128.134',
  '45.84.189.83',
  '139.162.178.59',
  '108.162.193.107',
  '108.162.192.197',
  '172.67.134.17',
  '104.21.25.111',
  '5.2.84.146',
  '2.57.91.203',
  '5.250.248.53',
  '195.244.40.30',
  '108.177.15.155',
  '108.162.193.76',
  '108.162.194.77',
  '94.199.201.69',
  '37.247.111.25',
  '104.21.87.186',
  '104.247.179.99',
  '185.114.20.98',
  '116.202.145.81',
  '88.222.222.104',
  '172.67.181.217',
  '213.145.94.101',
  '172.67.183.166',
  '104.247.162.163',
  '5.250.252.217',
  '104.21.70.251',
  '173.245.58.92',
  '173.245.59.74',
  '116.202.215.43',
  '31.58.250.140',
  '104.21.27.39',
  '142.132.169.165',
  '185.50.70.36',
  '2.57.91.183',
  // Kullanıcının Cloudflare kurallarından alınan ek adresler (12 Eylül 2026)
  '145.223.39.54',
  '172.64.52.95',
  '172.64.53.161',
  '172.67.205.170',
  '31.145.153.6',
  '78.135.105.15',
  '78.135.105.6',
  '85.111.6.221',
];

type Env = Record<string, string | undefined>;
const env: Env = ((globalThis as unknown as { process?: { env?: Env } }).process?.env ?? {}) as Env;

function envList(name: string, fallback: string[]): string[] {
  const raw = env[name];
  if (!raw) return fallback;
  return raw
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);
}

const SECURITY_ON = (env.SECURITY_MODE ?? 'on').toLowerCase() !== 'off';
const FIGHT_MODE = env.FIGHT_MODE === '1';
/** Elle zorlama; normalde gerek yok, Cloudflare proxy'si bağlanan IP'den otomatik tespit edilir. */
const BEHIND_CLOUDFLARE_ENV = env.BEHIND_CLOUDFLARE === '1';

/** Cloudflare'in yayınladığı çıkış aralıkları (https://www.cloudflare.com/ips). Yalnızca bu IP'lerden gelen
 *  isteklerde cf-ipcountry / cf-connecting-ip başlıklarına güvenilir; böylece başlık sahteciliği engellenir. */
const CLOUDFLARE_IPV4: Array<[number, number]> = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22',
].map((cidr) => {
  const [ip, bits] = cidr.split('/');
  const mask = bits === '0' ? 0 : (~0 << (32 - Number(bits))) >>> 0;
  return [(ipv4ToInt(ip) & mask) >>> 0, mask] as [number, number];
});
/** IPv6 önekleri: [ilk hextet, ikinci hextet alt sınır, ikinci hextet üst sınır] */
const CLOUDFLARE_IPV6: Array<[string, number, number]> = [
  ['2400', 0xcb00, 0xcb00],
  ['2606', 0x4700, 0x4700],
  ['2803', 0xf800, 0xf800],
  ['2405', 0xb500, 0xb500],
  ['2405', 0x8100, 0x8100],
  ['2a06', 0x98c0, 0x98c7],
  ['2c0f', 0xf248, 0xf248],
];

function ipv4ToInt(ip: string): number {
  const p = ip.split('.').map(Number);
  if (p.length !== 4 || p.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return -1;
  return ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0;
}

function isCloudflareIp(ip: string): boolean {
  if (!ip) return false;
  if (ip.includes(':')) {
    const [h1 = '', h2 = ''] = ip.toLowerCase().split(':');
    const n2 = parseInt(h2 || '0', 16);
    return CLOUDFLARE_IPV6.some(([a, lo, hi]) => h1 === a && n2 >= lo && n2 <= hi);
  }
  const n = ipv4ToInt(ip);
  if (n < 0) return false;
  return CLOUDFLARE_IPV4.some(([net, mask]) => (n & mask) >>> 0 === net);
}

/** İstek Cloudflare proxy'sinden mi geliyor? Bağlanan IP Cloudflare aralığındaysa evet. */
function viaCloudflare(req: Request): boolean {
  if (BEHIND_CLOUDFLARE_ENV) return true;
  if (!req.headers.get('cf-ray')) return false;
  const peer = req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for')?.split(',').pop()?.trim() ?? '';
  return isCloudflareIp(peer);
}
const ALLOWED_COUNTRIES = new Set(envList('ALLOWED_COUNTRIES', ['TR', 'DZ']));
/** Kalıcı liste (security/blocked-ips.ts) + ortam değişkeniyle eklenenler. */
const BLOCKED_IPS = new Set([...BLOCKED_IPS_STATIC, ...envList('BLOCKED_IPS', [])].map((s) => s.toLowerCase()));
const FIGHT_SECRET = env.FIGHT_MODE_SECRET ?? 'demir-elektrik-varsayilan-anahtar';

/** Ülkeden bağımsız geçmesine izin verilen "iyi" botlar (User-Agent parçaları, küçük harf). */
const GOOD_BOTS = [
  // Google
  'googlebot',
  'google-inspectiontool',
  'adsbot-google',
  'mediapartners-google',
  'apis-google',
  'feedfetcher-google',
  'google-read-aloud',
  'google-site-verification',
  'googleother',
  'storebot-google',
  'google-extended',
  'chrome-lighthouse',
  'google page speed',
  'lighthouse',
  // Bing / Microsoft
  'bingbot',
  'adidxbot',
  'bingpreview',
  'msnbot',
  // Diğer arama motorları
  'yandexbot',
  'yandeximages',
  'yandexmobilebot',
  'duckduckbot',
  'duckduckgo',
  'applebot',
  'baiduspider',
  'seznambot',
  'qwantify',
  // Sosyal medya link önizlemeleri
  'whatsapp',
  'facebookexternalhit',
  'facebookcatalog',
  'twitterbot',
  'linkedinbot',
  'telegrambot',
  'pinterestbot',
  'slackbot',
  'discordbot',
  'skypeuripreview',
  // İzleme / uptime
  'uptimerobot',
  'vercel',
];

/** Engellenecek scraper, SEO aracı ve saldırı istemcileri (User-Agent parçaları, küçük harf). */
const BAD_BOTS = [
  'ahrefsbot',
  'ahrefssiteaudit',
  'semrushbot',
  'siteauditbot',
  'mj12bot',
  'dotbot',
  'blexbot',
  'dataforseobot',
  'serpstatbot',
  'seokicks',
  'seznam-screenshot',
  'megaindex',
  'linkdexbot',
  'spbot',
  'rogerbot',
  'sistrix',
  'barkrowler',
  'petalbot',
  'bytespider',
  'ccbot',
  'gptbot',
  'claudebot',
  'anthropic-ai',
  'omgili',
  'zoominfobot',
  'screaming frog',
  'netcraft',
  'masscan',
  'zgrab',
  'nikto',
  'sqlmap',
  'nmap',
  'wpscan',
  'python-requests',
  'python-urllib',
  'go-http-client',
  'java/',
  'libwww-perl',
  'httpclient',
  'okhttp',
  'scrapy',
  'httrack',
  'wget',
  'curl/',
];

/** WordPress / PHP tarayıcılarının denediği yollar — sitede böyle bir şey yok. */
const PROBE_PATHS = [
  '/wp-admin',
  '/wp-login',
  '/wp-content',
  '/wp-includes',
  '/wp-json',
  '/xmlrpc.php',
  '/.env',
  '/.git',
  '/.htaccess',
  '/.htpasswd',
  '/.aws',
  '/.ssh',
  '/.vscode',
  '/.idea',
  '/phpmyadmin',
  '/phpinfo',
  '/cgi-bin',
  '/vendor/',
  '/administrator',
  '/config.php',
  '/wp-config',
  '/backup',
  '/shell',
  '/admin.php',
];

function deny(status: number, text: string): Response {
  return new Response(text, {
    status,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex',
    },
  });
}

function getCountry(req: Request, cf: boolean): string | undefined {
  if (cf) {
    const c = req.headers.get('cf-ipcountry');
    if (c && c !== 'XX' && c !== 'T1') return c.toUpperCase();
  }
  const v = req.headers.get('x-vercel-ip-country');
  return v ? v.toUpperCase() : undefined;
}

function getIp(req: Request, cf: boolean): string {
  return (
    (cf ? req.headers.get('cf-connecting-ip') : null) ??
    req.headers.get('x-real-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    ''
  ).toLowerCase();
}

/** Günlük değişen, gizli anahtarla türetilmiş doğrulama çerezi değeri. */
async function challengeToken(): Promise<string> {
  const day = new Date().toISOString().slice(0, 10);
  const data = new TextEncoder().encode(`${FIGHT_SECRET}|${day}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .slice(0, 16)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function hasCookie(req: Request, name: string, value: string): boolean {
  const cookie = req.headers.get('cookie') ?? '';
  return cookie.split(';').some((part) => {
    const [k, v] = part.trim().split('=');
    return k === name && v === value;
  });
}

/** Tarayıcıda çalışan küçük bir JS doğrulaması: çerezi yazar ve sayfayı yeniler. Basit botlar geçemez. */
function challengePage(token: string): Response {
  const html = `<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Güvenlik kontrolü · Demir Elektrik</title>
<style>body{font-family:system-ui,sans-serif;background:#0b1220;color:#e5e7eb;display:grid;place-items:center;min-height:100vh;margin:0;text-align:center;padding:1rem}
.box{max-width:420px}.spin{width:40px;height:40px;border:4px solid #334155;border-top-color:#ffc107;border-radius:50%;margin:0 auto 1rem;animation:s 1s linear infinite}@keyframes s{to{transform:rotate(360deg)}}
noscript p{color:#fca5a5}</style></head>
<body><div class="box"><div class="spin"></div><h1 style="font-size:1.2rem">Güvenlik kontrolü yapılıyor</h1>
<p>Demir Elektrik web sitesi birkaç saniye içinde açılacak.</p>
<noscript><p>Bu kontrol için tarayıcınızda JavaScript açık olmalıdır.</p></noscript></div>
<script>(function(){var d=new Date();d.setTime(d.getTime()+12*60*60*1000);
document.cookie="de_chk=${token}; expires="+d.toUTCString()+"; path=/; SameSite=Lax; Secure";
var ok=document.cookie.indexOf("de_chk=")!==-1;
setTimeout(function(){
  if(ok){location.reload();return;}
  // Çerez yazılamadı (tarayıcı engelliyor): döngüye girmemek için tek seferlik geçiş işaretiyle devam et.
  var u=new URL(location.href);u.searchParams.set("__chk","1");location.replace(u.toString());
},350);})();</script></body></html>`;
  return new Response(html, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'retry-after': '2',
      'x-robots-tag': 'noindex',
    },
  });
}

/* ----------------------------------------------------------------------------- ana akış */

export default async function middleware(req: Request): Promise<Response | undefined> {
  if (!SECURITY_ON) return undefined;

  const url = new URL(req.url);
  const path = url.pathname.toLowerCase();
  const ua = (req.headers.get('user-agent') ?? '').toLowerCase();
  const cf = viaCloudflare(req);
  const ip = getIp(req, cf);

  // 1) Yalnızca okuma metotları; site statik, POST/PUT vb. beklenmiyor.
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.method !== 'OPTIONS') {
    return deny(405, 'Method not allowed');
  }

  // 2) Elle engellenen IP'ler.
  if (ip && BLOCKED_IPS.has(ip)) {
    return deny(403, 'Erişim engellendi.');
  }

  // 3) WordPress/PHP tarama yolları — böyle bir sayfa yok, tarayıcıya zaman kaybettirme.
  if (PROBE_PATHS.some((p) => path.startsWith(p)) || path.endsWith('.php') || path.endsWith('.asp') || path.endsWith('.aspx')) {
    return deny(404, 'Not found');
  }

  // 4) İyi botlar ülkeden bağımsız geçer (Googlebot ABD'den tarar).
  const isGoodBot = GOOD_BOTS.some((b) => ua.includes(b));
  if (isGoodBot) return undefined;

  // 5) Scraper / SEO araçları / saldırı istemcileri.
  if (!ua || BAD_BOTS.some((b) => ua.includes(b))) {
    return deny(403, 'Erişim engellendi.');
  }

  // 6) Ülke filtresi. Ülke bilgisi yoksa (yerel geliştirme) geçir.
  const country = getCountry(req, cf);
  if (country && !ALLOWED_COUNTRIES.has(country)) {
    return deny(403, 'Bu site yalnızca hizmet verdiğimiz bölgelerden erişime açıktır.');
  }

  // 7) Saldırı modu: JS doğrulama çerezi olmayan istemciye meydan okuma sayfası.
  //    Çerezi yazamayan tarayıcılar (çerez kapalı) JS'in eklediği __chk=1 işaretiyle döngüye girmeden geçer.
  if (FIGHT_MODE && req.method === 'GET') {
    const token = await challengeToken();
    if (!hasCookie(req, 'de_chk', token) && url.searchParams.get('__chk') !== '1') {
      return challengePage(token);
    }
  }

  return undefined;
}
