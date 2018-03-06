/*

It is a simple, real world task.
You will receive a single string as input.
It will have the month (2 digits) and year (2 or 4 digits).
These are separated by one character ("-" or "/", maybe some spaces too).

For example:

02/21
02 / 21
02 / 2021
02-2021

Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past.
Note, current month should still return true.

Good luck.

*/

function checkExpiryValid(date) {
  let dateInfo = date.replace(/[^0-9]/g, '');
  let testMonth = parseInt(dateInfo.slice(0,2));
  let testYear = parseInt(dateInfo.slice(-2));

  let today = new Date();
  let currentMonth = today.getMonth() + 1;
  let currentYear = parseInt(today.getFullYear().toString().slice(-2));


  if (currentYear === testYear && currentMonth <= testMonth) {
    return true;
  }

  if (currentYear === testYear && currentMonth > testMonth) {
    return false;
  }

  if (currentYear < testYear) {
      return true;
    }

  if (currentYear > testYear) {
      return false;
    }
}
