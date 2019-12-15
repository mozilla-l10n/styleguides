# Style Guide Slovenian (sl)

![sl Logo](logo_SL.png)

## Slogovni priročnik za slovensko L10n ekipo

Najlepša hvala, da nam pomagaš pri prevajanju Mozillinih izdelkov in vsebine! Naše delo je odvisno od prostovoljk in prostovoljcev, kot si ti, in veseli smo vsakega novega člana.

Nočemo se zadovoljiti s površnimi in dobesednimi prevodi, ki jih lahko skropucamo med preklapljanjem z ene računalniške igre na drugo (čeprav so marsikje pogosti). Uporabnikom želimo svoje programe in storitve ponuditi v njihovem jeziku s kvalitetnimi prevodi. Ta priročnik vsebuje nekaj nasvetov, kako lahko izboljšaš svoje prevode, ter opiše pogoste napake, katerim se je treba izogibati.

Seveda od tebe, sploh, če si začetnik pri prevajanju, ne zahtevamo že od samega začetka popolnih prevodov - drugi smo tu, da ti pomagamo. Tvoje prevode bomo spočetka pregledovali in po potrebi popravili, ti pa preleti popravke, poišči ponavljajoče se napake in jih vzemi na znanje za prihodnje prevode. Iz izkušenj se naučimo več kot iz vsakega priročnika!

![ml10n Logo](logo_Ml10n.png)

## Kakšen jezik naj uporabljam?

Jezik se lahko razlikuje glede na kontekst - naše delo zajema prevajanje od spletne strani s kampanjo za prenos Firefoxa pa do bolj tehničnih navodil in pravnih obvestil. Jezik je treba temu primerno prilagoditi, osnovno pravilo pa je: Mozilla smo ljudje in z uporabniki želimo komunicirati karseda naravno, kot človek s človekom. Jezik naj bo zato:

* Čimbolj priljuden in sproščen ter ne pravniški ali robotski.
* Razumljiv tudi računalnikov neveščemu uporabniku ter ne preveč žargonski.
* Čimbolj živ in raznolik (to naredi vsako branje prijetnejše).

Pri slovenski Mozilli smo zagreti zagovorniki slovenjenja izrazov. Zato se trudimo izogibati tujkam in sposojenkam ter poskušamo vse termine prevesti v slovenščino. Npr. ~~`certifikat`~~/`digitalno potrdilo`, ~~`e-mail naslov`~~/`e-poštni naslov`, ~~`kompatibilen`~~/`združljiv`, ~~`verzija`~~/`različica` ...

## Terminologija

Firefox in drugi programi so seveda polni imen za svoje funkcije (»Add-on Manager«, »bookmarks«, »search engine« …). Poleg tega se v skoraj vsakem besedilu na temo računalnikov pojavljajo določeni izrazi, kot so »download«, »toolbar«, »setting«, »checkbox« in tako dalje.

