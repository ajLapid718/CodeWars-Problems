/*

Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples:
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abc'    #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1

*/

function countRepeats(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let folo = str[i+1];
    if (curr === folo) counter += 1;
  }

  return counter;
}
