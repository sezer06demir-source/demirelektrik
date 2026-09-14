/**
 * Projeler / uygulamalar galerisi.
 *
 * Gerçek iş fotoğrafları geldiğinde:
 *  1. Fotoğrafı `public/images/projects/` altına WebP olarak koy (önerilen: 1200x900).
 *  2. Aşağıya yeni bir kayıt ekle (ya da mevcut placeholder kaydı düzenle).
 *  3. `placeholder: false` yap.
 *
 * `placeholder: true` olan kayıtlar galeride "Örnek görsel" etiketiyle gösterilir;
 * böylece ziyaretçiye gerçek proje fotoğrafı izlenimi verilmez.
 *
 * Video eklemek için:
 *  1. Videoyu `public/videos/projects/` altına MP4 (H.264) olarak koy; önerilen en fazla 20 MB.
 *  2. İstersen kapak görselini `public/images/projects/` altına koy ve `image` alanına yaz.
 *     Kapak verilmezse tarayıcı videonun ilk karesini gösterir.
 *  3. Kayda `video: '/videos/projects/dosya.mp4'` ekle. Kart üzerinde oynat simgesi çıkar,
 *     lightbox'ta video kontrollerle oynatılır.
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
    id: 'p-pano-ornek-1',
    title: 'Sigorta ve Dağıtım Panosu',
    category: 'pano',
    image: '/images/projects/pano-ornek-1.webp',
    alt: 'Renk kodlu kablolarla düzenlenmiş sigorta ve dağıtım panosu örnek görseli',
    placeholder: true,
  },
  {
    id: 'p-pano-ornek-2',
    title: 'Pano Bakımı ve Kontrolü',
    category: 'pano',
    image: '/images/projects/pano-ornek-2.webp',
    alt: 'Sigorta panosunda ölçüm ve bakım yapılan örnek görsel',
    placeholder: true,
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
    id: 'p-led-2',
    title: 'Merdiven Basamak LED Aydınlatma',
    category: 'led',
    image: '/images/projects/basamak-led-1.webp',
    alt: 'Ahşap merdiven basamaklarına ve duvar kenarına uygulanmış gizli LED basamak aydınlatması',
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
    id: 'p-aydinlatma-2',
    title: 'Kafe Dekoratif Aydınlatma',
    category: 'aydinlatma',
    image: '/images/projects/kafe-aydinlatma-1.webp',
    alt: 'Kafe tavanına dekoratif sarkıt ve lastik gövdeli aydınlatma armatürlerinin montajı',
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
    id: 'p-tesisat-1',
    title: 'Elektrik Tesisatı Uygulaması',
    category: 'tesisat',
    image: '/images/projects/placeholder-tesisat.svg',
    alt: 'Elektrik tesisatı uygulaması için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-fabrika-1',
    title: 'Fabrika Elektrik Altyapısı',
    category: 'fabrika',
    image: '/images/projects/placeholder-fabrika.svg',
    alt: 'Fabrika elektrik altyapısı için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-is-makinesi-1',
    title: 'İş Makinesi Elektrik Sistemi',
    category: 'is-makinesi',
    image: '/images/projects/placeholder-is-makinesi.svg',
    alt: 'İş makinesi elektrik sistemi için örnek görsel',
    placeholder: true,
  },
];

export function getCategoryLabel(key: ProjectCategory): string {
  return projectCategories.find((c) => c.key === key)?.label ?? key;
}
