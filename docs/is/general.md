# General Mozilla l10n style (common to all languages)

## Accuracy

## Meaning-based translation

When it comes to translation, meaning is everything. A translator needs to understand the source text's meaning exactly. You then find its most closely linked equivalent in your own language, without adding or subtracting meaning in your translation. Finding meaning-based equivalents between languages can be difficult. To help concentrate your thoughts, ask yourself questions like:

* What does this word/sentence/string mean in English?
* What is the message the author is trying to send?
* How would I express that meaning in my own language?

Sometimes translation memory and machine translation tools can offer bad suggestions for a translation. If you use either as part of your translation workflow, make sure to correct the suggestions before submitting them. Avoid literal translation at all costs. Watch out for words that might sound or look the same between English and your language, but have a different meaning.

## Should not be translated

### Access Keys

Access keys allow a computer to immediately jump to a particular part in a web page by combining keystrokes. They can be adapted to suit your language by selecting a single character to be used in the combined keystroke. Access keys have their own lines within .dtd and .properties files and are identified by being named ".accesskey" in the line.

### Variables

Variables should never be translated. You can recognize a variable within a string by its beginning with a specific character (e.g., `$`, `#`, `%`, etc.) followed by a combination of words without spacing. For example, `$BrandShortName` and `%S` are variables.  You can move a variable around within a string, if the translation of the string requires it.

### Brands, copyright, and trademark

Brand names, as well as copyright and trademarks should never be translated, nor transliterated into a non-Latin based script. See the <a href="https://www.mozilla.org/en-US/styleguide/communications/translation/">Mozilla branding guide</a> for more details.

### Translating culture-specific references

At times there will be English content included in Mozilla products or web projects (e.g., marketing campaigns) that makes references to American culture and concepts. When translating these, it is best to find an equivalent cultural reference within your own culture that accurately conveys the meaning of the English reference. For example, an American might say, "Good job, home run!" A home run is a baseball reference for a successful outcome. An appropriate translation would be an equivalent metaphor within your culture. Using soccer as an example, you might translate "Good job, home run!" into "Good job, nice goal!" in your language.

*Add a note about Mozilla culture.*

## Legal content

Mozilla projects will often contain legal content in the form of user agreements, privacy statements, etc. When reviewing the translation of legal content, Mozilla localizers should do so according to the criteria concerning accuracy, fluency, style, and terminology found within this style guide and according to Mozilla culture and values.

## Fluency

To produce a fluent translation, not only should the translation follow the language's standard grammar, punctuation, and spelling rules, but it should avoid being ambiguous, incoherent, or inconsistent, and unintelligible.

To avoid ambiguity, the translator must thoroughly understand the meaning behind the source text, including any references that text might include. For example, if the English source text uses the word, "it", the translator must know what "it" is to avoid an ambiguous translation. Clearly understanding the source text will also allow a translator to make the source text's logical connections in their own translation. This helps to keep the translation coherent.

Inconsistency can pop up in many forms. A translator must be consistent in their use of abbreviations, references, and links within each localization project. They must also be consistent with Mozilla and the localization communities' style guides and approved terminology. Abbreviations, like terminology, should come from either a standard reference (like a dictionary of abbreviations) or should follow your language's rules for creating abbreviations. Once used, the abbreviation must remain consistent every place that it is used in the translation. Cross-references (or links) must also be consistently used within a translation. If a text contains a hyperlink URL to a support article in English, the translation should also contain a hyperlink to a translation of that support article (if available) or the English version. Links should not redirect to other pages nor should they be broken and unusable.

Finally, there are times that a translation simply doesn't make sense. It's hard to put your finger on what exactly is wrong with it, but you know it is unintelligible and not fluent. While this is uncommon, it's important to report these unintelligible translations and offer suggestions to correct them.
