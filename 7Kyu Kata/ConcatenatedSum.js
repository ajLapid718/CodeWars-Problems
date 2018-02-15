/*

The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

eg:-

original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.
Write afunction named check_concatenated_sum that tests if a number has this generalized property.

*/

function checkConcatenatedSum(number, n) {
  var stringNum = number.toString();
  var digitsArr = stringNum.split('').map(digit => digit.repeat(n));
  var sum = 0;

  for (var i = 0; i < digitsArr.length; i++) {
    var currentElement = digitsArr[i];
    var currentNum = parseInt(currentElement);

    if (Number.isNaN(currentNum)) {
      continue;
    }

    sum += currentNum;
  }

  return number < 0 ? (sum * -1) === number : sum === number;
}
