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
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
