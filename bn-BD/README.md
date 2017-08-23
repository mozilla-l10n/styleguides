# Mozilla L10n Style Guide Bengali Bangladesh (bn-BD)

## Intro

Style guides define the standard against which we determine a translation's quality. They contain rules that are both defined by Mozilla and by Mozilla's localization communities on how to best translate text in Mozilla products, websites, and other projects. Style guides are used to both translate and evaluate a translation's quality. By following these rules, a translator has a better chance of producing a high quality translation that represents Mozilla values and culture.

Available style guide for Bangla:

   * [Facebook](https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn2/t39.2365-6/10173500_412391198899035_1962405903_n.pdf)
   * [Microsoft](https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi3_L6y1afPAhWHKY8KHS_YCvEQFggdMAA&url=http%3A%2F%2Fdownload.microsoft.com%2Fdownload%2F4%2F5%2Fb%2F45b699fe-91a3-4405-ab3e-fdae2d196b32%2Fben-bgd-styleguide.pdf&usg=AFQjCNEHIZmgDUNjMfi11L9EMl2sprn_QQ)

## Bengali Language

Bengali also known by its endonym Bangla, is an Indo-Aryan language spoken in South Asia. It is the national and official language of the People's Republic of Bangladesh, and official language of several northeastern states of the Republic of India, including West Bengal, Tripura, Assam (Barak Valley) and Andaman and Nicobar Islands. [more in Wikipedia](https://en.wikipedia.org/wiki/Bengali_language)

## Characters/Alphabet

