# Style Guide Hausa (ha)

## Introduction

This style guide is intended for translators working on Mozilla projects. It provides in-depth information about the quality standards expected by Mozilla for the translation of all product components. All translators should read this guide before commencing any translation work.

This guide addresses general translation issues and specifies certain rules of style and usage specific to your language. It should be used as a guideline to avoid common typographic errors, and to maintain consistent terminology and writing style across a project’s components and indeed a product range. The guide should be used in conjunction with the current and previous product-specific glossaries, glossaries of other products of a product range, and the industry standard platform-specific glossaries, such as those provided by Microsoft.

This document may be updated or completed in the course of translation. Where no specific instruction or recommendation is specified, translators should use the phrasing and style that comply with industry standards.

## General Style Considerations

### Style guidelines

Follow these basic rules:

* Original American English text tends to be rather casual. In technical texts Hausa tends to adopt the style of the original text because often technical vocabulary is lacking.
* Try to avoid long, nested sentence constructions. If necessary, break up the original sentence and regroup it syntactically.
* Use wording that is succinct, unambiguous, and free of jargon.
* Produce a translation that sounds as it if was originally written in your language, i.e. avoid following the original source sentence structure too closely.
* Always bear in mind who your target audience is (i.e. an experienced computer user, a beginner, or a combination of both groups).
* Use a consistent style throughout all product components and across a product range, to ensure that all Mozilla products can be linguistically identified as part of a group of products.

### Style guidelines specific to Mozilla products

* Please refer to the reference documentation supplied by Mozilla and any Mozilla style guides and make a note of anything significant and specific that should be noted with respect to Mozilla.

### Reference terminology

The following terminology sources should be used as reference in the translation:

* Product-specific glossary, to ensure consistency across all product components.

### Terminology not found in the glossary or style guide

* Please make a log of any terms not found in the glossary or style guide that are used frequently in the materials. Return this log to Rubric so that the terms can be incorporated into the glossary. This increases consistency in large projects.

## Abbreviations

### General Abbreviations

Avoid the use of non-standard abbreviations such as min. for minutes.  Where no appropriate abbreviation exists, use the whole word. There are very few abbreviations, if any, in Hausa, for example, AM and PM are replaced with full words in Hausa. For example, app. (aikace-aikace). But for easy readability these English abbreviations are also acceptable in Hausa

* URL = URL
* webM = webM

### Measurements and Numerals

* Be careful of the difference in use between periods and commas as decimal markers in different languages.

### Filename Extensions

* Filename extensions and graphic formats referenced by filename extensions such as BMP, GIF, HTML, PNG, TIFF must not be translated.

## Acronyms

Acronyms are made up of the initial letters of several words that are represented by these letters. Some well-known examples are WYSIWYG (What You See Is What You Get), OLE (Object Linking and Embedding), or RAM (Random Access Memory).

Use recognised translations of acronyms where these exist, but avoid creating new, non-standard acronyms.

If the source text does not do so, and if possible, spell out an abbreviation or acronym the first time it is used in a document, followed by that abbreviation or acronym in parentheses.

**Examples:**

* Data Access Objects (DAO)
* ActiveX data objects (ADO)

## Articles

### Product Names

[Mozilla] product names are used without definite or indefinite articles.  Because Hausa, is an agglutinative language, it does not have articles standing on their own, articles are incorporated as prefixes, for example the page (shafin). Here ‘n’ is ‘the’ and ‘shafi’ is ‘page.’

### Articles for English Borrowed Terms

When faced with an English loan word previously used in Microsoft products, consider the following options:

* Motivation: Does the English word have any formally motivated features that would allow a straightforward integration into the noun class system of Hausa language? English words that are loaned to Hausa are categorized as noun class 5(a), therefore they take the (i-) prefix.
* Analogy: Is there an equivalent Hausa term whose article could be used?
* Frequency: Is the term used in other technical documentation? If so, what article is used most often?

The internet may be a helpful reference here.

* Example: (+) i-Microsoft, i-browser, i-firefox etc.

## Copyrights and Trademarks

Product names are often trademarked or may be trademarked in the future  and are therefore rarely translated. Before translating any product or component name, please verify that it is in fact translatable and not protected in any way. If in doubt, please contact the Rubric Project Manager.

The same product may be marketed under different names in different countries. One solution is to add a note saying "Marketed as  -------- in the UK etc" the first time the product is mentioned, and then continue to use the name as given in the text.

