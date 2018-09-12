// ==UserScript==
// @name        Count loads of islande*
// @description Stores and logs a counter of executions.
// @version      0.1
// @namespace    https://hannahi.com/
// @author       Hannah Ivy <contact@hannahi.com>
// @match        http://islands.smp.uq.edu.au/islande*
// @grant       GM.setValue
// @grant       GM.getValue
// ==/UserScript==

(async () => { // Asynchrynous - Don't wait, and be low priority
  let count_before = await GM.getValue('count', 0); // Get how many times we've c;icked a resident, if none, set to zero.
  await GM.setValue('count', count_before + 1); // Add one
  let count_after = await GM.getValue('count'); // Now do it to the local value
  console.log("We've clicked on", count_after, "islanders."); // Print it to console
})();