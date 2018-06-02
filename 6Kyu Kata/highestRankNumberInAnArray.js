/*

Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq).
If there is a tie for most frequent number, return the largest number of which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3

*/

function highestRank(arr) {
  let obj = {};
  let obj2 = {};
  let highestFreq = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    obj[num] = obj[num] + 1 || 1;
  }

  for (let num in obj) {
    let freq = obj[num];

    if (freq > highestFreq) highestFreq = freq;

    if (!obj2[freq]) {
      obj2[freq] = [num];
    }
    else {
      obj2[freq].push(num);
    }
  }

  let targetArr = obj2[highestFreq];
  let target = Math.max.apply(null, targetArr);

  return target;
}
