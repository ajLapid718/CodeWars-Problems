# An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false.
# Note that an empty array will not sum to zero.

def is_zero_balanced(arr)
  if arr.reduce(:+) == 0
    arr.all? { |num| arr.include?(num * -1) }
  else
    return false
  end
end

# Alternatively

def is_zero_balanced(arr)
  arr.include?(0) && arr.reduce(:+).zero?
end
