# Description:
#
# Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.
#
# "a=1, b=2, c=3, d=4"
# This string should return a hash that looks like
#
# { :a => 1, :b => 2, :c => 3, :d => 4}

def str_to_hash(str)
  neglect_these = ["=", "," " "]
  letters_and_integers = str.chars.reject { |element| neglect_these.include?(element) }
  alphabet = ("a".."z").to_a

  hsh = Hash.new

  letters_and_integers.each_with_index do |el,idx|
    break if idx == letters_and_integers.length - 1
    if alphabet.include?(el)
      hsh[el.to_sym] = letters_and_integers[idx+1].to_i
    end
  end

  hsh
end
