/*

Description:

Your task is to remove all consecutive duplicate words from string, leaving only first words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta alpha beta gamma delta'

*/

const removeConsecutiveDuplicates = s => {
  let str = "";
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let curr = words[i];
    let folo = words[i+1];

    if (curr !== folo) str += curr + " ";
  }

  return str.trim();
}
