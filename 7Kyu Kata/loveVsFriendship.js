/*

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

*/

function wordsToMarks(string) {
  let alphabet = {};
  let counter = 1;

  for (let i = 97; i <= 122; i++) {
    let currentLetter = String.fromCharCode(i);
    alphabet[currentLetter] = counter;
    counter += 1;
  }

  let chars = string.split('');
  let digits = chars.map(char => alphabet[char]);
  let sum = digits.reduce((a,b) => a + b);

  return sum;
}
