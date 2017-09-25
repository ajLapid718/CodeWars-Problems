# Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the maximum value.
#
# The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:
#
# 0 1 1 2 3 5 8 13 21...
#
# For example:
#
# eve_fib(0)==0
# eve_fib(33)==10
# eve_fib(25997544)==19544084

def even_fib(m)
  arr = [0,1]

  loop do
    break if arr[-2] + arr[-1] >= m
    arr << arr[-2] + arr[-1]
  end

  arr.select { |num| num.even? }.reduce(:+)
end
