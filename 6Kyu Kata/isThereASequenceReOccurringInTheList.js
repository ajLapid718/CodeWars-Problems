/*

Definitions

In the following kata:
an item is a char or an int
a sequence is a continuous "repetition" (1 occurence or more) of the same item (example: [0,0,'a','a',0] has 3 sequences 0 with 2 items, a with 2 items followed by 0 with 1 item).

Objective
Find if a sequence is re-occuring after a break of sequence. In other words, are there any items that recur in this list but separated by one or more other item?

Input
items: a list of item (char or int) unsorted (['e','b',2,2,2])

Output
boolean: true/false

Examples:
[0,0,1,1,0,0] Return True as 0 is re-occuring
[0,0,'a',0] Return True as 0 is re-occuring
[0,0,1,1,2,2,1,1] Return True as 1 is re-occuring
[0,0,0,] Return False as no sequence re-occurs
[0,0,1,1,2,2] Return False as no sequence re-occurs

*/

function isReoccuring(items) {
  let seen = {};
  let firstItem = items[0];
  seen[firstItem] = 1;

  for (let i = 1; i < items.length; i++) {
    let prev = items[i-1];
    let currentElement = items[i];
    seen[currentElement] = seen[currentElement] + 1 || 1;
    if (seen[currentElement] >= 2 && prev !== currentElement) {
      return true;
    }
  }

  return false;
}
