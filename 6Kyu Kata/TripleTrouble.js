/*

Write a function
tripledouble(num1,num2)

which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

For example:
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1

If this isn't the case, return 0

*/

function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  let trips = [];

  for (let i = 0; i < num1.length - 2; i++) {
    let curr = num1[i];
    let folo = num1[i+1];
    let after = num1[i+2];

    if (curr === folo && curr === after) {
      trips.push(curr.repeat(3));
    }
  }

  let dubs = {};

  for (let j = 0; j < num2.length - 1; j++) {
    let curr = num2[j];
    let folo = num2[j+1];

    if (curr === folo) {
      dubs[curr.repeat(3)] = 1;
    }
  }

  for (let k = 0; k < trips.length; k++) {
    let currentNum = trips[k];

    if (dubs[currentNum]) {
      return 1;
    }
  }

  return 0;
}
