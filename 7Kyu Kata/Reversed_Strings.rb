# Complete the solution so that it reverses the string value passed into it.
#
# solution('world') # returns 'dlrow'

def solution(str)
  str.reverse
end

# Alternatively

def solution(str)
  reversed_string = ""

  str.chars.each_index do |idx|
    reversed_string << str[(idx+1) * (-1)]
  end

  reversed_string = ""
end
