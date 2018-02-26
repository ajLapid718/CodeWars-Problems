/*

Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the array is empty, you should return 0.

*/

function evenLast(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];

    if (i % 2 === 0) {
      sum += currentNum;
    }
  }

  return sum * numbers.slice(-1);
}
