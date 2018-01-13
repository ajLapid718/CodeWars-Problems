# The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

# Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

# If the sum cannot be calculated, 0 should be returned.

def magic_sum(numbers)
  return 0 if numbers.nil?
  return 0 unless numbers.all? { |element| element.is_a?(Numeric) }

  sum = 0
  numbers.each { |num| sum += num if num % 2 != 0 && num.to_s.include?("3") }
  sum
end
