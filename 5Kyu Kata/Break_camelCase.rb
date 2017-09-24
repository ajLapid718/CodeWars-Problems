# Complete the solution so that the function will break up camel casing, using a space between words.
#
# Example
#
# solution('camelCasing') # => should return 'camel Casing'
# solution('camelCaseTesting') # => should return 'camel Case Testing'

def solution(string)
	alphabet = ("A".."Z").to_a

	arr = []
	string.chars.each do |letter|
		if alphabet.include?(letter)
			arr << " "
			arr << letter
		else
			arr << letter
		end
	end
arr.join
end
