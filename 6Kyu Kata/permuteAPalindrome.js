/*

Write a function that will check whether the permutation of an input string is a palindrome.
Bonus points for a solution that is efficient and/or that uses only built-in language functions.
Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Examples:

madam -> True
adamm -> True
junk -> False

Hint:

The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.

*/

// Initially;
function permuteAPalindrome(str) {
  let obj = {};
  let lowerCaseStr = str.toLowerCase();
  let len = str.length;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let element = lowerCaseStr[i];
    obj[element] = obj[element] + 1 || 1;
  }

  if (len % 2 === 0) {
    for (let key in obj) {
      let val = obj[key];
      if (val % 2 !== 0) return false;
    }
  }
  else {
    let oddFreqs = 0;
    for (let key in obj) {
      let val = obj[key];
      if (val % 2 !== 0) {
        oddFreqs++;
        if (oddFreqs > 1) return false;
      }
    }
  }

  return true;
}

// Alternatively;
function permuteAPalindrome(str) {
  let arr = Array(128).fill(0);
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charCode = char.charCodeAt();

    arr[charCode]++;

    if (arr[charCode] % 2 === 0) {
      count--;
    }
    else {
      count++;
    }
  }

  return count <= 1;
}
