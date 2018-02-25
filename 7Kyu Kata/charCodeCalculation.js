/*

Given a string, first turn each letter into its ASCII char code.

Example:

'ABC' --> x=65, y=66, z=67 --> '656667'

Let's call this number 'total1'.

Then replace any incidence of the number 7, with the number 1.

'656667' ---> '656661'

Lets call this number 'total2'.

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

*/

function calc(x) {
  let totalOne = '';
  let letters = x.split('');

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    totalOne += currentLetter.charCodeAt();
  }

  let totalTwo = totalOne.replace(/7/g, 1);

  let sumOfTotalOneDigits = totalOne.split('').reduce((a,b) => parseInt(a) + parseInt(b));
  let sumOfTotalTwoDigits = totalTwo.split('').reduce((a,b) => parseInt(a) + parseInt(b));
  let theDifference = sumOfTotalOneDigits - sumOfTotalTwoDigits;

  return theDifference;
}
