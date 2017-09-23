# Return the number (count) of vowels in the given string.
#
# We will consider a, e, i, o, and u as vowels for this Kata.

def getCount(inputStr)
  vowels = ["a", "e", "i", "o", "u"]
  vowel_counter = 0
  inputStr.chars.each do |char|
    vowel_counter += 1 if vowels.include?(char)
  end
  vowel_counter
end
