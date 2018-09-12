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
    var age = parseInt((document.getElementsByClassName("storyevent")[1]).innerText.replace(" years old","")); // Get the age

    console.log("Age found: ", age) // Dump it to console
    if ((age >= min_age) && (age <= max_age)){ // If in age range
        change_tab('t3') // Change to consent tab
        getConsent(window.location.href.replace(/.*?=/,"")) // Get the islander ID
        window.location.href = "http://islands.smp.uq.edu.au/project.php" // Go check how many residents we have
    }
    else{
        window.location.href = "http://islands.smp.uq.edu.au/project.php" // Go check how many residents we have
    }
})();
