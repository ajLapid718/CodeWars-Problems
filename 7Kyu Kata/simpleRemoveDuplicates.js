/*

Description:
In this Kata, you will remove the left-most duplicates from an int array and return the result.

For example:
solve([3,4,4,3,6,3]) = [4,6,3]

-- remove the 3 in index 0 and index 3
-- remove the 4 in index 1

More examples in test cases.

Good luck!

*/

function solve(arr) {
  let res = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (seen.hasOwnProperty(num) === true) {
      seen[num] = i;
    }
    else {
      seen[num] = false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (seen[num] === false) {
      res.push(num);
    }
    else if (seen[num] === i) {
      res.push(num);
    }
  }

  return res;
}
