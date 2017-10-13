# Return the Nth Even Number

# nthEven(1) //=> 0, the first even number is 0
# nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

# nthEven(100) //=> 198
# nthEven(1298734) //=> 2597466
# Hint: Think Math

# My solution

def nth_even(n)
  (n*2) - (2)
end

# Alternatively

def nth_even(n)
  target = 0
  counter = 1

  until counter >= n
    target += 2
    counter += 1
  end

  target
end
