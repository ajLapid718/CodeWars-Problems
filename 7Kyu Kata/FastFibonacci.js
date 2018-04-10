/*

The generic implementation of the fibonacci algorithm is usually something like the following

function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

Now thats all and well and good but that function isn't too efficient.
If I wanted to get the 1000th number in the series, I'd have to wait... days? maybe years?

Your Task:
Write a more efficient fibonacci function that can calculate the 1000th+ number series without breaking a sweat.
Read up on tail call optimization for some help.

Starting values
fib(0) = 0;
fib(1) = 1;

*/

// My solution using a cache;

const fibHash = {
  0: 0,
  1: 1
}

function fib(num) {
  if (fibHash.hasOwnProperty(num) === true) {
    return fibHash[num];
  }
  else {
    fibHash[num] = fib(num-1) + fib(num-2);
    return fibHash[num];
  }
}

// My solution using tail call optimization;

function fib(num, curr = 0, folo = 1) {
  if (num === 0) {
    return curr;
  }

  return fib(num-1, folo, curr+folo);
}
