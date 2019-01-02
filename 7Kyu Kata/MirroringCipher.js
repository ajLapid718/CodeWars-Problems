/*

Your back at your newly acquired decrypting job for the secret organization when a new assignment comes in.
Apparently the enemy has been communicating using a device they call "The Mirror".
It is a rudimentary device with encrypts the message by switching its letter with its mirror opposite (A => Z), (B => Y), (C => X) etc.

Your job is to build a method called "mirror" which will decrypt the messages.
Resulting messages will be in lowercase.

To add more secrecy, you are to accept a second optional parameter, telling you which letters or characters are to be reversed; if it is not given, consider the whole alphabet as a default.
To make it a bit more clear: e.g. in case of "abcdefgh" as the second optional parameter, you replace "a" with "h", "b" with "g" etc.

For example:

mirror("Welcome home"), "dvoxlnv slnv" // whole alphabet mirrored here;
mirror("hello", "abcdefgh"), "adllo" // notice only "h" and "e" get reversed;

*/

function mirror(code) {
  code = code.toLowerCase();
  let str = "";
  let alphabet = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a"
  };

  let amountOfArgs = arguments.length;

  if (amountOfArgs === 1) {
    return encryptStr(code, alphabet);
  }
  else if (amountOfArgs === 2) {
    let forwardLegend = arguments[1];
    let backwardLegend = arguments[1].split('').reverse();

    let legendObj = forwardLegend.split('').reduce((accum, curr, idx) => {
      accum[curr] = backwardLegend[idx];
      return accum;
    }, {});

    return encryptStr(code, legendObj);
  };
};

function encryptStr(code, obj) {
  let str = "";

  for (let i = 0; i < code.length; i++) {
    let character = code[i];

    if (obj.hasOwnProperty(character) === false) {
      str += character;
      continue;
    }

    str += obj[character];
  };

  return str;
};