Za veliko slednjih obstaja cel kup različnih prevodov v slovenščino, od katerih je ponavadi pravilen le en, drugi pa veljajo za žargonske, pogovorne ali kako drugače neustrezne. Popolnejši seznam angleških izrazov in slovenskih prevodov zanje sestavljamo tu: [https://goo.gl/pKWLmq](https://goo.gl/pKWLmq)

Za izraze v Firefoxu, Thunderbirdu, operacijskem sistemu in drugih programih **vedno uporabljamo slovenske različice, ki so v slovenskih prevodih že uveljavljene**. Npr. termin *»Add-on Manager«* je v Firefoxu preveden kot *»upravitelj dodatkov«*, zato uporabljamo ta prevod in ne izumljamo svojih, kot je *»upravljalnik dodatkov«* ali *»skrbnik za dodatke«*. Ime Windows se nikjer v sistemu ne sklanja (povsod piše *»v sistemu Windows«*), zato se tega držimo tudi v naših prevodih in ne pišemo *»v Windowsu«* ali *»v Windowsih«*.

* Če nismo prepričani, kako se imenuje kak del vmesnika Firefoxa ali Thunderbirda, preverimo v programu samem ali poiščemo prevod z orodjem Transvision: [https://transvision.mozfr.org/](https://transvision.mozfr.org/)

## Slovnica in sestava stavkov

Slovnici angleščine in slovenščine sta precej različni in slovenski stavki imajo pogosto drugačno strukturo kot angleški. Če torej pri prevajanju orješ besedo za besedo kot traktor, bodo prevodi skoraj vedno zveneli nenaravno in včasih celo nesmiselno. Veliko boljše prevode dobiš, če **prebereš poved(i), razmisliš, kako bi to povedali po slovensko, in tako tudi napišeš prevod**.

**Ni nujno, da je vse prevedeno dobesedno** – prej obratno. Važno je, da je prevod moč brati z enako lahkoto, kot če bi bilo besedilo že v izvirniku napisano v slovenščini. Če dobesedno prevajamo določene besedne zveze in če se ne oziramo na posebnosti slovenščine, si bralec že po prvem stavku misli »Kakšen 'most smartest' prevajalec«.

Če prevajaš daljše besedilo, si po opravljenem delu vzemi nekaj minut prediha, nato pa svoj prevod **še enkrat preberi ter se prepričaj, da se tudi v slovenščini bere tekoče, smiselno in da zveni naravno**. Ko se tako vživiš v vlogo bralca, lahko začutiš pomanjkljivosti besedila in narediš še zadnje popravke.

### Primer, ki ni za dobesedno prevajanje

`»Be sure to regularly visit the Plugin Check page to keep your plugins up-to-date.«`

Prevod `»Prepričajte se, da redno obiščete stran za preverjanje vtičnikov, da obdržite vtičnike posodobljene«` se ne sliši najbolje. V njem nas lahko zmoti naslednje:

* Besedna zveza »Be sure/make sure« v tem kontekstu ni ravno primerno za slovenščino in jo lahko nadomestimo s čim primernejšim (npr. velelnikom »redno obiskujte« ali »priporočamo, da redno obiskujete«).
* Neskončna veriga veznikov »da, da, da« daje vtis četrtošolčevega spisa in jo lahko razbijemo z drugimi vezniki.
* Če so naši obiski strani ponavljajoči, jo redno obiskujemo, ne redno obiščemo - uporabiti moramo nedovršno obliko glagola.

Bolj smiseln prevod bi bil na primer: `»Priporočamo, da redno obiskujete stran za preverjanje vtičnikov in poskrbite, da ostanejo vaši vtičniki posodobljeni.«`

Ali: `»Redno obiskujte stran za preverjanje vtičnikov in ohranite svoje vtičnike posodobljene.«` kar je jedrnateje in primerneje za npr. promocijsko kampanjo za stran preverjanja vtičnikov.

### Če je kak stavek težko smiselno prevesti

V kolikor se kakega stavka ne da prevesti tako, da bi se v slovenščini slišal smiselno, namesto njega vnesi svojega. Dokler besedilo ohrani pomen, bo tudi to v redu. Preberi si kontekst, po potrebi preveri, kaj je sporočilo tega besedila, in to ubesedi na svoj način.

Primer: `»When you restart Firefox and restore your previous session, Firefox will wait until you select a tab before loading it. This keeps Firefox running quickly and smoothly.«`

Dobesedni prevod bi se glasil: `»Ko ponovno zaženete Firefox in obnovite prejšnjo sejo, bo Firefox počakal, da izberete zavihek, preden ga bo naložil. To ohranja tek Firefoxa hiter in gladek.«`

Pri takšnem prevodu predvsem pri drugem stavku morda komu ne bi bilo jasno, kaj želimo z njim povedati. Glede na to, kakšne so posledice hkratnega nalaganja ogromno zavihkov po obnovi seje (Firefox za nekaj časa lahko docela zmrzne), lahko stavek prevedemo tudi tako: `»Ko ponovno zaženete Firefox in obnovite prejšnjo sejo, bo Firefox zavihke naložil šele, ko kliknete nanje. To prepreči, da bi se Firefox zaradi hkratnega nalaganja velikega števila zavihkov prenehal odzivati.«`

### Preneseni pomeni, »marketing language«

Če besedilo uporablja prenesene pomene (»idiome«) ali je napisano v »marketing languageu« (reklamnem slogu), jih ne prevajaj dobesedno, saj je potem prevod lahko precej neumen. Raje uporabi slovenske stalne besedne zveze ali napiši prevod v »običajnem«, slogovno nevtralnem jeziku.

Primer: `»Learn these simple tricks and browse the web like a boss.«`

Dobesedni prevod `»Naučite se teh preprostih trikov in brskajte po spletu kot šef«` bi pripisali kakemu zelencu s 24ur.com.

Bolje bi bilo na primer: `»Naučite se teh preprostih trikov in si olajšajte brskanje po spletu.«`

### Vrstni red besed

Vrstni red besed v povedi v slovenščini ni strogo določen, a ima stavek glede na vrstni red besed različne prizvoke. Običajno velja, da na konec povedi postavimo besedo, ki jo želimo poudariti.

Primer – okno s seznamom piškotkov: `»The following cookies are stored on your computer:«`

Možen prevod: `»Naslednji piškotki so shranjeni na vašem računalniku:«`

Nekoliko bolje je: `»Na vašem računalniku so shranjeni naslednji piškotki:«`

### Prilastki

Prilastki so v slovenščini postavljeni drugače kot v angleščini.

`»HTML tags«` ali `»JPG file«` nikoli ne prevedemo kot `»HTML oznake«` ali `»JPG datoteka«`, temveč prilastek postavimo na desno: `»oznake HTML«`, `»datoteka JPG«`

V primerih, ko je angleška oblika že povsem prevladala, pa prilastek pustimo, kjer je, in besedi ločimo z vezajem – tako na primer prevod `»PIN code«` kot `»koda PIN«` zveni nekoliko čudno, lahko pa napišemo `»PIN-koda«`.

### Pogoste napake pri prevajanju – neupoštevanje kompleksnosti slovenščine

Pri hitrem in površnem prevajanju pogosto pride do naslednjih nevšečnosti:

#### Predlogi

Predlog `»from«` lahko prevedemo kot `»iz«` ali `»z/s«`, glede na to, ali je nekaj »v« ali »na« nečem.
* `»from the menu«` -> `»iz menija«`
* `»from the webpage«` -> `»s spletne strani«`

Podobno velja za druge – `»to«` -> `»v«`/`»na«` ...

#### Zaimki

Pri zaimku »it« moramo paziti, da ga ustrezno prevedemo kot »ga« ali »jo«, glede na spol tega, na kar se nanaša.

#### Kaj je kaj

Zaradi različnih zakonitosti slovenščine lahko nek angleški stavek prevedemo v stavke s čisto različnimi pomeni.

Na primer, `»Default Search Settings«` lahko prevedemo kot `»Nastavitve privzetega iskalnika«` ali pa tudi `»Privzete nastavitve iskanja«`. Zato moramo na podlagi konteksta (kje in za kaj je prevod uporabljen) izbrati pravega.

Samostalnik in glagol sta lahko v angleščini enaka. Npr.

* `»Archive«` -> `»Arhiv«` ali `»Arhiviraj«`
* `»Open Tabs«` -> `»Odprti zavihki«` ali `»Odpri zavihke«`

#### Glagolski vid

Primer: `»Windows periodically checks for updates.«`

Napačen, a vseeno pogost prevod: `»Windows občasno preveri, ali so na voljo posodobitve.«`

Bolje je, če »preveri« napišemo v nedovršni obliki: `»Windows občasno preverja, ali so na voljo posodobitve.«`

#### Povratni svojilni zaimek (svoj)

Napačno: `»Zaščitite vašo zasebnost.«`
Pravilno: `»Zaščitite svojo zasebnost.«`.

## Drugi uporabni napotki

*(Vir: večinoma [https://wiki.lugos.si/slovenjenje:pravila](https://wiki.lugos.si/slovenjenje:pravila))*

### Računalnik je stroj – izogibanje prvi osebi ednine

Računalnik je stroj in ne oseba, torej se, če se le da, uporablja brezosebno obliko.

`»Cannot save your settings«` se prevede v `»Nastavitev ni bilo mogoče shraniti.«` in ne `»Vaših nastavitev nisem mogel shraniti.«`

`»Connecting…«` se prevede v `»Povezovanje …«` (in ne `»Povezujem …«`)

### Računalnik nima kaj prositi

Glagola »prosim« ne pišemo, saj gre za anglicizem. V slovenskih navodilih za uporabo zadošča velelnik. »Prosimo« lahko uporabimo, kadar so prosilci skupina ljudi ali organizacija.

Primer: `»Please select your timezone.«` → `»Izberite svoj časovni pas.«`

### Imena funkcij

Imena funkcij pišemo z malo začetnico, čeprav so v angleščini pisana z veliko.

`»Click the button to open Private Browsing«` prevedemo v `»Kliknite gumb, da odprete zasebno brskanje«` in ne `»...da odprete Zasebno brskanje«`.

### Datumi, zneski ipd.

V angleščini je običajno mesec naveden pred dnevom, v slovenščini pa obratno. Spremenljivke postavimo v pravilen vrstni red in če so ločene s poševnicami ali vezaji, jih nadomestimo s pikami (za pikami pustimo presledek!).

July 25 → 25. julij

2016/7/25 → 25. 7. 2016

`#y/#m/#d → #d. #m. #y`

Podobno velja za zneske denarja in njihove valute. €200 → 200 €
