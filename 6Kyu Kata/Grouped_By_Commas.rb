Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 1000000000

Examples:
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"

# My solution
def solution(n)
  arr = []
  tally = 0

  n.to_s.chars.reverse.each_with_index do |char, idx|
    if tally % 3 == 0 && idx != 0
      arr << ","
      arr << char
    else
      arr << char
    end

    tally += 1
  end

  arr.reverse.join
end

# My solution refactored
def solution(n)
  proper_format = []
  digits_reversed = n.to_s.chars.reverse

  digits_reversed.each_with_index do |digit, idx|
    proper_format.push(",") if (idx > 0) && (idx % 3 == 0)
    proper_format.push(digit)
  end

  digits_reversed.reverse.join
end
