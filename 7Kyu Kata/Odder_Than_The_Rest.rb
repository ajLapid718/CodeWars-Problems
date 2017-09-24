# Create a method that takes an array/List as an input, and outputs the index at which the sole odd number is located.
#
# This method should work with arrays with negative numbers. If there is no negative number in the array, then the method should output -1.
#
# Examples:
#
# oddOne([2,4,6,7,10]) # => 3
# oddOne([2,16,98,10,13,78]) # => 4
# oddOne([4,-8,98,-12,-7,90,100]) # => 4
# oddOne([2,4,6,8]) # => -1

def oddOne(arr)
	if arr.all? { |i| i.even? }
		return -1
	elsif arr.all? { |i| i.odd? }
		return -1
	else
		x = arr.count { |i| i.even? }
		y = arr.count { |i| i.odd? }
		odd_one_out = arr.find { |i| i.odd? } if x > 1
		odd_one_out = arr.find { |i| i.even? } if y > 1
		arr.index(odd_one_out)
	end
end
