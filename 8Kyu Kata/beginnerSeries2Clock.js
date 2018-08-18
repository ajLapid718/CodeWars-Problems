/*

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

#####Example:

past(0, 1, 1) == 61000

Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

*/

function past(h, m, s) {
  let hoursToSecs = h * 60 * 60;
  let minutesToSecs = m * 60;
  let totalSeconds = hoursToSecs + minutesToSecs + s;
  
  return totalSeconds * 1000;
}
