/*

Given a string made of digits [0-9] returns a string where each digit is repeated a number of times equals to its value.

# Examples

s = "312"
Digits.Explode(s) = "333122"

s = "102269"
Digits.Explode(s) = "12222666666999999999"

*/

function explode(s) {
  var digits = s.split('');
  var resultString = "";

  digits.forEach(function(el) {
    resultString += el.repeat(parseInt(el));
  });

  return resultString;
}
