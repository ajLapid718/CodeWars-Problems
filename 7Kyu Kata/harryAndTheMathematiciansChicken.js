/*

Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

Write a function that takes the total number of chicken pieces Harry can eat (n) and returns an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

0 chicken pieces is a valid chicken option.

For example:

chickenOptions(9)
should return [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

For non-numeric input, the function should return [0].

*/

// My solution which has a time complexity of O(n^2);

function chickenOptions(n) {
  if (isNaN(n) === true || n < 3) {
    return [0];
  }

  let arr = [0,3,6,9,10];

  for (let num = 11; num <= n; num++) {
    if (arr.some(el => (num-el) % 3 === 0 || (num-el) % 10 === 0)) {
      arr.push(num);
    }
  }

  return arr;
}

// My solution which has a time complexity of O(n);

function chickenOptions(n) {
  if (isNaN(n) === true || n < 3) {
    return [0];
  }

  let obj = {0: 0};

  for (let num = 3; num <= n; num++) {
    if (obj.hasOwnProperty(num-3) || obj.hasOwnProperty(num-10)) {
      obj[num] = num;
    }
  }

  return Object.values(obj);
}
