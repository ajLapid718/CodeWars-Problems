/*

You have an array of numbers.
Your task is to sort ascending odd numbers and descending even numbers.

Note that zero is even number.
If you have an empty array, you need to return it.

Example:
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 8, 4, 5, 2]

*/

function sortArray(array) {
  let arr = [];
  let odds = [];
  let evens = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (num % 2 === 0) {
      evens.push(num);
    }
    else {
      odds.push(num);
    }
  }

  odds.sort((a,b) => a - b);
  evens.sort((a,b) => b - a);

  for (let i = 0, j = 0, k = 0; i < array.length; i++) {
    let oddNum = odds[j];
    let evenNum = evens[k];

    if (array[i] % 2 === 0) {
      arr.push(evenNum); // Shift would've helped improved space complexity;
      k += 1;
    } else {
      arr.push(oddNum); // Shift would've helped improved space complexity;
      j += 1;
    }
  }

  return arr;
}
