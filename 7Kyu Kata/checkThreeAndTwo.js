/*

Given an array with 5 string values 'a', 'b' or 'c'.
Check if the array contains three and two of the same values.

For example:

['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'

*/

function checkThreeAndTwo(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    obj[currentElement] = obj[currentElement] + 1 || 1;
  }

  let vals = Object.values(obj);
  let sortedVals = vals.sort((a,b) => a - b);

  return sortedVals[0] === 2 && sortedVals[1] === 3 ? true : false;
}
