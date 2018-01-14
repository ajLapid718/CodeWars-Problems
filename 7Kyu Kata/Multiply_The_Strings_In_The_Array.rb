# You received an array with two strings. Create a function that will return their product as a string. E.g.

# arrMultiply(['9','6']) should return '54'

def arrMultiply(arr)
  arr.map(&:to_i).reduce(:*).to_s
end