opyright protection is granted to any original work of authorship fixed in any tangible medium of expression from which it can be perceived, reproduced, or communicated. The original author should be credited.
Example: Onke amalungelo agodliwe, noma amalungelo okushicilela ngawabakwa-Micro

## Translation of Version Strings

* Please use the following guidelines when localizing version strings:

Please follow structure of the source

### Gender-neutral Translation

Sex or gender is a grammatical feature in Hausa. Therefore, in Hausa we have the following classification:

| (+)Common | feminine | Masculine |
| - | - | - |
| ita | ita (subject) | shi (subject)(ita = she; shi = he) |
| su | su (subj/plu) | su (subj/plu)(su = They) |
| -ta | -ta (object) | -sa (sing/obj)(used as an affix) |
| -su | -su (obj/plu) | -su (obj/plu)(su = them) |
| *** | -mu (obj/plu) | -mu (obj/plu)(mu = us) |
| *** | -ku (obj/plu) | -ku (obj/plu)(ku = you) |

## Genitive

A possessive is a word which shows ownership. In Hausa possessives are used as affixes to the noun i.e. the suffix of a noun class determines the form that the possessive assumes. Consider the following examples:

* Tsintsiyata (my broom)
* Jirgin-ruwan Gwamnati (a ship of the Government)
* Mijinsu (their husbands)
* Matata (my wife)
* Mijina (My husband)  ( Would suggest using a masculine noun as an example here to show the effect of variation in gender; may use “Mijina (my husband)

The possessive relates to the noun, i.e. something that is possessed to that which possesses it, depending on the gender and/or number of what is possessed

## Localized term vs. English term

The preferred language in the computer world is English. Therefore, a translator frequently has to decide whether to use the (correct, but obsolete) translation or simply the English word.

### Gender

Sex or gender is a necessary grammatical feature in Hausa.

### Inflections

Inflections can be translated in the Hausa structure and does not follow English grammatical rules

### Plural formation

Unlike in English where plural form is indicated by a suffix, Hausa indicates plural in various forms. This is directed by which noun class the word falls into. For example, the plural form of the “riga” (shirt) is “riguna”; while “yaro” (boy) is “yara”.

### Verbs and Verb Forms

Consistency is key in the translation of verbs. If it is grammatical to omit the predicate “be” in Hausa, you can omit it in error messages, but you should be consistent in your usage across all error messages. Be concise without changing the meaning of the source string. Many technical verbs have no equivalents and are often transliterated, for example, TCP socket is translated as “soket na TCP”

## Headings

Headings should convey as much information as possible about the ensuing text to help readers locate information quickly.

### Capitalization

In English headings all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions (e.g. that, until, which) are capitalized. The same applies in Hausa, words at the beginning of a sentence are capitalized, pronouns (names of people, surnames, places, languages, months, names of God and gods, days of the week, organizations, headings and titles , books in the bible etc

### In Lists and Tables

Whenever possible, headings of lists and tables should consist of one or two words, preferably active nouns. They should be concise, even if the source uses a longer phrase.

## Hyphenation and Compound formation

General Hyphenation Rules The hyphen is used to divide words between syllables, to link parts of a compound word, and to connect the parts of words

Example: (+) aikace-aikace.

### En Dash

The en dash is used as a minus sign, usually with spaces before and after.

The en dash is also used in number ranges, such as those specifying page numbers. No spaces are used around the en dash in this case.

### Em Dash

The em dash should only be used to emphasize an isolated element or introduce an element that is not essential to the meaning conveyed by the sentence. When a speaker trails away from a certain idea and eventually comes back

Example: (+) Manajan kamfanin – wanda kuma shi ne uban yaron – ya musanta wannan magana.

### Ellipses (Suspension Points)

This means that certain words have been omitted

Example: (+) Kowa ya bar gida….

### English Compounds

If there is an equivalent it is used, or else the closest equivalent is used following Hausa grammatical rules.

## Compounds with Acronyms, Abbreviations or Numerals

### Acronyms

Acronyms and abbreviations are very rare in Hausa. The words are normally spelt out. Where acronyms are used, normally the English word is retained. A generalization is that acronyms that have become part of the everyday lexicon are all in upper case.

**Caution:** Do not include a generic term after an acronym or abbreviation if one of the letters in the acronym stands for that term. Even though this might occur in the US-English version, it should be “corrected” in the localized version. The following examples show the redundancy in red for English terms.

* (-) RPC call i-RPC
* (-) HTML language i-HTML
* (-) TCP/IP-Protocol i-TCP
* (-) PIN Number i-PIN

### Numerals

Hausa spells out numbers, time etc. Therefore digits are adopted into the language and the source text is followed. Numbers can also stand on their own For example, you have 8 new message will be “Kana da saƙo guda 8. In the case of an unidentified number, for example: You have {{value}} new message, it is best to use the neutral word like “wasu” (some). Then the translation should be “kana da wasu saƙwanni”.

## Indexes

### Capitalization, Prepositions and Articles

* Avoid starting an entry with a preposition or an article because of their unfavorable effect on the overall sorting order and general legibility of the index.

## Key Names

* On the first mention, use the definite article and "key" in conjunction with the key name, for example, "the ESC key". On all subsequent references, refer to the key only by its name, for example, "Click ESC".
* As a rule of thumb, be frugal in your use of the word "key". Use it if the key name appears alone in the sentence and the actual key name does not appear on the keyboard.

## Prepositions

Pay attention to the correct use of prepositions in translations. Influenced by the English language, many translators omit them or change the word order. In Hausa, prepositions play a vital role as they stand alone in the sentence as do English prepositions. For example, “The bird on the tree” should be “Tsuntsu yana kan bishiya”.

## Pronouns

Pronouns in Hausa are divided just like the English ones. Having number (singular/plural); gender (masculine/feminine); case (subject/object). This classification, however, does not always affect the verb form. Unlike English language, however, sometimes nouns and pronouns are used together within the same sentence. For example, “Yaro ya (pronoun) na wasa” literally means “The boy (he) is playing.

It is also important to avoid the cumbersome use of ki/ka when addressing users. It is better to use only the masculine form ‘ka’ e.g. Ka tabbata? (Are you sure?)

## Procedures and Syntax

Syntax and register differ between Hausa and English in the following ways: Hausa has a basic SVO word order, relative clauses and possessive phrases follow the head noun and auxiliaries precede the verb.

**Example:**

    Na karanta sabon littafi
    ( I )  (read)   (a new book)

### Descriptors

* Use the descriptor (menu, button, command, etc.) only if the source text uses it or if it is needed for clarifying the position of a term in the interface.

### Procedural Syntax

* In procedural text, which tells the user to perform certain actions in a certain number of steps, the order in which interface terms are to appear in the translation is usually top to bottom (i.e. menu, command, dialog box, dialog box controls). Maintain this sequence unless there are technical reasons preventing it.
* Example:
    * In the "Extras" menu, click "Settings" and then "Music files".

### Status Bar Messages

* Please make sure you adequately capture the meaning of messages when translating.
* If you think a source status bar message is ambiguous, query it to make sure you provide the reader with the right information: if you cannot understand it, they are also not certain to. There is nothing more annoying than "help" that doesn't!

### Usage of "Select"

* Please follow source text

### Usage of "Click"

* Please follow source text

## Punctuation

Punctuation marks serve same purpose and function as the English punctuation marks.

### In Lists and Tables

* Do not use a comma after bulleted points.
* If the original source entry contains a period, leave it. If the source text does not contain a period, but you split the translation into several independent sentences, put a period at the end of each sentence.
* Never put a period after just one word.
* The result of this method may be that some entries within one table are with and some entries are without a final period. From a technical point of view this is acceptable.
* The same convention applies to captions and callouts

### Comma vs. Period in Numerals

* English uses a period as decimal separator. Please follow source text.

### Version Numbers

* Please follow source text.

## Typographic Conventions

Consistent use of typographic conventions in documentation helps users locate and interpret information easily. Generally speaking, the source format should be followed as closely as possible, i.e. terms with a particular formatting in the source should have the same formatting in the translation.

If menu, command, option, etc. names are highlighted by bold print in the source, use bold print for the corresponding translated terms. If menu, command, option, etc. names are put in quotes in the source, use quotes for the corresponding terms in the translation.

Note that in software strings, you must use two double quotes (""xxx"") to denote names within a string. If you only use a single double quotes ("xxx"), this will cause problems with the compilation, as strings are generally denoted by double quotes.

## Wizard Names

Should be translated accordingly, if necessary.
