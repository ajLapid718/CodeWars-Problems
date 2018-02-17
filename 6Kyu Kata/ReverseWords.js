/*

Description:
Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.
Any spaces in the string should be retained.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords("double  spaces"); // returns  "elbuod  secaps"

*/

function reverseWords(str) {
  var res = str.split(' ').map(word => word.split('').reverse().join(''));
  return res.join(' ');
}
