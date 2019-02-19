/*

Mr. Square is going on a holiday. He wants to bring 2 of his favorite squares with him, so he put them in his rectangle suitcase.

Write a function that, given the size of the squares and the suitcase, return whether the squares can fit inside the suitcase.

fit_in(a,b,m,n)
a,b are the sizes of the squares
m,n are the sizes of the suitcase

Example:

fit_in(1,2,3,2) should return True
fit_in(1,2,2,1) should return False
fit_in(3,2,3,2) should return False
fit_in(1,2,1,2) should return False

*/

// a = the length of one side of square one;
// b = the length of one side of square two;
// m = the length of the rectangular suitcase;
// n = the width of the rectangular suitcase;

// fit_in(6,5,8,7) === false;
// fit_in(2,6,5,10) === false;

// if the one side of either square is greater than the length of the suitcase, then both squares cannot fit inside the suitcase;
// if the one side of either square is greater than the width of the suitcase, then both squares cannot fit inside the suitcase;
// if the combined lengths of the squares is greater than the length of the suitcase and the combined widths of the squares is greater than the width of the suitcase, then there is no possible way (regardless of how the suitcase or squares are positioned and oriented in this two-dimensional suitcase) to fit both squares inside the suitcase;
// otherwise, the squares can be properly contained by the suitcase;

function fit_in(a, b, m, n) {
  if (a > m || b > m) return false;
  if (a > n || b > n) return false;
  if (a + b > m && a + b > n) return false;
  return true;
}
