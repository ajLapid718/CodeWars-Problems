# Task
#
# You are given a string s. Every letter in s appears once.
#
# Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)
#
# Example
#
# For s = "abc", the result should be "bac".
#
# The permutations in order are:
# "abc", "acb", "bac", "bca", "cab", "cba"
# So, The middle term is "bac".

def middle_permutation(string)
  sorted_string = string.chars.sort.join
  midpoint = (string.length / 2) - (1)
  if sorted_string.length.even?
    sorted_string[midpoint] + (sorted_string.slice(0, midpoint) + sorted_string.slice(midpoint+1, sorted_string.length)).reverse
  else
    sorted_string.slice(midpoint, 2).reverse + (sorted_string.slice(0, midpoint) + sorted_string.slice(midpoint+2, sorted_string.length)).reverse
  end
end

# Unoptimized/Inefficient Solution That Timed Out

def middle_permutation(string)
	string_permutations = string.chars.permutation(string.length).to_a.sort
  string_permutations[(string_permutations.length/2) - (1)].join
end
