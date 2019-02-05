/*

Your function takes two arguments:

current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (sonYearsOld * 2 === dadYearsOld) return 0;
  return yearsAgo(dadYearsOld, sonYearsOld) || yearsFromNow(dadYearsOld, sonYearsOld);
}

function yearsAgo(dad, son) {
  let currentAgeOfDad = dad;

  while (dad && son) {
    if (Math.floor(dad/2) === son) {
      return currentAgeOfDad - dad;
    }
    dad--;
    son--;
  }
}

function yearsFromNow(dad, son) {
  let originAgeOfDad = dad;

  while (true) {
    if (Math.round(dad/2) === son) {
      return dad - originAgeOfDad;
    }
    dad++;
    son++;
  }
}
