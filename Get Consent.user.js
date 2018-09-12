// ==UserScript==
// @name         Check Age and Get Consent
// @version      0.1
// @description  Checks age and then requests consent.
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/islande*
// ==/UserScript==

(function() {
    'use strict';
    var age = parseInt((document.getElementsByClassName("storyevent")[1]).innerText.replace(" years old",""));

    console.log("Age found: ", age)
    if ((age >= 25) && (age <= 35)){
        change_tab('t3')
        getConsent(window.location.href.replace(/.*?=/,""))
        window.location.href = "http://islands.smp.uq.edu.au/project.php"
    }
    else{
        window.location.href = "http://islands.smp.uq.edu.au/project.php"
    }
})();
