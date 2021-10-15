# Style Guide Chinese (zh)

*若需分享此文件，可使用 [http://bit.ly/MozTW-L10nStyles](http://bit.ly/MozTW-L10nStyles)*

這是由 MozTW 維護的 Mozilla 正體中文（台灣）在地化樣式與翻譯規範文件。除非另有定義，否則這份文件所定義的格式會使用在所有由 MozTW 維護的 Mozilla 產品與網頁內容，在您開始進行貢獻前請先詳讀。若對以下格式有所疑問或意見，請寄信到 [moztw-general@googlegroups.com](https://groups.google.com/forum/#!forum/moztw-general) 並[副本通知 l10n owner](https://moztw.org/about/)，或於 [MozTW 討論區](https://forum.moztw.org/viewforum.php?f=4)提出意見，謝謝。

This is the style guide of Mozilla’s Traditional Chinese (Taiwan) [zh-TW] locale. Except noted elsewhere, this style would apply to all MozTW Projects and Mozilla projects/contents maintained by MozTW. Please read carefully before starting contributing. Should you have any question or concern, or if you want to revise, please raise discussion in [moztw-general@googlegroups.com](https://groups.google.com/forum/#!forum/moztw-general) and [CC l10n owner](https://moztw.org/about/), thanks.

-----

## 共同項目

1. 需準確表達原文含意，避免翻譯後造成的模糊性或過度翻譯，若譯文反而讓人看不懂不如不要翻。
2. 不要使用機器翻譯。亦請注意需符合台灣人常用的語法。（例：o網路 x互聯網）
3. 可適度使用成語，但請力求淺顯易懂。
4. 看不懂的字 / 詞請上 mailing list 問人或上網搜尋，或暫時擱著 / 標記為 fuzzy。
5. 可適度參考其他廠商的翻譯樣式/內容，但不一定要照著翻（為求一致除外）。
  * Microsoft: [https://www.microsoft.com/en-us/language/StyleGuides?rtc=1](https://www.microsoft.com/en-us/language/StyleGuides?rtc=1)
6. 不必句對句、字對字翻譯，可適度依照文化或通順程度或前後語境調整句子順序或作刪減，但這種情況不得與第 1 點牴觸。
  * 例如：英文句法與中文句法常是前後顛倒，請適度調整。
7. 遇到 "you" 時，一般情形下使用敬語「您」。若原文沒有那麼嚴肅可視情況使用「你」，但產品內仍應使用「您」。
8. 翻譯 Mozilla 產品時，需注意是否有 LOCALIZATION NOTE。當中會有該行原文與譯文的描述。若當中包含 DONT_TRANSLATE 的描述時，請勿翻譯。
9. 若遇到長原文、有換行符號的原文或 C-Format 的原文內容，可適度依照譯文增減行數，但翻譯完需特別測試譯文是否會被截斷或影響 UI。
10. 中文沒有複數型，遇到諸如 "#1 review;#1 reviews" 的原文，請忽略複數部分（後半）。
  * 但仍需考慮這一句有沒有被塞入不同數量的可能
11. 注意中英文的 and / or 意義可能相反，尤其是反向表列的時候。
12. 注意 Gettext 的跳脫符號 \，例如 \"%s\" 應翻譯為「%s」，但若能確定該參數會顯示的內容語言非中文時則保留使用跳脫符號與引號。
13. 注意用詞的一致，若不知道該怎麼翻可至 [Transvision](https://transvision.mozfr.org/) 尋找 Translation Memory。

## 商標/品牌/產品

1. Mozilla 商標/品牌（例：Mozilla Firefox）：不翻譯
2. Mozilla 產品功能（例：Firefox Account、Private Browsing、Sync）：看前後文意而定，但商標/品牌本身仍不翻譯
  * 可翻譯成「Firefox 帳號」、「隱私瀏覽」；Sync 亦可譯為「同步」、「同步功能」
3. 在程式內被寫死，以字串替代的名稱：不翻譯
  * 例如：Firefox 會依照 release channel 的不同，在產品內以 Firefox、Aurora、Nightly 取代 &brandShortName; 變數
4. 其他公司、品牌：原則上不翻譯，但看情況而定。
  * 例如 Microsoft 可視情況在 SUMO 文件內翻譯為「微軟」，但不將「Microsoft Edge」翻譯為「微軟 Edge」。

## 標點符號

1. 使用中華民國教育部出版之[《重訂標點符號手冊》修訂版](http://language.moe.gov.tw/001/Upload/FILES/SITE_CONTENT/M0001/HAU/haushou.htm)當中的標點符號。
2. 中文字、標點符號與半形英數、符號字元間需用半形空格隔開，但與全形符號間則免。
  * 例如：「這是 Firefox」的「是」與「F」間有使用空格隔開，而「對於使用者，Mozilla」當中的「，」與「M」間則沒有空格。
3. 無論句子語言為何，句尾冒號使用半形冒號「:」，而非全形冒號「：」。
4. 依照文字語言使用相對應的標點符號。
  * "." 作為句點應譯為「。」、" 作為引號，應翻譯為「」。
  * 刪節號應譯為「…」(U+2026)，可使用一組就好。遇到原文使用三個點(“...”) 時可報 Bug 修正。

## SUMO

1. 文章的 slug（網址後面的 seo 文章 id）不須翻譯，直接複製英文版即可。
2. 若不小心弄出了 slug 錯誤的文件，請聯絡 L10n 團隊編輯將錯誤的文件砍除，並修正連結。
3. 語意正確度、不漏譯、標點符號正確為先，文章的連貫性與通順度次之。不要有沒必要的空格或是零碎的句子。
4. 未完成翻譯前若需先送出手上的文件，請在送出審核前描述編修內容時勾選 "This edit does not make this article up to date. The English differences should not change on the next edit."，下次進行翻譯時將不會自動取回最新的原文。
5. 文件中若提及某軟體或產品內的功能，應依照該軟體內的文字翻譯。
6. “Warning: ”譯為「警告: 」、"Note: " 譯為「註: 」、"Tip: " 譯為「秘訣: 」

## MDN

1. 請查閱 [MDN 中文翻譯指引](https://github.com/mdn/translated-content/blob/main/docs/zh-tw/translation-guide.md)

## 測試 / QA

1. 注意以動名詞開頭的句子在中文語境下的型態。
  * 例："Installing" 可能需翻譯為「安裝中」或「安裝」。
2. 注意英文句子中子句順序與中文不同的情況。
3. 注意一字多義的情況，若語句怪怪的或不通順可發信討論。
4. 注意字串長度，看看譯文是否會被截斷。若無法直接透過 l10n 調整則可報 Bug 修正。
5. 遇到樣式、排版或是因為中文缺少好用的 Web Font 而造成的不美觀，可請 l10n owner 聯絡專案負責人修正。
6. 注意日期時間格式是否符合使用習慣。
7. 可調整 ordered arguments 在句中的順序。
  * 例："Downloading %1$d of %2$d" 視長度而定，可翻譯為「正在下載 %2$d 個檔案當中的第 %1$d 個」或「正在下載 %1$d 個／%2$d 個檔案」。
8. 翻譯之後可重新閱讀幾遍，看看譯文通不通順，再行修飾。
  * 同一句裡面不要重複出現相同的主詞，某些數量與量詞亦可省略，例如：”If you lost your password” 可翻譯為「若您忘記了密碼」而非「若您忘記了您的密碼」

## MozLinks

1. 開始翻譯時請在標題時間前面加上「[翻譯中]」，文章翻譯完成後改成「[已翻譯]」。翻譯完成後 Mail 至 [mozlinks-zh-editor@googlegroups.com](https://groups.google.com/forum/#!forum/mozlinks-zh-editor) 通知編輯已完成某篇文章翻譯。
2. 將翻譯內容寫在轉貼原文下方的 ”中譯：（請在下方翻譯）” 區塊；翻譯區塊下的原文、授權等內容應放在翻譯內容的最後，翻譯者不應做任何更改。
3. 編輯內容如遇連結或其他語法請參考 Markdown 語法編輯。
  * ”MozLinks” 需要 “[http://mozlinks.moztw.org/](http://mozlinks.moztw.org/)” 連結，則翻譯內容描述為”[MozLinks](http://mozlinks.moztw.org/)”
  * ”MozLinks” 需要使用標題二的字型，則描述應為 ”##MozLinks”
  * “MozLinks” 是清單內的其中一項內容，則描述應為 ”- MozLinks” 或 “* MozLinks”
4. 文章翻譯者應在 φ [  ] 翻譯 - [   ] 編輯 當中，前者的 [ ] 翻譯 方框改成自己的名字；編輯的方框則是留給校閱文章的審核者使用。
