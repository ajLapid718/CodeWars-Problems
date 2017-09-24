# A prime number is an integer greater than 1 that is only evenly divisible by itself and 1.
#
# Write your own Primes class with class method Primes.first(n) that returns an array of the first n prime numbers.
#
# For example:
#
# Primes.first(1)
# # => [2]
#
# Primes.first(2)
# # => [2, 3]
#
# Primes.first(5)
# # => [2, 3, 5, 7, 11]
#
# Primes.first(20).last(5)
# # => [53, 59, 61, 67, 71]
# Note: An inefficient algorithm will time out. Memoization may help.
#
# More info on primes here.

class Primes
	def self.first(num)
		return [2] if num == 1
		Primes.sieve(num*13).take(num)
	end

  def self.sieve(upper_bound)
    primes = (0..upper_bound).to_a
    primes[0] = nil
    primes[1] = nil

    primes.each do |current_num|
      next if current_num == nil
      break if current_num > Math.sqrt(upper_bound)
      (current_num**2).step(upper_bound, current_num) { |interval_of_current_num| primes[interval_of_current_num] = nil }
    end

    primes.compact
  end
end
