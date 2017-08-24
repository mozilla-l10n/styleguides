# Mozilla General Localization Style Guide

## Translation Methods

### Accuracy

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

If the label is File, and the accesskey is F, it will be displayed as `File` on Windows and Linux, with an underscored F. If the accesskey was `O`, so a character not available in the original label, it will be displayed underlined between parenthesis: `File (O)`.

One important thing to determine is if, for your locale, it makes sense to have localized accesskeys: for example, if most users will use a keyboard with a different layout (English), it might make sense to keep the English original accesskey instead of using a letter available in your localization.

Accesskeys, like commandkeys, have their own lines within .dtd and .properties files and are usually identified by .accesskey in the string ID.

##### Variables

Variables should never be translated. You can recognize a variable within a string by its beginning with a specific character (e.g., `$`, `#`, `%`, etc.) followed by a combination of words without spacing. For example, `$BrandShortName` and `%S` are variables.  You can move a variable around within a string, if the translation of the string requires it.

### Punctuation

#### Punctuation in Code and Hyperlinks

##### Brands, copyright, and trademark

Brand names, as well as copyright and trademarks should never be translated, nor transliterated into a non-Latin based script. See the Mozilla branding guide for more details.

#### Translating culture-specific references

At times there will be English content included in Mozilla products or web projects (e.g., marketing campaigns) that makes references to American culture and concepts. When translating these, it is best to find an equivalent cultural reference within your own culture that accurately conveys the meaning of the English reference. For example, an American might say, `Good job, home run!` A `home run` is a baseball reference for a successful outcome. An appropriate translation would be an equivalent metaphor within your culture. Using soccer as an example, you might translate `Good job, home run!` into `Good job, nice goal!` in your language.

#### Legal content

Mozilla projects will often contain legal content in the form of user agreements, privacy statements, etc. When reviewing the translation of legal content, Mozilla localizers should do so according to the criteria concerning accuracy, fluency, style, and terminology found within this style guide and according to Mozilla culture and values.

### Fluency

To produce a fluent translation, not only should the translation follow the language's standard grammar, punctuation, and spelling rules, but it should avoid being ambiguous, incoherent, or inconsistent, and unintelligible.

To avoid ambiguity, the translator must thoroughly understand the meaning behind the source text, including any references that text might include. For example, if the English source text uses the word, `it`, the translator must know what "it" is to avoid an ambiguous translation. Clearly understanding the source text will also allow a translator to make the source text's logical connections in their own translation. This helps to keep the translation coherent.

Inconsistency can pop up in many forms. A translator must be consistent in their use of abbreviations, references, and links within each localization project. They must also be consistent with Mozilla and the localization communities' style guides and approved terminology. Abbreviations, like terminology, should come from either a standard reference (like a dictionary of abbreviations) or should follow your language's rules for creating abbreviations. Once used, the abbreviation must remain consistent every place that it is used in the translation. Cross-references (or links) must also be consistently used within a translation. If a text contains a hyperlink URL to a support article in English, the translation should also contain a hyperlink to a translation of that support article (if available) or the English version. Links should not redirect to other pages nor should they be broken and unusable.

Finally, there are times that a translation simply doesn't make sense. It's hard to put your finger on what exactly is wrong with it, but you know it is unintelligible and not fluent. While this is uncommon, it's important to report these unintelligible translations and offer suggestions to correct them.

## Unorganized Topics

### Terminology

Here are a few existing term bases we approve of for software/internet terminology and definitions (though not limited to):

* Microsoft key terms and target languages  [https://www.microsoft.com/Language/en-US/Default.aspx](https://www.microsoft.com/Language/en-US/Default.aspx)
* Pootle's own term list: [https://mozilla.locamotion.org/xx/terminology/essential.po](https://mozilla.locamotion.org/xx/terminology/essential.po) (replace *xx* with a locale code)

You should be consistent in the use of existing reliable appropriate term bases in your language. These term bases could be developed and approved by the community, or leveraged from another party that adhere to national, international or local standards for software and internet terminology. Avoid the following:

* Inconsistent use of terminology within the project
* Inconsistent use of terminology with term base
* Inconsistent use of terminology across all of your projects
* Using terminology from another subject matter (e.g., don't use medical terminology in Firefox).

#### Developing new term bases

What is your community's process for identifying and creating a new termbase? Here are a few things to keep in mind:

* Avoid overly borrowing English expressions
* Referencing another language from the same language family may inspire you to come up with your own terms
* Consider the product target audience (age, level of literacy, education, social and economic status)
* Will you use loan words from another language or coin new terms in your language to maintain language purity? Is there government requirement or policy to encourage creating new terms for new concepts, or will loan words be sufficient to reach broader masses and expedite new technology adoption?
* If there are two acceptable scripts commonly used by the general public, what is the commonly used script on the web or government sites?  What is the script used by major web technology companies?

### Abbreviations

Common Abbreviations in Mozilla

### Acronyms

Common Acronyms in Mozilla

### Branding

Finally, adherence to Mozilla and third-party branding and style guides should be respected throughout a localization project. More information on Mozilla-specific branding rules can be found here: [https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/). For example, some brand names should never be translated, such as `Firefox`. For other brands that do not have any branding guidelines, your localization community must define whether to translate them. Be extra careful to check on branding rules before deciding to translate a name or not (whether for Mozilla or for a third-party) and to list them here in your community's l10n style guide.


### Units and Measurement

Many elements of unit or grammar do not exist or apply to all languages. If you find one of these elements that does not apply to your language, please remove it from your style guide. For those definitions of units and grammar that apply document the reference used or how it will be applied to the translation.

The translation should strive to achieve proper unit conversions for currency, measurements, etc. for the target audience.

Do you use the imperial, metric or nautical system for measuring weight, distance, etc.? Source strings will use the imperial system (e.g., miles, pounds, feet, gallons, etc.). Target translations should convert imperial metrics to their measurement system.

#### Emphasis guidelines

##### Title Case

Title case is a capitalization style that includes the following rules:

* Always capitalize the first and last word in the text element, regardless of part of speech or other rules below
* For words in between the first and last, capitalize all nouns, verbs, adverbs and pronouns
* Capitalize conjunctions of four or more letters, but also capitalize if
* Capitalize prepositions for four or more letters
* Do not capitalize articles, prepositions of three or fewer letters, and conjunctions of three or fewer letters (but not if)
* A note about hyphens: Capitalize the second word in a hyphenated compound if it would normally be capitalized as a single word according to title case rules. So, capitalize the S in Quick-Search Options, lowercase the o in Add-on Choices.

Example: `All Your Activity`

##### Sentence Case

Sentence case is a capitalization style where the first word of the text element is capitalized as well as any words that are normally capitalized.

Example: `Sign in to continue to Firefox Sync`

##### All Caps

All Caps is a style where every letter is capitalized. Use these for all buttons that contain text.

Example: `CANCEL`

#### User Interface Elements

* Titles :  Should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.
* Buttons: Capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button's action. For example, `Cancel`, `Clear History`, `Add Email`, `Select All`, etc.
* Value Selector Lists: Capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.
* Articles:  Avoid them where possible. Articles (such as the word `the` in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.
* Ellipsis: Ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue.  Focus on making the UI short and precise.  The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.
