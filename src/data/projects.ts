/**
 * Projeler / uygulamalar galerisi — tümü gerçek iş fotoğrafları.
 *
 * Yeni fotoğraf eklemek için:
 *  1. Fotoğrafı `public/images/projects/` altına WebP olarak koy (önerilen: 1400px, q80).
 *  2. Aşağıya yeni bir kayıt ekle, uygun `category` seç, `placeholder: false` bırak.
 *
 * Video eklemek için:
 *  1. Videoyu `public/videos/projects/` altına MP4 (H.264) olarak koy; önerilen en fazla 20 MB.
 *  2. İstersen kapak görselini `public/images/projects/` altına koy ve `image` alanına yaz.
 *  3. Kayda `video: '/videos/projects/dosya.mp4'` ekle. Kart üzerinde oynat simgesi çıkar,
 *     lightbox'ta video kontrollerle oynatılır.
 *
 * `placeholder: true` kayıtlar "Örnek görsel" etiketiyle gösterilir; şu an kullanılmıyor.
 */

export const projectCategories = [
  { key: 'tesisat', label: 'Elektrik Tesisatı' },
  { key: 'pano', label: 'Elektrik Panoları' },
  { key: 'fabrika', label: 'Fabrika Elektrik' },
  { key: 'aydinlatma', label: 'Aydınlatma' },
  { key: 'led', label: 'LED Uygulamaları' },
  { key: 'is-makinesi', label: 'İş Makineleri' },
  { key: 'villa', label: 'Villa Projeleri' },
  { key: 'magaza', label: 'Mağaza Projeleri' },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]['key'];

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  /** public/ altındaki görsel yolu. Video kayıtlarında kapak (poster) olarak kullanılır, isteğe bağlı. */
  image?: string;
  /** Lightbox'ta gösterilecek büyük görsel; boşsa image kullanılır */
  imageLarge?: string;
  /** public/ altındaki MP4 yolu. Verilirse kart ve lightbox video olarak çalışır. */
  video?: string;
  alt: string;
  /** İlçe / bölge (isteğe bağlı) */
  location?: string;
  placeholder: boolean;
}

