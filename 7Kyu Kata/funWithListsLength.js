/*

Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null and can hold any type of value.

*/

function length(head) {
  let currNode = head;
  let counter = 0;

  while (currNode) {
    currNode = currNode.next;
    counter += 1;
  }

  return counter;
}
