/*

Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/

// My verbose solution in an attempt to get more familiar with type checking and TS syntax;

export const stringToArray = (s: string): string[] => { // output: an array where the values are strings;
  const resultArr: Array<string> = []; // another way to declare the value types of an array;
  let currWord: string = "";

  for (let i = 0; i < s.length; i++) {
    let currElement: string = s[i];
    if (currElement === " ") {
      resultArr.push(currWord);
      currWord = "";
    }
    else {
      currWord += currElement;
    }
  }

  resultArr.push(currWord);

  return resultArr;
}
