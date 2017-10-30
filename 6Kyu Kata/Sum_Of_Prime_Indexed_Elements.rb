# In this Kata, you will be trained on array indexing and basic prime number operations. Array indices are zero-based; this means that the first element of an array is at index 0.

# You will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

# To make this interesting, array lengths in random tests will have up to 5000 elements.

# Good luck!

# My solution

def sieve(arr)
  upper_bound = arr.length

  primes = (0..upper_bound).to_a
  primes[0] = nil
  primes[1] = nil

  primes.each do |current_num|
    next if current_num.nil?
    break if current_num > Math.sqrt(upper_bound)
    (current_num**2).step(upper_bound, current_num) { |interval| primes[interval] = nil }
  end

  primes.compact
end

def total(arr)
  return 0 if arr.empty?

  result = []
  primes = sieve(arr)

  arr.each_with_index do |num, idx|
    result << num if primes.include?(idx)
  end

  result.reduce(:+)
end
