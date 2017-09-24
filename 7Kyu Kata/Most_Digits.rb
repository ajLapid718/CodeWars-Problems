# Find the number with the most digits.
#
# If two numbers in the argument array have the same number of digits, return the first one in the array.

def find_longest(arr)
  x = arr.map(&:to_s).sort_by { |x| x.length }.last.chars.length
  arr.map(&:to_s).find { |num| num.length == x }.to_i
end
