/**
 * Mahalle bazlı hizmet bölgesi sayfaları (/hizmet-bolgeleri/<ilce>/<mahalle>).
 *
 * Her mahalle kaydı, bağlı olduğu ilçe sayfasının altında özgün içerikli bir
 * landing page üretir. İçerikler ilçe sayfasından ve birbirinden farklı olmalı;
 * aynı cümlelerin kopyalanması duplicate content sayılır.
 */

export interface NeighborhoodContent {
  /** H1 — örn. "Törekent Elektrikçi" */
  h1: string;
  /** Hero alt başlığı, tek cümle */
  subtitle: string;
  /** 2–3 özgün giriş paragrafı */
  intro: string[];
  /** Bu mahallede öne çıkan 4 hizmet (service slug'ları) */
  highlightedServices: string[];
  /** Mahalleye özgü 3 durum / sık gelen talep */
  localNotes: { title: string; text: string }[];
  /** Mahalledeki cadde, site, sanayi ve önemli noktalar (5–9 adet, yerel SEO) */
  landmarks: string[];
  /** 3 soru-cevap */
  faq: { q: string; a: string }[];
  /** 60 karakter civarı, "| Demir Elektrik" ile biter */
  seoTitle: string;
  /** 150–160 karakter, telefon numarasıyla biter */
  seoDescription: string;
  /** Sayfa altındaki arama ifadeleri bloğuna eklenecek bölgeye özgü ifadeler */
  seoTags?: string[];
}

export interface Neighborhood {
  /** Mahalle adı — örn. "Törekent" */
  name: string;
  /** URL parçası — örn. "torekent-elektrikci" */
  slug: string;
  /** Bağlı olduğu ilçe sayfasının slug'ı — örn. "sincan-elektrikci" */
  districtSlug: string;
  /** Bulunma hâli özel biçimi (iyelik ekli adlar için, örn. "Pınarbaşı'nda"). Boşsa kural ile üretilir. */
  locative?: string;
  content: NeighborhoodContent;
}
