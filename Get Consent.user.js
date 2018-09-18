// ==UserScript==
// @name         Check Age and Get Consent
// @description  Checks age and then requests consent.
// @version      1.0.0
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/islande*
// @downloadURL  https://github.com/tf2manu994/IslandsInSchoolsScripts/raw/master/Get%20Consent.user.js
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==



(async () => {
    'use strict';
    var age = parseInt((document.getElementsByClassName("storyevent")[1]).innerText.replace(" years old","")); // Get the age

    var set_age = async(variable_name, description) => {
        let before = await GM.getValue(variable_name, "nil"); // Get how many times we've clicked a resident, if none, set to zero.
        if (before == "nil"){ before = parseInt(prompt("What is the " + description + " age in your age group?"))}
        await GM.setValue(variable_name, before); // Add one
        return await GM.getValue(variable_name); // Now do it to the local value    
    }

    let count_before = await GM.getValue('count', 0); // Get how many times we've clicked a resident, if none, set to zero.
    await GM.setValue('count', count_before + 1); // Add one
    let count_after = await GM.getValue('count'); // Now do it to the local value

    console.log("We've clicked on", count_after, "islanders."); // Print it to console
    console.log("Age found: ", age) // Dump it to console

    var min_age = set_age("min_age", "minimum")
    var max_age = set_age("max_age", "maximum")

    if ((age >= min_age) && (age <= max_age)){ // If in age range
        change_tab('t3') // Change to consent tab
        getConsent(window.location.href.replace(/.*?=/,"")) // Get the islander ID
        window.location.href = "http://islands.smp.uq.edu.au/project.php" // Go check how many residents we have
    }
    else{
        window.location.href = "http://islands.smp.uq.edu.au/project.php" // Go check how many residents we have
    }
})();
