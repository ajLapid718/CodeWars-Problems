# Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
#
#   sumDigits 10    # Returns 1
#   sumDigits 99    # Returns 18
#   sumDigits -32   # Returns 5
# Let's assume that all numbers in the input will be integer values.

def sumDigits(number)
  number.to_s.chars.map(&:to_i).reduce { |accum, n| accum.abs + n.abs }
end

# Passing in the block which invokes #abs on the accumulator and next number was unnecessary on my part.
# The #chars call turned the negative sign into a separate string, and any non-integer-containing-string turns into 0 with the #to_i method.
# In other words, below would have got the job done

def sumDigits(number)
  number.to_s.chars.map(&:to_i).reduce
end
