# Einingar og umbreytingar

## Dagsetningar

Dagsetningar í íslensku er skrifaðar í dd/mm/áááá forminu, rétt eins og í Evrópu. Mánuðir eru skrifaðir með litlum staf nema í byrjun setningar. Punktur er skrifaður á eftir deginum, dæmi: 16. september 2018.

### Dagatal

Gregoríska dagatalið er í notkun á Íslandi. Dagatöl á Íslandi hefjast ýmist á sunnudegi eða mánudegi. Þetta er ekki á föstu.

### Tímasetningar

Sólarhringnum er skipt upp í 24 stundir. Klukkan 3 eftir hádegið er því skrifað 15:00.

## Tölustafir

Tugastafur (tugabrot) er merkt með kommu (,)
Í þúsundabroti er punktur (.) hins vegar notaður.

### Gjaldmiðill

Íslenska krónan er skammstöfuð kr. á Íslandi. Í alþjóðatali er það ISK.

### Mælieiningar

Metrakerfið er notað á Íslandi. Birta ætti tölur í metrakerfinu.

### Nöfn

What are the order of family name and given name in your language? Here is the guideline on the naming convention from w3c.org:

## Address and Postal Code Format

What is the format in your language?

* Example: most Asian countries start from big to small: [Country] [postal code][state/province][city][district][street number and name][building and suite numbers][addressee]
* Countries of European languages start from small to big: [addressee][street number and name][building and suite numbers][district][city][state/province][postal code][Country]

### Telephone Number format

Space separators between digits can be different for area codes such as State (Province) and City,

## Spelling And Grammar Checks

Many languages have national or international standards that define spelling and grammar rules. When defining these rules for your community, make reference to those standards wherever possible. Do you have automated tests for spell checking and grammar? List those tools and dictionaries here and how regularly they should be used.

### Tense

Do you have standards for verb forms that indicate or express the time, such as past, present, or future, of the action or state? What is your policy on tense consistency for certain use cases? For example, for phrases that ask a user to make an action (like "Download Firefox"), do you use a future tense, a command tense, or a neutral tense? (See: <a href="https://en.wikipedia.org/wiki/Grammatical_tense">https://en.wikipedia.org/wiki/Grammatical_tense</a> )

## Word Forms

### Pluralization

What is the appropriate form of expressing pluralization in your language? List all forms of plural forms and examples if there is more than one. Additional discussions can be found Here. <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals">https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals</a> and here: <a href="http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a>

### Skammstafanir

Punktar eru jafnan notaðir í skammstöfun og merkir að um styttingu sé að ræða. Sjá kafla 22.6  -> http://islenskan.is/images/endurskodun-ritreglna-heimasida-IM.pdf

## Greinarmerki

Sjá hér  -> http://islenskan.is/images/endurskodun-ritreglna-heimasida-IM.pdf

### Áhersla

"Stór stafur er alltaf ritaður í upphafi máls og í nýrri málsgrein á eftir punkti. Á eftir upphrópunarmerki, spurningarmerki og tvípunkti er stundum stór stafur, en aldrei á eftir kommu eða semíkommu." (Sjá http://islenskan.is/images/ritreglur-IM-2016.pdf) Einnig er stór stafur í sérnöfnum.

### Bandstrik og samsett orð

Íslenska er uppfull af samsettum orðum. Bandstrik er ekki notað við samsett orð. Bandstrik eru notuð þegar orði er skipt upp á milli lína sem og í öðrum tilvikum. Sjá nánar kafla 26  -> http://islenskan.is/images/endurskodun-ritreglna-heimasida-IM.pdf

## Forsetningar

Sjá kafla 2.6  -> http://islenskan.is/images/ritreglur-IM-2016.pdf

## Sérstakir stafir

Passa þarf uppá að sérhljóðar séu í réttri stafrófsröð: a, á, e, i, í, o, ó, u, ú, y, ý.

## Tilvitnanir

Nota skal gæsalöpp sem er niðri og bendir út í byrjun tilvitna. Loka skal tilvitnuninni með því að nota gæsalöpp sem er uppi og bendir út. Dæmi: „Hér er tilvitnun.“

## User Interface Elements

* Titles : Should be brief and precise. Localizers can assume that source content reaches 2/3 of the total available line space. This allows localization text to expand and not be truncated or resolved through ellipsis. Title on the final page (meaning no more click through) should allow enough room to display full text.
* Buttons: Capitalize the first letter of each word. Limit to one or two words. Use verbs that precisely describe the button's action. For example, "Cancel", "Clear History", "Add Email", "Select All", etc.
* Value Selector Lists: Capitalize the first letter of the first word and the first letter of any proper nouns. Limit to one or two words.
* Articles: Avoid them where possible. Articles (such as the word "the" in English) should be avoided wherever possible. User interface elements have limited space available for text. Avoiding articles will help ensure that your translations will be accommodated within the user interface.
* Ellipsis: Ellipsis are often inserted automatically in the UI where strings are truncated. Ellipsis should only be used at high level of UI pages, but not be on the final page (after a series of click-through) where detailed instruction is given. Ellipsis should not be used as a way to solve truncation issue. Focus on making the UI short and precise. The sequence of the sentence structure in another language may not translate well, when a sentence is half finished as such.
