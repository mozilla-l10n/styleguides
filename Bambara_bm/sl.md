# Sentence-level Guidelinees

## Procedures and Syntax

### Descriptors

Use the descriptor (menu, button, command, etc.) only if the source text uses it or if it is needed for clarifying the position of a term in the interface.

### Status Bar Messages

Please make sure you adequately capture the meaning of messages when translating.

If you think a source status bar message is ambiguous, query it to make sure you provide the reader with the right information: if you cannot understand it, they are also not certain to. There is nothing more annoying than "help" that doesn't help!

### Post-positions

If the `...` represents an element then it must come before `kan`. Otherwise we could represent it as `O kan` (`About this`).

## Punctuation

Bambara follows French punctuation rules. As a general rule, double punctuation signs are preceded and followed by spaces, while single punctuation signs are just followed by one space.

## Commas and Other Common Punctuation Marks

* Comma: No space between the word and the comma, a space after the comma. (Except for the decimal point as in 3.14116).
* Point: No space between the word and the point, a space after.
* Ellipsis: no space between the word and the three points, one space after them. Space before them if they replace a word, and space after. Ellipsis character should be used, rather than three separate points.
* Semicolon: a space between the word and the semicolon and after it.
* Colon: a space between the word and the colon, a space after.
* Question mark: a space before that and after it.
* Exclamation mark: a space before and after.
* Hyphen: no space before, no space after.
* Parentheses: A front space, no space inside the parenthesis, and for the closed parenthesis, no space inside and a space after the closed parenthesis.
* Hyphen making parenthesis function `¬`: a space before the hyphen, a space after the hyphen, for each.
* Quotation marks: a space before the quotation mark, no space between the quotation mark and the word. No space between the word and the quotation mark and a space after the quotation mark.
French quotes: no space between the quotation mark and the word in quotes, and no space after the word in quotes.
* Slash, no space between the bar and the figure or word.
* Hook: A space before the open hook, but not between the hook and the word; no space between the word and the closed hook and a space after.
* Apostrophe: No space before and after the apostrophe.
* Degree: `19°` no space after the number and after the degree symbol.
* Symbols: Minute and second `45'`or `35''` –there is no space between the symbol and the number and after the symbol.
* The Percentage of symbol: `30 %`: a space before, one after.
* The Arithmetic signs `+` or `?` or `x`, a space before, one after. 2 + 2 = 4
* The Symbols of currencies, measures, time `25 €` or `3 m` or `30 s` a space before, one after.
* Asterisk `*`: No space before, one after

### In Lists and Tables

* Do not use a comma after bulleted points.
8 If the original source entry contains a period, leave it. If the source text does not contain a period, but you split the translation into several independent sentences, put a period at the end of each sentence.
* Never put a period after just one word.
The result of this method may be that some entries within one table are with and some entries are without a final period. From a technical point of view this is acceptable. The same convention applies to captions and callouts

### Comma vs. Period in Numerals

English uses a period as decimal separator. In Bambara, a comma is used. Do not use a space for this purpose as a space separates the numeral from the abbreviation.

In paper sizes the decimal separator and the abbreviation "in" for inches are kept, since the sizes are US norms and should be represented accordingly.

|English | Bambara |
| ------ | ------- |
| 5.25 cm | 5,25 cm |
| 5 x 7.2 inches | 5 x 7,2 inches |
| Letter Landscape 11 x 8.5 in | Mod Potare11 x 8,5 in |

For thousands, English uses a comma while many other languages use a period (at Microsoft we normally do not use a space for this purpose, but we use a period instead to avoid wrapping problems). In Bambara a comma is used.

|English | Bambara |
| ------ | ------- |
| 1,526 | 1.526 |
| $ 1,526.75 | 1.526,75 $ |

## Special Characters

Bambara adopts French versions.

## Typographic Conventions

Consistent use of typographic conventions in documentation helps users locate and interpret information easily. Generally speaking, the source format should be followed as closely as possible, i.e. terms with a particular formatting in the source should have the same formatting in the translation.

If menu, command, option, etc. Names are highlighted by bold print in the source, use bold print for the corresponding translated terms. If menu, command, option, etc. Names are put in quotes in the source, use quotes for the corresponding terms in the translation.

Note that in software strings, you must use two double quotes `""xxx""` to denote names within a string. If you only use a single double quotes `"xxx"`, this will cause problems with the compilation, as strings are generally denoted by double quotes.
