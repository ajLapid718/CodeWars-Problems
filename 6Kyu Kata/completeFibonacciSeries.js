/*

The function 'fibonacci' should return an array of fibonacci numbers.
The function takes a number as an argument to decide how many no. of elements to produce.
If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4); // should return [0,1,1,2]
fibonacci(-1); // should return []

*/

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibs = [0, 1];

  let prev = 0;
  let curr = 1;

  while (n > 2) {
    let nextFib = prev + curr;
    prev = curr;
    curr = nextFib;
    fibs.push(curr);
    n--;
  }

  return fibs;
}
