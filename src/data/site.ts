import { SITE_URL } from './site-url.mjs';

/**
 * Firma bilgileri — tek kaynak.
 * Telefon, adres ve çalışma saatleri sitenin her yerinde buradan okunur.
 */
export const site = {
  name: 'Demir Elektrik',
  legalName: 'Demir Elektrik',
  url: SITE_URL,
  tagline: 'Ankara Elektrikçi ve Elektrik Servisi',
  description:
    'Demir Elektrik; Ankara genelinde yetkili, ustalık ve usta öğreticilik belgeli elektrikçi. Elektrik arıza, ev, villa, bina, mağaza ve fabrika elektrik tesisatı, pano, otomasyon, LED, spot ve avize montajı hizmetleri sunmaktadır. Tel: 0506 254 76 78.',

  phone: {
    display: '0506 254 76 78',
    href: 'tel:+905062547678',
    e164: '+905062547678',
    international: '+90 506 254 76 78',
  },

  whatsapp: {
    number: '905062547678',
    message: 'Merhaba Demir Elektrik, elektrik hizmeti hakkında bilgi almak istiyorum.',
    get href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },

  address: {
    street: 'Menderes Mahallesi, Alparslan Caddesi No:24',
    neighborhood: 'Menderes Mahallesi',
    semt: 'Yenikent',
    line1: 'Alparslan Caddesi No:24',
    district: 'Sincan',
    city: 'Ankara',
    country: 'Türkiye',
    countryCode: 'TR',
    full: 'Menderes Mahallesi, Alparslan Caddesi No:24, Yenikent, Sincan / Ankara',
  },

  hours: {
    display: '08:00 – 23:00',
    opens: '08:00',
    closes: '23:00',
    daysText: 'Her gün',
  },

  experienceYears: 30,
  serviceArea: 'Ankara geneli ve tüm ilçeler',
  districtCount: 25,

  maps: {
    /** Google İşletme Profili — müşteriye gönderilen yorum bağlantısı (kısa adres: /yorum) */
    reviewHref: 'https://g.page/r/Cbwpl4e7j6dbEBM/review',
    /** Google Haritalar işletme kaydı (CID) */
    placeHref: 'https://maps.google.com/?cid=6604405414158608828',
    get directionsHref() {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        'Menderes Mahallesi, Alparslan Caddesi No:24, Yenikent, Sincan, Ankara',
      )}`;
    },
    get embedSrc() {
      return `https://www.google.com/maps?q=${encodeURIComponent(
        'Menderes Mahallesi Alparslan Caddesi No:24 Yenikent Sincan Ankara',
      )}&output=embed&z=15&hl=tr`;
    },
  },
} as const;

export const nav = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetlerimiz', href: '/hizmetler' },
  { label: 'Kurumsal', href: '/hakkimizda' },
  { label: 'Hizmet Bölgeleri', href: '/hizmet-bolgeleri' },
  { label: 'Projelerimiz', href: '/projeler' },
  { label: 'Rehber', href: '/rehber' },
  { label: 'Sık Sorulan Sorular', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

export const trustBadges = [
  { icon: 'award', title: '30+ Yıllık Tecrübe', text: 'Konut ve endüstriyel elektrik işlerinde' },
  { icon: 'map-pin', title: 'Ankara Geneli Hizmet', text: 'Sincan merkezli, tüm ilçelere' },
  { icon: 'clock', title: '08:00 – 23:00 Hizmet', text: 'Haftanın her günü' },
  { icon: 'shield-check', title: 'Yetkili Elektrikçi', text: 'Ustalık ve usta öğreticilik belgeli' },
] as const;

export const whyUs = [
  {
    icon: 'award',
    title: '30+ Yıllık Tecrübe',
    text: 'Elektrik sektöründe 30 yılı aşkın deneyimimizle farklı ölçeklerde konut ve endüstriyel elektrik projelerinde hizmet veriyoruz.',
  },
  {
    icon: 'map-pin',
    title: 'Ankara Geneli Hizmet',
    text: "Sincan merkezli olarak Ankara'nın tüm ilçelerine elektrik hizmeti sunuyoruz.",
  },
  {
    icon: 'layers',
    title: 'Geniş Hizmet Alanı',
    text: 'Konut elektrik tesisatından fabrika panolarına ve iş makinesi otomasyonlarına kadar geniş bir hizmet alanına sahibiz.',
  },
  {
    icon: 'zap',
    title: 'Hızlı Müdahale',
    text: 'Elektrik arızalarında mümkün olan en hızlı şekilde müşterilerimize destek sağlamayı amaçlıyoruz.',
  },
  {
    icon: 'shield-check',
    title: 'Profesyonel Uygulama',
    text: 'Elektrik tesisatı ve montaj uygulamalarında güvenlik ve işçilik kalitesi önceliğimizdir.',
  },
] as const;

export const processSteps = [
  { step: 1, icon: 'phone', title: 'İletişim', text: 'Telefon veya WhatsApp üzerinden bize ulaşın.' },
  { step: 2, icon: 'clipboard-list', title: 'İhtiyaç Analizi', text: 'Arıza veya yapılacak elektrik işi hakkında gerekli bilgileri alıyoruz.' },
  { step: 3, icon: 'wrench', title: 'Uygulama', text: 'Gerekli elektrik ve montaj işlemleri profesyonel şekilde uygulanır.' },
  { step: 4, icon: 'check-circle', title: 'Kontrol', text: 'İşlem sonrası sistem kontrol edilerek kullanıma hazır hale getirilir.' },
] as const;

export const stats = [
  { value: 30, suffix: '+', label: 'Yıllık Tecrübe', animate: true },
  { value: 25, suffix: '', label: 'Ankara İlçesinde Hizmet', animate: true },
  { value: '08:00 – 23:00', suffix: '', label: 'Çalışma Saatleri', animate: false },
  { value: 100, prefix: '%', suffix: '', label: 'Müşteri Odaklı Hizmet', animate: true },
] as const;

export const areas = [
  { icon: 'house', title: 'Evler' },
  { icon: 'home', title: 'Villalar' },
  { icon: 'building', title: 'Apartmanlar' },
  { icon: 'store', title: 'Mağazalar' },
  { icon: 'factory', title: 'Fabrikalar' },
  { icon: 'hard-hat', title: 'Şantiyeler' },
  { icon: 'tractor', title: 'İş Makineleri' },
  { icon: 'building-2', title: 'Ofisler' },
  { icon: 'briefcase', title: 'İş Yerleri' },
] as const;

export const industrialServices = [
  'Elektrik pano montajı',
  'Kumanda panoları',
  'Motor bağlantıları',
  'Kontaktör sistemleri',
  'Röle sistemleri',
  'Sensör bağlantıları',
  'Elektrik arızaları',
  'Kablo tesisatı',
  'Makine elektrik bağlantıları',
  'Endüstriyel otomasyon',
  'Pano revizyonları',
] as const;

export const machineryScope = [
  'Elektrik arıza tespiti',
  'Kablo tesisatı',
  'Röle sistemleri',
  'Kontaktör sistemleri',
  'Sensör bağlantıları',
  'Kontrol üniteleri',
  'Elektrik panoları',
  'Otomasyon sistemleri',
] as const;

export const lightingCards = [
  {
    slug: 'led-aydinlatma',
    icon: 'lightbulb',
    title: 'LED Aydınlatma',
    text: 'Ev, villa, mağaza, ofis ve ticari alanlar için dekoratif ve fonksiyonel LED aydınlatma uygulamaları.',
    image: '/images/lighting-led.svg',
  },
  {
    slug: 'spot-montaji',
    icon: 'sun',
    title: 'Spot Aydınlatma',
    text: 'Gömme spot, ray spot ve dekoratif spot sistemlerinin elektrik tesisatı ve montajı.',
    image: '/images/lighting-spot.svg',
  },
  {
    slug: 'avize-montaji',
    icon: 'lamp',
    title: 'Avize Montajı',
    text: 'Standart ve dekoratif avizelerin güvenli elektrik bağlantısı ve montajı.',
    image: '/images/lighting-avize.svg',
  },
] as const;

export const formServiceOptions = [
  'Elektrik Arıza',
  'Ev Elektrik Tesisatı',
  'Villa Elektrik Tesisatı',
  'Bina Elektrik Tesisatı',
  'Mağaza Elektrik Tesisatı',
  'Fabrika Elektrik',
  'Elektrik Pano',
  'İş Makinesi Elektrik',
  'LED Aydınlatma',
  'Spot Montajı',
  'Avize Montajı',
  'Diğer',
] as const;
