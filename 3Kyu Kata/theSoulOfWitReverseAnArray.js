/*

No time for stories.
Reverse an array, return the result.
Do whatever you want with the original array.
Don't use Array.prototype.reverse.
You have 30 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1]

*/

// My solution;
reverse=a=>a.map(a.pop,[...a])

// Alternatively;
reverse=a=>[...a].map(a.pop,a)
