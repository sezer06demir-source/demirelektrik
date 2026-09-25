# Güvenlik Rehberi

Site statik olduğu için veritabanı, oturum ya da form işleme gibi klasik saldırı yüzeyleri yok. Kalan riskler: rakip kaynaklı bot trafiği ve tıklama sahtekârlığı, scraper/SEO araçlarıyla içerik kopyalama, tarama/probe istekleri. Koruma üç katmanda kurulur:

| Katman | Nerede | Ne yapar | Durum |
| --- | --- | --- | --- |
| 1. Kod | `middleware.ts`, `vercel.json`, `robots.txt` | Ülke filtresi, bot filtresi, saldırı modu, güvenlik başlıkları | Depoda hazır, her deploy'da aktif |
| 2. Vercel Firewall | Vercel → proje → Firewall | Hız sınırı, ülke kuralı, "Attack Challenge Mode" | Panelden açılır |
| 3. Cloudflare | Cloudflare → alan adı → Security | Bot Fight Mode, WAF, Rate Limiting, Under Attack Mode | Proxy açılınca devreye girer |

Tıklama sahtekârlığıyla ilgili en önemli not: **Google Ads tıklaması siteye ulaşmadan önce Google'da ücretlendirilir.** Siteyi ne kadar sıkı korursanız koruyun, sahte tıklamanın ücreti Google Ads ayarlarıyla önlenir ya da iade alınır (bkz. bölüm D). Site tarafındaki koruma, rakibin tıkladıktan sonra siteye yük bindirmesini ve kopyalamasını engeller.

---

## A. Kod katmanı (hazır)

### A1. `middleware.ts` — Vercel Edge filtresi

Her sayfa isteği önce buradan geçer. Sıra:

1. GET/HEAD/OPTIONS dışındaki metotlar → 405
2. `BLOCKED_IPS` listesindeki IP'ler → 403
3. WordPress/PHP tarama yolları (`/wp-login`, `/.env`, `/xmlrpc.php`, `*.php` …) → 404
4. İyi botlar (Googlebot, AdsBot, Bingbot, Yandex, WhatsApp, Facebook önizleme …) → ülkeden bağımsız **geçer**
5. Scraper / SEO araçları / saldırı istemcileri (Ahrefs, Semrush, MJ12, sqlmap, nikto, python-requests, curl …) → 403
6. **Ülke filtresi:** `ALLOWED_COUNTRIES` dışındaki ülkeler → 403 (varsayılan TR, DZ)
7. **Saldırı modu** (`FIGHT_MODE=1`): doğrulama çerezi olmayan istemciye JavaScript kontrol sayfası

Ortam değişkenleri (Vercel → Settings → Environment Variables → Production):

| Değişken | Varsayılan | Açıklama |
| --- | --- | --- |
| `SECURITY_MODE` | `on` | `off` yapınca tüm filtre kapanır (acil durum) |
| `ALLOWED_COUNTRIES` | `TR,DZ` | Ülke kodları, virgülle. Örn. `TR,DZ,DE` |
| `FIGHT_MODE` | `0` | `1` = saldırı modu. Botlar JS kontrolünü geçemez, gerçek ziyaretçi 1 sn gecikme görür |
| `FIGHT_MODE_SECRET` | dahili | Rastgele uzun bir metin girin; çerez imzası buna göre üretilir |
| `BEHIND_CLOUDFLARE` | `0` | İsteğe bağlı. Middleware, isteğin Cloudflare'in resmi IP aralığından geldiğini görünce ülke ve ziyaretçi IP'sini Cloudflare başlıklarından otomatik okur. `1` yalnızca bunu zorlar |
| `BLOCKED_IPS` | boş | Elle engellenecek ek IP'ler, virgülle. Kalıcı liste `middleware.ts` içindeki `BLOCKED_IPS_STATIC` dizisindedir (464 IP, 12 Eylül 2026); yeni IP'yi oraya ekleyip push etmek yeterlidir |

Değişkeni değiştirdikten sonra Deployments → son deploy → **Redeploy** yapın.

