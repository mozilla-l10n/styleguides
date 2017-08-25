# Mozilla L10n Style Guide Template

Your localization community's style is largely up to you to define. It is a part of your community's instructions and standards for translating strings within each project type. Style encompasses various elements, such as formality, tone, natural expression, handling cultural references, idioms, or slang, and maintaining consistency with Mozilla and 3rd party branding and style guides. Your localization community should define these style elements for localizing Mozilla projects into your language.



## Formality and Tone

When determining the formality or tone of a Mozilla l10n project in your language, ask yourself these questions:

* Who is the target user for this project and what is their background?
* How would a target user for this project expect to interact with this project? For example, would they expect a friendly, casual interaction?
* Is formal language appropriate for all of your language's Mozilla l10n projects, or only some of them? Which ones?
* Is informal language appropriate for all of your language's Mozilla l10n projects, or only some of them? Which ones?

In fact, localization should not use a level of formality higher or lower than required by this community-defined style guideline. An example of this would be using "click here" (not formal) vs. "please click here" (more formal). Also, the tone employed throughout a l10n project(s) should stay consistent within itself.

## Natural expression

Using natural expressions make your localization sound natural to a native speaker. If your translation does not follow the community defined language guidelines for translating content that contains local or natural expressions, this results in a mediocre and/or awkward translation. Teams should be careful to address those and keep them in mind while translating, which is why it is an important section to address in a Style Guide. An example of a natural expression in a translation would be translating the Spanish phrase, "En ocho días." In English, one might translate this as, "in eight days" or "in a week." The latter is the more natural translation, although both could be considered correct.

In this section, form guidelines for how to perform a natural sounding localization. This might take some time and experience to find the right examples to include or create the right guidelines for your language.

## Handling cultural references, idioms, and slang

Cultural references, idioms, and slang require a full understanding of these references between the cultures of your source and target languages. An example of a cultural reference in English would be the phrase, `kick-off meeting`. This is a reference that uses an American football term. It means a meeting to begin a project. To translate it, you can follow one of two approaches:

1. Find an equivalent reference phrase in your language.
2. Remove the cultural reference and translate the core meaning (e.g., `a commencement meeting`)

Define a policy for handling these cultural references, idioms, and slang that you can make standard across all projects. Consider resources you can refer back to in order to find cultural equivalents and list them in this section of your style guide (e.g., a slang dictionary in your language).

Translating terms representing difficult concepts is a tricky task. Here are some ideas to help you translate terms that do not have equivalents in your language:

* Understand the meaning of the term in English. Definitions of a few key terms [http://techterms.com/category/internet](http://techterms.com/category/internet)
* Know your product and understand the function of the feature.
* Consider similar ideas for those functions in your culture.
* Associate a culturally specific image with the meaning and function of the term.

## Units and Unit Conversion

Many elements of unit or grammar do not exist or apply to all languages. If you find one of these elements that does not apply to your language, please remove it from your style guide. For those definitions of units and grammar that apply document the reference used or how it will be applied to the translation.

The translation should strive to achieve proper unit conversions for currency, measurements, etc. for the target audience.

### Date Format

How are the date formats for weeks and months expressed in the following forms:

* 1). Fully spelled out 2). 2 or 3 letters  3). Single letter
* What is the order of Year, Month and Day?

