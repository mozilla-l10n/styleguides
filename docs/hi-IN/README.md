# Style Guide Hindi (hi)

## Introduction

Style guides define the standard against which we determine a translation's quality. They contain rules that are both defined by Mozilla and by Mozilla's localization communities on how to best translate text in Mozilla products, websites, and other projects. By following these rules, a translator has a better chance of producing a high quality translation that represents Mozilla values and culture

## Why should we Localize?

Whenever we are touching a key on a keyboard for translating anything into Hindi, we are having great responsibility. The responsibility of conveying the message of any source text into Hindi is having the responsibility to convey to the millions of users. And so the problem is acute. Hindi is not just a language in India. Hindi is not just one culture of India. Combine many languages, many cultures, many dialects, many traditions – the one result you will get is Hindi. That is why it is not a simple job to define what really Hindi is? You can find different forms of Hindi from Kashmir to Kanyakumari and From Gujarat to Arunachal Pradesh. That is why translating in Hindi is more challenging job than what generally it is being seen.

## What is Hindi?

According to Wikipedia, Hindi is the name given to various Indo­Aryan languages, dialects, and language registers spoken in northern and central India (theHindi belt), Pakistan, Fiji, Mauritius, and Suriname. Standard Hindi, a standardized register of Hindustani, is one of the 22 scheduled languages of India and the primary official language of the Indian Union. In the broadest sense of the word, "Hindi" refers to the Hindi languages, a culturally defined part of a dialect contin-uum that covers the "Hindi belt" of northern India. It includes Bhojpuri, an important language not only of India but, due to 19th and 20th century migrations, of Surinam, Guyana, Trinidad and Mauritius, where it is called Hindi or Hindustani; and Awadhi, a medieval literary standard in India and the Hindi of Fiji. Standard Hindi is the official language of India and is the most widely spoken of India's scheduled languages. It is spoken mainly in northern states of Rajasthan, Delhi, Haryana, Uttarakhand, Uttar Pradesh, Madhya Pradesh,Chhattisgarh, Himachal Pradesh, Jharkhand and Bihar. It is the second major language in Andaman and Nicobar Islands and is also understood in Maharashtra and Gujarat. Hindi is the official language of India. It is also the official languages for 11 states.

## Who is the target user for this project and what is their background?

## General Translation Guidlines

* Font

For Translating any documents or any application in Hindi language, we need to use Unicode based Devanagari fonts. Eg. Lohit, Sarai etc. The font should contain a glyph for each allocated code point prescribed by Unicode. The font should contain the following: (1) vowels; (2) consonants; (3) glyphs for conjuncts; (4)variants for vowel signs (matras), (5) vowel modifiers (Chandrabindu, Anuswar), (6) consonant modifier(Nukta); (7) digits and (8) punctuation marks.

* WhiteSpace

In computer science, white space is any single character or series of characters that represents horizontal or vertical space in typography. When rendered, a white space character does not correspond to a visualmark, but typically does occupy an area on a page. There may be different pattern of any language related to white space. We should properly care and follow the source text and target language rules for placing any extra white space.

    Ex:- %S is not a valid Location
    Wrong: % S एक वैध स्थान नहीं हैं.
    Correct: %S एक वैध स्थान नहीं हैं.

* Accelerators

Mozilla Uses ampersand(&) accelerator markers.

* Program Syntax, Funtions, TAGs, Placeholders

Never translate program syntax or functions or tags, place holders. Sometimes some translators translate these as well. We should not translate any of these. This creates major error in translation.

* Message Length

The message length is an important aspect of any translation particularly in technical translation areas. The message length should not exceed more than 20 percentage of the number of words present in the source text. Though it takes time to make translation concise, but there is big need to concentrate on this aspect.

    Ex:- AutoCorrect
    Wrong: स्वचालित ढंग से ठीक करें.
    Correct: स्वतः सुधार

* Numeral

How are numerals and percentages expressed in your language?

**Example:** 1.23 (decimal separator) or 1,000 (thousand separator) using comma or period.

**Note:** We will use International form of Indian Numerals in translation instead of Devanagari numerals. However, the employment of Devanagari numerals is same as Indian numerals. So we will use 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 instead of ०, १, २, ३, ४, ५, ६, ७, ८,९.

* Calender

The Indian national calendar (sometimes called Saka calendar) is the official civil calendar in use in India. It is used, alongside the Gregorian calendar, by The Gazette of India, news broadcasts by All India Radio, and calendars and communications issued by the Government of India.

* Honorific Usages

It is encouraged to use honorific pronoun in Hindi. So, it is better to use words like आप, यह, वह instead of तुम, ये, वे respectively. Along with this, we should not translate like ढूँढो, खोजों, करों etc. Saying anything like this are being seen as rude in Hindi.

    Ex:- Find again
    wrong: फिर ढूँढो
    Correct: फिर ढूँढें

