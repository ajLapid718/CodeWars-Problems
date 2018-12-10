/*

The bloody photocopier is broken.
Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

*/

function broken(x) {
  let fixedVersion = "";

  for (let i = 0; i < x.length; i++) {
    let character = x[i];
    if (character === "0") fixedVersion += "1";
    if (character === "1") fixedVersion += "0";
  }

  return fixedVersion;
}
