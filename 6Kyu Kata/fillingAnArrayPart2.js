/*

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]

NOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.

*/

const squares = n => Array.from({length: n}, (_, idx) => (idx + 1) * (idx + 1));

const range = (n, start, step) => {
  let arr = [];
  let len = 0
  let numToInsert = start;;

  while (len !== n) {
    arr.push(numToInsert);
    numToInsert += step;
    len++;
  }

  return arr;
};

const random = (n, min, max) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let randomNum = Math.round(Math.random() * (max - min) + min);
    arr.push(randomNum);
  }

  return arr;
};

const primes = n => {
  let arr = [];
  let num = 2;

  while (arr.length !== n) {
    if (isPrime(num)) arr.push(num);
    num++;
  }

  return arr;
};

function isPrime(num) {
  let arr = [];
  let counter = 2;

  while (counter <= num) {
    if (num % counter === 0) arr.push(counter);
    counter++;
  }

  return arr.length === 1;
};
