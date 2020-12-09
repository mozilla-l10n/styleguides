# Style Guide Swahili (sw)

## Introduction

This style guide is intended for translators working on Swahili Mozilla projects. It provides in-depth information about the quality standards expected by Mozilla for the translation of all product components. All translators should read this guide before commencing any translation work.

This guide addresses general translation issues and specifies certain rules of style and usage specific to your language. It should be used as a guideline to avoid common typographic errors, and to maintain consistent terminology and writing style across a project’s components and indeed a product range. The guide should be used in conjunction with the current and previous product-specific glossaries, glossaries of other products of a product range, and the industry standard platform-specific glossaries, such as those provided by Microsoft.

This document may be updated or completed in the course of translation. Where no specific instruction or recommendation is specified, translators should use the phrasing and style that comply with industry standards.

## General Style Considerations

### Style guidelines

Follow these basic rules:

* Original American English text tends to be rather casual. For Swahili language the general style should be clear, friendly and concise. Being friendly does not mean using overly colloquial language – it is crucial to consistently maintain a professional tone, but use contemporary, up-to-date style and common words. Use language that resembles conversation observed in everyday settings as opposed to the formal, technical language that is often used for technical and commercial content.
* Try to avoid long, nested sentence constructions. If necessary, break up the original sentence and regroup it syntactically.
* Use wording that is succinct, unambiguous, and free of jargon.
* Produce a translation that sounds as it if was originally written in your language, i.e. avoid following the original source sentence structure too closely.
* Always bear in mind who your target audience is (i.e. an experienced computer user, a beginner, or a combination of both groups).
* Use a consistent style throughout all product components and across a product range, to ensure that all Mozilla products can be linguistically identified as part of a group of products.

### Style guidelines specific to Mozilla products

Please refer to the reference documentation supplied by Mozilla and any Mozilla style guides and make a note of anything significant and specific that should be noted with respect to Mozilla.

### Reference terminology

The following terminology sources should be used as reference in the translation:

