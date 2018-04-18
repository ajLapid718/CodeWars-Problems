/*

Function receive a two-dimensional array of random integers.
On the main diagonal all the integers of this array with the sign (-) must be changed to 0, and the integers with a sign (+) must be changed to 1.

Example:

Incoming Array: [[ -1, 4, -5, -9, 3 ], [6, -4, -7, 4, -5 ], [3, 5, 0, -9, -1 ], [1, 5, -7, -8, -9 ], [-3, 2, 1, -5, 6 ]];

//Output Array: [[ 0, 4, -5, -9, 3 ], [6, 0, -7, 4, -5 ], [3, 5, 1, -9, -1 ], [1, 5, -7, 0, -9 ], [-3, 2, 1, -5, 1 ]];

*/

function matrix(array) {
  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    for (let j = 0; j < currentArray.length; j++) {
      if (currentArray[i] < 0) {
        currentArray[i] = 0;
      }
      if (currentArray[i] > 0) {
        currentArray[i] = 1;
      }
    }
  }

  return array;
}

// An alternative, non-mutating approach;

function matrix(array) {
  let arr = JSON.parse(JSON.stringify(array)); // generate a deep copy of the array;
  for (let i = 0; i < arr.length; i++) {
    arr[i][i] = arr[i][i] < 0 ? 0 : 1;
  }
  return arr;
}
