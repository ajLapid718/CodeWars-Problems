# Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer.

def lcm(*args)
  args.reduce(&:lcm)
end

## Without Ruby Magic and probably what the kata was aiming to test

def lcm(*args)
  return 0 if args.include?(0)
  target_lcm = 1

  loop do
    return target_lcm if args.all? { |nums| target_lcm % nums == 0 }
    target_lcm += 1
  end
end
