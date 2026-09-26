/**
 * Ankara hizmet bölgeleri.
 *
 * - `content` alanı dolu olan bölgeler için /hizmet-bolgeleri/<slug> altında özgün
 *   bir SEO landing page üretilir.
 * - `content` alanı boş olan ilçeler yalnızca etiket olarak listelenir; böylece
 *   aynı metnin kopyalanmasıyla oluşacak duplicate content önlenmiş olur.
 * - Yeni bir landing page açmak için ilgili kayda `content` eklemen yeterlidir.
 */

export type DistrictType = 'ilce' | 'semt';

export interface DistrictContent {
  /** H1 — örn. "Sincan Elektrikçi" */
  h1: string;
  /** Hero alt başlığı */
  subtitle: string;
  /** Özgün giriş paragrafları */
  intro: string[];
  /** Bu bölgede öne çıkan hizmetler (service slug'ları) */
  highlightedServices: string[];
  /** Bölgeye özgü durumlar / sık gelen talepler */
  localNotes: { title: string; text: string }[];
  /** Bölgedeki mahalle / semt isimleri (yerel SEO) */
  neighborhoods: string[];
  faq: { q: string; a: string }[];
  seoTitle: string;
  /** Sayfa altındaki arama ifadeleri bloğuna eklenecek bölgeye özgü ifadeler */
  seoTags?: string[];
  seoDescription: string;
}

export interface District {
  name: string;
  slug: string;
  type: DistrictType;
  /** Bağlı olduğu ilçe (semtler için) */
  parent?: string;
  featured: boolean;
  /** Bulunma hâli özel biçimi (örn. "Gölbaşı'nda"). Boşsa kural ile üretilir. */
  locative?: string;
  content?: DistrictContent;
}

