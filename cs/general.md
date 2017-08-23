# Co dodržovat při lokalizaci

Než se pustíte do překladu, je dobré si přečíst základní pravidla, kterých byste se měli držet. Ušetříte tím práci nejen sobě, ale i nám. Tento soubor pravidel vznikl na základě častých chyb, kterých se autoři při překladech dopouštěli. Některá pravidla platí obecně, jiná pouze pro překlad dokumentů či rozšíření.

## Společná pravidla

### Dodržování terminologie

Každý článek či rozšíření, které překládáte, by mělo být návazné na terminologii používanou v programech, pro které je rozšíření určeno. Pokud jsou v české verzi používány výrazy jako "záložky", "panely", "zrušit" apod., měli byste tuto terminologii dodržovat a u rozšíření (resp. článku) volit stejný překlad. Pro vyhledání vhodných termínů můžete použít nástroj [Transvision](http://wiki.l10n.cz/Transvision).

### Nepoužívat cizí výrazy

Dost častým nešvarem bývají výskyty výrazů typu "menu", "level" apod. Tyto výrazy nemají s češtinou nic společného a je nutné, aby se používaly české ekvivalenty tj. "nabídka", "úroveň" apod. Pokud existuje český ekvivalent slova, použijte jej! Obzvláště se řiďte [naším překladovým slovníkem](http://wiki.l10n.cz/Mozilla:P%C5%99ekladatelsk%C3%BD_slovn%C3%ADk) a také můžete výrazy dohledávat pomocí nástroje [Transvision](http://wiki.l10n.cz/Transvision).

### Nepoužívat výrazy "kliknout" a "storno"

Nejčastější připomínky z naší strany se týkají výrazů "kliknout" a "storno". Tyto výrazy zevšedněly díky jejich používáním v MS Windows. V produktech Mozilla, které jsou multiplatformní, se ale místo nich používají výrazy "klepnout" a "zrušit".

### Dodržovat pravidla češtiny a stavbu vět

Překlad musí splňovat pravidla češtiny. Měl by tedy být bez gramatických chyb a věta či souvislý text by měla dávat smysl. Řada autorů překládá "strojově" a nad svým překladem nepřemýšlí. Překlad je pak nepřesný nebo věty zní divně. Vhodnější postup je nedržet se originálu za každou cenu a překládat vlastními slovy. Pozor také na čárky nebo středníky.

### Množná čísla

Při překladu řetězců závislých na počtu položek (např. "máte %d nepřečtenou zprávu"/"máte %d nepřečtené zprávy"/"máte %d nepřečtených zpráv") jsou obvykle k dispozici tři oddělené řetězce, nebo jeden s tvary oddělenými středníky. Pokud si nejste jistí, pro jaké počty je který tvar použit, najdete tuto informaci na MDN v dokumentu o [pravidlech pro množná čísla](https://developer.mozilla.org/docs/Mozilla/Localization/Localization_and_Plurals#Plural_rule_.238_.283_forms.29). Pokud uvidíte více po sobě jdoucích samostatných řetězů lišící se pouze zakončením jejich identifikátoru v hranatých závorkách, jde konkrétně o použití [Unicode CLDR](https://cs.wikipedia.org/wiki/Common_Locale_Data_Repository). Vysvětlení takových řetězců najdete v [tomto dokumentu](https://developer.mozilla.org/Add-ons/SDK/Tutorials/l10n#Unicode_CLDR_plural_forms) na MDN.

### Přivlastňování

Častá chyba vzniká při překladu "your" jako "váš". Např. věta "Set Firefox as your default browser" přeložená jako "Nastavte si Firefox jako váš výchozí prohlížeč" zní divně. Správně je "Nastavte si Firefox jako svůj výchozí prohlížeč.". Přivlastňovací zájmeno "svůj" přivlastňuje podmětu/původci děje, ale protože ho ale angličtina nemá, zvlášť při překladu to často svádí ho nepoužít. Podrobněji je to vysvětleno v [internetové jazykové příručce](http://prirucka.ujc.cas.cz/?id=630).

## Pravidla pro překlad aplikací a rozšíření

### Uživateli se nerozkazuje!

Často se v překladech setkáváme s výrazy "Zobraz", "Udělej", "Použij" apod. To je chybně, protože uživateli se nerozkazuje. Správně má být "Zobrazit", "Udělat", "Použít" apod.

### Nepersonifikujte software

Software není živou osobou. Při překladech se proto vyhýbejte výrazům typu "Stahuji...", ale používejte správný tvar "Stahuje se..." nebo "Stahování...".

## Pravidla pro překlad textů a webů

### Nepoužívat WYSIWYG editory typu FrontPage či Nvu

Na překlady článku rozhodně nepoužívat výše zmíněné či ekvivalentní editory. Výsledkem je kód, který je silně neoptimalizovaný a dá nám moc práce upravit jej do té podoby, aby byl publikovatelný. Pokud web nemá vlastní editor pro překlad, raději se nejdříve zeptejte jaký použít.

### Používejte kontrolu pravopisu

Kontrola pravopisu není zbytečný luxus. Odstraní řadu překlepů.
