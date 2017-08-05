# Style Guide Burmese (my)

## မိတ်ဆက်

Style guides define the standard against which we determine a translation's quality. They contain rules that are both defined by Mozilla and by Mozilla's localization communities on how to best translate text in Mozilla products, websites, and other projects. Style guides are used to both translate and evaluate a translation's quality. By following these rules, a translator has a better chance of producing a high quality translation that represents Mozilla values and culture. Some examples of international style guides created by other organizations are:

[https://help.apple.com/asg/mac/2013/ASG_2013.pdf](https://help.apple.com/asg/mac/2013/ASG_2013.pdf)
[https://www.microsoft.com/Language/en-US/StyleGuides.aspx](https://www.microsoft.com/Language/en-US/StyleGuides.aspx)
[https://www.facebook.com/translations/style_guides](https://www.facebook.com/translations/style_guides)

This style guide is broken up into two main parts: the first contains rules that are language-specific and must be defined by each Mozilla l10n community (covering language-specific style, terminology, and units); the second contains general rules that Mozilla has defined for translators of all languages that can help you translate well (covering principles of accuracy and fluency). Please adapt part one of this style guide to your l10n community's rules for style, terminology, and units. Wherever possible, refer to existing national standards for units, spelling, and grammar in your community's adaptation of the first part of this style guide.

## Language-specific Mozilla style

### ပုံစံ

Your localization community's style is largely up to you to define. It is a part of your community's instructions and standards for translating strings within each project type. Style encompasses various elements, such as formality, tone, natural expression, handling cultural references, idioms, or slang, and maintaining consistency with Mozilla and 3rd party branding and style guides. Your localization community should define these style elements for localizing Mozilla projects into your language. Let's go through these main aspects of Style.

#### Formality and Tone

When determining the formality or tone of a Mozilla l10n project in your language, ask yourself these questions:

* Who is the target user for this project and what is their background?
* How would a target user for this project expect to interact with this project? For example, would they expect a friendly, casual interaction?
* Is formal language appropriate for all of your language's Mozilla l10n projects, or only some of them? Which ones?
* Is informal language appropriate for all of your language's Mozilla l10n projets, or only some of them? Which ones?

In fact, localization should not use a level of formality higher or lower than required by this community-defined style guideline. An example of this would be using "click here" (not formal) vs. "please click here" (more formal). Also, the tone employed throughout a l10n project(s) should stay consistent within itself.

#### Natural expression

Using natural expressions make your localization sound natural to a native speaker. If your translation does not follow the community defined language guidelines for translating content that contains local or natural expressions, this results in a mediocre and/or awkward translation. Teams should be careful to address those and keep them in mind while translating, which is why it is an important section to address in a Style Guide. An example of a natural expression in a translation would be translating the Spanish phrase, "En ocho días." In English, one might translate this as, "in eight days" or "in a week." The latter is the more natural translation, although both could be considered correct.

In this section, form guidelines for how to perform a natural sounding localization. This might take some time and experience to find the right examples to include or create the right guidelines for your language.

#### Handling cultural references, idioms, and slang

Cultural references, idioms, and slang require a full understanding of these references between the cultures of your source and target languages. An example of a cultural reference in English would be the phrase, "kick-off meeting." This is a reference that uses an American football term. It means a meeting to begin a project. To translate it, you can follow one of two approaches:

1. Find an equivalent reference phrase in your language.
2. Remove the cultural reference and translate the core meaning (e.g., "a commencement meeting")

Define a policy for handling these cultural references, idioms, and slang that you can make standard across all projects. Consider resources you can refer back to in order to find cultural equivalents and list them in this section of your style guide (e.g., a slang dictionary in your language).

#### Style consistency

Finally, adherence to Mozilla and third-party branding and style guides should be respected throughout a localization project. More information on Mozilla-specific branding rules can be found here: [https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/). For example, some brand names should never be translated, such as "Firefox". For other brands that do not have any branding guidelines, your localization community must define whether to translate them. Be extra careful to check on branding rules before deciding to translate a name or not (whether for Mozilla or for a third-party) and to list them here in your community's l10n style guide.

## ပညာရပ်ဝေါဟာရ

Here are a few existing term bases we approve of for software/internet terminology and definitions (though not limited to):

* Microsoft key terms and target languages [https://www.microsoft.com/Language/en-US/Default.aspx](https://www.microsoft.com/Language/en-US/Default.aspx)
* Pootle's own term list: [https://mozilla.locamotion.org/xx/terminology/essential.po](https://mozilla.locamotion.org/xx/terminology/essential.po) (replace *xx* with a locale code)

You should be consistent in the use of existing reliable appropriate term bases in your language. These term bases could be developed and approved by the community, or leveraged from another party that adhere to national, international or local standards for software and internet terminology. Avoid the following:

* Inconsistent use of terminology within the project
* Inconsistent use of terminology with term base
* Inconsistent use of terminology across all of your projects
* Using terminology from another subject matter (e.g., don't use medical terminology in Firefox).

### Tips on translating difficult concepts

Translating terms representing difficult concepts is a tricky task. Here are some ideas to help you translate terms that do not have equivalents in your language:

* Understand the meaning of the term in English. Definitions of a few key terms [http://techterms.com/category/internet](http://techterms.com/category/internet)
* Know your product and understand the function of the feature.
* Consider similar ideas for those functions in your culture.
* Associate a culturally specific image with the meaning and function of the term.

### Developing new term bases

What is your community's process for identifying and creating a new termbase? Here are a few things to keep in mind:

* Avoid overly borrowing English expressions
* Referencing another language from the same language family may inspire you to come up with your own terms
* Consider the product target audience (age, level of literacy, education, social and economic status)
* Will you use loan words from another language or coin new terms in your language to maintain language purity? Is there government requirement or policy to encourage creating new terms for new concepts, or will loan words be sufficient to reach broader masses and expedite new technology adoption?
* If there are two acceptable scripts commonly used by the general public, what is the commonly used script on the web or government sites? What is the script used by major web technology companies?

## အတိုင်းအတာနှင့် သဒ္ဒါ

Many elements of unit or grammar do not exist or apply to all languages. If you find one of these elements that does not apply to your language, please remove it from your style guide. For those definitions of units and grammar that apply document the reference used or how it will be applied to the translation.

The translation should strive to achieve proper unit conversions for currency, measurements, etc. for the target audience.

## Units and Unit Conversion

### Date Format

How are the date formats for weeks and months expressed in the following forms:

* 1). Fully spelled out 2). 2 or 3 letters 3). Single letter
* What is the order of Year, Month and Day?

Reference material can be find here: https://en.wikipedia.org/wiki/Date_format_by_country

### Calendar view:

* Which date is considered the first day of the week, Sunday or Monday?
* Is Lunar calendar observed? Other regional calendar observed?

### Time Format

How is time expressed in your language? Including 0-24 hr expression, hour, minute and second.

### Numerals

How are numerals and percentages expressed in your language?

* Example: 1.23 (decimal separator) or 1,000 (thousand separator) using comma or period.

### Currency

What are other widely used currency and symbols used in your country/language for paid apps.

### Units

Do you use the imperial, metric or nautical system for measuring weight, distance, etc.? Source strings will use the imperial system (e.g., miles, pounds, feet, gallons, etc.). Target translations should convert imperial metrics to their measurement system.

### Names

* What are the order of family name and given name in your language? Here is the guideline on the naming convention from w3c.org:
* Address and Postal Code Format
* What is the format in your language?
* Example: most Asian countries start from big to small: `[Country] [postal code][state/province][city][district][street number and name][building and suite numbers][addressee]`
* Countries of European languages start from small to big: `[addressee][street number and name][building and suite numbers][district][city][state/province][postal code][Country]`

### Telephone Number format

Space separators between digits can be different for area codes such as State (Province) and City,

## Spelling And Grammar Checks

Many languages have national or international standards that define spelling and grammar rules. When defining these rules for your community, make reference to those standards wherever possible. Do you have automated tests for spell checking and grammar? List those tools and dictionaries here and how regularly they should be used.

### Tense

Do you have standards for verb forms that indicate or express the time, such as past, present, or future, of the action or state? What is your policy on tense consistency for certain use cases? For example, for phrases that ask a user to make an action (like "Download Firefox"), do you use a future tense, a command tense, or a neutral tense? (See: [https://en.wikipedia.org/wiki/Grammatical_tense](https://en.wikipedia.org/wiki/Grammatical_tense)

## Word Forms

### Pluralization

What is the appropriate form of expressing pluralization in your language? List all forms of plural forms and examples if there is more than one. Additional discussions can be found Here. [https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals) and here: [http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)

### Abbreviations

How are abbreviations expressed in your language?

* Example, in English, abbreviations are made by removing most vowels and only using the first 3-5 consonants followed by a period (e.g., abbreviation = abbr.). (see: [https://en.wikipedia.org/wiki/Abbreviation](https://en.wikipedia.org/wiki/Abbreviation))

If your language does not have a standard way of expressing abbreviations, do you simply leave them in English?

### Acronyms

Are there standard translations of widely accepted acronyms such as CD, DVD, MB in your language? If not, do they remain in English? (see: [https://en.wikipedia.org/wiki/Acronym](https://en.wikipedia.org/wiki/Acronym) )

### Punctuation

Do you use different punctuation rules in your Firefox localization than what your language standard defines?

* Example: do you use a period at the end of every user interface element translation or only some? What is the international/national standard for punctuation in your language?

### Emphasis

Is there an international/national standard for capitalization in your language?

* If so, do those standard rules apply in all product translations?
* If this doesn't apply, how do you indicate importance or name of a movie, book title, product UIs (Save, File...) in your language?
* How does your language handle the use of bold, italic, or underline types to express emphasis? ( See: [https://en.wikipedia.org/wiki/Italic_type](https://en.wikipedia.org/wiki/Italic_type) )

### Hyphens and compounds

What is the appropriate way of using hyphens and compounds in your language? ( [https://en.wikipedia.org/wiki/Compound_%28linguistics%29](https://en.wikipedia.org/wiki/Compound_%28linguistics%29) )

### Prepositions and articles

What is the appropriate form of expressing prepositions and articles in your language?

### Diacritics and Special characters

Does your language use any special or accented characters and will they be applied and preserved in sort orders, and other aspects of the translation? (see: [https://en.wikipedia.org/wiki/Diacritic](https://en.wikipedia.org/wiki/Diacritic) )

### Quotes

Does your language have a standard use for quotation marks, parenthesis, or brackets?

### Whitespace

Does your language require the use of white space around words, sentences, paragraphs, etc.? If so, in what ways? (see: [https://en.wikipedia.org/wiki/Sentence_spacing_in_language_and_style_guides](https://en.wikipedia.org/wiki/Sentence_spacing_in_language_and_style_guides) )

### User Interface Elements

* Titles : Should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.
* Buttons: Capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button's action. For example, "Cancel", "Clear History", "Add Email", "Select All", etc.
* Value Selector Lists: Capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.
* Articles: Avoid them where possible. Articles (such as the word "the" in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.
* Ellipsis: Ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue. Focus on making the UI short and precise. The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.

## အထွေထွေ Mozilla l10n ပုံစံ

### မှန်ကန်မှု

#### Meaning-based translation

When it comes to translation, meaning is everything. A translator needs to understand the source text's meaning exactly. You then find its most closely linked equivalent in your own language, without adding or subtracting meaning in your translation. Finding meaning-based equivalents between languages can be difficult. To help concentrate your thoughts, ask yourself questions like:

* What does this word/sentence/string mean in English?
* What is the message the author is trying to send?
* How would I express that meaning in my own language?

Sometimes translation memory and machine translation tools can offer bad suggestions for a translation. If you use either as part of your translation workflow, make sure to correct the suggestions before submitting them. Avoid literal translation at all costs. Watch out for words that might sound or look the same between English and your language, but have a different meaning.

#### Should not be translated

##### Shortcuts and accesskeys

In Firefox and other software it's possible to use keyboard shortcuts to invoke a specific command. For example, to open a file in Firefox you can press the combination of keys CTRL+O (Cmd+O on Mac). The accelerator key depends on the operative system, but the letter itself is normally localizable. This is what is called a shortcut, or commandkey. For example, the Open File… menu item is stored as

 <!ENTITY openFileCmd.label "Open File…">
 <!ENTITY openFileCmd.accesskey "O">
 <!ENTITY openFileCmd.commandkey "o">

The commandkey is stored in openFileCmd.commandkey (sometimes the string has .key in the identifier). Normally you should not localize this key, since shortcuts are often common across the entire operative system (e.g. CTRL+S to Save) or similar products (CTRL+T to open a new tab in most browsers). But it needs to be localized if the letter is not available in your keyboard layout. For example, in Italian the character [ can be accessed through ALT+è, a command key [ would not work.

In the code fragment above you see also an accesskey defined for Open File…. Accesskeys are used to access a UI element from the keyboard. Example: if File menu has an accesskey F, and the Open file… menu has O, you can press ALT+F to access the menu, and then O to open a file.

If the label is File, and the accesskey is F, it will be displayed as "File" on Windows and Linux, with an underscored F. If the accesskey was "O", so a character not available in the original label, it will be displayed underlined between parenthesis: "File (O)".

One important thing to determine is if, for your locale, it makes sense to have localized accesskeys: for example, if most users will use a keyboard with a different layout (English), it might make sense to keep the English original accesskey instead of using a letter available in your localization.

Accesskeys, like commandkeys, have their own lines within .dtd and .properties files and are usually identified by .accesskey in the string ID.

##### Variables

Variables should never be translated. You can recognize a variable within a string by its beginning with a specific character (e.g., $, #, %, etc.) followed by a combination of words without spacing. For example, $BrandShortName and %S are variables. You can move a variable around within a string, if the translation of the string requires it.

##### Brands, copyright, and trademark

Brand names, as well as copyright and trademarks should never be translated, nor transliterated into a non-Latin based script. See the Mozilla branding guide for more details.

#### Translating culture-specific references

At times there will be English content included in Mozilla products or web projects (e.g., marketing campaigns) that makes references to American culture and concepts. When translating these, it is best to find an equivalent cultural reference within your own culture that accurately conveys the meaning of the English reference. For example, an American might say, "Good job, home run!" A home run is a baseball reference for a successful outcome. An appropriate translation would be an equivalent metaphor within your culture. Using soccer as an example, you might translate "Good job, home run!" into "Good job, nice goal!" in your language.

### Legal content

Mozilla projects will often contain legal content in the form of user agreements, privacy statements, etc. When reviewing the translation of legal content, Mozilla localizers should do so according to the criteria concerning accuracy, fluency, style, and terminology found within this style guide and according to Mozilla culture and values.

## ကောင်းမွန်သော ပြန်ဆိုမှု

To produce a fluent translation, not only should the translation follow the language's standard grammar, punctuation, and spelling rules, but it should avoid being ambiguous, incoherent, or inconsistent, and unintelligible.

To avoid ambiguity, the translator must thoroughly understand the meaning behind the source text, including any references that text might include. For example, if the English source text uses the word, "it", the translator must know what "it" is to avoid an ambiguous translation. Clearly understanding the source text will also allow a translator to make the source text's logical connections in their own translation. This helps to keep the translation coherent.

Inconsistency can pop up in many forms. A translator must be consistent in their use of abbreviations, references, and links within each localization project. They must also be consistent with Mozilla and the localization communities' style guides and approved terminology. Abbreviations, like terminology, should come from either a standard reference (like a dictionary of abbreviations) or should follow your language's rules for creating abbreviations. Once used, the abbreviation must remain consistent every place that it is used in the translation. Cross-references (or links) must also be consistently used within a translation. If a text contains a hyperlink URL to a support article in English, the translation should also contain a hyperlink to a translation of that support article (if available) or the English version. Links should not redirect to other pages nor should they be broken and unusable.

Finally, there are times that a translation simply doesn't make sense. It's hard to put your finger on what exactly is wrong with it, but you know it is unintelligible and not fluent. While this is uncommon, it's important to report these unintelligible translations and offer suggestions to correct them.
