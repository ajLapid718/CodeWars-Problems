/*

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

*/

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === [] || arrayOfArrays === null) {
    return 0;
  }

  var resultLengths = [];

  for (var i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] === null) {
      return 0;
    }

    var lengthOfCurrentArray = arrayOfArrays[i].length;
    resultLengths.push(lengthOfCurrentArray);
  }

  var sortedLengths = resultLengths.sort((a, b) => a - b);
  var lowerBound = sortedLengths[0];

  if (lowerBound === 0) {
    return 0;
  }

  for (var j = 0; j < sortedLengths.length; j++) {
    if (sortedLengths[j] !== lowerBound) {
      return lowerBound;
    }
    lowerBound++;
  }

  return 0;
}
