# Style Guide Czech (cs) / Překladatelská stylistická příručka

<!-- toc -->

This style guide provides instruction for translating to the Czech locale. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/README.md). Please read both before starting with any localization work on Mozilla product and project, help articles or extensions for Firefox. It will help you to avoid some common mistakes and make the translation consistent.

In addition to this style guide, please also read our [glossary](glossary.md). Words like "kliknout" and "storno" may look trivial to you, but in fact those apply to the world of MS Windows only. In multiplatform Mozilla products we use "klepnout" and "zrušit". Some terminology may be specific directly to the product, in Firefox e.g. "záložky" ("bookmarks") or "panely" ("tabs"). Please read and use our [glossary](glossary.md) or [Transvision](http://wiki.l10n.cz/Transvision) whenever you are in doubt.

## Czech language in a nutshell

Czech is a West Slavic language. It’s close to Polish, Sorbian and very closely related to Slovak to the point of mutual intelligibility. Similar to other Slavic languages, nouns, verbs and adjectives are inflected. The inflection rules are complex, depending on grammatical case, gender, number, tense, person, and more.

* [Czech language - Wikipedia](https://en.wikipedia.org/wiki/Czech_language)
* [Unicode CLDR - Czech Plural Rules](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#cs)
* [Czech grammar - Wikipedia](https://en.wikipedia.org/wiki/Category:Czech_grammar)
* [Localization and Plurals - MDN](https://developer.mozilla.org/docs/Mozilla/Localization/Localization_and_Plurals#Plural_rule_8_%283_forms%29)

## Formality and Tone

The tone of Mozilla’s language should be adaptable to anyone. From new users to seasoned Mozillians, the tone should be approachable, welcoming, and inclusive. Mozilla is fun and should delight the user in expected and unexpected ways.

Especially in desktop products, prefer formal language, but stay friendly, authentic and natural. Avoid any long and complicated sentences and grammatical constructions. Clarity and meaning of every sentence has the highest priority.

In general, use the second person plural (vy - vykání) to address the user in Firefox products. Firefox is a user agent, "Firefox je tu pro vás".

Avoid using the first person (já, mé, moje) as it can create confusion about who is being addressed. Avoid personification of the software. It’s not a live person. Instead of "Stahuji...", use "Stahuje se..." or "Stahování...".

In some projects (like Desktop, Android, iOS, Focus), the language will be direct as it belongs to a software string. This language should be maintained as direct, yet respectful. Avoid using imperative! In short actions and button labels use infinitive constructions ("Zobrazit", "Použít", instead of "Zobraz", "Použij"). If there is a need to ask the user to perform an action, be polite ("Vyberte (prosím)...").

## Natural expression

Any translation has to obey rules of the Czech grammar. Sentences have to be both [grammatically correct](#grammar) and also have a clear meaning. Avoid any archaisms or long and complicated sentences and constructions. Especially beware of translating the English original word by word. Do not stick to the English word order nor sentence constructions too much. Such translations are inaccurate and sound "like a robot". Use your own words to express the desired meaning instead. For complex sentences, read them multiple times before translating to Czech. To make the translated text sound natural, it may be necessary to adjust the number of sentences (either split them or combine) or change their order and relations. Be careful about commas and semicolons too.

* [Internetová jazyková příručka: Psaní čárky v souvětí](http://prirucka.ujc.cas.cz/?id=150)
* [Internetová jazyková příručka: Pravopis – interpunkce](http://prirucka.ujc.cas.cz/)

Think twice when translating possessive pronouns, especially "your". You may tempt to translate "Set Firefox as your default browser" as "Nastavte si Firefox jako váš výchozí prohlížeč", however the right translation "Nastavte si Firefox jako svůj výchozí prohlížeč". Despite English does not have it, the possessive pronoun "svůj" refers to the subject and sounds much more natural in Czech. Check the language reference page and don’t be afraid to use it. ;)

* [Internetová jazyková příručka: Konkurence přivlastňovacích zájmen](http://prirucka.ujc.cas.cz/?id=630)

Very frequent mistake is the overuse of borrowed words and phrases. Despite some of them may be used in your day to day life, even in the related area, always use Czech equivalents if there are any. While "menu" and "level" might work for many people using computers every day, your parents will prefer Czech equivalents "nabídka" and "úroveň". Please use our [glossary](glossary.md) or [Transvision](http://wiki.l10n.cz/Transvision) to lookup Czech equivalents already in use. The only exception are branded names.

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
| Short (rare since 2000) | dd. mm. yy | 1. 12. ’99 |
| Abbreviated | dd. mmm | 1. pro |
| Long (numerical) | dd. mm. yyyy | 1. 12. 1999 |
| Long | Date Month Year (month in genitive) | 1. prosince 1999 |

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

* [Internetová jazyková příručka: Znaky, čísla a číslice](http://prirucka.ujc.cas.cz/?id=785)
* [Internetová jazyková příručka: Tvoření a psaní výrazů složených z číslic a slov](http://prirucka.ujc.cas.cz/?id=790)

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

## Copy rules

<!-- TODO: capitalization https://bugzilla.mozilla.org/show_bug.cgi?id=1430453 -->

In full sentences and texts on websites or support articles, always follow the grammatical rules for capitalization.

* [Internetová jazyková příručka: Psaní velkých písmen – obecné poučení](http://prirucka.ujc.cas.cz/?id=180)
* [Internetová jazyková příručka: Pravopis – velká písmena](http://prirucka.ujc.cas.cz/)

### Punctuation

Note, include the terminal punctuation in hyperlink if the entire text in the UI is linked. Do not include the terminal punctuation in the hyperlink if the link is within running text or only part of the sentence is linked.

For quotes use the Czech double quotation marks (`„` and `“`). On the Czech keyboard, you can write them as `Alt + 0132` and `Alt + 0147` respectively. The corresponding HTML entities are `&bdquo;` and `&ldquo;`. For code snippets or API or function name references use quotation marks or apostrophes (`"` or `'`). These you can usually copy from the original English text.

* [Internetová jazyková příručka: Uvozovky](http://prirucka.ujc.cas.cz/?id=162)

### User interface elements

* **Titles** should be brief and precise. Unless necessary, it shouldn’t be a whole sentence. Capitalize the first letter of the first word only.
* **Window titles** should be short and use infinitive form, e.g. "Uložit soubor".
* In **buttons** capitalize the first letter of the first word in the label only. Limit the whole text to one or two words. Use verbs in infinitive form that precisely describe the button’s action. Most of them will be probably covered in our [glossary](glossary.md).
* **Checkboxes** and **radio buttons** capitalize the first letter of the first word and use infinitive form. Make sure that the translations of elements in the same group or section are consistent and sound natural as a list of alternative or complementary choices.
* In **select options list** capitalize the first letter of the first word, unless the selector makes a sentence together with the corresponding label. In that case make sure all options make a correct sentence with the label. Try to keep all the options about the same length and preferably short.
* **Tooltips** serve the purpose of a short help and appear when mouse is hovered over an UI element. Use active voice with the element as unexpressed subject, e.g. "Zobrazí historii", "Uloží soubor", "Otevře nabídku".

<!-- TODO: accesskeys and commandkeys
  - https://mozilla-l10n.github.io/styleguides/mozilla_general/#shortcuts-and-accesskeys
  - http://wiki.l10n.cz/N%C3%A1vody_pro_p%C5%99ekladatele#Akceler.C3.A1tory
-->
