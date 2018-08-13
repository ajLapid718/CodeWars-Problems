/*

The first century spans from the year 1 up to and including the year 100,
The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

*/

// My solution;
export const centuryFromYear = (year: number): number => {
  let chunksOfOneHundredYears: number = Math.floor(year/100);
  let extraYears: number = year % chunksOfOneHundredYears;

  if (extraYears) {
    return chunksOfOneHundredYears + 1;
  }
  else {
    return chunksOfOneHundredYears;
  }
}

// A solution provided by a Codewars user;
export const centuryFromYear = (year: number): number => {
  return Math.ceil(year/100);
}
