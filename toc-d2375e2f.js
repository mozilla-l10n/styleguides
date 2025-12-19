// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guidelines/index.html">Guidelines</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guidelines/outline.html">Style guide outline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guidelines/example_en-us.html">Example style guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guidelines/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mozilla_general/index.html">Mozilla general style guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="af/index.html">Afrikaans (af)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ar/index.html">Arabic (ar)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ar/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hy-AM/index.html">Armenian (hy-AM)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/index.html">Bambara (bm)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/general.html">General Style Considerations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/aaa.html">Abbreviations, Acronyms, Articles, and Loan Words</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/loanwords.html">Non-translated and Loan Words</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/wl.html">Word-level Guidelines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/sl.html">Sentence-level Guidelines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bm/appendix.html">Appendix</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bn-BD/index.html">Bengali, Bangladesh (bn-BD)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="my/index.html">Burmese (my)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ceb/index.html">Cebuano (ceb)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zh-CN/index.html">Chinese, Simplified (zh-CN)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zh-CN/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zh-CN/sumo.html">SUMO Style Guide</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zh-TW/index.html">Chinese, Traditional (zh-TW)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zh-TW/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cs/index.html">Czech (cs)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cs/general.html">General Style Guide · Czech (cs)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cs/glossary.html">Glossary</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="nl/index.html">Dutch (nl)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="nl/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="eo/index.html">Esperanto (eo)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fi/index.html">Finnish (fi)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fr/index.html">French (fr)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fr/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fr/mozilla_marketing.html">Mozilla Tone of Voice &amp; Localization Guide</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="de/index.html">German (de)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="de/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="de/mozilla_marketing.html">Mozilla Tone of Voice &amp; Localization Guide</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ha/index.html">Hausa (ha)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hi-IN/index.html">Hindi (hi-IN)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hi-IN/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hil/index.html">Hiligaynon (hil)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="is/index.html">Icelandic (is)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="is/style.html">Style</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="is/brandnames.html">Brand Names</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="is/term.html">Terminology</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="is/ug.html">Units and Grammar</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="is/general.html">General Mozilla L10n Style</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="id/index.html">Indonesian (id)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="id/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ig/index.html">Igbo (ig)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ga-IE/index.html">Irish (ga-IE)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="it/index.html">Italian (it)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="it/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ja/index.html">Japanese (ja)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ja/l10nguideline.html">L10n Guideline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ja/editorialguideline.html">Editorial Guideline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ja/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ko/index.html">Korean (ko)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ko/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lo/index.html">Lao (lo)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mk/index.html">Macedonian (mk)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mg/index.html">Malagasy (mg)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ms/index.html">Malay (ms)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ms/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mr/index.html">Marathi (mr)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pl/index.html">Polish (pl)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pl/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pl/sumo.html">SUMO Style Guide</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pt-BR/index.html">Portuguese (pt-BR)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pt-BR/general.html">General Style Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pt-BR/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pt-BR/glossary.html">Glossary</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pt-PT/index.html">Portuguese (pt-PT)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pt-PT/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ro/index.html">Romanian (ro)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ru/index.html">Russian (ru)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ru/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="gd/index.html">Scottish Gaelic (gd)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sr/index.html">Serbian (sr)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="si/index.html">Sinhala (si)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sk/index.html">Slovak (sk)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sk/glossary.html">Glossary</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sl/index.html">Slovenian (sl)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es/index.html">Spanish (es)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es/sumo.html">SUMO Style Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es/ff.html">Firefox Style Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es-CL/index.html">Spanish, Chile (es-CL)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es-MX/index.html">Spanish, Mexico (es-MX)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es-MX/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es-ES/index.html">Spanish, Spain (es-ES)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="es-ES/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sw/index.html">Swahili (sw)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sw/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sv-SE/index.html">Swedish (sv-SE)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tl/index.html">Tagalog (tl)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="te/index.html">Telugu (te)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="th/index.html">Thai (th)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tok/index.html">Toki Pona (tok)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tr/index.html">Turkish (tr)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tr/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uk/index.html">Ukrainian (uk)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ur/index.html">Urdu (ur)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ur/glossary.html">Glossary</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vi/index.html">Vietnamese (vi)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vi/firefox_marketing.html">Marketing guide to Firefox localization</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="wo/index.html">Wolof (wo)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="xh/index.html">Xhosa (xh)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="yo/index.html">Yoruba (yo)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zu/index.html">Zulu (zu)</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

