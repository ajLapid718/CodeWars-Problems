/*

You are given an array of numbers.
Check if the array contains of pairs, i.e every number occurs exactly two times.
If true, return true, otherwise false.
Your solution should not modify the input array.

*/

function twins(myArray) {
  let obj = {};

  for (let i = 0; i < myArray.length; i++) {
    let num = myArray[i];
    obj[num] = obj[num] + 1 || 1;
  }

  for (let key in obj) {
    let val = obj[key];
    if (val !== 2) { return false };
  }

  return true;
}
