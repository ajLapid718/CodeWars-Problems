/*

The mean (or average) is the most popular measure of central tendency; however it does not behave very well when the data is skewed (i.e. wages distribution).
In such cases, it's better to use the median.

Your task for this kata is to find the median of an array consisting of n elements.

You can assume that all inputs are arrays of numbers in integer format.
For the empty array your code should return NaN (false in JavaScript/NULL in PHP).

Examples:

Input [1, 2, 3, 4] --> Median 2.5
Input [3, 4, 1, 2, 5] --> Median 3

*/


// Wanted to try my hand at some code golfing for this one;

const median = n => n.length % 2 === 0 && n.length > 0 ? n.sort((a,b) => a - b).slice(n.length/2-1, n.length/2+1).reduce((a,b) => a + b)/2 : n.sort((a,b) => a - b)[Math.floor(n.length/2)] || false;