The Bengali alphabet or Bangla alphabet (Bengali: বাংলা লিপি Bangla lipi) is the writing system for the Bengali language and is the 6th most widely used writing system in the world. The script is shared by Assamese with minor variations and is the basis for the other writing systems like Meithei and Bishnupriya Manipuri. Historically, the script has also been used to write Sanskrit in the region of Bengal.

    To know more about Bengali Alphabets [click here](https://en.wikipedia.org/wiki/Bengali_alphabet)

## Language-specific Mozilla style

### Formality and Tone

Instructions from the early days of Bengli l10n from Ankur Bangla Project [read-more](http://www.tldp.org/HOWTO/text/Bangla-HOWTO)

While translating, remember not to kill the language ;-). Do not overdo the translation - do not use Sadhu Basha . Also, when the computer is addressing the user, it is samman-shuchak (karun, balun, etc) while the computer is addressed by karo, balo, etc. If a Bangla equivalent sounds too out of the ordinary - keep the English word (in Bangla script) - it can be always changed/improved later. DO NOT overdo anything.

    The language should not be too much formal and bookish. The tone should be less formal and bookish.
    The user should be addressed as "আপনি". Machine provide any message should be in "আপনি" tone.
    In a case of command machine should be addressed machine as "তুমি".

### Natural expression

    Handling cultural references, idioms, and slang

### Style consistency

Finally, adherence to Mozilla and third-party branding and style guides should be respected throughout a localization project. More information on Mozilla-specific branding rules can be [found here](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/). For example, some brand names should never be translated, such as "Firefox".

    To know about branding rules in bn-BD [Mozilla Brand Names and Trademarks](http://wiki.mozillabd.org/index.php?title=Unchanged_Words#Mozilla_Brand_Names_and_Trademarks)

### Terminology

Here are a few existing term bases we approve of for software/internet terminology and definitions (though not limited to):

    [Microsoft key terms and target languages](https://www.microsoft.com/Language/en-US/Default.aspx)
    [Pootle's own term list](https://mozilla.locamotion.org/xx/terminology/essential.po)

    Tips on translating difficult concepts
    Developing new term bases
    Units and Grammar
    Units and Unit Conversion

### Date Format

In general in Bangladesh

    date format
        dd/mm/yyyy (২৭/১২/২০১৬)
        ১২ জুন, ২০১৬
        পহেলা এপ্রিল

How are the date formats for weeks and months expressed in the following forms:

    * Month (Fully spelled)
        * জানুয়ারি
        * ফেব্রুয়ারি
        * মার্চ
        * এপ্রিল
        * মে
        * জুন
        * জুলাই
        * আগষ্ট
        * সেপ্টেম্বর
        * অক্টোবর
        * নভেম্বর
        * ডিসেম্বর
    * Month (2 or 3 letters)
        * জানু
        * ফেব্রু
        * মার্চ
        * এপ্রি
        * মে
        * জুন
        * জুলা
        * আগ
        * সেপ্টে
        * অক্টো
        * নভে
        * ডিসে
    * Week (Fully spelled)
        * শনিবার
        * রবিবার
        * সোমবার
        * মঙ্গলবার
        * বুধবার
        * বৃহস্পতিবার
        * শুক্রবার
    * Week (2 or 3 letters)
        * শনি
        * রবি
        * সোম
        * মঙ্গল
        * বুধ
        * বৃহঃ
        * শুক্র
   * Week (1 letters)
        * শ
        * র
        * সো
        * ম
        * বু
        * বৃ
        * শু

    Reference material can be [found here](https://en.wikipedia.org/wiki/Date_format_by_country)

### Calendar view

রবিবার is considered as the first day of the week in Bangladesh, and শনিবার is the end of the week. শুক্রবার is the day off in Bangladesh.

### Time Format

In Bangladesh time is presented as hh:mm

    am=পূর্বাহ্ন
    pm=অপরাহ্ন

Time also can be presented as in 24 hours format as well.

Short form of Bangladesh Standard Time is BST.

### Numerals

Numbers should not be translated. This is applicable for decimals. Comma in numbers should be like 10,00,000.

### Currency

Bangladeshi currency should be presented as "টাকা" (Taka). Symbol of the currency is '৳'. Short form of Bangladeshi Taka is "BDT".

### Units

Units which is written in full-form, transliterate it in Bengali. Like kilometer can be written as 'কিলোমিটার'। But if it is written in short-form, that should be kept as it is. Like km must be written as km.

### Names

Brand names, trademarks, product names should be kept as it is. Like Mozilla, Google, Firefox. Other than that any name can be transliterated.

    [Click here for more on names](http://wiki.mozillabd.org/index.php?title=Unchanged_Words#Names)

### Address and Postal Code Format

    [House no][Area/Street/Village][Post Office][Thana][District][Post Code][Country]
    Example: হাউজ নং ৮৩/বি, রোড নং ৪, কামাল আতাতুর্ক এভিনিউ, বনানী, ঢাকা-১২১৩, বাংলাদেশ

    To know more about Postcode of Bangladesh [click here](http://www.bangladeshpost.gov.bd/PostCode.asp)

### Telephone Number format

When dialing a Bangladesh number from inside of Bangladesh, the format is : "0 - Area/operator code (X) - subscriber number (N)"

When dialing a Bangladesh number from outside Bangladesh, the format is : "+880 - Area/operator code (X) - subscriber number (N)"

The subscriber number is the number unique to each individual telephone/mobile following the area/operator code. The Area/operator codes in Bangladesh are listed below, with a typical number format, where "X" explains the Area/Operator code and "N" explains individual subscriber's telephone/mobile number.

    To know more see Wikipedia page [Telephone numbers in Bangladesh](https://en.wikipedia.org/wiki/Telephone_numbers_in_Bangladesh)

    Spelling And Grammar Checks

### Tense

    To know more about Tense in Bengali [click here](https://en.wikipedia.org/wiki/Bengali_grammar#Tense)

    Word Forms
    Pluralization

### Abbreviations

Abbreviations should be kept as it is. No translation no transliteration.

    To know more about this [click here](http://wiki.mozillabd.org/index.php?title=Unchanged_Words#Abbreviations)

### Acronyms

Abbreviation এ প্রতিটি অক্ষরকে আলাদাভাবে উচ্চারণ করা হয় এবং এটাকে শব্দ হিসেবে পড়া হয় না। কিন্তু Acronyms কে একটি শব্দ হিসেবে উচ্চারণ করা হয় এবং Abbreviation এর মত প্রতিটি অক্ষরকে আলাদাভাবে উচ্চারণ করা হয় না। যেমন SIM এর উচ্চারণ "এসআইএম" এর বদলে "সিম" করা হয়ে থাকে। এ ক্ষেত্রে আমরা শব্দকে উচ্চারণের ভিত্তিতে বাংলা করা যাবে যদি শব্দটি সমাজে বহুল প্রচলিত হয়ে থাকে।

### Punctuation

Bengali punctuation marks, apart from the downstroke দাড়ি dari (|), the Bengali equivalent of a full stop, have been adopted from western scripts and their usage is similar: Commas, semicolons, colons, quotation marks, etc. are the same as in English. Capital letters are absent in the Bengali script so proper names are unmarked.

    To know more about Bengali alphabets [click here](https://en.wikipedia.org/wiki/Bengali_alphabet)

   * Emphasis
   * Hyphens and compounds
   * Prepositions and articles
   * Diacritics and Special characters
   * Quotes
   * Whitespace
   * User Interface Elements
   * General Mozilla l10n style
   * Accuracy
   * Meaning-based translation

## Should not be translated

Please see page [Unchanged words](http://wiki.mozillabd.org/index.php?title=Unchanged_Words) at MozillaBD wiki.

   * Translating culture-specific references
   * Legal content
   * Fluency
