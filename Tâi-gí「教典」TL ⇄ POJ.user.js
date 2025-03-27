// ==UserScript==
// @name         Tâi-gí「教典」TL → POJ
// @namespace    aiuanyu
// @version      1.1
// @description  予代管當局 ROC 教育部 Tâi-gí 常用詞詞典網站呈現出 POJ！（臺羅全部代換）Replaces specified patterns on sutian.moe.edu.tw once after page load (case-sensitive replacement).
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
            //console.log("Text Node Value:", node.nodeValue); // 除錯時加入這行
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
            text = text.replace(/uǎ/gi, function(match) { return (match[0] === 'U' ? 'Õ' : 'õ') + 'a'; });
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
            text = text.replace(/uě/gi, function(match) { return (match[0] === 'U' ? 'Õ' : 'õ') + 'e'; });
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
            text = text.replace(/ǒo/gi, function(match) { return (match[0] === 'O' ? 'Õ͘' : 'õ͘'); });
            text = text.replace(/ōo/gi, function(match) { return (match[0] === 'O' ? 'Ō͘' : 'ō͘'); });
            text = text.replace(/o̍o/gi, function(match) { return (match[0] === 'O' ? 'O̍͘' : 'o̍͘'); });
            text = text.replace(/őo/gi, function(match) { return (match[0] === 'O' ? 'Ŏ͘' : 'ŏ͘'); });

            // ee → e͘ (保留大小寫)
            text = text.replace(/ee/gi, function(match) {
                let result = '';
                if (match[0] === 'E') result += 'E͘'; else result += 'e͘';
                return result;
            });
            text = text.replace(/ée/gi, function(match) { return (match[0] === 'É' ? 'É͘' : 'é͘'); });
            text = text.replace(/èe/gi, function(match) { return (match[0] === 'È' ? 'È͘' : 'è͘'); });
            text = text.replace(/êe/gi, function(match) { return (match[0] === 'Ê' ? 'Ê͘' : 'ê͘'); });
            text = text.replace(/ěe/gi, function(match) { return (match[0] === 'Ě' ? 'Ẽ͘' : 'ẽ͘'); });
            text = text.replace(/ēe/gi, function(match) { return (match[0] === 'Ē' ? 'Ē͘' : 'ē͘'); });
            text = text.replace(/e̍e/gi, function(match) { return (match[0] === 'E̍' ? 'E̍͘' : 'e̍͘'); });
            text = text.replace(/e̋e/gi, function(match) { return (match[0] === 'E̋' ? 'Ĕ͘' : 'ĕ͘'); });

            // or → o (保留大小寫)
            text = text.replace(/or/gi, function(match) {
                return (match[0] === 'O' ? 'O' : 'o');
            });
            text = text.replace(/ór/gi, function(match) { return (match[0] === 'Ó' ? 'Ó' : 'ó'); });
            text = text.replace(/òr/gi, function(match) { return (match[0] === 'Ò' ? 'Ò' : 'ò'); });
            text = text.replace(/ôr/gi, function(match) { return (match[0] === 'Ô' ? 'Ô' : 'ô'); });
            text = text.replace(/ǒr/gi, function(match) { return (match[0] === 'Ǒ' ? 'Õ' : 'õ'); });
            text = text.replace(/ōr/gi, function(match) { return (match[0] === 'Ō' ? 'Ō' : 'ō'); });
            text = text.replace(/o̍r/gi, function(match) { return (match[0] === 'O̍' ? 'O̍' : 'o̍'); });
            text = text.replace(/őr/gi, function(match) { return (match[0] === 'Ő' ? 'Ŏ' : 'ŏ'); });

            // er → o̤ (保留大小寫)
            text = text.replace(/er/gi, function(match) {
                return (match[0] === 'E' ? 'O̤' : 'o̤');
            });
            text = text.replace(/ér/gi, function(match) { return (match[0] === 'É' ? 'Ó̤' : 'ó̤'); });
            text = text.replace(/èr/gi, function(match) { return (match[0] === 'È' ? 'Ò̤' : 'ò̤'); });
            text = text.replace(/êr/gi, function(match) { return (match[0] === 'Ê' ? 'Ô̤' : 'ô̤'); });
            text = text.replace(/ěr/gi, function(match) { return (match[0] === 'Ě' ? 'Õ̤' : 'õ̤'); });
            text = text.replace(/ēr/gi, function(match) { return (match[0] === 'Ē' ? 'Ō̤' : 'ō̤'); });
            text = text.replace(/e̍r/gi, function(match) { return (match[0] === 'E̍' ? 'O̤̍' : 'o̤̍'); });
            text = text.replace(/e̋r/gi, function(match) { return (match[0] === 'E̋' ? 'Ŏ̤' : 'ŏ̤'); });

            // ir → ṳ (保留大小寫)
            text = text.replace(/ir/gi, function(match) {
                return (match[0] === 'I' ? 'Ṳ' : 'ṳ');
            });
            text = text.replace(/ír/gi, function(match) { return (match[0] === 'Í' ? 'Ṳ́' : 'ṳ́'); });
            text = text.replace(/ìr/gi, function(match) { return (match[0] === 'Ì' ? 'Ṳ̀' : 'ṳ̀'); });
            text = text.replace(/îr/gi, function(match) { return (match[0] === 'Î' ? 'Ṳ̂' : 'ṳ̂'); });
            text = text.replace(/ǐr/gi, function(match) { return (match[0] === 'Ǐ' ? 'Ṳ̃' : 'ṳ̃'); });
            text = text.replace(/īr/gi, function(match) { return (match[0] === 'Ī' ? 'Ṳ̄' : 'ṳ̄'); });
            text = text.replace(/i̍r/gi, function(match) { return (match[0] === 'I̍' ? 'Ṳ̍' : 'ṳ̍'); });
            text = text.replace(/i̋r/gi, function(match) { return (match[0] === 'I̋' ? 'Ṳ̆' : 'ṳ̆'); });

            // nn → ⁿ (只有當 nn 的後面是空格或 - hyphen 時才取代)
            text = text.replace(/nn(?=[ \-,\.!\?/]|\s*$)/gi, 'ⁿ');

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
            text = text.replace(/ǐng/gi, function(match) { return (match[0] === 'Ǐ' ? 'Ẽ' : 'ẽ') + 'ng'; });
            text = text.replace(/īng/gi, function(match) { return (match[0] === 'I' ? 'Ē' : 'ē') + 'ng'; });
            text = text.replace(/i̍ng/gi, function(match) { return (match[0] === 'I̍' ? 'E̍' : 'e̍') + 'ng'; });
            text = text.replace(/i̋ng/gi, function(match) { return (match[0] === 'I' ? 'Ě' : 'ě') + 'ng'; });

            // ik → ek (保留大小寫)
            text = text.replace(/ik/gi, function(match) {
                let result = '';
                if (match[0] === 'I') result += 'E'; else result += 'e';
                if (match[1] === 'K') result += 'k'; else result += 'k';
                return result;
            });
            text = text.replace(/i̍k/gi, function(match) { return (match[0] === 'I' ? 'E̍' : 'e̍') + 'k'; });

            text = text.replace(/a̋/g, 'ă');
            text = text.replace(/e̋/g, 'ĕ');
            text = text.replace(/i̋/g, 'ĭ');
            text = text.replace(/ő/g, 'ŏ');
            text = text.replace(/ű/g, 'ŭ');

            text = text.replace(/ǎ/g, 'ã');
            text = text.replace(/ě/g, 'ẽ');
            text = text.replace(/ǐ/g, 'ĩ');
            text = text.replace(/ǒ/g, 'õ');
            text = text.replace(/ǔ/g, 'ũ');

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