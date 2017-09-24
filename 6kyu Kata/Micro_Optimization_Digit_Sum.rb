# You wrote a program that can calculate the sum of all the digits of a non-negative integer.
#
# However, it's not fast enough. Can you make it faster?

def digit_sum(n)
  n.to_s.chars.map(&:to_i).reduce(:+)
end
