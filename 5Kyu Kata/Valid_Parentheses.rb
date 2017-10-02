# Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.
#
# Examples:
# validParentheses( "()" ) => returns true
# validParentheses( ")(()))" ) => returns false
# validParentheses( "(" ) => returns false
# validParentheses( "(())((()())())" ) => returns true
#
# Constraints:
# 0 <= input.length <= 100
# Along with opening (() and closing ()) parenthesis, input can contain any valid ASCII characters.
#
# Note: In the JavaScript and Go version of this Kata, input will only contain opening and closing parenthesis and will not be an empty string.

def valid_parentheses(string)
  stack = []
  braces = { "(" => ")" }

  string.chars.each do |brace|
    if braces.has_key?(brace)
      stack << brace
    end
    if (braces.key(brace)) && (braces.key(brace) != stack.pop)
      return false
    end
  end

  stack.empty?
end

# Another solution provided by a Codewars user

def valid_parentheses(string)
  opened = 0

  string.chars.each do |par|
    opened += 1 if par == "("
    opened -= 1 if par == ")"
    return false if opened < 0
  end

  opened == 0
end
