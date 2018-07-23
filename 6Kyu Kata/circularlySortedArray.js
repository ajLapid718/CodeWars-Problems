/*

Write a method, isCircleSorted(int[] A) (Java, JavaScript), or Array#circularly_sorted? (Ruby) that determines if A is circularly sorted.
An Array is circularly sorted if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.

For Example:

// True:
isCircleSorted([2,3,4,5,0,1]);
isCircleSorted([4,5,6,9,1]);
isCircleSorted([10,11,6,7,9]);
isCircleSorted([1,2,3,4,5]);
isCircleSorted([5,7,43,987,-9,0]);


// False:
isCircleSorted([4,1,2,5]);
isCircleSorted([8,7,6,5,4,3]);
isCircleSorted([6,7,4,8]);
isCircleSorted([7,6,5,4,3,2,1]);

*/

// My solution;
function isCircleSorted(nums) {
  let minimum = Infinity;
  let maximum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num < minimum) minimum = num;
    if (num > maximum) maximum = num;
  }

  let targetRange = maximum - minimum;
  let copy = [...nums];
  let len = copy.length;
  let counter = 0;

  while (counter < len) {
    let currRange = copy[len-1] - copy[0];
    if (currRange === targetRange) break;
    let poppedVal = copy.pop();
    copy.unshift(poppedVal);
    counter++;
  }

  for (let i = 0; i < copy.length - 1; i++) {
    let curr = copy[i];
    let folo = copy[i+1];

    if (curr > folo) return false;
  }

  return true;
}

// A solution provided by another Codewars user;
function isCircleSorted(arr) {
  let jumped = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      if (jumped) return false;
      jumped = true;
    }
  }
  return true;
}
