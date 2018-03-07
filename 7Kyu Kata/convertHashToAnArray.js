/*

Convert a hash into an array.
Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

*/

function convertHashToArray(hash) {
  let arr = [];

  for (let key in hash) {
    let val = hash[key];
    arr.push([key, val]);
  }

  return arr.sort();
}
