# Mozilla general localization style guide

 <!-- toc -->

This style guide provides the basic guidelines for translating Mozilla products. This guide should be used in coordination with a locale-specific style guide for your language.

## Fluency

To produce a fluent translation, not only should the translation follow the language’s standard grammar, punctuation, and spelling rules, but it should avoid being ambiguous, incoherent, inconsistent or unintelligible.

To avoid ambiguity, the translator must thoroughly understand the meaning behind the source text, including any references that text might include. For example, if the English source text uses the word `it`, the translator must know what `it` is to avoid an ambiguous translation. Clearly understanding the source text will also allow a translator to make the source text’s logical connections in their own translation. This helps to keep the translation coherent.

Inconsistency can pop up in many forms. A translator must be consistent in their use of abbreviations, references, and links within each localization project. They must also be consistent with Mozilla and the localization communities’ style guides and approved terminology.

Finally, there are times that a translation simply doesn’t make sense. It’s hard to put your finger on what exactly is wrong with it, but you know it is unintelligible and not fluent. While this is uncommon, it’s important to report these unintelligible translations and offer suggestions to correct them.

## Meaning-based translation

When it comes to translation, meaning is everything. A translator needs to understand the source text’s meaning exactly. You then find its most closely linked equivalent in your own language, without adding or subtracting meaning in your translation. Finding meaning-based equivalents between languages can be difficult. To help concentrate your thoughts, ask yourself questions like:

* What does this word/sentence/string mean in English?
* What is the message the author is trying to send?
* How would I express that meaning in my own language?

Sometimes translation memory and machine translation tools can offer bad suggestions for a translation. If you use either as part of your translation workflow, make sure to correct the suggestions before submitting them. Avoid literal translation at all costs. Watch out for words that might sound or look the same between English and your language, but have a different meaning.

### Translating culture-specific references

At times there will be English content included in Mozilla products or web projects (e.g., marketing campaigns) that makes references to American culture and concepts. When translating these, it is best to find an equivalent cultural reference within your own culture that accurately conveys the meaning of the English reference. For example, an American might say, `Good job, home run!` A `home run` is a baseball reference for a successful outcome. An appropriate translation would be an equivalent metaphor within your culture. Using soccer as an example, you might translate `Good job, home run!` into `Good job, nice goal!` in your language.

### Units and measurement

The translation should strive to achieve proper unit conversions for currency, measurements, etc. for the target audience. Source strings will use the imperial system (e.g., miles, pounds, feet, gallons, etc.). Target translations should convert imperial metrics to their measurement system when the measurement is provided as a number. If the measurement is provided as a variable, use the translation for the imperial system unit.

| Example | Source | Translation |
| - | - | - |
| Number as string | `320 miles` | `500 meters` |
| Number as variable | `%d miles` | `%d miles` |

## Terminology

You should be consistent in the use of terminology in your language. These term bases could be developed and approved by the community, or leveraged from another party that adhere to national, international or local standards for software and internet terminology. Avoid inconsistent use of terminology within the project, within term base, or across all of your projects and using terminology from another subject matter (e.g., don’t use medical terminology in Firefox).

Here are a few things to keep in mind when managing your team’s terminology:

* Avoid overly borrowing English expressions.
* Referencing another language from the same language family may inspire you to come up with your own terms.
* Consider the product target audience (age, level of literacy, education, social and economic status).
* Will you use loan words from another language or coin new terms in your language to maintain language purity? Is there government requirement or policy to encourage creating new terms for new concepts, or will loan words be sufficient to reach broader masses and expedite new technology adoption?
* If there are two acceptable scripts commonly used by the general public, what is the commonly used script on the web or government sites? What is the script used by major web technology companies?

### Abbreviations and acronyms

Abbreviations and acronyms, should come from either a standard reference (like a dictionary of abbreviations) or should follow your language’s rules for creating abbreviations and acronyms. Once used, abbreviations and acronyms must remain consistent every place that it is used in the translation.

## Text that should not be translated

