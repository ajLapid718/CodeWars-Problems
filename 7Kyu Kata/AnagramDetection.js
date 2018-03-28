/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples:

"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

// My solution which has a quasilinear time complexity aka O(n log n);
function isAnagram(test, original) {
  let sortedLettersOfTest = test.toLowerCase().split('').sort().join();
  let sortedLettersOfOriginal = original.toLowerCase().split('').sort().join();

  return sortedLettersOfTest === sortedLettersOfOriginal;
}

// My solution which has a linear time complexity aka O(n);
function isAnagram(test, original) {
  if (test.length !== original.length) {
    return false;
  }

  let obj = {};
  let obj2 = {};

  let tes = test.toLowerCase();
  let orig = original.toLowerCase();

  for (let i = 0; i < tes.length; i++) {
    let letter = tes[i];
    obj[letter] = obj[letter] + 1 || 1;
  }

  for (let j = 0; j < orig.length; j++) {
    let letter = orig[j];
    obj2[letter] = obj2[letter] + 1 || 1;
  }

  for (let k = 0; k < tes.length; k++) {
    let letter = tes[k];
    if (obj[letter] !== obj2[letter]) {
      return false;
    }
  }

  return true;
}
