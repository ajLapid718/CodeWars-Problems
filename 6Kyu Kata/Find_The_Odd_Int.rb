# Given an array, find the int that appears an odd number of times.
#
# There will always be only one integer that appears an odd number of times.

def find_it(seq)
  seq.find { |num| num if seq.count(num) % 2 != 0 }
end