### Shortcuts and accesskeys

In Firefox and other software it’s possible to use keyboard shortcuts to invoke a specific command. For example, to open a file in Firefox you can press the combination of keys CTRL+O (Cmd+O on Mac). The accelerator key depends on the operative system, but the letter itself is normally localizable. This is what is called a shortcut, or commandkey. For example, the `Open File…` menu item is stored as

```
<!ENTITY openFileCmd.label "Open File…">
<!ENTITY openFileCmd.accesskey "O">
<!ENTITY openFileCmd.commandkey "o">
```

The commandkey is stored in `openFileCmd.commandkey` (sometimes the string has `.key` in the identifier). Normally you should not localize this key, since shortcuts are often common across the entire operative system (e.g. `CTRL+S` to Save) or similar products (`CTRL+T` to open a new tab in most browsers). But it needs to be localized if the letter is not available in your keyboard layout. For example, in Italian the character `[` can be accessed through `ALT+è`, a command key `[` would not work.

In the code fragment above you see also an accesskey defined for `Open File…`. Accesskeys are used to access a UI element from the keyboard. Example: if File menu has an accesskey `F`, and the `Open file…` menu has `O`, you can press `ALT+F` to access the menu, and then `O` to open a file.

If the label is File, and the accesskey is `F`, it will be displayed as `File` on Windows and Linux, with an underscored `F`. If the accesskey was `O`, so a character not available in the original label, it will be displayed underlined between parenthesis: `File (O)`.

One important thing to determine is if, for your locale, it makes sense to have localized accesskeys: for example, if most users will use a keyboard with a different layout (English), it might make sense to keep the English original accesskey instead of using a letter available in your localization.

Accesskeys, like commandkeys, have their own lines within .dtd and .properties files and are usually identified by .accesskey in the string ID.

### Variables

Variables should never be translated. You can recognize a variable within a string by its beginning with a specific character (e.g., `$`, `#`, `%`, etc.) followed by a combination of words without spacing. For example, `$BrandShortName` and `%S` are variables. You can move a variable around within a string, if the translation of the string requires it.

#### Cross-references and links

Cross-references (or links) must be consistently used within a translation. If a text contains a hyperlink URL to a support article in English, the translation should also contain a hyperlink to a translation of that support article (if available) or the English version. Links should not redirect to other pages nor should they be broken and unusable.

### Brands, copyright, and trademark

Trademarks present a special case for localization as they have legal as well as semantic significance. To ensure that localization does not undermine Mozilla’s trademarks rights, please follow these rules when translating content that includes trademarks.

