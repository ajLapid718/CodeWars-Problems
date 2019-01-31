/*

You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.

*/

// We're ultimately going to return an array containing three elements, all of which are strings;
// We'll need to build out each of the target strings;
// One approach could be to have a pointer on each side of the input string that closes inward;
// The pointer on the left (i) will populate the primary target string, while the pointer on the right (j) will populate the secondary target string;
// We'll increment i (i++) and decrement j (j--);
// In the event that s has an odd length, then when i === j, we'll populate the tertiary target string;
// In the event that s has an even length, then the tertiary string will be empty because all of the characters were encountered;

function popShift(s) {
  let primary = "";
  let secondary = "";
  let tertiary = "";

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    primary += s[j];
    secondary += s[i];
    i++;
    j--;
  }

  if (s.length % 2 !== 0) {
    tertiary = s[i];
  }

  return [primary, secondary, tertiary];
}
