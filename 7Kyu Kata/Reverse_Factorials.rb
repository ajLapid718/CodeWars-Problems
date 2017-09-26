# I'm sure you're familiar with factorials – that is, the product of an integer and all the integers below it.
#
# For example, 5! = 120, as 5*4*3*2*1 = 120.
#
# Your challenge is to create a function that takes any number and returns the number that it is a factorial of. So, your function would take in 120 and return 5!.
#
# Of course, not every number is a factorial of another. In this case, your function would return 'None'.
#
# So, 120 will return 5! 24 will return 4! 150 will return 'None'.

def reverse_factorial(num)
  target = 1

  while helper(target) < num
    target += 1
  end

  if helper(target) > num
    return "None"
  else
    target.to_s << "!"
  end
end

def helper(n)
  return 1 if n == 0
  return n if n == 1
  n *= helper(n-1)
end

# Alternatively

def reverse_factorial(num)
  product = 1
  target = 1

  while product < num
    target += 1
    product *= target
  end

  if product == num
    return target.to_s << "!"
  else
    return "None"
  end
end
