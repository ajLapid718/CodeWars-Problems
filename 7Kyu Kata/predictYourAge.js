/*

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

Example:
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: The result should be rounded down to the nearest integer.

*/

function predictAge(...args) {
  let ages = args.map(age => age * age);
  let sum = ages.reduce((a,b) => a + b);
  let root = Math.sqrt(sum);
  let res = Math.floor(root/2);
  return res;
}
