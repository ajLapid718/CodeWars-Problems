/*

Write a function that determines whether the passed in arrays are similar.
Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

*/

function arraysSimilar(arr1, arr2) {
  let myMapOne = new Map();
  let myMapTwo = new Map();

  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    let val = myMapOne.get(el);
    val ? myMapOne.set(el, val + 1) : myMapOne.set(el, 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    let el = arr2[i];
    let val = myMapTwo.get(el);
    val ? myMapTwo.set(el, val + 1) : myMapTwo.set(el, 1);
  }

  if (myMapOne.size !== myMapTwo.size) return false;

  for (let key of myMapOne.keys()) {
    let freq = myMapOne.get(key);
    if (myMapTwo.get(key) !== freq) return false;
  }

  return true;
}
