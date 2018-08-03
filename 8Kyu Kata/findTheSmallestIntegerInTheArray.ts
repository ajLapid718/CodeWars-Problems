/*

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

export function findSmallestInt(args: number[]): number { // this is a function that takes in an array of numbers and is designed to output a number;
  let min: number = Infinity; // explicit typing? // can I/should I do this all in one line?;

  for (let i = 0; i < args.length; i++) {
    let currNum = args[i];
    if (currNum < min) min = currNum;
  }

  return min;
}
