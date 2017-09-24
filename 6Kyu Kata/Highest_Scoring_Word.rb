# Given a string of words (x), you need to find the highest scoring word.
#
# Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.
#
# You need to return the highest scoring word as a string.
#
# If two words score the same, return the word that appears earliest in the original string.
#
# All letters will be lower case and all inputs will be valid.

def word_value(word)

  alphabet = ("a".."z").to_a
  hsh = Hash.new(1)

  alphabet.each do |letter|
    hsh[letter] += alphabet.index(letter)
  end

  total = 0

  word.chars.each do |letter|
    total += hsh[letter]
  end

  [word, total]
end


def high(x)
  words = []

  x.split.each do |word|
    words << word_value(word)
  end

  words.max_by { |word, length| length }.first
end
