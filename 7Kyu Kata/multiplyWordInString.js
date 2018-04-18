/*

You are to write an function that takes a string as it's first paramter.
This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string.
The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger.
You are additionally required to add a hyphen in between each word.

Example
modifyMultiply ("This is a string", 3, 5)

Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

*/

function modifyMultiply (str,loc,num) {
  let res = "";
  let words = str.split(" ");
  let targetWord = words[loc];

  let counter = 0;

  while (counter < num) {
    if (counter < num - 1) {
      res += targetWord;
      res += "-";
    } else {
      res += targetWord;
    }
    counter += 1;
  }

  return res;
}

// Alternatively;

function modifyMultiply (str,loc,num) {
  let words = str.split(" ");
  let targetWord = words[loc];

  return Array(num).fill(targetWord).join("-");
}
