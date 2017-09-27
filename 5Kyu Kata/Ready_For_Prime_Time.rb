# We need prime numbers and we need them now!
#
# Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.
#
# For example:
#
# prime(11);
# Should return an array that looks like this:
#
# [2,3,5,7,11]

def prime(n)
  primes = (0..n).to_a
  primes[0] = nil
  primes[1] = nil

  primes.each do |current_num|
    next if current_num.nil?
    break if current_num > Math.sqrt(n)
    (current_num**2).step(n, current_num) { |current_interval| primes[current_interval] = nil }
  end

  primes.compact
end
