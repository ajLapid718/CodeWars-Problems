/*

As a part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurance of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

`lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)`
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurances of the number to searched for, return 0.

*/

var lengthOfSequence = function (arr, n) {
  var amountOfTargetElements = arr.filter(el => el === n);

  if (amountOfTargetElements.length !== 2) {
    return 0;
  } else {
    var firstAppearance = arr.indexOf(n);
    var lastAppearance = arr.lastIndexOf(n);
    var seq = arr.slice(firstAppearance, lastAppearance + 1);

    return seq.length;
  }
};
