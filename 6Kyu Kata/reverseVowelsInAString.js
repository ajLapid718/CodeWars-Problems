/*

In this kata, your goal is to write a function which will reverse the vowels in a string.
Any characters which are not vowels should remain in their original position.

Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

*/

function reverseVowels(str) {
  let result = "";
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (isVowel(letter) === true) stack.push(letter);
  }

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (isVowel(letter) === true) {
      result += stack.pop();
    }
    else {
      result += letter;
    }
  }

  return result;
}

function isVowel(letter) {
  switch(letter.toLowerCase()) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}
