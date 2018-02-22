# Style Guide Czech (cs) / Překladatelská stylistická příručka

## Obsah

* [Česká stylistická příručka](general.md)
* [Jak lokalizovat nápovědu k Firefoxu](https://support.mozilla.org/cs/kb/jak-lokalizovat-napovedu-k-firefoxu)
* [Jak přeložit rozhraní SUMO](https://support.mozilla.org/cs/kb/jak-prelozit-rozhrani-sumo)
* [Překladatelský slovník](glossary.md)
* [Překladatelský slovník - L10N.cz](http://wiki.l10n.cz/P%C5%99ekladatelsk%C3%BD_slovn%C3%ADk)
* [Internetová jazyková příručka](http://prirucka.ujc.cas.cz/)
* [Další pomůcky](http://wiki.l10n.cz/Pom%C5%AFcky_pro_p%C5%99ekladatele)

## Další rady a tipy

### Kontrola pravopisu

Kontrola pravopisu není zbytečný luxus. Odstraní řadu překlepů. Ve Firefoxu můžete použít [doplněk pro kontrolu překlepů](https://support.mozilla.org/cs/kb/jak-pouzit-kontrolu-pravopisu) a pomůže vám i [služba Korektor](https://support.mozilla.org/cs/kb/jak-pouzit-kontrolu-pravopisu#w_online-sluaaba-a-doplnluk-korektor).

### Editory

Na překlady článků rozhodně nepoužívejte editory jako FrontPage, Nvu ani MS Word. Výsledkem je kód, který je silně neoptimalizovaný a dá nám moc práce upravit jej do takové podoby, aby byl publikovatelný. Pokud web nemá vlastní editor pro překlad, raději se nejdříve zeptejte.

### Množná čísla

Při překladu řetězců závislých na počtu položek (např. "máte %d nepřečtenou zprávu"/"máte %d nepřečtené zprávy"/"máte %d nepřečtených zpráv") jsou obvykle k dispozici tři oddělené řetězce, nebo jeden s tvary oddělenými středníky. Pokud si nejste jistí, pro jaké počty je který tvar použit, najdete tuto informaci na v [tomto dokumentu](https://developer.mozilla.org/docs/Mozilla/Localization/Localization_and_Plurals#Plural_rule_8_%283_forms%29) na MDN. Pokud uvidíte více po sobě jdoucích samostatných řetězů lišící se pouze zakončením jejich identifikátoru v hranatých závorkách, jde konkrétně o použití [Unicode CLDR](https://cs.wikipedia.org/wiki/Common_Locale_Data_Repository). Vysvětlení takových řetězců najdete v [tomto dokumentu](https://developer.mozilla.org/Add-ons/SDK/Tutorials/l10n#Unicode_CLDR_plural_forms) na MDN.

## Kontakt

Pokud v těchto materiálech narazíte na jakoukoliv nejasnost nebo nesrovnalost, neváhejte kontaktovat [český lokalizační tým](https://l10n.mozilla.org/teams/cs).
