/*

Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers
[output] integer

Examples:
input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index

Random Tests Constraints:
Array length: 200 000
Amount of tests: 1 000

Time limit: 150 ms

*/

function indexEqualsValue(a) {
  let lowerBound = 0;
  let upperBound = a.length - 1;
  let target = -1;

  while (lowerBound <= upperBound) {
    let currentIdx = Math.floor((lowerBound + upperBound) / 2);
    let currentValue = a[currentIdx];

    if (currentIdx === currentValue) {
      target = currentIdx;
      upperBound = currentIdx - 1;
    }

    if (currentIdx < currentValue) {
      upperBound = currentIdx - 1;
    } 

    if (currentIdx > currentValue) {
      lowerBound = currentIdx + 1;
    }
  }

  return target;
}