export const projects: Project[] = [
  {
    id: 'p-magaza-1',
    title: 'Mağaza Ray Spot Aydınlatma',
    category: 'magaza',
    image: '/images/projects/magaza-spot-1.webp',
    alt: 'Mağaza tavanına ray spot ve dekoratif sarkıt aydınlatma sistemi montajı',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-villa-1',
    title: 'Salon TV Ünitesi LED Aydınlatma',
    category: 'villa',
    image: '/images/projects/villa-led-1.webp',
    alt: 'Villa salonunda TV ünitesi arkası ve tavan gizli LED aydınlatma uygulaması',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-pano-1',
    title: 'Kumanda ve Sigorta Panosu',
    category: 'pano',
    image: '/images/projects/pano-1.webp',
    alt: 'İçinde sayaç, sigortalar, parafudr ve kontrol rölesi bulunan düzenli kablolanmış elektrik kumanda panosu',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-led-1',
    title: 'Lineer LED Tavan Aydınlatma',
    category: 'led',
    image: '/images/projects/lineer-led-1.webp',
    alt: 'Odaya geometrik lineer LED hatlarla tasarlanmış modern tavan aydınlatması',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-fabrika-1',
    title: 'Kontaktörlü Kumanda Panosu',
    category: 'fabrika',
    image: '/images/projects/fabrika-kumanda-1.webp',
    alt: 'Kontaktör, röle ve kablolamayla bench üzerinde hazırlanan motor kumanda panosu',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-aydinlatma-1',
    title: 'Mutfak Tezgah Altı LED Aydınlatma',
    category: 'aydinlatma',
    image: '/images/projects/aydinlatma-1.webp',
    video: '/videos/projects/aydinlatma-1.mp4',
    alt: 'Demir Elektrik teknisyeni mutfak dolabı altına LED şerit aydınlatma monte ediyor',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-magaza-2',
    title: 'Market Aydınlatma ve Tavan Uygulaması',
    category: 'magaza',
    image: '/images/projects/magaza-market-1.webp',
    alt: 'Market içinde ahşap petek tavan ve aydınlatma uygulaması',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-pano-2',
    title: 'Röle ve Kumanda Kutusu',
    category: 'pano',
    image: '/images/projects/pano-kumanda-kutusu-1.webp',
    alt: 'Kontaktör ve rölelerle kablolanan kumanda kutusu',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-is-makinesi-1',
    title: 'İş Makinesi Joystick Kumanda Paneli',
    category: 'is-makinesi',
    image: '/images/projects/is-makinesi-joystick-1.webp',
    alt: 'İş makinesi için joystick kollu ve butonlu kumanda paneli',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-led-2',
    title: 'Merdiven Basamak LED Aydınlatma',
    category: 'led',
    image: '/images/projects/basamak-led-1.webp',
    alt: 'Ahşap merdiven basamaklarına ve duvar kenarına uygulanmış gizli LED basamak aydınlatması',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-aydinlatma-2',
    title: 'Kafe Dekoratif Aydınlatma',
    category: 'aydinlatma',
    image: '/images/projects/kafe-aydinlatma-1.webp',
    alt: 'Kafe tavanına dekoratif sarkıt ve lastik gövdeli aydınlatma armatürlerinin montajı',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-fabrika-2',
    title: 'Otomasyon ve Röle Panosu',
    category: 'fabrika',
    image: '/images/projects/fabrika-otomasyon-1.webp',
    alt: 'Çok sayıda röle, terminal ve güç kaynağı bulunan otomasyon kumanda panosu',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-tesisat-1',
    title: 'Tavan Armatür ve Tesisat Montajı',
    category: 'tesisat',
    image: '/images/projects/tesisat-tavan-1.webp',
    alt: 'Geniş bir mekânın tavanına lineer armatür ve elektrik tesisatı montajı',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-aydinlatma-3',
    title: 'Gizli LED Bant Tavan Aydınlatma',
    category: 'aydinlatma',
    image: '/images/projects/gizli-led-1.webp',
    alt: 'Salon tavanına asma tavan ve gizli LED bant aydınlatma uygulaması',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-fabrika-3',
    title: 'Kumanda Panosu İç Bağlantısı',
    category: 'fabrika',
    image: '/images/projects/fabrika-pano-ic-1.webp',
    alt: 'Sigortalar, röleler ve kontrol kartıyla kablolanan kumanda panosu iç bağlantısı',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-pano-3',
    title: 'Ev Tipi Sigorta Panosu',
    category: 'pano',
    image: '/images/projects/pano-ev-1.webp',
    alt: 'Kaçak akım röleleri ve sigortalarla düzenli kurulmuş ev tipi dağıtım panosu',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-fabrika-4',
    title: 'Kumanda Panosu Kablolama İşçiliği',
    category: 'fabrika',
    image: '/images/projects/fabrika-kablolama-1.webp',
    alt: 'Saha tipi kumanda panosunun röle ve kablolama işçiliği',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-pano-4',
    title: 'Voltaj Korumalı Sigorta Panosu',
    category: 'pano',
    image: '/images/projects/pano-schneider-1.webp',
    alt: 'Voltaj koruma rölesi ve sigortalarla kurulmuş dağıtım panosu',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-pano-5',
    title: 'Sigorta ve Dağıtım Panosu',
    category: 'pano',
    image: '/images/projects/pano-2.webp',
    alt: 'Sigortalar ve düzenli kablolamayla hazırlanmış dağıtım panosu',
    location: 'Ankara',
    placeholder: false,
  },
];

export function getCategoryLabel(key: ProjectCategory): string {
  return projectCategories.find((c) => c.key === key)?.label ?? key;
}
