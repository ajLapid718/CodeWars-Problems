# Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.
#
# The function should return a list of tuples (in Python) or arrays (in other languages) sorted by the most frequent letters first. Letters with the same frequency are ordered alphabetically. For example:
#
#   letter_frequency('aaAabb dddDD hhcc')
# will return
#
#   [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
# Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.

def letter_frequency(text)
  alphabet = ("a".."z").to_a
  letter_to_freq = Hash.new(0)
  text.downcase.chars.each { |element| letter_to_freq[element] += 1 if alphabet.include?(element) }
  letter_to_freq.sort { |arr1, arr2| (arr2.last <=> arr1.last) == 0 ? (arr1.first <=> arr2.first) : (arr2.last <=> arr1.last) }
end

# Alternatively

def letter_frequency(text)
  alphabet = ("a".."z").to_a
  letter_to_freq = Hash.new(0)
  text.downcase.chars.each { |element| letter_to_freq[element] += 1 if alphabet.include?(element) }
  letter_to_freq.sort_by { |arr| [-arr.last, -arr.first] }
end
