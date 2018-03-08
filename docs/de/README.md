# Style Guide German (de)

Wenn Sie bei der Übersetzung mitmachen wollen, so wenden Sie sich bitte an die Person aus dieser Liste hier, welche für Ihr Interessengebiet zuständig ist.

Was sollte bei der Übersetzung beachtet werden?

## Rechtschreibung/Grammatik

Da als Bezeichnung meistens nur einzelne Stichwörter verwendet werden, sollte vor allem auf Tippfehler und Buchstabendreher geachtet werden. In Beschreibungen, die möglichst einen vollständigen Satz ergeben sollten, ist weiterhin noch auf Rechtschreibung/Grammatik im Allgemeinen zu achten. Die meistverbreiteten Fehler sind der falsche Einsatz von Leerzeichen/Bindestrichen sowie Groß- und Kleinschreibung.

Umlaute und Sonderzeichen sollen auf alle Fälle korrekt eingesetzt und dargestellt werden. ae, ue, oe, ss etc.
sind keine Alternative.

## Terminologie

Wir sind bemüht, zur Vereinheitlichung und für ein homogenes Erscheinungsbild innerhalb des offiziellen Rahmens der deutschsprachigen Mozilla-Produkte zu arbeiten. Weiterhin lassen sich auch Begriffe aus schon geprüften und veröffentlichten Erweiterungen nutzen (falls die Anwendungen keine Hilfestellung geben).

Es gibt z. B. im deutschen Firefox keine Icons, hier ist von Symbolen die Rede. Buttons sind Schaltflächen, Toolbars zumeist (abhängig vom Kontext) Symbolleisten. Toolbar Buttons erscheinen dementsprechend als Symbolleisten-Schaltflächen etc.

Um eine Auseinandersetzung mit der gängigen Mozilla-Terminologie kommt man also nicht herum. Wir können nur jedem Übersetzer, der seine Aufgabe ernst nimmt, empfehlen, nebenher eine englische Version des entsprechenden Programms zu betreiben, um einen direkten Vergleich zu den jeweils angesprochenen Elementen und auch Funktionen zu haben.

Sollte ein Begriff noch nie verwendet/übersetzt worden sein, so bitte auch die Hinweise im Abschnitt Benutzerfreundlichkeit/Eindeutigkeit beachten.

## Formulierung/Stil

In Übersetzungen sollte der „Du-Imperativ“ vermieden werden (Lösche…, Akzeptiere…, Lehne…, etc.). Stattdessen wird der Infinitiv verwendet.

Beispiel: XYZ anzeigen statt Zeige XYZ

## Benutzerfreundlichkeit/Eindeutigkeit

Hier muss man sich vor Augen halten, dass viele Entwickler selbst keine „Native English Speaker/Writer“ sind und zudem als Autoren natürlich einen anderen Blick auf ihre Werke haben (und auch nur Menschen sind, die mal Fehler machen).

Oftmals ist es daher ratsam, Formulierungen zu hinterfragen und ggf. etwas freier und somit erklärender zu wählen oder den Gegebenheiten der deutschen Sprache anzupassen, um eine bessere Verständlichkeit zu bieten. Die Bezeichnung sollte möglichst eine einfache, aber auch eindeutige Funktionsbeschreibung sein.

## Anrede

Stellenweise verwandt mit dem vorherigen Punkt: Den Benutzer nie duzen! Des Weiteren sollte ein „Sie“ grundsätzlich aber auch gemieden und nur in Fällen verwendet werden, in denen es einer direkten Ansprache des Nutzers bedarf. Ausnahme: Social Media. Bei Texten, die auf Facebook und Twitter veröffentlicht werden, wird generell das „Du“ eingesetzt.

## Metaphern & passende Übersetzungen

Sprichwörter und Floskeln, welche im Deutschen nicht geläufig sind, werden durch ein passendes Sprichwort ersetzt oder falls nicht möglich umschrieben. Zum Beispiel:

* "Dog eat dog" / "Der Stärkere gewinnt"
* "kick-off meeting" (Referenz auf American Football) / "Auftaktveranstaltung für ein größeres Projekt"

## Marken- und Produktnamen

Markennamen mit Markenrichtlinien von Mozilla wie "Firefox" oder jene anderer Unternehmen und Organisationen dürfen nicht übersetzt werden. Weitere Informationen dazu hier: [https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/) (auf Englisch). Für Marken, welche eindeutig über keine Markenrichtlinien verfügen, muss die Community entscheiden, ob diese übersetzt werden sollen oder nicht. Falls die Marke ins Deutsche übersetzt wird, so muss sie folgender Liste hinzugefügt werden.

| Englisch | Deutsch |
| -------- | ------- |
|Firefox Accounts | Firefox-Konten |

Eine ausführliche Liste, welche Produktnamen lokalisiert werden dürfen, ist [hier](https://docs.google.com/spreadsheets/d/1F-n8Wle0BCgim5707kBA74T0eMFnWAsyf0ENJZ04ycg/edit?pref=2&pli=1#gid=0) verfügbar (Stand: Dezember 2015).

## Zahlen

Tausenderstellen werden mit Punkten getrennt, das Komma ist das Dezimaltrennzeichen:

    Beispiel: 1.234,56

## Datum

Tag und Monat werden als Zahl jeweils mit zwei Stellen geschrieben (eine führende 0 wird falls nötig eingefügt). Das Jahr wird vierstellig geschrieben:

    Beispiel: 03.05.2015

Achtung bei der Übersetzung: Amerikanische Datumsangaben enthalten an erster Stelle in der Regel den Monat, d.h. mit 05/03/2015 ist der 03. Mai 2015 gemeint.

## Rechtliche Texte

Projekte von Mozilla enthalten oft rechtliche Texte wie Benutzervereinbarungen, Datenschutzerklärungen usw. Beim Korrekturlesen von rechtlichen Texten sollten Übersetzer darauf achten, dass die aufgestellten Regeln beachtet werden.

## Zeichenkodierung

Alle Übersetzungsdateien (.dtd, .properties) müssen im UTF-8-Format (ohne BOM) gespeichert werden. Dazu benötigt man unbedingt einen Editor, der es erlaubt, beim Abspeichern die Zeichenkodierung des Dokuments festzulegen, beispielsweise Notepad++ oder SciTE. In .dtd-Dateien müssen bestimmte Zeichen maskiert werden:

| Zeichen | .dtd-Dateien |
| ------- | ------------ |
| `&` | `&amp;` |
| `<` | `&lt;` |
| `"` | `&quot;` |
| `%` | `&#37;` |
| `>` | `&gt;` |
| `'` | `&apos;` |
| `andere Unicode-Zeichen` | `&#Dezimalnummer;` |
| `Kommentar` | `<!-- Text Text Text -->` |

Hinweis: Zeichenketten wie %S oder %1 dürfen nicht verändert werden, da es sich hierbei um Platzhalter handelt.

----

## Quellen

[erweiterungen.de: Informationen für Übersetzer](http://www.erweiterungen.de/informationen/uebersetzer/)
