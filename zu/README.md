# Style Guide Zulu (zu)

## Introduction

This style guide is intended for translators working on Mozilla projects. It provides in-depth information about the quality standards expected by Mozilla for the translation of all product components. All translators should read this guide before commencing any translation work.

This guide addresses general translation issues and specifies certain rules of style and usage specific to your language. It should be used as a guideline to avoid common typographic errors, and to maintain consistent terminology and writing style across a project’s components and indeed a product range. The guide should be used in conjunction with the current and previous product-specific glossaries, glossaries of other products of a product range, and the industry standard platform-specific glossaries, such as those provided by Microsoft.

This document may be updated or completed in the course of translation. Where no specific instruction or recommendation is specified, translators should use the phrasing and style that comply with industry standards.

## General Style Considerations

## Style guidelines

Follow these basic rules:

* Original American English text tends to be rather casual. In technical texts Zulu tends to adopt the style of the original text because often technical vocabulary is lacking.
* Try to avoid long, nested sentence constructions. If necessary, break up the original sentence and regroup it syntactically.
* Use wording that is succinct, unambiguous, and free of jargon.
* Produce a translation that sounds as it if was originally written in your language, i.e. avoid following the original source sentence structure too closely.
* Always bear in mind who your target audience is (i.e. an experienced computer user, a beginner, or a combination of both groups).
* Use a consistent style throughout all product components and across a product range, to ensure that all Mozilla products can be linguistically identified as part of a group of products.

### Style guidelines specific to Mozilla products

* Please refer to the reference documentation supplied by Mozilla and any Mozilla style guides and make a note of anything significant and specific that should be noted with respect to Mozilla.

### Reference terminology

These normative sources must be adhered to. Any deviation from them automatically fails a string in most cases. When more than one solution is allowed in these sources, look for the recommended one in other parts of the Style Guide.

1. Pan South African Language Board, 2008; Imithetho Yokubhala Nobhalomagama LwesiZulu (Spelling and Orthography Rules Manual)
2. Textbook of Zulu Grammar, Clement M. Doke

The following terminology sources should be used as reference in the translation:

These sources are meant to provide supplementary information, background, comparison, etc.

1. C. L. S. Nyembezi & G. R. Dent Scholar’s Zulu Dictionary
2. M. O. Mbatha Isichazamazwi SesiZulu
3. C. M. Doke et al English – Zulu Dictionary
4. Oxford School Dictionary English – Zulu

### Terminology not found in the glossary or style guide

Please make a log of any terms not found in the glossary or style guide that are used frequently in the materials. Return this log to Rubric so that the terms can be incorporated into the glossary. This increases consistency in large projects.

## Abbreviations

### General Abbreviations

Avoid the use of non-standard abbreviations such as min. for minutes.  Where no appropriate abbreviation exists, use the whole word. There are very few abbreviations, if any, in Zulu, for example, AM and PM are replaced with full words in Zulu, i.e. Ekuseni (morning) and Ntambama (afternoon) respectively. But for easy readability these English abbreviations are also acceptable in Zulu

### Measurements and Numerals

Be careful of the difference in use between periods and commas as decimal markers in different languages.

### Filename Extensions

Filename extensions and graphic formats referenced by filename extensions such as BMP, GIF, HTML, PNG, TIFF must not be translated.

## Acronyms

Acronyms are made up of the initial letters of several words that are represented by these letters. Some well-known examples are WYSIWYG (What You See Is What You Get), OLE (Object Linking and Embedding), or RAM (Random Access Memory).

Use recognised translations of acronyms where these exist, but avoid creating new, non-standard acronyms.

If the source text does not do so, and if possible, spell out an abbreviation or acronym the first time it is used in a document, followed by that abbreviation or acronym in parentheses.

    Examples:
    Data Access Objects (DAO)
    ActiveX data objects (ADO)

## Articles

### Product Names

* [Mozilla] product names are used without definite or indefinite articles.  Because Zulu, is an agglutinative language, it does not have articles standing on their own, articles are incorporated as prefixes, for example the page (ikhasi). Here ‘i’ is ‘the’ and ‘khasi’ is ‘page.’
* Localized Feature Names
* Translated feature names are handled to fit the structure of the language through prefixes, locative morphemes and so on.
* Example ikhompyutha, ehostela, ehhotela etc

### Articles for English Borrowed Terms

When faced with an English loan word previously used in Microsoft products, consider the following options:

Motivation: Does the English word have any formally motivated features that would allow a straightforward integration into the noun class system of IsiZulu language? English words that are loaned to IsiZulu are categorized as noun class 5(a), therefore they take the (i-) prefix.

Analogy: Is there an equivalent IsiZulu term whose article could be used?

Frequency: Is the term used in other technical documentation? If so, what article is used most often?

The internet may be a helpful reference here.
* Example: (+) i-Microsoft, i-browser, i-firefox etc.

## Copyrights and Trademarks

