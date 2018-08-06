/*

It's the academic year's end, fateful moment of your school report.
The averages must be calculated.
All the students come to you and entreat you to calculate their average for them.
Easy!
You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

export function getAverage(marks: number[]): number {
  let quantity: number = marks.length;
  let sum: number = 0;

  for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    sum += mark;
  }

  return Math.floor(sum/quantity);
}
