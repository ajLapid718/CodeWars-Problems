/*

Count how often sign changes in array.

Result:

number from 0 to ... . Empty array returns 0

Example:

const arr = [1, -3, -4, 0, 5]

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

return 2;

*/

const catchSignChange = arr => {
  let counter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    let folo = arr[i+1];
    if (curr >= 0 && folo < 0 || curr < 0 && folo >= 0) counter++;
  }

  return counter;
}