Reference material can be find here: [https://en.wikipedia.org/wiki/Date_format_by_country](https://en.wikipedia.org/wiki/Date_format_by_country)

### Calendar view:

* Which date is considered the first day of the week, Sunday or Monday?
* Is Lunar calendar observed?  Other regional calendar observed?

### Time Format

How is time expressed in your language? Including 0-24 hr expression, hour, minute and second.

### Numerals

How are numerals and percentages expressed in your language?

* Example: `1.23` (decimal separator) or 1,000 (thousand separator) using comma or period.

### Currency

What are other widely used currency and symbols used in your country/language for paid apps.

### Units

Do you use the imperial, metric or nautical system for measuring weight, distance, etc.? Source strings will use the imperial system (e.g., miles, pounds, feet, gallons, etc.). Target translations should convert imperial metrics to their measurement system.

### Names

What are the order of family name and given name in your language?  Here is the guideline on the naming convention from w3c.org:

### Address and Postal Code Format

What is the format in your language?

* Example: most Asian countries start from big to small: `[Country] [postal code][state/province][city][district][street number and name][building and suite numbers][addressee]`
* Countries of European languages start from small to big: `[addressee][street number and name][building and suite numbers][district][city][state/province][postal code][Country]`

### Telephone Number format

Space separators between digits can be different for area codes such as State (Province) and City,

## Grammar

### Spelling And Grammar Checks

Many languages have national or international standards that define spelling and grammar rules. When defining these rules for your community, make reference to those standards wherever possible. Do you have automated tests for spell checking and grammar? List those tools and dictionaries here and how regularly they should be used.

### Tense

Do you have standards for verb forms that indicate or express the time, such as past, present, or future, of the action or state? What is your policy on tense consistency for certain use cases? For example, for phrases that ask a user to make an action (like `Download Firefox`), do you use a future tense, a command tense, or a neutral tense?  (See: [https://en.wikipedia.org/wiki/Grammatical_tense](https://en.wikipedia.org/wiki/Grammatical_tense) )

## Word Forms

### Pluralization

What is the appropriate form of expressing pluralization in your language?  List all forms of plural forms and examples if there is more than one.  Additional discussions can be found Here. [https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals) and here:  [http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)

### Abbreviations

How are abbreviations expressed in your language?

* Example, in English, abbreviations are made by removing most vowels and only using the first 3-5 consonants followed by a period (e.g., `abbreviation` = `abbr`.).  (see: [https://en.wikipedia.org/wiki/Abbreviation](https://en.wikipedia.org/wiki/Abbreviation))

If your language does not have a standard way of expressing abbreviations, do you simply leave them in English?

### Acronyms

Are there standard translations of widely accepted acronyms such as CD, DVD, MB in your language? If not, do they remain in English? (see: [https://en.wikipedia.org/wiki/Acronym](https://en.wikipedia.org/wiki/Acronym))

### Punctuation

Do you use different punctuation rules in your Firefox localization than what your language standard defines?

* Example: do you use a period at the end of every user interface element translation or only some? What is the international/national standard for punctuation in your language?

### Emphasis

Is there an international/national standard for capitalization in your language?

* If so, do those standard rules apply in all product translations?
* If this doesn't apply, how do you indicate importance or name of a movie, book title, product UIs (`Save`, `File`...) in your language?
* How does your language handle the use of bold, italic, or underline types to express emphasis?  ( See: [https://en.wikipedia.org/wiki/Italic_type](https://en.wikipedia.org/wiki/Italic_type) )

### Hyphens and compounds

What is the appropriate way of using hyphens and compounds in your language?  ( [https://en.wikipedia.org/wiki/Compound_%28linguistics%29](https://en.wikipedia.org/wiki/Compound_%28linguistics%29))

### Prepositions and articles

What is the appropriate form of expressing prepositions and articles in your language?

### Diacritics and Special characters

Does your language use any special or accented characters and will they be applied and preserved in sort orders, and other aspects of the translation?  (see: [https://en.wikipedia.org/wiki/Diacritic](https://en.wikipedia.org/wiki/Diacritic))

### Quotes

Does your language have a standard use for quotation marks, parenthesis, or brackets?

### Whitespace

Does your language require the use of white space around words, sentences, paragraphs, etc.? If so, in what ways?  (see: [https://en.wikipedia.org/wiki/Sentence_spacing_in_language_and_style_guides](https://en.wikipedia.org/wiki/Sentence_spacing_in_language_and_style_guides))