export const districts: District[] = [
  // ---------------------------------------------------------------- Öne çıkan bölgeler (özgün içerikli)
  {
    name: 'Sincan',
    slug: 'sincan-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Sincan Elektrikçi',
      subtitle: 'Merkezimiz Sincan\'da. Arıza, tesisat, pano ve aydınlatma işlerinde en yakın ekip biziz.',
      intro: [
        'Demir Elektrik\'in merkezi Sincan Yenikent\'te, Menderes Mahallesi\'nde bulunuyor. Bu nedenle Sincan içindeki elektrik arızalarına ve tesisat işlerine en hızlı ulaşabildiğimiz bölge burası. Törekent, Fatih, Yenikent, Temelli ve Sincan merkezdeki konut, iş yeri ve sanayi müşterilerimize 30 yılı aşkın süredir hizmet veriyoruz.',
        'Sincan hem yoğun konut bölgeleri hem de Sincan Organize Sanayi Bölgesi ve 1. OSB ile Ankara\'nın en önemli üretim merkezlerinden biri. Bu yapı, ekibimizin bir günde hem bir dairede sigorta arızasına hem de bir fabrikada pano montajına müdahale etmesi anlamına geliyor.',
      ],
      highlightedServices: ['elektrik-ariza', 'ev-elektrik-tesisati', 'fabrika-elektrik', 'elektrik-pano-montaji'],
      localNotes: [
        {
          title: 'Sincan OSB ve sanayi tesisleri',
          text: 'Sincan Organize Sanayi Bölgesi\'ndeki atölye ve fabrikalara pano montajı, makine enerji bağlantısı ve arıza tespiti için yakınlık avantajıyla hızlı ulaşıyoruz.',
        },
        {
          title: 'Toplu konut ve yeni siteler',
          text: 'Yenikent, Törekent ve Fatih bölgelerindeki yeni sitelerde daire tesisatı, spot ve avize montajı en sık aldığımız taleplerin başında geliyor.',
        },
        {
          title: 'Eski yapılarda tesisat yenileme',
          text: 'Sincan merkezdeki eski apartmanlarda sayaç panosu, kolon hattı ve daire içi tesisat yenileme işlerini bina sakinlerini en az etkileyecek şekilde planlıyoruz.',
        },
      ],
      neighborhoods: ['Menderes', 'Törekent', 'Fatih', 'Yenikent', 'Temelli', 'Pınarbaşı', 'Osmanlı', 'Plevne', 'Akşemsettin', 'Ahievran', 'Sincan OSB'],
      faq: [
        {
          q: 'Sincan içinde arızaya ne kadar sürede geliyorsunuz?',
          a: 'Merkezimiz Sincan\'da olduğu için Sincan içindeki arızalara Ankara\'nın diğer ilçelerine kıyasla en kısa sürede ulaşıyoruz. Aradığınızda o anki yoğunluğa göre net bir süre veriyoruz.',
        },
        {
          q: 'Sincan OSB\'deki fabrikamıza pano montajı için gelir misiniz?',
          a: 'Evet. Sincan OSB ve 1. OSB\'deki tesislere pano montajı, revizyon, makine bağlantısı ve arıza tespiti için düzenli olarak hizmet veriyoruz.',
        },
      ],
      seoTitle: 'Sincan Elektrikçi – Aynı Gün Arıza Servisi, 30+ Yıl | Demir Elektrik',
      seoDescription:
        'Sincan\'da elektrik mi gitti, sigorta mı atıyor? Yenikent Menderes\'teki dükkanımızdan aynı gün geliyoruz. Arıza, pano, tesisat, avize. 08:00–23:00 ☎ 0506 254 76 78',
    },
  },
  {
    name: 'Yenikent',
    slug: 'yenikent-elektrikci',
    type: 'semt',
    parent: 'Sincan',
    featured: true,
    content: {
      h1: 'Yenikent Elektrikçi ve Elektrik Ustası',
      subtitle: 'Dükkanımız Yenikent\'te, Menderes Mahallesi Alparslan Caddesi No:24\'te. Arızaya da tesisata da başka birini değil, ustanın kendisini gönderiyoruz.',
      intro: [
        'Yenikent\'te elektrikçi arıyorsanız uzağa bakmanıza gerek yok: dükkanımız Menderes Mahallesi\'nde, Alparslan Caddesi No:24\'te. Otuz yılı aşkın süredir bu işi yapıyoruz; Yenikent\'in TOKİ dairelerini de, yeni sitelerini de, bahçeli müstakil evlerini de içeriden biliyoruz. Hangi blokta kolon hattının zayıf olduğunu, hangi evde bahçe hattının yağmurda sorun çıkardığını çoğu zaman siz telefonda anlatırken tahmin ediyoruz.',
        'Sigorta attı, kaldırıyorsunuz tutmuyor mu? Evin yarısında elektrik yok mu? Önce telefonda birkaç soru soruyoruz; bazen sorun tek bir cihazdan çıkıyor, fişten çektirip orada çözüyoruz, boşuna usta çağırmış olmuyorsunuz. Gelmek gerekiyorsa aynı gün kalkıp geliyoruz; mahalle içi olduğu için çoğu zaman uzun beklemiyorsunuz.',
        'Yenikent elektrik ustası arayanın ne istediğini biliyoruz: telefonu açan işi bilsin, gelen usta arızayı ilk seferde bulsun, iş bitince fiyat değişmesin. Bizde telefonu açan da kapınıza gelen de usta: Recep Usta ya da Sezer Usta. İkimizin de Ustalık ve Usta Öğreticilik belgesi var; Yenikent\'te de Ankara\'nın her yerinde yetkili elektrikçi olarak çalışıyoruz. Ölçü aletiyle arızayı buluyor, ne yapacağımızı ve fiyatı işe başlamadan söylüyoruz; siz "tamam" demeden kabloya el sürmüyoruz.',
      ],
      highlightedServices: ['elektrik-ariza', 'ev-elektrik-tesisati', 'villa-elektrik-tesisati', 'spot-montaji'],
      localNotes: [
        {
          title: 'Yeni site ve TOKİ daireleri',
          text: 'Yeni teslim dairede en çok şunlar geliyor: mutfağa ankastre için ayrı hat, salona klima hattı, tavanda bekleyen kablo uçlarına avize ve spot. Hepsini tek ziyarette topluyoruz ki evinizi iki kere toza boğmayalım.',
        },
        {
          title: 'Müstakil ve bahçeli evler',
          text: 'Bahçeli evde sorun çoğu zaman dışarıda başlar: su almış bahçe lambası, kapağı kırık dış priz, toprağın altından geçen eski kablo. Bahçe aydınlatmasını da dış prizleri de dış mekana uygun malzemeyle ve kaçak akım rölesinin arkasına alarak yapıyoruz.',
        },
        {
          title: 'Dükkan, depo ve atölyeler',
          text: 'Yenikent\'teki dükkan, depo, oto servis ve küçük atölyelerde üç faz hat, pano kurulumu, tabela ve vitrin aydınlatması yapıyoruz. İşinizi durdurmamak için gerekirse kapanıştan sonra ya da sabah erkenden geliyoruz.',
        },
      ],
      neighborhoods: ['Menderes', 'Yenikent Merkez', 'Yenikent TOKİ', 'Alcı', 'Yenipeçenek', 'Mülk', 'Ücret', 'Osmaniye'],
      faq: [
        {
          q: 'Yenikent\'te acil arızaya ne kadar sürede geliyorsunuz?',
          a: 'Dükkanımız Yenikent\'in içinde, Menderes\'te. Acil arızada çoğu zaman aynı gün, genelde kısa sürede kapınızdayız. Yakınsanız Alparslan Caddesi No:24\'e uğrayın, derdinizi yüz yüze konuşalım.',
        },
        {
          q: 'Yeni taşındığımız dairede priz ve aydınlatma düzenlemesi yapıyor musunuz?',
          a: 'Yaparız. Ek priz, anahtar değişimi, klima ve ankastre hattı, avize ve spot; ne varsa önce listeyi çıkarıyor, hepsini tek seferde bitiriyoruz.',
        },
        {
          q: 'Müstakil evimizin bahçe aydınlatmasını yapabilir misiniz?',
          a: 'Yaparız. Bahçe lambası, sensörlü armatür, dış priz, su motoru hattı; hepsini dış mekana uygun malzemeyle ve kaçak akım korumalı çekiyoruz.',
        },
        {
          q: 'Yenikent\'te elektrik ustası hangi saatlerde çağrılabilir?',
          a: 'Her gün sabah 08:00\'den gece 23:00\'e kadar telefonumuz açık: 0506 254 76 78. WhatsApp\'tan arızanın fotoğrafını da atabilirsiniz. Akşam eve geldiniz, elektrik yok; sabahı beklemeyin, arayın.',
        },
        {
          q: 'Yetkili ve belgeli elektrikçi misiniz?',
          a: 'Evet. Ankara genelinde yetkili elektrikçiyiz. İşlere Recep Usta ve Sezer Usta bizzat çıkıyor; ikimizin de Ustalık ve Usta Öğreticilik belgesi var. Gelen ustaya belgesini sormaktan çekinmeyin.',
        },
        {
          q: 'Fiyatı gelmeden söyleyebilir misiniz?',
          a: 'Avize takma, priz ekleme gibi belli işlerde fotoğrafa bakıp aşağı yukarı fiyat söylüyoruz. Arızada ise sebebi görmeden fiyat vermek doğru olmaz; gelip buluyoruz, fiyatı söylüyoruz, siz onaylarsanız başlıyoruz.',
        },
      ],
      seoTitle: 'Yenikent Elektrikçi ve Elektrik Ustası – Aynı Gün | Demir Elektrik',
      seoDescription:
        'Yenikent elektrikçi ve elektrik ustası, dükkanımız Yenikent Menderes\'te: sigorta atması, kaçak akım, daire-villa tesisatı, avize-spot. 08:00–23:00 ☎ 0506 254 76 78',
      seoTags: [
        'Sincan Yenikent Elektrikçi',
        'Yenikent Sincan Elektrikçi',
        'Yenikent Elektrikçi Usta',
        'Sincan Yenikent Elektrik Ustası',
        'Yenikent Menderes Elektrikçi',
        'Yenikent Alparslan Caddesi Elektrikçi',
        'Yenikent Yakınımdaki Elektrikçi',
        'Yenikent Elektrik Tamiri',
        'Yenikent Elektrik Arızası',
        'Yenikent Sigorta Atıyor',
        'Yenikent Elektrikçi Fiyatları',
        'Yenikent Ev Elektrikçisi',
        'Yenikent TOKİ Elektrikçi',
        'Yenikent Site Elektrikçisi',
        'Yenikent Avize Takma',
        'Yenikent Klima Hattı Çekimi',
        'Yenikent Bahçe Aydınlatması',
        'Yenikent Dükkan Elektrikçisi',
      ],
    },
  },
  {
    name: 'Etimesgut',
    slug: 'etimesgut-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Etimesgut Elektrikçi',
      subtitle: 'Sincan\'a komşu Etimesgut\'ta dakikalar içinde ulaşılabilir elektrik servisi.',
      intro: [
        'Etimesgut, Sincan\'daki merkezimize en yakın ilçelerden biri. Elvankent, Eryaman, Bağlıca, Göksu, Alsancak ve Etimesgut merkezdeki ev ve iş yerlerine elektrik arıza, tesisat ve aydınlatma hizmeti için kısa sürede ulaşıyoruz.',
        'Etimesgut son yıllarda hızla büyüyen, çok sayıda yeni site ve rezidansın bulunduğu bir ilçe. Yeni dairelerde spot, avize ve LED şerit montajı; daha eski bölgelerde ise tesisat yenileme ve sigorta kutusu değişimi en sık karşılaştığımız işler arasında.',
      ],
      highlightedServices: ['elektrik-ariza', 'ev-elektrik-tesisati', 'spot-montaji', 'avize-montaji'],
      localNotes: [
        {
          title: 'Yeni site ve rezidanslar',
          text: 'Bağlıca ve Göksu bölgelerindeki yeni sitelerde teslim sonrası spot, avize ve LED şerit montajı ile priz ekleme işlerinde deneyimliyiz.',
        },
        {
          title: 'Bağlıca villaları',
          text: 'Bağlıca ve Yapracık bölgesindeki müstakil ev ve villalarda bahçe aydınlatması, dış mekan hatları ve pano düzenlemeleri yapıyoruz.',
        },
        {
          title: 'Etimesgut sanayi ve iş yerleri',
          text: 'Etimesgut\'taki atölye, depo ve ticari işletmelere üç faz hat, pano ve makine bağlantısı hizmeti sunuyoruz.',
        },
      ],
      neighborhoods: ['Elvankent', 'Eryaman', 'Bağlıca', 'Göksu', 'Alsancak', 'Şeyh Şamil', 'Ahimesut', 'Yapracık', 'Süvari', 'Topçu', 'Atakent'],
      faq: [
        {
          q: 'Etimesgut Bağlıca\'daki villama bahçe aydınlatması yapabilir misiniz?',
          a: 'Evet. Bağlıca ve çevresindeki villalarda dış mekan ve bahçe aydınlatması, peyzaj LED sistemleri ve gerekli dış hat tesisatını yapıyoruz.',
        },
        {
          q: 'Etimesgut\'a akşam saatlerinde de geliyor musunuz?',
          a: 'Her gün 08:00 – 23:00 saatleri arasında hizmet veriyoruz. Etimesgut merkezimize yakın olduğu için akşam arızalarına da ulaşabiliyoruz.',
        },
      ],
      seoTitle: 'Etimesgut Elektrikçi – Elvankent, Bağlıca, Eryaman | Demir Elektrik',
      seoDescription:
        'Etimesgut elektrikçi: Elvankent, Bağlıca, Göksu ve Etimesgut merkezde elektrik arıza, ev tesisatı, spot, avize ve LED montajı. Sincan merkezli Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Eryaman',
    slug: 'eryaman-elektrikci',
    type: 'semt',
    parent: 'Etimesgut',
    featured: true,
    content: {
      h1: 'Eryaman Elektrikçi',
      subtitle: 'Eryaman\'ın toplu konut bölgelerinde daire tesisatı, arıza ve aydınlatma hizmeti.',
      intro: [
        'Eryaman, Ankara\'nın en büyük planlı toplu konut bölgelerinden biri. Eryaman 1. etaptan 7. etaba kadar uzanan site ve blokların büyük bölümü 1990\'lı ve 2000\'li yıllarda inşa edildi. Bu yapıların bir kısmında elektrik tesisatı artık yenileme çağına geldi; sigorta kutusu değişimi, kaçak akım rölesi eklenmesi ve priz hatlarının güçlendirilmesi Eryaman\'dan en sık aldığımız talepler.',
        'Sincan\'daki merkezimize çok yakın olan Eryaman\'a arıza ve tesisat işleri için hızlı ulaşıyoruz. Göksu ve Bağlıca tarafındaki yeni konutlarda ise spot, LED şerit ve avize montajı ağırlıklı çalışıyoruz.',
      ],
      highlightedServices: ['elektrik-ariza', 'ev-elektrik-tesisati', 'bina-elektrik-tesisati', 'led-aydinlatma'],
      localNotes: [
        {
          title: 'Eryaman etaplarında tesisat yenileme',
          text: 'Eski etaplardaki dairelerde sigorta kutusunun otomat sigortalı ve kaçak akım röleli modern panoyla değiştirilmesi, mutfak ve banyo hatlarının güçlendirilmesi en yaygın uygulamamız.',
        },
        {
          title: 'Site ortak alanları',
          text: 'Eryaman\'daki sitelerin merdiven otomatı, koridor aydınlatması, otopark ve hidrofor elektriği konusunda site yönetimleriyle çalışıyoruz.',
        },
        {
          title: 'Eryaman çarşı ve iş yerleri',
          text: 'Eryaman\'daki mağaza, kafe ve ofislerde vitrin aydınlatması, ray spot ve tadilat elektrik işlerini yapıyoruz.',
        },
      ],
      neighborhoods: ['Eryaman 1. Etap', 'Eryaman 2. Etap', 'Eryaman 3. Etap', 'Eryaman 4. Etap', 'Eryaman 5. Etap', 'Eryaman 6. Etap', 'Eryaman 7. Etap', 'Göksu', 'Elvankent'],
      faq: [
        {
          q: 'Eryaman\'da eski sigorta kutusunu değiştiriyor musunuz?',
          a: 'Evet. Eryaman\'daki eski etaplarda eski tip sigorta kutularını kaçak akım röleli, otomat sigortalı yeni panolarla değiştiriyoruz.',
        },
        {
          q: 'Site yönetimi olarak ortak alan elektriği için sizinle çalışabilir miyiz?',
          a: 'Evet. Eryaman\'daki site yönetimleriyle merdiven, otopark, hidrofor ve asansör elektriği konularında çalışıyoruz.',
        },
      ],
      seoTitle: 'Eryaman Elektrikçi – Aynı Gün Arıza ve Montaj | Demir Elektrik',
      seoDescription:
        'Eryaman elektrikçi: Eryaman etaplarında elektrik arıza, sigorta kutusu yenileme, daire tesisatı, site ortak alan elektriği ve LED montajı. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Yenimahalle',
    slug: 'yenimahalle-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Yenimahalle Elektrikçi',
      subtitle: 'Demetevler\'den Batıkent\'e, İvedik OSB\'den Çayyolu\'na Yenimahalle\'nin tamamına elektrik hizmeti.',
      intro: [
        'Yenimahalle, Ankara\'nın en kalabalık ve en çeşitli ilçelerinden biri: Demetevler ve Yenimahalle merkezdeki eski apartmanlar, Batıkent ve Çayyolu\'ndaki siteler, İvedik Organize Sanayi ve Ostim\'deki üretim tesisleri aynı ilçede yer alıyor. Demir Elektrik olarak Yenimahalle\'nin bu farklı ihtiyaçlarının tamamına hizmet veriyoruz.',
        'Sincan\'dan Yenimahalle\'ye ana arterler üzerinden hızlı ulaşım sağlıyoruz. Konut arızaları ve tesisat işlerinin yanı sıra İvedik ve Ostim\'deki atölyelerin pano, makine bağlantısı ve arıza işlerinde de deneyimliyiz.',
      ],
      highlightedServices: ['elektrik-ariza', 'elektrik-tesisati', 'elektrik-pano-montaji', 'magaza-elektrik-tesisati'],
      localNotes: [
        {
          title: 'İvedik OSB ve Ostim',
          text: 'İvedik Organize Sanayi ve Ostim\'deki küçük ve orta ölçekli atölyelerde üç faz hat çekimi, kumanda panosu, kompanzasyon ve makine elektrik bağlantısı yapıyoruz.',
        },
        {
          title: 'Demetevler ve eski apartmanlar',
          text: 'Demetevler, Yenimahalle merkez ve Karşıyaka\'daki eski binalarda kolon hattı ve sayaç panosu yenileme, daire tesisatı ve kaçak akım koruması ekleme işlerinde çalışıyoruz.',
        },
        {
          title: 'Çayyolu ve Ümitköy siteleri',
          text: 'Çayyolu, Ümitköy ve Alacaatlı bölgesindeki site ve villalarda aydınlatma tasarımı, spot, LED şerit ve avize montajı yapıyoruz.',
        },
      ],
      neighborhoods: ['Demetevler', 'Batıkent', 'Çayyolu', 'Ümitköy', 'Karşıyaka', 'İvedik', 'Ostim', 'Yeşilevler', 'Ragıp Tüzün', 'Alacaatlı', 'Kentkoop', 'Turgut Özal'],
      faq: [
        {
          q: 'İvedik OSB\'deki atölyemize üç faz hat çekebilir misiniz?',
          a: 'Evet. İvedik ve Ostim\'deki atölyelerde pano kurulumu, üç faz hat çekimi ve makine enerji bağlantılarını yapıyoruz.',
        },
        {
          q: 'Çayyolu\'na spot ve avize montajı için geliyor musunuz?',
          a: 'Evet. Çayyolu, Ümitköy ve Alacaatlı bölgesine aydınlatma montajı ve elektrik tesisatı işleri için hizmet veriyoruz.',
        },
      ],
      seoTitle: 'Yenimahalle Elektrikçi | Arıza, Tesisat, İvedik OSB Pano | Demir Elektrik',
      seoDescription:
        'Yenimahalle elektrikçi: Demetevler, Batıkent, Çayyolu, İvedik ve Ostim\'de elektrik arıza, tesisat, pano montajı ve aydınlatma hizmeti. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Batıkent',
    slug: 'batikent-elektrikci',
    type: 'semt',
    parent: 'Yenimahalle',
    featured: true,
    content: {
      h1: 'Batıkent Elektrikçi',
      subtitle: 'Batıkent kooperatif sitelerinde tesisat yenileme, arıza ve aydınlatma hizmeti.',
      intro: [
        'Batıkent, Türkiye\'nin en büyük kooperatif konut projelerinden biri olarak kuruldu ve bugün yüz binlerce kişinin yaşadığı, büyük bölümü site düzeninde bir yerleşim. Kentkoop, Batı Sitesi, Yuva ve Mesa gibi bölgelerdeki blokların önemli bir kısmı 1980\'ler ve 90\'larda yapıldığı için elektrik tesisatı yenileme talepleri Batıkent\'te oldukça yaygın.',
        'Sincan ve Batıkent arasındaki mesafe kısa olduğu için arızalara hızlı ulaşıyoruz. Batıkent metro hattı çevresindeki iş yerleri ve AVM\'lerdeki mağazalara da aydınlatma ve tadilat elektrik hizmeti veriyoruz.',
      ],
      highlightedServices: ['elektrik-ariza', 'ev-elektrik-tesisati', 'bina-elektrik-tesisati', 'spot-montaji'],
      localNotes: [
        {
          title: 'Kooperatif blokları ve tesisat yenileme',
          text: 'Batıkent\'in eski kooperatif bloklarında daire içi tesisat yenileme, sigorta kutusu değişimi ve topraklama düzenlemeleri en sık yaptığımız işler.',
        },
        {
          title: 'Site yönetimleri',
          text: 'Blok merdiven otomatları, bahçe aydınlatması, hidrofor ve asansör besleme hatları konusunda Batıkent site yönetimleriyle çalışıyoruz.',
        },
        {
          title: 'Batıkent ticari alanları',
          text: 'Batıkent merkez ve AVM\'lerdeki mağaza, kafe ve ofislerde vitrin aydınlatması, ray spot ve tadilat elektrik işleri yapıyoruz.',
        },
      ],
      neighborhoods: ['Kentkoop', 'Batı Sitesi', 'Yuva', 'Mesa Koru', 'Kardelen', 'Çiğdemtepe', 'Güzelyaka', 'Burç', 'Ergazi'],
      faq: [
        {
          q: 'Batıkent\'teki eski dairemizin tesisatı yenilenmeli mi?',
          a: '30 yaşını geçmiş, topraklaması olmayan veya sık sigorta atan tesisatlarda yenileme öneriyoruz. Yerinde kontrol ile dairenizin durumunu net olarak paylaşıyoruz.',
        },
        {
          q: 'Batıkent\'e hafta sonu geliyor musunuz?',
          a: 'Evet. Haftanın her günü 08:00 – 23:00 arasında Batıkent\'e hizmet veriyoruz.',
        },
      ],
      seoTitle: 'Batıkent Elektrikçi | Tesisat Yenileme ve Elektrik Arıza | Demir Elektrik',
      seoDescription:
        'Batıkent elektrikçi: kooperatif sitelerinde tesisat yenileme, sigorta kutusu değişimi, elektrik arıza, site ortak alan elektriği ve spot montajı. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Çankaya',
    slug: 'cankaya-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Çankaya Elektrikçi',
      subtitle: 'Kızılay\'dan Oran\'a, ofis ve plazalardan konutlara Çankaya geneli elektrik hizmeti.',
      intro: [
        'Çankaya, Ankara\'nın ticari ve idari merkezi. Kızılay, Kavaklıdere ve Çukurambar\'daki ofisler, plazalar ve mağazalar; Oran, Çayyolu ve Bahçelievler\'deki konutlar Çankaya\'nın elektrik ihtiyacını hem çeşitli hem de yoğun kılıyor. Demir Elektrik olarak Çankaya\'daki konut ve ticari müşterilerimize arıza, tesisat, aydınlatma ve pano hizmeti sunuyoruz.',
        'Çankaya\'daki ofis ve mağaza işlerinde mesai saatleri dışında çalışma talebiyle sık karşılaşıyoruz. 08:00 – 23:00 çalışma saatlerimiz sayesinde tadilat ve aydınlatma işlerini iş yerinizin kapalı olduğu saatlere planlayabiliyoruz.',
      ],
      highlightedServices: ['magaza-elektrik-tesisati', 'elektrik-ariza', 'spot-montaji', 'led-aydinlatma'],
      localNotes: [
        {
          title: 'Ofis ve plaza elektriği',
          text: 'Kızılay, Kavaklıdere, Çukurambar ve Balgat\'taki ofislerde priz ve data hatları, LED panel aydınlatma, pano düzenleme ve tadilat elektrik işleri yapıyoruz.',
        },
        {
          title: 'Mağaza ve kafe aydınlatması',
          text: 'Tunalı Hilmi, Kızılay ve AVM\'lerdeki mağaza ve kafelerde ray spot, dekoratif aydınlatma ve vitrin elektrik uygulamaları yapıyoruz.',
        },
        {
          title: 'Eski Çankaya apartmanları',
          text: 'Bahçelievler, Emek, Maltepe ve Cebeci\'deki eski binalarda tesisat yenileme, kolon hattı ve sayaç panosu düzenlemelerinde deneyimliyiz.',
        },
      ],
      neighborhoods: ['Kızılay', 'Kavaklıdere', 'Çukurambar', 'Balgat', 'Bahçelievler', 'Emek', 'Oran', 'Çayyolu', 'Ayrancı', 'Dikmen', 'Cebeci', 'Maltepe', 'Yıldız', 'Birlik'],
      faq: [
        {
          q: 'Çankaya\'daki ofisimizde mesai dışı çalışabilir misiniz?',
          a: 'Evet. Ofis ve mağaza işlerini 08:00 – 23:00 saatleri içinde, iş yerinizin kapalı olduğu saatlere göre planlayabiliyoruz.',
        },
        {
          q: 'Sincan\'dan Çankaya\'ya arıza için gelir misiniz?',
          a: 'Evet. Ankara\'nın tüm ilçelerine olduğu gibi Çankaya\'ya da arıza ve tesisat işleri için gidiyoruz. Aradığınızda tahmini varış süresini paylaşıyoruz.',
        },
      ],
      seoTitle: 'Çankaya Elektrikçi | Ofis, Mağaza ve Konut Elektrik | Demir Elektrik',
      seoDescription:
        'Çankaya elektrikçi: Kızılay, Çukurambar, Balgat, Bahçelievler ve Oran\'da elektrik arıza, ofis ve mağaza elektriği, spot, LED ve tesisat hizmeti. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Keçiören',
    slug: 'kecioren-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Keçiören Elektrikçi',
      subtitle: 'Ankara\'nın en kalabalık ilçesinde apartman, daire ve iş yeri elektrik hizmeti.',
      intro: [
        'Keçiören, nüfusuyla Ankara\'nın en kalabalık ilçelerinden biri ve büyük bölümü çok katlı apartmanlardan oluşuyor. Etlik, Ovacık, Kalaba, Ayvalı, Bağlum ve Keçiören merkezdeki apartman ve dairelerde elektrik arızası, tesisat yenileme ve aydınlatma montajı en sık aldığımız talepler.',
        'Keçiören\'de yoğun apartmanlaşma nedeniyle bina yönetimleriyle ortak alan elektriği, sayaç panosu ve merdiven aydınlatması konularında sık çalışıyoruz. Kentsel dönüşümle yenilenen binalarda ise sıfırdan daire tesisatı ve pano kurulumu yapıyoruz.',
      ],
      highlightedServices: ['elektrik-ariza', 'bina-elektrik-tesisati', 'ev-elektrik-tesisati', 'avize-montaji'],
      localNotes: [
        {
          title: 'Apartman ortak alanları',
          text: 'Keçiören\'deki apartmanlarda merdiven otomatı, sayaç panosu, kolon hattı ve asansör besleme hattı işlerinde bina yönetimleriyle çalışıyoruz.',
        },
        {
          title: 'Kentsel dönüşüm binaları',
          text: 'Yenilenen binalarda projeye uygun daire tesisatı, pano kurulumu ve ortak alan aydınlatması yapıyoruz.',
        },
        {
          title: 'Keçiören iş yerleri',
          text: 'Etlik ve Keçiören merkezdeki mağaza, market ve kafelerde aydınlatma, priz sistemleri ve pano işleri yapıyoruz.',
        },
      ],
      neighborhoods: ['Etlik', 'Ovacık', 'Kalaba', 'Ayvalı', 'Bağlum', 'Subayevleri', 'Aktepe', 'Kuşcağız', 'Yükseltepe', 'Şenlik', 'Güçlükaya', 'Basınevleri'],
      faq: [
        {
          q: 'Keçiören\'de apartmanımızın sayaç panosunu yenileyebilir misiniz?',
          a: 'Evet. Sayaç panosu ve kolon hattı yenileme işlerini bina yönetimiyle planlayıp bina sakinlerini en az etkileyecek şekilde yapıyoruz.',
        },
        {
          q: 'Keçiören\'e Sincan\'dan ulaşmanız ne kadar sürüyor?',
          a: 'Trafiğe göre değişmekle birlikte Keçiören\'e ana arterler üzerinden makul sürede ulaşıyoruz. Aradığınızda net bir süre veriyoruz.',
        },
      ],
      seoTitle: 'Keçiören Elektrikçi | Apartman ve Daire Elektrik Arıza | Demir Elektrik',
      seoDescription:
        'Keçiören elektrikçi: Etlik, Ovacık, Kalaba, Ayvalı ve Bağlum\'da elektrik arıza, apartman elektriği, daire tesisatı, sayaç panosu ve avize montajı. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Mamak',
    slug: 'mamak-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Mamak Elektrikçi',
      subtitle: 'Mamak\'ın dönüşen mahallelerinde arıza, tesisat ve aydınlatma hizmeti.',
      intro: [
        'Mamak, kentsel dönüşümün en yoğun yaşandığı Ankara ilçelerinden biri. Bir yanda Abidinpaşa, Tuzluçayır, Kutludüğün ve Akdere gibi eski yerleşimler, diğer yanda Natoyolu ve Kusunlar çevresinde yükselen yeni siteler var. Demir Elektrik olarak Mamak\'ın hem eski hem yeni konutlarında elektrik arızası, tesisat ve aydınlatma hizmeti veriyoruz.',
        'Eski Mamak konutlarında topraklamasız ve düşük kapasiteli tesisatlarla sık karşılaşıyoruz. Bu tesisatları güvenli hale getirmek, sigorta kutularını yenilemek ve prizleri güçlendirmek Mamak\'taki işlerimizin önemli bir kısmını oluşturuyor.',
      ],
      highlightedServices: ['elektrik-ariza', 'elektrik-tesisati', 'ev-elektrik-tesisati', 'led-aydinlatma'],
      localNotes: [
        {
          title: 'Eski konutlarda güvenlik odaklı yenileme',
          text: 'Tuzluçayır, Akdere ve Abidinpaşa\'daki eski evlerde topraklama, kaçak akım rölesi ve sigorta kutusu yenileme işlerini önceliklendiriyoruz.',
        },
        {
          title: 'Yeni siteler ve TOKİ konutları',
          text: 'Natoyolu, Kusunlar ve Gökçeyurt çevresindeki yeni sitelerde spot, LED şerit ve avize montajı ile priz ekleme işleri yapıyoruz.',
        },
        {
          title: 'Mamak sanayi ve iş yerleri',
          text: 'Mamak\'taki atölye, depo ve iş yerlerinde pano, üç faz hat ve makine bağlantısı hizmeti veriyoruz.',
        },
      ],
      neighborhoods: ['Abidinpaşa', 'Tuzluçayır', 'Kutludüğün', 'Akdere', 'Natoyolu', 'Kusunlar', 'Gökçeyurt', 'Demirlibahçe', 'Ege', 'Şahintepe', 'Fahri Korutürk'],
      faq: [
        {
          q: 'Mamak\'taki eski evimizde elektrik çarpıyor, ne yapmalıyız?',
          a: 'Çarpılma hissi genellikle topraklama eksikliğinden kaynaklanır ve ciddi bir güvenlik riskidir. Yerinde kontrol ederek topraklama ve kaçak akım koruması ekliyoruz.',
        },
        {
          q: 'Mamak\'a arıza için ne zaman gelebilirsiniz?',
          a: 'Her gün 08:00 – 23:00 arasında Mamak\'a hizmet veriyoruz. Aradığınızda o günkü yoğunluğa göre net saat bilgisi paylaşıyoruz.',
        },
      ],
      seoTitle: 'Mamak Elektrikçi | Elektrik Arıza ve Tesisat Yenileme | Demir Elektrik',
      seoDescription:
        'Mamak elektrikçi: Abidinpaşa, Tuzluçayır, Natoyolu ve Akdere\'de elektrik arıza, tesisat yenileme, topraklama, sigorta kutusu ve aydınlatma montajı. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Gölbaşı',
    locative: "Gölbaşı'nda",
    slug: 'golbasi-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Gölbaşı Elektrikçi',
      subtitle: 'Gölbaşı villaları, siteleri ve iş yerleri için elektrik tesisatı, aydınlatma ve arıza hizmeti.',
      intro: [
        'Gölbaşı, Mogan Gölü çevresi ve İncek ile Ankara\'nın en yoğun villa ve müstakil konut bölgesi. Bu yapılar; bahçe aydınlatması, dış mekan hatları, havuz ve sulama elektriği, geniş pano sistemleri ve akıllı ev altyapısı gibi standart bir daireden çok daha kapsamlı elektrik ihtiyaçları taşır. Demir Elektrik olarak Gölbaşı\'nda villa elektrik tesisatı konusunda uzmanlaşmış hizmet sunuyoruz.',
        'Gölbaşı merkez ve Bahçelievler, Karşıyaka gibi mahallelerdeki apartman ve iş yerlerinde ise arıza, tesisat ve aydınlatma işlerini yapıyoruz. Gölbaşı Küçük Sanayi Sitesi ve çevredeki atölyelere pano ve makine bağlantısı hizmeti veriyoruz.',
      ],
      highlightedServices: ['villa-elektrik-tesisati', 'led-aydinlatma', 'elektrik-ariza', 'elektrik-pano-montaji'],
      localNotes: [
        {
          title: 'İncek ve Mogan çevresi villaları',
          text: 'İncek, Taşpınar ve Mogan çevresindeki villalarda komple elektrik tesisatı, bahçe ve peyzaj aydınlatması, havuz elektriği ve otomasyon altyapısı yapıyoruz.',
        },
        {
          title: 'Site ve müstakil evler',
          text: 'Gölbaşı\'ndaki müstakil evlerde dış cephe LED uygulamaları, garaj ve bahçe hatları ile pano düzenlemeleri yapıyoruz.',
        },
        {
          title: 'Gölbaşı iş yerleri ve sanayi',
          text: 'Gölbaşı merkez ve sanayi sitesindeki iş yerlerinde üç faz hat, pano ve aydınlatma işleri yapıyoruz.',
        },
      ],
      neighborhoods: ['İncek', 'Taşpınar', 'Bahçelievler', 'Karşıyaka', 'Eymir', 'Hacılar', 'Gaziosmanpaşa', 'Örencik', 'Kızılcaşar', 'Tulumtaş'],
      faq: [
        {
          q: 'İncek\'teki villamızın komple elektrik tesisatını yapabilir misiniz?',
          a: 'Evet. İncek ve Gölbaşı genelinde villa projelerinde tesisat, pano, aydınlatma ve otomasyon altyapısını başından sonuna kadar üstleniyoruz.',
        },
        {
          q: 'Havuz ve bahçe sulama sistemi için elektrik bağlantısı yapıyor musunuz?',
          a: 'Evet. Havuz pompası, sulama otomatiği ve dış mekan ekipmanları için neme dayanıklı, kaçak akım korumalı hatlar çekiyoruz.',
        },
      ],
      seoTitle: 'Gölbaşı Elektrikçi | Villa Elektrik Tesisatı ve Aydınlatma | Demir Elektrik',
      seoDescription:
        'Gölbaşı elektrikçi: İncek ve Mogan çevresinde villa elektrik tesisatı, bahçe aydınlatması, havuz elektriği, pano ve arıza hizmeti. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Pursaklar',
    slug: 'pursaklar-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Pursaklar Elektrikçi',
      subtitle: 'Pursaklar\'ın yeni konut bölgelerinde ve Saray sanayi alanında elektrik hizmeti.',
      intro: [
        'Pursaklar, Ankara\'nın kuzeyinde hızla gelişen ve büyük bölümü yeni sitelerden oluşan bir ilçe. Merkez, Saray, Altınova ve Yunus Emre mahallelerindeki yeni dairelerde spot, LED şerit ve avize montajı ile priz ekleme talepleri en sık aldığımız işler arasında.',
        'Saray bölgesindeki sanayi ve depo alanlarında ise pano montajı, üç faz hat çekimi ve makine elektrik bağlantısı yapıyoruz. Pursaklar\'daki ilkokul, yurt ve ticari işletmelere de aydınlatma ve tesisat hizmeti veriyoruz.',
      ],
      highlightedServices: ['spot-montaji', 'ev-elektrik-tesisati', 'elektrik-ariza', 'elektrik-pano-montaji'],
      localNotes: [
        {
          title: 'Yeni siteler ve teslim sonrası işler',
          text: 'Pursaklar\'daki yeni sitelerde daire teslim sonrası spot, avize, LED şerit, priz ekleme ve ankastre hattı işlerini yapıyoruz.',
        },
        {
          title: 'Saray sanayi ve depolar',
          text: 'Saray bölgesindeki atölye ve depolarda pano kurulumu, üç faz hat ve endüstriyel aydınlatma uygulamaları yapıyoruz.',
        },
        {
          title: 'Pursaklar iş yerleri',
          text: 'Pursaklar merkezdeki mağaza, market ve kafelerde vitrin aydınlatması, ray spot ve tadilat elektrik işleri yapıyoruz.',
        },
      ],
      neighborhoods: ['Merkez', 'Saray', 'Altınova', 'Yunus Emre', 'Fatih', 'Mimar Sinan', 'Ayyıldız', 'Tevfik İleri', 'Karacaören', 'Sirkeli'],
      faq: [
        {
          q: 'Pursaklar\'da yeni aldığımız dairenin spot ve avizelerini takar mısınız?',
          a: 'Evet. Pursaklar\'daki yeni sitelerde daire teslim sonrası spot, avize ve LED montajı için düzenli olarak hizmet veriyoruz.',
        },
        {
          q: 'Saray\'daki depomuza pano kurulumu için gelir misiniz?',
          a: 'Evet. Saray bölgesindeki depo ve atölyelere pano montajı, üç faz hat ve aydınlatma işleri için gidiyoruz.',
        },
      ],
      seoTitle: 'Pursaklar Elektrikçi | Spot, Tesisat ve Elektrik Arıza | Demir Elektrik',
      seoDescription:
        'Pursaklar elektrikçi: yeni sitelerde spot, avize ve LED montajı, daire tesisatı, elektrik arıza ve Saray sanayi bölgesinde pano hizmeti. Demir Elektrik: 0506 254 76 78.',
    },
  },
  {
    name: 'Kahramankazan',
    slug: 'kahramankazan-elektrikci',
    type: 'ilce',
    featured: true,
    content: {
      h1: 'Kahramankazan Elektrikçi',
      subtitle: 'Kahramankazan\'ın fabrika ve sanayi tesislerinde endüstriyel elektrik, pano ve otomasyon hizmeti.',
      intro: [
        'Kahramankazan, Ankara\'nın en önemli sanayi ilçelerinden biri. Anadolu OSB, Kazan Orta Ölçekli Sanayi ve çevredeki çok sayıda üretim tesisi, ilçeyi endüstriyel elektrik hizmeti için en yoğun çalıştığımız bölgelerden biri haline getiriyor. Sincan\'daki merkezimize yakınlığı sayesinde Kahramankazan\'daki tesislere hızlı ulaşıyoruz.',
        'Fabrika pano montajı, makine enerji bağlantıları, kompanzasyon, kablo tavası uygulamaları ve iş makinesi elektrik arızaları Kahramankazan\'da en sık yaptığımız işler. İlçe merkezindeki konut ve iş yerlerine de arıza, tesisat ve aydınlatma hizmeti veriyoruz.',
      ],
      highlightedServices: ['fabrika-elektrik', 'elektrik-pano-montaji', 'is-makinesi-elektrik-otomasyonu', 'elektrik-ariza'],
      localNotes: [
        {
          title: 'Anadolu OSB ve üretim tesisleri',
          text: 'Anadolu OSB ve Kazan sanayi bölgelerindeki fabrikalarda pano montajı, güç dağıtımı, makine enerji bağlantısı ve arıza tespiti yapıyoruz.',
        },
        {
          title: 'İş makineleri ve şantiyeler',
          text: 'Kahramankazan\'daki şantiye, taş ocağı ve lojistik tesislerinde iş makinesi elektrik arızaları ve kontrol sistemleri konusunda yerinde hizmet veriyoruz.',
        },
        {
          title: 'Kahramankazan merkez',
          text: 'İlçe merkezindeki konut ve iş yerlerinde elektrik arızası, tesisat ve aydınlatma montajı yapıyoruz.',
        },
      ],
      neighborhoods: ['Anadolu OSB', 'Fatih', 'Atatürk', 'Satıkadın', 'Saray', 'Kayı', 'Orhaniye', 'Güvenç', 'Ciğir'],
      faq: [
        {
          q: 'Kahramankazan\'daki fabrikamıza üretimi durdurmadan pano montajı yapabilir misiniz?',
          a: 'Çalışmayı vardiya dışı saatlere ya da hafta sonuna planlayarak üretim kaybını en aza indiriyoruz. Zorunlu kesintileri önceden bildiriyoruz.',
        },
        {
          q: 'Şantiyedeki iş makinemiz için Kahramankazan\'a gelir misiniz?',
          a: 'Evet. Kahramankazan ve çevresindeki şantiyelerde iş makinesi elektrik arızalarına yerinde müdahale ediyoruz.',
        },
      ],
      seoTitle: 'Kahramankazan Elektrikçi | Fabrika Elektrik ve Pano Montajı | Demir Elektrik',
      seoDescription:
        'Kahramankazan elektrikçi: Anadolu OSB ve sanayi tesislerinde fabrika elektrik, pano montajı, makine bağlantısı, iş makinesi elektrik ve arıza hizmeti. Demir Elektrik: 0506 254 76 78.',
    },
  },

  // ---------------------------------------------------------------- Diğer ilçeler (etiket olarak listelenir)
  { name: 'Altındağ', slug: 'altindag-elektrikci', type: 'ilce', featured: false },
  { name: 'Ayaş', slug: 'ayas-elektrikci', type: 'ilce', featured: false },
  { name: 'Bala', slug: 'bala-elektrikci', type: 'ilce', featured: false },
  { name: 'Beypazarı', slug: 'beypazari-elektrikci', type: 'ilce', featured: false },
  { name: 'Çamlıdere', slug: 'camlidere-elektrikci', type: 'ilce', featured: false },
  { name: 'Çubuk', slug: 'cubuk-elektrikci', type: 'ilce', featured: false },
  { name: 'Elmadağ', slug: 'elmadag-elektrikci', type: 'ilce', featured: false },
  { name: 'Evren', slug: 'evren-elektrikci', type: 'ilce', featured: false },
  { name: 'Güdül', slug: 'gudul-elektrikci', type: 'ilce', featured: false },
  { name: 'Haymana', slug: 'haymana-elektrikci', type: 'ilce', featured: false },
  { name: 'Kalecik', slug: 'kalecik-elektrikci', type: 'ilce', featured: false },
  { name: 'Kızılcahamam', slug: 'kizilcahamam-elektrikci', type: 'ilce', featured: false },
  { name: 'Nallıhan', slug: 'nallihan-elektrikci', type: 'ilce', featured: false },
  { name: 'Polatlı', slug: 'polatli-elektrikci', type: 'ilce', featured: false },
  { name: 'Şereflikoçhisar', slug: 'sereflikochisar-elektrikci', type: 'ilce', featured: false },
  { name: 'Akyurt', slug: 'akyurt-elektrikci', type: 'ilce', featured: false },
];

/** Ankara'nın 25 ilçesi (semtler hariç), alfabetik */
export const allDistricts = districts
  .filter((d) => d.type === 'ilce')
  .sort((a, b) => a.name.localeCompare(b.name, 'tr'));

/** Özgün içeriği olan, sayfası üretilecek bölgeler */
export const landingDistricts = districts.filter((d): d is District & { content: DistrictContent } => Boolean(d.content));

/** Ana sayfa / footer'da öne çıkarılan bölgeler */
export const featuredDistricts = districts.filter((d) => d.featured);

export function getDistrict(slug: string) {
  return landingDistricts.find((d) => d.slug === slug);
}

export function hasLanding(d: District): boolean {
  return Boolean(d.content);
}
