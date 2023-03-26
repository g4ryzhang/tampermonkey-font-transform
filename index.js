// ==UserScript==
// @name         font-transform
// @version      0.0.1
// @description  Enhance text content for a better reading experience
// @author       g4ryzhang
// @include      https://chat.openai.com/*
// @updateURL    https://github.com/yee94/tampermonkey-iconfont-iconify/raw/main/index.user.js
// @downloadURL  https://github.com/yee94/tampermonkey-iconfont-iconify/raw/main/index.user.js
// @grant        none
// ==/UserScript==

const rf = () => {
    document.body.querySelectorAll('*:not(.flex-col):not(.capandbold)').forEach(function(node) {
        if (node.childElementCount == 0) {
            const re = new RegExp(`\\b[A-Za-z]+\\b`, 'g');
            node.innerHTML = node.textContent.replaceAll(re, match => {
                if (match.length < 3) return match;
                const len = Math.round(match.length / 2);
                return `<span class='capandbold' style='font-weight: 700;'>${match.substring(0, len)}</span>${match.substring(len)}`;
            });
        }
    });
}

document.addEventListener("keydown", e => {
    if (e.code == 'F2') rf();
});

// renderFont();
