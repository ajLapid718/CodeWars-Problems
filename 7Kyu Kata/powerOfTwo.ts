/*

Complete the function that determines if a given number is a power of two.

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

https://en.wikipedia.org/wiki/Power_of_two

Examples
power_of_two?(1024) # true
power_of_two?(4096) # true
power_of_two?(333)  # false

*/

// Take the natural log of the result of the exponentiation;
// Divide that value by the natural log of 2;
// A whole number for a quotient will indicate that n is a power of two;
// A float for a quotient will indicate that n is not a power of two;

export function isPowerOfTwo (n: number): boolean {
  let quotient = Math.log(n) / Math.log(2);
  return Number.isInteger(quotient);
}
