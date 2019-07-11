# Style guide Language (ab-CD)

 <!-- toc -->

> Insert your locale name into the line below and leave it in your style guide unless it does not apply to your locale. You may translate it if your style guide is in your language

This style guide provides instruction for translating to the [Your locale name] locale. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/).

> Include other relevant introductory information here, such as a community webpage or contact information.

## Formality and tone

> Who is the target user for this project and what is their background?
>
> Describe briefly the users from your locale. If the type of user from one project to another will vary, indicate so here.

> How would a target user for this project expect to interact with this project?
>
> Describe the type of interaction users from your locale expect. Interactions could range from authoritative and formal to friendly and casual. Indicate what kind of tone is preferred in your locale.
>
> Describe the features that create the right tone. For example, Spanish has multiple forms of the second person pronoun `you`. Generally, `tu` is considered informal and personal and `usted` is considered formal and impersonal. Mozilla’s Photon guidelines prefer an informal and personal interaction; however, if the culture of your locale prefers a formal interaction, that should be declared in your community style guide.

> Is formal language or informal language appropriate for all of your language’s Mozilla l10n projects, or only some of them? Which ones?
>
> If the tone varies from project to project, indicate what tone is best for which projects.

## Natural expression

> What kind of expression sounds natural in your locale?
>
> Describe the features of a natural sounding localization.

> Does your locale allow for many borrowed words and phrases or few?
>
> List any important specific cases or include a link to any relevant resources. For example, the Spanish phrase, `En ocho días` could be translated as `in eight days`. However, a natural expression in English would be `in seven days` or even `in a week`. All three are correct translations, but the last two are more natural in English.

### Cultural references, idioms, and slang

> How are cultural references, idioms, and slang handled in your locale?
>
> Define a policy for handling these cultural references, idioms, and slang that you can make standard across all projects.
>
> An example of a cultural reference in English would be the phrase, `kick-off meeting`. This is a reference that uses an American football term. It means a meeting to begin a project. To translate it, you can follow one of two approaches:
>
> 1. Find an equivalent reference phrase in your language.
> 2. Remove the cultural reference and translate the core meaning (e.g., `a commencement meeting`)

> Are there resources for cultural references, idioms, and slang in your language?
>
> List resources you can use to find cultural equivalents (e.g., a slang dictionary in your language).

## Units and unit conversion

> Does your locale use the metric system or the imperial system?
>
> State which measurement system is used in your locale for weight, distance, etc. State any other measurement system information or units of measurement that are relevant to your locale.

### Date format

> How are the date formats for weeks and months expressed?
>
> Declare whether dates are fully spelled out, abbreviated, or represented in another way and the order of year, month and day. This can be represented with a table. Erase the blockquote markers around the example template or show the format with your own example.
>
> | Name | Format | Example |
> | ---- | ------ | ------- |
> | Short | mm/dd/yy | 12/31/99 |
> | Abbreviated | mmm dd | Dec 31 |
> | Long | Month Date, Year | December 31, 1999 |

### Calendar view

> Which date is considered the first day of the week, Sunday or Monday?
>
> Is Lunar calendar observed?  Other regional calendar observed?

### Time format

> How is time expressed in your language?
>
> State how time is expressed including 0-24 hr expression, hour, minute and second if relevant.

### Numerals

> How are numerals and percentages expressed in your language?
>
> Declare what the separators are for your number system and any other relevant information. This can be represented with a table. Erase the blockquote markers around the example template or show the format with your own example.
>
> | Separator | Character Name | Symbol | Example |
> | --------- | -------------- | ------ | ------- |
> | Decimal | Period | `.` | 1.23 |
> | Thousands | Comma | `,` | 1,234 |
> | Percentage | Percent sign | `%` | 99.95% |

### Currency

> What currency and symbols are used in your country/language?
>
> State what currency symbols are used in your locale. If your language covers different countries or currencies or common currency symbols vary depending on the project-by-project basis, declare the different types and uses.

### Units of measurement

> Do you use the imperial, metric or nautical system for measuring weight, distance, etc.?

### Address and postal code format

> What is the address format in your language?
>
> Show the postal address format for your locale. Erase the blockquote markers around one of the examples or show the format with your own example.
>
> Example: Most Asian countries start from big to small:
>
>     [Country]
>     [postal code][state/province][city][district]
>     [street number and name][building and suite numbers]
>     [addressee]
>
> Countries of European languages start from small to big:
>
>     [addressee]
>     [street number and name][building and suite numbers]
>     [district][city][state/province][postal code]
>     [Country]

### Telephone number format

> How are telephone numbers expressed in your language?
>
> Show the telephone number format. Does the format change for mobile and landline numbers? Adapt the example template or show the format with your own examples.
>
> `(###) ###-####`

## Grammar

### Spelling and grammar checks

> Does your language have standard spelling or grammar checks?
>
> List and explain any spelling or grammar references for your language and how regularly they should be used.

### Punctuation

> Do you use different punctuation rules in your Mozilla localization than what your language standard defines?
>
> Describe any variation in punctuation for Mozilla projects from language standards. If punctuation varies from project to project, list the projects that use variant punctuation.

### Whitespace

> Does your language require the use of white space around words, sentences, paragraphs, etc.?
>
> Describe the relevant whitespace rules in your language as they pertain to Mozilla localization. If whitespace varies from project to project or depending on the interface element, describe how.

## Copy rules

> Please leave the following line in your style guide unless it does not apply to your locale. You may translate it if your style guide is in your language

Read about copy rules styles in the [General Mozilla L10n Style Guide](../mozilla_general/).

> Is there an international/national standard for capitalization in your language?
>
> Indicate whether your language uses title case, sentence case, all caps, or some other capitalization structure. If the style changes for different textual elements such as titles of movies, books, brand names, or userface elements (`Save`, `File`, etc.).

> Is the capitalization standard appropriate for all of your language's Mozilla l10n projects or only some of them? Which ones?
>
> If copy rules in your language change from project to project, list the copy rules for each project.

> Is the capitalization standard appropriate for all user interface elements in your language or only some of them? Which ones?
>
> Are there other typographical conventions regarding quotes, quotation marks, apostrophes, use of bold or italic text, all caps text, etc.
