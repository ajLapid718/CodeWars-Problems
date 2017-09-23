# Welcome. In this kata, you are asked to square every digit of a number.
#
# For example, if we run 9119 through the function, 811181 will come out.
#
# Note: The function accepts an integer and returns an integer

def square_digits(num)
    x = num.to_s.chars.map do |string_num|
      string_num.to_i ** 2
    end
  x.join("").to_i
end
