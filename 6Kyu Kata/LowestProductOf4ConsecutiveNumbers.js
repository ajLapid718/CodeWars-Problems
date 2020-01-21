/*

Description:
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789")--> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"

*/

function lowestProduct(input) {
  if (input.length < 4) return "Number is too small";
  
  let runningLowestProduct = Infinity;
  
  for (let i = 0; i < input.length - 3; i++) {
    let a = input[i];
    let b = input[i+1];
    let c = input[i+2];
    let d = input[i+3];
        
    let currProduct = a * b * c * d;
    if (currProduct < runningLowestProduct) runningLowestProduct = currProduct;
  }
  
  return runningLowestProduct;
}