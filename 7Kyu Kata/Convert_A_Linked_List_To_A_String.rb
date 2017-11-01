# Link: https://www.codewars.com/kata/582c297e56373f0426000098

# My Solution

def stringify(list)
  return "nil" if list.nil?
  arr = []
  current_node = list

  until current_node.next_node == nil
    arr << current_node.data
    current_node = current_node.next_node
  end

  arr << current_node.data
  arr.join(" -> ") << " -> nil"
end
