/*

You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4

Your task is to return an array of those missing numbers:

[-1,0,2,3,4]

*/

function findMissingNumbers(arr) {
  let res = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    obj[num] = obj[num] + 1 || 1;
  }

  let min = arr[0];
  let max = arr[arr.length-1];

  for (let i = min; i < max; i++) {
    if (obj.hasOwnProperty(min) === false) res.push(min);
    min++;
  }

  return res;
}
