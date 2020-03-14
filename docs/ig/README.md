# Style Guide Igbo (ig)

<!-- markdownlint-disable MD037 -->

## Introduction

This style guide is intended for translators working on Mozilla projects. It provides in-depth information about the quality standards expected by Mozilla for the translation of all product components. All translators should read this guide before commencing any translation work.

This guide addresses general translation issues and specifies certain rules of style and usage specific to your language. It should be used as a guideline to avoid common typographic errors, and to maintain consistent terminology and writing style across a project’s components and indeed a product range. The guide should be used in conjunction with the current and previous product-specific glossaries, glossaries of other products of a product range, and the industry standard platform-specific glossaries, such as those provided by Mozilla.

This document may be updated or completed in the course of translation. Where no specific instruction or recommendation is specified, translators should use the phrasing and style that comply with industry standards.

## General Style Considerations

### Style guidelines

Follow these basic rules:

* Original American English text tends to be rather casual. For Igbo, use a neutral style, with the informal form of address.
* Try to avoid long, nested sentence constructions. If necessary, break up the original sentence and regroup it syntactically.
* Use wording that is brief and unambiguous.
* Use a consistent style throughout all product components and across a product range, to ensure that all Mozilla products can be linguistically identified as part of a group of products.

### Style guidelines specific to Mozilla products

* Please refer to the reference documentation supplied by Mozilla and any Mozilla style guides and make a note of anything significant and specific that should be noted with respect to Mozilla.
* Please ensure to use a recently published dictionary (recommended source: Pharos 5-1 CD-ROM / Pharos Online list of technical dictionaries).
* Before returning any files, please be sure to run a recent Igbo spellchecker (in case of disagreements, the HAT spelling will be followed).

### Reference terminology

The following terminology sources should be used as reference in the translation:

