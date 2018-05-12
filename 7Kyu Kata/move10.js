/*

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

*/

// Initially;
function moveTen(s) {
  let res = "";
  let alphabet = [];

  for (let i = 97, j = 0; i <= 122; i++, j++) {
    let letter = String.fromCharCode(i);
    alphabet[j] = letter;
  }

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let transposedLetterIdx = alphabet.indexOf(letter) + 10;
    let targetLetter = alphabet[transposedLetterIdx % 26];
    res += targetLetter;
  }

  return res;
}

// Alternatively without auxillary space and in linear time;
function moveTen(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let ascii = letter.charCodeAt();

    if (ascii >= 97 && ascii <= 112) {
      res += String.fromCharCode(code + 10);
    }

    if (ascii >= 113 && ascii <= 122) {
      res += String.fromCharCode((code - 26) + 10);
    }
  }

  return res;
}
