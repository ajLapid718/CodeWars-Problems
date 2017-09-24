# Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum. For example, when n = 10:
#
# The square of the sum of the first ten natural numbers is:
#
# (1 + 2 + ... + 10)**2 = 55**2 = 3025
#
# The sum of the squares of first ten natural numbers is :
#
# 1**2 + 2**2 + ... + 10**2 = 385
#
# Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is 3025 - 385 = 2640.
#
# Example
#
# difference_of_squares(10)
# # => 2640

def difference_of_squares(n)
	sum_of_squares = (1..n).map { |natural_num| natural_num ** 2 }.reduce(:+)
	square_of_sum = (1..n).reduce(:+) ** 2

	square_of_sum - sum_of_squares
end
