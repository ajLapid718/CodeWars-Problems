/*

Write a function that accepts two arguments: an array of integers and another integer n.

Determine the number of times where two integers in the array have a difference of n.

For example:

int_diff([1, 1, 5, 6, 9, 16, 27], 4) # 3 ([1, 5], [1, 5], [5, 9])
int_diff([1, 1, 3, 3], 2) # 4 ([1, 3], [1, 3], [1, 3], [1, 3])

Note: your code should not modify the input array.

*/

function intDiff(nums, n) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let otherNum = nums[j];
      if (Math.abs(currNum - otherNum) === n) counter++;
    }
  }

  return counter;
}
