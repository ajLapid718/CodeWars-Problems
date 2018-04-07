/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

// My solution which has a time complexity of O(n) and a space complexity of O(1);

function findOdd(arr) {
  let obj = {};

  for (let i = 0 ; i < arr.length; i++) {
    let num = arr[i];

    if (obj[num]) {
      delete(obj[num]);
    }
    else {
      obj[num] = true;
    }
  }

  let lastKeyStanding = Object.keys(obj)[0];
  return Number(lastKeyStanding);
}

// To avoid the need of making space for a hash map, the XOR operator can be used for further optimization;

function findOdd(arr) {
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    n ^= num;
  }

  return n;
}
