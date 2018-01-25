/*

In this Kata, you will be given a string that has lowercase letters and numbers.

Your task is to compare the number groupings and return the largest number.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

*/

function solve(s) {
  var spacesAndNumsSorted = s.split(/[a-z]/);
  var currentMax = 0;

  for (var i = 0; i < spacesAndNumsSorted.length; i++) {
    var currentElement = spacesAndNumsSorted[i];

    if (typeof parseInt(currentElement) === "number" && currentMax < currentElement) {
      currentMax = parseInt(currentElement);
    }
  }

  return currentMax;
}
