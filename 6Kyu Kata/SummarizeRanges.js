/*

Write:
function summaryRanges(nums)

that given a sorted array of numbers, returns the summary of its ranges.

Examples:

summaryRanges([1,2,3,4]) === ['1->4']
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7","9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
summaryRanges([1,1,1,1,1]) === ['1']

*/

// My Solution

function summaryRanges(nums) {
  let uniqNums = Array.from(new Set(nums));
  let result = [];
  let range = '';

  for (let i = 0; i < uniqNums.length; i++) {
    let prev = uniqNums[i-1];
    let curr = uniqNums[i];
    let folo = uniqNums[i+1];

    if (prev + 1 !== curr && curr + 1 !== folo) {
      range += curr;
      result.push(range);
      range = '';
      continue;
    }

    if (range.length === 0) {
      range += curr;
    }

    if (curr + 1 === folo) {
      continue;
    }

    if (curr + 1 !== folo) {
      range += '->';
      range += curr;
      result.push(range);
      range = '';
    }
  }

  return result;
}

// A Solution I Refactored Written By Another Codewars User

function summaryRanges(nums) {
  let result = [];
  let startOfRange = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let folo = nums[i+1];

    if (curr === folo || curr + 1 === folo) {
      continue;
    } else {
      result.push(startOfRange === curr ? curr.toString() : startOfRange + "->" + curr);
      startOfRange = folo;
    }
  }

  return result;
}
