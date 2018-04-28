/*

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be alphabet characters only.
Don't worry about lower and upper case. See test cases for more examples.

*/

function dup(s) {
  return s.map(word => removeConsec(word));
};

function removeConsec(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let folo = str[i+1];
    if (curr !== folo) {
      res += curr;
    }
  }

  return res;
}
