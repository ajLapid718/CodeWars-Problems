# Create a method called "power" that takes two integers and returns the value of the first argument raised to the power of the second. Return nil if the second argument is negative.
#
# Note: The ** operator has been disabled.
#
# Examples:
#
# power(2, 3) # 8
# power(10, 0) # 1
# power(-5, 3) # -125
# power(-4, 2) # 16

def power(base, exponent)
  return nil if exponent < 0
	return 1 if exponent == 0

	counter = 0
	arr = []

	until counter == exponent
		arr << base
		counter += 1
	end

	arr.reduce(:*)

end
