/*

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

function onlyDuplicates(str) {
  let frequencies = {};
  let letters = str.split('');
  let resultStr = '';

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    frequencies[currentLetter] = frequencies[currentLetter] + 1 || 1;
  }

  for (let j = 0; j < letters.length; j++) {
    let key = letters[j];
    let val = frequencies[key];
    if (val >= 2) {
      resultStr += key;
    }
  }

  return resultStr;
}
