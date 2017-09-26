# You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
#
# Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.
#
# Same meaning: 1 == 1
#
# 1 != -1
#
# #Examples:
#
# [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
#
# """So as you can see sum of consecutives 1 is 1
# sum of 3 consecutives 4 is 12
# sum of 0... and sum of 2
# consecutives 3 is 6 ..."""
#
# [1,1,7,7,3] # should return [2,14,3]
# [-5,-5,7,7,12,0] # should return [-10,14,12,0]

def sum_consecutives(s)
  result = []
  counter = 1

  s.each_with_index do |current_num, idx|
    if (idx < s.length-1) && (current_num == s[idx+1])
      counter += 1
    else
      result << (current_num * counter)
      counter = 1
    end
  end

  result
end

# Another solution provided by another user, slightly refactored by me for better (personal) readability. This invokes the #slice_when method.

def sum_consecutives(s)
  s.slice_when { |num1, num2| num1 != num2 }.to_a.map { |group| group.reduce(:+) }
end
