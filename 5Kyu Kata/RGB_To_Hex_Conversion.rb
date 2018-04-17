=begin

The rgb() method is incomplete.
Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) # returns FFFFFF
rgb(255, 255, 300) # returns FFFFFF
rgb(0,0,0) # returns 000000
rgb(148, 0, 211) # returns 9400D3

=end

def rgb(r, g, b)
  "#{convert(r)}#{convert(g)}#{convert(b)}"
end

def convert(val)
  if val < 0
    return "00"
  elsif val > 255
    return "FF"
  else
    return val.to_s(16).rjust(2, "0").upcase
  end
end
