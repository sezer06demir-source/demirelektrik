import { site } from '@data/site';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/** Göreli yolu tam URL'ye çevirir */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = site.url.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean === '/' ? `${base}/` : `${base}${clean}`;
}

/**
 * Canonical: sondaki slash'i ve `.html` ekini kaldırır (ana sayfa hariç).
 * build.format 'file' olduğu için derlemede pathname `.html` ile gelir; canlıda
 * cleanUrls `.html`'i temiz adrese yönlendirdiği için canonical temiz adres olmalı.
 */
export function canonicalUrl(pathname: string): string {
  const p = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '') || '/';
  return absoluteUrl(p);
}

export function buildTitle(title: string, withBrand = true): string {
  if (!withBrand) return title;
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}

const openingHours = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: site.hours.opens,
  closes: site.hours.closes,
};

/** LocalBusiness / Electrician schema — her sayfada kullanılır */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${absoluteUrl('/')}#business`,
    name: site.name,
    url: absoluteUrl('/'),
    telephone: site.phone.e164,
    image: absoluteUrl('/og-image.png'),
    logo: absoluteUrl('/icons/icon-512.png'),
    description: site.description,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.street}, ${site.address.semt}`,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.countryCode,
    },
    // Önce ağırlık verilen bölgeler, sonra Ankara geneli (yapay zeka ve yerel arama için hizmet alanı).
    areaServed: [
      ...['Sincan', 'Yenikent', 'Etimesgut', 'Eryaman', 'Elvankent', 'Bağlıca', 'Törekent'].map((name) => ({
        '@type': 'Place',
        name: `${name}, Ankara`,
      })),
      ...['Yenimahalle', 'Batıkent', 'Çankaya', 'Keçiören', 'Mamak', 'Altındağ', 'Gölbaşı', 'Pursaklar', 'Kahramankazan', 'Polatlı'].map(
        (name) => ({ '@type': 'AdministrativeArea', name: `${name}, Ankara` }),
      ),
      { '@type': 'City', name: 'Ankara' },
    ],
    knowsAbout: [
      'Elektrik arıza tespiti ve onarımı',
      'Kaçak akım rölesi',
      'Sigorta panosu montajı ve yenileme',
      'Ev, villa, bina ve mağaza elektrik tesisatı',
      'Fabrika elektriği ve kumanda panoları',
      'İş makinesi elektrik otomasyonu',
      'Avize, spot ve LED aydınlatma montajı',
      'Topraklama',
    ],
    openingHoursSpecification: [openingHours],
    sameAs: [site.maps.placeHref, `https://wa.me/${site.whatsapp.number}`],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone.e164,
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    name: site.name,
    url: absoluteUrl('/'),
    inLanguage: 'tr-TR',
    publisher: { '@id': `${absoluteUrl('/')}#business` },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; areaName?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { '@id': `${absoluteUrl('/')}#business` },
    areaServed: { '@type': 'City', name: opts.areaName ?? 'Ankara' },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: site.phone.e164 },
    },
  };
}
