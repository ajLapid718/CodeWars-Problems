/*

Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string (earlier).

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

*/

function replaceCommon(string, letter) {
  let frequencies = {};
  let resultStr = "";

  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    if (currentCharacter === " ") {
      continue;
    }
    frequencies[currentCharacter] = frequencies[currentCharacter] + 1 || 1;
  }

  let mostAppearances = Math.max(...Object.values(frequencies))
  let mostCommonLetter;

  for (let j = 0; j < string.length; j++) {
    let char = string[j];
    if (frequencies[char] === mostAppearances) {
      mostCommonLetter = char;
      break;
    }
  }

  for (let k = 0; k < string.length; k++) {
    let char = string[k];
    if (char === mostCommonLetter) {
      resultStr += letter;
    } else {
      resultStr += char;
    }
  }

  return resultStr;
}
