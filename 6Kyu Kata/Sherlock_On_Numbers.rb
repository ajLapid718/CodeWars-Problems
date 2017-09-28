# Description:
#
# Sherlock has to find suspect on his latest case. He will use your method, dear Watson. The suspect in this case is a number which is most unique in given set, e.g.:
#
# has least (minimum) occurences in set
# and no other number has the same occurences count
# Write method which helps Sherlock to find suspect from given set of numbers. If no suspect is found the method should return nil.
#
# find_suspect(1, 2, 3, 4, 2, 2, 1, 4, 4) # => 3
# find_suspect(1, 1, 2, 2) # => nil
# find_suspect(1, 1, 2, 2, 2) # => 1
# find_suspect(1, 2, 3, 4, 4, 3) # => nil

def find_suspect(*numbers)
  hsh = Hash.new(0)
  numbers.each { |num| hsh[num] += 1 }
  suspects = hsh.select { |suspect, occurrence| occurrence == hsh.values.min }.keys
  suspects.count > 1 ? nil : suspects.first
end