* Product-specific glossary, to ensure consistency across all product components.
* Previous version product-specific glossary, if any, to ensure consistency between versions.
* Glossaries of other Mozilla products, to ensure cross-product consistency.
* Microsoft / Apple glossaries, to ensure adherence to the industry standards. It is your responsibility to make sure that you always have the latest Microsoft and Apple glossaries at your disposal. The glossaries can be found at: [http://www.microsoft.com/Language](http://www.microsoft.com/Language) and [https://developer.apple.com/download/more/?=Glossaries](https://developer.apple.com/download/more/?=Glossaries)

### Terminology not found in the glossary or style guide

* Please make a log of any terms not found in the glossary or style guide that are used frequently in the materials. Return this log to Rubric so that the terms can be incorporated into the glossary. This increases consistency in large projects.

## Abbreviations

### General Abbreviations

* Avoid the use of non-standard abbreviations such as min. for minutes.  Where no appropriate abbreviation exists, use the whole word.
* Note: Kiswahili time is counted differently from the am/pm system used in Europe and the US. However, computer systems have not yet been designed that correctly localize time for the East African market. Therefore, computer users currently use the am/pm system when they are interacting with technological components.

### Measurements and Numerals

* Be careful of the difference in use between periods and commas as decimal markers in different languages.

Numbers (includes currency, dates and times)
We use numbers in text, when referring to currency, and in time stamps and dates.

In offline files, use numerals for numbers greater than ten. Numbers one through ten should be written out in full.
On the UI and in series of numbers or measurements, use all numbers (even 1).

From 0 to 9999, digits should be together with no separator, while from 10 000 onwards a nonbreaking space should be used to set off groups of 3 digits.

* 10
* 100
* 1000
* 10 000
* 100 000
* 1 000 000

* Use a comma as decimal separator.

### Currency

Use the numerical form and stick to the English source. If you need to mention currency or time alongside another type of number, spell out the other number to make the currency or time more prominent (ex: buy two deals and save $20 – nunua matoleo mawili na uokoe $ 20 ).

Note: Don't localize amounts from US Dollars to Ksh (or other currencies) yourself unless it is clearly an example that has been made up.

### Time stamps and dates

Use the numerical form and write the numbers as compactly as possible. Use 12 hour clock.

* 5 minutes ago ( dakika 5 zilizopita)
* January 9 at 9:16pm ( Januari 9 saa 9: 16pm)

### Filename Extensions

Filename extensions and graphic formats referenced by filename extensions such as BMP, GIF, HTML, PNG, TIFF must not be translated.

## Acronyms

Acronyms are made up of the initial letters of several words that are represented by these letters. Some well-known examples are WYSIWYG (What You See Is What You Get), OLE (Object Linking and Embedding), or RAM (Random Access Memory).

Use recognised translations of acronyms where these exist, but avoid creating new, non-standard acronyms.

Examples:
Data Access Objects (DAO)
ActiveX data objects (ADO)

In Swahili, many acronyms are standardized and remain untranslated. They are only followed by their full spelling in English if the acronym needs to be explained to Kiswahili-speaking audiences. In other cases, where the acronym is rather common, adding the fully spelled out form will not add any value but only confuse users. In these cases, the acronym can be used on its own.

Example:
* ANSI (American National Standards Institute)
* ISO (International Standards Organization)
* ISDN
* DSL
* CD
* DVD

## Articles

### Product Names

* Mozilla product names are used without definite or indefinite articles. They are treated as proper names.

## Copyrights and Trademarks

Product names are often trademarked or may be trademarked in the future and are therefore rarely translated.

Before translating any product or component name, please verify that it is in fact translatable and not protected in any way.

Also, bear in mind that the same product may be marketed under different names in different countries.

If in doubt, please contact the Rubric Project Manager.

## Translation of Version Strings

Please use the following guidelines when localizing version strings.

## Gender-neutral Translation

In Kiswahili, gender is most often never specified. . In a sentence such as “Mwanafunzi wa darasa hilo alisherekea,” you have no linguistic clues as to the gender of the student (mwanafunzi).

Only a few verbs in Kiswahili are gender specific. If you need to mention marriage, use a variant of “kufunga ndoa” to indicate that someone is married, rather than “kuoa” (male) or “kuolewa” (female). The other gender-specific verbs involve sexual situations.

Kiswahili does not distinguish gender for nouns, except for pairs that are explicitly about gender: "man/woman", "boy/girl" mvulana/msichana, "sister/brother" dada/kaka, etc.

## Genitive

Is used in grammatical contexts to denote special word categories. It is used in formation of compound terms through formation of conjunctions. Nouns can be modified by other nouns or other categories. There is prototypically a head word that comes before the connector and another one following.

Convention 1 (e.g. Attaching a genitive “s” to (trademarked) product names is not feasible, as it could be interpreted as a modification of such names.)

Example:

| en-US source | Kiswahili target |
| -- | -- |
| Tom’s computer | Kompyuta ya Tom |

## Localised Term vs. English Term

### Inflections

The examples below show how English loanwords inflect for number in Kiswahili

Example:

| en-US source | Kiswahili target|
| -- | -- |
| Videos Files Disks | Video Faili Diski |

### Plural Formation

Kiswahili Plurals are grammatical numbers that refer to more than one of the referent in day to day life.

In Kiswahili, to form the plural of nouns and adjectives depends on the noun class. Kiswahili nouns are divided into 11 classes that generally follow the syntax rules. For most nouns, the prefix before the root tells whether it’s in singular or plural. However, there are some nouns that don’t change in their structure, the change is realized in the syntax. For example we have the noun class of all the nouns that have life* mostly human beings. E.g. Mtu (singular person) watu (plural for people). This class is called M-WA. In this class many nouns have prefix m- in the singular and wa- in the plural. However there are very many irregular nouns that don’t follow this rule. E.g. Rafiki (friend) Daktari (doctor)

Example:

| en-US source | Kiswahili target |
| -- | -- |
| Friends Teachers | Marafiki | Waalimu |

### Verbs and Verb Forms

For US English Mozilla voice, verb tense helps to convey the clarity of Mozilla voice. Simple tenses are used. The easiest tense to understand is the simple present, like we use in this guide. Avoid future tense unless you are describing something that will really happen in the future and the simple present tense is inapplicable. Use simple past tense when you describe events that have already happened.

Kiswahili verbs are often given in the stem form in dictionaries. Two examples of verb stems are 'lala' meaning 'sleep' and 'sema' meaning speak. Various markers are then added or prefixed to the verb stem to change the meaning. One such prefix is ku which is equivalent to the English infinitive or 'to' form of the verb.

So: ku + verb stem gives the infinitive.
'kulala' means to sleep 'kusema' meas'to speak'
Verbs in Kiswahili must end in a suffix and this is shown with the verb 'kujua' meaning to know (verb stem 'jua').
ku (verb prefix) ju (verb stem) a (suffix)
The suffix isn't always 'a' and verbs of Arabic origin end in 'e', 'i' or 'u'. 30

## Headings

Headings should convey as much information as possible about the ensuing text to help readers locate information quickly.

### Capitalization

* In English headings all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions (e.g. that, until, which) are capitalized.

### In Lists and Tables

* Whenever possible, headings of lists and tables should consist of one or two words, preferably active nouns. They should be concise, even if the source uses a longer phrase.

## Hyphenation and Compound formation

### General Hyphenation Rules

The hyphen is used to divide words between syllables, to link parts of a compound word, and to connect the parts of an inverted or imperative verb form.

Example:

| US English | Kiswahili |
| -- | -- |
| Auto-connect | Unganisha-kiotomatiki |

### English Compounds

Generally, compounds should be understandable and clear to the user. Overly long or complex compounds should be avoided. Keep in mind that unintuitive compounds are ultimately an intelligibility and usability issue.

Noun and verb compounds are a frequent word formation strategy in English. Product user interfaces, online help, and documentation contain a number of such examples. However, not all languages use compounding to create complex word meanings.

Kiswahili makes frequent use of compounds. However, you should avoid making up new compound terms, unless the meaning is obvious, because end users will usually not have an easy way to disentangle the invented phrase. You should certainly leave spaces between the words that make up a compound, and the use of “-a” (wa/ cha/ la/ za/ ya, etc) will often clarify the meaning of the new term.

Example:

| en-US source | Kiswahili target |
| -- | -- |
| Internet Accounts  Workgroup Administrator File Transfer Protocol | Akaunti za Wavuti | Msimamizi wa kikundikazi | Itifaki ya Utumiaji Faili |

### Product Names

Mozilla product names and non-translated feature names are used without definite or indefinite articles in the English language. We treat them in this way;

Product names are often trademarked or may be trademarked in the future and are therefore rarely translated. Occasionally, feature names are trademarked, too (e.g. IntelliSense™). Before translating any application, product, or feature name, please verify that it is in fact translatable and not protected in any way. This information needs to be obtained from the Product Group.

## Indexes

### Capitalization, Prepositions and Articles

* Avoid starting an entry with a preposition or an article because of their unfavorable effect on the overall sorting order and general legibility of the index.

## Prepositions

Translate English prepositions according to their context and not too literally.

## Procedures and Syntax

### Descriptors

* Use the descriptor (menu, button, command, etc.) only if the source text uses it or if it is needed for clarifying the position of a term in the interface.

## Procedural Syntax

* In procedural text, which tells the user to perform certain actions in a certain number of steps, the order in which interface terms are to appear in the translation is usually top to bottom (i.e. menu, command, dialog box, dialog box controls). Maintain this sequence unless there are technical reasons preventing it.

Example:
In the "Extras" menu, click "Settings" and then "Music files".
Procedural Headings

### Status Bar Messages

* Please make sure you adequately capture the meaning of messages when translating.
* If you think a source status bar message is ambiguous, query it to make sure you provide the reader with the right information: if you cannot understand it, they are also not certain to. There is nothing more annoying than "help" that doesn't!

## Punctuation

### Commas and Other Common Punctuation Marks

#### In Lists and Tables

* Do not use a comma after bulleted points.
* If the original source entry contains a period, leave it. If the source text does not contain a period, but you split the translation into several independent sentences, put a period at the end of each sentence.
* The same convention applies to captions and callouts

#### Comma vs. Period in Numerals

* English uses a period as decimal separator.

## Typographic Conventions

In software strings, you must use two double quotes (""xxx"") to denote names within a string. If you only use a single double quotes ("xxx"), this will cause problems with the compilation, as strings are generally denoted by double quotes. Avoid using quotes whenever possible.
