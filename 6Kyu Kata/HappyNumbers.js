/*

Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a “happy” number. A happy number is defined as an integer in which the following sequence ends with the number 1.

1: Start with the number itself.
2: Calculate the sum of the square of each individual digit.
3: If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1. For example, the number 7 is a “happy” number:
4: 7 ^ 2 = 49
5: 4 ^ 2 + 9 ^ 2 = 97
6: 9 ^ 2 + 7 ^ 2 = 130
7: 1 ^ 2 + 3 ^ 2 + 0 ^ 2 = 10
8: 1 ^ 2 + 0 ^ 2 = 1

Once the sequence reaches the number 1, it will stay there forever since 1 ^ 2 = 1

On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 52, 29

Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.

Your task is to write a program which will print a list of all happy numbers between 1 and x (including 1 and x) where x <= 10000

Disclaimer: This Kata is an adaptation of a HW assignment I had for McGill University's COMP 208 (Computers in Engineering) class.

*/

function happyNumbers(x) {
  var targets = [];

  for (var i = 1; i <= x; i++) {
    var currentNum = i;
		var digits = getDigitsOfNum(currentNum);
    var sums = [];

    while(true) {
      var temp = [];

      for (var j = 0; j < digits.length; j++) {
        var currentDigit = digits[j];
        temp.push(squareNum(currentDigit));
      }

      var sum = temp.reduce((a,b) => a + b);

      if (sum === 1) {
          targets.push(currentNum);
          break;
      } else if (sums.includes(sum)) {
          break;
      } else {
          sums.push(sum);
          digits = getDigitsOfNum(sum);
      }
    }
  }

  return targets;
}

function squareNum(num) {
  return parseInt(num) * parseInt(num);
}

function getDigitsOfNum(num) {
  return num.toString().split("");
}
