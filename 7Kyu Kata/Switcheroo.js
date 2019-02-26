/*

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa).
Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

function switcheroo(x) {
  let str = "";

  for (let i = 0; i < x.length; i++) {
    let letter = x[i];
    if (letter === "a") {
      str += "b";
    }
    else if (letter === "b") {
      str += "a";
    }
    else {
      str += letter;
    }
  }

  return str;
}
