# Challenge:
#
# Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
#
# Example:
#
# Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
#
# Addendum:
#
# Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
#
# http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

def flatten_and_sort(array)
    array.flatten.sort
end

# Solution w/o the convenience of Ruby magic; solves the problem recursively

def flatten_and_sort(array)
  container = []

  array.each do |element|
    if element.is_a?(Array)
      container += flatten_and_sort(element)
    else
      container << element
    end
  end

  container.sort
end
