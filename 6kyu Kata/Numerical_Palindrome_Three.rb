# A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
#
# 2332
# 110011
# 54322345
#
# For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.
#
# Return "Not valid" if the input is not an integer or is less than 0.
#
# palindrome(5) => 0
# palindrome(1221) => 2
# palindrome(141221001) => 5
# palindrome(1294) => 0
# palindrome("1221") => "Not valid"
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
  return "Not valid" if num.class == String || num < 0

  arr = []

  num.to_s.chars.each_index do |current_idx|
    num.to_s.chars.each_index do |following_idx|
      next if current_idx == following_idx
      arr << num.to_s[current_idx..following_idx]
      end
     end
   arr.reject(&:empty?).select { |num| is_palindrome?(num) }.count
end

def is_palindrome?(num)
  (num.to_s == num.to_s.reverse) && (num.length != 1)
end
