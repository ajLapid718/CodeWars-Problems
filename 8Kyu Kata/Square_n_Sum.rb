# Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.
#
# For example:
#
# squareSum([1, 2, 2]) # should return 9

def squareSum(numbers)
  numbers.map { |num| num ** 2 }.reduce(:+)
end
