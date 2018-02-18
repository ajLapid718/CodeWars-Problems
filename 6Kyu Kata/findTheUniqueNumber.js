/*

There is an array with some numbers.
All numbers are equal except for one.
Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
  var sortedArr = arr.sort((a,b) => a - b);

  for (var i = 1; i < sortedArr.length; i++) {
    var prev = sortedArr[i-1];
    var curr = sortedArr[i];
    var folo = sortedArr[i+1];

    if (prev !== curr && curr !== folo) {
      return curr;
    }

    if (prev !== curr) {
      return prev;
    }
  }

  return sortedArr[sortedArr.length - 1];
}
