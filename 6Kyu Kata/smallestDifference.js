/*

Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.

Note: Try to solve this without brute force.

Example:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]

  Output = 1

Example empty array:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = []

  Output = 1

Example two empty arrays:

  arr1 = []
  arr2 = []

  Output = -1

*/

function smallestDiff(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return -1;
  if (arr1.length === 0) return Math.min.apply(null, arr2);
  if (arr2.length === 0) return Math.min.apply(null, arr1);

  let minimumDifference = Infinity;

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let otherNum = arr2[j];
      let absDifference = Math.abs(num - otherNum);
      if (absDifference < minimumDifference) {
        minimumDifference = absDifference;
      }
    }
  }

  return minimumDifference;
}
