# Create a function that takes a string as a parameter and does the following, in this order:
#
# replaces every letter with the letter following it in the alphabet (see note below)
# makes any vowels capital
# makes any consonants lower case
# Note: the alphabet should wrap around, so Z becomes A
#
# So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

def changer(string)
  vowels = "aeiou"
  alphabet = ("a".."z").to_a

  arr = []
  string.chars.each do |element|
    if alphabet.include?(element.downcase)
      ciphered_idx = alphabet.index(element.downcase) + 1
      arr << alphabet[ciphered_idx % 26]
    else
      arr << element
    end
  end

  result = []
  arr.each do |element|
    if vowels.include?(element)
      result << element.upcase
    else
      result << element
    end
  end

  result.join
end
