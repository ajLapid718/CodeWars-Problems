# Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:
#
# [a,a,a,a,b,b] and [c,c,c,d,c,d]
# Both arrays have four of one item and two of another, so balance should return true.
#
# #Have fun!

def balance(arr1, arr2)
  x = arr1.map { |element| arr1.count(element) }
  y = arr2.map { |element| arr2.count(element) }

  x.reduce(:+) == y.reduce(:+)
end

# Alternatively

def balance(arr1, arr2)
  x = arr1.map { |element| arr1.count(element) }
  y = arr2.map { |element| arr2.count(element) }

  x.sort == y.sort
end
