/*

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy!
Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113

*/

function hexHash(code) {
  let sum = 0;
  let digits = [];

  for (let i = 0; i < code.length; i++) {
    let character = code[i];
    let asciiCode = character.charCodeAt();
    let hexValOfAscii = asciiCode.toString(16).split('');
    digits.push(...hexValOfAscii);
  }

  for (let j = 0; j < digits.length; j++) {
    let element = digits[j];

    if (isNaN(parseInt(element)) === false) {
      sum += parseInt(element);
    }
  }

  return sum;
}
