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
  /** true ise Sincan adresi/ifadesi gizlenir (Çankaya bölgesi yazıları) */
  hideBase?: boolean;
  /** Yazının ortasında gösterilecek ek görsel (örn. usta afişi) */
  inlineImage?: { src: string; alt: string; width: number; height: number };
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
  {
    slug: 'yenikent-yagmurda-kacak-akim-rolesi-atiyor',
    title: 'Yenikent’te Yağmur Yağınca Kaçak Akım Rölesi Neden Atıyor?',
    description:
      'Yenikent’te bahçeli evlerde yağmurdan sonra atan kaçak akım rölesinin en sık sebepleri: bahçe lambası, dış priz, su motoru hattı. Yenikent elektrik ustası gözüyle anlattık.',
    keyword: 'Yenikent elektrik ustası',
    date: '2026-09-25',
    readingMin: 6,
    excerpt:
      'Hava kuruyken hiçbir sorun yok, ilk sağanakla birlikte evin elektriği gidiyor. Yenikent’te bahçeli evlerde bu şikâyeti çok duyuyoruz. Sebep neredeyse her zaman evin dışında bir yerde.',
    intro:
      'Yenikent’ten gelen telefonların bir kısmı hep aynı cümleyle başlıyor: “Usta, yağmur yağdı, elektrik gitti. Kaldırıyorum, tutmuyor.” Sonra hava açıyor, ertesi gün şalter kalkıyor ve her şey normale dönüyor. Ev sahibi de haklı olarak “demek ki geçti” diye düşünüyor. Geçmiyor. Bir sonraki yağmurda aynı şey tekrar ediyor, üstelik her seferinde biraz daha zor toparlanıyor. Yenikent’te bahçeli, müstakil ya da az katlı evlerin çok olması bu tabloyu sık görmemizin ana nedeni. Bu yazıda bu tür arızaya nasıl yaklaştığımızı, sizin evde neye bakabileceğinizi ve nerede durmanız gerektiğini anlatıyorum.',
    sections: [
      {
        h: 'Atan şey sigorta değil, kaçak akım rölesi',
        p: [
          'Önce panoya bakalım. Yağmurla gelen kesintilerde inen eleman çoğu zaman normal otomat sigorta değil, üzerinde “T” ya da “TEST” yazan düğmesi olan kaçak akım rölesidir. Bu röle, hattan giden akımla geri dönen akım arasında fark gördüğünde açar. Konutlarda kullandığımız 30 mA’lik röle, o farkın 30 miliamper civarına çıkmasına izin vermez. Yani bir yerde akım, gitmesi gereken yol yerine toprağa, ıslak bir duvara ya da suya doğru kaçıyor demektir.',
          'Bu ayrım önemli çünkü sigortayı büyütmek, yerine başka bir şey takmak gibi “çözümler” kaçak akımda hiçbir işe yaramaz. Röle görevini yapıyor. Bizim işimiz kaçağın nereden olduğunu bulmak.',
        ],
      },
      {
        h: 'Yenikent’te en çok nereden çıkıyor?',
        p: [
          'Sahada karşılaştığımız sebepleri sıklığına göre sayarsam, ilk sırada bahçe aydınlatması var. Duvara ya da çim kenarına sonradan eklenmiş aplikler, kazığa takılmış bahçe lambaları… Çoğunun buatı ya düz tavana bakacak şekilde ters takılmış ya da contası zamanla sertleşmiş. Su önce buata giriyor, sonra klemensin etrafında ince bir nem tabakası oluşuyor ve röle atıyor.',
          'İkinci sırada dış priz geliyor. Balkon ya da bahçe duvarına takılmış, kapaksız veya kapağı kırık bir priz yağmurda doğrudan suya maruz kalıyor. Dış mekânda en az IP44, açıkta kalan yerlerde tercihen IP65 korumalı, kapaklı priz kullanılmalı. Üçüncüsü de bahçedeki su motoru ya da hidrofor hattı. Toprağın altından geçirilmiş, boruya alınmamış ya da iç mekân kablosuyla çekilmiş hatlar birkaç yıl sonra kaçak vermeye başlıyor.',
        ],
      },
      {
        h: 'Evde güvenle yapabileceğiniz kontrol',
        p: [
          'Panoda kaçak akım rölesinin altındaki otomat sigortaları sırayla indirin. Hepsi aşağıdayken röleyi kaldırın. Sonra sigortaları tek tek kaldırın; hangisini kaldırdığınızda röle tekrar atıyorsa kaçak o hattadır. Çoğu zaman bu “bahçe”, “dış aydınlatma” ya da “salon priz” diye etiketlenmiş hat çıkıyor. Etiket yoksa, hangi odanın elektriği gidiyorsa ona bakarak anlayabilirsiniz.',
          'Kaçaklı hattı bulduktan sonra onu kapalı bırakıp evin geri kalanını kullanabilirsiniz. Islak buatı açmak, kablo ek yerlerini kurutmaya çalışmak ya da bantla sarmak ise işin bizim tarafımızda kalsın. Özellikle hat henüz ıslakken yapılan müdahale, sorunu saklar ama çözmez.',
        ],
      },
      {
        h: 'Kalıcı çözüm nasıl oluyor?',
        p: [
          'Yerinde önce izolasyon ölçümü yapıyoruz; hat üzerinde kaçağın hangi noktada yoğunlaştığını görmek için megerle bakıyoruz. Buat kaynaklıysa ek yerini yenileyip su almayan, contalı bir buatla değiştiriyoruz ve kablo girişini aşağıdan veriyoruz ki su yolunu bulamasın. Dış aplik ya da bahçe lambası bozulmuşsa, dış mekâna uygun koruma sınıfında olanla değiştiriyoruz.',
          'Toprak altındaki hatlarda ise çoğu zaman tamir yerine yenileme daha mantıklı oluyor. Toprak altına giden kablo ya yeraltına uygun tipte olmalı ya da koruge boru içinde gitmeli. Bir de şunu öneriyoruz: bahçe ve dış mekân hattını mümkünse kendi kaçak akım rölesine bağlamak. Böylece yağmurda bahçe hattı atsa bile buzdolabınız, kombiniz, salonunuz çalışmaya devam ediyor.',
        ],
      },
      {
        h: 'Kış gelmeden bakmakta fayda var',
        p: [
          'Yenikent’te sonbahar yağmurlarını kar ve don izliyor. Don, buatın içindeki az miktardaki suyu genişletip çatlakları büyütüyor; bahar geldiğinde arıza daha da inatçı hâle geliyor. Bahçe aydınlatmanız, dış prizleriniz ya da su motorunuz varsa ve bu yıl bir iki kez yağmurla birlikte röle attıysa, kışa girmeden bir kontrol yaptırmak hem daha kolay hem daha ucuz.',
          'Sık sorulan bir soru da “röleyi iptal etsek?” oluyor. Etmiyoruz, ettirmiyoruz. Islak bir bahçede arızalı bir lambaya dokunan birini koruyan tek şey o röle.',
        ],
      },
    ],
    faq: [
      {
        q: 'Hava kuruyunca röle kalkıyor, yine de usta çağırmam gerekir mi?',
        a: 'Evet. Kuruyunca düzelmesi kaçağın ortadan kalktığını değil, nemin geçici olarak azaldığını gösterir. Ek yerindeki oksitlenme her yağmurda artar ve bir süre sonra kuru havada da atmaya başlar.',
      },
      {
        q: 'Kaçak akım rölesini daha yüksek mA’lik bir röleyle değiştirebilir miyiz?',
        a: 'Konut içi hatlarda bunu önermiyoruz. 30 mA, insanı elektrik çarpmasına karşı korumak için seçilen değerdir. Daha duyarsız bir röle, kaçağı gizler ve asıl işini yapamaz.',
      },
      {
        q: 'Sadece bahçe hattını ayırmak mümkün mü?',
        a: 'Çoğu panoda mümkün. Bahçe ve dış mekân hattını ayrı bir kaçak akım rölesine almak, yağmurlu havalarda evin geri kalanının etkilenmemesini sağlar. Panoda yer yoksa küçük bir ek kutu ile çözülebiliyor.',
      },
      {
        q: 'Yenikent dışında da geliyor musunuz?',
        a: 'Dükkanımız Sincan Yenikent’te; Yenikent, Törekent, Pınarbaşı ve çevresi en sık gittiğimiz bölgeler. Ankara’nın diğer ilçelerine de 08:00–23:00 arasında çıkıyoruz. 0506 254 76 78’den ulaşabilirsiniz.',
      },
    ],
    related: [
      { label: 'Yenikent Elektrik Ustası', href: '/hizmet-bolgeleri/yenikent-elektrikci' },
      { label: 'Elektrik Arıza Tespiti ve Onarımı', href: '/hizmetler/elektrik-ariza' },
      { label: 'LED ve Dış Mekân Aydınlatma', href: '/hizmetler/led-aydinlatma' },
      { label: 'Sigorta Panosu Ne Zaman Yenilenir?', href: '/rehber/sigorta-panosu-yenileme-sincan' },
    ],
  },
  {
    slug: 'klima-montaji-elektrik-hatti-29-ekim',
    title: 'Sincan 29 Ekim Mahallesi’nde Klima Montajı: Elektrik Hattı Nasıl Hazırlanır?',
    description:
      '29 Ekim’de yeni klima taktıracaklar için: elektrik hattı ayrı mı çekilmeli, mevcut prize mi bağlanmalı? Sincan elektrikçi gözünden doğru kurulum. Demir Elektrik: 0506 254 76 78.',
    keyword: '29 Ekim elektrikçi',
    date: '2026-10-02',
    readingMin: 6,
    excerpt:
      '29 Ekim’de klima taktıracak olanların en çok sorduğu soru: elektrik hattını mevcut prize mi bağlamalı, ayrı mı çekmeli? Sahadan doğru cevabı anlatıyoruz.',
    intro:
      '29 Ekim’deki yeni sitelerde ve TOKİ bloklarında yaz öncesi en çok aldığımız çağrılardan biri klima montajı için elektrik hattı. Klimacı cihazı duvara asıyor ama elektrik bağlantısı çoğu zaman “en yakın priz nereye denk gelirse” mantığıyla yapılıyor. 29 Ekim elektrikçi olarak söyleyelim: bu, kısa vadede çalışır ama uzun vadede sigorta atması, priz ısınması ya da daha kötüsü yangın riskine kadar gidebilen bir hata olabilir.',
    sections: [
      {
        h: 'Klima için mevcut prize bağlanabilir mi?',
        p: [
          'Kısa cevap: küçük kapasiteli (9.000–12.000 BTU) bir klima için, hat uygunsa genelde bağlanabilir. Ama o prizin hangi sigortadan beslendiğine ve o hatta zaten başka ne bağlı olduğuna bakmadan karar vermiyoruz. Aynı hatta buzdolabı, çamaşır makinesi ya da ısıtıcı da varsa, klima devreye girdiğinde o hat taşıyamayacağı bir yüke çıkabilir.',
          '18.000 BTU ve üzeri klimalarda ise çoğu zaman ayrı bir hat öneriyoruz; bu kapasitedeki klimaların kalkış akımı yüksektir ve paylaşılan bir hatta sık sorun çıkarır.',
        ],
      },
      {
        h: 'Ayrı hat çekmek neden daha güvenli?',
        p: [
          'Ayrı hat, klimayı kendi sigortasına ve gerekiyorsa kendi kaçak akım rölesine bağlamak anlamına gelir. Bu sayede klima çalışırken evin başka bir yerinde sigorta atmaz, klima arızalansa da evin geri kalanı etkilenmez. 29 Ekim’deki yeni sitelerde daireler genelde yeterli sigorta kapasitesine sahip olsa da, pano içinde boş yer bırakılmamış olabiliyor; biz bu durumda mevcut grubu bozmadan uygun bir çözüm çıkarıyoruz.',
          'Dış ünite için çekilen kablonun dış ortam koşullarına uygun ve doğru kesitte olması da önemli; cam balkon ya da dışa açık duvardan geçen hatlarda bu noktayı özellikle kontrol ediyoruz.',
        ],
      },
      {
        h: 'Kablo kesiti neden önemli?',
        p: [
          'Klimanın etiketinde yazan akım değerine göre doğru kesit seçilmeli; çoğu konut klimasında 2,5 mm² yeterli olsa da, yüksek kapasiteli ve uzun kablo mesafesi olan kurulumlarda daha kalın kesit gerekebiliyor. İnce kesitle çekilmiş bir hat, klima tam güçte çalışırken ısınır; bu ısınma zamanla kablonun yalıtımını bozup kalıcı arızaya yol açabilir.',
          '29 Ekim’de yeni yapılan bazı sitelerde klimacı ekibinin kendi başına çektiği ince kablolu hatları, montaj sonrası kontrol için çağrıldığımızda düzelttiğimiz oluyor.',
        ],
      },
      {
        h: 'Topraklama ve kaçak akım rölesi klimada şart mı?',
        p: [
          'Evet. Klima metal gövdeli bir cihazdır ve nemli dış ortamda çalışır; topraklama bağlantısı olmadan kurulmuş bir klima, bir arıza anında gövdesinde gerilim taşıyabilir. Aynı şekilde klima hattının bir kaçak akım rölesinin arkasında olması gerekir; bu, hem cihazı hem de kullanıcıyı korur.',
          '29 Ekim’deki yeni bloklarda pano standartlara uygun kurulmuş olsa da, klima sonradan eklendiği için bu hattın doğru röleye bağlı olup olmadığını montaj sırasında ayrıca kontrol ediyoruz.',
        ],
      },
      {
        h: '29 Ekim’de klima montajı için elektrik hattını nasıl hazırlıyoruz?',
        p: [
          'Önce panodaki boş kapasiteyi ve mevcut grupları kontrol ediyoruz; yer varsa klimaya özel bir sigorta ayırıyor, yoksa mevcut uygun bir hattı güçlendiriyoruz. İç ve dış ünite arası kabloyu doğru kesitte çekip topraklama bağlantısını tamamlıyor, son olarak hattı yük altında test ediyoruz.',
          'Klimacı firma geldiğinde elektrik hattı zaten hazır ve test edilmiş oluyor; bu da montaj gününü kısaltıyor ve sonradan “priz yetersiz geldi” gibi sürprizleri önlüyor. 29 Ekim’in TOKİ blokları ve yeni sitelerinde bu işi yaz öncesi toplu halde yapan site yönetimleriyle de çalışıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: '29 Ekim’de klima için elektrikçiyi ne zaman çağırmalıyım?',
        a: 'En doğrusu klima montaj tarihinden önce. Elektrik hattını önceden hazırlayıp test ettiğimizde klimacı geldiğinde iş tek seferde bitiyor; montaj günü hat sorunuyla uğraşmıyorsunuz.',
      },
      {
        q: 'Mevcut prizden klima çalıştırıyorum, sigorta sık atıyor; sebebi ne?',
        a: 'Genelde o hatta klimayla birlikte başka yüklü bir cihazın da bağlı olması ya da hattın klimanın kalkış akımına yetmemesidir. Hattı ölçüp gerekiyorsa klimaya ayrı bir sigorta ve hat çıkarmak kalıcı çözüm oluyor.',
      },
      {
        q: 'Dış ünite kablosu için özel bir önlem gerekir mi?',
        a: 'Evet. Dış ortama açık kabloların neme ve güneşe dayanıklı, doğru kesitte ve düzgün sabitlenmiş olması gerekir; aksi halde zamanla yalıtım bozulup arıza çıkabilir.',
      },
      {
        q: '29 Ekim dışındaki Sincan mahallelerine de geliyor musunuz?',
        a: 'Geliyoruz. Dükkanımız Sincan Yenikent’te; 29 Ekim, Menderes, Fevzi Çakmak ve Sincan’ın tüm mahallelerine 08:00–23:00 arasında çıkıyoruz. 0506 254 76 78’den ulaşabilirsiniz.',
      },
    ],
    related: [
      { label: '29 Ekim Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/29-ekim-elektrikci' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Elektrik Arıza Tespiti ve Onarımı', href: '/hizmetler/elektrik-ariza' },
      { label: 'Priz Neden Isınır?', href: '/rehber/priz-neden-isinir-sincan' },
    ],
  },
  {
    slug: 'led-aydinlatma-vitrin-fevzi-cakmak',
    title: "Fevzi Çakmak'ta Dükkan Vitrini ve Apartmanda LED Aydınlatma: Doğru Güç ve Sigorta Seçimi",
    description:
      "Fevzi Çakmak'ta vitrin LED'i ya da apartman ortak alan LED'i taktırmadan önce güç ve sigorta hesabı neden önemli? Sahadan anlatım. Demir Elektrik: 0506 254 76 78.",
    keyword: 'Fevzi Çakmak elektrikçi',
    date: '2026-10-09',
    readingMin: 5,
    excerpt:
      "Sincan Fevzi Çakmak Mahallesi'ndeki dükkanlarda vitrin LED'i, apartmanlarda ise merdiven ve ortak alan LED'i en sık gördüğümüz işlerden. İkisinde de doğru güç ve sigorta hesabı yapılmazsa ışık kısa ömürlü oluyor.",
    intro:
      "Fevzi Çakmak Mahallesi'ndeki esnafla da, apartman yönetimleriyle de sık çalışıyoruz; ikisinin de talebi son yıllarda aynı yöne kaydı: LED. Dükkan sahibi vitrinini daha parlak göstermek istiyor, apartman yönetimi ise merdiven ve ortak alan aydınlatmasını tasarruflu hale getirmek istiyor. Fevzi Çakmak elektrikçi olarak şunu söyleyelim: LED'e geçmek doğru bir karar ama güç ve sigorta hesabı yapılmadan takılan her LED, bir süre sonra ya titriyor ya da erken ölüyor.",
    sections: [
      {
        h: "Vitrin LED'inde güç hesabı neden gözle yapılmaz?",
        p: [
          'Doğrudan cevap: vitrin LED şeridi ya da panosu, metre veya adet başına belli bir watt çeker; toplam yük hesaplanmadan takılan sürücü (trafo) ya zorlanıp ısınır ya da yetersiz kalıp ışığı kısar. Fevzi Çakmak Mahallesi\'ndeki bir lokantada tezgah üstü LED\'i hesapsız bağlanmış, iki ay içinde sürücü yanmıştı.',
          'Biz önce şeridin veya panonun metre/adet başına çektiği watt değerini çıkarıp sürücüyü ona göre, üstüne biraz pay bırakarak seçiyoruz. Vitrin saat boyunca açık kaldığı için burada pay bırakmak özellikle önemli; ucuz ve tam sınırda çalışan bir sürücü, esnafa birkaç ay içinde tekrar masraf çıkarıyor.',
        ],
      },
      {
        h: 'Dükkanda LED için ayrı sigorta gerekir mi?',
        p: [
          'Doğrudan cevap: vitrin LED\'i, tabela ve kasa aydınlatması aynı hatta toplanmışsa ve o hat zaten dar kesitli ise evet, ayrı bir sigorta önerilir. Fevzi Çakmak\'taki birçok dükkanda eski tesisat, aydınlatma ve priz hattını ayırmadan tek sigortada bırakmış; LED eklenince bu hat daha sık zorlanıyor.',
          'Ayrı sigorta, hem LED\'i hem de dükkanın diğer cihazlarını korur. Bir hatta sorun çıktığında diğerini etkilemeden sadece o grubu kesebilirsiniz; bu da esnaf için işin durmaması anlamına gelir.',
        ],
      },
      {
        h: "Apartmanlarda merdiven ve ortak alan LED'i",
        p: [
          'Doğrudan cevap: ortak alan LED\'ine geçerken en çok atlanan nokta, eski merdiven otomatiğinin yeni LED armatürle uyumlu olup olmadığıdır. Bazı eski otomatikler, düşük akım çeken LED armatürlerle düzgün çalışmayıp ışığı yanıp söndürebilir ya da hiç yakmayabilir.',
          'Fevzi Çakmak Mahallesi\'ndeki dört beş katlı apartmanlarda bu durumla sık karşılaşıyoruz; armatürü değiştirirken otomatiği de kontrol edip gerekirse LED uyumlu bir otomatikle değiştiriyoruz. Aksi halde yönetim "LED\'e geçtik ama merdiven karanlık kalıyor" şikayetiyle bize tekrar dönüyor.',
        ],
      },
      {
        h: 'LED montajında sık gördüğümüz üç hata',
        p: [
          "Birincisi, sürücüyü kapalı ve havasız bir tavan boşluğuna sıkıştırmak; ısınan sürücü zamanla ömrünü kaybediyor. İkincisi, farklı renk sıcaklığındaki (soğuk-sıcak beyaz) armatürleri aynı vitrinde ya da merdivende karıştırmak; görüntü düzensiz oluyor. Üçüncüsü, dış cepheye bakan tabela ve vitrin LED'lerinde neme dayanıklı olmayan bağlantı kullanmak; yağmur sonrası kısa devre riski doğuyor.",
          'Bu üçü de montaj sırasında küçük bir dikkatle önlenebilir; biz keşif aşamasında bu noktaları esnafa ve yöneticiye baştan söylüyor, sürpriz çıkmasını önlüyoruz.',
        ],
      },
      {
        h: "Fevzi Çakmak'ta LED aydınlatmayı nasıl kuruyoruz?",
        p: [
          "Önce alanı ve kullanım şeklini (vitrin, tabela, merdiven, ortak alan) birlikte değerlendirip doğru güç ve sigorta planını çıkarıyoruz. Dükkanımız Fevzi Çakmak'a birkaç dakika mesafede olduğu için esnafın işini uzun süre bekletmiyoruz; apartman işlerinde de yönetimle keşif sonrası net fiyatı konuşup iş öyle başlıyoruz.",
          'Montaj bittiğinde LED\'i bir süre yük altında çalışır bırakıp ısınma ve titreme kontrolü yapıyoruz. Bu basit test, hem esnafı hem yönetimi birkaç ay sonra aynı arızayla karşılaşmaktan kurtarıyor.',
        ],
      },
    ],
    faq: [
      {
        q: "Vitrin LED'im birkaç ay sonra sönükleşti, sebebi ne olabilir?",
        a: 'Genelde sürücünün gücü yetersiz seçilmiş ya da sürücü ısınarak zayıflamıştır. Şeridin gerçek yüküne göre doğru sürücüyü seçip havalanan bir yere monte etmek bu sorunu çözer.',
      },
      {
        q: 'Apartmanda LED\'e geçtik, merdiven otomatiği düzgün çalışmıyor, bu normal mi?',
        a: 'Hayır, bu eski otomatiğin düşük akım çeken LED armatürle uyumsuz olduğunun işareti. Otomatiği LED uyumlu bir modelle değiştirmek sorunu kalıcı çözer.',
      },
      {
        q: "Fevzi Çakmak'ta dükkan LED'i için ne kadar sürede gelirsiniz?",
        a: 'Dükkanımız Fevzi Çakmak Mahallesi\'ne birkaç dakika mesafede; mahalledeki vitrin ve tabela LED işlerine genellikle aynı gün bakabiliyoruz.',
      },
      {
        q: 'Vitrin ve tabela LED\'i için ayrı sigorta şart mı?',
        a: 'Hat zaten dar kesitli ve başka cihazlarla paylaşılıyorsa evet önerilir; bu hem LED\'i hem diğer cihazları korur, bir arıza diğerini etkilemez.',
      },
    ],
    related: [
      { label: 'Fevzi Çakmak Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/fevzi-cakmak-elektrikci' },
      { label: 'LED Aydınlatma', href: '/hizmetler/led-aydinlatma' },
      { label: 'Mağaza Elektrik Tesisatı', href: '/hizmetler/magaza-elektrik-tesisati' },
      { label: 'Sincan 29 Ekim\'de Klima Montajı İçin Elektrik Hattı', href: '/rehber/klima-montaji-elektrik-hatti-29-ekim' },
    ],
  },
  {
    slug: 'torekent-yuksek-blok-elektrik-gitti-kolon-hatti',
    title: 'Törekent’te Yüksek Blokta Elektrik Gitti: Daire Sigortası mı, Sayaç Panosu mu, Kolon Hattı mı?',
    description:
      'Törekent’teki yüksek bloklarda elektrik gidince sorun dairede mi, sayaç panosunda mı, kolon hattında mı? Ustanın sırasıyla baktığı yerler. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Törekent elektrikçi',
    date: '2026-10-09',
    readingMin: 6,
    excerpt:
      'Törekent’in on katlı bloklarında elektrik gidince insanlar önce daire panosuna bakıyor, orada bir şey bulamayınca da çaresiz kalıyor. Biz hangi sırayla bakıyoruz, kolon hattı ne zaman suçlu, anlattık.',
    intro:
      'Törekent’ten gelen çağrıların bir kısmı hep aynı cümleyle başlar: “Usta, evde elektrik yok ama panoda hiçbir sigorta inmemiş.” Sincan’ın en kalabalık mahallesinde, on katlı bloklarda ve çok bloklu sitelerde bu durumu sık görüyoruz. Çünkü elektrik daireye gelene kadar birkaç duraktan geçiyor ve sorun bu duraklardan herhangi birinde olabiliyor. Törekent elektrikçi olarak sahada hangi sırayla baktığımızı, sizin de telefonda bize nasıl yardımcı olabileceğinizi aşağıda anlattım.',
    sections: [
      {
        h: 'Elektrik daireye gelene kadar nereden geçiyor?',
        p: [
          'Kısaca üç durak var: binanın ana panosu ve sayaç panosu, sayaçtan dairenize çıkan kolon hattı, en son da dairenizin içindeki sigorta kutusu. Bunlardan biri sorun çıkarırsa daire karanlıkta kalır, ama hangisi olduğuna göre çözüm de, çağrılacak kişi de değişir.',
          'Törekent’teki bloklarda sayaçlar çoğunlukla zemin katta ya da bodrumda topludur. Her dairenin sayacının yanında ona ait bir sigorta veya şalter bulunur. Daire panosu sağlam görünüyorsa sıradaki bakılacak yer burasıdır.',
        ],
      },
      {
        h: 'Önce daire panosuna nasıl bakmalı?',
        p: [
          'Panonun kapağını açın ve en büyük şaltere, yani ana şaltere bakın; yanında genelde kaçak akım rölesi durur. İkisinin de kolu yukarıdaysa ve yine de hiçbir odada elektrik yoksa sorun büyük ihtimalle daire içinde değil, daha yukarıdadır.',
          'Burada sık gördüğüm bir yanlış var: bazı sakinler kolu indirip kaldırarak “sıfırlamaya” çalışıyor, olmayınca da defalarca deniyor. Elektrik gelmiyorsa şalteri zorlamanın bir faydası yok. Kolların konumunu söyleyip bizi aramanız daha doğru.',
        ],
      },
      {
        h: 'Sayaç panosundaki daire sigortası neden atar?',
        p: [
          'Daire panosunda her şey yukarıdaysa ve elektrik yoksa, sayaç panosundaki daire sigortanız atmış olabilir. Bu sigorta dairenin toplam yükünü korur; kışın iki ısıtıcı, fırın ve çamaşır makinesi aynı anda çalışınca toplam akım sınırı aşabilir ve en önce o sigorta düşer.',
          'Geçen kış Törekent’te bir blokta aynı hafta üç daireden bu şikayetle arandık. Üçünde de sorun sayaç panosundaki daire sigortasıydı, üçünde de akşam yemeği saatinde atıyordu. Sigortayı değiştirmek değil, dairenin yükünü dağıtmak kalıcı çözüm oldu. Sayaç panosuna yönetimin bilgisi olmadan müdahale etmeyin; çoğu blokta kilitlidir, yöneticiyle birlikte açarız.',
        ],
      },
      {
        h: 'Kolon hattı ne zaman suçlu?',
        p: [
          'Kolon hattı, sayaç panosundan dairenize kadar çıkan kablodur. Daire sigortası sağlamsa, sayaç dönüyorsa ama dairede elektrik yoksa ya da lambalar sebepsiz yere titriyorsa, kolon hattında bir bağlantı gevşemiş olabilir.',
          'Yüksek bloklarda bu hat on kat boyunca şaftın içinden geçer, ek yeri ya da klemens bağlantısı ısınıp gevşeyebilir. Belirtisi genelde şudur: elektrik gidip gelir, prizlerde voltaj düşer, bazen bir cihaz açılınca bütün ışıklar kısılır. Bu iş ölçü aletiyle ve hattın iki ucunu da kontrol ederek yapılır; tahminle kablo değiştirilmez.',
        ],
      },
      {
        h: 'Bütün blok karanlıksa kimi aramalı?',
        p: [
          'Sadece sizin daire değil, komşular ve merdiven ışıkları da gittiyse sorun binanın ana hattında ya da şebekededir. Önce 186 şebeke arıza hattını arayıp bölgede kesinti olup olmadığını sorun. Kesinti yoksa ve sadece sizin blok karanlıksa bina ana panosuna bakmak gerekir; o zaman yönetimle birlikte geliyoruz.',
          'Törekent’teki birçok site yönetimiyle çalıştığımız için ana pano ve sayaç odasının yerini, hangi şalterin hangi bloğu beslediğini çoğu zaman önceden biliyoruz. Bu da arızanın yerini bulma süresini ciddi şekilde kısaltıyor.',
        ],
      },
      {
        h: 'Törekent’te bizi aradığınızda ne soruyoruz?',
        p: [
          'İlk sorularımız hep aynı: Sadece sizin daire mi, komşular da mı? Daire panosundaki ana şalter ve röle yukarıda mı? Elektrik tamamen mi gitti, yoksa bazı odalarda var mı? Bu üç cevap, Törekent’e yola çıkmadan önce sorunun hangi durakta olduğunu büyük ölçüde gösteriyor.',
          'Demir Elektrik olarak Yenikent Menderes’teki dükkanımızdan Törekent’e 10 dakika içinde varıyoruz; haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz. Gelince önce ölçüp yeri tespit ediyor, keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Panoda sigorta inmemiş ama evde elektrik yok, neden?',
        a: 'Büyük ihtimalle sorun daire panosundan önce, sayaç panosundaki daire sigortasında ya da kolon hattındadır. Komşularda elektrik varsa bizi arayın; sayaç panosuna yönetimle birlikte bakarız.',
      },
      {
        q: 'Törekent’e akşam elektrikçi gelir mi?',
        a: 'Gelir. 23:00’e kadar çağrı alıyoruz ve Törekent’e dükkanımızdan 10 dakikada varıyoruz; akşam giden elektriğe aynı akşam bakıyoruz.',
      },
      {
        q: 'Lambalar bazen kısılıp açılıyor, kolon hattı mı bozuk?',
        a: 'Olabilir. Bir cihaz çalışınca bütün ışıklar kısılıyorsa hatta gevşek bir bağlantı ya da voltaj düşümü vardır. Ölçmeden kesin konuşmak doğru olmaz ama ertelenecek bir belirti değil.',
      },
      {
        q: 'Sayaç panosundaki sigortayı kendim kaldırabilir miyim?',
        a: 'Sayaç panosu bina ortak alanıdır, çoğu blokta kilitlidir. Sigorta tekrar tekrar atıyorsa kaldırmak sorunu çözmez; yük dağılımına bakılması gerekir.',
      },
    ],
    related: [
      { label: 'Törekent Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/torekent-elektrikci' },
      { label: 'Bina Elektrik Tesisatı', href: '/hizmetler/bina-elektrik-tesisati' },
      { label: 'Elektrik Arıza', href: '/hizmetler/elektrik-ariza' },
      { label: 'Sigorta Panosu Ne Zaman Yenilenir?', href: '/rehber/sigorta-panosu-yenileme-sincan' },
    ],
  },
  {
    slug: 'fatih-toplu-konut-ankastre-mutfak-hatti',
    title: 'Sincan Fatih’te Toplu Konut Dairesine Ankastre Set: Mutfak Hattı Nasıl Hazırlanır?',
    description:
      'Fatih Mahallesi’ndeki toplu konut dairelerinde ankastre ocak ve fırın takarken mutfak hattı neden ayrılmalı? Usta anlatımıyla kablo, sigorta ve sık hatalar. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Sincan Fatih elektrikçi',
    date: '2026-10-09',
    readingMin: 6,
    excerpt:
      'Fatih’teki toplu konut dairelerinde ankastre set takıldığı gün sigorta atmaya başlıyorsa sebep çoğu zaman cihaz değil, mutfağa giden hattır. Ocak ve fırın için hattı nasıl hazırladığımızı anlattık.',
    intro:
      'Sincan Fatih Mahallesi’nde toplu konut bloklarından gelen çağrılarda son yıllarda en çok değişen şey mutfak oldu. Eskiden tüplü ocak, tezgah üstü fırın vardı; şimdi neredeyse her taşınmada ankastre ocak, ankastre fırın ve davlumbaz geliyor. Bloklar ise o yükü düşünerek yapılmamış. Fatih elektrikçi olarak bu işe girerken ilk baktığımız yer cihazlar değil, panodan mutfağa giden hat oluyor. Nedenini sahada gördüklerimizle anlatayım.',
    sections: [
      {
        h: 'Ankastre ocak normal prize takılabilir mi?',
        p: [
          'Elektrikli ankastre ocak normal priz hattına bağlanmamalı. Cam seramik ve indüksiyon ocakların gücü birkaç kilovata çıkar; bu yük, aynı hattaki buzdolabı, kettle ve mikrodalgayla birleşince kablo ısınır ve sigorta atar. Atmazsa daha kötüsü olur, kablo yıllarca sınırda çalışır.',
          'Fatih’teki toplu konut dairelerinde mutfak prizleri genelde tek bir hattan beslenir. Taşınma günü ocağı bu hatta bağlayan çok gördük; ilk hafta sorun çıkmıyor, kış gelip ısıtıcı da devreye girince sigorta akşam yemeği saatinde atmaya başlıyor.',
        ],
      },
      {
        h: 'Ocak ve fırın için ayrı hat nasıl çekilir?',
        p: [
          'Ocak ve fırın için panodan mutfağa her birine ayrı bir hat çekiyoruz. Kesiti ve sigorta değerini cihazın etiketindeki güce göre seçiyoruz; ocak için genelde priz hattından daha kalın kablo gerekir, fırın için ise ayrı bir 2,5 mm² hat çoğu zaman yeterli olur. Rakamı kataloğa bakarak değil, takılacak cihazın etiketine bakarak belirliyoruz.',
          'Toplu konutlarda kabloyu nereden geçireceğimiz de önemli. Mevcut boruda yer varsa oradan çekiyoruz; yoksa sıva üstü kanal ya da dolap arkasından, sitenin kurallarına uygun ve göze batmayan bir güzergah seçiyoruz. Duvar kırmadan çözmeye çalışıyoruz ama gerekiyorsa bunu işe başlamadan söylüyoruz.',
        ],
      },
      {
        h: 'Daire panosu bu yükü kaldırır mı?',
        p: [
          'Ayrı hat çekmek yetmeyebilir; panonun ve dairenin toplam gücünün de buna izin vermesi gerekir. Fatih’teki eski bloklarda daire panosunda yeni sigorta için yer olmadığını, kaçak akım rölesinin hiç bulunmadığını sık görüyoruz.',
          'Böyle bir durumda panoyu genişletiyor ya da yeniliyoruz. Bir dairede panoyu açtığımızda dört sigortanın ikisinin üstü kararmıştı; ev sahibi ankastre setin faturasını ödemiş, panoyu hiç düşünmemişti. Önce panoyu toparladık, sonra ocağı bağladık. Sıralama bu olmalı.',
        ],
      },
      {
        h: 'Davlumbaz ve bulaşık makinesi ne olacak?',
        p: [
          'Davlumbaz az güç çeker, priz hattından beslenebilir; yeter ki prizi dolabın içinde ulaşılabilir bir yere koyalım. Bulaşık makinesi ise ısıtıcılı çalıştığı için yüksek akım çeker; mümkünse onu da ocak ve fırından ayrı, kendi sigortası olan bir prize bağlıyoruz.',
          'Sık gördüğümüz bir hata, bulaşık makinesinin prizini evyenin hemen altına koymak. Su kaçağında ilk ıslanan yer o priz olur. Prizi yan dolaba alıyor, mutfak hattını kaçak akım rölesi arkasında bırakıyoruz.',
        ],
      },
      {
        h: 'Fatih’te işi nasıl planlıyoruz?',
        p: [
          'Ankastre set gelmeden önce aranmak işimizi kolaylaştırıyor. Cihazların modelini ya da gücünü söylerseniz malzemeyi ona göre getiriyor, hattı set gelmeden hazır ediyoruz; montajcı geldiğinde bağlantı noktası onu bekliyor oluyor.',
          'Demir Elektrik olarak Yenikent Menderes’teki dükkanımızdan Fatih’e Yenikent yolu üzerinden 10–15 dakikada geliyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den bize ulaşabilirsiniz. Keşfe gelip panoyu ve güzergahı görüyor, net fiyatı söylüyor, onayınızla başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ankastre ocak takınca sigorta atıyor, ocak mı arızalı?',
        a: 'Çoğu zaman değil. Ocak, gücünü taşıyamayan bir priz hattına bağlanmıştır. Ayrı hat ve uygun sigortayla sorun kalıcı olarak çözülür.',
      },
      {
        q: 'Fırın ve ocak aynı hattan beslenebilir mi?',
        a: 'Önermiyoruz. İkisi aynı anda çalıştığında yük birleşir. Her birine kendi hattını ve sigortasını vermek hem daha güvenli hem de arıza anında hangisinin sorun çıkardığını hemen gösterir.',
      },
      {
        q: 'Toplu konutta duvar kırmadan hat çekilir mi?',
        a: 'Çoğu dairede evet. Mevcut boruda yer varsa oradan, yoksa kanal veya dolap arkasından geçiyoruz. Kırım gerekiyorsa bunu işe başlamadan söylüyoruz.',
      },
      {
        q: 'Fatih’e ne kadar sürede geliyorsunuz?',
        a: 'Menderes’teki dükkanımızdan Yenikent yolu üzerinden 10–15 dakikada Fatih’te oluyoruz.',
      },
    ],
    related: [
      { label: 'Fatih Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/fatih-elektrikci' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Sincan 29 Ekim’de Klima Montajı İçin Elektrik Hattı', href: '/rehber/klima-montaji-elektrik-hatti-29-ekim' },
    ],
  },
  {
    slug: 'yenikent-salon-avize-mi-led-spot-mu',
    title: 'Yenikent’te Salonda Avize mi, LED Spot mu? Tavan Aydınlatmasını Planlamak',
    description:
      'Yenikent’te salon için avize mi, LED spot mu, ikisi birden mi? Tavan yüksekliği, spot aralığı, renk sıcaklığı ve avize montajında usta tavsiyeleri. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Yenikent avize montajı',
    date: '2026-10-16',
    readingMin: 6,
    excerpt:
      'Yenikent’te salon aydınlatması için gelen ilk soru hep aynı: “Avize mi taktıralım, spot mu?” Cevap tavana, salonun kullanımına ve anahtar düzenine göre değişiyor. Sahada nasıl karar verdiğimizi anlattık.',
    intro:
      'Yenikent’te yeni taşınan bir aile bizi salona çağırdığında genelde elinde iki fotoğraf olur: biri büyük bir LED avize, öbürü tavana dizilmiş spotlar. “Hangisi daha güzel olur usta?” diye sorarlar. Güzellik zevk meselesi ama işin elektrik tarafı öyle değil. Tavanın yapısı, salonun büyüklüğü ve anahtarların yeri kararı neredeyse kendisi veriyor. Yenikent avize montajı ve spot işlerinde yıllardır nasıl karar verdiğimizi, sık gördüğümüz hatalarla birlikte anlatayım.',
    sections: [
      {
        h: 'Salonda avize mi, spot mu daha doğru?',
        p: [
          'Kısa cevap: çoğu salonda ikisi birlikte en doğrusu. Avize salonun ortasını ve oturma grubunu aydınlatır, spotlar ise kenarları, duvarları ve köşeleri doldurur. Tek başına avize köşeleri karanlık bırakır, tek başına spot ise salonu düz ve soğuk gösterir.',
          'Yenikent’teki apartmanların çoğunda tavan yüksekliği standart, yani 2,5–2,7 metre civarında. Bu yükseklikte sarkıtı uzun bir avize başa çarpar. Ya basık, tavana yakın bir LED avize seçiyoruz ya da avizeyi yemek masasının üstüne alıp oturma tarafını spotla çözüyoruz.',
        ],
      },
      {
        h: 'Spot takmak için asma tavan şart mı?',
        p: [
          'Gömme spot için evet, tavanın altında boşluk olmalı; yani asma tavan ya da kartonpiyer bandı gerekir. Beton tavana doğrudan gömme spot yapılmaz. Asma tavan istemeyenler için sıva üstü spot ya da ray spot iyi bir seçenek.',
          'Asma tavan yapılacaksa kablolama alçıpan kapanmadan önce bitmeli. Sık gördüğüm hata, alçıpancı tavanı kapattıktan sonra elektrikçinin çağrılması. O zaman her spot deliğinden kablo avlamaya çalışıyoruz, hem iş uzuyor hem de bağlantılar istediğimiz kadar düzgün olmuyor. Doğru sıra: önce biz hattı ve buatları döşeriz, sonra tavan kapanır, en son spotlar takılır.',
        ],
      },
      {
        h: 'Spotlar arası mesafe ve ışık rengi nasıl seçilir?',
        p: [
          'Standart tavanda spotları duvardan 50–60 santim içeride, kendi aralarında da yaklaşık 1–1,2 metre arayla diziyoruz. Daha sık dizince tavan delik deşik görünür, daha seyrek olunca da duvarda ışık lekeleri oluşur.',
          'Salonda sıcak beyaz, yani 3000K civarı ışık öneriyoruz. 6500K beyaz ışık salonu ofis gibi gösterir. Avizenin ve spotların renk sıcaklığı da aynı olmalı. Avize sıcak, spot soğuk olunca tavanda iki ayrı renk görünür ve göz rahatsız olur.',
        ],
      },
      {
        h: 'Avize montajında nelere dikkat ediyoruz?',
        p: [
          'İlk iş tavandaki askı noktası. Beton tavanda avizenin ağırlığına uygun çelik dübel ve kanca kullanıyoruz. Avizeyi sadece kablosuna ya da plastik dübele asmak, ağır avizelerde zamanla sarkmaya yol açar. Asma tavanda avize alçıpana asılmaz; askıyı üstteki betona ya da taşıyıcı profile bağlarız.',
          'İkinci iş bağlantı. Anahtarın fazı kestiğinden emin oluyoruz; nötrü kesen bir anahtar, LED avizeyi kapalıyken bile hafif yandırabilir ve ampul değiştirirken çarpılma riski yaratır. Metal gövdeli avizelerde toprak hattını da mutlaka bağlıyoruz.',
        ],
      },
      {
        h: 'Anahtar düzeni neden önemli?',
        p: [
          'Avize ve spotlar aynı anahtardan yanarsa salonu ya hep çok aydınlık ya hep karanlık kullanırsınız. Biz en az iki grup öneriyoruz: avize bir anahtardan, spotlar başka bir anahtardan. Uzun salonlarda spotları da iki gruba ayırıyoruz; akşam televizyon izlerken sadece arka grup yanıyor.',
          'Salonun iki kapısı varsa vaviyen bağlantı, yani iki ayrı noktadan açılıp kapanan anahtar yapıyoruz. Bunu sonradan yapmak duvar kırmayı gerektirebilir; bu yüzden plan aşamasında konuşmak gerekiyor.',
        ],
      },
      {
        h: 'Yenikent’te nasıl çalışıyoruz?',
        p: [
          'Salonu görüp tavana, mevcut buat ve anahtar yerlerine bakıyoruz. Sonra avize ve spot yerlerini tavana işaretleyip sizinle birlikte son kararı veriyoruz. Keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
          'Demir Elektrik’in dükkanı Yenikent Menderes’te; Yenikent’in her yerine kısa sürede geliyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yenikent’te avize montajı aynı gün yapılır mı?',
        a: 'Tavanda hazır bir avize çıkışı varsa çoğu zaman aynı gün yapılır. Yeni hat ya da asma tavan gerekiyorsa önce keşif yapıp planlıyoruz.',
      },
      {
        q: 'LED avize kapalıyken hafif yanıyor, neden?',
        a: 'Genelde anahtar fazı değil nötrü kesiyordur ya da ışıklı anahtar küçük bir akım geçiriyordur. Bağlantıyı düzeltmek ya da uygun anahtar takmak sorunu çözer.',
      },
      {
        q: 'Salona kaç spot gerekir?',
        a: 'Salonun ölçüsüne ve tavan yüksekliğine göre değişir. Standart tavanda yaklaşık 1–1,2 metre aralık iyi sonuç verir; yerinde ölçüp tavana işaretliyoruz.',
      },
      {
        q: 'Ağır avizeyi asma tavana asabilir miyiz?',
        a: 'Alçıpana asılmaz. Askıyı üstteki betona ya da taşıyıcı profile bağlıyoruz; aksi halde tavan zamanla çöker.',
      },
    ],
    related: [
      { label: 'Yenikent Elektrikçi', href: '/hizmet-bolgeleri/yenikent-elektrikci' },
      { label: 'Avize Montajı', href: '/hizmetler/avize-montaji' },
      { label: 'Spot Montajı', href: '/hizmetler/spot-montaji' },
      { label: 'Yenikent’te Yağmur Yağınca Kaçak Akım Rölesi Neden Atıyor?', href: '/rehber/yenikent-yagmurda-kacak-akim-rolesi-atiyor' },
    ],
  },
  {
    slug: 'sincan-mutfak-tezgah-alti-serit-led',
    title: 'Sincan’da Mutfak Tezgah Altı ve Dolap İçi Şerit LED: Doğru Döşeme Nasıl Yapılır?',
    description:
      'Sincan’da mutfak tezgah altı ve dolap içi şerit LED döşemesinde profil, sürücü yeri, ışık rengi ve anahtar seçimi. Usta anlatımıyla sık yapılan hatalar. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Sincan LED montajı',
    date: '2026-10-16',
    readingMin: 6,
    excerpt:
      'Tezgah altı şerit LED mutfağı hem güzelleştiriyor hem de çalışırken gölgeyi kaldırıyor. Ama profilsiz yapıştırılan, sürücüsü ocağın yanına sıkıştırılan LED birkaç ayda sönüyor. Sincan’da nasıl döşediğimizi anlattık.',
    intro:
      'Sincan’da mutfak yenileyen hemen herkes artık tezgah altına şerit LED istiyor. Haklılar da. Üst dolaplar tavan ışığını keser, tezgahta doğrarken eliniz kendi gölgenizde kalır. Tezgah altı LED bu gölgeyi kaldırır. Ama sahada çok gördüğümüz bir tablo var: marketten alınmış bir rulo şerit LED, dolabın altına doğrudan yapıştırılmış, sürücüsü de ocağın yanındaki dolaba sıkıştırılmış. Altı ay sonra şeridin yarısı sönük, yarısı yanıp sönüyor. Sincan’da bu işi nasıl yaptığımızı adım adım anlatayım.',
    sections: [
      {
        h: 'Şerit LED dolabın altına doğrudan yapıştırılır mı?',
        p: [
          'Yapıştırılmamalı. Şerit LED çalışırken ısınır; ısısını atacağı bir yüzey yoksa ömrü kısalır. Ahşap ya da sunta dolap altı ısıyı dağıtmaz. Bu yüzden şeridi alüminyum bir profilin içine döşüyoruz. Profil ısıyı alır, önündeki difüzör kapak da LED’lerin nokta nokta görünmesini engeller.',
          'Profilsiz şeridin bir sorunu daha var: mutfak buharı ve yağ doğrudan LED’in üstüne çöker. Profil kapağı silinir, şerit silinmez. Temizlik açısından da profil şart.',
        ],
      },
      {
        h: 'Sürücü nereye konmalı?',
        p: [
          'Şerit LED 220 volttan değil, 12 ya da 24 voltluk bir sürücüden beslenir. Sürücü de ısınır ve havasız bir yerde çabuk yorulur. Ocağın, fırının ya da bulaşık makinesinin yanına koymuyoruz. Üst dolabın içinde, havalanan ve kapağı açınca ulaşılabilen bir köşe seçiyoruz.',
          'Sürücünün gücünü şeridin toplam çekişine göre, üstüne pay bırakarak seçiyoruz. Uzun tezgahlarda 24 voltluk şerit tercih ediyoruz; uzun hatta 12 voltta şeridin sonu başından sönük yanabilir. Çok uzun koşularda şeridi iki uçtan besliyoruz.',
        ],
      },
      {
        h: 'Mutfakta hangi ışık rengi seçilmeli?',
        p: [
          'Tezgah altı için 4000K civarı nötr beyaz öneriyoruz. Sıcak sarı ışık yemeğin rengini olduğundan farklı gösterir; çok soğuk beyaz ise mutfağı hastane gibi yapar. Mutfakta renk ayırt etmek önemli olduğu için renk gösterimi yüksek, yani CRI değeri 90 ve üstü olan şeritleri tercih ediyoruz.',
          'Dolap içi aydınlatmada ise daha sıcak bir ışık seçilebilir; cam kapaklı vitrin dolaplarda 3000K tabaklara daha sıcak bir görüntü verir.',
        ],
      },
      {
        h: 'Evye ve ocak çevresinde nelere dikkat ediyoruz?',
        p: [
          'Evye üstünde su sıçrar. Bu bölümde profilin kapağı sızdırmaz olmalı, bağlantı noktaları evyenin hemen üstüne denk gelmemeli. Ocak tarafında ise asıl düşman ısı ve yağ buharı; şeridi ocağın tam üstüne değil, iki yanındaki dolapların altına alıyoruz.',
          'Sürücünün 220 volt tarafını kaçak akım rölesi arkasındaki bir hattan besliyoruz. Mutfak, evin en çok su ile elektriğin yan yana geldiği yer.',
        ],
      },
      {
        h: 'Tezgah altı LED nasıl açılıp kapanır?',
        p: [
          'Seçenek çok: duvardaki ayrı bir anahtar, profilin ucundaki dokunmatik anahtar ya da el yaklaştırınca yanan sensör. Elleriniz ıslak ya da yağlıyken sensörlü anahtar çok pratik oluyor. Duvar anahtarı isteyenler için mutfak girişindeki anahtar grubuna bir anahtar ekliyoruz.',
          'Sık yapılan bir hata, tezgah altı LED’i mutfak tavan lambasıyla aynı anahtara bağlamak. Tezgah ışığını gece tek başına yakmak çok kullanışlıdır; ayrı anahtar öneriyoruz.',
        ],
      },
      {
        h: 'Sincan’da işi nasıl planlıyoruz?',
        p: [
          'En doğrusu, mutfak dolapları takılmadan ya da takılırken çağrılmak. O zaman sürücü yerini ve kablo güzergahını dolapçıyla birlikte ayarlıyoruz. Dolaplar takılıysa da yapılır; sürücü yerini ve kabloyu dolap içinden, görünmeyecek şekilde çözüyoruz.',
          'Demir Elektrik olarak Sincan’ın tüm mahallelerine Yenikent Menderes’teki dükkanımızdan kısa sürede geliyoruz. Haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz. Keşif sonrası net fiyatı söylüyor, onayınızla başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Tezgah altı LED birkaç ay sonra söndü, neden?',
        a: 'Genelde profilsiz yapıştırıldığı için ısınmıştır ya da sürücü havasız bir yerde, gücünün sınırında çalışmıştır. Profil ve doğru sürücüyle yeniden döşemek kalıcı çözümdür.',
      },
      {
        q: 'Şerit LED’in sonu başından sönük yanıyor, normal mi?',
        a: 'Uzun hatta gerilim düşer. 24 voltluk şerit kullanmak ya da şeridi iki uçtan beslemek bu farkı ortadan kaldırır.',
      },
      {
        q: 'Mevcut mutfağa sonradan tezgah altı LED yapılır mı?',
        a: 'Yapılır. Kabloyu ve sürücüyü dolap içinden, görünmeyecek şekilde geçiriyoruz; çoğu mutfakta iş aynı gün biter.',
      },
      {
        q: 'Sincan’da LED montajı için ne kadar sürede gelirsiniz?',
        a: 'Sincan’ın her mahallesine dükkanımızdan kısa sürede ulaşıyoruz; aradığınızda o anki konuma göre net süre söylüyoruz.',
      },
    ],
    related: [
      { label: 'Sincan Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci' },
      { label: 'LED Aydınlatma', href: '/hizmetler/led-aydinlatma' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Sincan Fatih’te Ankastre Set için Mutfak Hattı', href: '/rehber/fatih-toplu-konut-ankastre-mutfak-hatti' },
    ],
  },
  {
    slug: 'mevlana-mahallesi-isiklar-titriyor-kolon-notr',
    title: 'Mevlana Mahallesi’nde Apartmanın Işıkları Birden Titriyor: Kolon Hattı ve Nötr Gevşemesi',
    description:
      'Mevlana Mahallesi’nde birden fazla dairede aynı anda titreyen ışıklar genelde kolon hattındaki nötr bağlantısının gevşediğini gösterir. Nedenini ve doğru çözümü sahadan anlattık. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Mevlana Mahallesi elektrikçi',
    date: '2026-10-16',
    readingMin: 6,
    excerpt:
      'Bir dairede ışık titremesi küçük bir sorundur; ama Mevlana’da aynı anda birkaç dairede birden başlarsa mesele dairenin içinde değil, binanın kolon hattındadır. Hangi belirtiyi ciddiye almanız gerektiğini anlattık.',
    intro:
      'Mevlana Mahallesi’nden gelen çağrıların bir kısmı tek bir dairenin değil, apartmanın geneliyle ilgili. Yöneticiden ya da birkaç komşudan art arda aynı şikayet gelir: “Işıklar aynı anda titredi, bir dairede ampul patladı, komşunun buzdolabı normalden hızlı çalışmaya başladı.” Otuz yılı aşkın süredir Sincan’da bu işi yapan biri olarak söyleyeyim: bu tablo neredeyse her zaman tek bir yeri gösterir, binanın ortak kolon hattındaki nötr bağlantısı.',
    sections: [
      {
        h: 'Kolon hattı ve nötr ne işe yarar?',
        p: [
          'Kolon hattı, sayaç panosundan her dairenin kendi panosuna kadar inen ana besleme hattıdır. Mevlana’daki apartmanların çoğunda daireler bu hattı ortak kullanır; faz kabloları ayrı gitse de nötr genelde ortaktır. Nötr, akımın devresini tamamlayıp geri döndüğü yoldur ve her dairenin geriliminin dengeli kalmasını bu ortak hat sağlar.',
          'Kolon hattındaki nötr bağlantısı bir noktada gevşer, paslanır ya da tamamen kopacak kadar zayıflarsa dengeler bozulur. Bazı dairelerde gerilim normalin üstüne çıkar, bazılarında düşer; bu da ışıkların birden parlayıp sönmesi, bazı cihazların zayıf çalışması olarak kendini gösterir.',
        ],
      },
      {
        h: 'Neden tek daire değil, birkaç daire birden etkilenir?',
        p: [
          'Bir dairenin kendi tesisatındaki sorun yalnızca o daireyi etkiler. Ama kolon hattındaki ortak nötr bozulduğunda aynı hattı paylaşan dairelerin hepsi aynı anda, hatta aynı saniyede etkilenir. Mevlana’da aldığımız çağrılarda “bizim dairede de, üst kattaki komşuda da aynı anda oldu” cümlesini sık duyarız; bu cümle bize sorunun daire içinde değil ortak hatta olduğunu baştan söyler.',
          'Eski binalarda yıllar içinde kolon panosundaki klemensler ısı farkından gevşer, bazen nem alır. Ahmet Kabaklı Caddesi çevresindeki eski bloklarda bu panolara son kontrolün üstünden uzun süre geçmiş oluyor; sorun orada birikiyor.',
        ],
      },
      {
        h: 'Hangi belirtileri ciddiye almak gerekir?',
        p: [
          'Birden fazla dairede aynı anda ışıkların kısılıp parlaması en net işarettir. Bir dairede ampul ya da elektronik bir cihaz beklenmedik şekilde yanıyorsa, komşu dairede ise aynı saatte cihazların zayıf çalıştığı söyleniyorsa, bu da gerilim dengesizliğinin tipik görüntüsüdür. Tek bir dairenin kendi sigortasında yaşanan normal bir arızadan farkı budur: zamanlama ve yaygınlık aynı anda.',
          'Bu belirtiler görüldüğünde panodaki sigortaları değiştirmek ya da daire içini aramak zaman kaybıdır. Doğrudan bina yönetimine haber verip ortak kolon hattının ölçülmesini istemek gerekir.',
        ],
      },
      {
        h: 'Biz böyle bir çağrıda ne yapıyoruz?',
        p: [
          'Önce hangi dairelerin etkilendiğini ve ne zaman başladığını soruyoruz; bu bize sorunun kolon hattının hangi bölümünde olduğu konusunda ilk ipucunu veriyor. Sonra bina ana panosunu ve kolon klemenslerini açıp her fazın ve nötrün gerilimini ölçüyoruz. Gevşek ya da ısınmış bir klemens bulduğumuzda o bağlantıyı temizleyip yeniden, sıkı ve doğru şekilde kuruyoruz.',
          'Bazı eski binalarda sorun tek bir gevşek vidadan değil, yıllanmış ve kesiti yetersiz kalmış kolon kablosunun kendisinden kaynaklanır. Böyle durumlarda geçici bir sıkma yerine o bölümün yenilenmesini öneriyoruz; aksi halde birkaç ay sonra aynı şikayetle tekrar karşılaşılır.',
        ],
      },
      {
        h: 'Yönetim ve daire sahipleri ne yapmalı?',
        p: [
          'Böyle bir şikayet geldiğinde yöneticinin tek tek dairelerle uğraşmak yerine ortak pano için elektrikçi çağırması en hızlı çözümdür; maliyet de dairelere ortak gider olarak çok daha makul paylaşılır. Daire sahipleri ise bu süreçte hassas elektronik cihazlarını (televizyon, bilgisayar gibi) prizden çekip bekleyebilir, çünkü gerilim dengesizliği bu tip cihazlara zarar verebilir.',
          'Demir Elektrik olarak Mevlana Mahallesi’nde hem daire içi arızalara hem apartman ortak pano ve kolon hattı işlerine bakıyoruz. Menderes’teki dükkanımızdan Mevlana’ya kısa sürede geliyoruz; haftanın 7 günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz. Önce ölçüyor, keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Sadece bizim dairede ışıklar titriyor, bu da kolon hattı sorunu mu?',
        a: 'Genelde hayır. Tek dairede kalıyorsa sorun büyük ihtimalle o dairenin kendi tesisatı ya da panosundadır. Kolon hattı sorunu genelde birden fazla daireyi aynı anda etkiler.',
      },
      {
        q: 'Işıklar titrerken bir cihaz yaktık, zarar görür mü?',
        a: 'Görebilir; gerilim dengesizliğinde bazı cihazlar normalden yüksek gerilim alabilir. Belirtiyi fark eder etmez hassas cihazları prizden çekmek daha güvenlidir.',
      },
      {
        q: 'Kolon hattı arızasını kim çağırmalı, yönetici mi daire sahibi mi?',
        a: 'En hızlısı yöneticinin ortak pano için çağırmasıdır; birden fazla daireyi ilgilendiren bir arıza olduğu için maliyet de ortak gider olarak paylaşılabilir.',
      },
      {
        q: 'Mevlana Mahallesi’ne aynı gün gelir misiniz?',
        a: 'Çoğu zaman evet. Menderes’teki dükkanımız Mevlana’ya yakın; 08:00–23:00 arası gelen çağrılara aynı gün bakmaya çalışıyoruz.',
      },
    ],
    related: [
      { label: 'Mevlana Mahallesi Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/mevlana-elektrikci' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Bina Elektrik Tesisatı', href: '/hizmetler/bina-elektrik-tesisati' },
      { label: 'Sigorta Panosu Ne Zaman Yenilenir?', href: '/rehber/sigorta-panosu-yenileme-sincan' },
    ],
  },
  {
    slug: 'pinarbasi-kis-oncesi-elektrik-kontrolu',
    title: 'Pınarbaşı’da Kış Öncesi Elektrik Kontrolü: Isıtıcı Devreye Girince Sigorta Neden Zorlanıyor?',
    description:
      'Pınarbaşı’da eski apartmanlarda kış gelince sigorta neden sık atıyor, kaçak akım rölesi kış öncesi neden test edilmeli? Pınarbaşı elektrikçi gözünden kontrol listesi. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Pınarbaşı elektrikçi',
    date: '2026-10-30',
    readingMin: 6,
    excerpt:
      'Hava soğuyup ısıtıcılar, soba ve şofbenler devreye girince Pınarbaşı’nın eski apartmanlarında sigorta atma şikayetleri artıyor. Kışa girmeden nereye bakmak gerektiğini sahadan anlatıyoruz.',
    intro:
      'Ekim sonu geldi mi, Pınarbaşı’dan gelen telefonların tonu değişir. Yazın hiç sesini çıkarmayan bir hat, ilk soğuk gecede ısıtıcı takılınca birden atmaya başlar. Mahallenin büyük kısmı 1980’ler ve 90’larda yapılmış apartmanlardan oluştuğu için bu şikayeti her kış aynı sokaklardan, bazen aynı binadan tekrar tekrar alıyoruz. Pınarbaşı elektrikçi olarak otuz yılı aşan tecrübemizle söyleyebiliriz: kışın attığı sigorta çoğu zaman “bozuk sigorta” değil, yıllardır küçülen bir kablonun artık yetişemediği bir yüktür. Bu yazıda kış öncesi hangi noktalara bakmanız gerektiğini, biz geldiğimizde ne kontrol ettiğimizi anlatıyorum.',
    sections: [
      {
        h: 'Kış gelince sigorta neden daha sık atıyor?',
        p: [
          'Doğrudan cevap: kışın devreye giren elektrikli ısıtıcı, soba veya şofben, o hattın yazın hiç görmediği ek bir yük bindirir; eski kablo bu yükü taşıyamayınca sigorta devreyi keser. 2000-2500 watt’lık bir ısıtıcı tek başına önemli bir yük değildir, ama aynı hatta televizyon, buzdolabı ve birkaç priz zaten varsa toplam akım hızla sınırı zorlar.',
          'Pınarbaşı’daki eski dairelerde salon ve koridor genelde aynı hattan beslenir; kışın hem ısıtıcı hem de daha çok kullanılan aydınlatma aynı anda çekince sigorta önce o hattan ses verir. Yazın fark edilmeyen bir zayıflık, kışın böyle ortaya çıkar.',
        ],
      },
      {
        h: 'Pınarbaşı’nın eski apartmanlarında kablo neden yetersiz kalıyor?',
        p: [
          'Doğrudan cevap: 30-40 yıl önce çekilen hatlar, bugünün cihaz sayısına göre değil, dönemin sınırlı yüküne göre hesaplanmıştı; bazı binalarda ise bakır yerine alüminyum kablo kullanılmış, bu da zamanla bağlantı noktalarında gevşemeye ve direnç artışına yol açıyor.',
          'Sahada açtığımız panolarda sık görüyoruz: priz hattı 1,5 mm² kesitle çekilmiş, üstüne yıllar içinde ek priz, klima ve şimdi ısıtıcı eklenmiş. Kablo değişmeden sadece sigortayı büyütmek çözüm değil, aksine riski artırır; sigorta büyüyünce kablo artık koruyucusuz kalır ve ısınan nokta sigorta atmadan önce kendini gösterir.',
        ],
      },
      {
        h: 'Kaçak akım rölesi kış öncesi neden test edilmeli?',
        p: [
          'Doğrudan cevap: kışın nem, yoğuşma ve ısıtıcı kablolarının sık hareket ettirilmesi kaçak akım riskini artırır; 30 mA’lik röle bu kaçağı yakalayıp devreyi kesen tek koruma olduğu için kış öncesi test butonuyla kontrol edilmelidir.',
          'Pınarbaşı’daki birçok eski panoda bu röle hâlâ yok, bazı panolarda ise var ama yıllardır test edilmemiş. Test butonuna bastığınızda röle anında atmıyorsa, mekanizma yorulmuş ya da röle arızalanmış olabilir; bu durumda ısıtıcı gibi yüksek güçlü bir cihazın arızası sırasında evde hiçbir koruma kalmaz.',
        ],
      },
      {
        h: 'Kendi başınıza kış öncesi neye bakabilirsiniz?',
        p: [
          'Doğrudan cevap: panoyu açıp buşon mu otomat sigorta mı olduğuna, kaçak akım rölesinin test butonuna basıp düzgün attığına ve ısıtıcı takacağınız prizin ısınıp ısınmadığına bakmak, elektrikle uğraşmadan yapabileceğiniz en güvenli kontroldür.',
          'Priz kapağında sararma, pano içinde yanık kokusu ya da kararma görürseniz ısıtıcıyı o prize takmaktan vazgeçip bizi aramanız daha doğru olur; bu belirtiler geçmişte bir ısınma yaşandığını gösterir ve ısıtıcı yüküyle birlikte daha hızlı kötüleşebilir.',
        ],
      },
      {
        h: 'Pınarbaşı’da kış öncesi kontrolü nasıl yapıyoruz?',
        p: [
          'Önce panoyu açıp sigorta tipini, kaçak akım rölesinin varlığını ve çalışırlığını kontrol ediyoruz; sonra ısıtıcı, şofben gibi kışlık cihazların bağlanacağı hatları ölçüp kablo kesitinin ve bağlantı noktalarının durumunu değerlendiriyoruz. Sorun sadece gevşek bir bağlantıysa yerinde düzeltiyoruz; kablo yetersiz kalıyorsa o hattı ya da panonun tamamını yenilemeyi öneriyoruz.',
          'Dükkanımız Menderes Mahallesi’nde, Pınarbaşı’na yürüme mesafesinde olduğu için mahalledeki kış öncesi kontrol ve acil arıza çağrılarına genellikle yarım saat içinde ulaşıyoruz. Haftanın her günü 08:00-23:00 arası 0506 254 76 78’den bize ulaşabilirsiniz; keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Pınarbaşı’da akşam elektrikçi bulunur mu?',
        a: 'Bulunur. 08:00-23:00 arası çalışıyoruz ve Menderes’teki dükkanımız Pınarbaşı’na çok yakın olduğu için akşam saatlerindeki sigorta atması gibi arızalara da aynı gün bakıyoruz.',
      },
      {
        q: 'Kaçak akım rölesi kışın neden sürekli atıyor?',
        a: 'Çoğu zaman nemden kaynaklanan bir kaçaktır; bahçe, banyo ya da dış cepheye yakın bir hatta su veya yoğuşma sızmış olabilir. Hat hat ölçüp kaçağın hangi bölümde olduğunu bulup o noktayı onarıyoruz.',
        },
      {
        q: 'Elektrikli ısıtıcıyı takınca sigorta atıyor, bu tehlikeli mi?',
        a: 'Sigortanın atması aslında koruyucu bir tepkidir, tehlikeli olan sigortayı zorlayıp ısıtıcıyı yine de kullanmaya çalışmaktır. Hattı ölçtürüp ısıtıcıya uygun, gerekirse ayrı bir hat çıkarmak kalıcı çözümdür.',
      },
      {
        q: 'Pınarbaşı dışındaki Sincan mahallelerine de geliyor musunuz?',
        a: 'Geliyoruz. Dükkanımız Sincan Menderes Mahallesi’nde; Pınarbaşı, Plevne, Fatih ve Sincan’ın tüm mahallelerine 08:00-23:00 arası çıkıyoruz. 0506 254 76 78’den ulaşabilirsiniz.',
      },
    ],
    related: [
      { label: 'Pınarbaşı Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/pinarbasi-elektrikci' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Sigorta Panosu Ne Zaman Yenilenir?', href: '/rehber/sigorta-panosu-yenileme-sincan' },
    ],
  },
  {
    slug: 'menderes-mahallesi-aksam-pazar-elektrikci',
    title: 'Menderes Mahallesi’nde Akşam ve Pazar Günü Elektrikçi: Hangi Arıza Bekletilmez?',
    description:
      'Menderes Mahallesi’nde akşam saatlerinde ya da pazar günü sigorta atarsa, kaçak akım rölesi devreye girerse ne yapılmalı? Dükkanımız mahallenin içinde. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Menderes Mahallesi elektrikçi',
    date: '2026-11-06',
    readingMin: 6,
    excerpt:
      'Menderes’te akşam yemeği hazırlanırken ya da pazar günü evdeyken birden elektrik giden bir dairenin hikayesinden yola çıkarak, hangi arızanın sabaha bırakılabileceğini hangisinin bekletilmemesi gerektiğini anlatıyoruz.',
    intro:
      'Geçen hafta bir cuma akşamı, Alparslan Caddesi’ne yakın bir apartmandan arandık: mutfakta fırın ve su ısıtıcısı aynı anda çalışırken sigorta atmış, ocak saat 21:00’i göstermiş. Dükkanımız Menderes Mahallesi’nde olduğu için beş dakikada kapıdaydık. Bu tür çağrılar bize mahallede çok geliyor, çünkü akşam saatleri evde en çok cihazın birlikte çalıştığı an. Menderes elektrikçi olarak otuz yılı aşan tecrübemizle, hangi arızanın akşam ya da pazar günü bekletilmemesi gerektiğini, hangisinin ertesi güne bırakılabileceğini bu yazıda anlatıyoruz.',
    sections: [
      {
        h: 'Menderes’te akşam elektrikçi bulunur mu?',
        p: [
          'Doğrudan cevap: bulunur, ama 7/24 değil. Dükkanımız Menderes Mahallesi Alparslan Caddesi No:24’te ve haftanın her günü 08:00-23:00 arası açığız; akşam yemeği saatindeki sigorta ya da kaçak akım arızalarının büyük kısmı bu saatler içinde çözülür.',
          '23:00’den sonra gelen bir çağrıyı da not alıp sabah ilk iş olarak dönüyoruz; ama mahallenin içinde olduğumuz için 22:30’da gelen bir arızaya bile çoğu zaman o gün ulaşabiliyoruz. "7/24 açığız" demiyoruz, çünkü gerçek olmayan bir söz vermek istemiyoruz.',
        ],
      },
      {
        h: 'Pazar günü sigorta atarsa ne olur?',
        p: [
          'Doğrudan cevap: pazar günü de çalışıyoruz, hafta içinden farkı yok. Menderes’teki apartmanların çoğunda pazar öğleden sonra aile kalabalıklaşır, fırın, çamaşır makinesi ve klima aynı anda devreye girer; bu da haftanın en çok sigorta attığı zaman dilimlerinden biri.',
          'Sigorta attığında önce kolu tek seferde yukarı kaldırıp bırakın; tekrar atıyorsa zorlamayın, bu genelde o hatta gerçek bir aşırı yük veya kaçak olduğunu gösterir. Pazar günü aradığınızda da hafta içindeki gibi aynı gün geliyoruz.',
        ],
      },
      {
        h: 'Kaçak akım rölesi gece devreye girerse ne yapmalı?',
        p: [
          'Doğrudan cevap: röle gece aniden atıp evin tamamını karanlıkta bırakıyorsa, önce büyük cihazları (çamaşır makinesi, bulaşık makinesi, su ısıtıcısı) prizden çekip rölesiz kaldırmayı deneyin; kalkıyor ve tekrar atmıyorsa sabah ararsınız, tekrar atıyorsa o gece aramanız daha doğru olur.',
          'Menderes’teki eski apartmanlarda nemli bir banyo hattı ya da dışarıya yakın bir priz, gece nem artınca kaçak vermeye başlayabilir. Biz geldiğimizde hat hat ölçüp kaçağın hangi bölümde olduğunu buluyor, o noktayı onarıyoruz; rölenin kendisini değiştirmek çoğu zaman gerçek sebebi gizler.',
        ],
      },
      {
        h: 'Hangi arıza sabaha bırakılabilir, hangisi bekletilmez?',
        p: [
          'Doğrudan cevap: tek bir prizin ya da odanın çalışmaması, evin diğer kısmı normal çalışıyorsa genelde sabaha bırakılabilir. Yanık kokusu, panoda kıvılcım, sigortanın sıcak olması ya da evin tamamının elektriksiz kalması ise bekletilmeden aranması gereken durumlar.',
          'Menderes’te bir müşterimiz geçen ay pano içinden yanık kokusu geldiğini fark edip gece yarısı aramıştı; gittiğimizde gevşek bir bağlantının ısınıp izole bandı eritmeye başladığını gördük. O gece müdahale etmek, ertesi gün çıkabilecek bir yangını önledi.',
        ],
      },
      {
        h: 'Menderes’te bu çağrılara nasıl bakıyoruz?',
        p: [
          'Telefonda arızayı dinleyip hangi cihazın devredeyken sorunun başladığını soruyor, aciliyetine göre yola çıkıyoruz. Yerinde önce panoyu ölçüyor, sebebi bulup geçici bir çözümle mi yoksa parça değişimiyle mi düzeleceğine birlikte karar veriyoruz; keşif sonrası net fiyatı söylüyor, onayınızla işe başlıyoruz.',
          'Dükkanımız Menderes Mahallesi Alparslan Caddesi No:24’te olduğu için mahalledeki akşam ve pazar çağrılarına çoğu zaman yarım saatten kısa sürede ulaşıyoruz. Haftanın her günü 08:00-23:00 arası 0506 254 76 78’den bize ulaşabilirsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Menderes’te pazar günü elektrikçi bulunur mu?',
        a: 'Bulunur; haftanın her günü 08:00-23:00 arası çalışıyoruz. Dükkanımız mahallenin içinde olduğu için pazar günü gelen çağrılara da hafta içi gibi aynı gün bakıyoruz.',
      },
      {
        q: 'Gece yarısı elektrik arızası olursa ne yapmalıyım?',
        a: '23:00’den sonrası için 7/24 söz vermiyoruz, çağrınızı not alıp sabah ilk iş döneriz. Yanık kokusu ya da kıvılcım gibi gerçekten tehlikeli bir durum varsa gece de aramanız daha doğru olur, mahalledeki konumumuz sayesinde çoğu zaman o gece ulaşabiliyoruz.',
      },
      {
        q: 'Kaçak akım rölesi gece sürekli atıyor, sabaha kadar bekleyebilir miyim?',
        a: 'Büyük cihazları prizden çekip röleyi kaldırabiliyorsanız ve bir daha atmıyorsa sabaha bırakabilirsiniz. Röle tekrar atıyorsa ya da hangi cihazın sebep olduğunu bulamıyorsanız, aynı gece aramanız daha güvenli.',
      },
      {
        q: 'Menderes dışındaki Yenikent mahallelerine de akşam geliyor musunuz?',
        a: 'Geliyoruz. Dükkanımız Menderes Mahallesi’nde; 29 Ekim, Fevzi Çakmak ve Yenikent’in diğer mahallelerine de 08:00-23:00 arası aynı gün çıkıyoruz.',
      },
    ],
    related: [
      { label: 'Yenikent Menderes Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/menderes-elektrikci' },
      { label: 'Elektrik Arıza', href: '/hizmetler/elektrik-ariza' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Pınarbaşı’da Kış Öncesi Elektrik Kontrolü', href: '/rehber/pinarbasi-kis-oncesi-elektrik-kontrolu' },
    ],
  },
  {
    slug: 'sincan-avize-montaji-usta-anlatiyor',
    title: 'Sincan’da Avize Montajı: Usta Anlatıyor, Tavana Asmadan Önce Bakılması Gereken 4 Şey',
    description:
      'Sincan’da avize montajı yaptırmadan önce tavan dübeli, anahtarın fazı kesip kesmediği, topraklama ve bağlantı şekli. Otuz yıllık ustadan sahadan notlar. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Sincan avize montajı',
    date: '2026-11-06',
    readingMin: 6,
    excerpt:
      'Avize montajı "iki kablo bağla, tavana as" işi gibi görünür. Sincan’daki evlerde otuz yıldır avize asan bir usta olarak, montajdan önce baktığım dört şeyi ve en sık gördüğüm hataları anlattım.',
    intro:
      'Geçen ay Pınarbaşı’nda bir müşterim aradı: yeni aldığı kristal avizeyi damadı takmış, üç gün sonra gece yarısı bir çatırtı gelmiş, avize plastik dübeliyle birlikte tavandan yirmi santim sarkmış. Neyse ki kimse altında değilmiş. Ben bu işi otuz yılı aşkın süredir yapıyorum ve şunu rahatlıkla söyleyebilirim: avize montajında işin zor tarafı kabloyu bağlamak değil, o kabloyu ve avizeyi yıllarca güvenle tavanda tutmak. Sincan’da avize montajına gittiğimde ilk beş dakikada neye baktığımı burada sırayla anlatıyorum.',
    sections: [
      {
        h: 'Avizeyi tavanda ne tutacak? Önce dübele bakarım',
        p: [
          'Kısa cevap: avizenin ağırlığına göre dübel seçilir, eldeki dübele göre avize asılmaz. Üç dört kiloluk sade bir avizeyi iyi oturmuş bir plastik dübel taşır; ama sekiz on kiloyu geçen kristal ya da metal gövdeli bir avizede ben çelik dübel ya da tavana sabitlenen kanca kullanırım.',
          'Sincan’daki binaların tavanı birbirine benzemez. Atatürk ve Plevne taraflarındaki eski apartmanlarda tavan çoğu zaman asmolen döşemedir; matkap bazen betona değil, içindeki boşluklu tuğlaya denk gelir ve dübel orada tutmaz. Bunu matkabın giriş hissinden anlarım, boşluğa denk geldiyse yerini biraz kaydırıp betona oturturum. Yeni sitelerdeki asma tavanlarda ise alçıpan tek başına ağır avize taşımaz; askıyı alçıpanın üstündeki betona kadar indirmek gerekir.',
        ],
      },
      {
        h: 'Anahtar fazı mı kesiyor, nötrü mü?',
        p: [
          'Kısa cevap: anahtar mutlaka fazı kesmeli. Eski tesisatlarda anahtarın nötrü kestiğini çok görüyorum; o zaman lamba söner ama avizenin duyu hâlâ gerilimlidir. Siz ampul değiştirirken "nasılsa kapalı" diye duya dokunduğunuzda çarpılırsınız.',
          'Bu yüzden eski avizeyi söktüğüm anda kontrol kalemiyle yetinmez, ölçü aletiyle hangi ucun faz olduğuna bakarım. Anahtar nötrü kesiyorsa anahtar kutusunda uçların yerini değiştirip düzeltirim. Bu iş beş dakika sürer ama bilmeyen biri yıllarca o riskle yaşar.',
        ],
      },
      {
        h: 'Metal gövdeli avizede topraklama şart',
        p: [
          'Kısa cevap: avizenin içinden sarı-yeşil bir kablo çıkıyorsa o boşuna konmamıştır, tavandaki toprak hattına bağlanmalıdır. Metal gövdeli bir avizede içeride bir kablonun yalıtımı sıyrılırsa gövde gerilim alır; toprak bağlıysa kaçak akım rölesi anında keser, bağlı değilse o gerilim avizenin üstünde bekler.',
          'Sincan’ın eski apartmanlarında tavan buatından çoğu zaman toprak hattı inmez, sadece iki kablo vardır. Böyle durumlarda müşterime durumu açıkça söylerim: ya o hatta toprak çekeriz ya da en azından panoda düzgün çalışan bir kaçak akım rölesi olduğundan emin oluruz. Rölesi olmayan bir evde metal gövdeli avizeyi topraksız asmak bence doğru değil.',
        ],
      },
      {
        h: 'Kabloları bantla değil, klemensle bağlarım',
        p: [
          'Kısa cevap: kabloları birbirine burup üstünü izole bantla sarmak hem gevşer hem ısınır. Ben her avizede yaylı klemens kullanırım; kablo içine tam oturur, zamanla gevşemez ve sonradan sökmek gerektiğinde kabloyu kesmeden açılır.',
          'Bağlantıyı yaptıktan sonra kabloları avizenin kapağının içine sıkıştırmam, düzgünce buata yerleştiririm. Kapağın altında ezilen bir kablo yıllar içinde yalıtımını kaybeder; bu da az önce anlattığım gövde kaçağının en sık sebebidir. LED avizelerde de sürücüyü, ısınacağı bir yere değil havalanacağı bir yere koyarım.',
        ],
      },
      {
        h: 'Sincan’da avize montajına nasıl geliyorum?',
        p: [
          'Aradığınızda önce avizenin yaklaşık ağırlığını ve tavanın betona mı asma tavana mı olduğunu sorarım, ona göre doğru dübel ve askıyla gelirim. Yerinde eski avizeyi söker, faz-nötr ve toprak kontrolünü yapar, avizeyi asıp her kolunu tek tek yakarak teslim ederim. Avize kutusunun ambalajını da toplarım, evinizde iş bitince toz ve çöp bırakmam.',
          'Dükkanımız Yenikent Menderes Mahallesi Alparslan Caddesi No:24’te; Sincan merkeze, Pınarbaşı, Plevne ve Atatürk Mahallesi’ne 10-15 dakikada gelirim. Haftanın her günü 08:00-23:00 arası 0506 254 76 78’den ulaşabilirsiniz. Fiyatı yerinde, avizeyi ve tavanı görünce net söylerim.',
        ],
      },
    ],
    faq: [
      {
        q: 'Sincan’da avize montajı aynı gün yapılır mı?',
        a: 'Çoğu zaman evet. Avizenin ağırlığını ve tavanın tipini telefonda söylerseniz doğru malzemeyle gelir, aynı gün asıp teslim ederim.',
      },
      {
        q: 'Ağır kristal avizeyi plastik dübelle asabilir miyim?',
        a: 'Önermem. Sekiz on kiloyu geçen avizelerde plastik dübel zamanla yerinden oynar; çelik dübel ya da tavana sabitlenen kanca kullanmak gerekir.',
      },
      {
        q: 'Tavanda toprak kablosu yok, avizeyi yine de takabilir miyim?',
        a: 'Plastik gövdeli avizelerde sorun olmaz. Metal gövdeli avizede ise ya toprak hattı çekilmeli ya da panoda çalışan bir kaçak akım rölesi olduğundan emin olunmalı.',
      },
      {
        q: 'Avizeyi söndürdüğüm halde ampul değiştirirken çarpıldım, neden?',
        a: 'Büyük ihtimalle anahtar fazı değil nötrü kesiyor. Lamba söner ama duy gerilimli kalır. Montajda bunu ölçüp anahtar bağlantısını düzeltiyorum.',
      },
    ],
    related: [
      { label: 'Avize Montajı', href: '/hizmetler/avize-montaji' },
      { label: 'Spot Montajı', href: '/hizmetler/spot-montaji' },
      { label: 'Sincan Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci' },
      { label: 'Yenikent’te Salon İçin Avize mi LED Spot mu?', href: '/rehber/yenikent-salon-avize-mi-led-spot-mu' },
    ],
  },
  {
    slug: 'yenikent-pano-sigorta-tamiri',
    title: 'Yenikent’te Pano ve Sigorta Tamiri: Isınan Sigorta, Gevşek Klemens ve Yanlış Amper',
    description:
      'Yenikent’te sigorta sürekli atıyor, sigortaya dokununca sıcak geliyor ya da panoda kararma varsa ne yapmalı? Usta ağzından pano ve sigorta tamiri. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Yenikent sigorta tamiri',
    date: '2026-11-06',
    readingMin: 6,
    excerpt:
      'Sigorta atınca çoğu kişi sigortayı suçlar ve bir büyüğünü taktırır. Yenikent’te pano açtığım evlerde asıl sebebin çoğu zaman gevşek bir vida ya da yanlış amper olduğunu görüyorum. Sahadan anlattım.',
    intro:
      'Geçen hafta 29 Ekim Mahallesi’nden bir abla aradı: "Usta, mutfağın sigortası her akşam atıyor, komşu bir büyüğünü takalım dedi, takalım mı?" dedi. Hemen "takmayın" dedim ve yarım saat içinde kapısındaydım. Panoyu açınca sigortanın klemensi kararmış, kablonun ucu ısınmaktan sertleşmişti. Büyük amperli sigorta taksaydı sigorta artık atmayacaktı ama o kablo panonun içinde yanmaya devam edecekti. Otuz yılı aşkın süredir pano açıyorum; Yenikent’te sigorta ve pano tamirinde en sık gördüğüm üç sorunu bu yazıda anlatıyorum.',
    sections: [
      {
        h: 'Sigorta atıyorsa önce sigortaya kızmayın',
        p: [
          'Kısa cevap: sigorta çoğu zaman arızanın kendisi değil, haber verenidir. Ya o hatta kablonun taşıyabileceğinden fazla yük vardır, ya bir yerde kısa devre vardır ya da sigortanın bağlantısı gevşemiş ısınıyordur. Sigortayı değiştirmeden önce hangisi olduğunu bulmak gerekir.',
          'Ben gelince önce sigortanın hangi saatlerde, hangi cihaz açıkken attığını sorarım. Akşam fırınla su ısıtıcısı birlikte çalışınca atıyorsa yük meselesidir; hiçbir şey çalışmazken bile atıyorsa hatta bir kısa devre ya da kaçak aranır. Bu ayrımı yapmadan sigorta değiştirmek parayı boşa harcamaktır.',
        ],
      },
      {
        h: 'Sigortaya dokununca sıcak geliyorsa',
        p: [
          'Kısa cevap: normal çalışan bir sigorta ılık olabilir ama elinizi rahatsız edecek kadar sıcak olmamalıdır. Sıcaksa, üstünde kararma ya da plastikte erime varsa sebep neredeyse her zaman gevşek bir klemens vidasıdır. O sigortayı indirip bekletmeden bir elektrikçi çağırın.',
          'Yenikent’teki kooperatif binalarının çoğu otuz yıla yakın yaşta; panolardaki vidalar yıllar içindeki ısınıp soğumayla gevşer. Gevşek bağlantı ısınır, ısınan bağlantı daha da gevşer. Bunu sadece vidayı sıkarak geçiştirmem; kararmış kablo ucunu keser, temiz bakır çıkana kadar açar, gerekirse sigortayı da yeniler ve sıkarım.',
        ],
      },
      {
        h: 'Büyük amperli sigorta takmak çözüm değil',
        p: [
          'Kısa cevap: sigorta kabloyu korumak için oradadır, kablonun kesitine göre seçilir. Priz hatlarında kullanılan 2,5 mm²’lik kablo için genelde 16 amper, aydınlatma hattındaki 1,5 mm²’lik kablo için 10 amper sigorta uygundur. 16 yerine 25 amper takarsanız sigorta artık atmaz ama kablo aşırı yükte ısınır ve duvarın içinde yanar.',
          'Menderes’te açtığım bir panoda bütün sigortaların 25 amper olduğunu gördüm; önceki biri "atmasın" diye hepsini büyütmüştü. Bu tür panolarda her hattın kablosuna bakıp doğru sigortayı geri takıyorum. Gerçekten daha fazla güç gereken bir hat varsa, mesela mutfak, o zaman çözüm sigortayı büyütmek değil o hatta uygun kesitte yeni kablo çekmektir.',
        ],
      },
      {
        h: 'Etiketsiz pano, kapaksız pano',
        p: [
          'Kısa cevap: hangi sigortanın hangi odayı beslediğini bilmemek küçük bir dert gibi görünür ama arıza anında evin tamamını karanlıkta bırakmanıza sebep olur. Kapağı olmayan, bağlantıları açıkta duran bir pano ise çocuklu bir evde ciddi bir risktir.',
          'Tamir için gittiğim her panoda hatları tek tek bulup sigortaların altına etiket yazarım: mutfak, banyo, salon prizleri, aydınlatma. Kapak kırıksa ya da hiç yoksa yerine takarım. Sonradan siz de bir sigorta attığında hangi odaya bakacağınızı bilirsiniz.',
        ],
      },
      {
        h: 'Yenikent’te pano tamirine nasıl geliyorum?',
        p: [
          'Telefonda hangi sigortanın ne zaman attığını, panoda kararma ya da koku olup olmadığını sorarım. Aracımda farklı amperlerde sigorta, kaçak akım rölesi ve klemens hep bulunur; çoğu tamiri ilk gelişte, parça beklemeden bitiririm. Pano gerçekten yenilenmesi gereken durumdaysa bunu da açıkça söyler, keşif sonrası net fiyatı veririm.',
          'Dükkanım Yenikent Menderes Mahallesi Alparslan Caddesi No:24’te. Menderes, 29 Ekim, Fevzi Çakmak ve Ahi Evran mahallelerine genelde yarım saatten kısa sürede gelirim. Haftanın her günü 08:00-23:00 arası 0506 254 76 78’den ulaşabilirsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yenikent’te sigorta değişimi ne kadar sürer?',
        a: 'Tek bir sigortanın değişimi bağlantı kontrolüyle birlikte genelde yarım saati geçmez. Asıl zaman, sigortanın neden attığını bulmaya ayrılır.',
      },
      {
        q: 'Sigortam sıcak ve üstü kararmış, ne yapmalıyım?',
        a: 'O sigortayı hemen indirin ve o hattaki cihazları kullanmayın. Gevşek bağlantı ısınmaya devam eder; kablo ucu yenilenip bağlantı sıkılmadan tekrar açmayın.',
      },
      {
        q: 'Sigorta atmasın diye bir büyüğünü taktırabilir miyim?',
        a: 'Taktırmayın. Sigorta kablonun kesitine göre seçilir; büyütürseniz sigorta atmaz ama kablo aşırı yükte ısınıp duvarın içinde yanabilir.',
      },
      {
        q: 'Panomun komple değişmesi mi gerekiyor?',
        a: 'Her zaman değil. Çoğu panoda gevşek bağlantıyı ve tek tük arızalı sigortayı yenilemek yeterli olur. Pano çok eskiyse, kaçak akım rölesi yoksa ya da bara ve sigortalar yanmışsa yenilemeyi öneririm.',
      },
    ],
    related: [
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Elektrik Arıza', href: '/hizmetler/elektrik-ariza' },
      { label: 'Yenikent Elektrikçi', href: '/hizmet-bolgeleri/yenikent-elektrikci' },
      { label: 'Sincan’da Sigorta Panosu Yenileme', href: '/rehber/sigorta-panosu-yenileme-sincan' },
    ],
  },
  {
    slug: 'fevzi-cakmak-market-sogutucu-kacak-akim',
    title: 'Fevzi Çakmak’ta Market ve Lokantada Soğutucu Sigortası Neden Sık Atar?',
    description:
      'Fevzi Çakmak’ta market ve lokanta soğutucularında sigorta ve kaçak akım rölesi neden sık atıyor? Kompresörün kalkış akımı, nem ve doğru hat çözümü. Demir Elektrik: 0506 254 76 78.',
    keyword: 'Fevzi Çakmak elektrikçi',
    date: '2026-11-13',
    readingMin: 6,
    excerpt:
      'Fevzi Çakmak’taki market ve lokantalarda soğutucu dolap çalışırken sigorta ya da kaçak akım rölesi atıyorsa sebep genelde dolabın kendisi değil, beslendiği hattır. Sahadan nedenini ve çözümü anlattık.',
    intro:
      'Fevzi Çakmak Mahallesi’ndeki bir manavdan geçen hafta aldığımız çağrı hep aynı cümleyle başladı: “Usta, dondurucu çalışırken birden elektrik gitti, içindeki mal bozulacak diye korktuk.” Çarşıya bu kadar yakın bir mahallede esnafın soğutucu dolabı birkaç saat durduğunda kayıp küçük değil. Fevzi Çakmak elektrikçi olarak market, lokanta ve kasap soğutucularında sigorta ya da kaçak akım rölesi atması çağrılarına sık gidiyoruz; sebep neredeyse hiçbir zaman dolabın kendisi değil, dolabın bağlı olduğu hattır. Bu yazıda neden atıyor, ne zaman ciddiye almak gerekir, kalıcı çözüm nasıl kuruluyor anlatıyorum.',
    sections: [
      {
        h: 'Soğutucu dolap çalışırken sigorta neden atıyor?',
        p: [
          'Doğrudan cevap: kompresörün ilk çalışmaya başladığı an çektiği akım, normal çalışma akımının birkaç katına çıkar; hat bu kısa ama yüksek akımı taşıyamayacak kadar dar kesitliyse ya da aynı hatta başka bir cihaz zaten çalışıyorsa sigorta o anda atar. Dolap sorunsuz çalışıp birden duruyorsa suçlu çoğu zaman dolap değil, o hattaki toplam yüktür.',
          'Fevzi Çakmak’taki birçok dükkanda vitrin LED’i, kasa, klima ve soğutucu aynı eski hattan besleniyor. Soğutucunun kompresörü devreye girdiği anda klima ya da ısıtıcı da çalışıyorsa, hat anlık olarak sınırın üstüne çıkar ve sigorta devreyi keser.',
        ],
      },
      {
        h: 'Kaçak akım rölesi soğutucudan mı atıyor?',
        p: [
          'Doğrudan cevap: soğutucu dolapların arka tarafında defrost (buz çözme) suyu birikir; bu su zamanla kompresör gövdesine ya da fiş-priz bağlantısına sızarsa kaçak akım rölesi bunu algılayıp devreyi keser. Bu durumda röle görevini yapıyordur, arızalı olan dolabın kendisi ya da bağlantı noktasıdır.',
          'Bir lokantada açtığımız dondurucunun arkasındaki priz, defrost suyunun aktığı tahliye borusunun hemen altındaymış; yıllar içinde nem klemense sızmış, kaçak akım orada oluşmuş. Rölenin kendisini değiştirmek bu durumda sorunu çözmez, nemin geldiği noktayı bulmak gerekir.',
        ],
      },
      {
        h: 'Sigortayı büyütmek neden çözüm değil?',
        p: [
          'Doğrudan cevap: sigorta hattaki kabloyu korumak için seçilir; soğutucu sık attığı için bir üst amperli sigorta takmak, sigortayı susturur ama kabloyu korumasız bırakır. Kablo o yükü taşıyamıyorsa artık sigorta atmadan ısınmaya başlar, bu da uzun saatler kapalı kalan bir dükkanda fark edilmeden büyüyen bir risktir.',
          'Fevzi Çakmak’ta bir markette tam bunu gördük: soğutucu sigortası üç kez büyütülmüş, dördüncüsünde kablo ucu kararmıştı. Kabloyu temizden kesip doğru amperle geri bağladık; esnafa da artık o hattı tek başına soğutucuya ayırmasını önerdik.',
        ],
      },
      {
        h: 'Doğru çözüm: ayrı hat, doğru kesit, nem korumalı priz',
        p: [
          'Doğrudan cevap: soğutucu dolap, kasa ve aydınlatmadan ayrı kendi sigortasına ve kablo kesitine sahip bir hatta bağlanmalı; priz de nemli ortamda IP44 koruma sınıfında, kapaklı olmalı. Birden fazla soğutucu varsa, her birini aynı hatta üst üste bindirmek yerine mümkün olduğunca ayırıyoruz.',
          'Kablo kesitini dolabın etiketindeki akım değerine göre seçiyoruz; çoğu konut tipi soğutucuda 2,5 mm² yeterli oluyor ama sanayi tipi dondurucularda daha kalın kesit gerekebiliyor. Priz, tahliye borusunun ya da su sıçrayabilecek bir noktanın altına değil, kuru ve ulaşılabilir bir yere alınmalı.',
        ],
      },
      {
        h: 'Evdeki buzdolabı da benzer bir sorun yaşar mı?',
        p: [
          'Doğrudan cevap: evet, mantık aynıdır. Fevzi Çakmak’taki apartmanlarda da mutfak buzdolabı prizi su alan bir bulaşık makinesi hattıyla paylaşılmışsa ya da priz evyenin hemen altındaysa, benzer kaçak akım atması yaşanabilir. Fark, evde kayıp genelde bir yemek, markette ise bütün bir vitrin dolu.',
          'Bu yüzden eve gittiğimizde de buzdolabı prizinin ayrı sigortada olup olmadığına, nem alabilecek bir noktaya yakın durup durmadığına bakıyoruz; küçük bir önlem büyük bir kaybı önlüyor.',
        ],
      },
      {
        h: 'Fevzi Çakmak’ta bu işi nasıl çözüyoruz?',
        p: [
          'Çağrı geldiğinde önce hangi saatte, hangi cihaz çalışırken attığını soruyoruz; bu bize yük mü yoksa kaçak mı olduğu konusunda ilk ipucunu veriyor. Yerinde panoyu ve soğutucunun bağlı olduğu hattı ölçüyor, gerekiyorsa dolabın arkasını açıp nem izi arıyoruz. Sorunu bulduktan sonra keşif sonrası net fiyatı söylüyor, onayınızla aynı gün çözüyoruz.',
          'Dükkanımız Fevzi Çakmak’a birkaç dakika mesafede olduğu için esnafın soğutucu arızasını uzun süre bekletmiyoruz. Haftanın her günü 08:00-23:00 arası 0506 254 76 78’den bize ulaşabilirsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Fevzi Çakmak’ta en yakın elektrikçi kimdir, ne kadar sürede gelir?',
        a: 'Dükkanımız Fevzi Çakmak Mahallesi’ne birkaç dakika mesafede; soğutucu ve pano arızalarına genellikle aynı gün, acil durumlarda bir saat içinde ulaşıyoruz.',
      },
      {
        q: 'Soğutucu sigortası sık atıyor, bir büyüğünü taksak mı?',
        a: 'Takmayın. Sigorta kablonun kesitine göre seçilir; büyütürseniz sigorta atmaz ama kablo aşırı yükte ısınıp zamanla ciddi bir arızaya dönüşebilir. Önce hattı ölçtürmek gerekir.',
      },
      {
        q: 'Kaçak akım rölesi soğutucu çalışırken sürekli atıyor, sebebi ne olabilir?',
        a: 'Çoğu zaman defrost suyunun priz ya da kompresör bağlantısına sızmasıdır. Dolabın arkasını açıp nemin geldiği noktayı bulmak, röleyi değiştirmekten daha kalıcı bir çözümdür.',
      },
      {
        q: 'Market açılmadan önce soğutucu için elektrikçi çağırmak gerekir mi?',
        a: 'Yeni bir soğutucu ya da dondurucu alacaksanız, hat kurulumunu cihaz gelmeden önce yaptırmak işi hızlandırır; dolap geldiğinde hat zaten test edilmiş oluyor.',
      },
      {
        q: 'Evde de buzdolabı prizi aynı kaçak akım sorununu yaşayabilir mi?',
        a: 'Yaşayabilir, özellikle priz nemli bir noktaya yakınsa ya da başka bir ıslak hatla paylaşılıyorsa. Buzdolabı prizini ayrı sigortada ve kuru bir noktada tutmak riski azaltır.',
      },
    ],
    related: [
      { label: 'Fevzi Çakmak Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/fevzi-cakmak-elektrikci' },
      { label: 'Elektrik Arıza Tespiti ve Onarımı', href: '/hizmetler/elektrik-ariza' },
      { label: 'Mağaza Elektrik Tesisatı', href: '/hizmetler/magaza-elektrik-tesisati' },
      { label: 'Fevzi Çakmak’ta Vitrin ve Apartmanda LED Aydınlatma', href: '/rehber/led-aydinlatma-vitrin-fevzi-cakmak' },
    ],
  },
  {
    slug: 'sincan-fatih-elektrikci-isitici-sigorta-atiyor',
    title: 'Sincan Fatih Elektrikçi 0506 254 76 78 | Isıtıcıyı Açınca Atan Sigorta ve Kararan Priz',
    description:
      'Sincan Fatih’te kışın ısıtıcıyı açınca sigorta mı atıyor, prizin etrafı mı karardı? Fatih’e her gün çıkan usta anlatıyor: sebebi, yapılmayacaklar ve kalıcı çözüm. Sincan Fatih elektrikçi: 0506 254 76 78.',
    keyword: 'Sincan Fatih elektrikçi',
    date: '2026-11-19',
    readingMin: 6,
    image: '/images/rehber/sincan-fatih-elektrikci-isitici-sigorta-atiyor.webp',
    imageAlt: 'Sincan Fatih elektrikçi: hatları ayrı sigortalara bölünmüş, yeni kurulmuş daire sigorta panosu',
    inlineImage: { src: '/images/rehber/sincan-fatih-elektrikci-isitici-sigorta-atiyor-usta.webp', alt: 'Sincan Fatih sigorta ve pano yenileme – Demir Elektrik usta afişi, 0506 254 76 78', width: 1080, height: 1350 },
    excerpt:
      'Hava soğuyunca Fatih’ten gelen çağrıların yarısı aynı cümleyle başlıyor: “Usta, ısıtıcıyı açınca sigorta atıyor.” Sebebi çoğu zaman ısıtıcı değil, onu taşıyan priz ve hat. Sahadan anlattım.',
    intro:
      'Kasımın ilk soğuk akşamı Fatih Mahallesi’nde, toplu konut bloklarının birinden bir amca aradı: “Oğlum, yağlı radyatörü salona taktım, yarım saat sonra sigorta attı. Kaldırdım, bu sefer prizin kenarı kararmış.” Yarım saat içinde kapısındaydım. Prizi söktüğümde kablonun ucu ısınmaktan sertleşmiş, klemensin vidası gevşemişti. Radyatörün hiçbir suçu yoktu. Fatih’te kışın en çok gördüğüm bu arızayı, ben gelene kadar ne yapmanız gerektiğiyle birlikte anlatıyorum.',
    sections: [
      {
        h: 'Isıtıcı açınca sigorta neden atar?',
        p: [
          'Kısa cevap: elektrikli ısıtıcılar evdeki en çok akım çeken cihazlardandır. 2000 vatlık bir ısıtıcı tek başına bir priz hattının taşıyabileceğinin önemli bir kısmını kullanır. Aynı hatta çay makinesi, ütü ya da televizyon da varsa sigorta görevini yapar ve atar.',
          'Fatih’teki eski blokların çoğunda salonun, koridorun ve bazen bir yatak odasının prizleri tek sigortaya bağlıdır. Yıllar önce böyle döşenmiş, o gün için yetmiş. Bugün ise bir evde kışın iki ısıtıcı, bir kurutma makinesi ve bir su ısıtıcı birden çalışabiliyor. Ben gelince önce hangi prizlerin hangi sigortada olduğunu çıkarırım; çoğu zaman yükü iki hatta bölmek sorunu bitirir.',
        ],
      },
      {
        h: 'Prizin etrafı kararmışsa iş ciddidir',
        p: [
          'Kısa cevap: kararma, priz içindeki bağlantının ısındığını gösterir. O prizi kullanmayı hemen bırakın, sigortasını indirin. Kararmış priz bir sonraki kışa kalırsa duvarın içinde kablo eriyebilir.',
          'Isınmanın sebebi neredeyse her zaman gevşek bir vida ya da yorulmuş bir priz yayıdır. Fiş prizde oynuyorsa, takınca çıtırtı geliyorsa yay gevşemiştir; temas az olur, az temas ısı yapar. Ben bu durumda prizi yenilerim, kararmış kablo ucunu temiz bakıra kadar keser, bağlantıyı yeniden yaparım. Sadece kapağı değiştirip gitmem.',
          'Bir de çoklu priz meselesi var. Isıtıcıyı uzatma kablosuna, onu da başka bir çoklu prize takmak Fatih’te en sık gördüğüm hata. Isıtıcıyı mutlaka doğrudan duvar prizine takın.',
        ],
      },
      {
        h: 'Kışlık cihazlar için ayrı hat gerekir mi?',
        p: [
          'Kısa cevap: evde her kış iki ısıtıcı birden çalışıyorsa, ya da salonla yatak odası aynı sigortadaysa evet. Isıtıcının kullanılacağı odaya ayrı sigortalı tek bir priz hattı çekmek, her akşam atan sigortadan kurtulmanın en temiz yoludur.',
          'Fatih’teki bloklarda bunu çoğu zaman duvar kırmadan yaparım: koridordaki eski borudan ya da süpürgelik hizasından ince bir kanalla yeni hattı geçiririm, panoya da o hat için ayrı bir sigorta eklerim. Bir öğleden sonralık iştir ve kış boyu rahat edersiniz.',
        ],
      },
      {
        h: 'Ben gelene kadar ne yapmalısınız?',
        p: [
          'Kısa cevap: ısıtıcının fişini çekin, atan sigortayı bir kez kaldırmayı deneyin. Tekrar atıyorsa ısrar etmeyin. Prizde kararma, yanık kokusu ya da erime varsa o sigortayı indirili bırakın.',
          'Telefonda size hangi sigortanın attığını, hangi cihazların açık olduğunu ve prizde iz olup olmadığını sorarım. Bu üç cevap çoğu zaman arızanın yarısını çözer. Aracımda priz, sigorta, kablo ve klemens hep vardır; Fatih’te bu tür işleri genelde ilk gelişte, parça beklemeden bitiririm. İşe başlamadan fiyatı söylerim.',
        ],
      },
      {
        h: 'Fatih’e ne kadar sürede geliyorum?',
        p: [
          'Dükkanım Yenikent Menderes Mahallesi’nde, Fatih’e yolum kısa. Fatih, Mareşal Çakmak ve Pınarbaşı tarafına çoğu gün yarım saat içinde gelirim. Haftanın her günü 08:00–23:00 arası 0506 254 76 78’den ulaşabilirsiniz.',
          'Arızanın yanında ev ve işyeri elektrik tesisatı da yapıyorum. Fatih’te dairesini baştan yeniletenlere, çarşıda dükkân açanlara pano, priz ve aydınlatma hattını sıfırdan kuruyorum; eski tesisatın hangi kısmının kalabileceğini de keşifte söylüyorum.',
        ],
      },
    ],
    faq: [
      {
        q: 'Sincan Fatih’te elektrikçi aynı gün geliyor mu?',
        a: 'Evet. Fatih’e her gün çıkıyorum; arıza acilse sırayı ona göre ayarlıyorum. Prizde kararma, yanık kokusu ya da sürekli atan sigorta varsa aynı gün gelirim.',
      },
      {
        q: 'Isıtıcıyı hangi prize takmalıyım?',
        a: 'Doğrudan duvar prizine, tercihen başka büyük cihazın olmadığı bir hatta. Uzatma kablosu ya da çoklu priz kullanmayın; ısınma en çok bu bağlantılarda olur.',
      },
      {
        q: 'Prizin kenarı kararmış ama hâlâ çalışıyor. Bekleyebilir miyim?',
        a: 'Beklemeyin. Kararma bağlantının ısındığını gösterir ve çalışıyor olması tehlikeyi azaltmaz. O prizin sigortasını indirin ve prizi yeniletin.',
      },
      {
        q: 'Isıtıcı için ayrı hat çekmek duvar kırmayı gerektirir mi?',
        a: 'Çoğu zaman gerektirmez. Eski borulardan ya da süpürgelik hizasında ince bir kanaldan yeni hattı geçirip panoya ayrı bir sigorta eklerim.',
      },
    ],
    related: [
      { label: 'Sincan Fatih Elektrikçi', href: '/hizmet-bolgeleri/sincan-elektrikci/fatih-elektrikci' },
      { label: 'Sincan Sigorta ve Ana Şalter', href: '/sincan-sigorta-ana-salter' },
      { label: 'Elektrik Arıza', href: '/hizmetler/elektrik-ariza' },
      { label: 'Priz Neden Isınır?', href: '/rehber/priz-neden-isinir-sincan' },
      { label: 'Elektrik Tesisatı', href: '/hizmetler/elektrik-tesisati' },
    ],
  },
  {
    slug: 'sincan-yenikent-elektrikci-arayinca-ne-oluyor',
    title: 'Sincan Yenikent Elektrikçi 0506 254 76 78 | Aradığınızda Ne Soruyorum, Gelince Ne Yapıyorum?',
    description:
      'Sincan Yenikent’te elektrikçi çağırmadan önce bilmeniz gerekenler: telefonda sorduğum sorular, kapıdan girince ilk baktığım yerler, fiyatın nasıl söylendiği. Dükkanı Yenikent’te olan usta anlatıyor: 0506 254 76 78.',
    keyword: 'Sincan Yenikent elektrikçi',
    date: '2026-11-19',
    readingMin: 6,
    image: '/images/rehber/sincan-yenikent-elektrikci-arayinca-ne-oluyor.webp',
    imageAlt: 'Sincan Yenikent elektrikçi: işi biten dairede gizli lineer LED ve spot aydınlatma',
    inlineImage: { src: '/images/rehber/sincan-yenikent-elektrikci-arayinca-ne-oluyor-usta.webp', alt: 'Yenikent elektrik tamircisi – Demir Elektrik usta afişi, 0506 254 76 78', width: 1080, height: 1350 },
    excerpt:
      'Elektrikçi çağırmak çoğu insanı tedirgin eder: Ne kadar tutar, gelince neyi söker, işi uzatır mı? Yenikent’te dükkanı olan bir usta olarak telefondan ilk sorudan iş bitene kadar ne yaptığımı anlattım.',
    intro:
      'Yenikent’te yıllardır aynı dükkandayım; Menderes Mahallesi Alparslan Caddesi’nden geçenler beni tanır. Yine de telefonu açan çoğu kişinin sesinde aynı tedirginlik oluyor: “Usta, gelince duvar kırılacak mı? Fiyatı önceden söyler misin?” Bu yazıda bir elektrik arızasında beni aradığınız andan iş bitene kadar neler olduğunu adım adım anlatıyorum. Böylece neyle karşılaşacağınızı önceden bilirsiniz.',
    sections: [
      {
        h: 'Telefonda sorduğum dört soru',
        p: [
          'Kısa cevap: elektrik evin tamamında mı yoksa bir bölümünde mi yok, panoda hangi şalter düşmüş, kaldırınca tekrar atıyor mu ve kokuya, kıvılcıma ya da sese dair bir iz var mı? Bu dört sorunun cevabı arızanın nerede olduğunu çoğu zaman kendiliğinden söyler.',
          'Bazen telefonda çözüyoruz. Geçen ay 29 Ekim Mahallesi’nden arayan bir hanımefendiye kaçak akım rölesinin hangi sigortayı indirince kalktığını telefonda birlikte denedik; balkondaki dış priz çıktı. O akşam o sigortayı kapalı bıraktı, ertesi sabah gidip prizi değiştirdim. Gerekmeyen yere yol masrafı çıkarmam.',
        ],
      },
      {
        h: 'Kapıdan girince ilk baktığım yer',
        p: [
          'Kısa cevap: pano. Arıza ister mutfakta ister banyoda olsun, ilk iş panoyu açarım. Hangi sigorta neyi besliyor, bağlantılarda ısınma var mı, kaçak akım rölesi takılı mı, takılıysa çalışıyor mu, hepsine bakarım.',
          'Yenikent’teki kooperatif binalarının panoları yaşlı; bir arıza için gelip panoda başka bir tehlike gördüğüm çok oluyor. Bunu size gösterir, söylerim. Ama sizden habersiz iş büyütmem. Ne yapılması gerektiğini, hangisinin acil olduğunu ve hangisinin bekleyebileceğini ayrı ayrı anlatırım.',
        ],
      },
      {
        h: 'Arıza nasıl bulunur, duvar kırılır mı?',
        p: [
          'Kısa cevap: çoğu arızada duvar kırılmaz. Ölçü aleti ve sabırla, hattı tek tek ayırarak arızayı bulurum. Sorun genelde bir priz, bir buat ya da bir lamba bağlantısında çıkar.',
          'Kablonun duvarın içinde yandığı ya da çivi, matkap gibi bir şeyle delindiği durumlar az da olsa olur. O zaman bile önce eski borudan yeni kablo çekmeyi denerim. Duvar açmak son çaredir ve açılacaksa bunu işe başlamadan önce söylerim.',
        ],
      },
      {
        h: 'Fiyat ne zaman söylenir?',
        p: [
          'Kısa cevap: arızayı gördükten sonra ve işe başlamadan önce. Telefonda arızayı görmeden net fiyat vermem; çünkü “sigorta atıyor” diye aranan iş bazen beş dakikalık bir vida sıkma, bazen yarım günlük hat yenilemedir.',
          'Gelip baktığımda ne yapılacağını, hangi parçanın değişeceğini ve toplam ücreti söylerim. Siz onaylarsanız başlarım. İş bitince değiştirdiğim parçayı size gösteririm; eski sigortayı, yanmış prizi yanımda götürmem, isterseniz görürsünüz.',
        ],
      },
      {
        h: 'Yenikent’te hangi saatlerde çağırabilirsiniz?',
        p: [
          'Haftanın her günü 08:00–23:00 arası telefonum açık. Menderes, 29 Ekim, Fevzi Çakmak, Ahi Evran, Pınarbaşı ve Malazgirt’e genelde yarım saatten kısa sürede gelirim. Aklınıza takılan bir şey varsa çekinmeden arayın: 0506 254 76 78.',
          'Sadece arızaya değil, elektrik tesisatı işine de aynı düzenle gelirim. Yenikent’te ev tadilatında hattı yenilemek, işyeri açarken pano ve priz düzenini kurmak gibi işlerde önce keşfe gelir, ne yapılacağını ve fiyatı yazılı olarak söylerim.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yenikent’te elektrikçi ne kadar sürede gelir?',
        a: 'Dükkanım Yenikent’te olduğu için çoğu mahalleye yarım saat içinde gelirim. Acil arızalarda, mesela yanık kokusu ya da kıvılcım varsa, sırayı öne alırım.',
      },
      {
        q: 'Telefonda fiyat söylüyor musunuz?',
        a: 'Arızayı görmeden net fiyat söylemem, çünkü aynı şikâyetin arkasından çok farklı işler çıkabilir. Gelip baktıktan sonra, işe başlamadan fiyatı söylerim.',
      },
      {
        q: 'Arıza bulunurken duvar kırılır mı?',
        a: 'Çoğu arızada hayır. Arızalar genelde priz, buat ya da armatür bağlantısında çıkar. Duvarın açılması gerekirse bunu önceden söyler, onayınızı alırım.',
      },
      {
        q: 'Akşam saatinde gelir misiniz?',
        a: 'Evet, 23:00’e kadar çağrı alıyorum. Akşam gelen arızaların çoğunu o akşam bitiririm; parça gerekiyorsa evi güvenli hale getirip ertesi sabah tamamlarım.',
      },
    ],
    related: [
      { label: 'Yenikent Elektrikçi', href: '/hizmet-bolgeleri/yenikent-elektrikci' },
      { label: 'Yenikent Elektrik Tamircisi', href: '/yenikent-elektrik-tamircisi' },
      { label: 'Yenikent Kaçak Akım Rölesi', href: '/yenikent-kacak-akim-rolesi' },
      { label: 'Yenikent’te Pano ve Sigorta Tamiri', href: '/rehber/yenikent-pano-sigorta-tamiri' },
      { label: 'Elektrik Tesisatı', href: '/hizmetler/elektrik-tesisati' },
    ],
  },
  {
    slug: 'eryaman-elektrikci-sitede-elektrik-gitti',
    title: 'Etimesgut Eryaman Elektrikçi 0506 092 58 16 | Sitede Elektrik Gitti: Yönetimi mi, Elektrikçiyi mi Aramalı?',
    description:
      'Etimesgut Eryaman’da sitede yaşıyorsunuz ve elektrik gitti. Sorun dairenizde mi, kat panosunda mı, sitenin trafosunda mı? Hangi durumda yönetimi, hangi durumda elektrikçiyi aramalı, usta anlatıyor: 0506 092 58 16.',
    keyword: 'Etimesgut Eryaman elektrikçi',
    date: '2026-11-19',
    readingMin: 6,
    image: '/images/rehber/eryaman-elektrikci-sitede-elektrik-gitti.webp',
    imageAlt: 'Etimesgut Eryaman elektrikçi: sitede elektrik işleri tamamlanmış daire tavanı',
    inlineImage: { src: '/images/rehber/eryaman-elektrikci-sitede-elektrik-gitti-usta.webp', alt: 'Eryaman elektrikçi – Demir Elektrik usta afişi', width: 1080, height: 1350 },
    excerpt:
      'Eryaman’da sitede elektrik gidince ilk soru şu oluyor: “Yönetimi mi arayayım, elektrikçiyi mi?” Cevap, arızanın sayaçtan önce mi sonra mı olduğuna bağlı. Üç dakikada nasıl anlaşılacağını anlattım.',
    intro:
      'Eryaman’daki büyük sitelerden çağrı geldiğinde telefonun öbür ucunda çoğu zaman şu cümleyi duyuyorum: “Usta, güvenliği aradım, ‘bizde sorun yok, dairenizin içi’ dediler. Ama ben de panoya baktım, her şey yukarıda.” Site yaşamında elektriğin sorumluluğu ikiye bölünür: sayaca kadar olan kısım sitenin, sayaçtan sonrası sizin. Arızanın hangi tarafta olduğunu bilmek hem zaman kazandırır hem de boşuna para ödemenizi önler.',
    sections: [
      {
        h: 'Önce komşunuza bakın',
        p: [
          'Kısa cevap: aynı kattaki ya da aynı bloktaki komşuların elektriği de yoksa sorun sizde değildir; site yönetimini ya da güvenliği arayın. Sadece sizin dairenizde yoksa sorun büyük ihtimalle sayaçtan sonraki taraftadır.',
          'Eryaman’daki yüksek bloklarda bir kat ya da yarım blok karanlıkta kalabiliyor. Bu kolon hattında ya da kat panosundaki bir sigortada olur ve sitenin teknik ekibinin işidir. Böyle bir durumda ben gelsem de o panoyu yönetimin onayı olmadan açmam; açmamam da gerekir.',
        ],
      },
      {
        h: 'Daire panonuzda her şey yukarıdaysa',
        p: [
          'Kısa cevap: daire içindeki sigortaların hiçbiri düşmemiş ama elektrik yoksa, besleme dairenize gelmiyor demektir. Bakılacak yer sayaç ve kat panosundaki daire sigortasıdır. Bu sigorta sayaç dolabındadır ve çoğu sitede kilitlidir.',
          'Geçen kış Eryaman 4. Etap’ta bir dairede tam bu durum vardı. Güvenlik “sizin dairenin içi” demiş. Gidip ölçtüğümde sayaç çıkışındaki klemens gevşemiş, ısınıp teması kesmişti. Bu sayaç çıkışı sizin sorumluluğunuzdadır ama dolap sitenin. Yönetimle konuşup dolabı açtırdık, klemensi yeniledim, yarım saatte bitti.',
        ],
      },
      {
        h: 'Bir sigorta ya da kaçak akım rölesi düşmüşse',
        p: [
          'Kısa cevap: bu tamamen dairenizin içindeki bir arızadır ve site yönetiminin işi değildir. Bir kez kaldırmayı deneyin; tekrar atıyorsa elektrikçi çağırın.',
          'Eryaman’daki yeni sitelerde en sık gördüğüm sebepler balkon prizine giren yağmur suyu, çamaşır makinesinin yorulmuş rezistansı ve banyoda nem almış aspiratör. Kaçak akım rölesini hangi sigortayı indirince kalktığına bakarak bulurum; arızalı hattı ayırıp evin geri kalanını çalışır hale getiririm, sonra arızayı gideririm.',
        ],
      },
      {
        h: 'Kimi aradığınızı karıştırmamak için kısa liste',
        p: [
          'Komşularda da yok: site yönetimi ya da güvenlik. Sadece sizde yok, panonuzda her şey yukarıda: önce yönetime sayaç dolabını sorun, sorun sayaç çıkışındaysa elektrikçi. Panonuzda sigorta ya da röle düşmüş: doğrudan elektrikçi. Işıklar kısılıp parlıyor, cihazlar garip davranıyor: ana şalteri indirin ve hemen elektrikçi çağırın, bu nötr kopmasının işareti olabilir.',
          'Aradığınızda bu durumlardan hangisinde olduğunuzu söylerseniz telefonda yarı yarıya teşhis koymuş oluruz. Sorun sitenin tarafındaysa bunu size açıkça söylerim.',
        ],
      },
      {
        h: 'Eryaman’a ne zaman gelirim?',
        p: [
          'Eryaman’ın bütün etaplarına, Güzelkent’e, Tunahan’a ve Göksu tarafına her gün çıkıyorum. Haftanın her günü 08:00–23:00 arası 0506 092 58 16’dan ulaşabilirsiniz. İşe başlamadan önce fiyatı söylerim.',
          'Eryaman’da daire içi elektrik tesisatı yenileme ve sitelerin altındaki dükkânlar, ofisler için işyeri tesisatı da yapıyorum. Taşınmadan önce hattı elden geçirmek ya da yeni açılan bir işyerine pano kurmak isterseniz keşfe gelirim.',
        ],
      },
    ],
    faq: [
      {
        q: 'Eryaman’da sitede elektrik gitti, ilk kimi aramalıyım?',
        a: 'Komşularınızda da elektrik yoksa site yönetimini. Sadece sizde yoksa ve panonuzda bir sigorta ya da röle düşmüşse doğrudan elektrikçiyi arayın.',
      },
      {
        q: 'Sayaç dolabını elektrikçi açabilir mi?',
        a: 'Sayaç dolabı sitenin ortak alanıdır; yönetimin bilgisi ve izni olmadan açılmamalıdır. Ben de böyle bir durumda önce yönetimle konuşur, birlikte açarız.',
      },
      {
        q: 'Sayaç çıkışındaki arıza kimin sorumluluğunda?',
        a: 'Genel kural olarak sayaçtan sonraki hat daire sahibine aittir. Sitenizin yönetim planında farklı bir hüküm olabilir; emin değilseniz yönetime sorun.',
      },
      {
        q: 'Işıklar kısılıp parlıyor, ne yapmalıyım?',
        a: 'Ana şalteri hemen indirin ve elektrikçi çağırın. Bu nötr bağlantısındaki bir kopmanın belirtisi olabilir ve buzdolabı, televizyon gibi cihazlarınıza zarar verebilir.',
      },
    ],
    related: [
      { label: 'Eryaman Elektrikçi', href: '/hizmet-bolgeleri/eryaman-elektrikci' },
      { label: 'Eryaman Sigorta ve Ana Şalter', href: '/eryaman-sigorta-ana-salter' },
      { label: 'Eryaman Elektrik Tamircisi', href: '/eryaman-elektrik-tamircisi' },
      { label: 'Elektrik Arıza', href: '/hizmetler/elektrik-ariza' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
    ],
  },
  {
    slug: 'eryaman-elektrik-ustasi-secerken-nelere-bakmali',
    title: 'Etimesgut Eryaman Elektrik Ustası 0506 092 58 16 | Usta Seçerken Nelere Bakmalı?',
    description:
      'Etimesgut Eryaman’da elektrik ustası ararken ucuz işin pahalıya patlamaması için nelere bakmalı? Belge, kaçak akım rölesi, bantlı ek yeri ve yazılı fiyat. Eryaman’a her gün çıkan usta anlatıyor: 0506 092 58 16.',
    keyword: 'Etimesgut Eryaman elektrik ustası',
    date: '2026-11-19',
    readingMin: 6,
    image: '/images/rehber/eryaman-elektrik-ustasi-secerken-nelere-bakmali.webp',
    imageAlt: 'Etimesgut Eryaman elektrik ustası: işyerinde devam eden elektrik tesisatı ve aydınlatma montajı',
    inlineImage: { src: '/images/rehber/eryaman-elektrik-ustasi-secerken-nelere-bakmali-usta.webp', alt: 'Eryaman kaçak akım rölesi montajı – Demir Elektrik usta afişi', width: 1080, height: 1350 },
    excerpt:
      'Eryaman’da başkasının yaptığı işi düzeltmeye gittiğim evler az değil. Ucuz diye seçilen ustanın bıraktığı izler hep aynı: bantlı ek yerleri, sökülmüş röle, büyütülmüş sigorta. Usta seçerken nelere bakacağınızı anlattım.',
    intro:
      'Geçen ay Eryaman’da yeni taşınılan bir daireye çağrıldım. Ev sahibi tadilat sırasında birine mutfak prizlerini taşıtmış; iki hafta sonra kaçak akım rölesi her akşam atmaya başlamış. Tezgah arkasındaki kapağı açtığımda üç kablo izole bantla birbirine sarılmış, sıva içine öyle gömülmüştü. İşi baştan yapmak, ilk ödenen paranın iki katına çıktı. Elektrik ustası seçmek sanıldığından önemli; bu yazıda neye bakmanız gerektiğini, kendi işimden örneklerle anlatıyorum.',
    sections: [
      {
        h: 'Belgesi var mı, sorun',
        p: [
          'Kısa cevap: elektrik işi yapan kişinin ustalık belgesi ya da elektrik alanında yetki belgesi olmalı. Sormaktan çekinmeyin; işini bilen usta bu sorudan rahatsız olmaz.',
          'Belge tek başına iyi iş garantisi değildir ama en azından kişinin bu işi öğrenerek yaptığını gösterir. Eryaman’da elektrik işine giren boyacı, tadilatçı, “eli yatkın” komşu çok. Priz takmak kolay görünür; zor olan, o prizin hangi kabloyla, hangi sigortaya bağlandığını doğru kurmaktır.',
        ],
      },
      {
        h: 'Kaçak akım rölesini söken ustadan uzak durun',
        p: [
          'Kısa cevap: kaçak akım rölesi sürekli atıyorsa çözüm röleyi sökmek ya da köprülemek değildir. Röle sizi çarpılmaya karşı koruyan tek elemandır. “Bu röle bozuk, iptal edelim” diyen ustaya işi yaptırmayın.',
          'Röle gerçekten arızalı olabilir, bu da olur; ama önce test düğmesiyle ve hat ayırarak sebebi aramak gerekir. Eryaman’da attığı için iptal edilmiş, panoda boşta duran röleler gördüm. Bunu gördüğüm evde, başka ne iş için gelmiş olursam olayım, önce röleyi devreye alırım.',
        ],
      },
      {
        h: 'Ek yeri bantla değil klemensle yapılır',
        p: [
          'Kısa cevap: iki kablonun birleştiği her yer bir buatın ya da kasanın içinde, klemens veya uygun bir bağlantı elemanıyla yapılmalıdır. Bantla sarılıp sıva altına gömülen ek yeri zamanla ısınır, bant kurur ve açılır.',
          'İşi bitince ustanın açtığı kapaklara bir göz atın; içinde düzenli klemensler görüyorsanız iş temizdir. Sigortaların altına hangi hattın neye gittiğini yazdıysa daha da iyi. Ben her işten sonra panoyu etiketlerim; sonra bir arıza olduğunda hem sizin hem benim işim kolaylaşır.',
        ],
      },
      {
        h: 'Fiyatı işe başlamadan almak',
        p: [
          'Kısa cevap: iyi usta işi görmeden fiyat vermez ama işi gördükten sonra da başlamadan fiyatı net söyler. “Bir bakalım, sonra konuşuruz” deyip işi bitirdikten sonra rakam söyleyen ustayla anlaşmazlık çıkması kaçınılmazdır.',
          'Ben gelince ne yapılacağını, hangi parçaların değişeceğini ve toplam ücreti söylerim. İş sırasında beklenmedik bir şey çıkarsa, mesela duvarın içinde yanmış bir kablo, durur ve size söylerim. Onayınız olmadan işi büyütmem.',
        ],
      },
      {
        h: 'Eryaman’da elektrik ustası olarak çalışma düzenim',
        p: [
          'Eryaman’ın bütün etaplarına, Güzelkent, Tunahan ve Göksu’ya her gün çıkıyorum. Arıza, priz ve sigorta tamiri, kaçak akım rölesi, avize ve LED montajı, daire tesisatı yeniliyorum. Haftanın her günü 08:00–23:00 arası 0506 092 58 16’dan ulaşabilirsiniz.',
          'Ev ve işyeri elektrik tesisatında da burada saydığım kurallarla çalışırım: her hat ayrı sigortada, ek yerleri buatta, kaçak akım rölesi devrede, pano etiketli. Eryaman’da bir ofis ya da mağaza açıyorsanız tesisatı iş yerinin yüküne göre planlarım.',
        ],
      },
    ],
    faq: [
      {
        q: 'Eryaman’da elektrik ustası aynı gün gelir mi?',
        a: 'Arıza acilse aynı gün gelirim. Montaj ve tadilat gibi planlı işlerde size uygun gün ve saati birlikte belirleriz.',
      },
      {
        q: 'Kaçak akım rölesi sürekli atıyor, söktürsem olur mu?',
        a: 'Olmaz. Röle çarpılmaya karşı sizi koruyan elemandır. Attıysa bir yerde kaçak var demektir; sebebi bulunup giderilmeli, röle devrede kalmalıdır.',
      },
      {
        q: 'Ustanın işini doğru yapıp yapmadığını nasıl anlarım?',
        a: 'Ek yerlerinin buat içinde klemensle yapıldığına, kaçak akım rölesinin devrede olduğuna, sigorta amperlerinin büyütülmediğine ve panonun etiketlendiğine bakın.',
      },
      {
        q: 'Başkasının yaptığı işi düzeltir misiniz?',
        a: 'Evet. Önce mevcut tesisatı kontrol eder, neyin tehlikeli neyin kabul edilebilir olduğunu anlatırım. Sadece gerçekten gereken kısmı yeniden yaparım.',
      },
    ],
    related: [
      { label: 'Eryaman Elektrikçi', href: '/hizmet-bolgeleri/eryaman-elektrikci' },
      { label: 'Eryaman Kaçak Akım Rölesi', href: '/eryaman-kacak-akim-rolesi' },
      { label: 'Eryaman Avize Montajı', href: '/eryaman-avize-montaji' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Mağaza Elektrik Tesisatı', href: '/hizmetler/magaza-elektrik-tesisati' },
    ],
  },
  {
    slug: 'umitkoy-elektrikci-eski-site-evi-tesisat',
    title: 'Çankaya Ümitköy Elektrikçi 0506 092 58 16 | Eski Site Evlerinde Tesisat Yenilemeden Önce',
    description:
      'Çankaya Ümitköy’de eski site evi aldınız ya da tadilat yapacaksınız. Elektrik tesisatı tamamen mi yenilenmeli, yoksa yeterli mi? Topraklama, pano ve kablo kesiti için usta anlatıyor. Ümitköy elektrikçi: 0506 092 58 16.',
    keyword: 'Çankaya Ümitköy elektrikçi',
    date: '2026-11-19',
    readingMin: 7,
    image: '/images/rehber/umitkoy-elektrikci-eski-site-evi-tesisat.webp',
    imageAlt: 'Çankaya Ümitköy elektrikçi: tesisatı yenilenen evde duvar aplikleri ve gizli LED',
    excerpt:
      'Ümitköy’ün ilk kurulan sitelerindeki evlerin tesisatı otuz yılı geçti. Tadilata girerken “elektrik tamamen yenilensin mi?” sorusunu herkes soruyor. Hangi işaretlere baktığımı ve neyin yeterli olduğunu anlattım.',
    intro:
      'Ümitköy’de bahçeli, iki katlı bir site evinde tadilat başlamıştı. Ev sahibi beni mutfak dolapları gelmeden önce çağırdı: “Usta, duvarlar zaten açılıyor, elektriği de baştan yapalım mı?” Panoyu açtım, birkaç prizi söktüm. Kabloların bir kısmı hâlâ iyi durumdaydı, ama topraklama hattı sadece mutfak ve banyoda vardı, salon prizleri topraksızdı. Tamamen yenilemek gerekmedi; doğru yerleri yeniledik. Ümitköy’deki eski site evlerinde bu kararı nasıl verdiğimi anlatıyorum.',
    sections: [
      {
        h: 'İlk bakılacak üç şey',
        p: [
          'Kısa cevap: topraklama, panodaki koruma ve kabloların durumu. Bu üçü iyiyse tesisatın tamamını sökmeye gerek kalmayabilir. Biri bile eksikse, o kısım mutlaka ele alınmalıdır.',
          'Topraklamaya prizlerin içinde sarı-yeşil kablo olup olmadığına bakarak başlarım, ama asıl ölçü aletle yapılır; kablo var diye bağlı olduğunu varsaymam. Panoda kaçak akım rölesi olup olmadığına, sigortaların kablolara uygun seçilip seçilmediğine bakarım. Kabloda ise kılıfın sertleşip çatlamasına, uçlarda kararma ve ısınma izine bakarım.',
        ],
      },
      {
        h: 'Topraksız priz, eski evlerin en yaygın sorunu',
        p: [
          'Kısa cevap: topraksız prize takılan çamaşır makinesi, bulaşık makinesi ya da metal kasalı bir cihaz, içinde bir kaçak olduğunda gövdesinden çarpabilir. Kaçak akım rölesi bu riski azaltır ama topraklamanın yerini tutmaz.',
          'Ümitköy’ün eski sitelerinde topraklama genelde sonradan, kısmen yapılmış. Mutfak ve banyo topraklı, odalar değil. Tadilat sırasında duvarlar zaten açıksa eksik odalara toprak hattı çekmek hem kolay hem ucuzdur. Duvar açılmayacaksa çoğu zaman eski borulardan yeni kablo çekmek mümkündür.',
        ],
      },
      {
        h: 'Pano yenilenmeli mi?',
        p: [
          'Kısa cevap: panoda kaçak akım rölesi yoksa, sigortalar buşonlu ya da eskimişse, baralarda kararma varsa evet. Pano tesisatın beynidir; kabloları yenileyip panoyu eski bırakmak yarım iş olur.',
          'Yeni panoda her hattı ayrı sigortaya alırım: mutfak, banyo, çamaşır makinesi, klima, aydınlatma ayrı ayrı. Bahçeli evlerde dış aydınlatma ve bahçe prizleri için ayrı bir kaçak akım rölesi öneririm. Yağmurda bahçedeki bir arıza evin tamamını karanlıkta bırakmasın diye.',
        ],
      },
      {
        h: 'Tadilatta elektrikçi ne zaman gelmeli?',
        p: [
          'Kısa cevap: duvarlar açıldıktan sonra, sıva ve alçı yapılmadan önce. Mutfak dolaplarının, tezgahın ve klimanın yeri belli olmalı ki priz ve hat ona göre çekilsin.',
          'Ümitköy’de en çok yaşanan sıkıntı, elektrikçinin sıva bittikten sonra çağrılması. O zaman ya yeni boyanan duvar açılıyor ya da kablolar dışarıdan kanalla geçiyor. Tadilata başlamadan bir kez gelip keşif yapmamı isterseniz, hangi aşamada geleceğimi baştan planlarız.',
        ],
      },
      {
        h: 'Ümitköy’de nasıl çalışıyorum?',
        p: [
          'Ümitköy, Çayyolu, Yaşamkent ve Konutkent tarafındaki site evlerine, dairelere ve villalara her gün çıkıyorum. Keşfe gelip ne yapılması gerektiğini ve fiyatını işe başlamadan söylerim. Haftanın her günü 08:00–23:00 arası 0506 092 58 16’dan ulaşabilirsiniz.',
          'Aynı titizlikle işyeri elektrik tesisatı da yapıyorum. Ümitköy’de bir ofisi, muayenehaneyi ya da dükkânı yeniden düzenliyorsanız bilgisayar, klima ve aydınlatma hatlarını ayrı ayrı planlar, panoyu işin yüküne göre kurarım.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ümitköy’de eski bir evin tesisatını tamamen yenilemek şart mı?',
        a: 'Her zaman değil. Topraklama, pano ve kabloların durumuna bakarım. Çoğu evde eksik topraklamayı tamamlamak, panoyu yenilemek ve yıpranmış hatları değiştirmek yeterli olur.',
      },
      {
        q: 'Topraksız prize çamaşır makinesi takmak tehlikeli mi?',
        a: 'Evet. Makinenin içinde bir kaçak olduğunda gövdesi elektriklenebilir. Topraklı priz ve devrede bir kaçak akım rölesi birlikte olmalıdır.',
      },
      {
        q: 'Duvarları kırmadan kablo yenilenebilir mi?',
        a: 'Çoğu zaman evet. Eski borular sağlamsa yeni kabloyu borunun içinden çekeriz. Boru ezilmiş ya da tıkanmışsa o noktada küçük bir açma gerekebilir.',
      },
      {
        q: 'Keşif için gelir misiniz?',
        a: 'Evet. Tadilattan önce gelip mevcut tesisatı kontrol eder, ne yapılacağını ve fiyatını işe başlamadan söylerim.',
      },
    ],
    related: [
      { label: 'Ümitköy Elektrikçi', href: '/hizmet-bolgeleri/cankaya-elektrikci/umitkoy-elektrikci' },
      { label: 'Ev Elektrik Tesisatı', href: '/hizmetler/ev-elektrik-tesisati' },
      { label: 'Villa Elektrik Tesisatı', href: '/hizmetler/villa-elektrik-tesisati' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Mağaza Elektrik Tesisatı', href: '/hizmetler/magaza-elektrik-tesisati' },
    ],
    hideBase: true,
  },
  {
    slug: 'yasamkent-elektrikci-yeni-daire-avize-spot-led',
    title: 'Çankaya Yaşamkent Elektrikçi 0506 092 58 16 | Yeni Dairede Avize, Spot ve LED Montajı',
    description:
      'Çankaya Yaşamkent’te yeni daireye taşınıyorsunuz: avize nereye, spot kaç tane, şerit LED nasıl? Taşınmadan önce aydınlatmayı planlamak için usta anlatıyor. Yaşamkent elektrikçi: 0506 092 58 16.',
    keyword: 'Çankaya Yaşamkent elektrikçi',
    date: '2026-11-19',
    readingMin: 6,
    image: '/images/rehber/yasamkent-elektrikci-yeni-daire-avize-spot-led.webp',
    imageAlt: 'Çankaya Yaşamkent elektrikçi: yeni dairede yemek masası üstüne asılan modern LED avize',
    excerpt:
      'Yaşamkent’teki yeni dairelerde müteahhit tavana çoğu zaman sadece birer kablo bırakıyor. Avize, spot ve LED işini eşyalar gelmeden planlarsanız hem tavanınız hem bütçeniz rahat eder. Sahadan anlattım.',
    intro:
      'Yaşamkent’te yeni teslim edilmiş bir dairede ev sahibiyle salonun ortasında duruyorduk. Tavandan tek bir kablo sarkıyordu, elinde de internetten beğendiği iki metrelik bir sarkıt avizenin fotoğrafı vardı. “Usta, bunu buraya asabilir miyiz?” Asabilirdik, ama yemek masası pencere önüne konacaktı; avize de oraya gelmeliydi. Tavanda yeni bir buat, kısa bir kablo uzatması ve sağlam bir dübelle işi yarım günde bitirdik. Yaşamkent’teki yeni dairelerde aydınlatma işini nasıl planladığımı anlatıyorum.',
    sections: [
      {
        h: 'Önce mobilya, sonra avize yeri',
        p: [
          'Kısa cevap: avizenin yeri müteahhidin bıraktığı kabloya göre değil, yemek masasının ve oturma grubunun yerine göre belirlenir. Eşyaların yeri belli olunca ışık noktalarını ona göre taşırız.',
          'Yaşamkent’teki yeni binaların çoğunda tavan betonarme; kablo taşımak için tavana küçük bir kanal açılır ya da asma tavan varsa üstünden geçilir. Taşındıktan sonra yapılırsa boya ve toz derdi çıkar. Taşınmadan önce yapılırsa bir öğleden sonralık iştir.',
        ],
      },
      {
        h: 'Ağır avize için tavan kontrolü',
        p: [
          'Kısa cevap: avizenin ağırlığı tavana takılan kancanın taşıyabileceğinden fazla olmamalıdır. Kristal ve metal gövdeli avizeler sanıldığından ağırdır; plastik dübel yetmez.',
          'Betonarme tavanda çelik dübel kullanırım. Alçıpan asma tavanda ise avizeyi alçıpana değil, üstündeki betona sabitlerim; gerekirse araya bir taşıyıcı çubuk koyarım. Yaşamkent’te alçıpana asılmış, birkaç ay sonra tavanı çatlatan avizeler gördüm.',
        ],
      },
      {
        h: 'Spot sayısı ve yerleşimi',
        p: [
          'Kısa cevap: spotları her yere eşit aralıkla serpiştirmek yerine ihtiyaca göre yerleştirmek daha iyi sonuç verir. Mutfakta tezgahın üstüne, koridorda yürüme hattına, salonda duvarlara yakın.',
          'Çok sayıda spot tavanı delik deşik gösterir ve gereğinden fazla ışık verir. Salonda tek bir hatta bütün spotları bağlamak yerine iki gruba ayırmayı öneririm: biri günlük, biri misafir için. Anahtarı da ona göre çift yaparız.',
        ],
      },
      {
        h: 'Şerit LED: gizli ışık güzel, ama adaptörü erişilebilir olmalı',
        p: [
          'Kısa cevap: asma tavan kenarında, TV ünitesinin arkasında ya da mutfak dolabının altında şerit LED güzel durur. Ama LED’in adaptörü (sürücüsü) ulaşılabilir bir yere konmalı; bozulduğunda tavanı sökmek gerekmesin.',
          'Adaptörü LED’in gücüne göre seçerim, biraz pay bırakırım; tam sınırda çalışan adaptör ısınır ve erken bozulur. Uzun şeritlerde besleme iki uçtan yapılmazsa uçlara doğru ışık sararır. Bunları montajda hesaplarım.',
        ],
      },
      {
        h: 'Yaşamkent’te montaja nasıl geliyorum?',
        p: [
          'Yaşamkent, Çayyolu, Ümitköy ve Alacaatlı tarafındaki dairelere her gün çıkıyorum. Avize, spot ve LED montajını aynı gün içinde bitiririm; fiyatı işe başlamadan söylerim. Haftanın her günü 08:00–23:00 arası 0506 092 58 16’dan ulaşabilirsiniz.',
          'Aydınlatmanın yanında ev ve işyeri elektrik tesisatı da yapıyorum. Yaşamkent’te yeni daireye ek priz ve hat, klima hattı ya da yeni açılan bir işyerinin pano ve aydınlatma tesisatı gerekiyorsa montajla aynı gün planlayabiliriz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yaşamkent’te avize montajı ne kadar sürer?',
        a: 'Hazır bağlantı noktasına standart bir avize genelde bir saati geçmez. Avizenin yerini taşımak ya da ağır avize için tavan hazırlığı gerekiyorsa birkaç saat sürebilir.',
      },
      {
        q: 'Alçıpan tavana ağır avize asılır mı?',
        a: 'Doğrudan alçıpana asılmaz. Avize alçıpanın üstündeki betona çelik dübelle sabitlenir ya da araya taşıyıcı konur.',
      },
      {
        q: 'Spotları iki ayrı anahtara bağlamak mümkün mü?',
        a: 'Evet. Montaj sırasında spotları iki gruba ayırır, çift anahtarla bağlarım. Böylece istediğinizde sadece bir kısmını yakabilirsiniz.',
      },
      {
        q: 'Şerit LED’in adaptörü nereye konmalı?',
        a: 'Ulaşılabilir bir yere: dolap içine, servis kapağının arkasına ya da asma tavanda açılabilir bir noktaya. Adaptör bozulduğunda tavanı sökmek zorunda kalmamalısınız.',
      },
    ],
    related: [
      { label: 'Çayyolu ve Yaşamkent Elektrikçi', href: '/hizmet-bolgeleri/cankaya-elektrikci/cayyolu-elektrikci' },
      { label: 'Avize Montajı', href: '/hizmetler/avize-montaji' },
      { label: 'Spot Montajı', href: '/hizmetler/spot-montaji' },
      { label: 'LED Aydınlatma', href: '/hizmetler/led-aydinlatma' },
      { label: 'Elektrik Tesisatı', href: '/hizmetler/elektrik-tesisati' },
    ],
    hideBase: true,
  },
  {
    slug: 'cayyolu-elektrikci-dubleks-villa-ana-salter-atiyor',
    title: 'Çankaya Çayyolu Elektrikçi 0506 092 58 16 | Dubleks ve Villada Ana Şalter Atıyorsa',
    description:
      'Çankaya Çayyolu’nda dubleks ya da villada ana şalter atıyor, kat panosu mu ana pano mu karıştı? Sebepleri, ben gelene kadar yapılacakları ve kalıcı çözümü usta anlatıyor. Çayyolu elektrikçi: 0506 092 58 16.',
    keyword: 'Çankaya Çayyolu elektrikçi',
    date: '2026-11-19',
    readingMin: 7,
    image: '/images/rehber/cayyolu-elektrikci-dubleks-villa-ana-salter-atiyor.webp',
    imageAlt: 'Çankaya Çayyolu elektrikçi: dubleks merdiven boşluğunda duvar aplikleri',
    excerpt:
      'Çayyolu’ndaki dubleks ve villalarda genelde birden fazla pano olur ve arıza olduğunda hangisine bakılacağı karışır. Ana şalterin neden attığını ve nasıl daralttığımı sahadan anlattım.',
    intro:
      'Çayyolu’nda üç katlı bir villadan aradılar. Akşam yemeği hazırlanırken ana şalter atmış, kaldırmışlar, on dakika sonra tekrar atmış. Ev sahibi “Usta, alt kattaki panoda her şey yukarıda, üsttekinde de; ama ana şalter duruyor” dedi. Gittiğimde sebep mutfaktaki ankastre fırınla bodrumdaki ısı pompasının aynı anda çalışmasıydı; ana şalter yükü kaldırmıyordu. Çayyolu’ndaki çok katlı evlerde bu tür arızaları nasıl çözdüğümü anlatıyorum.',
    sections: [
      {
        h: 'Önce hangi pano neyi besliyor, onu bilin',
        p: [
          'Kısa cevap: dubleks ve villalarda genelde sayaç yanında ya da girişte bir ana pano, her katta da bir kat panosu bulunur. Ana şalter ana panodadır ve bütün evi besler. Kat panosundaki bir sigorta atarsa sadece o katın bir bölümü gider.',
          'Arıza sırasında ilk iş, hangi panoda neyin düştüğüne bakmaktır. Evin tamamı karanlıksa ana panoya, sadece bir kat ya da bir oda karanlıksa o katın panosuna bakın. Panolarınızda etiket yoksa ilk gelişimde her hattı bulup yazarım.',
        ],
      },
      {
        h: 'Ana şalter neden atar?',
        p: [
          'Kısa cevap: ya evin toplam yükü ana şalterin değerini aşıyordur, ya ana hatta bir kısa devre vardır, ya da şalterin bağlantısı gevşeyip ısınıyordur. Üçüncüsü sıklıkla gözden kaçar.',
          'Çayyolu’ndaki büyük evlerde ısı pompası, ankastre mutfak, birden fazla klima, havuz ya da sulama pompası aynı anda çalışabiliyor. Ev ilk yapıldığında bu cihazlar yoksa ana şalter bugünkü yükü taşımayabilir. Böyle bir durumda sadece şalteri büyütmem; önce sayaçtan gelen kablonun ve abonelik gücünün yeterli olup olmadığına bakarım.',
          'Şalterin üstü ılıksa ya da kokusu varsa bağlantı ısınıyor demektir. Bu durumda yük az bile olsa şalter atabilir. Klemensleri söküp temizler, kararmış uçları yeniler ve doğru torkla sıkarım.',
        ],
      },
      {
        h: 'Kaçak akım rölesi mi, ana şalter mi?',
        p: [
          'Kısa cevap: panoda test düğmesi olan eleman kaçak akım rölesidir. Ana şalter attığında röle yukarıda kalır; röle attığında ana şalter yukarıda kalabilir. Hangisinin düştüğü sebebi tamamen değiştirir.',
          'Villalarda kaçak akım rölesini en çok bahçe aydınlatması, dış prizler ve havuz ekipmanı attırır. Bu yüzden dış hatları ayrı bir röleye almayı öneririm. Bahçede bir sorun olduğunda evin içi karanlıkta kalmaz.',
        ],
      },
      {
        h: 'Ben gelene kadar ne yapmalısınız?',
        p: [
          'Kısa cevap: büyük cihazları kapatın (fırın, klima, ısı pompası, pompa), ana şalteri bir kez kaldırın. Atmıyorsa cihazları teker teker açın; hangisinde attığını not edin. Tekrar tekrar kaldırmayın.',
          'Şalterden koku geliyorsa, panoda kararma ya da çıtırtı varsa hiç kaldırmayın ve beni arayın. Telefonda hangi panoda neyin düştüğünü ve hangi cihazın çalıştığını anlatmanız, gelmeden önce arızayı daraltmamı sağlar.',
        ],
      },
      {
        h: 'Çayyolu’nda nasıl çalışıyorum?',
        p: [
          'Çayyolu, Ümitköy, Yaşamkent, Alacaatlı ve Angora Evleri tarafındaki villa, dubleks ve dairelere her gün çıkıyorum. Aracımda farklı değerde şalter, röle ve sigorta bulunur; çoğu arızayı ilk gelişte bitiririm. Fiyatı işe başlamadan söylerim. Haftanın her günü 08:00–23:00 arası 0506 092 58 16’dan ulaşabilirsiniz.',
          'Villa ve dubleks tesisatının yanında Çayyolu’ndaki ofis, mağaza ve işyerlerinin elektrik tesisatını da kuruyorum. Yeni hat, pano yenileme ya da yük artışı gerektiren bir tadilat varsa önce mevcut tesisatı ölçer, ne gerektiğini net söylerim.',
        ],
      },
    ],
    faq: [
      {
        q: 'Çayyolu’nda elektrikçi aynı gün geliyor mu?',
        a: 'Evet. Ana şalter atması, koku ya da kıvılcım gibi acil arızalarda aynı gün gelirim. Planlı işler için size uygun saati birlikte belirleriz.',
      },
      {
        q: 'Ana şalter atıyor, bir büyüğünü taksam olur mu?',
        a: 'Önce sayaçtan gelen kablonun ve abonelik gücünün yeterli olup olmadığına bakılmalı. Kablo yetersizken şalteri büyütmek kabloyu korumasız bırakır.',
      },
      {
        q: 'Villada bahçe aydınlatması yağmurda neden attırıyor?',
        a: 'Dış armatürlere ve buatlara su girmesi en sık sebeptir. Uygun koruma sınıfında armatür, sızdırmaz buat ve dış hatlar için ayrı bir kaçak akım rölesi bu sorunu çözer.',
      },
      {
        q: 'Panolarımda etiket yok, yapar mısınız?',
        a: 'Evet. Her hattı tek tek bulup hangi sigortanın neyi beslediğini yazarım. Arıza anında hangi panoya bakacağınızı bilirsiniz.',
      },
    ],
    related: [
      { label: 'Çayyolu Elektrikçi', href: '/hizmet-bolgeleri/cankaya-elektrikci/cayyolu-elektrikci' },
      { label: 'Villa Elektrik Tesisatı', href: '/hizmetler/villa-elektrik-tesisati' },
      { label: 'Elektrik Pano Montajı', href: '/hizmetler/elektrik-pano-montaji' },
      { label: 'Elektrik Arıza', href: '/hizmetler/elektrik-ariza' },
      { label: 'Elektrik Tesisatı', href: '/hizmetler/elektrik-tesisati' },
    ],
    hideBase: true,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
