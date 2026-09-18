/**
 * Rehber (blog) yazıları. SEO otomasyonu buraya yeni yazı ekler.
 * Her yazı: doğal, insan elinden çıkmış Türkçe; hedef bir anahtar kelimeye yönelik;
 * ara başlıklar, kısa paragraflar, gerçek SSS ve ilgili sayfalara iç linkler.
 */
export interface BlogSection {
  h: string;
  p: string[];
}
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  readingMin: number;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: 'priz-neden-isinir-sincan',
    title: 'Priz Neden Isınır? Sincan’da Sahadan Gördüğümüz Sebepler',
    description:
      'Priziniz dokunulamayacak kadar ısınıyorsa bunu görmezden gelmeyin. Sincan’da elektrikçi gözünden priz ısınmasının gerçek sebepleri ve doğru çözüm. Demir Elektrik: 0506 254 76 78.',
    keyword: 'priz ısınması',
    date: '2026-09-18',
    readingMin: 6,
    excerpt:
      'Priz ısınması genelde göz ardı edilen ama aslında ciddiye alınması gereken bir belirtidir. Sincan’da sahada en sık gördüğümüz sebepleri ve doğru çözümü anlatıyoruz.',
    intro:
      'Prize dokunduğunuzda “bu kadar ısınmamalıydı” dediğiniz bir an olduysa, içgüdünüze güvenin. Priz ısınması, sigorta gibi gürültülü bir uyarı vermez; sessizce başlar ve çoğu zaman fark edilmeden büyür. Sincan’da yıllardır bu tip çağrılara gidiyoruz ve şunu rahatlıkla söyleyebiliriz: ısınan bir priz neredeyse hiçbir zaman kendiliğinden düzelmez, aksine zamanla kötüleşir.',
    sections: [
      {
        h: 'Priz ısınması aslında ne anlatıyor?',
        p: [
          'Bir priz normal kullanımda ılık olabilir, özellikle su ısıtıcısı ya da ütü gibi yüksek güçlü bir cihaz uzun süre çalışıyorsa. Ama elinizi tutamayacağınız kadar ısınıyorsa, prizin içindeki temas noktasında normalin çok üzerinde bir direnç oluşmuş demektir.',
          'Elektrikte akım geçtiği her noktada bir miktar ısı açığa çıkar; bu normaldir. Sorun, o noktadaki bağlantı gevşediğinde ya da bozulduğunda ortaya çıkar. Aynı akım artık çok daha küçük bir temas yüzeyinden geçmeye çalışır ve o nokta yerel olarak fazlasıyla ısınır. Bazı durumlarda bu sıcaklık 100–150°C’ye kadar çıkabilir; oysa priz gövdesindeki plastik genelde bunun çok altında bir sıcaklığa göre üretilmiştir.',
        ],
      },
      {
        h: 'Sahada en sık karşılaştığımız üç sebep',
        p: [
          'Birincisi ve en yaygını, gevşek bağlantıdır. Prizin arkasındaki kablo vidası zamanla gevşeyebilir; özellikle titreşimli zeminlerde ya da yıllar önce yeterince sıkılmamış bir montajda bu ihtimal yüksektir. Gevşeyen vida, temas direncini artırır ve o nokta ısınmaya başlar.',
          'İkincisi aşırı yüktür. Sincan’daki eski yapılı dairelerde tek bir prize çoklu priz (uzatma) takıp üzerine su ısıtıcısı, ısıtıcı ve ütüyü aynı anda bağladığımız çağrılara sık gidiyoruz. 2200–2500 watt’lık bir cihaz bile, o hat için tasarlanmamış bir prizde ciddi ısınmaya yol açabilir; iki-üç cihaz birden bağlanınca durum daha da kötüleşir.',
          'Üçüncüsü ise prizin kendisinin ya da hattın yaşıdır. 20–25 yılı geçmiş prizlerde plastik gövde ve iç kontaklar yorulur, esnekliğini kaybeder. Bazı eski binalarda ayrıca ince kesitli (1,5 mm² altı) kablonun bugünün cihazlarına yetmediğini de görüyoruz; kablo yetersiz kaldığında ısınma önce prizde kendini gösterir.',
        ],
      },
      {
        h: 'Hangi belirtileri ciddiye almalı?',
        p: [
          'Priz kapağının rengi sararmış ya da kahverengiye dönmüşse, bu geçmişte ısınmanın izidir; şu an ısınmıyor olsa bile o priz değişmelidir. Yanık kokusu, priz çevresinde hafif is izi ya da fişi takarken kıvılcım görmek de aynı şekilde ciddiye alınmalıdır.',
          'Bir diğer işaret, prizi kullanırken ışıkların hafifçe titremesi ya da cihazın beklenenden yavaş çalışmasıdır; bu da hatta bir direnç problemi olduğuna işaret edebilir. Bu belirtilerden herhangi biri varsa, o prizi kullanmayı bırakıp ölçüm yaptırmak en doğrusu.',
        ],
      },
      {
        h: 'Siz ne yapabilirsiniz, neyi yapmamalısınız?',
        p: [
          'İlk yapabileceğiniz şey basit: ısınan prizdeki cihazı çıkarıp prizi bir süre boşta bırakmak ve elinizle (fişi çektikten sonra) yavaşça kontrol etmektir. Isınma devam ediyorsa ya da tekrar ediyorsa sorun prizin kendisinde ya da hattadır.',
          'Yapmamanız gereken şey, o prize bantla ya da farklı bir yöntemle fişi sabitleyip kullanmaya devam etmektir. Aynı şekilde ısınan bir prizin üstüne yeni bir kapak takıp görünmez hale getirmek de çözüm değildir; ısı orada birikmeye devam eder. Priz gövdesini kendiniz açıp vidayı sıkmaya çalışmak da önermediğimiz bir şey, çünkü çoğu zaman görünürde gevşek olmayan bir vida bile içeride oksitlenmiş olabilir.',
        ],
      },
      {
        h: 'Sincan’da ve Ankara genelinde nasıl çözüyoruz?',
        p: [
          'Önce ısınan prizi ve varsa bağlı olduğu hattı kontrol ediyor, gerekiyorsa panodan o hattı ölçüyoruz. Sorun sadece gevşek bir bağlantıysa prizi ve gerekirse kablo ucunu yenileyip doğru şekilde sıkarak çözüyoruz. Sorun aşırı yükse, o hattı yüksek güçlü cihazlar için ayrı bir priz ya da hatta bağımsız bir sigorta ile destekliyoruz.',
          'Sincan merkezli çalıştığımız için özellikle bölgedeki eski yapılı dairelerde bu tip ısınma vakalarını sık görüyoruz. Tek bir prizi değiştirmek bazen yeterli oluyor; ama aynı hatta tekrar tekrar ısınma yaşanıyorsa, kabloyu ya da o bölümün tesisatını yenilemeyi öneriyoruz. Amacımız, birkaç ay sonra aynı sorunla tekrar karşılaşmamanız.',
        ],
      },
    ],
    faq: [
      {
        q: 'Priz ısınıyor ama sigorta atmıyor, tehlikeli mi?',
        a: 'Evet, olabilir. Sigorta aşırı akımı ya da kısa devreyi yakalar; ama gevşek bir bağlantıdan kaynaklanan yerel ısınma çoğu zaman sigortanın atma eşiğinin altında kalır. Yani sigorta sessiz kalsa da priz gerçek bir risk taşıyor olabilir.',
      },
      {
        q: 'Çoklu priz (uzatma) kullanmak ısınmaya sebep olur mu?',
        a: 'Kaliteli bir çoklu prizi tek bir orta güçlü cihazla kullanmak genelde sorun yaratmaz. Ama birden fazla yüksek güçlü cihazı (ısıtıcı, su ısıtıcısı, ütü) aynı çoklu prizde birlikte çalıştırmak hem çoklu prizi hem de duvardaki prizi zorlar ve ısınmaya yol açabilir.',
      },
      {
        q: 'Prizi değiştirince sorun tamamen çözülür mü?',
        a: 'Isınma sebebi sadece prizin kendisiyse evet. Ama sorun hattın taşıdığı yükten ya da kablo kesitinden kaynaklanıyorsa, prizi değiştirmek geçici bir rahatlama sağlar ve ısınma başka bir noktada tekrar eder. Bu yüzden ölçüm yapıp gerçek sebebi bulmak önemlidir.',
      },
    ],
    related: [
      { label: 'Elektrik Arıza Tespiti ve Onarımı', href: '/hizmetler/elektrik-ariza' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Sincan Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
