/*

There is a sentence which has a mistake in it's ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'

*/

// My initial solution;
function reOrdering(text) {
  let capitalWord = "";
  let orderedStr = "";

  for (let i = 0; i < text.length; i++) {
    let currentCharacter = text[i];
    if (currentCharacter === currentCharacter.toUpperCase() && currentCharacter !== " ") {
      while (text[i] !== " " && i < text.length) {
        capitalWord += text[i];
        i++;
      }
    }
    else {
      orderedStr += currentCharacter;
    }
  }

  let result = capitalWord.trim() + " " + orderedStr.trim();

  if (result[result.length - 1] === " ") {
    return result.trim();
  }
  else {
    return result;
  }
}

// Alternatively;
function reOrdering(text) {
  let tempArr = [];
  let words = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word[0] === word[0].toUpperCase()) {
      tempArr.unshift(word);
    }
    else {
      tempArr.push(word);
    }
  }

  return tempArr.join(' ').toString();
}
