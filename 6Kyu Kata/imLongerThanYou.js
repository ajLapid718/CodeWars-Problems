/*

Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order.
If there are two words of the same lengths, sort them alphabetically.
Look at the examples below for more details.

longer("Another Green World") => Green World Another
longer("Darkness on the edge of Town") => of on the Town edge Darkness
longer("Have you ever Seen the Rain") => the you Have Rain Seen ever

Assume that only only Alphabets will be entered as the input.
Uppercase characters have priority over lowercase characters. That is,

longer("hello Hello") => Hello hello

*/

function longer(s) {
  let words = s.split(" ");
  return words.sort((w1,w2) => w1.length - w2.length || w1 > w2).join(" ");
}
