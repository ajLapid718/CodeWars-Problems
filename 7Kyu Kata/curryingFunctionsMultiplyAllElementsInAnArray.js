/*

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument.

This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];

*/

function multiplyAll(arr) {
  function inner(factor) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      res.push(num * factor);
    }

    return res;
  }

  return inner;
}
