# Your Job:
#
# Find the sum of the multiples of n i.e. less than m
#
# Keep in Mind:
#
# n and m are natural number
# note that the second argument m is excluded from the multiples
# Remember these:
#
# sumMul(2,9)    should return 20
# sumMul(3,13)   should return 30
# sumMul(4,123)  should return 1860
# sumMul(4,-7)   should return INVALID

def sum_mul(n, m)
  return "INVALID" if n <= 0 || m <= 0
  return "INVALID" if n >= m
  (n...m).select { |multiple| multiple % n == 0 }.reduce(:+)
end
