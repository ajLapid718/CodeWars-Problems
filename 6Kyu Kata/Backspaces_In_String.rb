# Assume '#' is like backspace in string. This means that string "a#bc#d" actually is "bd"
#
# "abc#d##c" is "ac"
#
# "abc##d######" is ""
#
# "######" is ""
#
# "" is ""
#
# Your task is to process string with '#' symbols

def clean_string(string)
  x = string.chars
  stack = []

  x.each_with_index do |el|
    stack << el
    if stack.last == "#"
      stack.pop(2)
    end
  end

  stack.join
end
