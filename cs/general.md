# Style guide Czech (cs) / Překladatelská příručka

<!-- toc -->

This style guide provides instruction for translating to the Czech locale. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/README.md). Please read both before starting with any localization work on Mozilla product and project, help articles or extensions for Firefox. It will help you to avoid some common mistakes and make the translation consistent.

In addition to this style guide, please also read our [glossary](glossary.md). Words like "kliknout" and "storno" may look trivial to you, but in fact those apply to the world of MS Windows only. In multiplatform Mozilla products we use "klepnout" and "zrušit". Some terminology may be specific directly to the product, in Firefox e.g. "záložky" ("bookmarks") or "panely" ("tabs"). Please read and use our [glossary](glossary.md) or [Transvision](http://wiki.l10n.cz/Transvision) whenever you are in doubt.

## Formality and Tone

The tone of Mozilla’s language should be adaptable to anyone. From new users to seasoned Mozillians, the tone should be approachable, welcoming, and inclusive. Mozilla is fun and should delight the user in expected and unexpected ways.

Especially in desktop products, prefer formal language, but stay friendly, authentic and natural. Avoid any long and complicated sentences and grammatical constructions. Clarity and meaning of every sentence has the highest priority.

In general, use the second person plural (vy - vykání) to address the user in Firefox products. Firefox is a user agent, "Firefox je tu pro vás".

Avoid using the first person (já, mé, moje) as it can create confusion about who is being addressed. Avoid personification of the software. It’s not a live person. Instead of "Stahuji...", use "Stahuje se..." or "Stahování...".

In some projects (like Desktop, Android, iOS, Focus), the language will be direct as it belongs to a software string. This language should be maintained as direct, yet respectful. Avoid using imperative! In short actions and button labels use infinitive constructions ("Zobrazit", "Použít", instead of "Zobraz", "Použij"). If there is a need to ask the user to perform an action, be polite ("Vyberte (prosím)...").

## Natural expression

Any translation has to obey rules of the Czech grammar. Sentences have to be both grammatically correct an also have a clear meaning. Avoid any archaisms or long and complicated sentences and constructions. Especially beware of translating the English original word by word. Such translations are inaccurate and sound "like a robot". Instead use your own word to express the desired meaning. Be careful about commas and semicolons.

Think twice when translating possessive pronouns, especially "your". You may tempt to translate "Set Firefox as your default browser" as "Nastavte si Firefox jako váš výchozí prohlížeč", however the right translation "Nastavte si Firefox jako svůj výchozí prohlížeč". Despite English does not have it, the possessive pronoun "svůj" refers to the subject and sounds much more natural in Czech. Check [this language manual page](http://prirucka.ujc.cas.cz/?id=630) and don’t be afraid to use it. ;)

Very frequent mistake is the overuse of borrowed words and phrases. Despite some of them may be used in your day to day life, even in the related area, always use Czech equivalents if there are any. While "menu" and "level" might work for many people using computers every day, your parents will prefer Czech equivalents "nabídka" and "úroveň". Please use our [glossary](glossary.md) or [Transvision](http://wiki.l10n.cz/Transvision) to lookup Czech equivalents already in use.

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
| Short (rare since 2000) | dd. mm. yy | 1. 12. '99 |
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
| Thousands | none or Space (on longer numbers) | ` ` | 1234 or 123 456 |
| Percentage | Percent sign (with a leading space) | ` %` | 99 % |
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

### Spelling And Grammar Checks

	Does your language have standard spelling or grammar checks?

### Punctuation

	Do you use different punctuation rules in your Mozilla localization than what your language standard defines?

### Whitespace

	Does your language require the use of white space around words, sentences, paragraphs, etc.?

## Copy rules

	Please leave the following line in your style guide unless it does not apply to your locale. You may translate it if your style guide is in your language

Read about copy rules styles in the [General Mozilla L10n Style Guide](../mozilla_general/README.md#copy-rules).

	Is there an international/national standard for capitalization in your language?

	Is the capitalization standard appropriate for all of your language’s Mozilla l10n projects or only some of them? Which ones?

	Is the capitalization standard appropriate for all user interface elements in your language or only some of them? Which ones?

	Are there other typographical conventions regarding quotes, quotation marks, apostrophes, use of bold or italic text, all caps text, etc.
