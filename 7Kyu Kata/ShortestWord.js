// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let words = s.split(" ");
  let shortestLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word.length < shortestLength) {
      shortestLength = word.length;
    }
  }

  return shortestLength;
}
