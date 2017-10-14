# Description:

# The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

# maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# -- should be 6: [4, -1, 2, 1]
# Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
# Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

# My solution

def max_sequence(arr)
  return arr.first if arr.size == 1
  return 0 if arr.all? { |num| num < 0 } || arr.empty?
  current_sum = arr.first
  maximum = arr.first

  arr[1..-1].each do |num|
    current_sum = 0 if current_sum < 0
    current_sum += num
    maximum = current_sum if current_sum > maximum
  end

  maximum
end

# Another solution provided by another Codewars user

def max_sequence(arr)
  sum = arr.first ? arr.first : 0

  arr.each do |num|
    sum_to_here = [(num), (sum_to_here + num)].max
    sum = [sum, sum_to_here].max
  end

  sum
end
