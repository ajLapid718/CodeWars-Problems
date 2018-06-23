/*

Given two words, how many letters do you have to remove from them to make them anagrams?

Example:

First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10

Hints:

A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/5b1b27c8f60e99a467000041

*/

function anagramDifference(w1,w2) {
  let objOne = {};
  let objTwo = {};

  let counter = 0;

  for (let i = 0; i < w1.length; i++) {
    let letter = w1[i];
    objOne[letter] = objOne[letter] + 1 || 1;
  }

  for (let i = 0; i < w2.length; i++) {
    let letter = w2[i];
    objTwo[letter] = objTwo[letter] + 1 || 1;
  }

  for (let key in objOne) {
    let val = objOne[key];
    let valInOtherObj = objTwo[key];
    if (objTwo.hasOwnProperty(key) === false) {
      counter += val;
    }
    if (valInOtherObj >= val) counter += (valInOtherObj - val);
  }

  for (let key in objTwo) {
    let val = objTwo[key];
    let valInOtherObj = objOne[key];
    if (objOne.hasOwnProperty(key) === false) {
      counter += val;
    }
    if (valInOtherObj >= val) counter += (valInOtherObj - val);
  }

  return counter;
}
