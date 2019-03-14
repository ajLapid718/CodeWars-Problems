/*

Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

An array containing only negative values can return 0.
Your solution should be efficient enough to not throw a timeout exception.

Example:
maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
Visual example:
[3, -4, 8, 7, -10, 19, -3]
       |_____________|
             ||
             \/
             24

*/

// Time Complexity: O(n);
// Space Complexity: O(1);
function maxContiguousSum(arr) {
  let maximumContiguousSum = 0;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    tempSum += currNum;

    if (tempSum < 0) {
      tempSum = 0;
    }

    if (tempSum > maximumContiguousSum) {
      maximumContiguousSum = tempSum;
    }
  }

  return maximumContiguousSum;
}
