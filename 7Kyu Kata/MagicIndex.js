/*

A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i.
Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2

*/

function findMagic(arr) {
  let lowerBound = 0;
  let upperBound = arr.length - 1;
  let target = -1;

  while (lowerBound <= upperBound) {
    let currIdx = Math.floor((lowerBound + upperBound) / 2);
    let currVal = arr[currIdx];

    if (currIdx === currVal) return currIdx;
    if (currIdx > currVal) lowerBound = currIdx + 1;
    if (currIdx < currVal) upperBound = currIdx - 1;
  }

  return target;
}
