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

(async () => {
  let count_before = await GM.getValue('count', 0);
  await GM.setValue('count', count_before + 1);
  let count_after = await GM.getValue('count');
  console.log("We've clicked on", count_after, "islanders.");
})();