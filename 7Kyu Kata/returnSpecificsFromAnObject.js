/*

Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

- array should return numbers first then all the method names in the order they are in the object
- strings, booleans, arrays should be ignored.
- if the object is empty, then the array should return the following string: The Object is Empty

Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']

*/

// We'll have to initialize an array that we will attempt to populate;
// We need to iterate through the input object;
// Any time a value in a key:value pair is of the Number data type, we will push that value into the array;
// Any time a value in a key:value pair is of the Function type, we will push that key into the array;
// If the array has no length, then we have determined that the input object was empty, which would result in us pushing in the string "The Object is Empty";

function returnSpecifics(obj) {
  let nums = [];
  let keys = [];

  for (let key in obj) {
    let val = obj[key];
    if (typeof val === "number") {
      nums.push(val);
    }
    else if (typeof val === "function") {
      keys.push(key);
    }
  }

  if (!nums.length && !keys.length) {
    return ["The Object is Empty"];
  }
  else {
    return nums.concat(keys);
  }
}
