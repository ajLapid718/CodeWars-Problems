/*

Mirror - Mirror
Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -

Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx

"You cannot change the original object, because if you did that the reflection would change."

*/

// My solution to get familiar with JSON.parse() and JSON.stringify();
function mirror(obj) {
  let deepCopy = JSON.parse(JSON.stringify(obj));
  let keys = Object.keys(obj);
  let reversedKeys = keys.map(key => key.split("").reverse().join(""));

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    deepCopy[key] = reversedKeys[i];
  }

  return deepCopy;
}

// Alternative solution;
function mirror(obj) {
  let deepCopy = {};

  for (let key in obj) {
    let val = key.split("").reverse().join("");
    deepCopy[key] = val;
  }

  return deepCopy;
}
