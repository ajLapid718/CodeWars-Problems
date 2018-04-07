/*

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

Examples:

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie'];
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey'];

*/

// How I would normally write my solution;

function capMe(names) {
  return names.map(name => {
    let firstLetter = name[0].toUpperCase();
    let restOfName = name.slice(1).toLowerCase();
    return firstLetter + restOfName;
  });
}

// My attempt at code golfing and becoming more familiar with arrow function syntax;

let capMe = names => names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
