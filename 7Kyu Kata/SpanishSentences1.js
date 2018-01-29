/*

In Spanish, sentences not only end with exclamation and question marks, but also begin with them (actually flipped over version).

It looks like:

¿Cómo estás?      -> How are you?
¡Es maravilloso!  -> It is wonderful!
Keeping in mind only the above-mentioned fact, your task is to find out how many sentences in unput array are "spanish" and return '¡n spanish sentence(s) here and hasta la vista, baby!'

For example:

spanishSent(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are hot!'])  -> '¡2 spanish sentences here and hasta la vista, baby!'

spanishSent(['¿How are you', '¿How are you?', '!It is me', 'You are.'])  -> '¡1 spanish sentence here and hasta la vista, baby!'
P.S. Array's length > 0.

*/

function spanishSent(arr) {
  var counter = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === "¡"  && arr[i][arr[i].length - 1] === "!") {
      counter++;
    }

    if (arr[i][0] === "¿" && arr[i][arr[i].length - 1] === "?") {
      counter ++;
    }
  }

  if (counter === 1) {
    return "¡1 spanish sentence here and hasta la vista, baby!";
  } else {
    return `¡${counter} spanish sentences here and hasta la vista, baby!`;
  }
}
