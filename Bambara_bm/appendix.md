# Appendix

## Guidelines for the Localization of Error Messages

## Bambara Style in Error Messages 

It is important to use consistent terminology and language style in the localized error messages, and not just translate as they appear in the US product. New localizers frequently ask for help with error messages. The main principles for translation are clarity, comprehensibility, and consistency.

## Standard Phrases in Error Messages 
When translating standard phrases, standardize. Note that sometimes the US uses different forms to express the same thing. 

**Examples:**

| English | Translation |
| ------- | ----------- | 
| Cannot … | Tɛ se ka… |
| Could not … | Koun Tɛ se ka…|
| Failed to … | Ma see ka… |
| Failure of … | … dɛsɛli |
| Cannot find … | Tɛ se ka… sɔrɔ |
| Could not find … | Koun tɛ se ka… sɔrɔ |
| Unable to find … | A bɛ se ka… sɔrɔ |
| Unable to locate … | A bɛ se ka… yɔrɔ ye |
| `Not enough memory` `Insufficient memory` `There is not enough memory` `There is not enough memory available` | Yɔrɔ bɛrɛ tɛ yɛn |
| `... is not available` `... is unavailable` | … tɛ se ka kɛ |

### Error Messages Containing Placeholders 

When localizing error messages containing placeholders, try to find out what will replace the placeholder. This is necessary for the sentence to be grammatically correct when the placeholder is replaced with a word or phrase. Note that the letters used in placeholders convey a specific meaning, see examples below:

`%d`, `%ld`, `%u`, and `%lu` means `n/a` 

`%c` means `n/a` 

`%s` means `n/a` 

**Examples of error messages containing placeholders:** 

`Checking Web %1!d! of %2!d!` means `Checking Web n/a` 

`INI file "%1!-.200s!" section` means `INI file n/a`

When localizing error messages containing placeholders, find out what text will replace the placeholder when the user sees the error message. This process is necessary because you must ensure the resulting sentence will be grammatically correct when the placeholder is replaced with a word or phrase. Most source strings have instructions that detail what text will replace the placeholder. 

In the English source string, placeholders are found in the position where they would naturally occur in that language. Since in English numerals typically precede the noun, the numeral placeholders typically precede the noun in the source strings. In Bambara, it is the opposite. The noun typically precede the numerals.

|English example | Bambara examples |
| -------------- | ---------------- | 
| in %d days | Yanni tile %d cɛ |
| %d minutes | miniti %d |

The letters and symbols used in placeholder text convey a specific meaning. Please refer to the following table for examples of placeholder text and corresponding error message text that users will see.

| Placeholder text | Error message text that users will see |
| ---------------- | -------------------------------------- | 
| `%d` `%ld` `%u` `%lu` | Number (such as 3 or 512) |
| %c | Letter (such as “f” or “s”) |
| %s | String (such as “Click here to continue.”) |
| “Checking Web 1!d! of 2!d!” | “Checking Web <number> of <number>” |
| “INI file " 1!-.200s!" section” | “INI file "<string>" section” |

| English example | Message User will see | Bambara example |
| --------------- | --------------------- | --------------- | 
| Replace invalid %s? | `Replace invalid data?` `Replace invalid file?` | Ka %s min ma ɲɛ yɛlɛma? |
| %s already exists | `File already exists` `Name already exists` | %s bɛ yen ka ban |
