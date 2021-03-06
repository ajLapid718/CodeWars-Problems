# You get an array of numbers, return the sum of all of the positives ones.
#
# Example [1,-4,7,12] => 1 + 7 + 12 = 20
#
# Note: array may be empty, in this case return 0.
# Note: array may contain all negative integers, in this case return 0 (as per the test cases)

def positive_sum(arr)
  return 0 if arr.empty? || arr.all? { |num| num < 0 }
  arr.select { |num| num > 0 }.reduce(:+)
end