This page has a [list of Mozilla trademarks](https://www.mozilla.org/en-US/foundation/trademarks/list/).

#### Use in local languages with non-Latin script / permissible transcriptions

When your local language is not written in the Latin alphabet and you use a Mozilla trademark in a headline, a prominent position, or for the first time on a site, you should always use it in its original form in Latin script (e.g. Mozilla, Firefox, Thunderbird). Mozilla trademarks should therefore not be altered in prominent UI elements. For example, do not alter “Firefox” in the first-run menus, or for the first use of the term in landing pages and legal notices.

If you use the trademarks in a referential context after that, within continuous text, you may use a transcribed local language version. If a transcribed local version is used, each community must take care to select a single version and use it consistently. This should be in the form that is the most used and accepted expression in digital/print media.

Correct example:

> Finally released: the Firefox Quantum Update!
> In November 2017, Mozilla has released the latest version of its Firefox software. […]

> Наконец выпущен: обновление квантового Firefox Quantum!
> В ноябре 2017 года Mozilla выпустила последнюю версию своего программного обеспечения для Файрфокс. […]

Incorrect example:

> Finally released: the Firefox Quantum Update!
> In November 2017, Mozilla has released the latest version of its Firefox software. […]

> Наконец выпущен: обновление квантового Файрфокс квантум!
> В ноябре 2017 года Моцилла выпустила последнюю версию своего программного обеспечения для Файрфокс. […]

#### Use in local languages with Latin script

When your local language is written in the Latin alphabet, you should always use Mozilla’s trademarks in their original Latin script form. This also applies if the respective terms should be pronounced differently in your local language. You should therefore not modify the original Mozilla trademarks in order to reflect or facilitate local pronunciation.

Correct example:

> In November 2017, Mozilla has released the latest version of its Firefox software. […]

> W listopadzie 2017 roku Mozilla wydała najnowszą wersję swojego oprogramowania Firefox. […]

Incorrect example:

> In November 2017, Mozilla has released the latest version of its Firefox software. […]

> W listopadzie 2017 roku Mozilla wydała najnowszą wersję swojego oprogramowania Firefoks, […]

#### Translations of trademarks

Always use Mozilla’s trademarks in their original wording, even if you are transcribing them into your local non-Latin alphabet (per the guidance under point 1 above). For example, do not translate Firefox into another language by using words that have the meaning of “fire” and “fox” in that language.[1]

If you want to explain how a Mozilla trademark is pronounced in your local language or what it means if translated literally, you may do so in a referential context only. When doing so, you should also state expressly that you want to explain the meaning or pronunciation of the term.

Correct example:

> The newest version of the Mozilla Firefox software – which literally means “fire fox” – outpaces its opponents and lives up to its name. […]

> Die neueste Version der Firefox Software – was wörtlich übersetzt “Feuerfuchs” bedeutet – überholt all ihre Konkurrenten und macht ihrem Namen alle Ehre. […]

Incorrect example:

> The newest version of Mozilla’s Firefox software outpaces its opponents and lives up to its name.

> Die neueste Version von Mozillas Feuerfuchs Software überholt all ihre Konkurrenten und macht ihrem Namen alle Ehre.

[1] The only exception to this rule is the Chinese characters for “Fire” and “Fox” together. Mozilla has a registered trademark on these characters (China Reg. No. 16199671A).

#### Declensions

As noted above, when you use a Mozilla trademark in a headline, a prominent page position or UI element (such as first-run application menus or the first use of the term in landing pages and legal notices), or for the first time on a site, you should always use it in its original, unaltered form.

If your language requires declension of proper nouns and adjectives, try to limit their use to the following cases:
* Grammatical unintelligibility requirements.
* The contextual meaning of the proper noun requires the declension.
* The UI cannot accommodate a large enough translation to avoid it.

In other cases, avoid using declension on trademarks.

Never use Mozilla trademarks as verbs and do not coin verbs out of Mozilla trademarks.

## Copy rules

### Title Case

Title case is a capitalization style that includes the following rules:

* Always capitalize the first and last word in the text element, regardless of part of speech or other rules below.
* For words in between the first and last, capitalize all nouns, verbs, adverbs and pronouns.
* Capitalize conjunctions of four or more letters, but also capitalize if.
* Capitalize prepositions for four or more letters.
* Do not capitalize articles, prepositions of three or fewer letters, and conjunctions of three or fewer letters (but not if).
* A note about hyphens: capitalize the second word in a hyphenated compound if it would normally be capitalized as a single word according to title case rules. So, capitalize the S in Quick-Search Options, lowercase the o in Add-on Choices.

Example: `All Your Activity`.

### Sentence Case

Sentence case is a capitalization style where the first word of the text element is capitalized as well as any words that are normally capitalized.

Example: `Sign in to continue to Firefox Sync`.

### All Caps

All Caps is a style where every letter is capitalized.

Example: `CANCEL`.

### User interface elements

* **Titles**: should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.
* **Headlines**: which are the more conversational titles and subtitles that appear in instructional text screens, tours and form pages
* **Buttons**: capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button’s action. For example, `Cancel`, `Clear History`, `Add Email`, `Select All`, etc.
* **Value Selector Lists**: capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.
* **Articles**: avoid them where possible. Articles (such as the word `the` in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.
* **Ellipsis**: ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue. Focus on making the UI short and precise. The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.
