/*

You are given two strings (st1, st2) as inputs.
Your task is to return a string containing the numbers in st2 which are not in str1.
Make sure the numbers are returned in ascending order.
All inputs will be a string of numbers.

Here are some examples:

findAdded('4455446', '447555446666'); // '56667'
findAdded('44554466', '447554466'); // '7'
findAdded('9876521', '9876543211'); // '134'
findAdded('678', '876'); // ''
findAdded('678', '6'); // ''

*/

function findAdded(st1, st2) {
  let objOne = {};
  let objTwo = {};
  let resStr = "";

  for (let i = 0; i < st1.length; i++) {
    let num = st1[i];
    objOne[num] = objOne[num] + 1 || 1;
  }

  for (let i = 0; i < st2.length; i++) {
    let num = st2[i];
    objTwo[num] = objTwo[num] + 1 || 1;
  }

  for (let key in objTwo) {
    if (objOne.hasOwnProperty(key) === false) {
      let laps = objTwo[key];
      let counter = 0;
      while (counter < laps) {
        resStr += key;
        counter++;
      }
    }

    if (objTwo[key] > objOne[key]) {
      let difference = objTwo[key] - objOne[key];
      let counter = 0;
      while (counter < difference) {
        resStr += key;
        counter++;
      }
    }
  }

  return resStr;
}
