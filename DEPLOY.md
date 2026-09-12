# Yayınlama Rehberi

Site statik HTML üretir. İki seçenek var: **Vercel** (önerilen, GitHub'a her push'ta otomatik yayın) veya **Güzel Hosting cPanel** (zip yükleme).

---

# A. Vercel ile Yayınlama

Depo: `https://github.com/sezer06demir-source/demirelektrik`

## 1. Projeyi Vercel'e bağla (bir kez)

1. https://vercel.com → **Add New → Project** → GitHub hesabını bağla → `demirelektrik` deposunu **Import** et.
2. Ayarlar otomatik gelir (`vercel.json` içinde tanımlı): Framework **Astro**, Build `npm run build`, Output `dist`. Hiçbir şeyi değiştirmeden **Deploy**'a bas.
3. 1–2 dakika içinde `*.vercel.app` adresinde site yayında olur.

## 2. Alan adını bağla

1. Vercel → Project → **Settings → Domains** → `www.demirelektrikankara.com.tr` ekle, ardından `demirelektrikankara.com.tr` ekle.
2. Vercel'in verdiği DNS kayıtlarını alan adının DNS yönetimine (Güzel Hosting'den aldıysan oradaki DNS paneline) gir:
   - `www` için **CNAME** → `cname.vercel-dns.com`
   - kök alan adı için **A** → `76.76.21.21`
3. Vercel'de her iki alan adı da "Valid Configuration" olunca SSL otomatik kurulur. `vercel.json` içindeki yönlendirme, www'suz istekleri `https://www.demirelektrikankara.com.tr` adresine 301 ile taşır.

## 3. Güncelleme yayınlama

```powershell
git add -A
git commit -m "İçerik güncellemesi"
git push
```

Her push'ta Vercel otomatik build alır ve yayınlar. Pull request açarsan önizleme adresi üretir.

## Vercel kontrol listesi

- `https://www.demirelektrikankara.com.tr/hizmetler/elektrik-ariza` açılmalı (cleanUrls)
- `.../hizmetler/elektrik-ariza.html` → uzantısız adrese yönlenmeli
- `https://demirelektrikankara.com.tr/` → www'lu adrese yönlenmeli
- `.../olmayan-sayfa` → tasarımlı 404
- `.../sitemap-index.xml` → XML

---

# B. Güzel Hosting (cPanel) ile Yayınlama

Node.js barındırmaya gerek yoktur. Güzel Hosting'in standart Linux (cPanel) paketleri yeterlidir.

## 0. Bir kez yapılacak hazırlık

1. Alan adını `src/data/site-url.mjs` içine yaz (örn. `https://www.ornekalanadi.com`).
2. `public/robots.txt` içindeki `Sitemap:` satırını aynı alan adıyla güncelle.
3. `public/.htaccess` içindeki **2) www yönlendirmesi** bloğunda alan adını değiştir. Alan adını www'suz kullanacaksan bloğu sil ya da ters çevir. Yönlendirme ile `site-url.mjs` aynı biçimde olmalı; aksi halde Google iki farklı adres görür.

## 1. Paketi üret

Proje klasöründe:

```powershell
npm run package
```

Bu komut build alır ve proje kökünde `demir-elektrik-site.zip` oluşturur. Zip'in içinde `index.html`, `.htaccess`, `sitemap-index.xml`, `_astro/` ve diğer dosyalar bulunur.

## 2. cPanel'e yükle

1. Güzel Hosting müşteri panelinden cPanel'e gir.
2. **Dosya Yöneticisi (File Manager)** → `public_html` klasörünü aç.
3. `public_html` içinde hosting'in koyduğu varsayılan `index.html` / `default.html` gibi dosyalar varsa sil.
4. Sağ üstteki **Ayarlar**'dan "Gizli dosyaları göster (dotfiles)" seçeneğini aç; `.htaccess` dosyasını görebilmek için gerekir.
5. **Yükle (Upload)** ile `demir-elektrik-site.zip` dosyasını `public_html` içine yükle.
6. Zip'e sağ tıkla → **Extract** → hedef `/public_html` olsun.
7. Zip dosyasını sil.

Alternatif: FileZilla gibi bir FTP istemcisiyle `dist/` klasörünün **içeriğini** (klasörün kendisini değil) `public_html` içine kopyala. `.htaccess` dosyasının da gittiğinden emin ol.

## 3. SSL'i aç

cPanel → **SSL/TLS Status** → alan adını seç → **Run AutoSSL**. Birkaç dakika içinde ücretsiz Let's Encrypt sertifikası kurulur. Sertifika kurulmadan önce `.htaccess` içindeki HTTPS yönlendirmesi tarayıcıda sertifika uyarısı gösterebilir; bu normaldir, sertifika gelince düzelir.

## 4. Kontrol listesi

Tarayıcıda şu adresleri aç:

- `https://alanadi.com/` → ana sayfa
- `https://alanadi.com/hizmetler/elektrik-ariza` → uzantısız adres çalışmalı
- `https://alanadi.com/hizmetler/elektrik-ariza.html` → uzantısız adrese yönlenmeli
- `https://alanadi.com/olmayan-sayfa` → tasarımlı 404 sayfası
- `https://alanadi.com/sitemap-index.xml` → XML görünmeli
- `http://alanadi.com/` → https'e yönlenmeli

Mobilde "Hemen Ara" butonunun telefonu açtığını ve WhatsApp butonunun doğru numaraya gittiğini kontrol et.

## 5. Google'a bildir

1. **Google Search Console** → alan adını "Alan adı (Domain)" tipiyle ekle, DNS TXT kaydını Güzel Hosting DNS yönetiminden gir.
2. Search Console → **Site haritaları** → `sitemap-index.xml` gönder.
3. **Google Business Profile (İşletme Profili)** oluştur: Demir Elektrik, Menderes Mahallesi Alparslan Caddesi No:24 Sincan / Ankara, 0506 254 76 78, 08:00–23:00, kategori "Elektrikçi". Web sitesi alanına alan adını yaz. Yerel aramalarda en büyük etkiyi bu yapar.

## 6. Güncelleme yayınlama

İçerik değiştiğinde aynı adımlar: `npm run package` → zip'i `public_html` içine yükle → Extract (üzerine yazmayı onayla). Eski `_astro/` klasöründeki kullanılmayan hash'li dosyalar birikirse `_astro` klasörünü silip yeniden çıkarabilirsin.

## Sık karşılaşılan sorunlar

| Belirti | Neden | Çözüm |
| --- | --- | --- |
| Alt sayfalar 404 veriyor, ana sayfa açılıyor | `.htaccess` yüklenmemiş | Dotfiles görünürlüğünü aç, `.htaccess` dosyasını `public_html` köküne koy |
| Sayfa ham HTML gibi görünüyor, stil yok | `_astro/` klasörü eksik | Zip'i yeniden çıkar; `public_html/_astro` var mı bak |
| "Too many redirects" | www yönlendirmesi ile cPanel'deki yönlendirme çakışıyor | cPanel → Redirects'te tanımlı yönlendirmeleri kaldır ya da `.htaccess` 2) bloğunu sil |
| Harita görünmüyor | Google Maps embed engelli | Nadir; tarayıcı reklam engelleyicisini kontrol et |
