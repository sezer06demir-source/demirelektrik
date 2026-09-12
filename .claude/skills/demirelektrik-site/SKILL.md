---
name: demirelektrik-site
description: Demir Elektrik (Sincan/Ankara elektrikçi) Astro sitesinde çalışma rehberi. Yeni hizmet, ilçe, mahalle sayfası ekleme; içerik/SEO kuralları; güvenlik katmanlarına (middleware, Cloudflare, Vercel Firewall) dokunurken uyulacak kurallar; build, test, push ve deploy doğrulama akışı. Bu depoda herhangi bir geliştirme, içerik, SEO, deploy veya güvenlik işi istendiğinde kullan.
---

# Demir Elektrik sitesi — çalışma rehberi

Astro 5 statik site (`output: 'static'`, `build.format: 'file'`, `trailingSlash: 'never'`), Vercel'de barındırılır, Cloudflare proxy öndedir. Canlı: https://www.demirelektrikankara.com.tr — depo: https://github.com/sezer06demir-source/demirelektrik (`origin`, dal `main`). Push yalnızca bu depoya; `old-origin` (hurdler2) kullanılmaz.

## Proje haritası

| Ne | Nerede |
| --- | --- |
| Site geneli bilgiler (telefon, adres, saatler, öne çıkanlar, sayaçlar) | `src/data/site.ts` |
| Canonical/sitemap adresi | `src/data/site-url.mjs` |
| Hizmetler (12 kayıt, `/hizmetler/<slug>`) | `src/data/services.ts` |
| İlçe / semt sayfaları (`/hizmet-bolgeleri/<slug>`) | `src/data/districts.ts` (`content` dolu olanlar sayfa üretir) |
| Mahalle sayfaları (`/hizmet-bolgeleri/<ilce>/<mahalle>`) | `src/data/neighborhoods/<ilce>.ts` + `index.ts` |
| Projeler galerisi (görsel/video) | `src/data/projects.ts`, `public/images/projects`, `public/videos/projects` |
| Sayfa şablonları | `src/pages/**` (`[slug].astro`, `[district]/[slug].astro`) |
| Düzen, header, footer, IP çubuğu | `src/layouts/BaseLayout.astro`, `src/components/{Header,Footer,IpBar}.astro` |
| Türkçe ek yardımcıları | `src/utils/tr.ts` (`locative()` → "Sincan'da", "Yenikent'te") |
| SEO şema yardımcıları | `src/utils/seo.ts` |
| Erişim filtresi (Vercel Edge) | `middleware.ts` (kök) |
| Güvenlik başlıkları, yönlendirme, cache | `vercel.json` |
| Güvenlik rehberi ve Cloudflare betiği | `SECURITY.md`, `scripts/cloudflare-security.mjs` |
| Yayınlama rehberi | `DEPLOY.md` |

## Sık işler

**Yeni hizmet bölgesi (ilçe/semt):** `src/data/districts.ts` içine `content` dolu kayıt ekle (semt için `type: 'semt', parent: '<İlçe>'`). İyelik ekli adlarda `locative` ver (örn. `"Gölbaşı'nda"`). Footer'da görünmesi için `src/components/Footer.astro` içindeki isim listesine ekle. Sayfa, sitemap ve bağlantılar otomatik.

**Yeni mahalle sayfası:** İlgili `src/data/neighborhoods/<ilce>.ts` dizisine `Neighborhood` kaydı ekle (tip: `types.ts`). Yeni ilçe için yeni dosya + `index.ts` listesine ekle. İlçe sayfasındaki "Mahalle Mahalle Elektrikçi" kartları ve kardeş bağlantılar otomatik.

**İçerik kuralları:** Her sayfa özgün olsun; aynı cümle iki sayfada tekrar etmesin. "Ücretsiz keşif", "garanti", "7/24" gibi doğrulanmamış vaat yazma ("keşif sonrası net fiyat" kullanılabilir). Uydurma cadde/site adı yazma. Tecrübe ifadesi **30+ yıl**. Telefon `0506 254 76 78`, saat 08:00–23:00. `highlightedServices` yalnızca `services.ts`'deki slug'lar.

**Video/görsel ekleme:** ffmpeg (`%LOCALAPPDATA%\Microsoft\WinGet\Packages\Gyan.FFmpeg_*\ffmpeg-*\bin\ffmpeg.exe`) ile `-vf scale=-2:1280 -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart`; kapak `-ss 1.5 -frames:v 1 -c:v libwebp -quality 80`. 20 MB üstü dosya push etme.

## Güvenlik katmanlarına dokunurken

- `middleware.ts` **tek dosya** kalmalı: yerel dosya import etme (Vercel edge paketleyicisi çözemez, canlı 500 verir). Değişiklikten sonra `esbuild middleware.ts --format=esm --platform=neutral` ile derleyip node'da sahte `Request`'lerle test et (TR tarayıcı → geçer, US → 403, Googlebot → geçer, curl UA → 403, `/wp-login.php` → 404, POST → 405).
- IP engellemek: `middleware.ts` içindeki `BLOCKED_IPS_STATIC` dizisine ekle; Cloudflare'e yansıtmak için `CF_API_TOKEN` ile `node scripts/cloudflare-security.mjs` (kullanıcıdan zone-kapsamlı token iste; token'ı depoya/hafızaya yazma).
- Cloudflare önde olduğu için **Vercel Firewall'da ülke/IP kuralı koyma** (herkesi engeller). Ülke/IP kuralları Cloudflare ve middleware'dedir.
- `FIGHT_MODE` üretimde sürekli açık (kullanıcı kararı). Canlı testte tarayıcı UA ile ilk istek 503 challenge döner; HTML'den `de_chk=<token>` alıp `Cookie: de_chk=<token>` ile tekrar iste.
- Ülke listesi `ALLOWED_COUNTRIES` env (varsayılan TR,DZ). Kullanıcının kendi bağlantısı Cezayir'den çıkabilir; DZ'yi kaldırma.
- Cloudflare ücretsiz plan: 5 özel WAF kuralı (hepsi dolu), 1 rate limit (40/10 sn), kural ifadesi ≤ 4096 karakter.

## Build, test, push, doğrulama

```powershell
npm run build          # 83+ sayfa, hata olmamalı
npx astro check        # 0 error
git add <dosyalar>; git commit -m "..."; git push origin main
```

Deploy durumu: `gh api repos/sezer06demir-source/demirelektrik/commits/<sha>/status --jq .state` (gh tam yolu: `C:\Program Files\GitHub CLI\gh.exe`; aktif hesap `sezer06demir-source`). Başarılı olunca canlıda doğrula:

- Sayfa: `curl -A "Mozilla/5.0 ... Chrome/128" <url>` (varsayılan curl UA 403 alır). Challenge için yukarıdaki çerez adımı.
- Ülke filtresi: check-host.net `check-http` API (TR 200, diğerleri 403).
- Cloudflare rate limit yüzünden ardışık testlerde 429 gelebilir; 15–20 sn bekle.

Her tamamlanan işten sonra kullanıcı hafızasındaki ilerleme günlüğünü güncelle (tarih, ne değişti, commit, deploy, açık iş).
