/*

Write funcion lenR which returns the length of a given list.

Try not to cheat; provide a recursive solution.

In C, the list is an array of non-zero integers, with a last element of 0, which is not considered part of the list.

*/

function lenR(x) {
  return x.length === 0 ? 0 : 1 + lenR(x.slice(1));
}
