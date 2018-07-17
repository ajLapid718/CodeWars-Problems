/*

Description:
A Madhav array has the following property:

a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

Complete the function/method that returns true if the given array is a Madhav array, otherwise it returns false.

Edge cases: An array of length 0 or 1 should not be considered a Madhav array as there is nothing to compare.

*/

function isMadhavArray(arr) {
  if (arr.length <= 2) return false;

  let i = 1;
  let counter = 2;

  while (i < arr.length) {
    let sum = 0;

    for (let j = 1; j <= counter; j++, i++) {
      let num = arr[i];
      sum += num;
    }

    if (sum !== arr[0]) return false;
    counter++;
  }

  return true;
}
