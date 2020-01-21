/*

In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

*/

function calculate(str) {
  let runningCount = "";
  
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    
    if (element === "p") {
      runningCount += "+";
      i += 3;
      continue;
    }
    
    if (element === "m") {
      runningCount += "-";
      i += 4;
      continue;
    }
    
    runningCount += element;
  }
  
  return eval(runningCount).toString();
}