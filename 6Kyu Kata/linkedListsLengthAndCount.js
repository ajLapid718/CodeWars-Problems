/*

Description:
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) === 0
length(1 -> 2 -> 3 -> null) === 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) === 0
count(1 -> 2 -> 3 -> null, 1) === 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4

I've decided to bundle these two functions within the same Kata since they are both very similar.

*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let counter = 0;
  let currNode = head;

  while (currNode) {
    currNode = currNode.next;
    counter += 1;
  }

  return counter;
}

function count(head, data) {
  let counter = 0;
  let currNode = head;

  while (currNode) {
    if (currNode.data === data) counter++;
    currNode = currNode.next;
  }

  return counter;
}
