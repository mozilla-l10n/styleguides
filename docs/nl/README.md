# Styleguide: Dutch (nl)

Dit document is een gedeeltelijke kopie van de pagina op [www.mozilla-nl.org](https://www.mozilla-nl.org/nl/woordenboek). Aan een echte stijlgids wordt nog gewerkt, zij het met lage prioriteit.

## Algemene regels

* Spreek de gebruiker aan met u, niet je.
* Helpfiles auteursrecht: Auteursrecht © 2003-20xx Medewerkers van het Mozilla Help Viewer Project. (Gebruik het actuele jaar.)
* Aangezien we als Mozilla-NL vaak dezelfde richtlijnen volgen als de vertaling van KDE, slaat de uitleg in de [KDE-vertaalgids](https://kde.nl/content/vertaalgids) en de [bijbehorende woordenlijst](https://kde.nl/node/386) ook op de vertaling van Mozilla. De woordenlijst op deze pagina heeft wel voorrang.
* Voor andere zaken waarover wordt getwijfeld, kunnen de woorden worden opgezocht in het [Vrijschrift-woordenboek](https://vertaling.vrijschrift.org/woordenboek) of in de [lijst met online woordenlijsten](https://wiki.gnome.org/GnomeNederlands/Woordenlijst) die GNOME-NL heeft opgesteld.

## Aanhalingstekens en apostroffen

In de Nederlandse vertaling gebruiken we zgn. ‘gekrulde’ aanhalingstekens en apostroffen. Dit omdat deze typografisch beter staan, en de Unicode-standaard ook aanraadt in plaats van de ' een ’ te gebruiken voor apostroffen. Een overzicht van de tekens:

|    |Teken |	Unicode |	DTD |	Properties |	Toetscombinatie (qwerty internationaal)|
| -- |:----:|:-------:|:---:|:----------:| ---------------------------------------|
|enkele aanhalingstekens openen |	‘ |	`U+2018` |	`&#8216;` |	`\u2018` |	`ALTGR + 9`|
|enkele aanhalingstekens sluiten |	’ |	`U+2019` |	`&#8217;` |	`\u2019` |	`ALTGR + 0`|
|apostrof |	’ |	`U+2019` |	`&#8217;` |	`\u2019` |	`ALTGR + 0`|
|dubbele aanhalingstekens openen |	“ |	`U+201C` |	`&#8220;` |	`\u201C` |	`ALT + 0147 (Windows) / ALTGR + SHIFT + [ (Linux)`|
|dubbele aanhalingstekens sluiten |	” |	`U+201D` |	`&#8221;` |	`\u201D` |	`ALT + 0148 (Windows) / ALTGR + SHIFT + ] (Linux)`|

Je kunt de tekens zelf gewoon in de Unicode-gecodeerde bestanden gebruiken. Mozilla gebruikt - tegen de richtlijnen van Sun in - voor bijna alle bestanden utf-8. Voor uitzonderingen, zie [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Encodings_for_localization_files).

Als je geen qwerty-internationaal gebruikt, zijn deze tekens eenvoudig in de ‘character map’ (Start / Programma’s / Bureau-accessoires / Systeemwerkset / Speciale tekens) te vinden. Kies daarvoor ‘Geavanceerde weergave’, ‘Groeperen op: Unicode-subbereik’, ‘Algemene interpunctie’, en daar staan ze dan tussen.

Voor Linux is er het programma ‘gucharmap’, dat net zo werkt.

Waarschuwing:
gebruik nooit en te nimmer de accenttekens `(U+0060)` en `(U+00B4)`. Dit zijn geen aanhalingstekens; ze hebben een ander doel en ze zien er anders uit. Het gebruik van deze tekens veroorzaakt bijvoorbeeld ongewenste extra spatiëring.
