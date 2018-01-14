# Task
# You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

# Examples
# * eliminate_unset_bits("11010101010101") ->  255 (= 11111111)
# * eliminate_unset_bits("111") ->  7
# * eliminate_unset_bits("1000000") -> 1
# * eliminate_unset_bits("000") -> 0

def eliminate_set_bits(number)
  binary_representation = number.delete("0")

  sum = 0
  binary_representation.chars.each_with_index { |num, idx| sum += num.to_i * (2**idx) }

  return sum
end
