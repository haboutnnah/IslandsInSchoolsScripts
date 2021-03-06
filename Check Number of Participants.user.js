// ==UserScript==
// @name         Check Number of Participants
// @description  Checks number of participants, if less than 80, continue.
// @version      1.0.1
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/project.php
// @downloadURL  https://github.com/tf2manu994/IslandsInSchoolsScripts/raw/master/Check%20Number%20of%20Participants.user.js
// ==/UserScript==

(async () => {
    'use strict'; // Forces the code to be neat
    var num_residents = parseInt(document.getElementById("t1").children[0].innerHTML.replace("You have ","").replace(" contact.", "").replace(" contacts.","")) // Gets the number of residents
    if (document.getElementById("t1").children[0].innerHTML == "Your contacts list is empty. Visit an Islander to add them."){num_residents = 0} // Handle 0 residents
    console.log("We have " + num_residents + " residents so far") // Chucks it in to the log for debugging
    if (num_residents < 80){ // If it's less than eighty
        window.location.href = ("http://islands.smp.uq.edu.au/house.php?v=15&h=" + ((Math.floor(Math.random() * 745)))) // Go get another!
    }
})();
