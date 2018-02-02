# Example Style Guide English, USA (en-US)

<!-- toc -->

This style guide provides instruction for translating to the American English locale. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/README.md)

## Formality and tone

In English, the tone of Mozilla’s language should be adaptable to anyone. From new users to seasoned Mozillians, the tone should be approachable, welcoming, and inclusive.

Mozilla is fun and should delight the user in expected and unexpected ways. The level of formality should express a sense of familiarity and friendliness while maintaining a voice of authenticity.

In general, use the second person (`you`) to address the user in Firefox products. Firefox is a user agent, and this point of view reinforces the message that "Firefox works for you."

Avoid using the first person (`my`, `I`) as it can create confusion about who is being addressed.

In some projects (like Desktop, Android, IOS, Focus), the language will be direct as it belongs to a software string. This language should be maintained as direct, yet respectful, and remain casual as with all other projects. Casual language should never be used at the expense of sounding disrespectful, regardless of the project.

## Natural expression

Translations should sound as natural as possible. Borrowed words should never be used (with the exception of branded names).

### Cultural references, idioms, and slang

When dealing with cultural references, idioms, and slang in English, references to American pop culture (music, movies), sports (basketball, baseball, football), sayings, and some proverbs will be generally recognized. If a cultural reference is difficult to express in English, use the meaning to find a good equivalent. Refer to sources and databases of common expressions to help find an adequate equivalent.

* [List of Common Proverbs](https://www.engvid.com/english-resource/50-common-proverbs-sayings/)
* [List of Common Idioms](http://www.smart-words.org/quotes-sayings/idioms-meaning.html)

## Local units

### Date format

| | Format | Example |
| - | - | - |
| Short | mm/dd/yy | 12/31/99 |
| Abbreviated | mmm dd | Dec 31 |
| Long | Month Date, Year | December 31, 1999 |

It is acceptable to use any of the date formats; however, always coordinate the translated date format with the source text unless the specifications for a project indicate otherwise.

### Calendar view

In the United States, the 12-month Gregorian calendar is used with the week starting on Monday.

### Time format

Generally, a 12-hour clock is used in the United States. 24-hour clocks are used in the military and it is possible that 24-hour time could be used to make reference or allusion to military.

### Numerals

| Symbol Purpose | Character Name | Symbol | Example |
| - | - | - | - |
| Decimal | Period | `.` | 1.23 |
| Thousands | Comma | `,` | 1,234 |
| Percentage | Percent sign | `%` | 99.95% |

### Currency

The currency of the United States is the dollar (USD). The monetary symbols are `$` and rarely `¢`.

### Units of measurement

The imperial system is used for measurement in the United States.

### Address and postal code format

    [addressee]
    [street number and name][building and suite numbers]
    [district][city][state/province][postal code]
    [Country]

    Mozilla
    331 East Evelyn Ave.
    Mountain View, CA 94041
    USA

### Telephone number format

Area codes are surrounded by parentheses and separated by a space. The Phone number is separated by a dash.

`(###) ###-####`

## Copy rules

Read about copy rules styles in the [General Mozilla L10n Style Guide](mozilla_general/README.md#copy-rules).

### Firefox for desktop

Use title case for labels for items in the menu, navigation and section headings, page titles, and buttons.

Use sentence case for headlines, which are the more conversational titles and subtitles that appear in instructional text screens, tours and form pages, and text links without terminal punctuation unless the phrase is a question or exclamation or if the link is embedded in running text.

Note, include the terminal punctuation in hyperlink if the entire phrase is linked, and do not include the terminal punctuation in the hyperlink if the link is within running text.

### Firefox for Android

Use sentence case in almost all instances – for screen titles, navigation, labels – except for buttons.

Use all caps for all buttons that contain text.

### Firefox for iOS and Focus

Use title case for screen titles, navigation and section headings, labels, and buttons.

Use sentence case for headlines, which are the more conversational titles and subtitles that appear in instructional text screens, tours and form pages.
