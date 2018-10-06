# You take your son to the forest to see the monkeys.
# You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

# As a good parent, you will sit and count with him.
# Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

# For example, if n = 10:

# return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def monkey_count(n : Int32)
  output_arr = [] of Int32
  counter = 1

  while counter <= n
    output_arr.push(counter)
    counter += 1
  end
  
  return output_arr
end
