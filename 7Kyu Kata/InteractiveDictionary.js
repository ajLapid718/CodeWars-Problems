/*

In this kata, your job is to create a class Dictionary which you can add words to and their entries.

Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Cant find entry for Banana

*/

class Dictionary {
  constructor() {
    this.dict = {};
  }

  newEntry(key, value) {
    this.dict[key] = value;
  }

  look(key) {
    if (this.dict.hasOwnProperty(key)) {
      return this.dict[key];
    }
    else {
      return `Can't find entry for ${key}`;
    }
  }
}
