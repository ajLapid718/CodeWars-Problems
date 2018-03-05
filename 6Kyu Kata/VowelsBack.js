/*

Description:

You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet.
If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet.
If they pass 'a', start again at 'z'.

Exceptions:

If the character is 'c' or 'o', move it back 1 place.
For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.

*/

// It Was Fun To Solve It This Way

function vowelBack(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let vowels = {a: true, e: true, i: true, o: true, u: true};

  let resultStr = "";

  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];

    if (currentLetter === 'c') {
      resultStr += 'b';
      continue;
    }

    if (currentLetter === 'o') {
      resultStr += 'n';
      continue;
    }

    if (currentLetter === 'd') {
      resultStr += 'a';
      continue;
    }

    if (currentLetter === 'e') {
      resultStr += 'a';
      continue;
    }

    if (vowels[currentLetter]) {
      let idx = alphabet.lastIndexOf(currentLetter);
      let targetIdx = idx - 5;
      let x = alphabet[targetIdx];
      if (x === 'c' || x === 'o' || x === 'd' || x === 'e') {
        x = currentLetter;
      }
      resultStr += x;
    } else {
      let idx = alphabet.indexOf(currentLetter);
      let targetIdx = idx + 9;
      let x = alphabet[targetIdx];
      if (x === 'c' || x === 'o' || x === 'd' || x === 'e') {
        x = currentLetter;
      }
      resultStr += x;
    }
  }

  return resultStr;
}
