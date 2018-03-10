/*

Write a function that replaces 'two', 'too' and 'to' with the number '2'.
Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2.
Bless her.

'I love to text' becomes 'I love 2 text'
'see you tomorrow' becomes 'see you 2morrow'
'look at that octopus' becomes 'look at that oc2pus'

Note that 'too' should become '2', not '2o'

*/

function textin(str) {
  let res = "";
  let splittedStr = str.split('');

  for (let i = 0; i < splittedStr.length; i++) {
    let curr = splittedStr[i];
    let folo = splittedStr[i+1];
    let after = splittedStr[i+2];

    let potentialTooTwoMatch = (curr + folo + after).toLowerCase();
    let potentialToMatch = (curr + folo).toLowerCase();

    if (potentialTooTwoMatch === 'too' || potentialTooTwoMatch === 'two') {
      res += 2;
      i += 2;
    } else if (potentialToMatch === 'to') {
      res += 2;
      i += 1;
    } else {
      res += curr;
    }
  }

  return res;
}
