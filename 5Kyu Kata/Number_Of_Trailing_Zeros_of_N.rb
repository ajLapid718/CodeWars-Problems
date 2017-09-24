# Write a program that will calculate the number of trailing zeros in a factorial of a given number.
#
# http://mathworld.wolfram.com/Factorial.html
#
# N! = 1 * 2 * 3 * 4 ... N
#
# zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
# that has 2 trailing zeros 4790016(00)
# Be careful 1000! has length of 2568 digital numbers.

def zeros(n)
    counter = 0
    while n > 0
        counter = counter + (n / 5)
        n = n / 5
    end
    return counter
end

# Unoptimized/Inefficient Solution That Timed Out

def zeros(num)
	factorial(num).to_s.reverse.chars.take_while { |num| num == "0" }.length
end

def factorial(n)
  return nil if n < 0
  return 1 if n == 0
  return 1 if n == 1
  facts = factorial(n-1) * (n)
end
