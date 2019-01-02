/*

From a sentence, deduce the total number of animals.

For example:

"I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

"Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

*/

function countAnimals(sentence) {
  let counter = 0;

  sentence = sentence.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === " ") continue;
    if (Number.isInteger(Number(char)) === true) counter += Number(char);
  }
  
  return counter;
}
