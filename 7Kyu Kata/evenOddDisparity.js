/*

Given an array, return the difference between the count of even numbers and the count of odd numbers.
0 will be considered an even number.

For example, solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers.
Even - Odd = 2 - 2 = 0.

Let's now add two letters to the last example: solve([0,1,2,3,'a','b']) = 0.
Again, Even - Odd = 2 - 2 = 0.
Ignore letters.

The input will be an array of lowercase letters and numbers only.

*/

function solve(a) {
  let evens = 0;
  let odds = 0;

  for (let i = 0; i < a.length; i++) {
    let currentElement = a[i];
    if (Number.isInteger(currentElement) === false) {
      continue;
    }
    if (currentElement % 2 === 0) {
      evens += 1;
    }
    if (currentElement % 2 !== 0) {
      odds += 1;
    }
  }

  return evens - odds;
};
