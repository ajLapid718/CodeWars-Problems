/*

Given a number, find if it is Disarium or not.

A number is called Disarium if

sum of its digits powered with their respective positions is equal to the number itself.

Our kata is simple , given a number determine whether the number is Disarium or not , returning the result as a string.

Input :: Output Examples ::

disariumNumber (89) // return "Disarium !!"

Explanation ::
1. For (89) as 8^1+9^2 = 89 thus output is "Disarium !!" .

disariumNumber (564) // return "Not !!"

Explanation ::
2. For (564) as 5^1+6^2+4^3 = 105 thus output is "Not !!" .
Note :

1- The number passed to the function is postive Natural [1:2,147,483,647] .

*/

function disariumNumber(n) {
  let strNum = n.toString();
  let sum = 0;

  for (let i = 0; i < strNum.length; i++) {
    let num = parseInt(strNum[i]);
    sum = sum + Math.pow(num, i+1);
  }

  return sum === n ? "Disarium !!" : "Not !!";
}
