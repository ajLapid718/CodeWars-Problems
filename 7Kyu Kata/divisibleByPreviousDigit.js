/*

Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples:

73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]

*/

function divisibleByLast(n) {
  let digits = n.toString().split("");
  let arr = [false];
  
  for (let i = 1; i < digits.length; i++) {
    let prev = parseInt(digits[i-1]);
    let curr = parseInt(digits[i]);

    curr % prev === 0 ? arr.push(true) : arr.push(false);
  }

  return arr;
}
