/* #Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/

function tripleTrouble(wordOne, wordTwo, wordThree) {
  var sharedLength = wordOne.length;
  var finalString = "";
  var allChars = [wordOne, wordTwo, wordThree].join('').split('');
  var pointer = 0;

  for (var counter = 0; counter < sharedLength; counter++, pointer++) {
    finalString += allChars[pointer];
    finalString += allChars[pointer + sharedLength];
    finalString += allChars[pointer + (sharedLength * 2)];
  }

  return finalString;
}
