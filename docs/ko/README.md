# Style Guides Korean (ko)

## Mozilla 제품 번역 가이드

전체글글쓴이: [Channy](http://forums.mozilla.or.kr/memberlist.php?mode=viewprofile&u=5580&sid=490bc144a9490048549e0dbce0c055cd) » 2012 08 05 15:14 47

Mozilla 제품 번역을 위한 인터페이스 및 메시지 등의 언어 리소스는 Firefox 나 Thunderbird 및 확장 기능 모두 동일합니다. dtd 파일과 properties 파일에 정의되어 있습니다 확장 기능 소스 코드 중. xul 파일에 사용되는 언어 리소스는 dtd 파일, js 파일에서 사용되는 언어 리소스는 properties라는 파일이라고 기억해두면 좋을 것입니다. 또한 확장 기능은. html 파일이 포함되어있는 경우도 있습니다.

## 1. 리소스 파일의 형식

리소스 파일은 각각 다음과 같은 형식입니다.

*dtd 파일 :* XML 형식으로 만들어져 있으므로 well-formed 되어야 합니다.

코드: [모두 선택](http://forums.mozilla.or.kr/viewtopic.php?f=15&t=15050#)<! - 주석 ->

<! ENTITY entity.name "표시할 문자열"> <! - 주석 ->

*properties 파일:* 코드: [모두 선택](http://forums.mozilla.or.kr/viewtopic.php?f=15&t=15050#)# 주석 entity.name = 표시할 문자열

위의 "표시할 문자열"부분을 번역 문자열입니다. 두 파일 모두 문자 코드는 UTF-8 (BOM 없음)에 저장합니다.

응용 프로그램에서 읽혀지는 언어 리소스는 확장 패키지에 포함된 chrome.manifest 파일에 정의되어 있으며, 각 로케일 이름 폴더로 저장되고 있습니다.

Mozilla 제품의 리소스 파일 위치는 각 모듈에 따라 위치가 정의됩니다.

1. Firefox: browser 폴더
2. Thunderbird: mail, editor 폴더
3. Firefox Mobile: mobile 폴더
4. Sunbird: calendar 폴더
5. 공통 : toolkit, dom 폴더 등

## 2. 메시지 번역 방법

각 제품별로 메시지 번역 작업은 모두 aurora 단계에서 이루어집니다. 따라서, aurora 폴더가 기본적인 작업 폴더가 됩니다. Mercurial을 통해 자신의 작업 레포지터리를 만듭니다.

코드: [모두 선택](http://forums.mozilla.or.kr/viewtopic.php?f=15&t=15050#)$ hg clone http://hg.mozilla.org/releases/l10n/mozilla-aurora/ko/

번역할 파일 및 내용은 아래 위치에서 각 제품의 aurora 부분의 H/C 에서 C를 눌러 영문 및 한국어 비교 파일을 얻습니다.

[https://l10n-stage-sj.mozilla.org/shipp ... ?locale=ko](https://l10n-stage-sj.mozilla.org/shipping/dashboard?locale=ko)

예를 들어, calendar 번역 작업을 하기 위해서는 cal-aurora의 작업 해야될 내역을 살펴봅니다. 테이블에서 H/C 필드가 있고 여기서 C를 누르면 아래와 같은 링크가 나옵니다.

[https://l10n-stage-sj.mozilla.org/dashb ... run=236897](https://l10n-stage-sj.mozilla.org/dashboard/compare?run=236897)

각 영문 repo는 한국어 repo와 구조가 같습니다.

1. Firefox, Mobile, Toolkit : [http://hg.mozilla.org/releases/mozilla- ... ales/en-US](http://hg.mozilla.org/releases/mozilla-aurora/file/xxx/browser/locales/en-US)
2. Thunderbird, Sunbird, Editor:[http://hg.mozilla.org/releases/comm-aur ... ales/en-US](http://hg.mozilla.org/releases/comm-aurora/file/xxx/calendar/locales/en-US)

## 3. 번역 작업 선정하기

먼저 자신이 어떤 제품의 번역 작업을 할지 서로 결정을 합니다. 만일 cal-aurora 작업을 한다는 점을 다른 분들에게 알리는 버그를 만듭니다.

각 버전 별 작업은 [viewtopic.php?f=15&t=15040](http://forums.mozilla.or.kr/viewtopic.php?f=15&t=15040) 에 공지됩니다.

1. 버그 생성: [https://bugzilla.mozilla.org/enter_bug. ... /%20Korean](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla%20Localizations&component=ko%20/%20Korean)
2. 버그 제목에 "Translation of calendar module for Aurora XX" 이런식으로 넣습니다.
3. 버그 생성 후 Depend On: 에 Tracking bug의 번호를 입력해서 버그 연결을 합니다.

## 4. 번역 하기

만약 여러분이 calendar 제품을 번역하겠다고 한다면, 첫번째 번역할 스트링은 ko/calendar/chrome/calendar/calendar-event-dialog.dtd에 있는
event.attachments.menubutton.label이며, 첫번째 작업할 파일은 아래 파일이 될 것입니다.
[http://hg.mozilla.org/releases/comm-aur ... dialog.dtd](http://hg.mozilla.org/releases/comm-aurora/file/3a5ec8e368d2/calendar/locales/en-US/chrome/calendar/calendar-event-dialog.dtd)

작업할 위치의 파일은 ko/calendar/chrome/calendar/calendar-event-dialog.dtd가 됩니다.

작업 파일에는 아래 코드가 없을 것입니다. 따라서 번역 후, 추가를 하면 됩니다.
accesskey 같은 경우는 번역 안하고 추가만 하면 됩니다.

코드: [모두 선택](http://forums.mozilla.or.kr/viewtopic.php?f=15&t=15050#)<!ENTITY event.attachments.menubutton.label               "첨부파일">

번역할 용어들은 애매한 경우, 이전에 번역된 메시지에서 검색해서 찾으면 도움이 됩니다. 아래 사이트에서 영문과 한글 용어를 검색해 보실 수 있습니다.
[http://transvision.mozfr.org/](http://transvision.mozfr.org/)

작업해야 할 각 파일의 번역 작업이 끝나면, 리뷰를 받기위한 diff 파일을 만듭니다.

코드: [모두 선택](http://forums.mozilla.or.kr/viewtopic.php?f=15&t=15050#)$ hg diff > cal-aurora-16.patch

위와 같이 patch 파일을 만든 후, 앞에서 만들었던 버그에 파일 첨부(attach)를 하시면 됩니다. 업로드시 patch라는 마크에 표시하시면 자동으로 패치로 인식합니다.

예를 들어, [https://bugzilla.mozilla.org/show_bug.cgi?id=773786](https://bugzilla.mozilla.org/show_bug.cgi?id=773786) 에 첨부된 patch를 참고하세요. 그리고 review flag를 ? 로 하시고, [channy@mozilla.or.kr](channy@mozilla.or.kr) 을 지정해 주세요. 그러면 제가 patch를 리뷰하고 반영을 해드리게 됩니다.

더 궁금한 점이 있으시면 댓글 달아 주십시오.

----
**Channy**
해커

**전체글:** 1005

**가입일:** 2002 03 26 17:41 59

**사는 곳:** 아름다운 제주

[쪽지 보내기](http://forums.mozilla.or.kr/ucp.php?i=pm&mode=compose&action=quotepost&p=46145&sid=490bc144a9490048549e0dbce0c055cd)

[웹사이트](http://channy.creation.net/)

*Are you creative? [http://www.creation.net](http://www.creation.net/)*
