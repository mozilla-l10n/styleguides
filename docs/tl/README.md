# Style Guide Tagalog (tl)

## Intro

Style guides define the standard against which we determine a translation's quality. They contain rules that are both defined by Mozilla and by Mozilla's localization communities on how to best translate text in Mozilla products, websites, and other projects. Style guides are used to both translate and evaluate a translation's quality. By following these rules, a translator has a better chance of producing a high quality translation that represents Mozilla values and culture.

This style guide is broken up into two main parts:

* the first contains rules that are language-specific and must be defined by each Mozilla l10n community (covering language-specific style, terminology, and units);
* the second contains general rules that Mozilla has defined for translators of all languages that can help you translate well (covering principles of accuracy and fluency).

## Language-specific Mozilla style

### Rule of Thumb

* DO NOT translate technical terms to Tagalog/Filipino.
* DO NOT translate proper nouns such as company brands and trademarks to Tagalog/Filipino.
* DO NOT transliterate. In Tagalog/Filipino, words are spelled in accordance to how a Filipino enunciates them; examples include drayber (“driver”), diskusyon (“discussion”) and iskul (“school”). Alternatively, words are spelled as they were in the source language. In a strictly formal Tagalog/Filipino translation, purists resort to transliteration only when source words—particularly technical, scientific, medical and legal word forms—definitely have no direct, exact and accurate equivalents in the target language. For uniformity sake, we should avoid transliterating.
* LEAVE AS IS words, phrases or terms that are hard to be translated in Tagalog/Filipino, particularly the technical ones (DO NOT transliterate).

### Style

The Mozilla Philippines Community localization style encompasses various elements, such as formality, tone, natural expression, handling cultural references, idioms, or slang, and maintaining consistency with Mozilla and 3rd party branding and style guides. The Mozilla Philippines Community define these style elements for localizing Mozilla projects.

### Formality and Tone

* Target users of this project are people who speak and read Tagalog/Filipino.
* Formal language version of Tagalog/Filipino is appropriate for all Mozilla L10n projects.

### Content Principles

* Keep it simple
  * Stick to common words that people use in everyday speech.
  * Be concise. Write short sentences that are easy to understand.

* Get to the point
  * Keep terms and messaging consistent across all channels, on and off Mozilla.
  * Don't bury information or gloss over it.
  * Don't use language that's vague or possibly misleading.

* Talk like a person
  * Translate like you're talking to someone one-on-one. Minimize the use of online translation tools. Translate naturally.
  * Stay neutral. Avoid language that's opinionated, cutesy, irreverent or otherwise over the top.
  * Don't sound like a robot. Even the smallest bits of interference content should be approachable.

* Be brief
  * Use as few words as possible while still being clear.
  * Make sure every word has a job to do.
  * Replace jargon with everyday terms.

### Natural expression

Using natural expressions make our localization sound natural to a native speaker.

* Use the "I-[verb]" format during translation:
  * [EN] Bookmark this page. | [TL] I-bookmark ang pahinang ito.
  * [EN] Apply changes. | [TL] I-apply ang mga pagbabago.

### Handling cultural references, idioms, and slang

Cultural references, idioms, and slang require a full understanding of these references between the cultures of your source and target languages. An example of a cultural reference in English would be the phrase, "kick-off meeting." This is a reference that uses an American football term. It means a meeting to begin a project. To translate it, you can follow one of two approaches:

  * Section contents to be populated.

### Style consistency

Finally, adherence to Mozilla and third-party branding and style guides should be respected throughout a localization project. More information on Mozilla-specific branding rules can be found here:[https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/). For example, some brand names should never be translated, such as "Firefox". For other brands that do not have any branding guidelines, your localization community must define whether to translate them. Be extra careful to check on branding rules before deciding to translate a name or not (whether for Mozilla or for a third-party) and to list them here in your community's l10n style guide.

### Terminology

The Mozilla Philippines L10n Term Bases and Glossary is under development as Project ATOMPH (App for the Translation Of MozillaPH).

### Tips on translating difficult concepts

Translating terms representing difficult concepts is a tricky task. Here are some ideas to help you translate terms that do not have equivalents in your language:

* Understand the meaning of the term in English. Definitions of a few key terms [2]
* Know your product and understand the function of the feature.
* Consider similar ideas for those functions in your culture.
* Associate a culturally specific image with the meaning and function of the term.

### Units and Grammar

For the sake of uniformity, the following formats are to be used in MozillaPH L10n:

#### Date

