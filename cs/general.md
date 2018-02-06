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

Think twice when translating possessive pronouns, especially "your". You may tempt to translate "Set Firefox as your default browser" as "Nastavte si Firefox jako váš výchozí prohlížeč", however the right translation "Nastavte si Firefox jako svůj výchozí prohlížeč". Despite English does not have it, the possessive pronoun "svůj" refers to the subject and sounds much more natural in Czech. Check the [language manual](http://prirucka.ujc.cas.cz/?id=630) and don’t be afraid to use it. ;)

Very frequent mistake is the overuse of borrowed words and phrases. Despite some of them may be used in your day to day life, even in the related area, always use Czech equivalents if there are any. While "menu" and "level" might work for many people using computers every day, your parents will prefer Czech equivalents "nabídka" and "úroveň". Please use our [glossary](glossary.md) or [Transvision](http://wiki.l10n.cz/Transvision) to lookup Czech equivalents already in use.

## Handling cultural references, idioms, and slang

	How are cultural references, idioms, and slang handled in your locale?

	Are there resources for cultural references, idioms, and slang in your language?

## Units and Unit Conversion

	Does your locale use the metric system or the imperial system?

### Date Format

	How are the date formats for weeks and months expressed? Erase the comment markers around the example template or show the format with your own example.


    | Name | Format | Example |
    | ---- | ------ | ------- |
    | Short | mm/dd/yy | 12/31/99 |
    | Abbreviated | mmm dd | Dec 31 |
    | Long | Month Date, Year | December 31, 1999 |

### Calendar view

	Which date is considered the first day of the week, Sunday or Monday?

	Is Lunar calendar observed?  Other regional calendar observed?

### Time Format

	How is time expressed in your language?

### Numerals

	How are numerals and percentages expressed in your language? Erase the comment markers around the example template or show the format with your own example.

| Separator | Character Name | Symbol | Example |
| --------- | -------------- | ------ | ------- |
| Decimal | Period | `.` | 1.23 |
| Thousands | Comma | `,` | 1,234 |
| Percentage | Percent sign | `%` | 99.95% |

### Currency

	What currency and symbols are used in your country/language for paid apps?

### Units

	Do you use the imperial, metric or nautical system for measuring weight, distance, etc.?

### Address and Postal Code Format

	What is the address format in your language? Erase the comment markers around one of the examples or show the format with your own example.

	Example: Most Asian countries start from big to small:

    [Country]
    [postal code][state/province][city][district]
    [street number and name][building and suite numbers]
    [addressee]

	Countries of European languages start from small to big:

    [addressee]
    [street number and name][building and suite numbers]
    [district][city][state/province][postal code]
    [Country]

### Telephone Number format

	How are telephone numbers expressed in your language? Does the format change for mobile and landline numbers? Adapt the example template or show the format with your own examples.

`(###) ###-####`

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
