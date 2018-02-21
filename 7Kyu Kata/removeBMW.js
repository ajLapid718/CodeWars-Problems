/*

It happened decades before Snapchat, years before Twitter and even before Facebook.
Targeted advertising was a bit of a challenge back then.
One day, the marketing professor at my university told us a story that I am yet to confirm using reliable sources.
Nevertheless, I retold the story to dozens of my students already, so, sorry BMW if it is all a big lie.

Allegedly, BMW, in an attempt to target the educated, produced billboard posters featuring the English alphabet with three letters missing: B, M and W. Needless to say, many were confused, some to the extent of road accidents.

Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.

If data of the wrong data type was sent as a parameter the function must throw an error (IllegalArgumentException in Groovy): "This program only works for text."

*/

function removeBMW(str) {
  var err = new Error("This program only works for text.");

  if (typeof str !== "string") {
    throw(err);
  }

  var arr = [];
  var lettersToExclude = ["B", "M", "W", "b", "m", "w"];
  var splitWord = str.split('');

  for (var i = 0; i < splitWord.length; i++) {
    if (!lettersToExclude.includes(splitWord[i])) {
      arr.push(splitWord[i]);
    }
  }

  return arr.join('');
}
