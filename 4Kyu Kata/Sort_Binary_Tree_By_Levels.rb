=begin

You are given a binary tree (not sorted, it doesn't matter in this kata.
For ruby, it's represented by class TreeNode, defined like this:

class TreeNode
  attr_accessor :left
  attr_accessor :right
  attr_reader :value
end

Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.
Return empty list for empty tree (nil argument in case of ruby).

Example 1 - following tree:

                 2
            8        9
          1  3     4   5
Should return following list:
[2,8,9,1,3,4,5]

Example 2 - following tree:

                 1
            8        4
              3        5
                         7
Should return following list:
[1,8,4,3,5,7]

=end

def tree_by_levels(node)
  return [] if node == nil
  queue = [node]
  values = []

  while queue.length != 0
    current_tree = queue.shift
    queue.push(current_tree.left) if current_tree.left
    queue.push(current_tree.right) if current_tree.right
    values.push(current_tree.value)
  end

  return values
end
