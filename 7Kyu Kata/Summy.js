/* Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6
Good luck!

*/

function summy(stringOfInts) {
  var sum = 0;
  var arrOfNums = stringOfInts.split(' ');

  for (i = 0; i < arrOfNums.length; i++) {
    sum += parseInt(arrOfNums[i]);
  }

  return sum;
}
