/*

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order.
Whitespace and punctuation shall simply be removed!

Example:

alphabetized("The Holy Bible") ===> "BbeehHilloTy";
alphabetized("4qdHT68Uh6tjuJ4qvVnr8") ===> "dHhjJnqqrTtUuvV";

*/

function alphabetized(s) {
  let info = [];

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    let ascii = element.charCodeAt();
    if (!isLetter(ascii)) continue;
    info.push([element, i]);
  }

  info.sort((a,b) => {
    let asciiOne = a[0].toLowerCase().charCodeAt();
    let asciiTwo = b[0].toLowerCase().charCodeAt();
    return asciiOne - asciiTwo || a[1] - b[1];
  })

  let result = info.map(arr => arr[0]);
  return result.join("");
}

function isLetter(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
