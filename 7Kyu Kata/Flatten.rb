# Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
#
# flatten [1,2,3] # => [1,2,3]
# flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]
# flatten [[[1,2,3]]] # => [[1,2,3]]

def flatten(array)
  array.flatten(1)
end

# Solution w/o the convenience of Ruby magic

def flatten(array)
  container = []

  array.each do |element|
    if element.is_a?(Array)
      container += element
    else
      container << element
    end
  end

  container
end
