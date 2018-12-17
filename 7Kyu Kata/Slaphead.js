/*

Being a bald man myself, I know the feeling of needing to keep it clean shaven.

Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/".
Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed.
Keep count of them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you should return:

["-------------", "Unicorn!"]

*/

function bald(x) {
  let counter = 0;
  let shavedHead = "";
  let statement;

  for (let i = 0; i < x.length; i++) {
    let character = x[i];
    if (character === "/") {
      counter++;
      shavedHead += "-";
    }
    else {
      shavedHead += character;
    }
  }

  if (counter === 0) {
    statement = "Clean!";
  }
  else if (counter === 1) {
    statement = "Unicorn!";
  }
  else if (counter === 2) {
    statement = "Homer!";
  }
  else if (counter >= 3 && counter <= 5) {
    statement = "Careless!";
  }
  else {
    statement = "Hobo!";
  }

  return [shavedHead, statement];
}