**Saldırı modu durumu:** Kullanıcı kararıyla 12 Eylül 2026'dan itibaren üretimde **sürekli açık** (`FIGHT_MODE=1`). Her ziyaretçi ilk girişte ~0,5 sn "Güvenlik kontrolü" ekranı görür, çerez 12 saat geçerlidir; Googlebot/AdsBot/Bing/WhatsApp gibi iyi botlar ve çerez yazamayan tarayıcılar (`__chk=1` işaretiyle) etkilenmez. Kapatmak için `FIGHT_MODE` = `0` → Redeploy. Daha ağır seviye gerekirse Cloudflare Under Attack Mode (bölüm C5) ayrıca açılır.

### A2. Güvenlik başlıkları (`vercel.json`)

Content-Security-Policy (yalnızca kendi kaynakları + Google Maps iframe), HSTS preload, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP/CORP. Kontrol: https://securityheaders.com

### A3. `robots.txt`

Arama motorlarına açık; Ahrefs, Semrush, MJ12 gibi rakip analiz araçları ve yapay zeka toplayıcıları için `Disallow: /`. Uymayanları middleware zaten 403 ile keser.

---

## B. Vercel Firewall (uygulandı, 12 Eylül 2026)

API üzerinden yapıldı; Vercel → proje **demirelektrik** → **Firewall** sekmesinden görülebilir.

- Firewall açık. İki özel kural aktif: (1) scraper/SEO/saldırı kimlikleri → Deny, (2) WordPress/PHP tarama yolları ve GET/HEAD/OPTIONS dışı metotlar → Deny.
- Ortam değişkenleri tanımlı: `FIGHT_MODE=0`, `FIGHT_MODE_SECRET` (rastgele, şifreli).
- **Attack Challenge Mode** — Firewall sekmesinin sağ üstündeki düğme. Saldırı sırasında açın; tüm ziyaretçilere tarayıcı doğrulaması uygulanır. Saldırı bitince kapatın.
- **Önemli:** Cloudflare proxy'si önde olduğu için Vercel, ziyaretçinin gerçek IP'sini ve ülkesini göremez (Cloudflare sunucusunu görür). Bu yüzden Vercel'de **ülke ya da IP kuralı koymayın**, herkesi engeller. Ülke, IP ve hız sınırı kuralları Cloudflare'de (bölüm C) ve middleware'de tutulur.
- **Firewall → Overview**: engellenen istekleri buradan izleyin.

---

## C. Cloudflare (Fight Mode ve WAF)

**Durum (12 Eylül 2026, uygulandı):** Proxy her iki kayıtta açık, SSL Full (strict), TLS 1.2+, Security Level high, Browser Integrity Check on, Challenge TTL 30 dk, Bot Fight Mode on. Özel WAF kuralları (ücretsiz planda 5 slot, hepsi dolu):

| # | Kural | Aksiyon | Kaynak |
| --- | --- | --- | --- |
| 1 | DE-IP engel listesi 1/2 | Block | middleware.ts'deki liste + kullanıcının önceki IP kuralları (472 IP) |
| 2 | DE-IP engel listesi 2/2 | Block | aynı |
| 3 | DE-Tarama yolları, yazma metotları ve scraper kimlikleri | Block | wp-/xmlrpc/.env/.git/php/asp, GET-HEAD-OPTIONS dışı, boş UA, Ahrefs/Semrush/MJ12/sqlmap…; sahte AI botu (GPTBot/ClaudeBot adını taşıyıp cf.client.bot olmayan) |
| 4 | Türkiye | Block | Kullanıcının kuralı: TR/DZ dışı **ve** doğrulanmış bot değilse. Googlebot/Bingbot geçer |
| 5 | şüpheli ıp listesi | Block | Kullanıcının Cloudflare IP listesi (`$supheli_ip_listesi`) |

