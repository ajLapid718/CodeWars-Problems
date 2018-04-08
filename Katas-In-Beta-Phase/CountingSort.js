/*

Your task is to implement Counting sort algorithm.

What is known about initial array is that all its members are integers that are greater or equal 0.

Mind that it should be faster than O(n*logn) that is provided by Array.prototype.sort.

Brief description of algorithm:
- determine min and max values
- for each value from min to max count how many times it shows up in array and place corresponding values in another array.

Example:
array: [3,4,5,4,3,7]
counted array: [2,2,1,0,1] (corresponds to [3,4,5,6,7])

From that you can count displacement of every value by getting number of values that are smaller than current:

In the example above
- for '3': (0 numbers are smaller than '3') -> places are 0,1
- for '4': (places of numbers that are smaller) -> places are 2,3 etc.

*/

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
