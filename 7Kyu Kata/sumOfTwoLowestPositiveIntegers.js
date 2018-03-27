/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.

*/

// My solution which has a quasilinear time complexity aka O(n log n);

function sumTwoSmallestNumbers(numbers) {
  let sortedNumbers = numbers.sort((a,b) => a - b);
  let sum = numbers[0] + numbers[1];
  return sum;
};

// A refactored solution originally provided by another Codewars user with a linear time complexity aka O(n);

function sumTwoSmallestNumbers(numbers) {
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;
  let num;

  for (let i = 0; i < numbers.length; i++) {
    num = numbers[i];

    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin) {
      secondMin = num;
    }
  }

  return min + secondMin;
}
