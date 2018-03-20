/*

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples:

'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

function initializeNames(name) {
  let names = name.split(' ');
  let resultStr = '';

  if (names.length <= 2) {
    return name;
  }

  for (let i = 0; i < names.length; i++) {
    let currentPartOfName = names[i];

    if (i === 0) {
      resultStr += currentPartOfName;
      resultStr += ' ';
    } else if (i === names.length - 1) {
      resultStr += currentPartOfName;
    } else {
      resultStr += currentPartOfName[0];
      resultStr += '.';
      resultStr += ' ';
    }
  }

  return resultStr;
}
