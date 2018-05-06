/*

Description:
A non-empty array a of length n is called an array of all possiblities if it contains all numbers between [0,a.length-1].
Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possiblities,else false.

Example:

a = [1,2,0,3]
a.length-1 = 3
a includes [0,3], hence the function should return true

*/

function isAllPossibilities(x) {
  if (x.length === 0) {
    return false;
  }
  
  let nums = x.sort();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let supposedNum = i;

    if (num !== supposedNum) {
      return false;
    }
  }

  return true;
}
