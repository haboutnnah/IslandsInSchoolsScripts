// ==UserScript==
// @name         Click Random Resident
// @version      0.1
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/village.php?Pauma
// ==/UserScript==

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // Promise that acts to sleep. TODO: Get a better way of doing this.
}

(function() {
    'use strict'; // Forces code to be neat
    var house_num = ((Math.floor(Math.random() * 745))) // Get a random number that we use to...
    getHouse(house_num); // Get random house!
    //console.log("Got House.");
    //console.log("Pausing...")
    sleep(500).then(() => { // Wait for the modal to come up
        var residents = document.getElementsByClassName("resident"); // Get list of residents
        //console.log("Got residents", residents);
        if (residents.length > 0){ // If people are in the house
            var random_resident = Math.floor(Math.random() * (residents.length - 1)) // Get a number that we use to...
            console.log("Clicking on " + house_num + "." + (random_resident + 1))
            var chosen_one = residents[random_resident]; // Get a random resident...
            //console.log("The chosen one has been selected!", chosen_one)
            var clickable = chosen_one.children[0] // And click them
            //console.log("Ready to click!", clickable)
            clickable.click()}
        else { // If no people
            window.location.href = "http://islands.smp.uq.edu.au/village.php?Pauma" // Refresh the page
        }
    })
})();
