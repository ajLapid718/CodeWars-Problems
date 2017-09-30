# Array#length will give you the number of top-level elements in an array.
#
# Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
#
# For example:
#
# deepCount([1, 2, 3]);
# //>>>>> 3
# deepCount(["x", "y", ["z"]]);
# //>>>>> 4
# deepCount([1, 2, [3, 4, [5]]]);
# //>>>>> 7
# The input will always be an array.

def deep_count(container)
  counter = 0
  container.each do |element|
    if element.is_a?(Array)
      counter += 1
      counter += deep_count(element)
    else
      counter += 1
    end
  end
  counter
end
