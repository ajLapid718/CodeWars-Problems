/*

You are given an initial 2-value array (x).
You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two.
If only one is a number, the score is that number.
If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays.
Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

*/

// We are given x, which is an array that contains two elements;
// If x[0] && x[1] are of the Number data type, we can return the sum of those two values;
// If only one of the two (x[0] or x[1]) are of the Number data type, we should return that value;
// If neither of the two elements are of the Number data type, we should return "Void!";
// With the score (either the sum or the single numerical value), we must return a multidimensional array;
// Each subarray will be an array containing the same values x originally held;
// The amount of subarrays will reflect the score;

function explode(x) {
  let arr = [];
  let score = 0;
  let primary = x[0];
  let secondary = x[1];

  if (Number.isInteger(primary) && Number.isInteger(secondary)) {
    score += primary;
    score += secondary;
  }
  else if (Number.isInteger(primary)) {
    score += primary;
  }
  else if (Number.isInteger(secondary)) {
    score += secondary;
  }
  else {
    return "Void!";
  }

  while (score) {
    arr.push([primary, secondary]);
    score--;
  }

  return arr;
}
