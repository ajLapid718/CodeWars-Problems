/*

Create a function that takes an argument n and sums even fibonacci numbers upto n's index in the fibonacci sequence.

Example:
sumFibs(5) === 2. (0, 1, 1, 2, 3, 5); 2 is the only number in the sequence and doesn't have another number in the sequence to get added to in the indexed fibbonacci sequence.

Example:
sumFibs(9) === 44. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34);
2 + 8 + 34 = 44;

*/

function sumFibs(num) {
  let sum = 0;
  let fibs = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibs[i] = fibs[i-2] + fibs[i-1];
  }

  for (let j = 0; j < fibs.length; j++) {
    let currentFibNum = fibs[j];
    if (currentFibNum % 2 === 0) {
      sum += currentFibNum;
    }
  }

  return sum;
};
