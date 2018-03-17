/*

Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.

*/

// My solution which has a quasilinear time complexity aka O(n log n)

function findMissing(arr1, arr2) {
  let sortedArr1 = arr1.sort((a,b) => a - b);
  let sortedArr2 = arr2.sort((a,b) => a - b);

  for (let i = 0; i < sortedArr1.length; i++) {
    let potential = sortedArr1[i];
    let curr = sortedArr2[i];

    if (potential !== curr) {
      return potential;
    }
  }
}

// My solution which has a linear time complexity aka O(n)

function findMissing(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    let curr = arr1[i];
    sum1 += curr;
  }

  for (let j = 0; j < arr2.length; j++) {
    let curr = arr2[j];
    sum2 += curr;
  }

  let target = sum1 - sum2;
  return target;
}
