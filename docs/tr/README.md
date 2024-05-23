# Style Guide Turkish (tr)

## Türkçe Yerelleştirme Yönergeleri

Mozilla yerelleştirme (l10n) topluluğuna hoş geldiniz! Mozilla, dünyanın en büyük gönüllü yerelleştirme topluluklarından birine ev sahipliği yapıyor. Dil becerilerinize güveniyorsanız siz de aramıza katılarak interneti özgürleştiren yazılımları Türkçeye kazandırmamıza yardımcı olabilirsiniz.

Türkçe yerelleştirme ekibi olarak Firefox ve Thunderbird gibi yazılımların ve mobil uygulamaların yanı sıra Mozilla web sitelerini de Türkçeye çeviriyoruz.

1. Çeviri aracımız [Pontoon](https://pontoon.mozilla.org)’a kaydolun. Tüm Mozilla yazılımlarının ve web sitelerini çevirileri burada yapılıyor.
2. Çeviriye başlamadan önce aşağıdaki yönergelerimizi okuyun.
3. Çevirmek istediğiniz ürünü seçip çeviri önerilerinizi göndermeye başlayın. [Ekip yöneticilerimiz](https://pontoon.mozilla.org/tr/contributors/) kısa süre içinde önerilerinizi inceleyerek uygun olanları kabul edecek.
4. Dilediğiniz zaman [ekip yöneticilerimize ulaşarak](https://www.mozilla.org.tr/iletisim/) sorularınızı sorabilir, çeviri önerileriniz hakkında görüş alabilir veya eleştirilerinizi paylaşabilirsiniz. Ayrıca [Element sunucumuzdaki #l10n-community kanalına](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org) katılarak tüm Mozilla çevirmenleriyle yazışabilirsiniz.
5. Katkılarınızı düzenli olarak sürdürmek istiyorsanız gelişmelerden haberdar olmak için [Mozilla L10N Blog](https://blog.mozilla.org/l10n/)’u, [Discourse’taki forumumuzu](https://discourse.mozilla.org/c/l10n/547) ve X kullanıyorsanız [@mozilla\_l10n](https://x.com/mozilla_l10n) hesabını takip edin.
6. Türkçe [Firefox Nightly’yi indirip](https://www.mozilla.org/tr/firefox/channel/desktop/#nightly) günlük tarayıcınız olarak kullanmaya başlayın. Nightly her gün güncellenir. Böylece çevrilecek dizgilerin nerelere geldiğini görebilir ve çevirilerimizi kontrol edebiliriz.

## Kaynaklar

* Çevirilerimizde [Dil Derneği](http://www.dildernegi.org.tr/)nin sözlüğü ve yazım kılavuzu esas alınır.
* Bazı terimlerin çevirisinde _Bilgisayar Terimleri Karşılıklar Kılavuzu_ (Türk Dil Kurumu Yayınları, 2008) ve [Microsoft terminolojisi](https://msit.powerbi.com/view?r=eyJrIjoiODJmYjU4Y2YtM2M0ZC00YzYxLWE1YTktNzFjYmYxNTAxNjQ0IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9) esas alınır.
* Türkçe Mozilla ürünlerinde kullandığımız tutarlı bir terminoloji vardır. Bir terimin Türkçe karşılığından emin değilseniz, o terimi içeren [diğer çevirileri bulabileceğiniz Transvision aracımıza göz atabilirsiniz](https://transvision.mozfr.org/).
* Microsoft tarafından hazırlanan [Türkçe Biçem Rehberi](https://learn.microsoft.com/en-us/globalization/reference/microsoft-style-guides) teknik çeviri konusunda önemli bilgi ve öneriler içermektedir.
* Sizin için kolay görünen çevirileri yapıp, doğru çevireceğinizden emin olmadıklarınızı başka gönüllülere bırakmanızı öneririz. Bu şekilde hepimiz daha verimli çalışabiliriz.

## Büyük harflerin kullanımı

İngilizcede her kelimesinin ilk harfi büyük yazılan komutlar, seçenekler, düğme adları vb. Türkçeye çevrilirken sadece ilk harfi büyük, devamı küçük yazılır.

**Örnek:**  
İngilizce: _New Private Window_  
Doğru çeviri: _Yeni gizli pencere_  
Yanlış çeviri: _Yeni Gizli Pencere_

Pencere ve iletişim kutusu başlıklarında her kelimenin ilk harfi büyük yazılır. (Başlık olarak olarak kullanılacak dizgilerin adlarında genellikle “title” terimi geçer.)

## Çekim ekleri

Bazı dizgilerde değişkenlere çekim eki eklenmesi gerekir. Çekim ekini doğrudan değişkene eklemek yerine değişkenin ne olduğunu açıklayan bir kelimeye eklenmesi tercih edilmelidir.

**Örnek:**  
İngilizce: _Exit %S_  
Doğru çeviri: _%S tarayıcısından çık_  
Yanlış çeviri: _%S'tan çık_

**Neden?** %S yerine her zaman “Firefox” gelmeyebilir. Örneğin “Firefox Developer Edition” adı kullanıldığında çekim eki değişecektir.

## Bazı terimlerin ve özel adların yazılışı

İngilizcede geleneksel olarak ilk harfleri büyük yazılan bazı terimler ve özellik adları Türkçede küçük harflerde yazılır.

**Örnek:** Private Browsing (gizli gezinti), Enhanced Tracking Protection (gelişmiş izlenme koruması), Picture-in-Picture (görüntü içinde görüntü)

Aşağıdaki özel adlar Türkçeye çevrilmez:  
Nightly, Developer Edition, MDN Web Docs, Mozilla Monitor, Pocket

## Noktalama işaretleri

* “Ve” bağlacının yerini tutan “&” işareti Türkçe çevirilerde kullanılmaz, onun yerine “ve” yazılır.
* Üç nokta (…) karakteri yan yana üç ayrı nokta değil, tek başına bir karakterdir. Bu karakteri özgün İngilizce metinden kopyalayarak kullanabilirsiniz.
* Düz kesme işareti (') yerine kıvrık kesme işareti (’) kullanılır. Bu karakteri özgün İngilizce metinden kopyalayarak kullanabilirsiniz.
* İngilizcede bazı açıklama cümlelerinden önce gelen uzun çizgi (—) yerine Türkçede iki nokta (:) kullanılır.
