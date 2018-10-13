/*

All of the animals are having a feast! Each animal is bringing one dish.
There is just one rule: the dish must start and end with the same letters as the animal's name.
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters.
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
They will not contain numerals.

*/

// My verbose solution in an attempt to get more familiar with type checking and TS syntax;
export const feast = (beast: string, dish: string): boolean => {
  const firstLetterOfBeast: string = beast[0];
  const lastLetterOfBeast: string = beast[beast.length-1];
  const firstLetterOfDish: string = dish[0];
  const lastLetterOfDish: string = dish[dish.length-1];

  let flag: boolean;

  if (firstLetterOfBeast === firstLetterOfDish && lastLetterOfBeast === lastLetterOfDish) {
    flag = true;
  }
  else {
    flag = false;
  }
  
  return flag;
};
