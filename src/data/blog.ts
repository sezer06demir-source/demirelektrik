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
  /** Gerçek iş fotoğrafı yolu (public/ altında). Boşsa markalı kapak otomatik üretilir. */
  image?: string;
  imageAlt?: string;
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
  {
    slug: 'sigorta-panosu-yenileme-sincan',
    title: 'Sigorta Panosu Ne Zaman Yenilenir? Sincan’da Eski Panolardan Öğrendiklerimiz',
    description:
      'Buşonlu eski sigorta panosu hâlâ mı çalışıyor sizde? Sincan’da elektrikçi gözünden pano yenilemenin ne zaman gerektiği, süreç ve riskler. Demir Elektrik: 0506 254 76 78.',
    keyword: 'sigorta panosu yenileme',
    date: '2026-09-25',
    readingMin: 7,
    excerpt:
      'Eski buşonlu panolar bugünün cihaz yüküne göre tasarlanmamıştı. Sincan’da kiracılı ve eski yapılı binalarda pano yenileme çağrılarından çıkardığımız gerçek gözlemler burada.',
    intro:
      'Sincan’da özellikle 30-40 yıllık apartmanlarda hâlâ eski tip buşon sigortalı panolara rastlıyoruz. Ev sahibi değişmiş, kiracı değişmiş ama pano hiç dokunulmadan kalmış oluyor çoğu zaman. Oysa pano, evin elektrik sisteminin trafik polisi gibidir; orada bir sorun varsa, evin geri kalanı ne kadar sağlam olursa olsun risk devam eder. Bu yazıda panonun ne zaman gerçekten yenilenmesi gerektiğini, sürecin nasıl işlediğini ve buşondan otomat sigortaya geçişin neden sadece bir “modernlik” meselesi olmadığını anlatıyorum.',
    sections: [
      {
        h: 'Buşon sigorta ile otomat sigorta arasındaki fark nedir?',
        p: [
          'Buşon (eski tip vida sigorta), içindeki ince bir telin aşırı akımda erimesiyle çalışır. Attığında telin değişmesi ya da sigortanın tamamen değiştirilmesi gerekir; bazı evlerde bu tel yerine tornavida ucuyla köprüleme yapıldığını bile görüyoruz, ki bu son derece tehlikelidir çünkü sigortayı devre dışı bırakır.',
          'Otomat sigorta ise mekanik bir anahtar gibi çalışır; aşırı akımda ya da kısa devrede atar, kolu aşağı düşer, siz de sorunu giderdikten sonra kolu yukarı kaldırırsınız. Hem daha hızlı tepki verir hem de yeniden kullanılabilir olduğu için kimse “geçici çözüm” diye tel köprüleme yapmaya kalkışmaz.',
        ],
      },
      {
        h: 'Kaçak akım rölesi neden bu kadar önemli?',
        p: [
          'Buşonlu eski panolarda çoğunlukla kaçak akım rölesi (KAR) hiç yok. Bu röle, evdeki bir cihazdan ya da hattan toprağa doğru beklenmedik bir akım kaçağı olduğunda, milisaniyeler içinde devreyi keser. Basitçe söylemek gerekirse, biri ıslak elle arızalı bir cihaza dokunduğunda ya da çamaşır makinesinin gövdesinde kaçak oluştuğunda hayat kurtaran parça budur.',
          'Sincan’da baktığımız birçok eski panoda bu röle yok, ya da varsa bile test butonuna basıldığında düzgün açmıyor. Röle olsa bile yıllar içinde iç mekanizması yorulabiliyor; bu yüzden yenileme sırasında sadece “röle var mı” değil, “düzgün çalışıyor mu” diye de kontrol ediyoruz.',
        ],
      },
      {
        h: 'Panoyu ne zaman yenilemek gerekir?',
        p: [
          'En net işaret, sigortanın sık sık atmasıdır; özellikle aynı hat tekrar tekrar atıyorsa, ya o hat aşırı yüklü ya da sigorta kendisi eskimiş ve artık hassasiyetini kaybetmiştir. İkinci işaret panonun görünümüdür: gövdede kararma, plastik kapakta erime izi ya da kablo girişlerinde is lekesi varsa, o pano geçmişte ısınma yaşamış demektir ve bir dahaki sefere daha kötü sonuçlanabilir.',
          'Üçüncü durum, evde ek yük olduğunda ortaya çıkıyor. Klima, kombi elektrikli destek, elektrikli fırın gibi cihazlar eklendiğinde, 30-40 yıl önce tasarlanmış bir pano bu yükü taşımak için yeterli sigorta sayısına ya da amper kapasitesine sahip olmayabilir. Dördüncüsü ise kaçak akım rölesinin hiç bulunmamasıdır; bu tek başına bile yenileme için yeterli bir sebep.',
        ],
      },
      {
        h: 'Eski, kiracılı binalarda pano yenileme neden farklı bir mesele?',
        p: [
          'Kiracılı dairelerde pano genelde ihmal edilen bir kalem oluyor; ev sahibi görmüyor, kiracı da “benim malım değil” diye üstüne gitmiyor. Sincan’da bir kiracının bizi aradığı bir vakada, mutfaktaki priz hattı sık sık atıyordu; pano açıldığında üç sigortanın buşon yerine iki farklı kalınlıkta tel ile köprülenmiş olduğunu gördük. Muhtemelen yıllar önce biri “geçici” diye yapmış, sonra kimse geri dönüp düzeltmemiş.',
          'Bu tip binalarda pano yenilemeden önce ev sahibinin onayını almak gerekiyor elbette, ama biz kiracıya da durumu somut şekilde anlatıyoruz: köprülenmiş bir sigorta, kısa devre anında telin erimesini beklemeden kabloyu aşırı ısıtabilir. Bu, “biraz eski görünüyor” meselesinden çok daha ciddi bir risktir ve çoğu zaman ev sahibi, durumu görünce yenilemeyi kabul ediyor.',
        ],
      },
      {
        h: 'Yenileme süreci nasıl işliyor?',
        p: [
          'Önce mevcut panoyu açıp her hattı tek tek kontrol ediyoruz: hangi hat hangi odaya gidiyor, kaç amperlik sigorta kullanılmış, kablo kesiti yeterli mi. Bu aşama önemli çünkü bazen sorun panoda değil, panoya giden ana kablodadır; sadece panoyu değiştirip kabloyu atlarsanız sorun devam eder.',
          'Ardından yeni pano için hat sayısını ve kaçak akım rölesi kapasitesini belirliyoruz; genelde evin büyüklüğüne göre ayrı hatlar açıyoruz (aydınlatma, priz, beyaz eşya gibi) ki bir hatta atan sigorta bütün evi karanlıkta bırakmasın. Montaj sırasında elektrik kesintisi birkaç saat sürüyor; işlem bitince her hattı tek tek test ediyor, kaçak akım rölesinin test butonuyla düzgün çalıştığını gösteriyoruz.',
        ],
      },
      {
        h: 'Panoyu yenilemeden önce kendi başınıza kontrol edebileceğiniz şeyler',
        p: [
          'Pano kapağını açıp (elektrikle uğraşmadan, sadece bakarak) buşon mu otomat sigorta mı olduğuna bakabilirsiniz; hâlâ vidalı, yuvarlak sigortalar görüyorsanız pano büyük ihtimalle eskidir. Kaçak akım rölesi varsa üzerindeki “test” butonuna basın; röle anında atıp devreyi kesmiyorsa, röle ya yok ya da çalışmıyor demektir.',
          'Panonun içinde ya da çevresinde yanık kokusu, kararma veya erimiş plastik görürseniz, bu kontrolü kendi başınıza yapmayı bırakıp bir elektrikçiyi çağırmanızı öneririm; çünkü o noktada panoya dokunmak, zaten zayıflamış bir bağlantıyı daha da bozabilir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Buşon sigorta hâlâ atıp çalışıyorsa yine de değiştirmem gerekir mi?',
        a: 'Çalışıyor olması güvenli olduğu anlamına gelmez. Buşon sigortalar zamanla hassasiyetini kaybedebilir ve gerçek bir kısa devrede yeterince hızlı atmayabilir. Ayrıca kaçak akım rölesi olmadığı için, sigorta düzgün çalışsa bile evde elektrik çarpması riskine karşı bir koruma yok demektir.',
      },
      {
        q: 'Pano yenileme ne kadar sürer?',
        a: 'Standart bir daire için genelde birkaç saat içinde tamamlanıyor; panonun büyüklüğüne, hat sayısına ve mevcut tesisatın durumuna göre süre değişebilir. İşlem sırasında evde bir süre elektrik kesintisi olur.',
      },
      {
        q: 'Kaçak akım rölesi olan bir pano yine de yenilenmeli mi?',
        a: 'Röle varsa ve test butonuyla düzgün çalışıyorsa, panonun geri kalanı da sağlamsa yenilemeye gerek olmayabilir. Ama panoda köprüleme, kararma ya da yetersiz hat sayısı gibi başka sorunlar varsa, sadece röle var diye pano güvenli sayılmaz.',
      },
      {
        q: 'Kiracıyım, panoyu ben mi değiştirtmeliyim?',
        a: 'Pano bina/dairenin sabit tesisatının parçası olduğu için normalde ev sahibinin sorumluluğundadır. Durumu somut şekilde (fotoğraf, sigortanın sık atması gibi) ev sahibine iletmenizi öneririm; gerekirse yerinde inceleyip durumu ikinize de açıkça anlatabiliriz.',
      },
      {
        q: 'Yeni pano taktırınca sigorta atma sorunu tamamen biter mi?',
        a: 'Sigortanın atma sebebi panonun kendisiyse evet, büyük ölçüde çözülür. Ama sorun evdeki aşırı yüklü bir hattan ya da arızalı bir cihazdan kaynaklanıyorsa, o hat veya cihaz düzeltilmeden yeni panoda da aynı sigorta atmaya devam edebilir.',
      },
    ],
    related: [
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Elektrik Arıza Tespiti ve Onarımı', href: '/hizmetler/elektrik-ariza' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Sincan Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
