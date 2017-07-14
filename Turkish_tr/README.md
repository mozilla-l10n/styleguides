# Style Guide Turkish (tr)


## Türkçe Yerelleştirme Yönergeleri

Mozilla ürünlerinin Türkçeye çevrilmesi ve yerelleştirmesi çalışmaları yıllardır devam etmektedir. Bu süre boyunca, çevirilerin tutarlılığını sağlamak adına gönüllü çevirmenlerimiz aşağıdaki kuralları benimsemiştir. Yerelleştirme çalışmalarına yeni katılan gönüllülerimizin de bu yönergelere uygun hareket etmesi, çeviri kalitesinin en üst düzeyde tutulmasını sağlayacaktır.

Firefox, Android için Firefox, iOS için Firefox, Thunderbird ve Lightning gibi yazılımların, ayrıca diğer Mozilla uygulamalarının ve web sitelerinin çevirileri [https://pontoon.mozilla.org/tr/](https://pontoon.mozilla.org/tr/) adresindeki Pontoon aracında yürütülmektedir. Pontoon’a Firefox Hesabınızla giriş yaparak çeviri önerilerinizi göndermeye başlayabilirsiniz.

Başlarken [e-posta grubumuza](https://lists.mozilla.org/listinfo/community-turkey) üye olarak kendinizi tanıtan bir e-posta göndermenizi de öneriyoruz. Mümkünse bildiğiniz dillerden, eğitiminizden veya teknik deneyiminizden de bahsedin.

* Çevirilerimizde [Dil Derneği](http://www.dildernegi.org.tr/)‘nin sözlüğü ve yazım kılavuzu esas alınır.
* Türkçe Mozilla ürünlerinde kullandığımız tutarlı bir terminoloji vardır. Bir terimin Türkçe karşılığından emin değilseniz, o terimi içeren [diğer çevirileri bulabileceğiniz Transvision aracımıza göz atmanızı](https://transvision.mozfr.org/) öneririz.
* Microsoft tarafından hazırlanan [Türkçe Biçem Rehberi](http://www.microsoft.com/Language/en-US/StyleGuides.aspx) teknik çeviri konusunda önemli bilgi ve öneriler içermektedir.
* Terminolojide bir değişiklik öneriyorsanız, o terimin geçtiği tüm çevirileri düzeltip göndermeden önce önerinizi e-posta grubumuzda paylaşmanızı rica ederiz.
* Sizin için kolay görünen çevirileri yapıp, doğru çevireceğinizden emin olmadıklarınızı başka gönüllülere bırakmanızı öneririz. Bu şekilde hepimiz daha verimli çalışabiliriz.
* Tüm çeviriler deneyimli çevirmenlerimiz tarafından gözden geçirildikten sonra Mozilla’ya gönderilmektedir. Bu nedenle hata yapmaktan korkmamanızı, ama onaylanmayan veya düzeltilen çevirileriniz için de bize küsmemenizi rica ederiz.

## Büyük harflerin kullanımı

İngilizcede her kelimesinin ilk harfi büyük yazılan komutlar, seçenekler, düğme adları vb. Türkçeye çevrilirken sadece ilk harfi büyük, devamı küçük yazılır.

**Örnek:**

* `İngilizce: New Private Window`
* `Doğru çeviri: Yeni gizli pencere`
* `Yanlış çeviri: Yeni Gizli Pencere`

Pencere ve iletişim kutusu başlıklarında her kelimenin ilk harfi büyük yazılır. (Başlık olarak olarak kullanılacak dizgilerin adlarında genellikle “title” terimi geçer.)

## Özel adlar

Mozilla, aşağıdaki marka adlarının Türkçeye çevrilmeden, olduğu gibi kullanılmasını talep etmektedir:
Sync, Marketplace, Persona, Telemetry, Hello

## Çekim ekleri

Bazı dizgilerde değişkenlere çekim eki eklenmesi gerekir. Çekim ekini doğrudan değişkene eklemek yerine değişkenin ne olduğunu açıklayan bir kelimeye eklenmesi tercih edilmelidir.

**Örnek:**

* `İngilizce: Exit %S`
* `Doğru çeviri: %S tarayıcısından çık`
* `Yanlış çeviri: %S’tan çık`

**Neden?** %S yerine her zaman “Firefox” gelmeyebilir. Örneğin “Firefox Developer Edition” adı kullanıldığında çekim eki değişecektir.

## Noktalama işaretleri

“Ve” bağlacının yerini tutan “&” işareti Türkçe çevirilerde kullanılmaz, onun yerine “ve” yazılır.

Aşağıdaki İngilizce wiki sayfaları da yerelleştirme süreciyle ilgili ayrıntılı bilgi almanıza yardımcı olacaktır:

* [Yerelleştirme projesine katılırken bilmeniz gerekenler](http://wiki.mozilla.org/L10n:Contribute)
* [Tüm yerelleştirme süreciyle ilgili ayrıntılı bilgiler](https://wiki.mozilla.org/L10n:Localization_Process)
* [Yerelleştirmeye hızlı başlangıç rehberi: Katkılarınız arttıkça bilmeniz gerekecek teknik konular](https://developer.mozilla.org/en/Localization_Quick_Start_Guide)

