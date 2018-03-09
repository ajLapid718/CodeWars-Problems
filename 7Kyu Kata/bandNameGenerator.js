/*

My friend wants a new band name for her band.
She like bands that use the formula: 'The' + a noun with first letter capitalized.

dolphin -> The Dolphin

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):

alaska -> Alaskalaska

europe -> Europeurope

Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

*/

function bandNameGenerator(str) {
  let firstLetter = str[0];
  let lastLetter = str[str.length-1];
  
  let resultStr = "";

  if (firstLetter === lastLetter) {
    let firstPart = str[0].toUpperCase() + str.slice(1);
    let secondPart = str.slice(1);
    resultStr = resultStr + firstPart + secondPart;
  } else {
    resultStr = 'The' + ' ' + str[0].toUpperCase() + str.slice(1);
  }

  return resultStr;
}
