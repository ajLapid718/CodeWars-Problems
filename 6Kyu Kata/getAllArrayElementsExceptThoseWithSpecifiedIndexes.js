/*

Extend the array object with a function to return all elements of that array, except the ones with the indexes passed in the parameter.

For example:
var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);

// array2 should contain ['a', 'c', 'e'];

The function should accept both array as parameter but also a single integer, like this:
var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except(1);

// array2 should contain ['a', 'c', 'd', 'e'];

*/

// Linear Time Complexity aka O(n);
Array.prototype.except = function(keys) {
  let arr = [];

  if (typeof keys === 'number') {
    keys = [keys];
  }
  else {
    keys = countingSort(keys);
  }

  for (let i = 0, j = 0; i < this.length; i++) {
    let element = this[i];
    if (i === keys[j]) {
      j += 1;
      continue;
    }
    else {
      arr.push(element);
    }
  }

  return arr;
}

function countingSort(array) {
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }

  let count = [];
  let frontIdx = 0;

  for (let j = min; j <= max; j++) {
    count[j] = 0;
  }

  for (let k = 0; k < array.length; k++) {
    let numVal = array[k];
    count[numVal] += 1;
  }

  for (let m = min; m <= max; m++) {
    while(count[m] > 0) {
      array[frontIdx] = m;
      frontIdx++;
      count[m]--;
    }
  }

  return array;
}
