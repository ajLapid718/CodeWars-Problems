/*

Write a function isIntArray with the below signature.

function isIntArray(arr) {
    return true;
}

returns true if every element in an array is an integer.
returns true if array is empty.
returns false for every other input.

*/

function isIntArray(arr) {
  if (!arr) return false;
  if (arr.length === 0) return true;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (Number.isInteger(el) === false) return false;
  }

  return true;
}
