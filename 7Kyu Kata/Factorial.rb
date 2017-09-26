# Yor task is to write function factorial
#
# https://en.wikipedia.org/wiki/Factorial

# Test.describe("Basic tests") do
# Test.assert_equals(factorial(0), 1)
# Test.assert_equals(factorial(1), 1)
# Test.assert_equals(factorial(4), 24)
# Test.assert_equals(factorial(7), 5040)
# Test.assert_equals(factorial(17), 355687428096000)
# end

def factorial(n)
  return 1 if n == 0
  return n if n == 1
  n *= factorial(n-1)
end
