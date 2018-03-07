# Guidelines for creating community style guides

This document provides step-by-step instructions for creating a community style guide. Community style guides are to be used in coordination with the [Mozilla general localization style guide](../mozilla_general/README.md) but provide additional information that is vital to producing a high-quality translation in the community locale.

Each heading in this document represents a common style topic in localization. Each topic features one or more questions that pertain to the information of the topic. Below each question is a description of how to answer the question and some examples of relevant information.

## How to use these guidelines

1. Create a folder for your locale in the repository.
2. Copy the style guide template.
3. Fill out each section of the template, using the questions and directions from the guidelines below. Refer to the [example style guide](example_en-us.md) as necessary.
4. Submit a pull request to the repository administrators.
5. Request a review of your style guide from another member of your community (if there are no other members of your community, include a note in your pull request).

If your community already has a style guide, you can follow these steps, using your style guide as a resource for relevant information, or you can use these guidelines to review and update your style guide.

The language you use in your style guide is up to your community. It is recommended that you use your language or English (or your source language if you don’t translate from English).

As you follow these steps, only include information that is relevant to your locale. If you are using the style guide template, remove sections of the template that do not apply to your language or locale and remove the included template comments as you complete sections.

Once you have updated or create your community style guide, submit a pull request to the repository managers.

## Formality and Tone

**Who is the target user for this project and what is their background?**

Describe briefly the users from your locale. If the type of user from one project to another will vary, indicate so here.

**How would a target user for this project expect to interact with this project?**

Describe the type of interaction users from your locale expect. Interactions could range from authoritative and formal to friendly and casual. Indicate what kind of tone is preferred in your locale.

Describe the features that create the right tone. For example, Spanish has multiple forms of the second person pronoun `you`. Generally, `tu` is considered informal and personal and `usted` is considered formal and impersonal. Mozilla’s Photon guidelines prefer an informal and personal interaction; however, if the culture of your locale prefers a formal interaction, that should be declared in your community style guide.

**Is formal language or informal language appropriate for all of your language’s Mozilla l10n projects, or only some of them? Which ones?**

If the tone varies from project to project, indicate what tone is best for which projects.

## Natural expression

**What kind of expression sounds natural in your locale?**

Describe the features of a natural sounding localization.

**Does your locale allow for many borrowed words and phrases or few?**

List any important specific cases or include a link to any relevant resources. For example, the Spanish phrase, `En ocho días` could be translated as `in eight days`. However, a natural expression in English would be `in seven days` or even `in a week`. All three are correct translations, but the last two are more natural in English.

## Handling cultural references, idioms, and slang

**How are cultural references, idioms, and slang handled in your locale?**

Define a policy for handling these cultural references, idioms, and slang that you can make standard across all projects.

An example of a cultural reference in English would be the phrase, `kick-off meeting`. This is a reference that uses an American football term. It means a meeting to begin a project. To translate it, you can follow one of two approaches:

1. Find an equivalent reference phrase in your language.
2. Remove the cultural reference and translate the core meaning (e.g., `a commencement meeting`)

**Are there resources for cultural references, idioms, and slang in your language?**

List resources you can use to find cultural equivalents (e.g., a slang dictionary in your language).

## Units and Unit Conversion

**Does your locale use the metric system or the imperial system?**

State which measurement system is used in your locale for weight, distance, etc. State any other measurement system information or units of measurement that are relevant to your locale.

### Date Format

**How are the date formats for weeks and months expressed?**

Declare whether dates are fully spelled out, abbreviated, or represented in another way and the order of year, month and day. This can be represented with a table as seen in the [example](example_en-us.md).

### Calendar view:

**Which date is considered the first day of the week, Sunday or Monday?**

**Is Lunar calendar observed?  Other regional calendar observed?**

### Time Format

**How is time expressed in your language?**

State how time is expressed including 0-24 hr expression, hour, minute and second if relevant.

### Numerals

**How are numerals and percentages expressed in your language?**

Declare what the separators are for your number system and any other relevant information. This can be represented with a table.

### Currency

**What currency and symbols are used in your country/language?**

State what currency symbols are used in your locale. If your language covers different countries or currencies or common currency symbols vary depending on the project-by-project basis, declare the different types and uses.

### Address and Postal Code Format

**What is the address format in your language?**

Show the postal address format for your locale.

### Telephone Number format

**How are telephone numbers expressed in your language?**

Show the telephone number format.

## Grammar

### Spelling And Grammar Checks

**Does your language have standard spelling or grammar checks?**

List and explain any spelling or grammar references for your language and how regularly they should be used.

### Punctuation

**Do you use different punctuation rules in your Mozilla localization than what your language standard defines?**

Describe any variation in punctuation for Mozilla projects from language standards. If punctuation varies from project to project, list the projects that use variant punctuation.

### Whitespace

**Does your language require the use of white space around words, sentences, paragraphs, etc.?**

Describe the relevant whitespace rules in your language as they pertain to Mozilla localization. If whitespace varies from project to project or depending on the interface element, describe how.

## Copy rules

Read [this section](../mozilla_general/README.md#copy-rules) of the General Mozilla L10n Style Guide for general styles for copy rules.

**Is there an international/national standard for capitalization in your language?**

Indicate whether your language uses title case, sentence case, all caps, or some other capitalization structure. If the style changes for different textual elements such as titles of movies, books, brand names, or userface elements (`Save`, `File`, etc.).

**Is the capitalization standard appropriate for all user interface elements and for all of your language’s Mozilla l10n projects or only some of them? Which ones?**

If copy rules in your language change from project to project, list the copy rules for each project.
