/*

There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C the input will be a float.

*/

// We are primarily tasked to determine if "n" is negative zero;
// We can make use of the static method: Math.sign();
// Math.sign() will return 1, -1, 0, -0, or NaN;
// We can then evaluate Math.sign(n) and compare that result to -0;
// But, we have to be mindful of the fact that the comparison of -0 === 0 returns true;
// Pivoting from there, we can multiply n by -1;
// Then, we can check the sign of that product;
// If the sign of that product is positive, then we know n was a negative number;
// Then we can check whether or not n is falsy, since 0 is falsy;
// All of this to avoid turning n into a string and investigating the characters of that string;
// Turns out, that won't work either, woops;
// What we can do is take 1 as the dividend and n as the divisor;
// If the quotient is -Infinity, then n was -0;
// If the quotient is Infinity, then n was 0;
// Interesting finds: Object.is() and util.inspect();

function isNegativeZero(n) {
  return !n && 1/n === -Infinity;
}
