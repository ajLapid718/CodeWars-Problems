/*

Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

function abbrevName(name) {
  let names = name.split(' ');
  let firstName = names[0];
  let lastName = names[1];

  let firstInitial = firstName[0].toUpperCase();
  let secondInitial = lastName[0].toUpperCase();

  return firstInitial + "." + secondInitial;
}
