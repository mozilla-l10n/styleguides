# Style Guide Finnish (fi)

## Mozillan suomen kielen lokalisoinnin tyyliopas

### Intro

Tyyliopas vastaa muutamiin yleisiin tyylikysymyksiin Mozilla-tuotteiden ja Mozilla-sivustojen kääntämisessä.

Esimerkkejä kansainvälisistä tyylioppaista:

* [https://help.apple.com/asg/mac/2013/ASG_2013.pdf](https://help.apple.com/asg/mac/2013/ASG_2013.pdf)
* [https://www.microsoft.com/Language/en-US/StyleGuides.aspx](https://www.microsoft.com/Language/en-US/StyleGuides.aspx)

## Tyyli

Kaiken kirjoitetun pitäisi noudattaa kirjakielen sääntöjä. Markkinointiviestit voivat olla tyyliltään vapaampia, mutta puhekieltä ei pitäisi käyttää niissäkään.

Käännösten tavoite on olla niin selkeitä, että “mummosikin ymmärtää”. Luonnollisesti tämä riippuu mummosta, mutta yksinkertainen tapa sanoa asia on aina ylivertainen verrattuna teknisesti tarkkaan versioon. On hyvä pitää mielessä, että päivittäisten suomenkielisen Firefoxin käyttäjien määrä on puolen miljoonan paremmalla puolella, joten käyttäjät ovat aivan tavallisia ihmisiä.

Sävyltään tekstin pitäisi seurata alkuperäistä englanninkielistä tekstiä, mutta suomen kieli on luonnostaan rauhallisempaa kuin amerikanenglanti, joka pitää ottaa huomioon erityisesti markkinointiviestintää käännettäessä.

Ohjelmistoja kääntäessä ei yleensä käytetä pronomineja aktiivisesti. Ei siis käännetä “You can click…” “Sinä voit napsauttaa…”, vaan muutetaan ohjeistukset yleensä passiivisiksi “Napsauttamalla…”. Vastaavasti ei yleensä käytetä muotoja minun/sinun käännöksissä (vaan esim. Oma).

Ohjelmia, tavaramerkkejä tai palvelujen nimiä ei yleensä käännetä vaan lisätään tarkentava kuvaus nimen jälkeen, esimerkiksi Firefox Sync -palvelu. Mozillan käännöstiedostoissa tällaiset tuotenimet ovat usein muuttujina, jolloin pitää olla tarkkana että pääte tulee oikein. Kansainvälinen ohjeistus: [https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/).

## Oikeinkirjoitus- ja kielioppiohjeistus

>*TBD?*
>*Many languages have national or international standards that define spelling and grammar rules. When defining these rules for your community, make reference to those standards wherever possible. Do you have automated tests for spell checking and grammar? List those tools and dictionaries here and how regularly they should be used.*

* Lyhenteet: [http://www.kielitoimistonohjepankki.fi/haku/lyhenteet/ohje/257](http://www.kielitoimistonohjepankki.fi/haku/lyhenteet/ohje/257)
* Pilkkusäännöissä perusteet pitää olla kunnossa: [http://www.kielitoimistonohjepankki.fi/haku/pilkku/ohje/86](http://www.kielitoimistonohjepankki.fi/haku/pilkku/ohje/86)
* Väliviivat ja -merkit: http://www.kielitoimistonohjepankki.fi/haku/v%C3%A4limerkki/ohje/133](http://www.kielitoimistonohjepankki.fi/haku/v%C3%A4limerkki/ohje/133)

## Yksiköt

Yksiköissä käytetään SI-yksiköitä ja suomen kielen merkintätapaa niille ([https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_yksikk%C3%B6j%C3%A4rjestelm%C3%A4#Kirjoituss.C3.A4.C3.A4nn.C3.B6t](https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_yksikk%C3%B6j%C3%A4rjestelm%C3%A4#Kirjoituss.C3.A4.C3.A4nn.C3.B6t)).

Tallennuskapasiteetin yksiköinä käytetään lähdetekstin mukaista käytäntöä. Kilotavut, megatavut, gigatavut lyhennetään kt, Mt, Gt jne.

## Päiväys & kalenteri

*Päiväykset kielitoimiston ohjeistusten mukaisesti:* [http://www.kielitoimistonohjepankki.fi/haku/p%C3%A4iv%C3%A4ys/ohje/53](http://www.kielitoimistonohjepankki.fi/haku/p%C3%A4iv%C3%A4ys/ohje/53.).

## Termistö

`Termistöä löytyy täältä…`

`cancel` -> `peruuta`

`lista` -> `lista tai luettelo, usein lista`

Uusien vaikeiden termien kääntämistä kannattaa lähestyä hakemalla olemassa olevia käännöksiä tai yrittämällä ymmärtää, mitä ominaisuus tarkoittaa.

## Käyttöliittymäelementtikohtaisia ohjeita

### Pikanäppäimet

Pikanäppäimille (access keys) ei ole ohjeistusta (TBD). Pikanäppäimet yleensä määritelty kontekstissa ensimmäiseksi vapaaksi pikanäppäin-kirjaimeksi merkkijonossa.

### Muut käyttöliittymäelementtikohtaiset ohjeistukset

* Painikkeet: Ensimmäinen sana voi olla isolla. Verbien käyttö suositeltua, mutta voidaan unohtaa jos tila ei muuten riitä ja ymmärrettävyys ei kärsi.
* Arvolistat: Seuraa lähdetekstin versaalit/gemenat -muotoa, mutta vain ensimmäinen sana (ja erisnimet) isolla.
* Ellipsis: Kolme pistettä eli ellipsis-merkkiä tulee käyttää lähdetekstin mukaisesti.

## Yleiset ohjeet

Tärkeimmät mielessä pidettävät asiat tehdessä käännöksiä ovat:

* Ymmärrettävyys, selkeys
* Johdonmukaisuus

Ymmärrettävyyden kannalta keskeistä on, että kääntäjä ymmärtää toiminnon ja mitä toiminto tarkoittaa. Mozilla tarjoaa tähän joitain apuja, mutta paras tapa on usein käyttää kehitysversioita ohjelmistosta, jotta näkee toiminnot käytännössä.

Johdonmukaisuus voi rikkoutua ohjelman sisällä kun kääntäjä unohtaa, mitä termiä tai tyyliä on käyttänyt aikaisemmin tai ohjeistuksen ja ohjelman välillä jos ohjeistuksen kirjoittaja ei ole selvillä ohjelmassa olevasta käännöksestä.

Johdonmukaisuuden tärkein tekijä on jatkaa projektin parissa pidempään ja oppia tekemällä. Toinen loistava työkalu johdonmukaisuuteen on käyttää [http://transvision.mozfr.org/](http://transvision.mozfr.org/) -palvelua selaamaan olemassa olevia käännöksiä ja viimeisenä luonnollisesti kommunikointi kääntäjien kesken.
