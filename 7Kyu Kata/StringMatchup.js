/*

Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example

array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)

Therefore, solve(array1, array2) = [2, 1, 0]

*/

// My solution which runs in quadratic time

function solve(a,b) {
  let res = [];

  for (let i = 0; i < b.length; i++) {
    let counter = 0;
    let currentPhrase = b[i];
    for (let j = 0; j < a.length; j++) {
      let potentialMatch = a[j];
      if (currentPhrase === potentialMatch) {
        counter += 1;
      }
    }
    res.push(counter);
  }

  return res;
}

// My solution which runs in linear time

function solve(a,b) {
  let seen = {};
  let result = [];

  for (let i = 0; i < a.length; i++) {
    let phrase = a[i];
    seen[phrase] = seen[phrase] + 1 || 1;
  }

  for (let j = 0; j < b.length; j++) {
    let targetPhrase = b[j];

    if (seen[targetPhrase]) {
      result.push(seen[targetPhrase]);
    } else {
      result.push(0);
    }
  }

  return result;
}
