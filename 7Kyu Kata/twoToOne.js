/*

Take 2 strings s1 and s2 including only letters from ato z.
Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

#Examples:

``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

*/

function longest(s1, s2) {
  let allLetters = [];

  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    if (allLetters.includes(letter) === false) {
      allLetters.push(letter);
    }
  }

  for (let j = 0; j < s2.length; j++) {
    let letter = s2[j];
    if (allLetters.includes(letter) === false) {
      allLetters.push(letter);
    }
  }

  return allLetters.sort().join("");
}
