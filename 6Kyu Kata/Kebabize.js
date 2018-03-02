/*

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:

The returned string should only contain lowercase letters

*/

function kebabize(str) {
  let x = str.replace(/[A-Z][a-z]+|[A-Z]/g, word => "-" + word.toLowerCase());
  let y = x.replace(/[0-9]|^[-]/g, '');
  return y;
}
