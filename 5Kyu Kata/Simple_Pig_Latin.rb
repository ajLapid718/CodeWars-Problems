# Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
#
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay

ALPHABET = ("a".."z").to_a

def pig_it(text)
  text.split.map { |word| latinize(word) }.join(" ")
end

def latinize(word)
  return word if ["?", "!", "."].include?(word)
  first_letter = word[0]
  ay = "ay"
  body = word[1..-1]

  body + first_letter + ay
end
