# Ghidul stilistic în cadrul localizărilor românești pentru Mozilla

În primul rând ca localizator/traducător ar trebui să vă asigurați de cunoașterea foarte bună a limbii române. Este necesară și o cunoaștere bună a limbii engleze scrise.

## Regula principală

    Dacă nu are sens pentru mine, atunci în mod clar traducerea este greșită.

## Principii generale

* Claritatea -- Preferăm claritatea mesajului chiar cu sacrificarea traducerii directe, în special în cazurile în care sensul original este ceva mai dificil de redat în limba română. Este important ca programele să fie înțelese de utilizatori și de audiența adresată. Nu se acceptă totuși modificarea mesajului traducerii dincolo de intenția textului din limba originală (engleza), traducerea propriu-zisă trebuie să fie cât mai clară fără a pierde esența textului original. Dacă ar fi necesară reformularea textului original, acest lucru ar trebui raportat prin Bugzilla prin deschiderea un bug.
* Diacritice -- Limba română utilizează diacritice și folosirea acestora nu este opțională. Mai mult de atât, trebuie utilizate [diacriticele corecte](http://i.imgur.com/gbXiYtY.png), cu virgulă: Șș Țț (corect) și nu sedilă: Şş Ţţ(greșit). Obsevați forma diacriticei de sub literă.

## Ce nu trebuie tradus

Deseori, șirurile conțin elemente ce sunt relevante pentru programatori și care ar trebui identificate de localizatori, chiar dacă nu trebuie să înțelegem precis rolul lor. De cele mai multe ori, acestea reprezintă șabloane pentru alt text (de ex. &brandName; ce poate să însemne „Firefox” sau „Thunderbird” pentru acele șiruri din interfață comune celor două programe).

Situația e mai complicată pentru că uneori acele șiruri reprezintă [entități HTML](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references), precum `&amp;` (&amp;) sau `&hellip;` (&hellip;) , care reprezintă caractere de text, nu termeni programatici. Ampersandul de obicei se traduce ca „și”, dar sunt excepții.

Mai multe informații de pe [ghidul L10n.ro](http://www.l10n.ro/Recunoasterea_secventelor_de_text_ce_nu_trebuie_traduse).

### Mărcile Mozilla

Mărcile Mozilla, numele produselor etc. sunt nume proprii și în general nu se traduc. Spre ex. „Mozilla Foundation” este o entitate înregistrată din SUA și numele acesteia nu se traduce sub nicio formă.

## Termeni

* Majoritatea termenilor din IT au o traducere specifică în română. Este foarte importantă menținerea consecvenței acestor traduceri. Dacă nu știți traducerea adecvată consultați [Transvision](https://transvision.mozfr.org/) pentru exemple din șirurile deja traduse. Din păcate, nu toți acești termeni sunt încă definitivați și încă mai sunt inconsistențe între programe, dar încercăm să menținem aceeași terminologie peste întreg proiectul Mozilla.

## Greșeli frecvente

[Ghid de exprimare corectă](https://dexonline.ro/articol/Ghid_de_exprimare_corect%C4%83)

[Greșeli frecvente din traducerea de programe](http://l10n.ro/Gre%C8%99eli_frecvente)

[Forme de plural](http://l10n.ro/Formele_de_plural)

## Forma de adresare

Sunt trei moduri de adresare: *personală*, *politicoasă* și *impersonală*. Istoric și în unele proiecte de programe libere se preferă o adresare politicoasă (când calculatorul apelează utilizatorul -- de ex. „Doriți schimbarea culorii?” sau „Comanda dumneavoastră a fost acceptată”), personală (când utilizatorul adresează o comandă programului -- de ex. „Tipărește”) și impersonală (când este vorba de butoanele meniurilor unei aplicații -- de ex. „Vizualizare”).

La Mozilla din motive de consistență, simplitate și pentru scurtarea traducerilor s-a decis de ceva timp folosirea exclusivă a adresării personale, dar respectuoasă (fără tutuiri). Sunt în continuare proiecte în cadrul Mozilla în care puteți remarca adresare politicoasă. Pe viitor vom încerca să le reparăm și să folosim strict adresare personală peste tot. În foarte puține cazuri atunci când contextul este incert se mai poate folosi adresarea impersonală.

Exemple:

*Butoane sau elemente de meniu:*

    Text original:  Open
    Traducere:      Deschide

    Text original:  Save
    Traducere:      Salvează

    Text original:  Search Files
    Traducere:      Caută fișiere

*Când calculatorul solicită utilizatorul să ia o decizie, sau când calculatorul înștiințează utilizatorul cu privire la o acțiune pe care acesta (utilizatorul) trebuie să o ia:*

    Text original:  Do you want to continue?
    Traducere:      Dorești să continui?

    Text original:  Please try again later.
    Traducere:      Te rugăm să încerci din nou mai târziu.

    Text original:  You have exceeded the number of registration attempts for this session.
                    Please try again later.
    Traducere:      Ai depășit numărul de încercări de înregistrare pentru această sesiune.
                    Te rugăm să încerci din nou mai târziu.

*Când calculatorul raportează o stare sau o acțiune pe care o realizează fără intervenția utilizatorului se folosește forma reflexivă, calculatorul fiind o entitate abstractă, nu o persoană sau un personaj:*

    Text original:     Could not open file %s
    Traducere corectă: Nu s-a putut deschide fișierul %s (sau Imposibil de deschis fișierul)

    Text original:     Receiving data from %s
    Traducere corectă: Se primesc date de la %s

    Text original:     Saving configuration
    Traducere corectă: Se salvează configurația

*Pentru butoane care conduc la meniuri adiționale (fără acțiune imediată), sau poziții de meniu care deschid submeniuri, sau meniuri care constituie titluri ale unor submeniuri, se recomandă folosirea formei impersonale:*

    Text original:     Manage...
    (context: buton a cărui singură acțiune este deschiderea unui meniu adițional)
    Traducere recomandată: Gestionare...

A se vedea și discuția imperativ versus impersonal în meniuri cu puncte-puncte pe marginea acestei reguli.

*Pentru titlurile ferestrelor se folosește forma impersonală:*

    Text original:  Saving configuration
    Traducere:      Salvarea configurației

    Text original:  Manage Media Usage Rights
    Traducere:      Gestionarea drepturilor de utilizare media

*Trebuie evitate expresiile cacofonice în traducerile reflexive, folosiți modul impersonal:*

    Text original:     Press OK to save the session
    Traducere corectă: Apasă Ok pentru a salva sesiunea

## Prescurtările

Trebuiesc evitate prescurtările gen „dvs.” în loc de „dumneavoastră”, ori nu-i în loc de nu e sau nu este. În mod uzual acestea sunt întâlnite în expresii cu multe cuvinte, dialoguri explicative, de configurare, sau de eroare, (foarte) rar în meniuri, de aceea lungimea cuvintelor nu constituie o problemă critică.

## Genul

Trebuiesc evitate discriminările pe bază de sex și formulările deranjante de genul el/ea, prin folosirea, pe cât posibil, a unui limbaj impersonal. De asemenea, pentru a evita frustrarea utilizatorului la vederea unui program care i se adresează nesigur, în ambele genuri, este mai bine să se evite genul când se poate.

    Text original:     Are you sure you want to delete this bookmark?
    Traducere corectă: Sigur dorești să ștergi acest semn de carte?

## Contextul

Este o informație suplimentară despre locul în care apare textul respectiv (nu apare mereu). În exemplul de mai jos, fiind vorba de „Nickname”, uzual traducerea este cu „Pseudonim”, așadar traducerea corectă este cea la masculin.

    Text original:     (not yet valid)
    (context: un nume ce nu este valid)
    Traducere corectă: (încă nu este valid)

## Pluralul

Deși mulți nu suntem conștienți de acest lucru, limba română are *două* forme de plural (una fără „de”, cealaltă cu „de”) și forma de singular. La șirurile cu forme de plural trebuie așadar 3 traduceri: singularul, pluralul fără „de” și pluralul cu „de”.

    1 ou, 2 ouă, 3 ouă, ... 10 ouă, 20 **de** ouă, ..., 101 ouă, 102 ouă, 120 **de** ouă.

Pentru mai multe detalii citiți [pagina dedicată acestui subiect](http://l10n.ro/Formele_de_plural).

## Majusculele

Nu trebuie folosite majuscule pentru fiecare cuvânt într-un meniu, titlu, etc (doar în limba engleză cuvintele încep cu majuscule în titlu).

    Text original:           Save As...
    Traducere corectă:       Salvează ca...

    Text original:           Control Center
    Traducere corectă:       Centru de control

## Topica expresiilor

Topica expresiilor trebuie în general inversată:

    Text original:           An error occurred.
    Traducere corectă:       S-a produs o eroare.

    Text original:           Something wrong has happened.
    Traducere corectă:       S-a întâmplat ceva prost.

## Acceleratori

Acceleratorii sunt scurtăturile din meniuri și panourile de configurare, sunt identificați prin cuvinte ce conțin o literă subliniată, iar acea intrare de meniu sau configurare poate fi activată folosind combinația de taste Alt + tasta subliniată. Ei sunt marcați în textele de tradus prin precedarea literei subliniate fie cu _ (linie joasă) fie cu & (ampersand).

Litera de după accelerator este cea care apare subliniată în elementul de meniu. De ex. pentru șirul E_ditează, d va apărea subliniat.

Se încearcă păstrarea acelorași taste ca din engleză, iar atunci când nu există o literă corespondentă în cuvântul tradus, vom elimina acceleratorul din cuvântul tradus (practic se elimină „&” sau „_” din traducerea românească chiar dacă vedeți „&” sau „_” în engleză). Pentru Firefox, netraducerea acceleratorului va avea ca efect afișarea literei într-o paranteză la sfârșit: de ex. *Editează (x)*. Fiți fără griji, nu este nicio problemă dacă „&” sau „_” lipsesc din traducerea românească.

## Ghilimele

În limba română singurele ghilimele acceptate sunt „text” și „text «altceva» text” (pentru citat în citat) adică: ghilimele deschise, ghilimele închise și ghilimele franceze.

Folosirea apostrofului (') sau a ghilimelelor duble (") din repertoriul ASCII este greșită. Detalii despre ghilimelele folosite în limba română se pot găsi la http://www.acad.ro/alteInfo/ghilimele.doc

## Neologisme

### Folosirea cratimei în neologisme

Articolul hotărât enclitic (singular și plural) se leagă cu cratimă numai în împrumuturile neadaptate: - a căror finală prezintă deosebiri între scriere și pronunțare: bleu- ul [blöul]; - care au finale grafice neobișnuite la cuvintele vechi din limba română: dandy-ul (nu dandiul), dandy-i ; gay-ul, gay-i; hippy-ul, hippy-i; party-ul; playboy-ul, playboy-i; story-ul, story-uri.

Se recomandă atașarea fără cratimă a articolului la împrumuturile - chiar nedaptate sub alte aspecte - care se termină în litere din alfabetul limbii române pronunțate ca în limba română: gadgetul [gheğetul], weekendul [uĭkendul], inclusiv în cazul unor anglicisme ceva mai vechi, scrise și conform DOOM1 fără cratimă: westernuri ș.a.

http://acad.ro/alteInfo/nouDOOM.doc

Câteva exemple:

    web-ul = greșit
    webul = corect

    link-ul / link-urile = greșit
    linkul / linkurile = corect

    blog-ul / blog-urile = greșit
    blogul / blogurile = corect

    ping-uri = greșit
    pinguri = corect

    trackback-uri = greșit
    trackbackuri = corect

    server-ul = greșit
    serverul = corect

    widget-uri = greșit
    widgeturi = corect

    tag-urile = greșit
    tagurile = corect

    e-mail-ul = greșit
    e-mailul = corect

    spam-ul = greșit
    spamul = corect

### Genul neologismelor

Neologismele din domeniul IT sunt preluate cu genul neutru, ele fiind inanimate.

    driver / drivere
    browser / browsere
    player / playere

### Adaptarea la situații extreme

Ce facem când întalnim o situație unde termenii traduși, puși cap la cap nu par să dea sensul dorit:

    Tile children
    (Tapetează copii?)

Ok, după ce s-a dus zâmbetul, încercați să deduceți sensul expresiei, din context; în exemplul de față este vorba despre afișarea ferestrelor „copil” astfel încât să ocupe tot spațiul disponibil; în acest caz, expresia cea mai intuitivă pentru utilizator este:

    Ferestre alăturate

sau eventual

    Ferestre în mozaic

Astfel, urmează morala: nu trebuie să vă feriți de traduceri mai „îndrăznețe”, atunci când sensul unei expresii poate fi îmbunătățit. Aveți însă grijă ca în cazurile în care expresia mai apare și în alte locuri (fișiere), traducerea să fie făcută într-o manieră consecventă.

## Linkuri externe

Acest articol are la bază alte articole mai vechi

[Ghidul traducătorului de software](http://l10n.ro/Ghidul_traduc%C4%83torului_de_software) de pe l10n.ro.

## Linkuri utile

    http://www.hallo.ro/ - Dicționar englez-român
    http://www.dexonline.ro/ - Dicționar explicativ român (consultați doar sursele oficiale)
    http://www.seelrc.org:8080/grammar/pdf/stand_alone_romanian.pdf - Gramatica detaliată a limbii române.

## Liste de discuții

[Grupul de discuții mozilla.ro](https://groups.google.com/forum/#!forum/mozilla-ro)

[Diacritice](https://groups.google.com/forum/#!forum/diacritice)
