/*

Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

For example:

makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')

Should return:

"and lArry walKed into the park lAte to chase a squirrel"

If the letter after x is already in caps it should stay in caps.

*/

var makeEveryLetterAfterXCaps = function (str, letter) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    let nextChar = str[i+1];

    res += currChar;

    if (currChar === letter && nextChar !== undefined) {
      res += nextChar.toUpperCase();
      i += 1;
    }
  }

  return res;
}
