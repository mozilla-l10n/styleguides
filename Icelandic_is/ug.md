# Units and Unit Conversion

## Date Format

How are the date formats for weeks and months expressed in the following forms:

1. Fully spelled out
2. 2 or 3 letters
3. Single letter
4. What is the order of Year, Month and Day?

Reference material can be find here: [https://en.wikipedia.org/wiki/Date_format_by_country](https://en.wikipedia.org/wiki/Date_format_by_country)

### Calendar view

* Which date is considered the first day of the week, Sunday or Monday?
* Is Lunar calendar observed? Other regional calendar observed?

### Time Format

How is time expressed in your language? Including 0-24 hr expression, hour, minute and second.

## Numerals

How are numerals and percentages expressed in your language?

* Example: 1.23 (decimal separator) or 1,000 (thousand separator) using comma or period.

### Currency

What are other widely used currency and symbols used in your country/language for paid apps.

### Units

Do you use the imperial, metric or nautical system for measuring weight, distance, etc.? Source strings will use the imperial system (e.g., miles, pounds, feet, gallons, etc.). Target translations should convert imperial metrics to their measurement system.

### Names

What are the order of family name and given name in your language? Here is the guideline on the naming convention from w3c.org:

## Address and Postal Code Format

What is the format in your language?

* Example: most Asian countries start from big to small: [Country] [postal code][state/province][city][district][street number and name][building and suite numbers][addressee]
* Countries of European languages start from small to big: [addressee][street number and name][building and suite numbers][district][city][state/province][postal code][Country]

### Telephone Number format

Space separators between digits can be different for area codes such as State (Province) and City,

## Spelling And Grammar Checks

Many languages have national or international standards that define spelling and grammar rules. When defining these rules for your community, make reference to those standards wherever possible. Do you have automated tests for spell checking and grammar? List those tools and dictionaries here and how regularly they should be used.

### Tense

Do you have standards for verb forms that indicate or express the time, such as past, present, or future, of the action or state? What is your policy on tense consistency for certain use cases? For example, for phrases that ask a user to make an action (like "Download Firefox"), do you use a future tense, a command tense, or a neutral tense? (See: <a href="https://en.wikipedia.org/wiki/Grammatical_tense">https://en.wikipedia.org/wiki/Grammatical_tense</a> )

## Word Forms

### Pluralization

What is the appropriate form of expressing pluralization in your language? List all forms of plural forms and examples if there is more than one. Additional discussions can be found Here. <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals">https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals</a> and here: <a href="http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a>

### Abbreviations

How are abbreviations expressed in your language?

* Example, in English, abbreviations are made by removing most vowels and only using the first 3-5 consonants followed by a period (e.g., abbreviation = abbr.). (see: <a href="https://en.wikipedia.org/wiki/Abbreviation%29">https://en.wikipedia.org/wiki/Abbreviation)</a>

If your language does not have a standard way of expressing abbreviations, do you simply leave them in English?

### Acronyms

Are there standard translations of widely accepted acronyms such as CD, DVD, MB in your language? If not, do they remain in English? (see: <a href="https://en.wikipedia.org/wiki/Acronym">https://en.wikipedia.org/wiki/Acronym</a> )

## Punctuation

Do you use different punctuation rules in your Firefox localization than what your language standard defines?

* Example: do you use a period at the end of every user interface element translation or only some? What is the international/national standard for punctuation in your language?

### Emphasis

Is there an international/national standard for capitalization in your language?

* If so, do those standard rules apply in all product translations?
* If this doesn't apply, how do you indicate importance or name of a movie, book title, product UIs (Save, File...) in your language?
* How does your language handle the use of bold, italic, or underline types to express emphasis? ( See: <a href="https://en.wikipedia.org/wiki/Italic_type">https://en.wikipedia.org/wiki/Italic_type</a> )

### Hyphens and compounds

What is the appropriate way of using hyphens and compounds in your language? ( <a href="https://en.wikipedia.org/wiki/Compound_%28linguistics%29">https://en.wikipedia.org/wiki/Compound_%28linguistics%29</a> )

## Prepositions and articles

What is the appropriate form of expressing prepositions and articles in your language?

## Diacritics and Special characters

Does your language use any special or accented characters and will they be applied and preserved in sort orders, and other aspects of the translation? (see: <a href="https://en.wikipedia.org/wiki/Diacritic">https://en.wikipedia.org/wiki/Diacritic</a> )

## Quotes

Does your language have a standard use for quotation marks, parenthesis, or brackets?

## Whitespace

Does your language require the use of white space around words, sentences, paragraphs, etc.? If so, in what ways? (see: <a href="https://en.wikipedia.org/wiki/Sentence_spacing_in_language_and_style_guides">https://en.wikipedia.org/wiki/Sentence_spacing_in_language_and_style_guides</a> )

## User Interface Elements

* Titles : Should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.
* Buttons: Capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button's action. For example, "Cancel", "Clear History", "Add Email", "Select All", etc.
* Value Selector Lists: Capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.
* Articles: Avoid them where possible. Articles (such as the word "the" in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.
* Ellipsis: Ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue. Focus on making the UI short and precise. The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.
