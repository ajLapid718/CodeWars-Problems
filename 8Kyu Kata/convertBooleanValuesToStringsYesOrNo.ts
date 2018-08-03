/*

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

export const boolToWord = (bool: boolean): string => {
  let response: string; // In JS, explicitly assigning the value of "undefined" is uncommon...is the same true in TS?;

  if (!!bool) {
    response = "Yes";
  } else {
    response = "No";
  }

  return response;
}
