/*

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999.
The dictionaries' keys & values will always be strings and will always not be empty.

Example

Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'

*/

// My solution which is non-mutating;
function sentence(list) {
  let obj = {};
  let negKeys = [];
  let remainingWords = [];

  for (let i = 0; i < list.length; i++) {
    let o = list[i];
    Object.assign(obj,{...o});
  }

  for (let key in obj) {
    let val = obj[key];
    let castedKey = Number(key);
    if (castedKey < 0) {
      negKeys.push(key);
    }
    else {
      remainingWords.push(val);
    }
  }

  negKeys.sort((a,b) => a - b);

  let wordsInFront = negKeys.map(num => {
    if (obj.hasOwnProperty(num)) {
      return obj[num];
    }
  })

  return wordsInFront.concat(remainingWords).join(' ');
}

// A solution provided by another Codewars user;
function sentence(list) {
  return list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(obj => Object.values(obj)[0])
    .join(' ')
};
