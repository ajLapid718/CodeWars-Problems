# Count the number of occurencences of each character and return it as a list of tuples in order of appearance.

# Example:

# ordered_count("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

def ordered_count(str)
  counter_hsh = Hash.new(0)
  str.chars.each { |letter| counter_hsh[letter] += 1 }
  counter_hsh.sort_by { |x| [str.chars.index(x), str.chars.count(x)] }
end
