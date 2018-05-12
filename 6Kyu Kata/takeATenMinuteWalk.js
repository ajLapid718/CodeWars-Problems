/*

You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
Return false otherwise.

Note: You will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).

*/

// Initially;
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let counter = 0;
  let directions = {n: 1, e: 1, s: -1, w: -1};

  for (let i = 0; i < walk.length; i++) {
    let currDirection = walk[i];
    counter = counter + directions[currDirection];
  }

  return counter === 0;
}

// Alternatively;
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0;
  let y = 0;

  for (let i = 0; i < walk.length; i++) {
    let direction = walk[i];
    if (direction === "n") {y++; continue};
    if (direction === "s") {y--; continue};
    if (direction === "e") {x++; continue};
    if (direction === "w") {x--; continue};
  }

  return x === 0 && y === 0;
}
