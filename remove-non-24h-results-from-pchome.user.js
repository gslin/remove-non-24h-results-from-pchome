// ==UserScript==
// @name        RemoveNon24hResultsFromPChome
// @namespace   https://github.com/gslin/remove-non-24h-results-from-pchome
// @match       https://ecshweb.pchome.com.tw/search/*
// @grant       none
// @version     0.20200925.0
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Remove non-24h results on PChome search page.
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    let sheet = document.createElement('style');
    sheet.innerHTML = '.result_mall {display:none;}';
    document.getElementsByTagName('head')[0].appendChild(sheet);

    let content = document.getElementById('CONTENT');
    let selector = '.col3f:has(button[_value="mall"])';

    let ob = new window.MutationObserver(function(el) {
        window.jQuery(selector, el.target).addClass('result_mall');
    });

    ob.observe(content, {
        childList: true,
        subtree: true,
    });
})();
