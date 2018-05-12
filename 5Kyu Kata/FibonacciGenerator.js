/*

Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2

*/

function genfib() {
  let fibOne = 0;
  let fibTwo = 1;

  function inner() {
    let targetFib = fibOne;
    let newFib = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = newFib;
    return targetFib;
  }

  return inner;
}