Rate limit: IP başına **10 sn / 40 istek** → block (engel süresi ücretsiz planda 10 sn'ye sabit). Aşağıdaki C1–C5 bölümleri referans olarak duruyor; yeniden uygulamak için C6'daki betik yeterli. Not: "Kural 3 / managed challenge" slot kalmadığı için eklenmedi; Bot Fight Mode ve Security Level high aynı işlevi büyük ölçüde karşılar.

Alan adının DNS'i Cloudflare'de. Cloudflare'in güvenlik özellikleri yalnızca **proxy açıkken** (turuncu bulut) çalışır.

### C1. Proxy'yi açma

1. Cloudflare → alan adı → **DNS → Records**. `demirelektrikankara.com.tr` (A) ve `www` (CNAME) kayıtlarında bulut simgesini **turuncu** yapın (Proxied).
2. **SSL/TLS → Overview** → **Full (strict)** seçin. Aksi halde yönlendirme döngüsü olur.
3. **SSL/TLS → Edge Certificates** → "Always Use HTTPS" açık, "Minimum TLS Version" 1.2.
4. Vercel tarafında ayar gerekmez; middleware Cloudflare proxy'sini otomatik tanır.

### C2. Bot Fight Mode

**Security → Bots** → **Bot Fight Mode**: **On**. Ücretsiz planda vardır; bilinen kötü botları JS meydan okumasıyla keser, Googlebot gibi doğrulanmış botlara dokunmaz.

### C3. WAF özel kuralları (Security → WAF → Custom rules → Create rule)

Ücretsiz planda 5 kural hakkı var. Sırayla ekleyin:

**Kural 1 — Ülke filtresi (Block)**
Expression editor:
```
(ip.geoip.country ne "TR" and ip.geoip.country ne "DZ" and not cf.client.bot and not cf.verified_bot_category in {"Search Engine Crawler" "Search Engine Optimization" "Monitoring & Analytics" "Advertising & Marketing" "Page Preview" "Academic Research" "Security" "Accessibility" "Webhooks" "Feed Fetcher" "AI Search"})
```
Action: **Block**. (Google, Bing, Yandex, WhatsApp gibi doğrulanmış botlar `cf.client.bot` ile geçer.)

**Kural 2 — Scraper ve SEO araçları (Block)**
```
(http.user_agent contains "AhrefsBot") or (http.user_agent contains "SemrushBot") or (http.user_agent contains "MJ12bot") or (http.user_agent contains "DotBot") or (http.user_agent contains "BLEXBot") or (http.user_agent contains "DataForSeoBot") or (http.user_agent contains "PetalBot") or (http.user_agent contains "Bytespider") or (http.user_agent contains "GPTBot") or (http.user_agent contains "CCBot") or (http.user_agent contains "python-requests") or (http.user_agent contains "Go-http-client") or (http.user_agent contains "Scrapy") or (http.user_agent contains "HTTrack") or (http.user_agent eq "")
```
Action: **Block**.

**Kural 3 — Şüpheli trafiğe meydan okuma (Managed Challenge)**
```
(cf.threat_score gt 10 and not cf.client.bot) or (http.request.uri.query contains "gclid" and not cf.client.bot and cf.threat_score gt 0)
```
Action: **Managed Challenge**. Google Ads tıklamalarında (`gclid` parametresi) tehdit puanı olan her istemci doğrulamadan geçer; gerçek kullanıcı fark etmez, bot elenir.

**Kural 4 — Tarama yolları (Block)**
```
(http.request.uri.path contains "/wp-") or (http.request.uri.path contains "xmlrpc") or (http.request.uri.path contains "/.env") or (http.request.uri.path contains "/.git") or (http.request.uri.path contains "phpmyadmin") or (http.request.uri.path ends with ".php") or (http.request.method ne "GET" and http.request.method ne "HEAD" and http.request.method ne "OPTIONS")
```
Action: **Block**.

**Kural 5 — Yedek (ASN engeli)**
Saldırı hep aynı barındırma sağlayıcısından geliyorsa Security → Analytics'te ASN'yi bulun ve:
```
(ip.geoip.asnum in {12345 67890})
```
Action: **Block**. (Numara yerine gerçek ASN'leri yazın.)

### C4. Rate Limiting (Security → WAF → Rate limiting rules)

Ücretsiz planda 1 kural:
- Expression: `(http.request.uri.path ne "/robots.txt")`
- Karakteristik: IP
- Eşik: **30 istek / 10 saniye**
- Action: **Block**, süre 10 dakika

Sayfa başına yaklaşık 5-8 istek (HTML + CSS + JS + görseller) olduğundan gerçek ziyaretçi bu eşiğe ulaşmaz.

### C5. Genel ayarlar (Security → Settings)

- **Security Level:** High (saldırı yoksa Medium)
- **Challenge Passage:** 30 dakika
- **Browser Integrity Check:** On
- **Under Attack Mode:** Saldırı sırasında **On** — tüm ziyaretçilere 5 sn JS kontrolü. Cloudflare'in "Fight Mode" karşılığı budur; sağ üstteki hızlı geçişten bir tıkla açılır. Saldırı bitince kapatın, aksi halde SEO tarama hızı düşer.

### C6. Tek komutla uygulama: `scripts/cloudflare-security.mjs`

Bölüm C1–C5'teki her şeyi API üzerinden uygular; mevcut kullanıcı kurallarına dokunmaz, yalnızca "DE-" ile başlayan kendi kurallarını yazar/günceller.

1. Cloudflare → My Profile → **API Tokens** → Create Token → **Create Custom Token**.
   İzinler: Zone:Read, Zone Settings:Edit, Zone WAF:Edit, Bot Management:Edit, Firewall Services:Edit. Zone Resources: yalnızca demirelektrikankara.com.tr.
2. Çalıştırın:
   ```powershell
   $env:CF_API_TOKEN = "buraya-token"
   node scripts/cloudflare-security.mjs            # uygula
   node scripts/cloudflare-security.mjs --status   # durumu göster
   node scripts/cloudflare-security.mjs --under-attack on   # saldırı modu aç (off ile kapat)
   ```
3. İş bitince token'ı API Tokens sayfasından silebilirsiniz.

---

## D. Google Ads tarafı (tıklama sahtekârlığının asıl çözümü)

1. **Konum hedefleme:** Kampanya → Ayarlar → Konumlar → yalnızca **Türkiye** ve **Cezayir**. "Konum seçenekleri" altında **"Bulunma: hedef konumlarımdaki veya bu konumlara düzenli olarak giden kişiler"** seçin; "ilgi" seçeneğini kapatın. Bu ayar rakiplerin yurt dışı VPN üzerinden tıklamasını Google tarafında engeller.
2. **IP hariç tutma:** Kampanya → Ayarlar → Ek ayarlar → **IP hariç tutma**. Vercel Firewall ya da Cloudflare Analytics'te tekrar eden IP'leri buraya girin (500 IP'ye kadar). Rakibin ofis IP'sini biliyorsanız ekleyin.
3. **Geçersiz tıklama raporu:** Raporlar → Önceden tanımlanmış raporlar → **Geçersiz tıklamalar**. Google otomatik filtreler ve ücret almaz; şüpheli artışlarda **Google Ads → Yardım → Geçersiz tıklama incelemesi** formuyla iade isteyin.
4. **Zamanlama ve cihaz:** Rakip tıklamaları genellikle mesai saatlerinde ve masaüstünden gelir. Reklam programı ve cihaz teklif ayarlamalarıyla etkiyi azaltabilirsiniz.
5. **Tıklama koruma servisi:** Sürekli sorun varsa ClickCease / ClickGUARD gibi araçlar IP'leri otomatik hariç tutar.
6. **Dönüşüm takibi:** Telefon tıklaması ve WhatsApp dönüşümlerini ölçün; sahte tıklamalar dönüşümsüz kalır ve raporda ayrışır.

---

## E. Kontrol listesi

- [ ] Vercel: ortam değişkenleri tanımlı (`FIGHT_MODE_SECRET` rastgele), Firewall ülke kuralı açık
- [ ] Cloudflare: proxy turuncu, SSL Full (strict), Bot Fight Mode açık, WAF kuralları 1-4 girildi, Rate limiting açık
- [ ] Vercel: `BEHIND_CLOUDFLARE=1` (proxy açıldıysa)
- [ ] Google Ads: konum "bulunma" modunda TR+DZ, IP hariç tutma listesi oluşturuldu
- [ ] Test: https://securityheaders.com ve yurt dışı VPN ile 403 kontrolü
- [ ] Search Console'da tarama hatası yok (Googlebot geçebiliyor)

## F. Acil durum

| Durum | Yapılacak |
| --- | --- |
| Ani bot saldırısı | Vercel `FIGHT_MODE=1` + Redeploy; Cloudflare Under Attack Mode On |
| Site gerçek müşteriye açılmıyor | Vercel `SECURITY_MODE=off` + Redeploy, sonra nedenini bul |
| Googlebot engellenmiş görünüyor | Search Console → URL denetimi → canlı test; middleware GOOD_BOTS listesini kontrol et |
| Yeni ülkeden müşteri | `ALLOWED_COUNTRIES` listesine kodu ekle |
