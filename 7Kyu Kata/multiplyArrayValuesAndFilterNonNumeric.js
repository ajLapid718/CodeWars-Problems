/*

Your task is to write a function, which takes two arguments and returns an array.
First argument is an array of values, scecond is multiplier.
Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.

*/

function multiplyAndFilter(array, multiplier) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Number.isFinite(element) === true) {
      arr.push(element * multiplier);
    }
  }

  return arr;
}
