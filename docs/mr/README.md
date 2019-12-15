# Style Guide Marathi (mr)

Intro Style guides define the standard against which we determine a translation's quality. They contain rules that are both defined by Mozilla and by Mozilla's localization communities on how to best translate text in Mozilla products, websites, and other projects. Style guides are used to both translate and evaluate a translation's quality. By following these rules, a translator has a better chance of producing a high quality translation that represents Mozilla values and culture. Some examples of international style guides created by other organizations are:

[https://help.apple.com/applestyleguide/](https://help.apple.com/applestyleguide/)

[https://www.microsoft.com/en-us/language/StyleGuides?rtc=1](https://www.microsoft.com/en-us/language/StyleGuides?rtc=1)

[https://www.facebook.com/translations/style_guides](https://www.facebook.com/translations/style_guides)

This style guide is broken up into two main parts: the first contains rules that are language-specific and must be defined by each Mozilla l10n community (covering language-specific style, terminology, and units); the second contains general rules that Mozilla has defined for translators of all languages that can help you translate well (covering principles of accuracy and fluency). Please adapt part one of this style guide to your l10n community's rules for style, terminology, and units. Wherever possible, refer to existing national standards for units, spelling, and grammar in your community's adaptation of the first part of this style guide.

## Language-specific Mozilla style

### Style

1. Formality and Tone should be respectable. For example yours should be translated as ‘आपला’not as ‘तुमचा’

2. Natural expression should be considered before translating in order to have an easy understanding for the user.

3. Handling cultural references, idioms, and slang

4. For style consistency we use [Transvision](https://transvision.mozfr.org/)

### Terminology

1.Difficult concepts/ terminologies should be made easy to comprehend otherwise should be transliterated.

2.New term bases should also be given a thought as it gives a new perspective to a difficult word.

### Units and Grammar

1.The Units and Unit Conversion should be as it is. It should not be converted from Romans as the numbers are taken by default. And there is currently no mechanism to consider the numbers is Marathi

### Spelling And Grammar Checks

Tense, Word Forms,Pluralization, Abbreviations, Acronyms, Punctuation, Emphasis, Hyphens and compounds, Prepositions and articles, Diacritics and Special characters, Quotes, Whitespace.

### User Interface Elements

#### Titles

Should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.

#### Buttons

Capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button's action. For example, "Cancel", "Clear History", "Add Email", "Select All", etc. Value Selector Lists: Capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.

#### Articles

Avoid them where possible. Articles (such as the word "the" in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.

#### Ellipsis

Ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue. Focus on making the UI short and precise. The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.

### General Mozilla l10n style

1. Accuracy

2. Meaning-based translation

3. Should not be translated

4. Shortcuts and accesskeys

5. Variables

6. Brands, copyright, and trademark

7. Legal content

8. Fluency

### Precautions

* use machinery (refer below) to keep the string consistent and do not loose the meaning of the source string
* try and keep the string length as close to the number provided below the input textbox
* do not use double spaces.
* These strings are later programmatically formatted so current source strings contain variables
e.g. ```printf("my name is %s", name);``` here %s is format specifier. look for such parts of strings and DO NOT TRANSLATE THEM.
* do not translate numbers, version names, build numbers
* do not translate trade names of organizations or products e.g. Mozilla, Google, Facebook, Firefox, Chrome, Android ..etc

### Using [Machinery](https://pontoon.mozilla.org/machinery/)

* It is very important to maintain consistency while localizing any product. e.g. website can be called साईट or संकेतस्थळ. both are right.
* But we try and stick to one translation as far as possible.
* Always keep the machinery opened as a reference point in a new tab while localizing.
* Enter the word you want to translate and select the language Marathi(mr) and check for most used translation and then use this in your string.
* This is based on past data which can be cloudy. So, when in doubt, use your own reasoning to choose the correct translation.
* IMP : There are suggestions pulled from Google and Microsoft database. Please review such suggestions for aobve rules before using them directly.