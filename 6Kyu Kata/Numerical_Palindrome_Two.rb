# A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
#
# 2332
# 110011
# 54322345
#
# For this kata, single digit numbers will not be considered numerical palindromes.
#
# For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.
#
# Note: Palindromes should be found without permutating num.
#
# palindrome(5) => false
# palindrome(1221) => true
# palindrome(141221001) => true
# palindrome(1215) => true
# palindrome(1294) => false
# palindrome("109982") => "Not valid"
# Other Kata in this Series:
#
# Numerical Palindrome #1
# Numerical Palindrome #1.5
# Numerical Palindrome #2
# Numerical Palindrome #3
# Numerical Palindrome #3.5
# Numerical Palindrome #4
# Numerical Palindrome #5

def palindrome(num)
  return "Not valid" if num.is_a?(String) || num < 0
  return "Not valid" if num.is_a?(Float)
	arr = []
  	num.to_s.chars.each_index do |current_idx|
    	num.to_s.chars.each_index do |following_idx|
    		next if current_idx == following_idx
      		arr << num.to_s[current_idx..following_idx]
    	end
  	end
  arr.reject(&:empty?).select { |num| num if (num == num.reverse) && (num.length != 1) }.length >= 1
end
