// Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:
// toBinaryString(6) should return "110" (no leading 0)

function toBinaryString(number) {
  var res = "";

  do {
    var remainder = number % 2;
    res += remainder;
    number = Math.floor(number / 2);
  } while (number !== 0)
  
  return reverseStr(res);
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}
