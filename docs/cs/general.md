# Style Guide Czech (cs) / Překladatelská stylistická příručka

 <!-- toc -->

This style guide provides instruction for translating to the Czech locale. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/). Please read both before starting with any localization work on Mozilla product and project, help articles or extensions for Firefox. It will help you to avoid some common mistakes and make the translation consistent.

In addition to this style guide, please also read our [glossary](glossary.md). Words like "kliknout" and "storno" may look trivial to you, but in fact those apply to the world of MS Windows only. In multiplatform Mozilla products we use "klepnout" and "zrušit". Some terminology may be specific directly to the product, in Firefox e.g. "záložky" ("bookmarks") or "panely" ("tabs"). Please read and use our [glossary](glossary.md) or [Transvision](https://wiki.l10n.cz/Transvision) whenever you are in doubt.

If you prefer to read the style guide in Czech, there is the [L10N.cz style guide](https://wiki.l10n.cz/Stylistick%C3%A1_p%C5%99%C3%ADru%C4%8Dka), which was created base on this one, but in may differ in less or more important parts.

## Czech language in a nutshell

Czech is a West Slavic language. It’s close to Polish, Sorbian and very closely related to Slovak to the point of mutual intelligibility. Similar to other Slavic languages, nouns, verbs and adjectives are inflected. The inflection rules are complex, depending on grammatical case, gender, number, tense, person, and more.

* [Czech language - Wikipedia](https://en.wikipedia.org/wiki/Czech_language)
* [Unicode CLDR - Czech Plural Rules](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#cs)
* [Czech grammar - Wikipedia](https://en.wikipedia.org/wiki/Category:Czech_grammar)
* [Localization and Plurals - MDN](https://developer.mozilla.org/docs/Mozilla/Localization/Localization_and_Plurals#Plural_rule_8_%283_forms%29)

## Formality and Tone

The tone of Mozilla’s language should be adaptable to anyone. From new users to seasoned Mozillians, the tone should be approachable, welcoming, and inclusive. Mozilla is fun and should delight the user in expected and unexpected ways.

Especially in desktop products, prefer formal language, but stay friendly, authentic and natural. Prefer active voice over passive voice, but please note some common exceptions below. Avoid any long and complicated sentences and grammatical constructions. Clarity and meaning of every sentence has the highest priority.

In general, use the second person plural (vy - vykání) to address the user in Firefox products ("zadejte", but not "zadej"). It will not sound that strict and you will also workaround grammatical genders ("Pokud si nejste jistý/á, ..." -> "Pokud si nejste jisti, ...").

Avoid using the first person (já, mé, moje) as it can create confusion about who is being addressed. Avoid personification of the software. It’s not a live person. Instead of "Stahuji...", use passive "Stahuje se..." or "Stahování...".

In some projects (like Desktop, Android, iOS, Focus), the language will be direct as it belongs to a software string. This language should be maintained as direct, yet respectful. Avoid using imperative! In short actions and button labels use infinitive constructions ("Zobrazit", "Použít", instead of "Zobraz", "Použij"). If there is a need to ask the user to perform an action, be polite ("Vyberte (prosím)...").

## Natural expression

Any translation has to obey rules of the Czech grammar. Sentences have to be both [grammatically correct](#grammar) and also have a clear meaning. Meaning and readability is the first thing you should care about. Do not feel ashamed to read the sentence aloud or ask someone to read it for you to make sure it sounds good.

Avoid any archaisms or long and complicated sentences and constructions. Especially beware of translating the English original word by word. Do not stick to the English word order nor sentence constructions too much. Such translations are inaccurate and sound "like a robot" instead of a human. Use your own words and everyday terms to express the desired meaning instead. One of the typical examples is "Are you sure you want...?" being translated as "Jste si jisti, že chcete...?", instead of more natural "Opravdu chcete...?".

For complex sentences, read them multiple times before translating to Czech. To make the translated text sound natural, it may be necessary to adjust the number of sentences (either split them or combine) or change their order and relations. Keep the translations simple and easy to understand. Be careful about commas and semicolons too.

* [Internetová jazyková příručka: Psaní čárky v souvětí](http://prirucka.ujc.cas.cz/?id=150)
* [Internetová jazyková příručka](http://prirucka.ujc.cas.cz/) v části "Pravopis – interpunkce"
* [Interpunkce na webu](https://www.jakpsatweb.cz/interpunkce.html)

Think twice when translating possessive pronouns, especially "your". You may tempt to translate "Set Firefox as your default browser" as "Nastavte si Firefox jako váš výchozí prohlížeč", however the right translation "Nastavte si Firefox jako svůj výchozí prohlížeč". Despite English does not have it, the possessive pronoun "svůj" refers to the subject and sounds much more natural in Czech. Check the language reference page and don’t be afraid to use it. ;) When translating "you"/"your" as "vy"/"váš", start the word with lowercase "v" (except where the capital letter is required by grammar, e.g. at the beginning of a sentence or [label](#user-interface-elements)). Also keep in mind that English uses "you"/"your" more frequently than Czech does. Sometimes it sounds better if you omit the pronoun completely.

* [Internetová jazyková příručka: Konkurence přivlastňovacích zájmen](http://prirucka.ujc.cas.cz/?id=630)

A common mistake, both in translations and spoken language, is the overuse of some pronouns and conjunctions, especially "který", "pokud" and "ale". If you cannot find any better formulations, try to alternate some of the occurrences with "jenž", "avšak" or verb conditionals ("-li").

* [Česká zájmena – Wikipedie](https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%A1_z%C3%A1jmena)

Very frequent mistake is the overuse of borrowed words and phrases. Despite some of them may be used in your day to day life, even in the related area, always use Czech equivalents if there are any. While "menu" and "level" might work for many people using computers every day, your parents will prefer Czech equivalents "nabídka" and "úroveň". Please use our [glossary](glossary.md) or [Transvision](https://wiki.l10n.cz/Transvision) to lookup Czech equivalents already in use. The only exception are branded names.

Usually it’s also better to avoid abbreviations and acronyms. In case you need to use it (e.g. because of the space limitation), please search in the existing translations first. If this is the first occurrence, lookup and use a standard one, or follow the rules from the language reference.

* [Zkratky.cz - významy zkratek](https://www.zkratky.cz/)
* [Internetová jazyková příručka: Zkratková slova](http://prirucka.ujc.cas.cz/?id=784)

## Handling cultural references, idioms, and slang

English idioms and phrases usually do not make sense in Czech translated word by word. If you see a parable or a word phrase that sound weird for you, there is a good chance it’a an idiom. There are several pages you can use to search English idioms and their meaning.

* [List of Common Proverbs](https://www.engvid.com/english-resource/50-common-proverbs-sayings/)
* [List of Common Idioms](http://www.smart-words.org/quotes-sayings/idioms-meaning.html)
* [Cambridge English Dictionary](https://dictionary.cambridge.org/dictionary/english/)

Once you know the idiom meaning, you can search for an equivalent in Czech, or just translate the meaning as you would say it without any parables.

* [České idiomy - Wikislovník](https://cs.wiktionary.org/wiki/Kategorie:%C4%8Cesk%C3%A9_idiomy)
* [České fráze - Wikislovník](https://cs.wiktionary.org/wiki/Kategorie:%C4%8Cesk%C3%A9_fr%C3%A1ze)

## Units and Unit Conversion

### Calendar view

In the Czech Republic, the 12-month [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) is used with the week starting on Monday.

### Date Format

| Name | Format | Example |
| ---- | ------ | ------- |
| Short (rare since 2000) | d. m. yy | 1. 12. ’99 |
| Abbreviated | d. mmm | 1. pro |
| Long (numerical) | d. m. yyyy | 1. 12. 1999 |
| Long | d. Month yyyy (month in genitive) | 1. prosince 1999 |

Date and month, if written numerical, are single digit ordinal numbers (followed by a period with a space). In business and official correspondence double digit ordinal numbers may be used. In localization, always use the single digit form.

* [Internetová jazyková příručka: Kalendářní datum a místo původu](http://prirucka.ujc.cas.cz/?id=810)
* [Date and time notation in the Czech Republic - Wikipedia](https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_Czech_Republic)

### Time Format

The 24-hour cycle is used for official and exact purposes. The 12-hour cycle is also used in daily life, especially in spoken language. In localization, always use 24-hour clock.

Hours and minutes are separated by a period without any space, hours written a single digit, minutes always double digit (7.30, 18.05, 23.25). The period can be replaced by a colon. In that case hours can be written both single and double digit (7:30 or 07:30). In localization, always use the single digit form.

For time ranges, use a dash without space (10-13 h, 12.00-12.45).

* [Internetová jazyková příručka: Časové údaje](http://prirucka.ujc.cas.cz/?id=820)
* [Date and time notation in the Czech Republic - Wikipedia](https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_Czech_Republic)

### Numerals

| Separator | Character Name | Symbol | Example |
| --------- | -------------- | ------ | ------- |
| Decimal | Comma | `,` | 1,23 |
| Thousands | none or Space (in longer numbers) | | 1234 or 123 456 |
| Percentage | Percent sign (with a leading space) | `%` | 99 % |
| Percentage (adjective) | Percent sign (without any space) | `%` | 99% |

Numerals can become a pretty hard nut to crack, especially in case of words composed from digits and words. As a localizer, you should get familiar with the correct grammar for numerals below (what’s the difference between "12m" and "12 m", or how to correctly write "dvaačtyřicetiletý" with digits).

* [Internetová jazyková příručka: Znaky, čísla a číslice](http://prirucka.ujc.cas.cz/?id=785)
* [Internetová jazyková příručka: Tvoření a psaní výrazů složených z číslic a slov](http://prirucka.ujc.cas.cz/?id=790)
* [České číslovky – Wikipedie](https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%A9_%C4%8D%C3%ADslovky)

### Currency

The currency of the Czech Republic is the [Czech koruna](https://en.wikipedia.org/wiki/Czech_koruna) (CZK). The monetary signs are `Kč` or `,-` separated by a space from the amount (50 Kč). If used as a adjective (e.g. a fifty-crown coin), the symbol is without any space (50Kč mince).

* [Internetová jazyková příručka: Peněžní částky, značky měn](http://prirucka.ujc.cas.cz/?id=786)
* [Internetová jazyková příručka: Tvoření a psaní výrazů složených z číslic a slov](http://prirucka.ujc.cas.cz/?id=790)

### Units

In the Czech Republic [metric system](https://en.wikipedia.org/wiki/Metric_system) (kilograms, meters, ...) is used.

### Address and Postal Code Format

    [addressee]
    [street name][building and suite numbers]
    [postal code][city/post name]

    Vážená paní
    Jarmila Novotná
    Pod Mlýnem 4
    463 41 Dlouhý Most

* [Internetová jazyková příručka: Adresy](http://prirucka.ujc.cas.cz/?id=800)

### Telephone Number format

Phone numbers in the Czech Republic consist of 9 digits, usually separated by triplets. Usually the phone number also have the international code (+420 or less frequently 00420) in front.

`+420 ### ### ###`

## Grammar

Any translation has to obey rules of the Czech grammar. Sentences have to be both grammatically correct and also have a clear meaning. Avoid any archaisms or long and complicated sentences and constructions. When using any, make sure the punctuation is correct. [Punctuation saves lives](https://duckduckgo.com/?q=punctuation+saves+lives&ia=images).

* [Internetová jazyková příručka: Psaní čárky v souvětí](http://prirucka.ujc.cas.cz/?id=150)
* [Internetová jazyková příručka: Pravopis – interpunkce](http://prirucka.ujc.cas.cz/)
* [Interpunkce na webu](https://www.jakpsatweb.cz/interpunkce.html)

## Copy rules

<!-- TODO: capitalization https://bugzilla.mozilla.org/show_bug.cgi?id=1430453 -->

In full sentences and texts on websites or support articles, always follow the grammatical rules for capitalization.

* [Internetová jazyková příručka: Psaní velkých písmen – obecné poučení](http://prirucka.ujc.cas.cz/?id=180)
* [Internetová jazyková příručka: Pravopis – velká písmena](http://prirucka.ujc.cas.cz/)

### Punctuation

Note, include the terminal punctuation in hyperlink if the entire text in the UI is linked. Do not include the terminal punctuation in the hyperlink if the link is within running text or only part of the sentence is linked.

In texts, do not forget a space after a period at the end of a sentence. Spaces need to be also written after (but not before) colons or semicolons. Text inside brackets is not separated by spaces from them, but the correct placement of spaces is right before the opening and after the closing bracket only.

* [Internetová jazyková příručka: Tečka](http://prirucka.ujc.cas.cz/?id=160)
* [Internetová jazyková příručka: Dvojtečka](http://prirucka.ujc.cas.cz/?id=161)
* [Internetová jazyková příručka: Závorky](http://prirucka.ujc.cas.cz/?id=163)
* [Internetová jazyková příručka: Lomítko](http://prirucka.ujc.cas.cz/?id=167)

For quotes use the Czech double quotation marks (`„` and `“`). On the Czech keyboard, you can write them as `Alt + 0132` and `Alt + 0147` respectively. The corresponding HTML entities are `&bdquo;` and `&ldquo;`. For code snippets or API or function name references use quotation marks or apostrophes (`"` or `'`). These you can usually copy from the original English text.

* [Internetová jazyková příručka: Uvozovky](http://prirucka.ujc.cas.cz/?id=162)

### Lists

Lists in Czech do not have a strict rules to obey. However there are good practices to follow, all mentioned in the language reference page.

* [Internetová jazyková příručka: Psaní výčtů](http://prirucka.ujc.cas.cz/?id=870)

### Feature names

Title case does not look natural for the Czech language. Even for product features, use lowercase, but obey the general grammatical rules. E.g. "With Tracking protection..." would be translated as "S ochranou proti sledování...".

If you want to really emphasize the importance of the feature, you can use title case for the first word of its name in nominative and introduce it by a general word "funkce". The previous sentence would now look like "S funkcí Ochrana proti sledování...". But even here more natural wording "S funkcí ochrany proti sledování..." is preferred, with the feature name all in lowercase.

### User interface elements

* **Titles** should be brief and precise. Unless necessary, it shouldn’t be a whole sentence. Capitalize the first letter of the first word only.
* **Window titles** should be short and use infinitive form, e.g. "Uložit soubor".
* In **buttons** capitalize the first letter of the first word in the label only. Limit the whole text to one or two words. Use verbs in infinitive form that precisely describe the button’s action result. It’s way better to translate "Install" button label as "Nainstalovat" than "Instalovat". Most of them will be probably covered in our [glossary](glossary.md).
* **Checkboxes** and **radio buttons** capitalize the first letter of the first word and use infinitive form. Make sure that the translations of elements in the same group or section are consistent and sound natural as a list of alternative or complementary choices.
* In **select options list** capitalize the first letter of the first word, unless the selector makes a sentence together with the corresponding label. In that case make sure all options make a correct sentence with the label. Try to keep all the options about the same length and preferably short.
* **Tooltips** serve the purpose of a short help and appear when mouse is hovered over an UI element. Use active voice with the element as unexpressed subject, e.g. "Zobrazí historii", "Uloží soubor", "Otevře nabídku".
* **Accesskeys**, sometime also called accelerators, are keys to access specific UI elements using your keyboard only. Combined with screen readers, accesskeys improve the accessibility for visually impaired users, or used standalone they speedup the UI navigation. In the UI you can often determine them as underscored letters. When localizing accesskeys you have to make sure the letter is on the Czech keyboard and users can press it with the `Alt` key at the same time. The rule of thumb is to only use letters without diacritics. To make the accesskeys look and work the best, use letters contained in the corresponding label and if possible unique in the application menu or dialog. If it fulfills the mentioned rules, using the same accesskey as in English is a small plus.
* **Commandkeys** are similar to accesskeys, but they work as regular keyboard shortcuts (e.g. `Ctrl+S` for save or `Ctrl+Q` to quit the application). Always keep the same commandkey as in English, unless the key is not available on the standard Czech keyboard. See the *Shortcuts and Accesskeys* section in the [General Mozilla L10n Style Guide](../mozilla_general/) for more information about both accesskeys and commandkeys.
