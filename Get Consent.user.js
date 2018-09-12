// ==UserScript==
// @name         Check Age and Get Consent
// @version      0.1
// @description  Checks age and then requests consent.
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/islande*
// ==/UserScript==

var min_age = console.log("Do the setup ._.") // 25
var max_age = console.log("Do the setup ._.") // 35


(function() {
    'use strict';
    var age = parseInt((document.getElementsByClassName("storyevent")[1]).innerText.replace(" years old",""));

    if ((age >= min_age) && (age <= max_age)){ // If in age range
    }
    else{
        window.location.href = "http://islands.smp.uq.edu.au/project.php"
    }
})();
