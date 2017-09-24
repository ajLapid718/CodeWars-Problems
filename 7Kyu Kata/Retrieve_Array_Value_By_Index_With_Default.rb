# Complete the solution. It should try to retrieve the value of the array at the index provided. If the index is out of the array's max bounds then it should return the default value instead.
#
# Example:
#
# data = ['a', 'b', 'c']
# solution(data, 1, 'd') # should == 'b'
# solution(data, 5, 'd') # should == 'd'
#
# # negative values work as long as they aren't out of the length bounds
# solution(data, -1, 'd') # should == 'c'
# solution(data, -5, 'd') # should == 'd'

def solution(items, index, d=default_value)
  if index < items.length-1 && index >= 0
    items[index]
  elsif (index < 0) && (index >= items.length * -1)
    items[index]
  else
    d
  end
end

# Cleaner solution provided by Codewars users

def solution(items, index, default_value)
  items.fetch(index, default_value)
end
