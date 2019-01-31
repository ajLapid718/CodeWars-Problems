/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true;
solution('abc', 'd') // returns false;

*/

// Find the length of "ending", which we'll call "len";
// With that information, we can iterate through "str" and compare the last "len" amount of letters to the entirety of "ending";
// For example, if "abc" is our "str" and "bc" is our "ending", then "len" would be equivalent to 2;
// We would loop through "abc" and start the comparison once the value of the index we're at reaches: the length of "str" minus "len";
// In fact, we can begin there when initializing the conditions of the loop;

export function solution (str: string, ending: string): boolean {
  let start: number = str.length - ending.length;
  
  for (let i = start, j = 0; i < str.length; i++, j++) {
    let character = str[i];
    if (character !== ending[j]) return false;
  }

  return true;
}
