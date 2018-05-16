/*

There is an array of strings.
All strings contains similar letters except one.
Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces.
Spaces is not significant, only non-spaces symbols matters.
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

*/

function findUniq(arr) {
  let obj = {};
  let letters = arr.join('');

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i].toLowerCase();
    obj[letter] = obj[letter] + 1 || 1;
  }

  let minAmount = Math.min.apply(Object.keys(obj));

  for (let key in obj) {
    if (obj[key] <= minAmount) {
      minAmount = obj[key];
    }
  }

  let targetLetter;

  for (let key in obj) {
    if (obj[key] === minAmount) {
      targetLetter = key;
      break;
    }
  }

  return arr.find(str => str.includes(targetLetter) || str.includes(targetLetter.toUpperCase()));
}
