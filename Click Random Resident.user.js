// ==UserScript==
// @name         Click Random Resident
// @description  Find a random number, and click the house of that number
// @version      1.0.1
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/house.php?v=15*
// @downloadURL  https://github.com/tf2manu994/IslandsInSchoolsScripts/raw/master/Click%20Random%20Resident.user.js
// ==/UserScript==

(async () => {
    'use strict'; // Forces code to be neat
        var residents = document.getElementsByClassName("resident"); // Get list of residents
        if (residents.length > 0){ // If people are in the house
            var random_resident = Math.floor(Math.random() * (residents.length - 1)) // Get a number that we use to...
            var chosen_one = residents[random_resident]; // Get a random resident...
            var clickable = chosen_one.children[0] // And click them
            window.location.href = clickable.href
        }
        else { // If no people
            window.location.href =("http://islands.smp.uq.edu.au/house.php?v=15&h=" + ((Math.floor(Math.random() * 745)))) // Go get another!
        }
})();
