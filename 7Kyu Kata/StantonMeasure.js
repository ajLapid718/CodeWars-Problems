/*

The Stanton measure of an array is computed as follows: count the number of 1s in the array.
Let this count be n.
The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Example:
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

*/

// O(n + n);
function stantonMeasure(arr) {
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === 1) {
      n += 1;
    }
  }

  let measure = 0;

  for (let j = 0; j < arr.length; j++) {
    let num = arr[j];
    if (num === n) {
      measure += 1;
    }
  }

  return measure;
}

// O(n);
function stantonMeasure(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    freq[num] = freq[num] + 1 || 1;
  }

  let n = freq["1"];
  let amountOfTimesNAppears = freq[n];

  return amountOfTimesNAppears || 0;
}
