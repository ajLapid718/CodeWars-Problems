/*

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

*/

// Form an array with n empty slots;
// Shift and update from that array to keep track of the n largest elements;

function largest(n, xs) {
  let nLargestNums = Array.from({length: n}, () => null);

  for (let i = 0; i < xs.length; i++) {
    let currNum = xs[i];
    updateLargest(nLargestNums, currNum);
  }

  return nLargestNums;
}

function updateLargest(nLargestNums, currNum) {
  let i = nLargestNums.length - 1;

  while (i >= 0) {
    if (nLargestNums[i] === null || currNum > nLargestNums[i]) {
      shiftAndUpdate(nLargestNums, currNum, i);
      break;
    }
    i--;
  }
}

function shiftAndUpdate(nLargestNums, currNum, targetIdx) {
  for (let i = 0; i <= targetIdx; i++) {
    if (i === targetIdx) {
      nLargestNums[i] = currNum;
    }
    else {
      nLargestNums[i] = nLargestNums[i+1];
    }
  }
}
