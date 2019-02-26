/*

Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.

*/

function product(values) {
  if (values === null || values.length === 0) return null;

  let product = 1;

  for (let i = 0; i < values.length; i++) {
    let num = values[i];
    product *= num;
  }

  return product;
}