* Acronyms

Acronyms and initialisms are abbreviations that are formed using the initial components in a phrase or name. These components may be individual letters. The term acronym is the name for a word created from the first letters of each word in a series of words. Acronyms and initialisms are used most often to abbreviate names of organizations and long or frequently referenced terms, or any products. In the case of acronyms as a file name don't translate standard acronyms like Jpeg, HTML, xml to name a few.

* Product/Brand/Company Name

For Product/Brand/Company Name, it is general rule accepted by agencies to keep as it is like English.

    Ex:<HTML>Clear the contents of the location bar.</html>
    Wrong: <एचटीएमएल>स्थानपट्टी की सामग्री हटायें</एचटीएमएल >
    Correct:<HTML>स्थानपट्टी की सामग्री हटायें</HTML >

* Key Name

Keys name should not be translated. eg. Backspace, Delete, Enter should not be translated since we still use the same keyboard as English. Though some keyboard came in Hindi but it is not still popular.

    Ex: Both Ctrl keys together change layout.
    Wrong: दोनों कंट्रोल कुंजी एकसाथ लेआउट बदलता हैं.
    Correct: दोनों Ctrl कुंजी एकसाथ ख़ाका बदलती हैं.

* Currency

What are other widely used currency and symbols used in your country/language for paid apps.

* Dates and Times Formats

It should be noted that Dates and Times should be properly translated. If not it can create confusion much. For 28 August 2010, international dating system represents 2010­08­28 but the American Usage is 8.28.10. But in Hindi we write it like 28 अगस्त 2010 and it is represented as 28.8.10. So we should follow this convention of writing. For translating time, using colon will be preferred then just putting period. For example, 10:30 बजे.

    Type: Dates
    Ex: 25 September 2016
    Wrong:सितम्बर 25 2016
    Correct: 25 सितम्बर 2016

* Units and Grammar
* Units and Unit Conversion
* Domain Name
* Tense

