// ==UserScript==
// @name         「教典」TL → POJ
// @namespace    aiuanyu
// @version      0.9
// @description  Replaces specified patterns on sutian.moe.edu.tw once after page load (case-sensitive replacement).
// @author       Aiuanyu 愛灣語
// @match        http*://sutian.moe.edu.tw/*
// @grant        none
// @license      GNU GPLv3
// @downloadURL none
// ==/UserScript==

(function() {
    'use strict';

    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;

            // ts → ch (保留大小寫)
            text = text.replace(/ts/gi, function(match) {
                let result = '';
                if (match[0] === 'T') result += 'C'; else result += 'c';
                if (match[1] === 'S') result += 'H'; else result += 'h';
                return result;
            });

            // ua → oa (保留大小寫)
            text = text.replace(/ua/gi, function(match) {
                let result = '';
                if (match[0] === 'U') result += 'O'; else result += 'o';
                if (match[1] === 'A') result += 'a'; else result += 'a';
                return result;
            });
            text = text.replace(/uá/gi, function(match) { return (match[0] === 'U' ? 'Ó' : 'ó') + 'a'; });
            text = text.replace(/uà/gi, function(match) { return (match[0] === 'U' ? 'Ò' : 'ò') + 'a'; });
            text = text.replace(/uâ/gi, function(match) { return (match[0] === 'U' ? 'Ô' : 'ô') + 'a'; });
            text = text.replace(/uā/gi, function(match) { return (match[0] === 'U' ? 'Ō' : 'ō') + 'a'; });
            text = text.replace(/ua̍/gi, function(match) { return (match[0] === 'U' ? 'Ŏ' : 'ŏ') + 'a'; });
            text = text.replace(/ua̋/gi, function(match) { return (match[0] === 'U' ? 'Ŏ' : 'ŏ') + 'a'; }); // Assuming ̋ is also meant to be ŏ

            // ue → oe (保留大小寫)
            text = text.replace(/ue/gi, function(match) {
                let result = '';
                if (match[0] === 'U') result += 'O'; else result += 'o';
                if (match[1] === 'E') result += 'e'; else result += 'e';
                return result;
            });
            text = text.replace(/ué/gi, function(match) { return (match[0] === 'U' ? 'Ó' : 'ó') + 'e'; });
            text = text.replace(/uè/gi, function(match) { return (match[0] === 'U' ? 'Ò' : 'ò') + 'e'; });
            text = text.replace(/uê/gi, function(match) { return (match[0] === 'U' ? 'Ô' : 'ô') + 'e'; });
            text = text.replace(/uē/gi, function(match) { return (match[0] === 'U' ? 'Ō' : 'ō') + 'e'; });
            text = text.replace(/ue̍/gi, function(match) { return (match[0] === 'U' ? 'Oe̍' : 'oe̍'); });
            text = text.replace(/ue̋/gi, function(match) { return (match[0] === 'U' ? 'Ŏ' : 'ŏ') + 'e'; });

            // oo → o͘ (保留大小寫)
            text = text.replace(/oo/gi, function(match) {
                let result = '';
                if (match[0] === 'O') result += 'O͘'; else result += 'o͘';
                return result;
            });
            text = text.replace(/óo/gi, function(match) { return (match[0] === 'O' ? 'Ó͘' : 'ó͘'); });
            text = text.replace(/òo/gi, function(match) { return (match[0] === 'O' ? 'Ò͘' : 'ò͘'); });
            text = text.replace(/ôo/gi, function(match) { return (match[0] === 'O' ? 'Ô͘' : 'ô͘'); });
            text = text.replace(/ōo/gi, function(match) { return (match[0] === 'O' ? 'Ō͘' : 'ō͘'); });
            text = text.replace(/o̍o/gi, function(match) { return (match[0] === 'O' ? 'O̍͘' : 'o̍͘'); });
            text = text.replace(/őo/gi, function(match) { return (match[0] === 'O' ? 'Ŏ͘' : 'ŏ͘'); });

            // nn → ⁿ (保留大小寫 - 但替換字元是固定的)
            text = text.replace(/nn/gi, 'ⁿ');


            // ing → eng (保留大小寫)
            text = text.replace(/ing/gi, function(match) {
                let result = '';
                if (match[0] === 'I') result += 'E'; else result += 'e';
                if (match[1] === 'N') result += 'n'; else result += 'n';
                if (match[2] === 'G') result += 'g'; else result += 'g';
                return result;
            });
            text = text.replace(/íng/gi, function(match) { return (match[0] === 'I' ? 'É' : 'é') + 'ng'; });
            text = text.replace(/ìng/gi, function(match) { return (match[0] === 'I' ? 'È' : 'è') + 'ng'; });
            text = text.replace(/îng/gi, function(match) { return (match[0] === 'I' ? 'Ê' : 'ê') + 'ng'; });
            text = text.replace(/īng/gi, function(match) { return (match[0] === 'I' ? 'Ē' : 'ē') + 'ng'; });
            text = text.replace(/i̋ng/gi, function(match) { return (match[0] === 'I' ? 'Ě' : 'ě') + 'ng'; });

            // ik → ek (保留大小寫)
            text = text.replace(/ik/gi, function(match) {
                let result = '';
                if (match[0] === 'I') result += 'E'; else result += 'e';
                if (match[1] === 'K') result += 'k'; else result += 'k';
                return result;
            });
            text = text.replace(/i̍k/gi, function(match) { return (match[0] === 'I' ? 'E̍' : 'e̍') + 'k'; });


            node.nodeValue = text;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (let i = 0; i < node.childNodes.length; i++) {
                replaceText(node.childNodes[i]);
            }
        }
    }

    // Execute replacement after the page has loaded
    window.addEventListener('load', function() {
        replaceText(document.body);
    });
})();