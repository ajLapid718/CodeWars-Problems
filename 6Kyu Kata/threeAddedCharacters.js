/*

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.

Can you do it in O(m+n) or O(n) time and O(1) Space ?

When you're done you'll be shown the average runtime your code took to finish all test cases; feel free to include it at the top of your solution ;)

Collapse 'Test cases' or scroll down to the end of the test cases to see your code's Average runtime

*/

// My initial solution;
function addedChar(s1, s2) {
  let objOne = {};
  let objTwo = {};

  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    objOne[letter] = objOne[letter] + 1 || 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    objTwo[letter] = objTwo[letter] + 1 || 1;
  }

  for (let key in objTwo) {
    if (objOne[key] !== objTwo[key]) return key;
  }
}

// My alternate solution using the XOR operator;
function addedChar(s1, s2) {
  let allLetters = s1 + s2;
  let charCodes = allLetters.split('').map(letter => letter.charCodeAt());
  let targetCharCode = charCodes.reduce((a,b) => a ^ b);
  return String.fromCharCode(targetCharCode);
}

// A solution provided by a Codewars user who implemented the bitwise NOT operator;
function addedChar(s1, s2) {
  let ascii = 0;

  for (let i = 0; i < s2.length; i++) {
    ascii += (s2.charCodeAt(i) - ~~s1.charCodeAt(i));
  }

  return String.fromCharCode(ascii/3);
}
