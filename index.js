// ==UserScript==
// @name         font-transform
// @version      0.0.2
// @description  Enhance text content for a better reading experience
// @author       g4ryzhang
// @include      https://chat.openai.com/*
// @updateURL    https://github.com/g4ryzhang/tampermonkey-font-transform/raw/main/index.js
// @downloadURL  https://github.com/g4ryzhang/tampermonkey-font-transform/raw/main/index.js
// @grant        none
// @license      MIT
// ==/UserScript==

const rf = () => {
    document.body.querySelectorAll('*:not(.flex-col):not(.capandbold)').forEach(node => {
        if (node.childElementCount == 0) {
            node.innerHTML = node.textContent.replaceAll(/\b[A-Za-z]+\b/g, match => {
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

