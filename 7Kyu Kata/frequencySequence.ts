/*

Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freqSeq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freqSeq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freqSeq("^^^**$", "x"); // => "3x3x3x2x2x1"

*/

export function freqSeq(str: string, sep: string): string {
  let ret: string = "";

  interface IFrequencyMap {
    [character: string]: number
  }

//   let obj = <IFrequencyMap>{};

  let obj: IFrequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    obj[character] = obj[character] + 1 || 1;
  }

  for (let i = 0; i < str.length - 1; i++) {
    let character = str[i];
    ret += obj[character];
    ret += sep;
  }

  return ret + obj[str[str.length - 1]];
}
