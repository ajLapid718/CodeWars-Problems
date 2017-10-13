# Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

# For example:

# str1 is 'rkqodlw' and str2 is 'world' the output should return true.
# str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
# str1 is 'katas' and str2 is 'steak' should return false.

# Only lower case letters will be used (a-z). No punctuation or digits will be included.
# Performance needs to be considered

# My solution

def scramble(s1,s2)
  pile_of_letters = s1.chars
  target_letters = s2.chars
  target_letters.uniq.all? { |letter| pile_of_letters.count(letter) >= target_letters.count(letter) }
end

# Another solution provided by a Codewars user that I enjoyed

def scramble(s1,s2)
  s2.chars.each { |letter| return false unless s1.slice!(letter) }
  true
end

# Another solution provided by a Codewars user; this reminds me that you can call #count on both an array AND a string

def scramble(s1,s2)
  s2.chars.uniq.each { |letter| return false unless s1.count(letter) >= s2.count(letter) }
  true
end
