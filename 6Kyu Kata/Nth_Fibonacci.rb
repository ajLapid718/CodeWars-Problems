# I love Fibonacci numbers in general, but I must admit I love some more than others.
#
# I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
#
# For example:
#
# nth_fibonacci(4) == 2
# Because 2 is the 4th number in the Fibonacci Sequence.
#
# For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

def nth_fibonacci(n)
  return 0 if n == 1
  return 1 if n == 2

  arr = [0,1]

  until arr.length == n
    arr << arr[-2] + arr[-1]
  end

  arr.last
end
