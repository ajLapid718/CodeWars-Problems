# I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
# P.S. Each array includes only integer numbers. Output is a number too.

def array_plus_array(arr1, arr2)
  sum = 0
  arr1.each { |num| sum += num }
  arr2.each { |num| sum += num }
  sum
end
