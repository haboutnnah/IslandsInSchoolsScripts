// ==UserScript==
// @name         Check Number of Participants
// @description  Checks number of participants, if less than 40, continue.
// @version      0.1
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/project.php
// ==/UserScript==

(function() {
    'use strict';
    var num_residents = parseInt(document.getElementById("t1").children[0].innerHTML.replace("You have ","").replace(" contacts.",""))
    console.log("We have " + num_residents + " residents so far")
    if (num_residents < 40){
        window.location.href = "http://islands.smp.uq.edu.au/village.php?Pauma"
    }
})();