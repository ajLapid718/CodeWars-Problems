// Write function getMinMax that returns minimal and maximal value of not empty list.

function getMinMax(arr) {
  let minimum = arr[0];
  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum < minimum) {
      minimum = currentNum;
    }

    if (currentNum > maximum) {
      maximum = currentNum;
    }
  }
  
  return [minimum, maximum];
};