* Product-specific glossary, to ensure consistency across all product components.
* Previous version product-specific glossary, to ensure consistency between versions.
* Glossaries of other Mozilla products, to ensure cross-product consistency.
* Microsoft glossaries, to ensure adherence to some of the industry standards. The glossaries can be found at:[http://www.microsoft.com/Language](http://www.microsoft.com/Language).

### Terminology not found in the glossary or style guide

* Please make a log of any terms not found in the glossary or style guide that are used frequently in the materials. Return this log to Rubric so that the terms can be incorporated into the glossary. This increases consistency in large projects.

## Abbreviations

### General Abbreviations

* Avoid the use of non-standard abbreviations. Where no appropriate abbreviation exists, rather use the whole word.
* Where there are space restrictions in the UI, abbreviations can be used. These must be entered into the glossary with the full translation, and should be approved by the customer.
* The compounds below contain either an abbreviation or a numeral followed by a component name. The abbreviation or numeral is marked in red in the English example. The Igbo example below show how such constructions should be translated.

| English example | Igbo example |
| -- | -- |
| CD-ROM drive | Draịvụ CD-ROM |
| 2-D gridlines | Ahịrị ngidi 2D |
| 24 bit color value | Mpụtara agba bit 24 |
| 3.5 Floppy | Flọpị 3.5 |
| 51/4-inch Floppy | Flọpị 5¼-inchi |
| 35mm slides | ngammịfe nwayọ nwayọ 35 mm |

Note the difference between the styling of “Flọpị 5¼-inchi” and “nwayọ nwayọ 35 mm”, which results from the fact that "mm" is regarded a symbol and not an abbreviation. Igbo officially uses the metric (SI) system, which requires as space between a figure and the accompanying symbol.

### Measurements and Numerals

In addition to common measurements such as km, m, cm, mm, etc., the following abbreviations are used in technical documentation:

| Measurement | Abbreviation | Comment/Example |
| -- | -- | -- |
| Gigabyte | GB | Do not use Gbyte |
| Kilobyte | KB | Do not use Kbyte |
| Megabyte | MB | Do not use Mbyte |

**Important:** The old rule that all numerals up to 12 must be spelled out is no longer valid. Use your best judgment given the at hand, especially when a combination of numbers is involved.

### Filename Extensions

* Filename extensions and graphic formats referenced by filename extensions such as BMP, GIF, HTML, PNG, TIFF must not be translated.

## Acronyms

Acronyms are made up of the initial letters of several words that are represented by these letters. Some well-known examples are WYSIWYG (What You See Is What You Get), OLE (Object Linking and Embedding), or RAM (Random Access Memory).

If an acronymn has an official or commonly recognised translation in Igbo (e.g. if it is present in a general dictionary), use the Igbo acronymn.  Otherwise, use the English acronymn.  If the acronymn is followed in English by a full form, retain the acronymn in English and translate the full form into Igbo.

**IMPORTANT:** Do not translate an abbreviation or acronym that is a trademark, unless it is the official translation of that trademark.

Use recognised translations of acronyms where these exist, but avoid creating new, non-standard acronyms.

## Articles

### Product Names

Mozilla product names are used without definite or indefinite articles. Product names and non-translated feature names are considered proper nouns and are used without definite or indefinite articles in English.

Note that the product and feature names are regarded as proper nouns. They are not to be translated.

| English example | Igbo example |
| -- | -- |
| Windows Mail shares your Internet Connection settings with Internet Explorer | Ozi windo na ekekọrịta ntọala Njikọ Ịntanetị gị n’etiti nchọnchọ Ịntanetị |
| Website addresses will be sent to Microsoft | A ga-eziga adreesị weebụsaịtị na Microsọft |

By contrast, translated feature names are used with a definite or indefinite article as they are not treated as proper names.

| English example | Igbo example |
| -- | -- |
| Hide the Task Manager when it is minimized | Zoo Ihe Njikwa Ọrụ mgbe ewedatara ya |
| Check for updates in your installed Media Player's language | Lee maka mwelite n’asụsụ nke Ngwa Egwu gị etinyere |

## Copyrights and Trademarks

Product names should not be translated unless the client requests it.

Copyright protection is granted to any original work of authorship fixed in any tangible medium of expression from which it can be perceived, reproduced, or communicated.

| English text | Igbo translation |
| -- | -- |
| Copyright | Ikike onwunwe ihe |
| All rights reserved | Echekwara ikike niile |

## Translation of Version Strings

* Please use the following guidelines when localizing version strings:
* Version strings that contain copyright information should always be translated.

In version strings containing feature names that are trademarked, the feature names that are trademarked should not be translated.

## Gender-neutral Translation

You should always recognize your audience’s sensitivity to male and female stereotypes. Instead of stressing gender differences or reinforcing stereotypical distinctions between men and women, use language that is as neutral as possible. The neutral approach also applies to the localization of scenarios, comparisons, examples, illustrations, and metaphors.

Create a balance when assigning roles and functions to men and women (active vs. passive roles, leading vs. secondary roles, technical vs. non-technical professions, and so on). Scenarios, pictures, metaphors, and comparisons should be based on areas and attributes common to both genders.

Instead of using phrases which mention the two genders separately, use a general term that includes both genders such as “people,” “users,” or “persons.”

Avoid writing sentences that refer to a single person whose gender is unknown. You can often avoid this situation by rewriting the sentence to make the subject plural. In cases where a reference to a single person is impossible to avoid, do not use “he or she,” “him or her,” or “his or hers.” The language in Microsoft products should sound natural, as if part of a spoken conversation. Also, generally avoid the use of slashes to combine both genders (although sometimes exceptions are made - see table below).

Use the following strategies to avoid the use of overtly gender-biased expressions:

| Linguistic method | Example |  Context |
| -- | -- | -- |
| Use a Neutral noun | person, leader, team lead, expert, employee, user | Concept descriptions, explanations |
| Combine both genders by means of a slash | he/she, s/he | Only in exceptional cases such as License Terms, sometimes in tables (headers or column/row titles, for example) |

Nouns with gender bias such as `nwoke`, man, are generally replaced with gender neutral ones like `onye`, person, `mmadụ`, person, `ndị`, people etc. There is no gender distinction in Igbo pronouns. They have neutral reference. E.g. ‘Ọ dị mma.’ , can be translated as ‘it’s fine, she’s fine, he’s fine.’

## Localized term vs. English term

The most common language of terminology in the computer world is English. However, it is quite unnatural in Igbo to use English words in an Igbo sentence (except for product names and acronyms).  Resist the temptation to borrow an English word as-is except in pluralising which we most times leave as it is.  Find out what the word means, and create a term that a reasonably intelligent Igbo reader will understand.

### Gender

Many terms in circulation in the high tech industry have been adopted from English. They must follow Igbo grammar and syntax rules.

### Inflections

The examples below show how English loanwords inflect for number in Igbo.

    CD
    CD-ROM
    HTML
    HTTP
    SIM

### Verbs and Verb Forms

Do not use an English verb as loan word in Igbo.

## Headings

Headings should convey as much information as possible about the ensuing text to help readers locate information quickly. If in English the heading begins with a gerund, try to use a nominalized form in Igbo.

| English example | Igbo example |
| -- | -- |
| Sending a file | Izipu faịlụ |
| Using Styles | Iji ụdị dị iche iche |

### Capitalization

In English headings, all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions (such as “that,” “until,” and “which”) are capitalized. Please do not apply the same principle to Igbo headings. Instead, follow the normal Igbo capitalization rules. The same rule applies to software strings.

| English example | Igbo example |
| -- | -- |
| Click Help to proceed | Pịa Enyemaka iji gaa n’ihu |
| Click Help Me Choose to proceed | Pịa Nyere M Aka Họrọ iji gaa n’ihu |
| Switching Between Windows | Ịgbanwe N’etiti windo |

### In Lists and Tables

Whenever possible, headings of lists and tables should consist of one or two words, preferably active nouns. They should be concise, even if the source uses a longer phrase.

In English, lists may be headed in two ways, namely (a) an introductory phrase that is completed syntactically by every item in the list and (b) an “independent” introductory phrase followed by syntactically independent items.

In English, the syntax of the items are typically not affected by the phrasing of the introductory phrase, if it is one sentence.  However, in Igbo, the word order of the introductory phrase can affect the word order of the individual items.  When translating the introductory phrase, try to translate it in such a way that the items can be translated as an independent phrases.

Either way, care should be taken to ensure that every individual item is not an incorrect syntactical completion of the heading and makes sense in terms of meaning (semantics) and subject matter.  Note that the position of the (main) verb may require a structure that differs significantly from the English.

| US heading | Igbo heading |
| -- | -- |
| In order to | Iji mee nke a |
| Do this | Mee nke a |
| How to use | ụzọ esi eme |
| First do this | Buru ụzọ mee nke a |
| Then do this | Mee nke a |
|How to: | ụzọ esi: |
| Walkthrough | Gafere |

## Hyphenation and Compound formation

### General Hyphenation Rules

In Igbo, hyphens are more common and more acceptable than in English.  In fact, hyphens can be used in long compound nouns to make its meaning clearer. When faced with a highly complex compound, resolve it by clarifying the relationships among the various compound components. Ways of doing this include shifting the word order or using prepositions.

Examples:

|  |  |
| -- | -- |
| the Windows 2000 operating system | Igwe arụmọrụ Windo 2000 |
| the Windows 2000 user magazine subscription registration form | akwụkwọ ndebanye aha akwụkwọ akụkọ onye ọrụ nke Windo 2000 |
| the software user license conditions | ọnọdụ ikikere ngwaọrụ |

This applies in particular to Mozilla product and component names that appear as the proper-noun element in compounds that are either proper nouns again, or common nouns (Examples below include Microsoft/Windows product names).

| English example | Igbo example |
| -- | -- |
| Windows password | Igodo mmepe Windo |
| Microsoft Word document | Ihendekọ Microsọft Wọdụ |
| Microsoft SQL Server Database | Ikpo data Microsọft SQL Sava |
| Microsoft BackOffice product family | Ezinụlọ ngwaahịa Microsọft BackOfis |

### English Compounds

We do not automatically hyphenate purely English compounds. Use the following steps in handling US compounds:

* If the compound consists of no more than 3 components write it as one word in Igbo, unless there is serious risk of misunderstanding.
* If the compound is more complex, resolve it by:
  * inserting a hyphen at the appropriate point in the word (try to avoid using more than one  hyphen in a single word, unless one of the hyphens is required and the other is optional).
  * adjusting the word order and applying the rules of Igbo syntax,
  * using prepositions,
  * reducing complexity by writing related components as one word.

### Product Names

Product names must not be hyphenated. However, in order to offset the actual product name from the word that follows in a compound, the hyphen is placed right between the product name and the following term. Please note that this rule applies even if the word that follows is a US term.

### Compounds with Acronyms, Abbreviations or Numerals

The compounds below contain either an abbreviation or a numeral followed by a component name. The abbreviation or numeral is marked in red in the English example. The Igbo example below show how such constructions should be translated.

| English example | Igbo example |
| -- | -- |
| CD-ROM drive | Draịvụ CD-ROM |
| 2-D gridlines | Ahịrị ngidi 2D |
| 24 bit color value | Mpụtara agba bit 24 |
| 3.5 Floppy | Flọpị 3.5 |
| 51/4-inch Floppy | Flọpị 5¼-inch |
| 35mm slides | Ihe mmịfe 35 mm |

## Indexes

### Capitalization, Prepositions and Articles

For first level entries (main index level), always capitalize the first letter of the first word. Write the remaining words according to existing Igbo capitalization rules.

Subentries: capitalize nouns, use lowercase for other entries.

In English headings, all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions (such as “that,” “until,” and “which”) are capitalized. Please do not apply the same principle to Igbo headings. Instead, follow the normal Igbo capitalization rules. The same rule applies to software strings.

| English example | Igbo example |
| -- | -- |
| Click Help to proceed | Pịa Enyemaka iji gaa n’ihu |
| Click Help Me Choose to proceed | Pịa Nyere M Aka Họrọ iji gaa n’ihu |
| Switching Between Windows | Ịgbanwe N’etiti windo |

**Prepositional phrases** in English need to be translated according to their context; anglicisms should be avoided. The table below contains frequently used verbs and the prepositions that follow them.

## Prepositions

Translate English prepositions according to their context and not too literally.

Prepositional phrases in English need to be translated according to their context; anglicisms should be avoided. The table below contains frequently used verbs and the prepositions that follow them. Please use this table as a reference.

This is a particularly problematic area, because some verbs used transitively in English cannot be so used in Igbo, and then something needs to be added or changed in translation, for instance migrate cannot be used transitively in Igbo. (or a similar translational solution used). Also, Igbo phrasal verbs will change (be “split”) depending on the particular syntactical environment. This matter should be dealt with extremely carefully.

| US-English expression | Igbo expression |
| -- | -- |
| migrate to | banye na |
| Migrate from | Banye site na |
| import to | bubata na |
| import from | bubata site na |
| export to | buga na |
| export from | bupu site na |
| update to | melite ka ọ bụrụ |
| upgrade to | Kwalite ka ọ bụrụ |
| change to | banye na |
| click on | pịa na |
| connect to | jikọọ na |
| welcome to ... | nnọọ na ... |

The examples below contain frequently occurring noun phrases that are preceded by a preposition. Please use this table as a reference.

| US-English expression | Igbo expression |
| -- | -- |
| in the toolbar | n’ogwe ngwaọrụ |
| on the tab | na taabụ |
| on the menu | na menu |
| on the net | na net |
| on the Internet | na Ịntanetị |
| on the Web | na Weebụ |
| on a web site | na weebụsaịtị |
| on a web page | na ibe weebụ |

## Procedures and Syntax

In procedural text, which tells the user to perform certain actions in a certain number of steps, the order in which interface terms are to appear in the translation is usually top to bottom (for example, “menu,” “command,” “dialog box,” “dialog box controls”). This order reflects the sequence in which the action needs to be performed, and it should be maintained unless there are technical reasons preventing it.

This convention is less important in normal body text, which is sometimes written in a more personal tone and less formal style, thus allowing the translator to be more creative.

See also sections 4.5.5 and 4.6.2.2.

| English example | Igbo example (possible body text) |
| -- | -- |
| On the View menu, click Filter | Na menu Lelee, pịa Myọ |
| On the Tools menu, click Internet Options, and click the Security tab | Na menu Ngwaọrụ, pịa Nhọrọ Ịntanetị, wee pịa taabụ Nche |

### Descriptors

Use the descriptor (“menu,” “button,” “command,” and so on) only if the original text uses it or if it is needed for clarifying the position of a term in the interface.

### Procedural Syntax

In procedural text, which tells the user to perform certain actions in a certain number of steps, the order in which interface terms are to appear in the translation is usually top to bottom (i.e. menu, command, dialog box, dialog box controls). Maintain this sequence unless there are technical reasons preventing it.

Example:

`In the "Extras" menu, click "Settings" and then "Music files".`

You may come across procedural instructions of the type "To do this and that, click on ...". In body text, you may rearrange such sentences to first mention the action the user needs to do and then the purpose.

| English example | Igbo example |
| -- | -- |
| To open the shortcut menu, click View Source | Iji mepee menu ụzọ mkpịrịsị, pịa Lee Isi Mmalite |
| To end the install, click Cancel | Iji kwụsị nwụnye ahụ, pịa Kagbuo |

### Procedural Headings

Procedural headings are very important because they tell users exactly what they are going to do in the steps that follow. Headings should convey as much information as possible about the ensuing text to help readers locate information quickly. If in English the heading begins with a gerund, try to use a nominalized form in Igbo.

### Status Bar Messages

Please make sure you adequately capture the meaning of messages when translating.

If you think a source status bar message is ambiguous, query it to make sure you provide the reader with the right information: if you cannot understand it, they are also not certain to. There is nothing more annoying than "help" that doesn't!

> A status bar message is information about the active document, a selected command, or any active selected interface item. The messages are shown in the status bar at the bottom of the window when the user has chosen a menu, a command or any other item, or has started a function. Some status bar messages refer to actions being performed or already completed (for example in Microsoft Internet Explorer). Refer to

![Status Bar Image](statusbar.jpg)

*Figure 1. Example of a typical status bar and status bar message.*

Messages reporting that a process is executing usually use a verb in the “-ing” form plus three dots after the text. In Igbo you should choose a verb tense and/or aspect that expresses the ongoing nature of the action.

Difficulties can arise if this convention is not kept in the US text and the status or progress message is not immediately recognizable as such (although sometimes the Resource ID will tell). The standard syntax should be applied to status bar messages wherever possible.

Examples:

| English example | Igbo example (status bar message) | Igbo example (dialog heading) |
| -- | -- | -- |
| Scanning files | Na-enyocha ebe nchekwa ozi |  |
| Opening message | Na-emepe ozi |  |
| Scanning files... |  | Inyocha ebe nchekwa ozi... |
| Opening message… |  | Imepe ozi.... |

### Usage of "Select"

| Item | US example | Igbo example |
| -- | -- | -- |
| Lists | In the drop-down list, select an option. | Na ndepụta ndotu, họrọ otu nhọrọ. |
| Check Boxes | Select the check box. | Họrọ igbe nrịbama. |

### Usage of "Click"

| Item | Example | US | Igbo |
| -- | -- | -- | -- |
| Menus | On the ____ menu, click _____. | On the File menu, click Open. | Na menu ebe nchekwa ozi, pịa Mepee. |
| Cascading Menus | On the ___ menu, click ___, and then click ___. | On the Tools menu, click Preferences, and then click Music Files. | Na menu Ngwaọrụ, pịa Mmasị, wee pịa ebe nchekwa Egwu. |
|   | Click the arrow next to  _____ and then click ____ . | Click the arrow next to  , and then click the file type you want. | Pịa ụta dị n‘akụkụ  wee pịa ụdị faịlụ ị chọrọ. |

## Punctuation

### Commas and Other Common Punctuation Marks

Please follow the following basic rules for the use of punctuation marks in Igbo. Make sure to include a space after commas, and after periods if it is followed by another sentence. Use one space between sentences.

There are a few important punctuation conventions that need to be observed:

1. The predicates of complex sentences are separated by a comma, whether or not they occur next to each other in the sentence. After the infinitive (om te + verb) as a noun clause no comma is needed.
2. A defining adjectival clause is terminated by a comma, unless two equivalent clauses are linked by “en” or “of”, or, of course, unless it is the final clause of the complex sentence.
3. A non-defining adjectival clause is preceded by a comma before the relative pronoun and is terminated by a comma.
4. A dash (en dash) between words should be preceded and followed by a single space.

### Comma vs. Period in Numerals

English uses a period as decimal separator, Igbo usually uses a comma.

    Example:
    English: 5.25 cm
    Igbo: 5,25 cm

    English: Letter Landscape 11 x 8.5 in
    Igbo: Letter Querformat 11 x 8.5 in

    English: 1,526
    Igbo: 1 526

In bullet lists, instruction lists, captions and callouts:

* If your translation is longer than the US text, or if you split your translation into several independent sentences, use common sense and insert a period if it improves the Igbo style.

US English uses a period as the decimal separator, while many other languages use a comma. In Igbo a comma is used.

In paper sizes (the last example in the table below) the decimal separator and the abbreviation "in" for inches are kept, since the sizes are US norms and should be represented accordingly.

The “in” as abbreviation for “inch” is not acceptable in Igbo, and should be changed to “dm.” – note the full stop! – which has been the recognized abbreviation for decades. Before independence, Nigeria as part of the British Empire used the imperial measurement system in which “inch = duim” and “in = dm.”.

| English example | Igbo example |
| -- | -- |
| 5.25 cm | 5,25 cm |
| 5 x 7.2 inches | 5 x 7,2 inchi |
| Letter Landscape 11 x 8.5 in | Letter Landskep 11 x 8.5 dm. |

For thousands, English uses a comma while many other languages use a period (at Mozilla we normally do not use a space for this purpose, but we use a period instead to avoid wrapping problems).

Note that neither a full stop nor a comma may be used for thousands, because both may be interpreted as a decimal separator. A space should be used for thousands and preferably a hard space to avoid wrapping problems.

| English example | Igbo example |
| -- | -- |
| 1,526 | 1 526 |
| $ 1,526.75 | $1 526,75 |

Note that there should be NO SPACE between the currency symbol and the first digit!

### Version Numbers

Version numbers always contain a period (Version 4.2, for example). Please note the following punctuation examples of “Version x.x”:

Examples:

| English example | Igbo example |
| -- | -- |
| If you are using Word version 7.0 or later... | Ọ bụrụ na ị na eji ụdị 7.0 nke Wọdụ maọbụ nke ọhụrụ... |
| If you are using Microsoft Excel version 6.0 for Windows... | Ọ bụrụ na ị na eji ụdị 6.0 nke Microsọft Esel maka Windo... |

Version numbers are usually also part of version strings, but technically they are not the same. Where possible in Igbo, leave out “weergawe” because it would in most cases require a hyphen to link it to the product name, which will only complicate matters.

## Typographic Conventions

Consistent use of typographic conventions in documentation helps users locate and interpret information easily. Generally speaking, the source format should be followed as closely as possible, i.e. terms with a particular formatting in the source should have the same formatting in the translation.

If menu, command, option, etc. names are highlighted by bold print in the source, use bold print for the corresponding translated terms. If menu, command, option, etc. names are put in quotes in the source, use quotes for the corresponding terms in the translation.

Note that in software strings, you must use two double quotes (""xxx"") to denote names within a string. If you only use a single double quotes ("xxx"), this will cause problems with the compilation, as strings are generally denoted by double quotes.

## Wizard Names

Abbreviations: N = Noun, A = Adjective (incl. participle used as A), Nv = Verb used as Noun

| Source | Target | Rule | Pattern |
| -- | -- | -- | -- |
| Configuration Wizard, Installation Wizard | Ọkachamara Nhazi, Ọkachamara Nwụnye | Rule 1: One noun is followed by a hyphen and “assistent”. | N-assistent |

## Appendix

### Guidelines for the Localization of Error Messages

The following guidelines do not apply to the translation of FirefoxOS because brevity is more important in FirefoxOS than using long, pleasant sounding idiomatic expressions.

### Articles and Pronouns

| Source | Target | Guidelines |
| -- | -- | -- |
| File already exists  / The file already exists / This file already exists | Ebe nchekwa ozi adịlarịị adị  /  ebe nchekwa a adịlarịị adị  / ebe nchekwa a adịlarịị adị | In complete sentences, use articles consistently even if the US string does not. |
| Not enough memory to complete this operation. | Enweghị ebe nchekwa zuru oke iji mezuo arụmọrụ a. | Use the definite article instead of the demonstrative pronoun unless it is important in context. |
| The network is down./ Network is down. | Netwọk emebiela. | Metaphorically used prepositions usually require rephrasing. |

### Verbs

| Source | Target | Guidelines |
| -- | -- | -- |
| The document is too large. / Document too large. | Ebe nchekwa ozi ahụ buru oke ibu. / Ebe nchekwa ozi buru oke ibu. | Use verb consistently even if source message does not. |
| An unknown error has occurred./ No error occurred. | Mperi amaghị dapụtara./ Ọnweghị mperi dapụtara. | Shorten this construction where possible. |
| Cannot locate file. | Enweghi ike ịchọta ebe nchekwa. | Locate, find = chọta |
| To try copying files again, click OK. | Ịnwa inomi ebe nchekwa ọzọ, pịa ỌDỊMMA. | Omit the translation of try when there is a simple alternative. |

### Negation

| Source | Target | Guidelines |
| -- | -- | -- |
| Wrong file type. | Ụdị ebe nchekwa ezighi ezi. | Wrong, incorrect = ezighi ezi |
| File not found. / File was not found. / The file was not found. | Ahụghị ebe nchekwa. | Use this basic syntax for negative sentences. |
