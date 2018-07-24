/*

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order.
SortedInsert takes the head of a linked list and data used to create a node as arguments.
SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)

*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, val) {
  let nodeToInsert = new Node(val);

  if (!head || val < head.data) {
    let temp = head;
    head = nodeToInsert;
    head.next = temp;
    return head;
  }

  let currNode = head;

  while (currNode.next !== null) {
    if (val > currNode.data && val < currNode.next.data) {
      let temp = currNode.next;
      nodeToInsert.next = temp;
      currNode.next = nodeToInsert;
    }
    currNode = currNode.next;
  }

  if (val > currNode.data) {
    currNode.next = nodeToInsert;
  }

  return head;
}
