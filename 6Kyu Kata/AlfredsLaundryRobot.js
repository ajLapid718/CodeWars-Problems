/*

Alfred Pennyworth has created a robot to drop off Batman's leotards at the launderette, however he needs some help coding the robot's path-finding function through Gotham city.

The city of Gotham is layed out in a perfect one km by one km grid and is navigated by series' of north, east, south, and west (n, e, s ,w) commands, additionally there are two launderettes for the robot to choose from.
Unfortunately, the robot can sometimes get lost.

Write a function that returns true if the robot's path will take it to a laundrette and false if the path does not.

Launderette location 1: e, n, e, e, n. Launderette location 2: w, n, w, n, w, w, n.

*/

/*

n: 1,
e: 1,
w: -1,
s: -1

first location: e, n, e, e, n;
first location: [x, y] ===> [3, 2];

second location: w, n, w, n, w, w, n;
second locaton: [x, y] ===> [-4, 3];

*/

function pathFinding(path) {
  let currentX = 0;
  let currentY = 0;

  let firstLocationCoordinates = [3,2];
  let secondLocationCoordinates = [-4,3];

  for (let i = 0; i < path.length; i++) {
    let currentDirection = path[i];

    switch (currentDirection) {
      case "n":
        currentY++;
        break;
      case "e":
        currentX++;
        break;
      case "s":
        currentY--;
        break;
      case "w":
        currentX--;
        break;
    }
  }

  if (currentX === firstLocationCoordinates[0] && currentY === firstLocationCoordinates[1]) return true;
  if (currentX === secondLocationCoordinates[0] && currentY === secondLocationCoordinates[1]) return true;

  return false;
}
