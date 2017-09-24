# Sum of Pairs
#
# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
#
# sum_pairs([11, 3, 7, 5],         10)
# #              ^--^      3 + 7 = 10
# == [3, 7]
#
# sum_pairs([4, 3, 2, 3, 4],         6)
# #          ^-----^         4 + 2 = 6, indices: 0, 2 *
# #             ^-----^      3 + 3 = 6, indices: 1, 3
# #                ^-----^   2 + 4 = 6, indices: 2, 4
# #  * entire pair is earlier, and therefore is the correct answer
# == [4, 2]
#
# sum_pairs([0, 0, -2, 3], 2)
# #  there are no pairs of values that can be added to produce 2.
# == None/nil/undefined (Based on the language)
#
# sum_pairs([10, 5, 2, 3, 7, 5],         10)
# #              ^-----------^   5 + 5 = 10, indices: 1, 5
# #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# #  * entire pair is earlier, and therefore is the correct answer
# == [3, 7]
# Negative numbers and duplicate numbers can and will appear.
#
# NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

def sum_pairs(arr, target)
  hsh = {}

  for idx in (0...arr.length)
    other_piece = target - arr[idx]
    break if hsh.has_key?(other_piece)
    hsh[arr[idx]] = "#stubbed_out && #go_fish"
  end

  if arr.include?(other_piece)
    return [other_piece, arr[idx]]
  else
    return nil
  end

end

# Another Solution Provided By Codewars Users and Slightly Refactored By Me

def sum_pairs(arr, target)
  numbers_checked = {}
  
  arr.each do |num|
    return [target - num, num] if numbers_checked.has_key?(target - num)
    numbers_checked[num] = true
  end
  
  return nil
end