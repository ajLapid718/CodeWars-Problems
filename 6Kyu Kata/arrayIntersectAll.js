/*

Write a function intersect that takes any number of arguments.
The function must return an array containing all the values that is present in every argument given to the function.

- All arguments given will be arrays.
- The first argument determines the order of the returned values.
- Return an empty array for empty result set.

Example:

var a = ['dog', 'bar', 'foo'];
var b = ['foo', 'bar', 'cat'];
var c = ['gin', 'bar', 'foo'];

intersect(a, b, c); // ['bar', 'foo'];

*/

function intersect(...args) {
  let arr = [];

  for (let i = 0; i < args.length; i++) {
    let currentArr = args[i];
    for (let j = 0; j < currentArr.length; j++) {
      let element = currentArr[j];
      if (args.every(a => a.includes(element))) arr.push(element);
    }
  }

  let uniqVals = Array.from(new Set(arr));
  return uniqVals;
}
