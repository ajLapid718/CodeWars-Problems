/*

Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long.

'i' will increment the value ( initially 0 ).
'd' will decrement the value.
's' will square the value.
'o' will output the value into the return array.

Invalid characters should be ignored.

parse( "iiisdoso" ); // should == [ 8 , 64 ]

*/

function parse(data) {
  let val = 0;
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    let command = data[i];
    switch (command) {
      case "i":
        val++;
        break;
      case "d":
        val--;
        break;
      case "s":
        val = val * val;
        break;
      case "o":
        arr.push(val);
        break;
      default:
        continue;
    }
  }

  return arr;
}
