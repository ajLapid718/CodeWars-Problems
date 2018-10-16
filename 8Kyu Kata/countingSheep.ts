/*

Consider an array of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

type acceptedValues = boolean | null | undefined; // tagged union type;

export function countSheeps(arrayOfSheep: acceptedValues[]): number {
  let counter = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    let element = arrayOfSheep[i];
    if (element === true) counter++;
  }

  return counter;
};
