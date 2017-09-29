# Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.
#
# For instance:
#
# 'hello case'.camelcase => HelloCase
# 'camel case word'.camelcase => CamelCaseWord
# Don't forget to rate this kata! Thanks :)

class String
  def camelcase
    self.split(" ").map {|word| word.capitalize }.join("")
  end
end
