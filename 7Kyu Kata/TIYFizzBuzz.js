/*

In this exercise, you will have to create a function named tiyFizzBuzz.
This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".

*/

// Upper Case Consonants (ASCII): 65 to 90 ===> "Iron";
// Upper Case Vowels (ASCII): 65, 69, 73, 79, 85 ===> "Iron Yard";
// Lower Case Vowels (ASCII): 97, 101, 105, 111, 117 ===> "Yard";

function tiyFizzBuzz(sentence) {
  let str = "";

  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (isUpperCaseVowel(character)) {
      str += "Iron Yard";
    }
    else if (isUpperCaseConsonant(character)) {
      str += "Iron"
    }
    else if (isLowerCaseVowel(character)) {
      str += "Yard";
    }
    else {
      str += character;
    }
  }

  return str;
}

function isUpperCaseConsonant(character) {
  let code = character.charCodeAt();
  return code >= 65 && code <= 90 && !isUpperCaseVowel(character);
}

function isUpperCaseVowel(character) {
  let code = character.charCodeAt();
  switch (code) {
    case 65:
      return true;
    case 69:
      return true;
    case 73:
      return true;
    case 79:
      return true;
    case 85:
      return true;
    default:
      return false;
  }
}

function isLowerCaseVowel(character) {
  let code = character.charCodeAt();
  switch (code) {
    case 97:
      return true;
    case 101:
      return true;
    case 105:
      return true;
    case 111:
      return true;
    case 117:
      return true;
    default:
      return false;
  }
}
