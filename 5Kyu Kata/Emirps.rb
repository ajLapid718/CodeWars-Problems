# If you reverse the word emirp you will have the word prime. That idea is related with the purpose of this kata. We should select all the primes that when reversed are a different prime. The palindromic primes should be discarded. For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, so 13 and 17 are emirps But see the cases, 757, 787, 797, these are palindromic primes, with the special property that primes coincides with the reversed ones, so they do not enter in the sequence.

# You should create a function find_emirp(), that receives one argument n, as an upper limit and the output should be an array with this structure:

# [number of emirps bellow n, largest emirp smaller than n, sum of all the emirps of the sequence bellow n]

# Let's some examples:

# find_emirp(10) -------> [0, 0, 0] # No emirps for this value of n

# find_emirp(50) -------> [4, 37, 98] # there are 4 emirps [13, 17, 31, 37]), the max. value is 37, and the sum = 13 + 17 + 31 + 37 = 98

# find_emirp(100) ------> [8, 97, 418] # there are 8 emirps [13, 17, 31, 37, 71, 73, 79, 97], 97 is the highest emirp for this range and the sum of all these 8 emirp primes is 418.

# Happy coding!!
# (Advise: Do not use a primality test. It will make your code very slow. Create a set of primes using a prime generator or a range of primes producer. Remember that search in a set is faster that in a sorted list or array) (The emirps sequence is registered in OEIS as A006567)

# My solution

def find_emirp(n)
  primes = find_emirp_helper(n)
  x = primes.keep_if { |y| y.to_s != y.to_s.reverse }
  x.keep_if { |emirp| is_prime?(emirp.to_s.reverse.to_i) }
  [x.count, x[-1], x.reduce(:+)]
end

def find_emirp_helper(upper_bound)
  primes = (0..upper_bound).to_a
  primes[0] = nil
  primes[1] = nil

  primes.each do |current_num|
    next if current_num == nil
    break if current_num > Math.sqrt(upper_bound)
    (current_num**2).step(upper_bound, current_num) { |interval| primes[interval] = nil }
  end

  primes.compact
end

def is_prime?(int)
  (1..Math.sqrt(int)).select { |i| int % i == 0 }.count == 1
end

# Another solution provided by a Codewars user

require 'prime'

def find_emirp(n)
  primes = Prime.first n
  primes.reject! { |prime| prime > n } # primes up to n
  primes.reject! { |prime| prime.to_s == prime.to_s.reverse } # rm palindromes
  emirps = primes.select { |prime| Prime.prime?(prime.to_s.reverse.to_i) }
  [emirps.length, emirps.last, emirps.reduce(:+)]
end

# Another solution provided by another Codewars user

def find_emirp(n)
  result = []
  primes = []
  (2..n).each do |i|
    next if i == i.to_s.reverse.to_i
    primes << i if is_prime?(i) && is_prime?(i.to_s.reverse.to_i)
  end

  result << primes.count
  result << primes.max
  result << primes.inject(:+)
end

def is_prime?(n)
  return false if n < 2
  (2..(n ** 0.5)).each do |i|
    return false if n % i == 0
  end
  true
end

# One more

require 'prime'

def find_emirp(n)
  res = []

  Prime.each(n) do |prime|
    emirp = prime.to_s.reverse.to_i
    res << prime if Prime.prime?(emirp) && (emirp != prime)
  end

  [res.count,res.max,res.reduce(:+)]
end
