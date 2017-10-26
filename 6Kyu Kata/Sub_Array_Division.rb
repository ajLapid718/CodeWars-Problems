# In this Kata, you will be given an array of numbers and a number n, and your task will be to determine if any array elements, when summed (or taken individually), are divisible by n.

# For example:

# solve([1,3,4,7,6],9) = True, because 3 + 6 is divisible by 9; solve([1,2,3,4,5],10) = True for similar reasons.
# solve([8,5,3,9],7) = True), because 7 evenly divides 5 + 9, but solve([8,5,3],7) = False.

# More examples in the test cases.
# Good luck!

def solve(arr, n)
  amount_of_elements = arr.length

  amount_of_elements.times do |tally|
    verdict = arr.combination(tally + 1).to_a.any? { |a| a.reduce(:+) % n == 0 }
    return true if verdict == true
  end

  false
end
