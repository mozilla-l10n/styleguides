# Style guide Urdu (ur)
 <!-- toc -->
## Introduction
This style guide provides instruction for localizing to the Urdu locale. It contains rules that are both defined by Mozilla and Mozilla's localization communities on how to best translate text in Mozilla products, websites, and other projects. By following these rules, the translator has a better chance of producing a high quality translation that represents Mozilla values and culture. This style guide is to be used in coordination with the [General Mozilla L10n Style Guide](../mozilla_general/). We welcome your feedback, questions and concerns regarding the Style Guide.

### Team Details

* Wiki: [https://wiki.mozilla.org/L10n:Teams:ur](https://wiki.mozilla.org/L10n:Teams:ur)
* Pontoon: [https://pontoon.mozilla.org/ur/](https://pontoon.mozilla.org/ur/)
* Discourse: [link]()
* Telegram: [link]()

## General Considerations
The localized text should be as if it was originally written in Urdu. It has to be accurate, correct and clear. To achieve that try to avoid wordiness and word-by-word translation.
* **Accuracy**: As a rule all English text needs to be translated. In some cases though, text can be omitted or transliterated; there should be a specific reason for that. The translated text will correctly reflect product functionality.
``` 
Example:- Sync
Wrong: ہم وقت ساز 
Correct: سنک 

Example: Security
Wrong: سلامتی
Correct: سیکورٹی 

```
* **Localization**: Localization means that the translated text needs to be adapted to the to the local language, customs and localization standards. For example, in many cases you would need to use Urdu names rather than English

``` 
Example:- New York
Wrong: نیا یارک 
Correct: نیو یارک 

Example: Damascus
Wrong: دماسکس 
Correct: دمشق
```
Do not translate every word, but use the style that is natural for Urdu.


* **Consistency**: Please ensure that all terminology is used consistently both within one component and across different components (software, help, documentation). In most cases terminology needs to be consistent also across different products. Moreover please use consistent style and register and translate similar phrases consistently.

Refer [Glossary]()

## Formality and tone

### Follow these basic rules:
* Original American English text tends to be rather casual. For the Urdu language, the general style should be clear, friendly and concise. Being friendly does not mean using overly colloquial language – it is crucial to consistently maintain a professional tone, but use contemporary, up-to-date style and common words. Use language that resembles conversation observed in everyday settings as opposed to the formal, technical language that is often used for technical and commercial content.
* Try to avoid long, nested sentence constructions. If necessary, break up the original sentence and regroup it syntactically.
```
Example: Fast for Good.
Wrong: اچھے کے لئے تیز۔
Correct: تیز، بہتری کے لئے۔
```
* Use wording that is succinct, unambiguous, and free of jargon.
* Produce a translation that sounds as it if was originally written in your language, i.e. avoid following the original source sentence structure too closely.
* Always bear in mind who your target audience is (i.e. an experienced computer user, a beginner, or a combination of both groups).
* Use a consistent style throughout all product components and across a product range, to ensure that all Mozilla products can be linguistically identified as part of a group of products.

## Reference Terminology

The following terminology sources should be used as reference in the translation:
* Urdu Glossary, [link]()
* Product-specific glossary, to ensure consistency across all product components visit [Transvision](https://transvision.mozfr.org/?recherche=Mozilla&repo=gecko_strings&sourcelocale=en-US&locale=ur&search_type=strings).
* Previous version product-specific glossary, visit [Transvision](https://transvision.mozfr.org/?recherche=Mozilla&repo=gecko_strings&sourcelocale=en-US&locale=ur&search_type=strings), to ensure consistency between versions.
* Glossaries of other Mozilla products, to ensure cross-product consistency.
Microsoft glossary, to ensure adherence to the industry standards. It is your responsibility to make sure that you always have the latest Microsoft glossaries at your disposal. The glossaries can be found at: http://www.microsoft.com/Language 
* Wordpress Glossary, https://translate.wordpress.com/languages/ur/default/glossary

## General Guideline:
* Access Key / Shortcuts should be in english, old ones need to be refactored eg. T =>> T

``` [Screenshot] ```

* XML tags and External Arguments should remain same. XML tag => 
``` 
<img data=>l10n=>name="icon"/> External Argument => {$name} 
```
* Numbers should be same as english numbers. 
```
eg. 2 will be 2 and not ٢
Wrong : ١٢٣٤٥٦٧٨٩١٠ 
Correct : 12345678910
```
* For urdu use these symbols: 
```
.(full stop) => ( ۔ ) - urdu full stop 

,(comma) => ( ، ) urdu comma 

brackets should be opposite, 
eg ( name ) =>>... ( نام )
```

## Brand & Product Names
Brand and Product names should be as it is.

| English	| Urdu |
| -------   | ---- |
| Android	| Android |
| Firefox	| Firefox |
| Flash	    | Flash |
| Focus	    | Focus |
| iOS	    | iOS |
| Mozilla	| Mozilla |
| Pocket	| Pocket |
| Rocket	| Rocket |
| Windows	| Windows|
| ScreenshotGo | ScreenshotGo |
| Firefox Send | Firefox Send |
| Firefox Account | Firefox Account |
| SuMo | SuMo |


## Getting Started with Pontoon
> Here, you will be able to setup your keyboard and get started on Pontoon. Watch the videos.
* Videos - [Playlist](https://www.youtube.com/playlist?list=PLRv87LmcGEYgPknvuH2RoI3CrYXRlr7D9)

### Date format
> Month should not be abbreviated, if date is wriiten in source as 11 March 2019, or 11 Mar 2019, you should write as below
ء2019 مارچ 11

| Name | Format | Example |
| ---- | ------ | ------- |
| Short | mm/dd/yy | 12/31/19 |
| Abbreviated | month dd | مارچ 31 |
| Long | Date Month Year | ء2019 مارچ 11 |

### Days

| Day | Urdu | Abbreviation |
| ----  | ------ | ------- |
|Monday | پیر |           n/a|
|Tuesday  |    منگل     | n/a|
|Wednesday|     بدھ     | n/a|
|Thursday |   جمعرات    | n/a|
|Friday   |    جمعہ     | n/a|
|Saturday | ہفتہ        | n/a|
|Sunday   | اتوار       | n/a|

### Time format
Time should be written as Standard format.
>  i.e. hh:mm:ss AM/PM or HH:MM
03:24:12 PM

### Numerals
Numbers should be same as english numbers. 
> * eg. 2 will be 2 and not ٢ 
> * Not these numbers : ١٢٣٤٥٦٧٨٩١٠ 
> * Use : 12345678910

 | Separator | Character Name | Symbol | Example |
 | --------- | -------------- | ------ | ------- |
 | Decimal | Period | `.` | 1.23 |
 | Thousands | Comma | `,` | 1,234 |
 | Percentage | Percent sign | `%` | 99.95% |

### Currency

> Currency in Urdu is Rupee - روپیہ

* Rupee - روپیہ
* روپیہ 100

### Address and postal code format

>
>     [addressee]
>     [street number and name][building and suite numbers]
>     [district][city][state/province][postal code]
>     [Country]

### Telephone number format

> * +1/+91/+92/ XXXXXXXXXX
> * e.g +1 1234567890

### Units of measurement

| English | Translation | Abbreviation |
| ------- | ----------- | ------------ | 
| Kilometre |      کلو میٹ         |Not Applicable|
| Meter|         میٹر              |Not Applicable|
|Decimeter|    ڈیسی  میٹر          |Not Applicable|
|Centimetre|     سینٹی میٹر        |Not Applicable|
|Millimeter|     ملی میٹر          |Not Applicable|
|Hectoliter|     ہیکٹو لیٹر        |Not Applicable|
|Liter    |     لیٹر               |Not Applicable|
|Deciliter|      ڈیسی لیٹر         |Not Applicable|
|Centiliter|      سینٹی لیٹر       |Not Applicable|
|Millilitre|      ملی لیٹر         |Not Applicable|
|Ton    |     ٹن                    |Not Applicable|
|Kilogram|       کلو گرام          |Not Applicable|
|Pound    |     پاؤنڈ              |Not Applicable|
|Gram    |     گرام                |Not Applicable|
|Decigram|      ڈیسی گرام          |Not Applicable|
|Centigram|     سینٹی گرام         |Not Applicable|
|Milligram|     ملی گرام           |Not Applicable|
|Inch    |     انچ                 |Not Applicable|
|Feet    |     فٹ                  |Not Applicable|
|Mile     |    میل                 |Not Applicable|
|Gallon |    گیلن                  |Not Applicable|


## Grammar, Syntax & Orthographic Conventions
> This section includes information on how to apply the general rules of the Urdu language to Mozilla Products.

### Adjective
In Urdu, adjectives should be handled in the following manner.

General wording rules. Adjectives are also considered nouns.

### Articles
This section does not apply to Urdu.

### Capitalization
This section does not apply to Urdu.

### Gender
"ی" for feminine is used after a masculine name. But there are also some different styles.
Example:میں اخبار نہیں پڑھتا ہوں 

### Prepositions
Pay attention to the correct use of the preposition in translations. Influenced by the English language, many translators omit them or change the word order.

| US Expression | Urdu Expression | Comment |
| ---------- | --------------- | ------- |
| service request | خدمات درخواست | The translation is opposite of the correct one and is not correct. |
| -------- | درخواست خدمات | This is incorrect. |

### Pronouns
Please use the following pronouns in Urdu text.
> وہ، تو، تم، آپ، میں، ہم

### Punctuation
#### Small Dash (۔)
Small Dash (۔) is used after the end of sentence, it should be noted, Urdu does not use full stop.
> Example: مسل کھولنے کے لیے پاس ورڈ داخل کریں۔

#### Comma ، (Urdu comma)
Comma is used for separating the words, bringing pauses in sentences.

>  Example:  احمد، محمود، قاسم

#### Colon : (Urdu colon)
Use colons to show the following list or names in order.

> Example: مندرجہ ذیل کریں:

#### Hyphen
This section does not apply to Urdu.

#### Quotation Marks
In US source strings, you may find software references surrounded by English quotation marks. As same as English is followed in Urdu.

> Example: مہتاب بھائی کہتے ہیں "آپ ایسا نہ کرو"۔ 

### Singular & Plural
Singular may be used as plural in Urdu.
> Example: ہم نے اخبار پڑھے ۔

### Whitespace
There should not be extra whitespace in between, before and after the sentence.

## Copy rules
* XML tags and External Arguments should remain same. 
* XML tag => ``` <img data=>l10n=>name="icon"/> External Argument => {$name} ```

Read about copy rules styles in the [General Mozilla L10n Style Guide](../mozilla_general/).
