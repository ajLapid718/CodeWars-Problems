/*

Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.

A Node has the following properties:

var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.

The structure of a tree looks like:

data Tree a = Nil | Node (Tree a) a (Tree a)

Pre-order means that we
1.) Visit the root.
2.) Traverse the left subtree (left node.)
3.) Traverse the right subtree (right node.)

In-order means that we
1.) Traverse the left subtree (left node.)
2.) Visit the root.
3.) Traverse the right subtree (right node.)

Post-order means that we
1.) Traverse the left subtree (left node.)
2.) Traverse the right subtree (right node.)
3.) Visit the root.

Let's say we have three Nodes.

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");

a.left = b;
a.right = c;
Then, preOrder(a) should return ["A", "B", C"]
inOrder(a) should return ["B", "A", "C"]
postOrder(a) should return ["B", "C", A"]

What would happen if we did this?

var d = new Node("D");
c.left = d;
preOrder(a) should return ["A", "B", "C", "D"]
inOrder(a) should return ["B", "A", "D", "C"]
postOrder(a) should return ["B", "D", "C", "A"]

*/

// My solution;
function preOrder(node) {
  let result = [];
  let s = [node];

  while (s.length) {
    let current = s.pop();
    result.push(current.data);
    if (current.right) s.push(current.right);
    if (current.left) s.push(current.left);
  }

  return result;
}

function inOrder(node) {
  let result = [];
  let stack = [];

  while (true) {
    if (node) {
      stack.push(node);
      node = node.left;
    }
    else {
      if (stack.length === 0) break;
      let currNode = stack.pop();
      result.push(currNode.data);
      node = currNode.right;
    }
  }

  return result;
}

function postOrder(node) {
  let result = [];

  let stackOne = [];
  let stackTwo = [];

  stackOne.push(node);

  while (stackOne.length) {
    node = stackOne.pop();
    if (node.left) stackOne.push(node.left);
    if (node.right) stackOne.push(node.right);
    stackTwo.push(node);
  }

  while (stackTwo.length) {
    let currNode = stackTwo.pop();
    result.push(currNode.data);
  }

  return result;
}

// Alternatively;
function preOrder(node) {
  if (!node) return [];
  return [node.data].concat(preOrder(node.left)).concat(preOrder(node.right));
}
function inOrder(node) {
  if (!node) return [];
  return inOrder(node.left).concat([node.data]).concat(inOrder(node.right));
}
function postOrder(node) {
  if (!node) return [];
  return postOrder(node.left).concat(postOrder(node.right)).concat([node.data]);
}
