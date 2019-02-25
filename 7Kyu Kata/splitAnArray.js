/*

Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };

split([obj1, obj2], 'prop');

// [[obj1], [obj2]]

*/

function split(arr, prop) {
  let ret = [[], []];

  for (let i = 0; i < arr.length; i++) {
    let currObj = arr[i];
    if (currObj[prop]) {
      ret[0].push(currObj);
    }
    else {
      ret[1].push(currObj);
    }
  }

  return ret;
}