Product names are often trademarked or may be trademarked in the future  and are therefore rarely translated. Before translating any product or component name, please verify that it is in fact translatable and not protected in any way. If in doubt, please contact the Rubric Project Manager.

The same product may be marketed under different names in different countries. One solution is to add a note saying "Marketed as  -------- in the UK etc" the first time the product is mentioned, and then continue to use the name as given in the text.
Copyright protection is granted to any original work of authorship fixed in any tangible medium of expression from which it can be perceived, reproduced, or communicated. The original author should be credited.
Example: Onke amalungelo agodliwe, noma amalungelo okushicilela ngawabakwa-Micro

## Translation of Version Strings

* Please use the following guidelines when localizing version strings:

Please follow structure of the source

## Gender-neutral Translation

Sex or gender is not a grammatical feature in IsiZulu, nevertheless there are several ways of conveying gender in the nouns.

| (+)Common | feminine | Masculine |
| -- | -- | -- |
| Inkomo | inkomazi | inkunzi |
| Inja | injakazi | ichalaha |

The indication of sex gender with personal nouns, these nouns are followed by the descriptive possessives formed form the Class 4 nouns, „isilisa‟ (male) and „isifazane‟ (female person).

    Isibonelo:
    Umuntu wesilisa
    Umuntu wesifazane

## Genitive

A possessive is a word which qualifies a noun. In Zulu possessives are small words that conform to concordial agreement, i.e. the prefix of a noun class determines the form that the possessive assumes. Consider the following examples:

    Umshanelo wami (my broom)
    Umkhumbi kaHulumeni (a ship of the Government)
    Amadoda abo (their husbands)

The possessive relates to the noun, i.e. something that is possessed to that which possesses it.

## Localized term vs. English term

The preferred language in the computer world is English. Therefore, a translator frequently has to decide whether to use the (correct, but obsolete) translation or simply the English word.

* Gender : Sex or gender is not a grammatical feature in IsiZulu.
* Inflections:  Inflections can be translated in the Zulu structure and does not follow English grammatical rules
* Plural Formation: Unlike in English where plural form is indicated by a suffix, Zulu indicates plural form by a prefix. This is directed by which noun class the word falls into. Most English loan words are in noun class 5 and their plurals are in noun class 6. For example, ikhamera, amakhamera.
* Verbs and Verb Forms: Consistency is key in the translation of verbs. If it is grammatical to omit the predicate “be” in Zulu, you can omit it in error messages, but you should be consistent in your usage across all error messages. Be concise without changing the meaning of the source string. Many technical verbs have no equivalents and are often transliterated, for example, download dawuniloda.

## Headings

Headings should convey as much information as possible about the ensuing text to help readers locate information quickly.

### Capitalization

