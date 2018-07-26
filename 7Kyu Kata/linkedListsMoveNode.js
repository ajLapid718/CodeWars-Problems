/*

Linked Lists - Move Node

Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list.
You should throw an error when the source list is empty.
For simplicity, we use a Context object to store and return the state of the two linked lists.
A Context object containing the two mutated lists should be returned by moveNode.

MoveNode() is a handy utility function to have for later problems.

JavaScript

var source = 1 -> 2 -> 3 -> null
var dest = 4 -> 5 -> 6 -> null
moveNode(source, dest).source === 2 -> 3 -> null
moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null

Python

source = 1 -> 2 -> 3 -> None
dest = 4 -> 5 -> 6 -> None
move_node(source, dest).source == 2 -> 3 -> None
move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> None

Ruby

source = 1 -> 2 -> 3 -> nil
dest = 4 -> 5 -> 6 -> nil
move_node(source, dest).source == 2 -> 3 -> nil
move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> nil

*/

// My solution (without annotations);
function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, destination) {
  if (!source) throw Error;

  let currNode = source;
  source = currNode.next;
  let temp = currNode;

  let otherTemp = destination;
  destination = temp;
  destination.next = otherTemp;

  return new Context(source, destination);
}

// My solution (with annotations);
function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, destination) {
  if (!source) throw Error;

  let currNode = source; // hold a reference to the entire source Linked List;
  source = currNode.next; // re-assign the head of the source Linked List to the following node, thereby removing the specific node we want to relocate;
  let temp = currNode; // grab the entire source Linked List so that we can capture the firstNode/head later on and alter this firstNode's/head's next property to be the destination Linked List;

  let otherTemp = destination; // hold a reference to the destination Linked List;
  destination = temp; // re-assign the destination Linked List to the source Linked List with the primary purpose of keeping the head node and changing its next property to be the destination Linked List;
  destination.next = otherTemp; // re-assign the next property to be the destination Linked List, which effectively completes taking the source's head node and following it up with the destination Linked List;

  return new Context(source, destination);
}
