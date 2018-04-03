/*

Complete the function to find the count of the most frequent item of an array.
You can assume that input is an array of integers.
For an empty array return 0.

Example

Input Array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
Output: 5

The most frequent number in the array is -1 and it occurs 5 times.

*/

function mostFrequentItemCount(collection) {
  let obj = {};

  for (let i = 0; i < collection.length; i++) {
    let num = collection[i];
    obj[num] = obj[num] + 1 || 1;
  }

  let firstItem = collection[0];
  let maximum = obj[firstItem];

  for (let key in obj) {
    let val = obj[key];

    if (val > maximum) {
      maximum = val;
    }
  }

  return parseInt(maximum) || 0;
}
