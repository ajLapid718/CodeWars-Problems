/*

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

*/

function solution(str, target) {
  let counter = 0;
  let len = target.length;

  for (let i = 0; i < str.length; i++) {
    let potentialMatch = str.slice(i, i+len)
    if (potentialMatch === target) counter++;
  }

  return counter;
}
