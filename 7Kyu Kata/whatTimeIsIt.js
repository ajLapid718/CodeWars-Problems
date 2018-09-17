/*

Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

*/

function getMilitaryTime(input) {
  let timePeriod = input.slice(-2);
  let info = input.slice(0, -2).split(":");

  let hours = Number(info[0]);
  let minutes = info[1];
  let seconds = info[2];

  if (hours === 12 && timePeriod === "AM") {
    hours = "00";
  }
  else if (hours === 12 & timePeriod === "PM") {
    hours = "12";
  }
  else if (timePeriod === "PM") {
    hours = hours + 12;
  }

  if (hours < 10 && hours !== "00") hours = "0" + hours;
  return hours + ":" + minutes + ":" + seconds;
}
