# Style guide Language (ab-CD)

<!-- toc -->

	Insert your locale name into the line below and leave it in your style guide unless it does not apply to your locale. You may translate it if your style guide is in your language

This style guide provides instruction for translating to the [Your locale name] locale. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/README.md).

	Include other relevant introductory information here, such as a community webpage or contact information.

## Formality and Tone

	Who is the target user for this project and what is their background?

	How would a target user for this project expect to interact with this project?

	Is formal language appropriate for all of your language's Mozilla l10n projects, or only some of them? Which ones?

	Is informal language appropriate for all of your language's Mozilla l10n projects, or only some of them? Which ones?

## Natural expression

	What kind of expression sounds natural in your locale?

	Does your locale allow for many borrowed words and phrases or few?

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

Read about copy rules styles in the [General Mozilla L10n Style Guide](mozilla_general/README.md#copy-rules).

	Is there an international/national standard for capitalization in your language?

	Is the capitalization standard appropriate for all of your language's Mozilla l10n projects or only some of them? Which ones?

	Is the capitalization standard appropriate for all user interface elements in your language or only some of them? Which ones?

	Are there other typographical conventions regarding quotes, quotation marks, apostrophes, use of bold or italic text, all caps text, etc.
