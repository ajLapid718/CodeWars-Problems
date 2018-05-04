/*

An element in an array is dominant if it is greater than all elements to its right.
You will be given an array and your task will be to return a list of all dominant elements.

For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.

*/

// My solution which has a quadratic time complexity aka O(n^2);
function solve(arr) {
  let dominantIntegers = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let digitsToRight = arr.slice(i+1);
    let bool = digitsToRight.every(num => currNum > num);
    if (bool) dominantIntegers.push(currNum);
  }

  return dominantIntegers;
}

// A refactored solution originally provided by another Codewars user;
// Linear time complexity aka O(n);
function solve(arr) {
  let dominantIntegers = [];
  let dominantNumber = -Infinity;

  for (let i = arr.length-1; i >= 0; i--) {
    let currNum = arr[i];
    if (currNum > dominantNumber) {
      dominantIntegers.push(currNum);
      dominantNumber = currNum;
    }
  }

  return dominantIntegers.reverse();
}
