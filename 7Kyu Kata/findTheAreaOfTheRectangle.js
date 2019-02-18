/*

Find the area of a rectangle when provided with one diagonal and one side of the rectangle.
If the input diagonal is less than or equal to the length of the side, return "Not a rectangle".
If the resultant area has decimals round it to two places.

*/

// Use the Pythagorean Theorem, where a^2 + b^2 = c^2, to find the length of the missing side;
// Once we have that information, we can find the area of the rectangle by multiplying the length by the width;
// In the event that the product (area) is a float, round it to two decimal places;

function area(d,l) {
  if (d <= l) return "Not a rectangle";
  let missingSideLength = Math.sqrt(Math.pow(d,2) - Math.pow(l,2));
  let areaOfRectangle = missingSideLength * l;
  return Math.round(areaOfRectangle * 100) / 100;
}
