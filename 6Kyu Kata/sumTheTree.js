/*

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null

struct node
{
  int value;
  node* left;
  node* right;
}

public class Node
{
    public int Value;
    public Node Left;
    public Node Right;

    public Node(int value, Node left = null, Node right = null)
    {
      Value = value;
      Left = left;
      Right = right;
    }
}

Write a function that returns the sum of all values, including the root.
Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3

*/

// My iterative solution;
function sumTheTreeValues(root) {
  let counter = 0;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    counter += node.value;
  }

  return counter;
}

// My recursive solution;
function sumTheTreeValues(root) {
  if (!root) return 0;
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
