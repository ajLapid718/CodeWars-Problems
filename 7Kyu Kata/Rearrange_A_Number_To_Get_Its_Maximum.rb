# Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.
#
# maxRedigit(123); // returns 321

def max_redigit(num)
  return nil if num.to_s.length != 3
  
  num.to_s.chars.sort { |x, y| y <=> x }.join.to_i
end
