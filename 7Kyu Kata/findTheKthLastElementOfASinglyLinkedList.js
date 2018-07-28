/*

Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.

The function must return a falsy value for invalid input values, like an out of range index.

So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.

Other examples:

getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2

*/

function getKthLastElement(head, k) {
  if (k < 0) return false;

  let len = 0;
  let currNode = head;

  while (currNode !== null) {
    len++;
    currNode = currNode.next;
  }

  let pos = 1;
  currNode = head;

  while (currNode !== null) {
    if (len - pos === k) break;
    currNode = currNode.next;
    pos++;
  }

  return currNode;
}
