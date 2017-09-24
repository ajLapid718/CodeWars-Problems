# Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.
#
# For example:
#
# c = CaesarCipher.new(5); # creates a CipherHelper with a shift of five
# c.encode('Codewars') # returns 'HTIJBFWX'
# c.decode('BFKKQJX') # returns 'WAFFLES'
# If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.

class CaesarCipher
  attr_reader :shift

  SMALL_ALPHABET = ("a".."z").to_a

  def initialize(shift)
    @shift = shift
  end

  def encode(string)
    string.split.map { |word| encode_helper(word) }.join(" ").upcase
  end

  def decode(string)
    string.split.map { |word| decode_helper(word) }.join(" ").upcase
  end

  def encode_helper(word)
    arr = []
    word.chars.each do |letter|
      if SMALL_ALPHABET.include?(letter.downcase)
        ciphered_idx = SMALL_ALPHABET.index(letter.downcase) + shift
        arr << SMALL_ALPHABET[ciphered_idx % 26]
      else
        arr << letter
      end
    end
    arr.join
  end

  def decode_helper(word)
    arr = []
    word.capitalize.chars.each do |letter|
      if SMALL_ALPHABET.include?(letter.downcase)
        ciphered_idx = SMALL_ALPHABET.index(letter.downcase) - shift
        arr << SMALL_ALPHABET[ciphered_idx % 26]
      else
        arr << letter
      end
    end
    arr.join
  end
end
