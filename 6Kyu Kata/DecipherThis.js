/*

You are given several secret messages you need to decipher.

Here are the conditions:

The first letter corresponds to ASCII character code (case sensitive)
The second letter needs to be switched to the last letter
The last letter needs to be switched to the second letter
If it only has one letter, it will be unchanged
If it only has two letters, you will just need to convert the ASCII character code to a letter
Keepin' it simple -- there are no special characters

Example:
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

*/

function decipherThis(str) {
  var subNumbersStr = str.replace(/\d+/g, d => String.fromCharCode(d));
  var words = subNumbersStr.split(' ');
  var res = words.map(word => swapLetters(word));

  return res.join(' ');
};

function swapLetters(str) {
  if (str.length === 1) {
    return str;
  }

  var word = str.split('');
  var secondLetter = word[1];
  var lastLetter = word[word.length - 1];

  word.splice(1, 1, lastLetter);
  word.splice(-1, 1, secondLetter);

  return word.join('');
}