* Calendar / Era: Roman / Christian (Anno Domini, AD)
* Name of Days:
  * Monday
  * Tuesday
  * Wednesday
  * Thursday
  * Friday
  * Saturday
  * Sunday
* Short Name of Days:
  * Mon
  * Tue
  * Wed
  * Thu
  * Fri
  * Sat
  * Sun
* Name of Months:
  * January
  * February
  * March
  * April
  * May
  * June
  * July
  * August
  * September
  * October
  * November
  * December
* Short Name of Months:
  * Jan
  * Feb
  * Mar
  * Apr
  * May
  * Jun
  * Jul
  * Aug
  * Sep
  * Oct
  * Nov
  * Dec
* Year Format: English
* Default Short Date Format: MM-dd-yyyy
* Currency
  * Symbol: PHP
  * Format: PHP x,xxx.xx
* Time
  * Time Format: English
  * 24-hour Format: NO (12-hour format)
  * Time Separator: colon (:)
  * String for AM Designator: AM
  * String for PM Designator: PM
  * Century: use "ika-" followed by the number (e.g. ika-21)
* Number
  * When written as English Roman Numeral: as is.
  * When used as part of a sentence (spelled-out) or as an ordinal number: Translate to Tagalog
  * Examples:
      * [EN] Close one tab. | [TL] Isara ang isang tab.
      * [EN] Close the second tab. | [TL] Isara ang pangalawang tab.
  * When written as part of a telephone number: as is.
Addresses
  * Country / Region:
  * [EN] Republic of the Philippines | [TL] Republika ng Pilipinas
  * [EN] The Philippines | [TL] Pilipinas
  * Address Format:
    * House or Building Number
    * Building Name
    * Street Name
    * Village or Subdivision Name
    * Barangay Name
    * City or Town Name
    * Province Name
    * Postal Code

#### Measurement Units

Follow the rules on how to translate numbers

#### Percentages

The Tagalog language follows the English rules for percentages. In Mozilla localization, the percentage symbol (%) is frequently used a placeholder. DO NOT modify or remove placeholders. Follow general software localization guidelines and rules.

#### Spelling And Grammar Checks

Spelling checks will be part of Project ATOMPH.
Grammar checking tools and guides:
    https://languagetool.org/
    http://www.aclweb.org/anthology/W11-3402

## Word Forms

### Pluralization

In Tagalog/Filipino, we use the term "mga" before a noun to denote the common pluralization form:

* Example: [EN] Letters | [TL] Mga letra

### Abbreviations

Here are some of the commonly used abbreviations in Tagalog/Filipino:

* [EN] et cetera = etc. | [TL] at iba pa = atbp.
* [EN] example = ex. | [TL] halimbawa = hal.

### Acronyms

English acronyms can be used in Tagalog/Filipino for simplicity and practicality.

### Punctuation

Tagalog/Filipino follows the universal standards in the use of punctuations.

### Emphasis

* Each sentence in Tagalog/Filipino begins with a capital letter.
* Proper nouns are written with their first letters capitalized.

### Hyphens and compounds

Tagalog/Filipino uses the English standards on the use of hyphens and compounds.

### Prepositions and articles

What is the appropriate form of expressing prepositions and articles in your language?

### Diacritics and Special characters

An official spelling system that uses diacritical marks for indicating long vowels and final glottal stops was introduced in 1939. Although it is used in some dictionaries and Tagalog/Filipino learning materials, it has not been generally adopted by native speakers.

### Quotes

Tagalog/Filipino follows the Universal Standard for quotes and brackets.

### Whitespace

Tagalog/Filipino requires a space in between words and after each punctuation mark.

### User Interface Elements

* Titles : Should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.

* Buttons: Capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button's action. For example, "Cancel", "Clear History", "Add Email", "Select All", etc.

* Value Selector Lists: Capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.