Do you have standards for verb forms that indicate or express the time, such as past, present, or future, of the action or state? What is your policy on tense consistency for certain use cases? For example, for phrases that ask a user to make an action (like "Download Firefox"), do you use a future tense, a command tense, or a neutral tense?
See: ([https://en.wikipedia.org/wiki/Grammatical_tense](https://en.wikipedia.org/wiki/Grammatical_tense))

* Abbreviations

## How are abbreviations expressed in your language?

Example, in English, abbreviations are made by removing most vowels and only using the first 3-5 consonants followed by a period (e.g., abbreviation = abbr.)
see: ([https://en.wikipedia.org/wiki/Abbreviation](https://en.wikipedia.org/wiki/Abbreviation))

* Punctuation

## Do you use different punctuation rules in your Firefox localization than what your language standard defines?

**Example:** do you use a period at the end of every user interface element translation or only some? What is the international/national standard for punctuation in your language?

## How would I express that meaning in my own language?

## Terminology
1. Brand name should not be localized/transliterated.
2. We should follow pontoon localization history.
3. Use transvision tools https://transvision.mozfr.org/ 
4. Difficult concepts/ terminologies should be made easy to comprehend otherwise should be transliterated.
5. New term bases should also be given a thought as it gives a new perspective to a difficult word.
6. For reference we can take the help of sabdkosh https://www.shabdkosh.com/

## Should Not Translate

* Shortcuts and accesskeys

In Firefox and other software it's possible to use keyboard shortcuts to invoke a specific command. For example, to open a file in Firefox you can press the combination of keys CTRL+O (Cmd+O on Mac). The accelerator key depends on the operative system, but the letter itself is normally localizable. This is what is called a shortcut, or commandkey. For example, the Open File… menu item is stored as

`<!ENTITY openFileCmd.label "Open File…">`
`<!ENTITY openFileCmd.accesskey "O">`
`<!ENTITY openFileCmd.commandkey "o">`

The commandkey is stored in openFileCmd.commandkey (sometimes the string has .key in the identifier). Normally you should not localize this key, since shortcuts are often common across the entire operative system (e.g. CTRL+S to Save) or similar products (CTRL+T to open a new tab in most browsers). But it needs to be localized if the letter is not available in your keyboard layout.

In the code fragment above you see also an accesskey defined for Open File…. Accesskeys are used to access a UI element from the keyboard. Example: if File menu has an accesskey F, and the Open file… menu has O, you can press ALT+F to access the menu, and then O to open a file.

If the label is File, and the accesskey is F, it will be displayed as "File" on Windows and Linux, with an underscored F. If the accesskey was "O", so a character not available in the original label, it will be displayed underlined between parenthesis: "File (O)".

One important thing to determine is if, for your locale, it makes sense to have localized accesskeys: for example, if most users will use a keyboard with a different layout (English), it might make sense to keep the English original accesskey instead of using a letter available in your localization.

    E.g.- <html>Clear Location bar</html>
    Wrong: <एचटीएमएल>स्थानपट्टी हटाएँ </एचटीएमएल >
    Correct: <html>स्थानपट्टी हटाएँ </html>

Accesskeys, like commandkeys, have their own lines within .dtd and .properties files and are usually identified by .accesskey in the string ID.

* Command Key should not be translated
* Variables

Variables should never be translated. You can recognize a variable within a string by its beginning with a specific character (e.g., $, #, %, etc.) followed by a combination of words without spacing. For example, $BrandShortName and %S are variables. You can move a variable around within a string, if the translation of the string requires it.

    E.g.- Changes made to the document in the last %ld second will be permanently lost.
    Wrong:  दस्तावेज़ में अंतिम %एलडी सेकेंड में किये गये परिवर्तन हमेशा के लिए मिट जाएँगे.
    Correct: दस्तावेज़ में अंतिम %ld सेकेंड में किये गये परिवर्तन हमेशा के लिए मिट जाएँगे.

* Brands, copyright, and trademark

Brand names, as well as copyright and trademarks should never be translated, nor transliterated into a non-Latin based script. See the Mozilla branding guide for more details.

## About Mozilla culture.

* Legal content

Mozilla projects will often contain legal content in the form of user agreements, privacy statements, etc. When reviewing the translation of legal content, Mozilla localizers should do so according to the criteria concerning accuracy, fluency, style, and terminology found within this style guide and according to Mozilla culture and values.

* Fluency

To produce a fluent translation, not only should the translation follow the language's standard grammar, punctuation, and spelling rules, but it should avoid being ambiguous, incoherent, or inconsistent, and unintelligible.

To avoid ambiguity, the translator must thoroughly understand the meaning behind the source text, including any references that text might include. For example, if the English source text uses the word, "it", the translator must know what "it" is to avoid an ambiguous translation. Clearly understanding the source text will also allow a translator to make the source text's logical connections in their own translation. This helps to keep the translation coherent.

Meaning of `it` in Hindi: `यह` or `इस` should be properly used according to the String.
E.g: It should be done. `इसे किया जाना चाहिए.`
It will be good. `यह सही होगा.`

Clearly understanding the source text will also allow a translator to make the source text's logical connections in their own translation. This helps to keep the translation coherent.

Inconsistency can pop up in many forms. A translator must be consistent in their use of abbreviations, references, and links within each localization project. They must also be consistent with Mozilla and the localization communities' style guides and approved terminology. Abbreviations, like terminology, should come from either a standard reference (like a dictionary of abbreviations) or should follow your language's rules for creating abbreviations. Once used, the abbreviation must remain consistent every place that it is used in the translation. Cross-references (or links) must also be consistently used within a translation. If a text contains a hyperlink URL to a support article in English, the translation should also contain a hyperlink to a translation of that support article (if available) or the English version. Links should not redirect to other pages nor should they be broken and unusable.

Finally, there are times that a translation simply doesn't make sense. It's hard to put your finger on what exactly is wrong with it, but you know it is unintelligible and not fluent. While this is uncommon, it's important to report these unintelligible translations and offer suggestions to correct them.

## Tips to Remember

1. Do limit the word count of the localized string same as source string. Use FUEL guides for consistency.
2. Do change dot `.` to wisarg '।' not pipe `|`.
3. Always use not translate product names. Like `Mozilla`, `Firefox`, `Facebook`.
4. Don't translate HTML tags. Like `<HTML>`, `&ndash`
5. Try to use localised developer edition browser.
6. Don't follow Google Translate. You can use Shabdkosh/Online Dictionary for word meanings.
7. Don’t translate numbers `1`, `2`, `3`, letters `a`, `b`, `c`.
8. Please translate all uppercase strings. For some of them it might make sense (e.g. JSON, SQL), but `BLOCKED`, or `SUGGESTED`, are normal strings displayed uppercase for English, and you should definitely translate them. All terms/verbs which is having `&` in between or in word starting (ex:- `&Hide Toolbars`, `M&ove`) that should be translated, not left in English. I wonder if you will because of the `&`, which only indicates an accesskey in the middle of the word. You can just remove the `&` in the string and it will fallback to English. (Very Important)

## What are accesskeys?,

Accesskeys, not to be confused with shortcuts (or commandkeys), are used to access a UI element from the keyboard. Example: if File menu has an accesskey F, and the Open menu has O, I can press ALT+F to access the menu, and then O to open a file. If the label is File, and the accesskey is F, it will be displayed as "_F_ile" on Windows and Linux, with an underscored F. If the accesskey was "O", so a character not available in the original label, it will be displayed underlined between parenthesis: "File (_O_)".

How accesskeys work in Pootle?
In the original localization file, label and accesskey are two separate strings, for example:
`<!ENTITY fileMenu.label "File">`
`<!ENTITY fileMenu.accesskey "F">`
