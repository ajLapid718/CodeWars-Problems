/*

PUZZLE #2. SUM again

You may find useful to solve this one first: https://www.codewars.com/kata/sum-number-1/

Assignment:

Write a function named sum which performs addition in the way shown below

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum()           // => 0

You're not allowed to use let or var keywords in your source code.

HINT: Use stack;
NOTE: Pay attention that last brackets are left empty to indicate end of operations;

*/

function sum(num) {
  if (num === undefined) return 0;

  const sums = [];
  sums.push(num);

  function inner(num) {
    if (num === undefined) return sums.reduce((a,b) => a + b);
    sums.push(num);
    return inner;

  }

  return inner;
}
