# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
#
# For example:
#
# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1,2,2,3,3])       == [1,2,3]

def unique_in_order(iterable)
  if iterable.is_a?(String)
    iterable = iterable.chars
  end

  iterable.select.with_index { |el, idx| idx < (iterable.length) && el != iterable[idx+1] }
end

# Alternatively

def unique_in_order(iterable)
  if iterable.is_a?(String)
    iterable = iterable.chars
  end

  arr = []
  idx = 0

  while idx < iterable.length
    arr << iterable[idx] unless arr.last == iterable[idx]
    idx += 1
  end

  arr
end
