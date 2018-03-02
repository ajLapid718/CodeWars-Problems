/*

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it.
If you have an empty array, you need to return it.

Example
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/

function sortArray(array) {
  let sortedOdds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  let j = 0

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    if (currentNum % 2 !== 0) {
      array[i] = sortedOdds[j];
      j += 1;
    }
  }

  return array;
}
