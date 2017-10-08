# Happy Holidays fellow Code Warriors!

# Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

# Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

# Sort the Gift Code

# Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

# Examples:

# sort_gift_code( 'abcdef' ) #=> returns 'abcdef'
# sort_gift_code( 'pqksuvy' ) #=> returns 'kpqsuvy'
# sort_gift_code( 'zyxwvutsrqponmlkjihgfedcba' ) #=> returns 'abcdefghijklmnopqrstuvwxyz'

# My solution

def sort_gift_code(code)
  code.chars.sort.join
end

# Another solution provided by a Codewars user

def sort_gift_code code
  return nil if code.nil?

  # In-place insertion sort with a worst case O(n^2) time complexity, and O(1) space
  1.upto(code.length - 1) do |i|
    value = code[i]
    j = i - 1

    while j >= 0 && code[j] > value
      code[j + 1] = code[j]
      j -= 1
    end

    code[j + 1] = value
  end

  return code
end
