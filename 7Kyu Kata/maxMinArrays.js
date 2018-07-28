/*

In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7.
The second max is 12 and the second min is 10 and so on.

*/

function solve(nums) {
  let arr = [...nums];
  let res = [];

  let sortedNums = arr.sort((a,b) => a - b);
  let len = arr.length;
  let i = 0;
  let j = len - 1;

  while (i <= j) {
    let currMax = arr[j];
    let currMin = arr[i];

    if (i !== j) {
      res.push(currMax);
      res.push(currMin);
    } else {
      res.push(arr[i]);
    }

    i++;
    j--;
  }

  return res;
};
