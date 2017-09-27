# Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.
#
# Examples:
#
# # returns test_controller
# to_underscore('TestController')
#
# # returns movies_and_books
# to_underscore('MoviesAndBooks')
#
# # returns app7_test
# to_underscore('App7Test')
#
# # returns "1"
# to_underscore(1)

def to_underscore(string)
  return string.to_s if string.is_a?(Integer)
  translation = []
  alphabet = ("a".."z").to_a

  string.chars.each do |element|
    if element == element.upcase && alphabet.include?(element.downcase)
      translation << "_"
      translation << element.downcase
    else
      translation << element
    end
  end
  translation.drop(1).join
end