In English headings all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions (e.g. that, until, which) are capitalized. The same applies in Zulu, words at the beginning of a sentence are capitalized, pronouns (names of people, surnames, places, languages, months, names of God and gods, days of the week, organizations, headings and titles , books in the bible etc

### In Lists and Tables

Whenever possible, headings of lists and tables should consist of one or two words, preferably active nouns. They should be concise, even if the source uses a longer phrase.

## Hyphenation and Compound formation

General Hyphenation Rules The hyphen is used to divide words between syllables, to link parts of a compound word, and to connect the parts of an inverted or imperative verb form.
Example: (+) Nkosazane Dlamini-Zuma

### En Dash

The en dash is used as a minus sign, usually with spaces before and after.

The en dash is also used in number ranges, such as those specifying page numbers. No spaces are used around the en dash in this case.

### Em Dash

The em dash should only be used to emphasize an isolated element or introduce an element that is not essential to the meaning conveyed by the sentence. When a speaker trails away from a certain idea and eventually comes back

Example: (+) Uthe uMongameli Zuma – ngenkathi ethula iNkulumo yeSizwe – asiqikelele ukuba sisebenzise ugesi ngokucophelela.

### Ellipses (Suspension Points)

This means that certain words have been omitted
Example: (+) Lala sithandwa … uphumule

### English Compounds

If there is an equivalent it is used, or else the closest equivalent is used following Zulu grammatical rules.

### Product Names

#### Compounds with Acronyms, Abbreviations or Numerals

##### Acronyms

Acronyms and abbreviations are very rare in Zulu. The words are normally spelt out. The acronyms that have been accepted in isiZulu do not follow the rule of “first letters of a set of other words”. A generalization is that acronyms that have become part of the everyday lexicon take an initial upper case with the rest of the letters in lower case, for example:

    uMzukazwe - where uM is taken from UMkhandlu
    - zu from wesiZulu
    -kazwe from kazwelonke.

Caution: Do not include a generic term after an acronym or abbreviation if one of the letters in the acronym stands for that term. Even though this might occur in the US-English version, it should be “corrected” in the localized version. The following examples show the redundancy in red for English terms.

    (-) RPC call i-RPC
    (-) HTML language i-HTML
    (-) TCP/IP-Protocol i-TCP
    (-) PIN Number i-PIN

##### Numerals

Zulu spells out numbers, time etc. Therefore digits are adopted into the language and the source text is followed. Although that is the case, numbers often cannot stand on their own, a prefix will be needed. For example, you have 8 new message will be” Unemiyalezo eyisi-8 emisha. In the case of an unidentified number, for example: You have {{value}} new message, because groups of numbers take different prefixes, it is best to use the neutral prefix ‘ngu’, rather than a prefix that is specifically used for 8, 10, 50 etc. ‘Unemiyalezo engu-{{value}} emisha’. This will be appropriate for any number.

## Indexes

### Capitalization, Prepositions and Articles

Avoid starting an entry with a preposition or an article because of their unfavorable effect on the overall sorting order and general legibility of the index.

## Key Names

* On the first mention, use the definite article and "key" in conjunction with the key name, for example, "the ESC key". On all subsequent references, refer to the key only by its name, for example, "Click ESC".
* As a rule of thumb, be frugal in your use of the word "key". Use it if the key name appears alone in the sentence and the actual key name does not appear on the keyboard.

## Prepositions

Pay attention to the correct use of prepositions in translations. Influenced by the English language, many translators omit them or change the word order. In Zulu there are no prepositions. The idea of the so-called prepositions in English is incorporated into the verb or as an adverb or locative.

### Pronouns

There are four types of pronouns in Zulu, namely, Absolute, Demonstrative, Quantitative and Qualificative.

Example:

(+) Absolute: This indicates a certain noun, it does not describe, or limit it but it is rather a „concord‟ converted into a complete word. Abantu = bona, (bona banamanga)

Demonstrative: There are three positional types of demonstratives, „this or these,‟ „that or those, and that „yonder and those yonder‟
(+) Ngiyabathanda laba
(+) Ngiyabathanda labo
(+) Ngiyabathanda labaya

Quantitative: There are three main types of quantitative pronouns, all, only, and the numeral roots with a special pronominal prefix in each case. -nke, -dwa, -bili, thathu, ne, hlanu njll
(+) Wonke umuntu uyahamba
(+) Ufuna ukudla yedwa
(+) Bakhuluma bobabili

Qualificative pronouns: there is no inherent change in the adjective, relative or numerative to form qualificative pronouns.
Adjective: (+) Omkhulu ufikile
Relative: (+) Ngifuna lo obomvu
Enumerative: (+) Ufuna ziphi?

## Procedures and Syntax

Syntax and register differ between IsiZulu and English in the following ways: IsiZulu has a basic SVO word order, relative clauses and possessive phrases follow the head noun and auxiliaries precede the verb.

Example: Ingane yami enhle iya esikole okokuqala namuhla.

### Descriptors

* Use the descriptor (menu, button, command, etc.) only if the source text uses it or if it is needed for clarifying the position of a term in the interface.

### Procedural Syntax

* In procedural text, which tells the user to perform certain actions in a certain number of steps, the order in which interface terms are to appear in the translation is usually top to bottom (i.e. menu, command, dialog box, dialog box controls). Maintain this sequence unless there are technical reasons preventing it.
* Example:
* In the "Extras" menu, click "Settings" and then "Music files".

### Procedural Headings

#### Status Bar Messages

* Please make sure you adequately capture the meaning of messages when translating.
* If you think a source status bar message is ambiguous, query it to make sure you provide the reader with the right information: if you cannot understand it, they are also not certain to. There is nothing more annoying than "help" that doesn't!

## Punctuation

### Commas and Other Common Punctuation Marks: Please refer to the official Pan South African Language Board, 2008; Imithetho Yokubhala Nobhalomagana LwesiZulu (Spelling and Orthography Rules Manual)

### In Lists and Tables

* Do not use a comma after bulleted points.
* If the original source entry contains a period, leave it. If the source text does not contain a period, but you split the translation into several independent sentences, put a period at the end of each sentence.
* Never put a period after just one word.
* The result of this method may be that some entries within one table are with and some entries are without a final period. From a technical point of view this is acceptable.
* The same convention applies to captions and callouts

### Comma vs. Period in Numerals

English uses a period as decimal separator. Please follow source text.

### Version Numbers

* Please follow source text.

## Typographic Conventions

Consistent use of typographic conventions in documentation helps users locate and interpret information easily. Generally speaking, the source format should be followed as closely as possible, i.e. terms with a particular formatting in the source should have the same formatting in the translation.

If menu, command, option, etc. names are highlighted by bold print in the source, use bold print for the corresponding translated terms. If menu, command, option, etc. names are put in quotes in the source, use quotes for the corresponding terms in the translation.

Note that in software strings, you must use two double quotes (""xxx"") to denote names within a string. If you only use a single double quotes ("xxx"), this will cause problems with the compilation, as strings are generally denoted by double quotes.

## Wizard Names

Should be translated accordingly, if necessary.
