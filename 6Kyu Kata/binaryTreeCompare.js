/*

Given the node object,

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null

Write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

Examples:

1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)

*/

// My initial solution;
function compare(p, q) {
  let mainTree = p;
  let otherTree = q;

  while (p && q) {
    if (p.val !== q.val) return false;
    p = p.left;
    q = q.left;
  }

  if (p && !q) return false;
  if (q && !p) return false;

  while (mainTree && otherTree) {
    if (mainTree.val !== otherTree.val) return false;
    mainTree = mainTree.right;
    otherTree = otherTree.right;
  }

  if (mainTree && !otherTree) return false;
  if (otherTree && !mainTree) return false;

  return true;
};

// Alternatively;
function compare(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;
  return compare(a.left, b.left) && compare(a.right, b.right);
}
