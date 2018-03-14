/*

Write a function that counts the number of unique consonants in a string.

Consonants are letters used in English other than 'a', 'e', 'i', 'o', 'u'.
We will count 'y' as a consonant.

Remember, your function needs to return the number of unique consonants - disregarding duplicates.
For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since 'd' is a duplicate.

Similarly, the function should also disregard duplicate consonants of differing cases.
For example, "Dad" passed into the function should return 1.

*/

function countConsonants(str) {
  let testStr = str.toLowerCase();
  let counter = 0;
  let consonants = {};

  for (let i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);

    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      continue;
    }

    consonants[letter] = 1;
  }

  for (let j = 0; j < testStr.length; j++) {
    let char = testStr[j];

    if (consonants[char] === 1) {
      counter += 1;
      consonants[char] = 0;
    }
  }

  return counter;
}
