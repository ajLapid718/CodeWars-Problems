# Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
#
# The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
#
# Examples:
#
# weirdcase( "String" )#=> returns "StRiNg"
# weirdcase( "Weird string case" );#=> returns "WeIrD StRiNg CaSe"

def weirdcase(string)
  string.split(" ").map { |word| weirdcase_helper(word) }.join(" ")
end

def weirdcase_helper(word)
  altered_word = []
  idx = 0

  word.chars.each do |letter|
    altered_word << letter.upcase if idx.even?
    altered_word << letter.downcase if idx.odd?
    idx += 1
  end

  altered_word.join("")
end
