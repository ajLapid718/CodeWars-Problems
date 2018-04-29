/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.

No additional characters are allowed except for those mentioned.

Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array).
Order of the face (eyes, nose, mouth) elements will always be the same.

*/

// My solution;
const validFaces = {
  ":-)": true,
  ":-D": true,
  ":~)": true,
  ":~D": true,
  ";-)": true,
  ";-D": true,
  ";~D": true,
  ";~)": true,
  ":)": true,
  ":D": true,
  ";)": true,
  ";D": true
};

function countSmileys(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let currSmiley = arr[i];
    if (validFaces[currSmiley]) {
      counter += 1;
    }
  }

  return counter;
}

// A solution provided by another Codewars user implementing a regular expression;
const smileyRegEx = new RegExp (/[:;][-~]?[)D]/); // "?" positive lookahead;
const isSmiley = s => smileyRegEx.test(s);
const countSmileys = a => a.filter(isSmiley).length;
