/*

You are given a binary tree.
Implement the method maxSum which returns the maximal sum of a route from root to leaf.
For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13

The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum.

The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

*/

// My solution;
function maxSum(root) {
  if (!root) return 0;

  let left = root.value + maxSum(root.left);
  let right = root.value + maxSum(root.right);

  return Math.max(left, right);
}

// A solution provided by another Codewars user;
function maxSum(root) {
  if (!root) return 0;

  let leftSum = 0;
  let rightSum = 0;

  if (!root.left && !root.right) { // bumped into a leaf node;
    return root.value
  }

  if (root.left) {
    leftSum = root.value + maxSum(root.left);
  }

  if (root.right) {
    rightSum = root.value + maxSum(root.right);
  }

  return Math.max(leftSum, rightSum);
}
