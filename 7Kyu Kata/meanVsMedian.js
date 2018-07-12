/*

Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value

Array will always be valid (odd-length >= 3)

*/

function meanVsMedian(numbers) {
  let sum = numbers.reduce((a,b) => a + b);
  let count = numbers.length;
  let mean = Math.floor(sum/count);

  let sortedNums = numbers.sort((a,b) => a - b);
  let median = sortedNums[Math.floor(count/2)];

  if (mean > median) return "mean";
  if (median > mean) return "median";

  return "same";
}
