# Your task it to return true if the fractional part (rounded to 1 digit) of the result (a / b) exists, more than 0 and is multiple of n. Otherwise return false. (For Python return True or False)

# All arguments are positive digital numbers.

# Rounding works like toFixed() method. (if more than...5 rounds up)

# Find examples below:

# isMultiple(5, 2, 3) -> false // 2.5 -> 5 is not multiple of 3
# isMultiple(5, 3, 4) -> false // 1.7 -> 7 is not multiple of 4
# isMultiple(5, 4, 3) -> true // 1.3 -> 3 is multiple of 3
# isMultiple(666, 665, 2) -> false // 1.0 -> return false

def isMultiple(a, b, n)
  fractional_part = (a.to_f/b.to_f).round(1).to_s[-1].to_i
  return false if fractional_part <= 0
  fractional_part % n == 0 ? true : false
end
