# Implement a function to calculate the sum of the numerical values in a nested list. For example :

# sum_nested([1, [2, [3, [4]]]]) -> 10

def sum_nested(lst)
  sum = 0

  lst.each do |element|
    if element.is_a?(Array)
      sum += sum_nested(element)
    else
      sum += element
    end
  end

  sum
end
