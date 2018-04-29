/*

Given a Natural number , Determine If It a Jumping Number Or Not .

A Number Is Called As a Jumping Number If All Adjacent Digits In It Differ By 1.

Notes :

1- The Number Passed To The Function Is Positive Natural [1:2,147,483,647] , (No Negatives or Zeroes).

2- The difference between ‘9’ and ‘0’ is not considered as 1.

3- All single digit numbers are considered as Jumping Numbers.

If Any Of The Previous Points (Notes) Is Not Clear , Pay Attention To The Examples Clarify Everything .
Input :: Output Examples ::

1-

jumpingNumber(9) // return "Jumping!!"

Explanation ::

It's Single Digit Number

2-

jumpingNumber(23) // return "Jumping!!"

Explanation ::

Adjacent Digits In It Differ By 1

3-

jumpingNumber(32) // return "Jumping!!"

Explanation ::

Adjacent Digits In It Differ By 1

4- jumpingNumber(79) // return "Not!!"

Explanation ::

Adjacent Digits In It Don't Differ By 1

5- jumpingNumber(4343456) // return "Jumping!!"

Explanation ::

Adjacent Digits In It Differ By 1

6- jumpingNumber(556847) // return "Not!!"

Explanation ::

Adjacent Digits In It Don't Differ By 1

7- jumpingNumber(89098) // return "Not!!"

Explanation ::

Adjacent Digits In It Don't Differ By 1

*/

function jumpingNumber(n) {
  let strNum = n.toString();

  if (strNum.length === 1) {
    return "Jumping!!";
  }

  for (let i = 0; i < strNum.length - 1; i++) {
    let curr = Number(strNum[i]);
    let folo = Number(strNum[i+1]);

    if (Math.abs(curr-folo) !== 1) {
      return "Not!!";
    }
  }

  return "Jumping!!";
}
