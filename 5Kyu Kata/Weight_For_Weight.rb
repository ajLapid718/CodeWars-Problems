# My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

# I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

# For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

# Example:

# "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

# When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

# All numbers in the list are positive numbers and the list can be empty.

# Notes

# Don't modify the input
# For C: The result is freed.

# My solution; this was fun to write despite the length of the body of code and the extra auxillary space created by using zip

def order_weight(strng)
  container = []
  original_weights = strng.split(" ")
  tampered_weights = original_weights.map { |num| to_weight_helper(num) }
  pairs = tampered_weights.zip(original_weights).sort_by { |arr| [arr.first, arr.last] } #.sort { |arr1, arr2| (arr1.first <=> arr2.first) == 0 ? arr1.last <=> arr2.last : arr1.first <=> arr2.first }
  pairs.each { |pair| container << pair.last }
  container.map(&:to_i).join(" ")
end

def to_weight_helper(num_as_str)
  num_as_str.chars.map(&:to_i).reduce(:+)
end

# Another solution provided by a Codewars user; the tie-breaker is used directly in this case instead of the approach I took

def order_weight(strng)
  strn.split.sort_by { |num_as_string| [num_as_string.chars.map(&:to_i).reduce(:+), num_as_string] }.join(" ")
end
