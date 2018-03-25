/*

Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.

Example:

evenBinary("101 111 100 001 010") //returns "101 111 010 001 100"
Note: make sure all the binary numbers have a length of 3

*/

function evenBinary(arg) {
  let binaryNums = arg.split(" ");
  let decimalNums = binaryNums.map(n => parseInt(n, 2));

  let evens = decimalNums.filter(n => n % 2 === 0);
  let sortedEvens = evens.sort((a,b) => a - b);

  let bump = 0;

  for (let j = 0; j < decimalNums.length; j++) {
    let num = decimalNums[j];

    if (num % 2 === 0) {
      decimalNums[j] = sortedEvens[bump];
      bump += 1;
    }
  }

  let x = decimalNums.map(n => n.toString(2));

  for (let k = 0; k < x.length; k++) {
    let num = x[k];

    if (num.length === 1) {
      x[k] = "00" + num;
    }

    if (num.length === 2) {
      x[k] = "0" + num;
    }
  }

  return x.join(" ");
}
