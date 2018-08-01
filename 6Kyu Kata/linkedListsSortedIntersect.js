/*

Write a SortedIntersect() function which creates and returns a list representing the intersection of two lists that are sorted in increasing order.
Ideally, each list should only be traversed once. The resulting list should not contain duplicates.

var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
sortedIntersect(first, second) === 1 -> 3 -> 6 -> null

*/

// My solution;
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedIntersect(listOne, listTwo) {
  if (!listOne && !listTwo) return null;
  if (!listOne || !listTwo) return null;

  let valsOne = {};
  let valsTwo = {};
  let commonVals = [];
  let resultLL;

  addValToObj(listOne, valsOne);
  addValToObj(listTwo, valsTwo);

  for (let key in valsOne) {
    if (valsTwo.hasOwnProperty(key) === true) commonVals.push(+key);
  }

  if (commonVals.length === 0) return null;

  let newHead = new Node(commonVals[0])
  resultLL = newHead;
  let idx = 1;

  while (idx < commonVals.length) {
    let currVal = commonVals[idx];
    resultLL.next = new Node(currVal);
    resultLL = resultLL.next;
    idx++;
  }

  return newHead;
}

function addValToObj(list, obj) {
  let currNode = list;
  while (currNode) {
    let data = currNode.data;
    obj[data] = true;
    currNode = currNode.next;
  }
}


// A solution provided by another Codewars user;
// This solution is a recursive approach to build out the new LL;
function Node(data, next) {
 this.data = data === undefined ? null : data;
 this.next = next === undefined ? null : next;
}

function sortedIntersect(first, second) {
 if(!first || !second) return null;
 if(first.data < second.data) return sortedIntersect(first.next, second);
 if(first.data > second.data) return sortedIntersect(first, second.next);
 if(first.next && first.data === first.next.data) return sortedIntersect(first.next, second);
 return new Node(first.data, sortedIntersect(first.next, second));
}
