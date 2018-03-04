/*

Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

let countBits = function(n) {
  let ones = 0;

  while (n !== 0) {
    let remainder = n % 2;
    
    if (remainder === 1) {
      ones += 1;
    }

    n = Math.floor(n/2);
  }

  return ones;
};
