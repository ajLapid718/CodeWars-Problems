/*

You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers the zoo has in total.

Write the function findNumber(array) that takes an array of numbers.
The numbers will be unsorted values between 1 and one more than the length of the array.
No values will be repeated within the array.
Return the number that is missing.

Examples:

findNumber( [1,3] ) => 2
findNumber( [2,3,4] ) => 1
findNumber( [13,11,10,3,2,1,4,5,6,9,7,8] ) => 12

*/

// My solution;
function findNumber(array) {
  let min = 1;
  let max = array.length + 1;
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    obj[num] = true;
  }

  for (let num = min; num <= max; num++) {
    if (obj.hasOwnProperty(num) === false) return num;
  }
}

// A solution provided by another Codewars user;
function findNumber(array) {
  let sum = 0;
  let exSum = 0;

  for (let i = 0; i < array.length; i++) {
    exSum += array[i];
    sum += (i+1);
  }

  return sum + (array.length + 1) - exSum;
}
