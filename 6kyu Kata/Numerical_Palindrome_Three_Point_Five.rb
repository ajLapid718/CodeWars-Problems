# A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
#
# 2332
# 110011
# 54322345
#
# For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.
#
# For this kata, single digit numbers and numbers which start and end with 0s (such as 010 and 000) will NOT be considered valid numerical palindromes.
#
# If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.
#
# palindrome(1221) => [22,1221]
# palindrome(34322122) => [22,212,343,22122]
# palindrome(1001331) => [33,1001,1331]
# palindrome(1294) => "No palindromes found"
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

  num.to_s.chars.each_index do |i|
    num.to_s.chars.each_index do |j|
      next if i == j
      arr << num.to_s[i..j]
    end
  end

  if arr.reject(&:empty?).select { |num| is_palindrome?(num) }.uniq.map(&:to_i).sort.tap { |op| op.delete(0) }.select { |num| is_palindrome?(num) }.empty?
    return "No palindromes found"
  else
    arr.reject(&:empty?).select { |num| is_palindrome?(num) }.uniq.map(&:to_i).sort.tap { |op| op.delete(0) }.select { |num| is_palindrome?(num) }
  end
end

def is_palindrome?(num)
  (num.to_s == num.to_s.reverse) && (num.to_s.length != 1)
end
