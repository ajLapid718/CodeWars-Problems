/*

FizzBuzz is often one of the first programming puzzles people learn.
Now undo it with reverse FizzBuzz!

Write a function that accepts a string, which will always be a valid section of FizzBuzz.
Your function must return an array that contains the numbers in order that generate that section of FizzBuzz.

For instance:

reverse_fizzbuzz("1 2 Fizz 4 Buzz")   #returns [1, 2, 3, 4, 5]
reverse_fizzbuzz("Fizz 688 689 FizzBuzz") #returns [687, 688, 689, 690]
reverse_fizzbuzz("Fizz Buzz")         #returns [9, 10]

Notes:

If a sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
You will never be passed an empty sequence.
All numbers in the sequence will be greater than zero.

*/

function reverseFizzBuzz(str) {
  var wordsAndValues = {Fizz: 3, Buzz: 5, FizzBuzz: 15};
  var splittedString = str.split(' ');
  var indexOfFirstDigit = splittedString.findIndex(el => el % el === 0);
  var lowerBound = 0;
  var resultArr = [];

  if (indexOfFirstDigit < 0) {
    if (splittedString.length === 1) {
      return [wordsAndValues[str]];
    } else {
      if (splittedString[0] === 'Buzz')
        return [5,6];
      else {
        return [9,10];
      }
    }
  }

  if (indexOfFirstDigit === 0) {
    lowerBound = parseInt(splittedString[0]);
  }

  if (indexOfFirstDigit > 0) {
    lowerBound = splittedString[indexOfFirstDigit] - indexOfFirstDigit;
  }

  for (var i = 0; i < splittedString.length; i++) {
    resultArr.push(lowerBound);
    lowerBound++;
  }

  return resultArr;
}
