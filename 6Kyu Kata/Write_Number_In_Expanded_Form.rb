# Write Number in Expanded Form
#
# You will be given a number and you will need to return it as a string in Expanded Form. For example:
#
# expanded_form(12); # Should return '10 + 2'
# expanded_form(42); # Should return '40 + 2'
# expanded_form(70304); # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.
#
# If you liked this kata, check out part 2!!

def expanded_form(num)
  digits_column = 1
  expanded_version = []

  num.to_s.reverse.chars.each do |digit|
    if digit != "0"
      expanded_version << digit.to_i * digits_column
    end
    digits_column *= 10
  end

  expanded_version.reverse.join(" + ")
end

# Part II of the Kata is only available in JavaScript && Python, but here is my solution written in Ruby

# Write Number in Expanded Form - Part 2
#
# This is version 2 of my 'Write Number in Exanded Form' Kata.
#
# You will be given a number and you will need to return it as a string in Expanded Form. For example:
#
# expandedForm(1.24); // should return '1 + 2/10 + 4/100'
# expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
# expandedForm(0.04); // should return '4/100'

def expandedForm(num)
  digits_column = 1
  expanded_version = []

  num.to_s.chars.each_with_index do |digit, idx|
  	next if digit == "."

  	if idx == 0
  		expanded_version << digit
  	elsif digit != "0"
      expanded_version << (digit) + "/#{digits_column}"
    end

    digits_column *= 10
  end

  expanded_version.tap { |op| op.shift if expanded_version[0] == "0" }.join(" + ")
end