* Articles: Avoid them where possible. Articles (such as the word "the" in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.

* Ellipsis: Ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue. Focus on making the UI short and precise. The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.

### General Mozilla l10n style

Accuracy Meaning-based translation When it comes to translation, meaning is everything. A translator needs to understand the source text's meaning exactly. You then find its most closely linked equivalent in your own language, without adding or subtracting meaning in your translation. Finding meaning-based equivalents between languages can be difficult. To help concentrate your thoughts, ask yourself questions like:

* What does this word/sentence/string mean in English?
* What is the message the author is trying to send?
* How would I express that meaning in my own language?

Sometimes translation memory and machine translation tools can offer bad suggestions for a translation. If you use either as part of your translation workflow, make sure to correct the suggestions before submitting them. Avoid literal translation at all costs. Watch out for words that might sound or look the same between English and your language, but have a different meaning. Should not be translated Shortcuts and accesskeys

In Firefox and other software it's possible to use keyboard shortcuts to invoke a specific command. For example, to open a file in Firefox you can press the combination of keys CTRL+O (Cmd+O on Mac). The accelerator key depends on the operative system, but the letter itself is normally localizable. This is what is called a shortcut, or commandkey. For example, the Open File… menu item is stored as

`<!ENTITY openFileCmd.label "Open File…"> <!ENTITY openFileCmd.accesskey "O"> <!ENTITY openFileCmd.commandkey "o">`

The commandkey is stored in `openFileCmd.commandkey` (sometimes the string has .key in the identifier). Normally you should not localize this key, since shortcuts are often common across the entire operative system (e.g. CTRL+S to Save) or similar products (CTRL+T to open a new tab in most browsers). But it needs to be localized if the letter is not available in your keyboard layout. For example, in Italian the character [ can be accessed through ALT+è, a command key [ would not work.

In the code fragment above you see also an accesskey defined for Open File…. Accesskeys are used to access a UI element from the keyboard. Example: if File menu has an accesskey F, and the Open file… menu has O, you can press ALT+F to access the menu, and then O to open a file.

If the label is File, and the accesskey is F, it will be displayed as "File" on Windows and Linux, with an underscored F. If the accesskey was "O", so a character not available in the original label, it will be displayed underlined between parenthesis: "File (O)".

One important thing to determine is if, for your locale, it makes sense to have localized accesskeys: for example, if most users will use a keyboard with a different layout (English), it might make sense to keep the English original accesskey instead of using a letter available in your localization.

Accesskeys, like commandkeys, have their own lines within .dtd and .properties files and are usually identified by .accesskey in the string ID. Variables

Variables should never be translated. You can recognize a variable within a string by its beginning with a specific character (e.g., `$`, `#`, `%`, etc.) followed by a combination of words without spacing. For example, `$BrandShortName` and `%S` are variables. You can move a variable around within a string, if the translation of the string requires it. Brands, copyright, and trademark

Brand names, as well as copyright and trademarks should never be translated, nor transliterated into a non-Latin based script. See the Mozilla branding guide for more details.

### Translating culture-specific references

At times there will be English content included in Mozilla products or web projects (e.g., marketing campaigns) that makes references to American culture and concepts. When translating these, it is best to find an equivalent cultural reference within your own culture that accurately conveys the meaning of the English reference. For example, an American might say, "Good job, home run!" A home run is a baseball reference for a successful outcome. An appropriate translation would be an equivalent metaphor within your culture. Using soccer as an example, you might translate "Good job, home run!" into "Good job, nice goal!" in your language.

[Add a note about Mozilla culture.] Legal content

Mozilla projects will often contain legal content in the form of user agreements, privacy statements, etc. When reviewing the translation of legal content, Mozilla localizers should do so according to the criteria concerning accuracy, fluency, style, and terminology found within this style guide and according to Mozilla culture and values. Fluency

To produce a fluent translation, not only should the translation follow the language's standard grammar, punctuation, and spelling rules, but it should avoid being ambiguous, incoherent, or inconsistent, and unintelligible.

To avoid ambiguity, the translator must thoroughly understand the meaning behind the source text, including any references that text might include. For example, if the English source text uses the word, "it", the translator must know what "it" is to avoid an ambiguous translation. Clearly understanding the source text will also allow a translator to make the source text's logical connections in their own translation. This helps to keep the translation coherent.

Inconsistency can pop up in many forms. A translator must be consistent in their use of abbreviations, references, and links within each localization project. They must also be consistent with Mozilla and the localization communities' style guides and approved terminology. Abbreviations, like terminology, should come from either a standard reference (like a dictionary of abbreviations) or should follow your language's rules for creating abbreviations. Once used, the abbreviation must remain consistent every place that it is used in the translation. Cross-references (or links) must also be consistently used within a translation. If a text contains a hyperlink URL to a support article in English, the translation should also contain a hyperlink to a translation of that support article (if available) or the English version. Links should not redirect to other pages nor should they be broken and unusable.

Finally, there are times that a translation simply doesn't make sense. It's hard to put your finger on what exactly is wrong with it, but you know it is unintelligible and not fluent. While this is uncommon, it's important to report these unintelligible translations and offer suggestions to correct them.
