/*

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12) === 21;
nextBigger(513) === 531;
nextBigger(2017) === 2071;

If no bigger number can be composed using those digits, return -1:

nextBigger(9) === -1;
nextBigger(111) === -1;
nextBigger(531) === -1;

*/

function nextBigger(n) {
  return invalidNum(n) ? -1 : helper(n);
}

function invalidNum(n) {
  let strNum = n.toString();
  let digits = strNum.split('');
  let sortedDigits = +digits.sort((a,b) => b - a).join('');
  return sortedDigits === n;
}

function helper(n) {
  let obj = {};
  let strNum = n.toString();

  for (let i = 0; i < strNum.length; i++) {
    let digit = strNum[i];
    obj[digit] = obj[digit] + 1 || 1;
  }

  while (true) {
    let tempObj = {};
    n++;
    let tempStr = n.toString();
    for (let i = 0; i < tempStr.length; i++) {
      let digit = tempStr[i];
      tempObj[digit] = tempObj[digit] + 1 || 1;
    }
    if (sameFreq(tempObj, obj)) return n;
  }
}

function sameFreq(objOne, objTwo) {
  return JSON.stringify(objOne) === JSON.stringify(objTwo);
}
