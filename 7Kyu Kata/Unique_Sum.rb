# Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

# For example:

# [ 1, 2, 3] ==> 6

# [ 1, 3, 8, 1, 8] ==> 12

# [ -1, -1, 5, 2, -7] ==> -1

# [] ==> None

# Good Luck!

# My solution w/o built-in functions

def unique_sum(lst)
  return nil if lst.empty?

  staging_arr = []
  total = 0

  lst.each do |num|
    staging_arr << num unless staging_arr.include?(num)
  end

  staging_arr.each do |uniq_num|
    total += uniq_num
  end

  total
end

# My solution w/built-in functions

def unique_sum(lst)
  lst.uniq.reduce(:+)
end
