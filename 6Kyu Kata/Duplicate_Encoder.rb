# The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
#
# Examples:
#
# "din" => "((("
#
# "recede" => "()()()"
#
# "Success" => ")())())"
#
# "(( @" => "))(("
#
#
# Notes:
#
# There is a flaw in the JS version, that may occur in the random tests. Do not hesitate to do several attempts before modifying your code if you fail there.
#
# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).

def duplicate_encode(word)
	result_hsh = Hash.new(0)
	word.chars.each do |element|
		result_hsh[element.downcase] += 1
	end

  result_hsh

  arr = []

  word.downcase.chars.each do |letter|
    if result_hsh[letter] == 1
      arr << "("
    else
      arr << ")"
    end
  end
  arr.join
end

# Alternatively

def duplicate_encode(word)
  word.downcase.chars.map { |character| word.downcase.count(character) == 1 ? "(" : ")" }.join
end
