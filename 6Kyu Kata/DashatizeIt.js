/*

Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/

function dashatize(num) {
  if (isNaN(num)) {
    return `${num}`;
  }

  var stringifiedNumber = num.toString();
  var digits = stringifiedNumber.split('');

  if (digits[0] === '-') {
    digits.shift();
  }

  var resultArr = [];

  for (var i = 0; i < digits.length; i++) {
    var currentNum = digits[i];
    var nextNum = digits[i+1];

    if (currentNum % 2 !== 0) {
      if (nextNum % 2 === 0) {
      resultArr.push('-');
      resultArr.push(currentNum)
      resultArr.push('-');
      } else {
        resultArr.push('-');
        resultArr.push(currentNum);
      }
    } else {
      resultArr.push(currentNum);
    }
  }

  if (resultArr[0] === '-') {
    resultArr.shift();
  }

  return resultArr.join('');
}
