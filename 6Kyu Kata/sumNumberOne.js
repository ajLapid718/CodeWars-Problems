/*

PUZZLE #1. SUM

Assignment:

Write a function named sum which performs addition in the way shown below

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum();          // => 0

```ruby sum(4).(5).(9).() #=> 18 sum(5).() #=> 5 sum() #=> 0

NOTE: Pay attention that last brackets are left empty to indicate end of operations

*/

function sum(num) {
  if (num === undefined) return 0;

  let sum = 0;
  sum += num;

  function inner(num) {
    if (num === undefined) return sum;
    sum += num;
    return inner;

  }

  return inner;
}
