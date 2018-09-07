/*

You are given an array containing all integers from 1 to N, except one that is missing.

In order to fill the array, one of the elements of the sequence has been duplicated.

Your mission is to find which number is missing and which one is duplicated.

Example:

solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing and 4 appears twice.

Remarks:

You are not allowed to sort the array.
Your solution should not time out for large values of N.
Ideally, your solution should not use extra space except the one provided by the input array (which can be modified).

*/

function solution(nums) {
  let expectedSum = (nums.length / 2) * (nums.length + 1);
  let actualSum = 0;
  let obj = {};
  let duplicate;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    obj[num] = obj[num] + 1 || 1;
    if (obj[num] === 2) duplicate = num;
    actualSum += num;
  }

  let missingNum = (expectedSum + duplicate) - actualSum;
  return [missingNum, duplicate];
}
