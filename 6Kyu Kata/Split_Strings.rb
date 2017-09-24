# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
#
# Examples:
#
# solution('abc') # should return ['ab', 'c_']
# solution('abcdef') # should return ['ab', 'cd', 'ef']

def solution(str)
	if str.length.odd?
		str.insert(-1, "_")
	end

	str.chars.each_cons(2).select.with_index{ |arr, idx| idx.even? }.map(&:join)
end

# Alternatively

def solution(str)
  if str.length.odd?
    str.insert(-1, "_")
  end

  str.chars.each_slice(2).map(&:join)
end
