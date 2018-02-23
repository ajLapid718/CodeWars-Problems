/*

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

solve("*'&ABCDabcde12345") = [4,5,5,3].

--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

*/

function solve(s) {
  let uppercaseCount = s.match(/[A-Z]/g).length;
  let lowercaseCount = s.match(/[a-z]/g).length;
  let numbersCount = s.match(/[0-9]/g).length;
  let specialCharsCount = s.match(/[^A-Za-z0-9]/g).length;

  return [uppercaseCount, lowercaseCount, numbersCount, specialCharsCount];
}
